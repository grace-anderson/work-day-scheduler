# Code Quiz Challenge

## Purpose
This app is a simple daily planner application that allows a user to save events for each hour of the day. 

[Deployed calendar app](https://grace-anderson.github.io/work-day-scheduler/)

## Features

This app runs in the browser using dynamically updated HTML and CSS powered by jQuery.  [Moment.js](https://momentjs.com/) is used to work with date and time. Local storage saves entered events.

The date displayed in the header updates for each day. Events saved are retained for the following day, so that the user can schedule in recurring events. 

The hour time blocks update according to the current hour. Past hours are greyed out, the current hour is coloured red, and future hours are coloured green

The application code is available on [GitHub](https://github.com/grace-anderson/work-day-scheduler). 

## Usage
Users, such as employees with a busy schedule, can add important events for their day and so manage their time effectively. 

The header day and date update daily, and the user can click on each hour of the work day to add, update or remove events and activities in that hour. Each activity can be saved separately using the button at the right hand side of each hour block. 

The user can observe the progress time during the day using the changes in hour block colour, with the current hour highlighted red and future hours highlighted green. Past hours are greyed

Saved events will continue to display after the user refreshes or reopens the app. 

## Mock-Up

The gif demonstrates the coding quiz challenge application's appearance and functionality

![A user clicks on slots on the color-coded calendar and edits the events.](./assets/work-schedule-demo.gif)
