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

ActiveRecord::Schema.define(version: 2018_09_04_201931) do

  create_table "category_lists", force: :cascade do |t|
    t.integer "stock_id"
    t.integer "personal_watchlist_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["personal_watchlist_id"], name: "index_category_lists_on_personal_watchlist_id"
    t.index ["stock_id"], name: "index_category_lists_on_stock_id"
  end

  create_table "personal_watchlists", force: :cascade do |t|
    t.string "name_list"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stocks", force: :cascade do |t|
    t.string "dataset_code"
    t.string "database_code"
    t.string "name"
    t.string "description"
    t.string "newest_available_date"
    t.string "oldest_available_date"
    t.string "column_names"
    t.string "frequency"
    t.string "type"
    t.string "premium"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
