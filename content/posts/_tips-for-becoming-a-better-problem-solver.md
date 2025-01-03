---
title: Tips for Becoming a Better Problem Solver
description: It is widely-accepted knowledge the good developers have to have good problem solving skills. Let's face it - programming is difficult and even the best of us run into problems fairly often.  When you're a programmer, you will be faced with a challenge and it will  be up to you to solve it.  It's important to understand good methods for handling things when you do come across a problem that is giving you a hard time.
createdAt: '2020-08-20'
---

It is widely-accepted knowledge that good developers need excellent problem solving skills. Let's face it - programming is difficult and even the best of us run into problems fairly often. These problems occur because we're trying something new (maybe a library or framework) that we don't understand, or we're building a feature that has conflicting needs and we need to make a decision about what to prioritize. Maybe we are just having to untangle some messy code that we didn't write (because we never write messy code of course). The point is the landscape is complicated when you're a programmer. Sometimes (a lot of times), you will be faced with a challenge and it will be up to you to solve it. It's important to understand good methods for handling things when you do come across a problem that is giving you a hard time.

## <a href="#use-a-linter" id="use-a-linter">Use a Linter</a>

If you have been coding for any amount of time you have probably had a situation where your code won't work for a seemingly inexplicable reason. You have gone back over everything and it _looks_ like it should work. Everything is setup properly and you have checked every step to make sure that the right code is written every step of the way. In theory, the code should work - but it's not. What's going wrong?

After a couple of hours of racking your brain and eventually questioning your sanity you finally discover it - the missing semicolon. Or the mispelled variable. Or the typo. You are relieved that the solution has finally been found, but also frustrated that it took so long because of such a simple mistake.

Fortunately, we have tools that help us format our code and catch syntax errors. If a small mistake does come up, we catch it quickly and it doesn't derail our day. I use <a href="http://eslint.org">ESLint</a>, which will highlight any syntax errors I make in my JavaScript code. I also use <a href="http://prettier.io">Prettier</a> to format my HTML, CSS, and JavaScript. Prettier doesn't check for syntax errors, but it does automatically format my code for me. This helps me a lot because it keeps things like indentation and trailing commas consistent.

It's important to work efficiently and no one wants to spend giant chunks of time debugging syntax errors when we already have tools to do it for us. Save yourself some time and sanity and find a linter that will take care of these headaches for you.

## <a href="#describe-the-problem" id="describe-the-problem">Describe the Problem</a>

Many times I have asked for help with something and figured out the solution while I was describing the problem to someone trying to help me. When you get stuck, usually your mind needs a reset. You get bogged down because something's not working right. Believing that you should be able to fix the problem quickly, you try and try different things without giving any complete thought to any of it. At this point your mind is deep in the details and you're not seeing the overall picture.

When you force yourself to describe the problem it means that you have to go back to the original symptom and look at the situation more objectively. By piecing together the scenario you may have an "Aha" moment and realize that you overlooked something before because you were so focused on the details. Now, after looking it from a different view, the problem is obvious and so is the solution.

I find that stepping away from the computer screen is helpful because it forces me to think about the problem conceptually, in my head, rather than looking at it with my eyes. I know how my code _should_ work and so usually when I take the time to think about it I can point out the difference between what should be happening and what _is_ happening.

It also helps to go to a whiteboard or grab a notebook and write it down. Jot some notes or make a simple outline about what is going on. I find that when I do this I rarely actually complete the outline, because in the middle I get ideas about potential solutions or helpful things to try that help me understand the problem better.

## <a href="#what-is-this-error-message-trying-to-tell-me?" id="what-is-this-error-message-trying-to-tell-me?">"What is this error message trying to tell me?"</a>

Far too often when I'm writing code and I get an error, I think "oh, there was a bug," and after barely glancing at the error message I switch back to my editor and try to figure out what went wrong. On scanning the error message I do attempt to extract the most important details - the file and line number where the error occured. Most of the time this is all I need. But sometimes it's not and I spend way too much time debugging something because I didn't fully read the error message.

Sometimes the message you get from your tools isn't very helpful, but if you are struggling to solve a tricky problem and the cause isn't obvious, you should slow down and ask, "What is this error message trying to tell me?" Revisit the error message and read it carefully. You will probably find that you just assumed the problem was different from the one that was actually occurring.

## <a href="#take-a-walk-or-try-again-tomorrow" id="take-a-walk-or-try-again-tomorrow">Take a Walk or Try Again Tomorrow</a>

Sometimes when you're working on a problem the best thing you can do is walk away from it for a while. You may think that the only way to solve the problem is to keep grinding away, devoting more time to it, skipping breaks, and working later. That idea is simply false. If you've already spent a couple hours trying to figure out the problem, or if you're near the end of the day and worn out, you simply aren't going to think as clearly as you would if you took a break and came back to the problem fresh.

I have spent hours at the end of my workdays grappling with problems that I have solved in 5 minutes the next morning. This is why if I'm struggling with something and having trouble focusing or thinking clearly, I usually push it to the next morning. Sure, I could keep plugging away for hours but chances are even if I did solve the problem, the solution would be sloppy and I would end up rewriting it anyway. This is why I tend to schedule my more difficult tasks for early in the morning and lighter work in the afternoon. People can be energetic at different times of the day, so I am not saying this applies to everyone, but it is important to understand that sometimes it's better to walk away from a difficult task so you come back refreshed.

This is by no means a complete list of problem solving tips, but hopefully you found something new that will help you in the future.
