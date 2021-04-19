---
title: Using Eloquent to Relate Data in Laravel
description: It is very common for data to be related to other data in the database. Eloquent is helpful here because it sits on top of our database and helps us easily manage these relationships. This saves us from having to do unnecessary work. And when your database starts getting complicated, having these tasks taken care of for you is a luxury.
createdAt: '2021-04-19'
tags: ['laravel', 'eloquent']
---

Laravel's Eloquent is a great tool that makes managing related data much easier. It is very common for data to be related to other data in the database. For instance, if we were building a to-do list app we might have tasks and subtasks. Every subtask would need to be related to its parent task. When we insert and query data about our tasks and subtasks we would most likely be dealing with both because of the relationship between the two.

Eloquent is helpful here because it sits on top of our database and helps us easily manage these relationships. For instance, we can easily query a task and get its related subtasks as well. When we delete a task, we can make sure that the task's subtasks are removed from the database. And if we have already queried a subtask, we can get its parent task. This might not sound like a big deal, but it does save us from having to do unnecessary work. And when your database starts getting complicated, having these tasks taken care of for you is a luxury.

In order to demonstrate how to set up relational data we are going to start a fresh Laravel project. This project is going to be a collection of 90's country music artists and their songs. What we need is a database with three tables: artists, albums, and tracks. These tables are all going to be related to one another. An artist has many albums. Tracks belong to an album. These are the rules we are going to set when we build our relational data.

First let's set up our artists. We will make a migration that creates the artists table by running this command in the terminal.

```
php artisan make:model Artist --migration
```

This command creates a **model** called Artist.php which is where we set up our relationships to the Artist. It will also create a migration with some scaffolding that will already be filled with the artists table name.

Next, we need to add some fields to the artists table. We only need to store the artist name so this will be a very simple table.

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArtistsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('artists', function (Blueprint $table) {
			$table->id();
			$table->string('name');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('artists');
	}
}
```

Since this is the only table so far we can't really do anything else. Let's go ahead and set up the albums table.

```
php artisan make:model Album --migration
```

The albums table will have a title, release date, and an artist id. The artist id will allow us to relate each album to an artist, and Eloquent is going to use that when we set up the relationship in our model. Here is what our migration looks like:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlbumsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('albums', function (Blueprint $table) {
            $table->id();
			$table->string('title');
			$table->date('release_date');
			$table->foreignId('artist_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('albums');
    }
}
```

In this migration we set up the `artist_id` as a foreign key which references the `id` on the artists table. This will ensure that an album will always be linked to an artist. We also add `onDelete('cascade')` to this column to ensure that when an artist is deleted, the related albums will also be deleted. This means that we won't have albums left in our database that are not related to an artist.

Now we need to do a few things in our models to let Eloquent know that this relationship between artists and albums exists. This relationship is **one-to-many**. An artist can have many albums but an album only belongs to one artist. In our model we set this up. So in `Artist.php` we define a function that tells Laravel that an artist has many albums.

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;

    public function albums()
    {
        return $this->hasMany(Album::class);
    }
}
```

Once this is defined we can use the power of Eloquent to retrieve any and all albums that belong to an artist. Elsewhere in our code (probably in a controller), we can retrieve an artist from the database and have access to its albums anywhere.

```php
// get an artist
$artist = Artist::find($id);

// get the artist's albums
$artist->albums;

// eager load an artist and albums
$artistWithAlbums = Artist::where('id', $id)->with('albums')->first();
```

Eloquent returns a Laravel collection which is basically a better version of PHP arrays that works with an object syntax. The results of the above statements will be collections.

One thing that may be confusing about the statements above are the differences in syntax. When I was learning Laravel I frequently got confused about what results I was getting when I made Eloquent queries. The first statement is a reference to the `Artist` model and the static method `find()` that is available to models. The `Artist` model is an **extension** of Laravel's `Model` class, which is where methods such as `find()` and `where()` are defined. Additionally, you can chain extra method calls using the `->` operator. In the third statement we have a `where()` called statically, which allows us to narrow down our results by the artist id. To that we chain a `with()` call which eager loads the albums relationship. Finally we call `first()` which returns the first result that matches the criteria. By doing this we ensure we only get one artist.

It also may be confusing that in the second statement the albums are referenced as a property of `$artist` when they seemingly weren't retrieved from the database. The first statement retrieves only an artist but not the related albums. However, you can do this without having to fetch the related albums in your query. This is part of the Eloquent magic, and you can do it anywhere. You can even do it in a blade template and the data will be provided for you.

What if we needed to retrieve the data the opposite way, by getting the artist of an already retrieved album? First, we have to define that relationship in `Album.php`.

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }
}
```

