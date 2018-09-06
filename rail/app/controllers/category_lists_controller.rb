class CategoryListsController < ApplicationController

    def index
        @category = PersonalWatchList.find(params[:personal_watchlist_id]).category_lists
        render json: { category_lists: @category}
    end

    def show 
        @category = Category_list.find(params[:id])
        render json: { category: @category }, include: :personal_watchlist_id
    end

    def create 
        @category = PersonalWatchList.find(params[:personal_watchlist_id]).category_lists.new(category_params)
        @category.save
        render json: { category: @category }
    end

    def update 
        @category = Category_list.find(params[:id])
        render json: { category: @category }
    end


    def destroy
        @category = Category_list.find(params[:id])
        @category.destroy
        render json: { message: "destroyed!"}
    end

    def add_to_personal_list
        api = Quandl.new
        api_response = api.request_data(category_params[:ticker_name])

        stock = PersonalWatchlist.first.stocks.find_or_create_by({ name: category_params[:ticker_name]})
        stock.update(newest_available_data: api_response["dataset_data"]["data"][0][0] )
    end

    private

    def category_params
        params
        .permit(
            :ticker_name
        )


    end
