// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/topology_admin_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryTopologyAdminUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/topology_admin_user#name DataPingdirectoryTopologyAdminUser#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/topology_admin_user pingdirectory_topology_admin_user}
*/
export class DataPingdirectoryTopologyAdminUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_topology_admin_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryTopologyAdminUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryTopologyAdminUser to import
  * @param importFromId The id of the existing DataPingdirectoryTopologyAdminUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/topology_admin_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryTopologyAdminUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_topology_admin_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/topology_admin_user pingdirectory_topology_admin_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryTopologyAdminUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryTopologyAdminUserConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_topology_admin_user',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_activation_time - computed: true, optional: false, required: false
  public get accountActivationTime() {
    return this.getStringAttribute('account_activation_time');
  }

  // account_expiration_time - computed: true, optional: false, required: false
  public get accountExpirationTime() {
    return this.getStringAttribute('account_expiration_time');
  }

  // allowed_authentication_ip_address - computed: true, optional: false, required: false
  public get allowedAuthenticationIpAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_authentication_ip_address'));
  }

  // allowed_authentication_type - computed: true, optional: false, required: false
  public get allowedAuthenticationType() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_authentication_type'));
  }

  // alternate_bind_dn - computed: true, optional: false, required: false
  public get alternateBindDn() {
    return cdktf.Fn.tolist(this.getListAttribute('alternate_bind_dn'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('email_address'));
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return cdktf.Fn.tolist(this.getListAttribute('first_name'));
  }

  // home_telephone_number - computed: true, optional: false, required: false
  public get homeTelephoneNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('home_telephone_number'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_time_limit_seconds - computed: true, optional: false, required: false
  public get idleTimeLimitSeconds() {
    return this.getNumberAttribute('idle_time_limit_seconds');
  }

  // inherit_default_root_privileges - computed: true, optional: false, required: false
  public get inheritDefaultRootPrivileges() {
    return this.getBooleanAttribute('inherit_default_root_privileges');
  }

  // is_proxyable - computed: true, optional: false, required: false
  public get isProxyable() {
    return this.getStringAttribute('is_proxyable');
  }

  // is_proxyable_by_dn - computed: true, optional: false, required: false
  public get isProxyableByDn() {
    return cdktf.Fn.tolist(this.getListAttribute('is_proxyable_by_dn'));
  }

  // is_proxyable_by_group - computed: true, optional: false, required: false
  public get isProxyableByGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('is_proxyable_by_group'));
  }

  // is_proxyable_by_url - computed: true, optional: false, required: false
  public get isProxyableByUrl() {
    return cdktf.Fn.tolist(this.getListAttribute('is_proxyable_by_url'));
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return cdktf.Fn.tolist(this.getListAttribute('last_name'));
  }

  // look_through_entry_limit - computed: true, optional: false, required: false
  public get lookThroughEntryLimit() {
    return this.getNumberAttribute('look_through_entry_limit');
  }

  // may_proxy_as_dn - computed: true, optional: false, required: false
  public get mayProxyAsDn() {
    return cdktf.Fn.tolist(this.getListAttribute('may_proxy_as_dn'));
  }

  // may_proxy_as_group - computed: true, optional: false, required: false
  public get mayProxyAsGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('may_proxy_as_group'));
  }

  // may_proxy_as_url - computed: true, optional: false, required: false
  public get mayProxyAsUrl() {
    return cdktf.Fn.tolist(this.getListAttribute('may_proxy_as_url'));
  }

  // mobile_telephone_number - computed: true, optional: false, required: false
  public get mobileTelephoneNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('mobile_telephone_number'));
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pager_telephone_number - computed: true, optional: false, required: false
  public get pagerTelephoneNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('pager_telephone_number'));
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_policy - computed: true, optional: false, required: false
  public get passwordPolicy() {
    return this.getStringAttribute('password_policy');
  }

  // preferred_otp_delivery_mechanism - computed: true, optional: false, required: false
  public get preferredOtpDeliveryMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_otp_delivery_mechanism'));
  }

  // privilege - computed: true, optional: false, required: false
  public get privilege() {
    return cdktf.Fn.tolist(this.getListAttribute('privilege'));
  }

  // require_secure_authentication - computed: true, optional: false, required: false
  public get requireSecureAuthentication() {
    return this.getBooleanAttribute('require_secure_authentication');
  }

  // require_secure_connections - computed: true, optional: false, required: false
  public get requireSecureConnections() {
    return this.getBooleanAttribute('require_secure_connections');
  }

  // search_result_entry_limit - computed: true, optional: false, required: false
  public get searchResultEntryLimit() {
    return this.getNumberAttribute('search_result_entry_limit');
  }

  // time_limit_seconds - computed: true, optional: false, required: false
  public get timeLimitSeconds() {
    return this.getNumberAttribute('time_limit_seconds');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // work_telephone_number - computed: true, optional: false, required: false
  public get workTelephoneNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('work_telephone_number'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
