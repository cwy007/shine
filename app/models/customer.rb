class Customer < ApplicationRecord
  has_many :customers_shipping_addresses
  has_one :customers_billing_address
  has_one :billing_address, through: :customers_shipping_address, source: :address

  # Helper to get just the primary shipping address
  def primary_shipping_address
    self.customers_shipping_address.find_by(primary: true).address
  end
end
