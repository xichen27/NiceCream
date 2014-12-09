module Api
	class CreameriesController < ApiController

		def create

			@creamery = Creamery.new(creamery_params)
			if @creamery.save
				render json: @creamery
			else
				render json: @creamery.errors.full_messages, status: :unprocessable_entity
			end
		end


		private

		def creamery_params
			params.require(:creamery).permit(:name)
		end

	end
end