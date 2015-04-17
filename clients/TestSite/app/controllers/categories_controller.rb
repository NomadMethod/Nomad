class CategoriesController < ApplicationController
    def create
        @category = Category.create(location_params)
    end

    def update
        category = Category.find(params[:id])
        category = Category.update_attributes!(category_params)
        redirect_to category
    end


    private

    def category_params
        params.require(:category).permit(:name)
    end
end
