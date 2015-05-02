class TenantScopedModel < ActiveRecord::Base
	self.abstract_class = true

	class << self
		protected
			def current_scoped_methods
				last = scoped_methods.last
				last.response_to?(:call) ? relation.scoping { last.call } : last
			end
	end

	belongs_to :tenant
	default_scope lambda { where('tenant_id = ?', Tenant.current) }

	before_save { self.tenant = Tenant.current }
end
