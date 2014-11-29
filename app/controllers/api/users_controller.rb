module Api
	class UsersController < ApiController

		def index
			@users = User.all
			render json: @users
		end

		def show
			@user = User.includes(:reviews, :nice_boxes, :reviewed_ice_creams, :refrigerated_ice_creams).find(params[:id])
			render json: @user, include: [:reviews, :nice_boxes, :reviewed_ice_creams, :refrigerated_ice_creams]
		end
	end
end