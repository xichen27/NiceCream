module Api
	class UsersController < ApiController

		def index
			@users = User.all
			render json: @users
		end

		def show
			@user = User.includes(:reviews, :reviewed_ice_creams, :refrigerated_ice_creams).find(params[:id])
			render :show
		end
	end
end