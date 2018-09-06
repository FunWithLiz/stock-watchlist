class StocksController < ApplicationController
    def index 
        @stock = Stock.all
        p @stock
        render json: { stock: @stock }
    end

end
