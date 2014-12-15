module Api
	class UsersController < ApiController

		def index
			@users = User.all
			render json: @users
		end

		def update
	    @user = User.find(params[:id]) 
	    if @user.update(user_params)
	      render json: @user
	    else
	      render json: @user.errors.full_messages, status: :unprocessable_entity
	    end
	  end

		def show
			@user = User.includes(:reviews, :reviewed_ice_creams, :refrigerated_ice_creams).find(params[:id])
			render :show
		end

		private
		def user_params
	    params.require(:user).permit(:password, :username, :avatar_url)
	  end
	end
end