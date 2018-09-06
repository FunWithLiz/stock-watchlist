require 

class QuandlApi
    def request_data(ticker_name)
        response = HTTParty.get(
            "https://www.quandl.com/api/v3/datasets/WIKI/#{ticker_name}/data.json?column_index=4&start_date=2018-03-20&end_date=2018-03-27&api_key=#{API_KEY}"
        )
        JSON.parse(response.body)
    end
end

# using an API 