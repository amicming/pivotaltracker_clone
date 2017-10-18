# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

stories = Story.create(
  [
    {
      title: "api server design",
      body: "A new project design for api server"
    },
    {
      title: "client design",
      body: "A new client for api server"
    },
    {
      title: "QA Plan",
      body: "Planning for QA"
    },
    {
      title: "Hosting Plan",
      body: "Planning for AWS Hosting"
    }
  ]
)
