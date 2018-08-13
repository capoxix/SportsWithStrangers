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
  user_description: "I am an ABCD looking to have fun playing sports."
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
  user_description: "One of the splash brothers."
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
  user_description: "The men who became a superstar football player despite the odds"
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

garbo.photo.attach(
  io: File.open("app/assets/images/users/garbocheng93.png"),filename: "garbocheng93.png")

lebron.photo.attach(
  io: File.open("app/assets/images/users/lebron.jpg"), filename: "lebron.jpg")

curry.photo.attach(
  io: File.open("app/assets/images/users/stephen-curry.jpg"), filename: "stephen-curry.jpg")

roger.photo.attach(
  io: File.open("app/assets/images/users/federer.jpg"), filename: "federer.jpg")

serena.photo.attach(
  io: File.open("app/assets/images/users/serena.jpg"), filename: "serena.jpg")

messi.photo.attach(
  io: File.open("app/assets/images/users/messi.jpg"), filename: "messi.jpg")

beckham.photo.attach(
  io: File.open("app/assets/images/users/beckham.jpg"), filename: "beckham.jpg")

la = City.create!(name: "LA")
sf = City.create!(name: "SF")
oakland = City.create!(name: "Oakland")
london = City.create!(name: "London")

bball = Category.create!(name: "Basketball")
soccer = Category.create!(name: "Soccer")
tennis = Category.create!(name: "Tennis")


g1 = Event.create!(
  user_id: garbo.id,
  city_id: sf.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,13,15),
  address: "1122 street",
  country: "USA",
  description: "Looking to play 1v1 to practice my dribbling skills",
  num_of_members: 2
)

g2 = Event.create!(
  user_id: garbo.id,
  city_id: sf.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,16,16),
  address: "1400-1598 John F Kennedy Dr",
  country: "USA",
  description: "Looking to play half court soccer to practice my shooting skills",
  num_of_members: 10
  )

g3 = Event.create!(
  user_id: garbo.id,
  city_id: sf.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,18,18),
  address: "Nancy Pelosi Dr & Bowling Green Dr",
  country: "USA",
  description: "Looking to play doubles match",
  num_of_members: 4
  )

l1 =   Event.create!(
  user_id: lebron.id,
  city_id: la.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,13,13),
  address: "1111 S Figueroa St",
  country: "USA",
  description: "Looking to play with possible future teammates",
  num_of_members: 10
  )

l2 = Event.create!(
  user_id: lebron.id,
  city_id: la.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,18,12),
  address: "1111 S Figueroa St",
  country: "USA",
  description: "Looking to play with possible future teammates",
  num_of_members: 10
  )

c1 = Event.create!(
  user_id: curry.id,
  city_id: oakland.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,18,18),
  address: "7000 Coliseum Way",
  country: "USA",
  description: "Looking to play full court games",
  num_of_members: 10
  )
c2 = Event.create!(
  user_id: curry.id,
  city_id: oakland.id,
  category_id: bball.id,
  date_time: DateTime.new(2018,8,20,20),
  address: "7000 Coliseum Way",
  country: "USA",
  description: "Looking to play 3v3 half court games",
  num_of_members: 6
  )

r1 = Event.create!(
  user_id: roger.id,
  city_id: london.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,20,19),
  address: "The All England Lawn Tennis Club",
  country: "USA",
  description: "Looking to play doubles match",
  num_of_members: 4
  )
r2 = Event.create!(
  user_id: roger.id,
  city_id: london.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,21,20),
  address: "The All England Lawn Tennis Club",
  country: "USA",
  description: "Looking to play singles match",
  num_of_members: 2
)

r3 = Event.create!(
  user_id: roger.id,
  city_id: sf.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,22,13),
  address: "Nancy Pelosi Dr & Bowling Green Dr",
  country: "USA",
  description: "Looking to play singles match",
  num_of_members: 2
)

s1 = Event.create!(
  user_id: serena.id,
  city_id: london.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,23,15),
  address: "The All England Lawn Tennis Club",
  country: "UK",
  description: "Looking to play singles match",
  num_of_members: 2
)

s2 = Event.create!(
  user_id: serena.id,
  city_id: london.id,
  category_id: tennis.id,
  date_time: DateTime.new(2018,8,23,18),
  address: "The All England Lawn Tennis Club",
  country: "UK",
  description: "Looking to play doubles match",
  num_of_members: 4
)

b1 = Event.create!(
  user_id: beckham.id,
  city_id: sf.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,18,19),
  address: "701 Oak St",
  country: "USA",
  description: "Looking to do shooting drills",
  num_of_members: 6
)

b2 = Event.create!(
  user_id: beckham.id,
  city_id: sf.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,18,20),
  address: "5 Freelon St #200",
  country: "USA",
  description: "Looking to play 5v5 soccer",
  num_of_members: 10
)

m1 = Event.create!(
  user_id: messi.id,
  city_id: sf.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,17,13),
  address: "701 Oak St",
  country: "USA",
  description: "Looking to play 5v5 soccer",
  num_of_members: 10
)

m2 = Event.create!(
  user_id: messi.id,
  city_id: sf.id,
  category_id: soccer.id,
  date_time: DateTime.new(2018,8,15,15),
  address: "5 Freelon St #200",
  country: "USA",
  description: "Looking to play 5v5 soccer",
  num_of_members: 10
)
