class CreatePersonalWatchlists < ActiveRecord::Migration[5.2]
  def change
    create_table :personal_watchlists do |t|
      t.string :name_list
      t.timestamps
    end
  end
end
