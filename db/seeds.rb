# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
City.destroy_all
Category.destroy_all
Event.destroy_all

garbo = User.create!(
  name: "Garbo",
  password: "123456",
  email: "garbocheng93@gmail.com",
  user_catchphrase: "If you like to play sports with a team player, I'm your guy!",
  user_description: "I am an looking to have fun playing sports."
)

kobe = User.create!(
  name: "Kobe",
  password: "123456",
  email: "kobe@gmail.com",
  user_catchphrase: "Do you want to understand more about the mamba mentality?",
  user_description: "Former Lakers all star shooting guard. Also, the first guy in the gym and the last guy out."
)

lebron = User.create!(
  name: "Lebron",
  password: "123456",
  email: "lebronjames@gmail.com",
  user_catchphrase: "Have you ever wondered what's it like to play basketball with a king?",
  user_description: "Ended Cleveland's 52 years championship drought. Ending Lakers 5 years playoff drought."
)

curry = User.create!(
  name: "Stephen",
  password: "123456",
  email: "scurry30@gmail.com",
  user_catchphrase: "You ever wonder what's it like to defend someone who
    can make half court shots like layups?",
  user_description: "One of the splash brothers. Also redefining the 3pt line."
)

klay = User.create!(
  name: "Klay",
  password: "123456",
  email: "klay@gmail.com",
  user_catchphrase: "You ever wonder what's it like to play with a splash brother?",
  user_description: "The other splash brother and the 2016 3 point contest winner."
)

roger = User.create!(
  name: "Roger",
  password: "123456",
  email: "rogerfederer@yahoo.com",
  user_catchphrase: "Tick Tock Tick Tock, time is running and so is your chance to play with a legend.",
  user_description: "When you think of tennis, you think of me."
)

serena = User.create!(
  name: "Serena",
  password: "123456",
  email: "serenawilliams@hotmail.com",
  user_catchphrase: "You like watching me play on TV? Would you like to play against me?",
  user_description: "The queen of tennis."
)

messi = User.create!(
  name: "Messi",
  password: "123456",
  email: "messi@hotmail.com",
  user_catchphrase: "Would you like to learn how to get up everytime you fall?",
  user_description: "The man who became a superstar football player despite the odds."
)

beckham = User.create!(
  name: "Beckham",
  password: "123456",
  email: "beckham@hotmail.com",
  user_catchphrase: "Would you like to learn how to completely control where the soccer
  ball goes when you kick it?",
  user_description: "First English player to win league title in four countries: England,
  Spain, the United States and France."
)

# photo = open('https://s3-us-west-1.amazonaws.com/sports-with-strangers-dev/retb8Bj9kqVfQPeQzCiYgTiY');

garbo.photo.attach(
  io: open("https://s3-us-west-1.amazonaws.com/sports-with-strangers-dev/garbocheng93-cropped.jpg"), filename: "garbocheng93-cropped.png")

kobe.photo.attach(
  io: open("https://s3-us-west-1.amazonaws.com/sports-with-strangers-dev/kobe-cropped.jpg"), filename: "kobe-cropped.jpg")


lebron.photo.attach(
  io: open("https://s3-us-west-1.amazonaws.com/sports-with-strangers-dev/lebron-cropped.jpg"), filename: "lebron-cropped.jpg")

curry.photo.attach(
  io: open("https://s3-us-west-1.amazonaws.com/sports-with-strangers-dev/stephen-curry-cropped.jpg"), filename: "stephen-curry-cropped.jpg")

klay.photo.attach(
  io: open("https://s3-us-west-1.amazonaws.com/sports-with-strangers-dev/klay-cropped.jpg"), filename: "klay-cropped.jpg")


roger.photo.attach(
  io: open("https://s3-us-west-1.amazonaws.com/sports-with-strangers-dev/federer-cropped.jpg"), filename: "federer-cropped.jpg")

serena.photo.attach(
  io: open("https://s3-us-west-1.amazonaws.com/sports-with-strangers-dev/serena-cropped.jpg"), filename: "serena-cropped.jpg")

messi.photo.attach(
  io: open("https://s3-us-west-1.amazonaws.com/sports-with-strangers-dev/messi-cropped.jpg"), filename: "messi-cropped.jpg")

beckham.photo.attach(
  io: open("https://s3-us-west-1.amazonaws.com/sports-with-strangers-dev/beckham-cropped.jpg"), filename: "beckham-cropped.jpg")

la = City.create!(name: "LA")
sf = City.create!(name: "SF")
oakland = City.create!(name: "Oakland")
london = City.create!(name: "London")
barcelona = City.create!(name: "Barcelona")

bball = Category.create!(name: "Basketball")
soccer = Category.create!(name: "Soccer")
tennis = Category.create!(name: "Tennis")


g1 = Event.create!(
  user_id: garbo.id,
  city_id: sf.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,18,15),
  address: "Helen Wills Park",
  country: "USA",
  description: "Looking to play 1v1 to practice my dribbling skills.",
  num_of_members: 2
)

