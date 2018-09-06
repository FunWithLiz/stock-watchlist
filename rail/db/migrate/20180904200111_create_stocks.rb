class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :dataset_code
      t.string :database_code
      t.string :name
      t.string :description
      t.string :newest_available_date
      t.string :oldest_available_date
      t.string :column_names
      t.string :frequency
      t.string :type
      t.string :premium

      t.timestamps
    end
  end
end
