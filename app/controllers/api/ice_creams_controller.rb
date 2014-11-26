module Api
	class IceCreamsController < ApiController

		def index
			@ice_creams = IceCream.all
			render json: @ice_creams
		end

		def show
			@ice_cream = IceCream.includes(:reviews).find(params[:id])
			render json: @ice_cream, include: :reviews
		end
	end
end




 