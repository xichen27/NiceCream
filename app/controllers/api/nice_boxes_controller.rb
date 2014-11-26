module Api
	class NiceBoxesController  < ApiController

		def create
			@nice_box = current_user.nice_box.new(ice_box_params)
			if @nice_box.save
				render json: @nice_box
			else
				render json: @nice_box.errors.full_messages, status: :unprocessable_entity
			end
		end

    def destroy
      @nice_box = nice_box.find(params[:id])
      @nice_box.destroy
      render json: {}
    end

    def update
      @nice_box = current_user.nice_boxes.find(params[:id])

      if @nice_box.update_attributes(nice_box_params)
        render json: @nice_box
      else
        render json: @nice_box.errors.full_messages, status: :unprocessable_entity
      end
    end

		private

		def nice_cream_params
			params.require(:ice_box).permit(:name)
		end

	end
end

