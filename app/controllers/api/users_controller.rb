module Api
	class UsersController < ApiController

		# def index
		# 	@ice_creams = IceCream.all
		# 	render json: @ice_creams
		# end

		def show
			@user = User.includes(:reviews, :nice_boxes, :reviewed_ice_creams, :refrigerated_ice_creams).find(params[:id])
			render json: @user, include: [:reviews, :nice_boxes, :reviewed_ice_creams, :refrigerated_ice_creams]
		end
	end
end