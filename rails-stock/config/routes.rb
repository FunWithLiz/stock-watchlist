Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :stocks, only: [:index]
  resources :personal_watchlists do 
    resources :stocks, only: [:index, :create, :update, :destroy]

  end
end
