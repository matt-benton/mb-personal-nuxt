---
title: Basic Joins in SQL
description: Joins is one of those programming concepts that took me a while to understand.  I have without a doubt written plenty of inefficient code because I didn't know how to get data out of the database the way I needed it.  As it turns out, joins are not a very complicated concept.  They are a little harder to understand than basic queries but once you understand what SQL is doing, they make a lot of sense.  Now that I have a better understanding of joins I use them all the time.
createdAt: '2021-12-28'
tags: ['sql', 'mysql']
---

Joins is one of those programming concepts that took me a while to understand. I have without a doubt written plenty of inefficient code because I didn't know how to get data out of the database the way I needed it. As it turns out, joins are not a very complicated concept. They are a little harder to understand than basic queries but once you understand what SQL is doing, they make a lot of sense. Now that I have a better understanding of joins I use them all the time.

## <a href="#what-is-a-join?" id="what-is-a-join?">What is a join?</a>

Joins do exactly what the word says - they join tables together. Sometimes the data you need will have to come from two or more tables. You could query them both separately and sort of merge them together in your code, but wouldn't it be nice if you could just combine those tables and get everything you need in one query? Well, you can do that with joins. Let's take a look at the syntax for joining a users table with a profiles table.

```sql
SELECT * FROM users JOIN profiles ON users.id = profiles.user_id;
```

This is an example of a basic join query. The `SELECT * FROM users` should look very familiar, it is just grabbing every column from the users table. Following that we `JOIN profiles` which means we are combining the profiles table with our users table. But to do that we need to provide a condition so that SQL will know how to match each row in users to each row in profiles. That is where we say `ON users.id = profiles.user_id`, meaning that wherever we find a user id that matches in each table we are going to return a row for that match. This query would return the following result.

| id  | email               | id  | first_name | last_name | age | user_id |
| --- | ------------------- | --- | ---------- | --------- | --- | ------- |
| 1   | johndoe@example.com | 1   | John       | Doe       | 25  | 1       |
| 2   | janedoe@example.com | 2   | Jane       | Doe       | 21  | 2       |
| 5   | mattbenton@hey.com  | 3   | Matt       | Benton    | 35  | 5       |

The columns id and email come from the users table. The columns id, first_name, last_name, age, and user_id come from the profiles table. The first thing you may notice is that the table has two id columns. We'll address that later but for now notice how the first id matches the user_id column. That is how SQL is able to join a row in the users table with the matching row in the profiles table, reflecting the `ON` condition we wrote above.

As you can see, joining these two tables lets us access data from both very easily. Using this join we could do things like show a list of user emails sorted by the user's age. We could return the emails of only people whose last name is "Doe". And that is only with these two very small tables. Depending on what data is stored in the table or what kind of relationship is setup (one-to-many or even many-to-many) the possibilities grow by a lot.

## <a href="#when-do-you-need-to-use-joins?" id="when-do-you-need-to-use-joins?">When do you need to use joins?</a>

In my experience I have found that if I ever need to write extra code _after_ I have gotten my query results to get the data setup right, then I probably should have used a join. When it feels like I had to do too much work to setup the data and it still feels awkward. Chances are I could have gotten what I needed with a simple join query. More specifically, here are some real scenarios where you would use joins.

### When you need records from one table with appended fields from another table

Like with the example query above, if you ever need all the rows from one table but you want to grab some extra data from an additional table to add on, you can use a join. We grabbed all users but to get the names and ages of those users we had to join profiles.

This also works in a one-to-many relationship. For example if we have an table of songs and a related table of artists they might be setup like this:

#### artists

- id
- name

#### songs

- id
- title
- artist_id

If we need to get a list of songs to display but also we want to include the name of the artist who wrote the song, we can use a join query.

```sql
SELECT * FROM songs JOIN artists ON songs.artist_id = artists.id;
```

This would return every song along with an extra column containing the name of the artist.

| id  | title                      | artist_id | id  | name         |
| --- | -------------------------- | --------- | --- | ------------ |
| 1   | You're Still The One       | 2         | 2   | Shania Twain |
| 2   | That Don't Impress Me Much | 2         | 2   | Shania Twain |
| 3   | Fly                        | 1         | 1   | Sugar Ray    |

### When you need all records from one table, filtered or sorted by a column from a different table

Sometimes the data you need is all in one table, but it has to be sorted or filtered by a field in another table. Let's say we want to list all the songs in our songs table but we want them to be sorted by the date of the artist's first album release. We could join the tables and then order the results by the column.

```sql
SELECT * FROM songs JOIN artists ON songs.artist_id = artists.id ORDER BY first_album_release;
```

