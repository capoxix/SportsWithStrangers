Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :events, only: [:create, :show, :destroy, :update, :index]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :cities, only: [:index]
    resources :categories, only:[:index]
    resources :joined_events, only:[:create, :destroy]
  end
end
