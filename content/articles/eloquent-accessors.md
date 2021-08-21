---
title: Computed Fields Using Eloquent Accessors
description: Learn how to use accessors to create computed database fields, which are not stored in the database but instead calculated when records are retrieved from the database.
createdAt: '2021-08-21'
tags: ['laravel', 'eloquent', 'php']
---

Laravel's accessors and mutators are really useful features of the Eloquent ORM. They allow you to manipulate data as it's going in or coming out of a database. This means you don't have to, say, manually convert a date to another format every time after retrieving it from the database. You can write an accessor and it's done every time and available to you as any other model property.

Until recently I was not aware that you can also use accessors to create computed values. A computed value is not stored in the database, but instead it is created when a record is retrieved from the database. It is created based on two or more stored values. For example, if you are storing a user's first and last name as separate fields in the database then you can create an accessor for the full name which concatenates the first and last name. It can then be accessed as a property of the model just like any other field of the corresponding table.

Computed values can have all kinds of uses. Another example is finding the area of a triangle. The area of a triangle is the base multiplied by the height divided by two. Let's say we have a triangles table that has a field for base and a field for height. It is not necessary to store the area as a database field. Instead, we can compute the area from the base and height fields which are stored.

This is accomplished by writing the following method in the Triangle model:

```php
class Triangle extends Model
{
    function getAreaAttribute()
    {
        return $this->height * $this->base / 2;
    }
}
```

Now, whenever we retrieve triangles, they will have an area property which we can display or use in other calculations.

```php
$triangle = Triangle::find(1);

var_dump($triangle->base);		// int(18)
var_dump($triangle->height); 	// int(15)
var_dump($triangle->area); 		// int(135)
```

One advantage of computing values is that we don't need to store the triangle's area as a field in the database. We only need the base and the height, meaning we keep the table smaller and we don't need to worry about the values getting incorrectly out of sync.

Another advantage is it makes the rest of our code more DRY. We don't have to write the logic for computing the area of triangles in other parts of our application, whether that is in a controller, blade view, or frontend framework. The process is already done when triangles are retrieved from the database and all we have to do elsewhere is access the property.

Keep in mind that we can't use the accessor in database queries. So if you ever need to apply a `where` clause based on the accessor then you would get an error. For our triangles, we would not be able to do something like this:

```php
Triangle::where('area', '>', 10)->get();
```

So if it is important to be able to query based on the accessor field, it would probably be better to try another approach.

Accessors are great. I am really surprised I've been a Laravel developer for five years without using them and I wish I became aware of them sooner. I can easily predict they will make my life a lot easier very often in the future.
