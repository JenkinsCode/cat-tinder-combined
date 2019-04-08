class CatsController < ApplicationController

def index
  cats = Cat.all
  render json: cats
end

def create
  cats = Cat.all
  cat = Cat.create(cat_params)
  if cat.valid?
    render json: cats
   else
     render json: cat.errors, status: :unprocessable_entity
   end
end

def destroy
    cats = Cat.all
    cat = Cat.destroy(params[:id])
    render json: cats
end

private


def cat_params
    params.require(:cat).permit(:name, :age, :enjoys)
  end




end
