# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

garbo = User.create!(
  name: "Garbo",
  password: "123456",
  email: "garbocheng93@gmail.com",
  user_catchphrase: "If you like to play basketball with a team player, I'm your guy!",
  user_description: "I am an ABCD looking to have fun playing basketball."
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

beckam = User.create!(
  name: "Beckham",
  password: "123456",
  email: "messi@hotmail.com",
  user_catchphrase: "Would you like to learn how to get up everytime you fall?",
  user_description: "First English player to win league title in four countries: England,
  Spain, the United States and France."
)


la = City.create!(name: "Los Angeles")
sf = City.create!(name: "San Francisco")
oakland = City.create!(name: "Oakland")

bball = Category.create!(name: "Basketball")
soccer = Category.create!(name: "Soccer")
tennis = Category.create!(name: "Tennis")
