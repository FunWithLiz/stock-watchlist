class CategoryListsController < ApplicationController

    def index
        @category = PersonalWatchList.find(params[:personal_watchlist_id]).category_lists
        render json: { category_lists: @category}
    end

    def show 
        @category = CategoryList.find(params[:id])
        render json: { category: @category }, include: :personal_watchlist_id
    end

    #POST   /personal_watchlists/:personal_watchlist_id/category_list(.:format)

    def create 
        @category = PersonalWatchList.find(params[:personal_watchlist_id]).category_lists.new(category_params)
        @category.save
        render json: { category: @category }
    end

    # PUT    /personal_watchlists/:personal_watchlist_id/category_list/:id(.:format)
    def update 
        old = CategoryList.where(personal_watchlist_id: params[:personal_watchlist_id], id: params[:id])
        update = old.update(category_params)
        render json: update
    end

    # DELETE  /personal_watchlists/:personal_watchlist_id/category_list/:id(.:format)
    def destroy
        old = CategoryList.where(personal_watchlist_id: params[:personal_watchlist_id], id: params[:id])
        delete = old.destroy(params[:id])
        render json: { message: "You've just deleted #{params[:id]}"}
    end


    # WAS GONNA USE THIS FOR QUANDL API
    
    # def add_to_personal_list
    #     api = Quandl.new
    #     api_response = api.request_data(category_params[:ticker_name])

    #     stock = PersonalWatchlist.first.stocks.find_or_create_by({ name: category_params[:ticker_name]})
    #     stock.update(newest_available_data: api_response["dataset_data"]["data"][0][0] )
    # end

    private

    def category_params
        params
        .permit(
            :stock_id,
            :personal_watchlist_id
        )
    end


end
