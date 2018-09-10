class StocksController < ApplicationController
    def index 
        @stock = Stock.all
        p @stock
        render json: { stock: @stock }
    end

    skip_before_action :verify_authenticity_token  

# ADDING STOCK DATA INTO THE PERSONAL WATCH LIST

    def create 
        stock = Stock.find(params["stockId"])
        personal_watchlist = PersonalWatchlist.find(params["personal_watchlist_id"])

        personal_watchlist.stocks << stock
        render json: { personal_watchlist: personal_watchlist.stocks }

    end

end