Now the results would be a list of songs but in the order of the artist's first album release.

| id  | title                      | artist_id | id  | name         | first_album_release |
| --- | -------------------------- | --------- | --- | ------------ | ------------------- |
| 1   | You're Still The One       | 2         | 2   | Shania Twain | 1993-04-20          |
| 2   | That Don't Impress Me Much | 2         | 2   | Shania Twain | 1993-04-20          |
| 3   | Fly                        | 1         | 1   | Sugar Ray    | 1995-04-04          |

### When you want to get only records in one table that have associated records in another table

You may have a situation where you have something like a blog and you want to get all posts that have comments. You can't tell if a post has comments from the posts table alone, so you need to join comments to see only posts with comments. This is what an **inner join** does. I will go into the types of joins later but an inner join is what you get by default when you use the `JOIN` keyword. Basically, an inner join is a join that returns only the records in each table that match based on the `ON` condition. This is why join can help us return only posts with comments. Let's look at the query:

```sql
SELECT posts.id, posts.title, posts.body, COUNT(comments.id) FROM posts JOIN comments ON posts.id = comments.post_id GROUP BY posts.id;
```

This query will give us the id, title, and body for posts as well as the number of comments that each post has. If a post does not have any comments it is left out. The `GROUP BY` keywords group the results together so that we don't get a row for every comment. Instead it gives us one row per post and the `COUNT()` function gets us the number of comments for the post.

## <a href="#selecting-columns-and-handling-conflicts" id="selecting-columns-and-handling-conflicts">Selecting Columns and Handling Conflicts</a>

Up to this point I have been using `SELECT *` in many examples but I don't recommend doing this. Because we are joining two tables together we end up getting a lot of extra data and it can potentially slow the query down by a lot if we select columns that we don't need. Additionally, as we saw earlier, column names may duplicate which can cause errors or at least be confusing. If we get results with two id columns, which id are we selecting in our code?

So it is important to only select needed columns and if it is not clear what a column is supposed to be we can use the `AS` keyword to make results clearer. Let's refactor the first example where we retrieved users and profiles to make it more efficient and easier to understand. This time let's say we only want to get users' emails along with their age, and we still want to get the ids but we will use `AS` to specify which id is for which table. Our refactored query will look like this:

```sql
SELECT users.id AS user_id, users.email, profiles.age, profiles.id AS profile_id FROM users JOIN profiles ON users.id = profiles.user_id;
```

This will return the following results:

| user_id | email               | age | profile_id |
| ------- | ------------------- | --- | ---------- |
| 1       | johndoe@example.com | 25  | 1          |
| 2       | janedoe@example.com | 21  | 2          |
| 5       | mattbenton@hey.com  | 35  | 3          |

Here we have a much cleaner set of results which leaves out unnecessary columns and clearly indicates what each column is supposed to be.

## <a href="#types-of-joins" id="types-of-joins">Types of Joins</a>

### <a href="#inner-joins" id="inner-joins">Inner Joins</a>

Up to this point we have used the default join which is an inner join. This kind returns all results where a match is found based on the `ON` condition provided in the SQL statement.

### <a href="#outer-joins" id="outer-joins">Outer Joins</a>

But it is also possible to do outer joins. Remember our example where we returned only blog posts that had associated comments? That was using an inner join, but if we wanted to get even the posts that did not have comments, we could use an outer join. This would return every post regardless of whether it had comments or not. And in these results any column selected from the comments table would be null if that post did not have any comments.

### <a href="#left-and-right-joins" id="left-and-right-joins">Left and Right Joins</a>

Outer joins can be left or right. The previous example of posts and comments would be a left outer join. The reason for this is because the outer join favors the left side or left table in the query. You can think of joins as having a left table and a right table. The left table is the first one mentioned in the query and the right table is the other one, the one that is being joined to the first. When we specify a left join we mean "get everything from the first table that I mentioned, then add the second table onto that". Our posts query retrieves every post in the database because it is a left join and posts is the left table. It retrieves every comment because every comment has to be associated with a post, but if for some reason comments could exist without a post then the unassociated comments would be left out of the results.

We could also do the posts - comments query with a right join. The difference between this and the left join is we would be getting all of the rows from the right table - our comments table - and only posts which have comments that associate with them. In this query posts without comments would not be included in the results.

Many other joins exist but these are the most basic and common.

So if you happen to find yourself struggling to get data from your database in an elegant way, learn how to use joins and they should ease your troubles by a lot. It's so much nicer to get everything you need from one query rather than having to write some messy code to put everything together the way you need it.
