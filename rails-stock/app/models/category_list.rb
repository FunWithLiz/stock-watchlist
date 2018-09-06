class CategoryList < ApplicationRecord
    belongs_to :stock
    belongs_to :personal_watchlist
end
