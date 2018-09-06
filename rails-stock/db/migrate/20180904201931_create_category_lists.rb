class CreateCategoryLists < ActiveRecord::Migration[5.2]
  def change
    create_table :category_lists do |t|
      t.references :stock
      t.references :personal_watchlist
      t.timestamps
    end
  end
end
