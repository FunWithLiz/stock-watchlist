class Stock < ApplicationRecord
    has_many :category_lists
    has_many :personal_watchlists, :through => :category_lists

    before_save :set_database_code


    def set_database_code
        self.database_code = 'WIKI'
    end
end
