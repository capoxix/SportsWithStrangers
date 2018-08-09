# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180809184114) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "cities", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "events", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "city_id", null: false
    t.integer "category_id", null: false
    t.datetime "date_time", null: false
    t.string "address", null: false
    t.string "country", null: false
    t.text "description", null: false
    t.integer "num_of_members", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_events_on_category_id"
    t.index ["city_id"], name: "index_events_on_city_id"
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.text "user_catchphrase"
    t.text "user_description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["name"], name: "index_users_on_name"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
