class RenameFridgeIceCreamTable < ActiveRecord::Migration
	def change
		rename_table :refrigerated_ice_creams, :refrigerating
	end
end
