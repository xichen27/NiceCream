module Api
	class IceCreamsController < ApiController
		def index
			@ice_creams = IceCream.all
			render :index
			# render json: @ice_creams
		end

		def show
			@ice_cream = IceCream.includes(:reviews, :fans, :creamery).find(params[:id])
			# render json: @ice_cream, include: [:reviews, :nice_boxes, :fans, :creamery]
			render :show
		end
	end
end