# stock-watchlist

## Summary
For users who wants to keep track of their stocks.

## User stories
- As a user, I would like to view all of the stock options and click on to one of the stocks to move it into my personal watch list. 
- Would like to be able to edit name the category list to whatever I want later.
- Would like to click on the delete button to delete the category or a stock from my category list.
- Would like to swiftly navigate through the navigation bar with ease.

## Tech used
- Rails for back-end 
- React for front-end
- Bulma for CSS styling
- Api link: https://docs.quandl.com/docs/in-depth-usage#section-get-time-series-data-and-metadata

## ERD
![ERD](https://github.com/FunWithLiz/stock-watchlist/blob/master/ERD/ERD.png)

## Wireframes
![Wireframe1](https://github.com/FunWithLiz/stock-watchlist/blob/master/wireframes/Wireframe_1.png)
![Wireframe2](https://github.com/FunWithLiz/stock-watchlist/blob/master/wireframes/Wireframe_2.png)

## MVP
Create a new category for your watchlist. Able to show all of the stocks to choose from along with viewing all of your stocks in your list. Able to update your list by editing the name of your category list and deleting the category entirely or deleting the stock from your category list.

## Post-MVP
Using AUTH for a better user experience and styling.

## Timeline 
Sept 4-5 - Creating my back-end/front-end files and creating my CRUD functions.
Sept 5-6 - Rendering components on the front-end
Sept 6-7 - Finish the rendering components and fix bugs 
Sept ~ 9 - Continue to fix bugs and stylize page, (if have time, use AUTH?).

## Code snippet

# ADDING STOCK DATA INTO THE PERSONAL WATCH LIST

    def create 
        stock = Stock.find(params["stockId"])
        personal_watchlist = PersonalWatchlist.find(params["personal_watchlist_id"])

        personal_watchlist.stocks << stock
        render json: { personal_watchlist: personal_watchlist.stocks }

    end