g2 = Event.create!(
  user_id: garbo.id,
  city_id: sf.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,20,16),
  address: "1400-1598 John F Kennedy Dr",
  country: "USA",
  description: "Looking to play half court soccer to practice my shooting skills.",
  num_of_members: 10
  )

g3 = Event.create!(
  user_id: garbo.id,
  city_id: sf.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,23,18),
  address: "Nancy Pelosi Dr & Bowling Green Dr",
  country: "USA",
  description: "Looking to play doubles match.",
  num_of_members: 3
  )

g4 = Event.create!(
  user_id: garbo.id,
  city_id: sf.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,23,15),
  address: "Helen Wills Park",
  country: "USA",
  description: "Looking to play 1v1 to practice my defensive skills.",
  num_of_members: 2
)

g5 = Event.create!(
  user_id: garbo.id,
  city_id: barcelona.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,23,15),
  address: "Aristides Maillol 08028",
  country: "Spain",
  description: "Looking to play 1v1 to practice my dribbling skills.",
  num_of_members: 2
)

k1 = Event.create!(
  user_id: kobe.id,
  city_id: la.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,23,16),
  address: "1111 S Figueroa St",
  country: "USA",
  description: "Looking to play 1v1 to 100 points.",
  num_of_members: 2
  )

k2 = Event.create!(
  user_id: kobe.id,
  city_id: la.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,28,16),
  address: "1111 S Figueroa St",
  country: "USA",
  description: "Looking to play full court game to 300 points.",
  num_of_members: 10
)

k3 = Event.create!(
  user_id: kobe.id,
  city_id: la.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,29,16),
  address: "1111 S Figueroa St",
  country: "USA",
  description: "Looking to play 3v3 half court games.",
  num_of_members: 6
)

k4 = Event.create!(
  user_id: kobe.id,
  city_id: la.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,27,16),
  address: "1111 S Figueroa St",
  country: "USA",
  description: "Looking to play 2v2 half court games.",
  num_of_members: 4
)


l1 =   Event.create!(
  user_id: lebron.id,
  city_id: la.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,22,13),
  address: "1111 S Figueroa St",
  country: "USA",
  description: "Looking to play with possible future teammates.",
  num_of_members: 10
)

l2 = Event.create!(
  user_id: lebron.id,
  city_id: la.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,18,12),
  address: "1111 S Figueroa St",
  country: "USA",
  description: "Looking to play with possible future teammates.",
  num_of_members: 10
)

l3 = Event.create!(
  user_id: lebron.id,
  city_id: la.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,25,12),
  address: "1111 S Figueroa St",
  country: "USA",
  description: "Looking to play 1v1 to 50 points.",
  num_of_members: 2
)

l4 = Event.create!(
  user_id: lebron.id,
  city_id: la.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,26,12),
  address: "1111 S Figueroa St",
  country: "USA",
  description: "Looking to play 2v2 half court game.",
  num_of_members: 4
)

c1 = Event.create!(
  user_id: curry.id,
  city_id: oakland.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,18,18),
  address: "7000 Coliseum Way",
  country: "USA",
  description: "Looking to play full court games.",
  num_of_members: 10
)

c2 = Event.create!(
  user_id: curry.id,
  city_id: oakland.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,20,20),
  address: "7000 Coliseum Way",
  country: "USA",
  description: "Looking to play 3v3 half court games.",
  num_of_members: 6
)

c3 = Event.create!(
  user_id: curry.id,
  city_id: oakland.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,21,20),
  address: "7000 Coliseum Way",
  country: "USA",
  description: "Looking to play do a 3 point shooting contest.",
  num_of_members: 6
)

c4 = Event.create!(
  user_id: curry.id,
  city_id: oakland.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,22,20),
  address: "7000 Coliseum Way",
  country: "USA",
  description: "Looking to practice my dribbling skills.",
  num_of_members: 2
)

klay1 = Event.create!(
  user_id: klay.id,
  city_id: oakland.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,23,20),
  address: "7000 Coliseum Way",
  country: "USA",
  description: "Looking to practice for the 3 point contest.",
  num_of_members: 2
)

klay2 = Event.create!(
  user_id: klay.id,
  city_id: oakland.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,19,20),
  address: "7000 Coliseum Way",
  country: "USA",
  description: "Looking to play HORSE.",
  num_of_members: 2
)

klay3 = Event.create!(
  user_id: klay.id,
  city_id: oakland.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,25,20),
  address: "7000 Coliseum Way",
  country: "USA",
  description: "Looking to play 1v1 to practice my isolation moves.",
  num_of_members: 2
)

klay3 = Event.create!(
  user_id: klay.id,
  city_id: oakland.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,26,20),
  address: "7000 Coliseum Way",
  country: "USA",
  description: "Looking to play 3v3 half court games.",
  num_of_members: 6
)

