class PersonalWatchlistsController < ApplicationController

    # GET    /personal_watchlists
    def index
        @personal_watchlist = PersonalWatchlist.all
        render json: @personal_watchlist
    end


    # GET    /personal_watchlists/:id(.:format)
    def show
        @personal_watchlist = PersonalWatchlist.find(params[:id])
        render json: @personal_watchlist
    end

    skip_before_action :verify_authenticity_token  

    #POST /personal_watchlists
    def create
        @personal_watchlist = PersonalWatchlist.new(personal_watchlist_params)
        @personal_watchlist.save
        render json: @personal_watchlist
    end


    # PUT    /personal_watchlists/:id(.:format)
    def update
        old = PersonalWatchlist.find(params[:id])
        update = old.update(personal_watchlist_params)
        render json: update
    end

    # /personal_watchlists/:id(.:format)
    def destroy
        @old = PersonalWatchlist.find(params[:id])
        @old.destroy
        render json: { message: "You've just deleted your 
        personal watch list of #{params[:id]}" }
    end


    private

    def personal_watchlist_params
        params
        .permit(
            :name_list
        )
    end
end
