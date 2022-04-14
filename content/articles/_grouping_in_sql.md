---
title: Grouping and Aggregates in SQL
description: Learn how to use the group by clause to combine query results into groups. This can be used to report useful statistics on the data in your database.
createdAt: '2022-04-14'
tags: ['sql', 'mysql', 'postgresql']
---

One common and useful feature in SQL is grouping. Grouping lets you combine query results into divisions. This allows you to grab useful statistics based on each division rather than on each individual record. If you find yourself needing to combine several records and return a result such as the sum or average, you will want to use grouping.

Let's say we have a database with an expenses table. This table stores a name, date, and amount for various expenses. For our application we need to return some useful statistics about these expenses. We want to know the total amount paid for all expenses, the average amount, the highest amount, and the lowest amount.

We can do this using aggregate functions. These functions take a set of values and return one value as the result. Functions such as `count()`, `sum()`, and `max()` are aggregate functions. They will easily allow us to get the results that we need for our expenses query.

```sql
select
	sum(amount) as total,
	avg(amount) as average,
	min(amount) as min,
	max(amount) as max
from expenses;
```

| total   | average   | min | max    |
| ------- | --------- | --- | ------ |
| 4999957 | 6321.0582 | 75  | 486010 |

**_If you are wondering about the formatting of these results, I typically store currency amounts as integers in the database. This makes it easier to perform calculations. When I need to display these values I divide them by 100 to show the correctly formatted amount._**

Note that in these results we are only getting **one row** returned in spite of using every record in the database for these calculations. That's because aggregate functions only return one value for the set of data that they are given. In each of these functions we pass in the name of the column to perform the calculations on. By doing that we tell SQL to use every single row in that column to give us our result.

The beauty of this is we were able to get some very useful information on our data without having to do much work to get it. We just tell SQL what we want and it goes and grabs it for us. Developers who don't know about aggregates would probably try to grab every record in the database and then perform all of these calculations in their own programming language. That could be a pretty expensive and complicated operation, especially compared to the simple query we wrote above.

### <a href="#breaking-results-into-groups" id="breaking-results-into-groups">Breaking Results Into Groups</a>

So we are happy that we can get the average, total, min, and max of all of the expenses in the database. But we want to take it a little bit further. Now we want to do the same thing, but we want to break the results down by the year. The expenses table does have a date field. We can use that with a `group by` clause to group the results the way we want.

```sql
select
	year(date) as year,
	sum(amount) as total,
	avg(amount) as average,
	min(amount) as min,
	max(amount) as max
from expenses
group by year(date);
```

| year | total   | average   | min | max    |
| ---- | ------- | --------- | --- | ------ |
| 2021 | 3755363 | 6086.4878 | 75  | 486010 |
| 2022 | 1244594 | 7152.8391 | 99  | 146678 |

Now what we have is the same thing as in our previous query but broken down into years. This is only one example but you can take grouping a lot further. If we had a categories table and a category_id foreign key in our expenses table, we could <a href="https://www.mattbenton.io/posts/_basic_joins" target="_blank" rel="noreferrer">join</a> expenses and categories, grouping our expenses by category. If we wanted to, we could specify multiple fields in our group by clause, grouping first by category then by the year. We could effectively see all of our aggregates by category and by year, with one query.

### <a href="#common-errors" id="common-errors">Common Errors</a>

One common mistake that people make when grouping is to accidentally put a nonaggregated column in their select clause. What that means is a selected column can't be compressed down into the groups specified by the `group by` clause. This can be confusing so let's look at another example.

I am going to simplify the query above where we grouped our results by year but this time I am going try to select the name field.

```sql
select
	name,
	year(date) as year,
	sum(amount) as total
from expenses
group by year(date);
```

When I run that query I get an error:

```
Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'example_db.expenses.name' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by
```

This error message can be difficult to understand if you don't know what SQL is actually trying to do with this query. Essentially we are trying to return a set of years based on the date column in this table. So SQL is able to take all of the expenses and crunch them down into every possible year. But we are also asking the database to give us the expense names after all the expenses have been crunched down. We are talking about several expenses all with different names, so it is not possible to return all of those names when there can only be one per group.

Consider the `sum(amount)` column that we are selecting. This select clause works because the aggregate function returns a single value for each grouping. The amounts in each record can be crunched down into a sum that is given for the group.

If we actually did want to get a grouping of unique expense names in the query, we could add it to the `group by` clause. This would break down the results into unique combinations of the year and the name.

### <a href="#filtering-groups-with-having" id="filtering-groups-with-having">Filtering Groups With Having</a>

We can apply filters to groups to remove results that we don't want. This is done by using the `having` clause. Think of it similarly to using a `where` clause except it applies to groups. You can group results together with `group by` and then apply filters to those groups using `having`.

This time we want to find out in which months more than $5,000 was spent on expenses.  If it was less than $5,000 then we don't want it included in our results. So in our query we will apply two groupings to the results. First group by the year then group by the month. Then we will filter out those groups based on the sum of the expenses within the group.

```sql
select
	month(date) as month,
	year(date) as year,
	sum(amount) as total
from expenses
group by year(date), month(date)
having sum(amount) >= 500000
order by month(date);
```

| month | year | total  |
| ----- | ---- | ------ |
| 5     | 2021 | 566985 |
| 8     | 2021 | 814602 |
| 12    | 2021 | 609107 |

Our results show that in three months the expenses total exceeded \$5,000. So you can see that the combination of `group by` and `having` can be used to grab really informative data.

Grouping in SQL can be a very powerful tool that can save you from having to do extra work. It has lots of applications and if you add it to your developer toolbox you will find it can save you a great deal of work in the right circumstances.
