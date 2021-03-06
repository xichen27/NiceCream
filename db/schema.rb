# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20141213202223) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "creameries", force: true do |t|
    t.string   "name",       null: false
    t.string   "location"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "ice_creams", force: true do |t|
    t.string   "flavor",      null: false
    t.integer  "creamery_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_url"
  end

  create_table "refrigeratings", force: true do |t|
    t.integer  "ice_cream_id", null: false
    t.integer  "user_id",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "reviews", force: true do |t|
    t.integer  "ice_cream_id", null: false
    t.integer  "user_id",      null: false
    t.integer  "content"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "rating"
  end

  create_table "users", force: true do |t|
    t.string   "username",                                             null: false
    t.string   "password_digest",                                      null: false
    t.string   "session_token",                                        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "guest"
    t.string   "avatar_url",      default: "/assets/avatar_image.png"
  end

end
