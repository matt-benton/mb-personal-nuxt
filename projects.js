export const projects = [
    {
        title: 'Flow Bill Tracking',
        subtitle: 'A web app for tracking monthly and annually recurring bills',
        descriptionParagraphs: [
            'Flow Bill Tracking is a web application for helping people keep up with their bills. Users can store all of their recurring expenses and track if they have been paid yet or not.  In addition, Flow helps keep up with the total amount of spending from month to month.  It also tracks how much is still owed after some bills have been paid.',
            'Users of Flow should find they have a better understanding of their money flow, from due dates to amounts to whether or not a bill is automatically deducted from their bank account.',
            'I built Flow using Laravel and Vue.  I designed and styled it using plain CSS.',
        ],
        links: [
            {
                url: 'https://flowbilltracking.com',
                text: 'Visit Site',
            },
        ],
        images: [
            {
                src: '/img/projects/flow-bill-tracking/flow_bill_tracking_landing.png',
                cloudinaryPublicId: 'mb-personal/flow-landing-page_lh95wg.png',
            },
            {
                src: '/img/projects/flow-bill-tracking/flow_bill_tracking_bills.png',
                cloudinaryPublicId: 'mb-personal/flow_bill_tracking_bills',
            },
            {
                src: '/img/projects/flow-bill-tracking/flow_bill_tracking_bills_dark.png',
                cloudinaryPublicId: 'mb-personal/flow_bill_tracking_bills_dark_n4l1pj.png',
            },
            {
                src: '/img/projects/flow-bill-tracking/flow_bill_tracking_calendar.png',
                cloudinaryPublicId: 'mb-personal/flow_bill_tracking_calendar_bunub5.png',
            },
            {
                src: '/img/projects/flow-bill-tracking/flow_bill_tracking_edit.png',
                cloudinaryPublicId: 'mb-personal/flow_bill_tracking_edit_ds8maa.png',
            },
        ],
    },
    {
        title: 'Hi.Ed Student Portal',
        subtitle: 'A PHP application for tracking student grades and displaying NCAA eligibility',
        descriptionParagraphs: [
            'The Hi.Ed Student Portal was built starting in 2016 for Walker Enterprises as an application for tracking student grade progress and NCAA eligibility. It has interfaces for school system administrators, principals, and teachers to input and view student grades. For students and parents, a transcript is generated indicating student progress toward graduation and NCAA eligibility. Other features of this application include a marketplace for teachers to list and trade school supplies as well as a Virtual Life game that helps students manage bills and expenses.',
        ],
        links: [
            {
                url: 'https://hi-ed.walkerenterprisesala.com',
                text: 'Visit Site',
            },
        ],
        references: [
            {
                url:
                    'https://yellowhammernews.com/alabamas-hi-ed-innovation-depots-newest-member-guiding-students-from-k-12-to-the-workforce/',
                text:
                    'Alabama’s Hi.Ed, Innovation Depot’s newest member, guiding students from K-12 to the workforce',
            },
        ],
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
        title: 'Squizzit',
        subtitle: 'An exquisite app for making, taking, and sharing quizzes.',
        descriptionParagraphs: [
            'This project is a single page app that I built using Vue.  It uses Vuex for state management as well as TailwindCSS for styling.  The intent for this project was to practice and improve my JavaScript skills.  With Squizzit, you can create quizzes and share them with people you know.  They can log in, take the quiz, and see their results.',
        ],
        links: [
            {
                url: 'https://github.com/matt-benton/squizzit',
                text: 'View on Github',
            },
        ],
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
        title: 'Screen Time Analyzer',
        subtitle: 'A PHP application for measuring and managing screen time',
        descriptionParagraphs: [
            'I built this application in early 2019 to track how I was spending my time while working in front of a computer screen. It is a small app that lets you define and track certain aspects of your computer use, including which monitor(s) you are looking at, what chair you are sitting in, how long you go without taking a break, and what possible symptoms may arise while doing so. You can also define activities such as blogging, coding, gaming, etc. and the app will keep track of how much time you spend on each activity. I still use this application every day to maintain healthy screen habits.',
            'On the technical side, I built the Screen Time Analyzer with the intention of setting up a simple, well-focused PHP app that would do its job well. I also wanted to focus on improving my understanding of PHP, Laravel, and database structures.',
        ],
        links: [
            {
                url: 'https://github.com/matt-benton/screen-time-analyzer',
                text: 'View on Github',
            },
        ],
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
]
