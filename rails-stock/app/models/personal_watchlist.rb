class PersonalWatchlist < ApplicationRecord
    has_many :category_lists
    has_many :stocks, through: :category_lists
end
