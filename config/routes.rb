Rails.application.routes.draw do
  resources :users
  # get "users/countdown"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get '/alarm', to: 'users#alarm'
  get '/balls', to: 'users#balls'
  get '/countdown', to: 'users#countdown'
  root "users#index"
end