Now if we have an album we will also have access to the artist for that album as well. Notice that this function is called `artist()` singular and we defined the albums relationship as `albums()` plural. This detail is important. If we are only getting a single row of data then the method name should indicate that. If we expect multiple rows then the method should be named in plural form.

```php
$album = Album::find($id);

$album->artist;

$album->artist->name; // "Shania Twain"
```

Eloquent also provides several methods for inserting, updating and deleting related data as well but I'm not going to go into them all here. Instead I will refer you to <a href="https://laravel.com/docs/8.x/eloquent#inserting-and-updating-models">Laravel's documentation</a>.

So far we have only talked about one type of relationship, one-to-many. This one is very common but a more complicated relationship exists that we also need to talk about - many-to-many. In our 90's country music catalog example let's say we have a tracks table but we also want to keep up with what instruments are played on each track. This means that we need an instruments table and a way to relate instruments to tracks. Here a track has many instruments but additionally an instrument can be used in multiple tracks.

To set this up we will need more migrations and models. We need a Track model and an Intrument model. Here are the migrations for the tracks table and instruments table:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTracksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tracks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->integer('track_number');
            $table->integer('length');
            $table->foreignId('album_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tracks');
    }
}
```

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstrumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instruments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('instruments');
    }
}
```

You may be wondering where the foreign id fields are in these migrations, since a relationship exists between them. That approach would not work here. If we had an instrument in the instruments table named 'guitar' and a `track_id` field, then we could only attach 'guitar' to one track. But the guitar is used in a lot of tracks, so we need to set up our foreign ids differently.

To solve this we have to create a **pivot table**. A pivot table is a table that connects two other tables by linking their ids together. In this case we need to create a pivot table with a `track_id` column and an `instrument_id` column. This will allow us to link many different tracks to many different instruments. We can also attach more columns to a pivot table if we need extra data to store about that relationship. Let's make a `has_solo` boolean column for tracks where a particular instrument has a solo.

```
php artisan make:migration create_instrument_track_table
```

Pivot tables are named according to the two tables that they connect. The order of the tables are determined alphabetically. In this case, instrument comes before track in the alphabet so by convention the name of this pivot table would be `instrument_track`. Notice that the connecting tables' names are both singular. This is by convention as well. Here is what our completed migration file will look like:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstrumentTrackTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instrument_track', function (Blueprint $table) {
            $table->id();
            $table->foreignId('instrument_id')->constrained()->onDelete('cascade');
            $table->foreignId('track_id')->constrained()->onDelete('cascade');
            $table->boolean('has_solo')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('instrument_track');
    }
}
```

We don't need to create a model to represent this table. We do need to set up the relationships in `Instrument.php` and `Track.php`.

In `Instrument.php`:

```php
public function tracks()
{
	return $this->belongsToMany(Instrument::class);
}
```

In `Track.php`:

```php
public function instruments()
{
	return $this->belongsToMany(Track::class)
}
```

Once these relationships have been setup we can use Eloquent to manipulate and retrieve the related data. Just like with our artists and albums, we have access to these relationships as properties.

```php
$track = Track::find($trackId);
$track->instruments; // all instruments used on a track

$instrument = Instrument::find($intrumentId);
$instrument->tracks; // all tracks that feature a particular instrument
```

What about our `has_solo` column located on the pivot table? How do we access that? In our models we need to add a `->withPivot()` call in the relationship definition.

```php
public function instruments()
{
	return $this->belongsToMany(Track::class)->withPivot('has_solo');
}
```

Once this is defined we can access the pivot table using the `pivot` attribute which is available to a retrieved Track or Instrument.

```php
$track = Track::find($trackId);

foreach ($track->instrument as $instrument) {
	$instrument->pivot->has_solo;
}
```

Eloquent is great and really saves you a lot of extra work when having to manage these relationships. This post explains the essentials of using Eloquent and setting up relational data but I would refer you once again to <a href="https://laravel.com/docs/8.x/eloquent-relationships">the documentation</a> when you are ready to do more. This is a guide that I wish I had when I was starting out because I remember stumbling a lot when trying to figure out how Eloquent worked. Hopefully this will clear things up and help you get through anything that you get stuck on.
