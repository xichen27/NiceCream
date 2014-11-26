module Api
	class IceCreamsController < ApiController

		def index
			@ice_creams = IceCream.all
			render json: @ice_creams
		end

		def show
			@ice_cream = IceCream.includes(:reviews, nice_boxes: :fans).find(params[:id])
			render json: @ice_cream, include: :reviews, nice_boxes: :fans
		end
	end
end




 