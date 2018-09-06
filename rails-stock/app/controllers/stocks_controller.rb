class StocksController < ApplicationController
    def index 
        @stock = Stock.all
        p @stock
        render json: { stock: @stock }
    end

    def show 
        @stock = Stock.find(params[:id])
        render json: { Stock: @stock }, include: :stock_id
    end


end
