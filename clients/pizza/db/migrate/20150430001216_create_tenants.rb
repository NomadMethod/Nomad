class CreateTenants < ActiveRecord::Migration
  def change
    create_table :tenants do |t|
      t.string :name
      t.string :host

      t.timestamps null: false
    end
  end

  def self.up
  	create_table :tenants
	add_index :tenants, :host
  end
end
