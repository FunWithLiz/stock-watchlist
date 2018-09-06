class CreateCategoryLists < ActiveRecord::Migration[5.2]
  def change
    create_table :category_lists do |t|
      t.references :stocks
      t.references :personal_watchlists
      t.timestamps
    end
  end
end
