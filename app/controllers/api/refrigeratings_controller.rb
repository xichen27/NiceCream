module Api
	class RefrigeratingsController  < ApiController

		def create
			# @refrigerating = current_ice_cream.refrigerating.new
			# @refrigerating.user_id = current_user.id
      @refrigerating = Refrigerating.new(refrigerating_params)
			if @refrigerating.save
				render json: @refrigerating
			else
				render json: @refrigerating.errors.full_messages, status: :unprocessable_entity
			end
		end

    def destroy
      @refrigerating = Refrigerating.find(params[:id])
      @refrigerating.destroy
      render json: {}
    end

		private

    def refrigerating_params
      params.require(:refrigerating).permit(:user_id, :ice_cream_id)
    end

    # def current_ice_cream
    #   if params[:id]
    #     @refrigerating = refrigerating.find(params[:id])
    #     @ice_cream = @refrigerating.ice_cream
    #   elsif params[:refrigerating]
    #     @ice_cream = IceCream.find(params[:refrigerating][:ice_cream_id])
    #   end
    # end

	end
end


