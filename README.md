# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

SportsWithStrangers is a website that helps users find others to play sports with. Users can host and join events in their desired location.

getJoinedEvents (reducers/selector.js)
-it was a bit difficult to handle unjoining an event from the joins_events table since join_event is a joins table and has a many to many relationship with both users and events. Therefore, it was necessary to get the very specific ID which indicates the event that a user has joined. In order to accomplish this, I used a selector to not only filter the events that user has joined into, but also added a joinId to the event object so that we can use this information handle unjoining a user.

(/events/viewindex.json.jbuilder)
For displaying information of any given event, information from two different tables is required. The users table and the events. Therefore, by using rails associations and jbuilder, I have collected the neccesary information using one Ajax call.
