export const projects = [
    {
        title: 'Bill Force One',
        subtitle:
            'A PHP application for monitoring when monthly bills are due and if they have been paid',
        descriptionParagraphs: [
            "I built this application to help me know how much money I was spending each month on recurring bills. It also helps me keep track of what is still due when I'm in the middle of the month. For instance, if it's the 21st of the month and I still have bills due, but I'm not sure how much money I have available to spend versus how much to reserve for bills, I can use Bill Force One to show me exactly how much I still owe for the month. Another added benefit is to simply keep up with due dates as well as whether a bill has autorecurring payments set up or not.",
        ],
        githubUrl: 'https://github.com/matt-benton/bill-force-one',
        images: [
            {
                src: '/img/projects/bill-force-one/bill-force-one.png',
                cloudinaryPublicId: 'mb-personal/bill-force-one-lg_lyzc4f',
            },
            {
                src: '/img/projects/bill-force-one/bill-force-one-mobile.jpeg',
                cloudinaryPublicId: 'mb-personal/bill-force-one-mobile_byojed',
            },
            {
                src: '/img/projects/bill-force-one/bill-force-one-landing.png',
                cloudinaryPublicId: 'mb-personal/bill-force-one-landing-lg_bg11x8',
            },
            {
                src: '/img/projects/bill-force-one/bill-force-one-edit.png',
                cloudinaryPublicId: 'mb-personal/bill-force-one-edit-lg_adea08',
            },
        ],
    },
    {
        title: 'Hi.Ed Student Portal',
        subtitle: 'A PHP application for tracking student grades and displaying NCAA eligibility',
        descriptionParagraphs: [
            'The Hi.Ed Student Portal was built starting in 2016 for Walker Enterprises as an application for tracking student grade progress and NCAA eligibility. It has interfaces for school system administrators, principals, and teachers to input and view student grades. For students and parents, a transcript is generated indicating student progress toward graduation and NCAA eligibility. Other features of this application include a marketplace for teachers to list and trade school supplies as well as a Virtual Life game that helps students manage bills and expenses.',
            'Bill Force One is mostly written in PHP with a little bit of JavaScript. Instead of using a CSS framework I designed the site and wrote all of the CSS myself.',
        ],
        siteUrl: 'https://hi-ed.walkerenterprisesala.com',
        images: [
            {
                src: '/img/projects/hi-ed/hi-ed.png',
                cloudinaryPublicId: 'mb-personal/hi-ed-lg_wm0z80',
            },
            {
                src: '/img/projects/hi-ed/hi-ed-house.png',
                cloudinaryPublicId: 'mb-personal/hi-ed-house-lg_lfarwz',
            },
            {
                src: '/img/projects/hi-ed/hi-ed-vl-profile.png',
                cloudinaryPublicId: 'mb-personal/hi-ed-vl-profile-lg_om9jau',
            },
            {
                src: '/img/projects/hi-ed/hi-ed-registration-checklist.png',
                cloudinaryPublicId: 'mb-personal/hi-ed-registration-checklist-lg_phirmr',
            },
        ],
    },
    {
        title: 'Screen Time Analyzer',
        subtitle: 'A PHP application for measuring and managing screen time',
        descriptionParagraphs: [
            'I built this application in early 2019 to track how I was spending my time while working in front of a computer screen. It is a small app that lets you define and track certain aspects of your computer use, including which monitor(s) you are looking at, what chair you are sitting in, how long you go without taking a break, and what possible symptoms may arise while doing so. You can also define activities such as blogging, coding, gaming, etc. and the app will keep track of how much time you spend on each activity. I still use this application every day to maintain healthy screen habits.',
            'On the technical side, I built the Screen Time Analyzer with the intention of setting up a simple, well-focused PHP app that would do its job well. I also wanted to focus on improving my understanding of PHP, Laravel, and database structures.',
        ],
        githubUrl: 'https://github.com/matt-benton/screen-time-analyzer',
        images: [
            {
                src: '/img/projects/screen-time-analyzer/screen-time-analyzer-dash.png',
                cloudinaryPublicId: 'mb-personal/screen-time-analyzer-dash-lg_fpve5u',
            },
            {
                src: '/img/projects/screen-time-analyzer/screen-time-analyzer-day.png',
                cloudinaryPublicId: 'mb-personal/screen-time-analyzer-day-lg_ppnqgf',
            },
            {
                src: '/img/projects/screen-time-analyzer/screen-time-analyzer-activities.png',
                cloudinaryPublicId: 'mb-personal/screen-time-analyzer-activities-lg_nktdd4',
            },
        ],
    },
    {
        title: 'Sprout',
        subtitle: 'An accounting and inventory system built for the produce industry',
        descriptionParagraphs: [
            'Sprout is an application built with Laravel and AngularJS that handles accounting, inventory, shipping, and reporting for produce companies. My contributions to this project have mainly included features for importing and exporting data in the form of CSV and XML files. My focus in this project has been to write modular, reusable, and tested features that can be duplicated and adapted to many similar scenarios. This includes object-oriented classes that are clean, simple, and reusable. It also includes Angular components that can be dropped into an HTML page and reused. This approach saves time and makes maintenance of the project a lot easier.',
        ],
        images: [
            {
                src: '/img/projects/sprout/sprout.png',
                cloudinaryPublicId: 'mb-personal/sprout-lg_uggydy',
            },
            {
                src: '/img/projects/sprout/sprout-delivery.png',
                cloudinaryPublicId: 'mb-personal/sprout-delivery-lg_n5lez4',
            },
        ],
    },
    {
        title: 'Squizzit',
        subtitle: 'An exquisite app for making, taking, and sharing quizzes.',
        descriptionParagraphs: [
            'This project is a single page app that I built using Vue.  It uses Vuex for state management as well as TailwindCSS for styling.  The intent for this project was to practice and improve my JavaScript skills.  With Squizzit, you can create quizzes and share them with people you know.  They can log in, take the quiz, and see their results.',
        ],
        githubUrl: 'https://github.com/matt-benton/squizzit',
        images: [
            {
                src: '/img/projects/squizzit/squizzit-landing.png',
                cloudinaryPublicId: 'mb-personal/squizzit-landing-lg_svo2jh',
            },
            {
                src: '/img/projects/squizzit/squizzit-edit.png',
                cloudinaryPublicId: 'mb-personal/squizzit-edit-lg_neukpy',
            },
            {
                src: '/img/projects/squizzit/squizzit-take.png',
                cloudinaryPublicId: 'mb-personal/squizzit-take-lg_gjfvrh',
            },
            {
                src: '/img/projects/squizzit/squizzit-results.png',
                cloudinaryPublicId: 'mb-personal/squizzit-results-lg_y7zzqu',
            },
        ],
    },
]