r1 = Event.create!(
  user_id: roger.id,
  city_id: london.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,20,19),
  address: "The All England Lawn Tennis Club",
  country: "UK",
  description: "Looking to play doubles match.",
  num_of_members: 4
)

r2 = Event.create!(
  user_id: roger.id,
  city_id: london.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,21,20),
  address: "The All England Lawn Tennis Club",
  country: "UK",
  description: "Looking to play singles match.",
  num_of_members: 2
)


r3 = Event.create!(
  user_id: roger.id,
  city_id: sf.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,25,13),
  address: "Nancy Pelosi Dr & Bowling Green Dr",
  country: "USA",
  description: "Looking to play singles match.",
  num_of_members: 2
)

r4 = Event.create!(
  user_id: roger.id,
  city_id: london.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,26,20),
  address: "The All England Lawn Tennis Club",
  country: "UK",
  description: "Looking to play doubles match.",
  num_of_members: 4
)

s1 = Event.create!(
  user_id: serena.id,
  city_id: london.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,22,15),
  address: "The All England Lawn Tennis Club",
  country: "UK",
  description: "Looking to play singles match.",
  num_of_members: 2
)

JoinedEvent.create!({user_id: garbo.id, event_id: r2.id})
JoinedEvent.create!({user_id: lebron.id, event_id: r2.id})

JoinedEvent.create!({user_id: beckham.id, event_id: r3.id})
JoinedEvent.create({user_id: serena.id, event_id: r3.id})

Waitlist.create!({user_id: garbo.id, event_id: r3.id})

JoinedEvent.create!({user_id: roger.id, event_id: s1.id})
JoinedEvent.create!({user_id:messi.id, event_id: s1.id})

s2 = Event.create!(
  user_id: serena.id,
  city_id: london.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,23,18),
  address: "The All England Lawn Tennis Club",
  country: "UK",
  description: "Looking to play doubles match.",
  num_of_members: 4
)

s3 = Event.create!(
  user_id: serena.id,
  city_id: sf.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,28,18),
  address: "Nancy Pelosi Dr & Bowling Green Dr",
  country: "USA",
  description: "Looking to play singles match.",
  num_of_members: 2
)

s4 = Event.create!(
  user_id: serena.id,
  city_id: london.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,27,18),
  address: "The All England Lawn Tennis Club",
  country: "UK",
  description: "Looking to play singles match.",
  num_of_members: 2
)

s5 = Event.create!(
  user_id: serena.id,
  city_id: london.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,29,18),
  address: "The All England Lawn Tennis Club",
  country: "UK",
  description: "Looking to play doubles match.",
  num_of_members: 4
)

b1 = Event.create!(
  user_id: beckham.id,
  city_id: sf.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,18,19),
  address: "701 Oak St",
  country: "USA",
  description: "Looking to do shooting drills.",
  num_of_members: 6
)

b2 = Event.create!(
  user_id: beckham.id,
  city_id: sf.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,18,21),
  address: "5 Freelon St #200",
  country: "USA",
  description: "Looking to play 5v5 soccer.",
  num_of_members: 10
)

b3 = Event.create!(
  user_id: beckham.id,
  city_id: london.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,20,20),
  address: "Hornsey Rd",
  country: "UK",
  description: "Looking to play 5v5 soccer.",
  num_of_members: 8
)

m1 = Event.create!(
  user_id: messi.id,
  city_id: barcelona.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,18,13),
  address: "Aristides Maillol 08028",
  country: "Spain",
  description: "Looking to play 5v5 soccer.",
  num_of_members: 10
)

m2 = Event.create!(
  user_id: messi.id,
  city_id: barcelona.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,23,15),
  address: "Aristides Maillol 08028",
  country: "Spain",
  description: "Looking to practice my penalty kicks.",
  num_of_members: 2
)

m3 = Event.create!(
  user_id: messi.id,
  city_id: barcelona.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,25,15),
  address: "Aristides Maillol 08028",
  country: "Spain",
  description: "Looking to practice my dribbling skills.",
  num_of_members: 5
)

m4 = Event.create!(
  user_id: messi.id,
  city_id: barcelona.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,27,15),
  address: "Aristides Maillol 08028",
  country: "Spain",
  description: "Looking to practice my defensive skills.",
  num_of_members: 3
)

b4 = Event.create!(
  user_id: beckham.id,
  city_id: barcelona.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,26,20),
  address: "Aristides Maillol 08028",
  country: "Spain",
  description: "Looking to practice my corner kicks.",
  num_of_members: 5
)

b5 = Event.create!(
  user_id: beckham.id,
  city_id: barcelona.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,28,20),
  address: "Aristides Maillol 08028",
  country: "Spain",
  description: "Looking to practice my penalty kicks.",
  num_of_members: 2
)

b6 = Event.create!(
  user_id: beckham.id,
  city_id: barcelona.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,22,20),
  address: "Aristides Maillol 08028",
  country: "Spain",
  description: "Looking to play 5v5 soccer",
  num_of_members: 10
)
