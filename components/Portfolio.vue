<template>
    <section class="work" id="work">
        <Project 
            v-for="(project, index) in projectContent"
            :key="index"
            :index="index"
            :project="project"
            @large-image-clicked="largeImageClicked($event)"
        />

        <!-- Bill Force One -->
        <!-- <div class="project">
            <div class="project__container project__container--image">
                <div class="project__image-grid">
                    <img src="img/projects/bill-force-one/bill-force-one-lg.png" class="project__large-image" alt="Bill Force One large screen shot">
                    <div class="project__thumbnails">
                        <div class="project__thumbnail">
                            <img src="img/projects/bill-force-one/bill-force-one-sm.png" alt="Bill force one screen shot thumbnail" class="project__thumbnail-image" >
                        </div>
                        <div class="project__thumbnail">
                            <img src="img/projects/bill-force-one/bill-force-one-ipad-sm.png" alt="Bill Force One screen shot thumbnail" class="project__thumbnail-image">
                        </div>
                        <div class="project__thumbnail">
                            <img src="img/projects/bill-force-one/bill-force-one-landing-sm.png" alt="Bill Force One screen shot thumnbail" class="project__thumbnail-image">
                        </div>
                        <div class="project__thumbnail">
                            <img src="img/projects/bill-force-one/bill-force-one-edit-sm.png" alt="Bill Force One screen shot thumbnail" class="project__thumbnail-image">
                        </div>
                    </div>
                </div>
            </div>
            <div class="project__container project__container--text">
                <h3 class="project__title text--pink">Bill Force One</h3>
                <h4 class="project__subtitle text--pink">A PHP application for monitoring when monthly bills are due and if they have been paid.</h4>
                <p class="project__text">
                    I built this application to help me know how much money I was spending each month on recurring bills. It also helps
                    me keep track of what is still due when I'm in the middle of the month. For instance, if it's the 21st of the month
                    and I still have bills due, but I'm not sure how much money I have available to spend versus how much to reserve for
                    bills, I can use Bill Force One to show me exactly how much I still owe for the month. Another added benefit is to
                    simply keep up with due dates as well as whether a bill has autorecurring payments set up or not.
                </p>
                <p class="project__text">
                    Bill Force One is mostly written in PHP with a little bit of JavaScript. Instead of using a CSS framework I designed
                    the site and wrote all of the CSS myself.
                </p>
                <div class="project__links">
                    <a class="text--pink" href="https://github.com/matt-benton/bill-force-one" target="_blank">
                        View on Github
                    </a>
                </div>
            </div>
        </div> -->

        <!-- Hi.Ed -->
        <!-- <div class="project">
            <div class="project__container project__container--text">
                <h3 class="project__title text--blue">Hi.Ed Student Portal</h3>
                <h4 class="project__subtitle text--blue">A PHP application for tracking student grades and displaying NCAA eligibility</h4>
                <p class="project__text">
                    The Hi.Ed Student Portal was built starting in 2016 for Walker Enterprises as an application for tracking student grade
                    progress and NCAA eligibility. It has interfaces for school system administrators, principals, and teachers to input and
                    view student grades. For students and parents, a transcript is generated indicating student progress toward graduation
                    and NCAA eligibility. Other features of this application include a
                    marketplace for teachers to list and trade school supplies as well as a Virtual Life game that helps students manage
                    bills and expenses.
                </p>
                <div class="project__links">
                    <a class="text--blue" href="https://hi-ed.walkerenterprisesala.com" target="_blank">
                        Visit Site
                    </a>
                </div>
            </div>
            <div class="project__container project__container--image">
                <div class="project__image-grid">
                    <img src="img/projects/hi-ed/hi-ed-lg.png" class="project__large-image" alt="Hi.Ed large screen shot">
                    <div class="project__thumbnails">
                        <div class="project__thumbnail">
                            <img src="img/projects/hi-ed/hi-ed-sm.png" alt="Hi.Ed screen shot thumbnail" class="project__thumbnail-image">
                        </div>
                        <div class="project__thumbnail">
                            <img src="img/projects/hi-ed/hi-ed-house-sm.png" alt="Hi.Ed screen shot thumbnail"
                                class="project__thumbnail-image">
                        </div>
                        <div class="project__thumbnail">
                            <img src="img/projects/hi-ed/hi-ed-vl-profile-sm.png" alt="Hi.Ed screen shot thumbnail"
                                class="project__thumbnail-image">
                        </div>
                        <div class="project__thumbnail">
                            <img src="img/projects/hi-ed/hi-ed-registration-checklist-sm.png" alt="Hi.Ed screen shot thumbnail"
                                class="project__thumbnail-image">
                        </div>
                        <div class="project__thumbnail">
                            <img src="img/projects/hi-ed/hi-ed-ncaa-sm.png" alt="Hi.Ed screen shot thumbnail" class="project__thumbnail-image">
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- Screen Time Analyzer -->
        <!-- <div class="project">
            <div class="project__container project__container--image">
                <div class="project__image-grid">
                    <img src="img/projects/screen-time-analyzer/screen-time-analyzer-dash-lg.png" class="project__large-image" alt="Screen Time Analyzer large screen shot">
                    <div class="project__thumbnails">
                        <div class="project__thumbnail">
                            <img src="img/projects/screen-time-analyzer/screen-time-analyzer-dash-sm.png" class="project__thumbnail-image"
                                alt="Screen Time Analyzer screen shot thumbnail">
                        </div>
                        <div class="project__thumbnail">
                            <img src="img/projects/screen-time-analyzer/screen-time-analyzer-day-sm.png" class="project__thumbnail-image"
                                alt="Screen Time Analyzer screen shot thumbnail">
                        </div>
                        <div class="project__thumbnail">
                            <img src="img/projects/screen-time-analyzer/screen-time-analyzer-activities-sm.png" class="project__thumbnail-image"
                                alt="Screen Time Analyzer screen shot thumbnail">
                        </div>
                        <div class="project__thumbnail">
                            <img src="img/projects/screen-time-analyzer/screen-time-analyzer-form-sm.png" class="project__thumbnail-image"
                                alt="Screen Time Analyzer screen shot thumbnail">
                        </div>
                    </div>
                </div>
            </div>
            <div class="project__container project__container--text">
                <h3 class="project__title text--green">Screen Time Analyzer</h3>
                <h4 class="project__subtitle text--green">A PHP application for measuring and managing screen time</h4>
                <p class="project__text">
                    I built this application in early 2019 to track how I was spending my time while working in front of a computer
                    screen. It is a small app that lets you define and track certain aspects of your computer use, including which
                    monitor(s) you are looking at, what chair you are sitting in, how long you go without taking a break, and what possible
                    symptoms may arise while doing so. You can also define activities such as blogging, coding, gaming, etc. and
                    the app will keep track of how much time you spend on each activity. I still use this application every day to maintain
                    healthy screen habits.
                </p>
                <p class="project__text">
                    On the technical side, I built the Screen Time Analyzer with the intention of setting up a simple, well-focused PHP app
                    that would do its job well. I also wanted to focus on improving my understanding of PHP, Laravel, and database
                    structures.
                </p>
                <div class="project__links">
                    <a href="https://gitlab.rmsginc.com/mattbenton/eye-strain-analyzer" class="text--green" target="_blank">
                        View on Gitlab
                    </a>
                </div>
            </div>
        </div> -->

        <!-- Squizzit -->
        <!-- <div class="project">
            <div class="project__container project__container--text">
                <h3 class="project__title text--pink">Squizzit</h3>
                <h4 class="project__subtitle text--pink">An exquisite app for making, taking, and sharing quizzes.</h4>
                <p class="project__text">
                    This project is a single page app that I built using Vue.  It uses Vuex for state management as well as TailwindCSS for styling.  The intent for this project was to practice and improve my JavaScript skills.  With Squizzit, you can create quizzes and share them with people you know.  They can log in, take the quiz, and see their results.
                </p>
                <div class="project__links">
                    <a class="text--pink" href="https://github.com/matt-benton/squizzit" target="_blank">
                        View on Github
                    </a>
                </div>
            </div>
            <div class="project__container project__container--image">
                <div class="project__image-grid">
                    <img src="img/projects/squizzit/squizzit-landing-lg.png" class="project__large-image" alt="Squizzit large preview">
                    <div class="project__thumbnails">
                        <div class="project__thumbnail">
                            <img src="img/projects/squizzit/squizzit-landing-sm.png" alt="Squizzit landing page thumbnail" class="project__thumbnail-image">
                        </div>
                        <div class="project__thumbnail">
                            <img src="img/projects/squizzit/squizzit-edit-sm.png" alt="Squizzit quiz editing page" class="project__thumbnail-image">
                        </div>
                        <div class="project__thumbnail">
                            <img src="img/projects/squizzit/squizzit-take-sm.png" alt="Squizzit quiz taking page" class="project__thumbnail-image">
                        </div>
                        <div class="project__thumbnail">
                            <img src="img/projects/squizzit/squizzit-results-sm.png" alt="Squizzit quiz results page" class="project__thumbnail-image">
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- Sprout -->
        <!-- <div class="project">
            <div class="project__container project__container--image">
                <div class="project__image-grid">
                    <img src="img/projects/sprout/sprout-delivery-lg.png" class="project__large-image" alt="Sprout large screen shot">
                    <div class="project__thumbnails">
                        <div class="project__thumbnail">
                            <img src="img/projects/sprout/sprout-delivery-sm.png" alt="Sprout screen shot thumbnail" class="project__thumbnail-image" >
                        </div>
                        <div class="project__thumbnail">
                            <img src="img/projects/sprout/sprout-sm.png" alt="Sprout screen shot thumbnail" class="project__thumbnail-image" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="project__container project__container--text">
                <h3 class="project__title text--blue">Sprout</h3>
                <h4 class="project__subtitle text--blue">An accounting and inventory system built for the produce industry</h4>
                <p class="project__text">
                    Sprout is an application built with Laravel and AngularJS that handles accounting, inventory, shipping, and reporting
                    for produce companies. My contributions to this project have mainly included features for importing and
                    exporting data in the form of CSV and XML files. My focus in this project has been to write modular, reusable, and
                    tested features that can be duplicated and adapted to many similar scenarios. This includes object-oriented classes that
                    are clean, simple, and reusable. It also includes Angular components that can be dropped into an HTML page and reused.
                    This approach saves time and makes maintenance of the project a lot easier.
                </p>
            </div>
        </div> -->
    </section>
</template>

<script>
import Project from './Project.vue'
import { projects } from '~/projects'

export default {
    data() {
        return {
            projectContent: projects,
        }
    },
    components: {
        Project
    },
    methods: {
        largeImageClicked(image) {
            this.$emit('large-project-image-clicked', image)
        }
    }
}
</script>