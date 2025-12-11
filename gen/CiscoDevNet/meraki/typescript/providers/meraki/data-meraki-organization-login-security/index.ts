// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_login_security
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiOrganizationLoginSecurityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_login_security#organization_id DataMerakiOrganizationLoginSecurity#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_login_security meraki_organization_login_security}
*/
export class DataMerakiOrganizationLoginSecurity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_login_security";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiOrganizationLoginSecurity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiOrganizationLoginSecurity to import
  * @param importFromId The id of the existing DataMerakiOrganizationLoginSecurity that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_login_security#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiOrganizationLoginSecurity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_login_security", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_login_security meraki_organization_login_security} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiOrganizationLoginSecurityConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiOrganizationLoginSecurityConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_login_security',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_lockout_attempts - computed: true, optional: false, required: false
  public get accountLockoutAttempts() {
    return this.getNumberAttribute('account_lockout_attempts');
  }

  // api_authentication_ip_restrictions_for_keys_enabled - computed: true, optional: false, required: false
  public get apiAuthenticationIpRestrictionsForKeysEnabled() {
    return this.getBooleanAttribute('api_authentication_ip_restrictions_for_keys_enabled');
  }

  // api_authentication_ip_restrictions_for_keys_ranges - computed: true, optional: false, required: false
  public get apiAuthenticationIpRestrictionsForKeysRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('api_authentication_ip_restrictions_for_keys_ranges'));
  }

  // enforce_account_lockout - computed: true, optional: false, required: false
  public get enforceAccountLockout() {
    return this.getBooleanAttribute('enforce_account_lockout');
  }

  // enforce_different_passwords - computed: true, optional: false, required: false
  public get enforceDifferentPasswords() {
    return this.getBooleanAttribute('enforce_different_passwords');
  }

  // enforce_idle_timeout - computed: true, optional: false, required: false
  public get enforceIdleTimeout() {
    return this.getBooleanAttribute('enforce_idle_timeout');
  }

  // enforce_login_ip_ranges - computed: true, optional: false, required: false
  public get enforceLoginIpRanges() {
    return this.getBooleanAttribute('enforce_login_ip_ranges');
  }

  // enforce_password_expiration - computed: true, optional: false, required: false
  public get enforcePasswordExpiration() {
    return this.getBooleanAttribute('enforce_password_expiration');
  }

  // enforce_strong_passwords - computed: true, optional: false, required: false
  public get enforceStrongPasswords() {
    return this.getBooleanAttribute('enforce_strong_passwords');
  }

  // enforce_two_factor_auth - computed: true, optional: false, required: false
  public get enforceTwoFactorAuth() {
    return this.getBooleanAttribute('enforce_two_factor_auth');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout_minutes - computed: true, optional: false, required: false
  public get idleTimeoutMinutes() {
    return this.getNumberAttribute('idle_timeout_minutes');
  }

  // login_ip_ranges - computed: true, optional: false, required: false
  public get loginIpRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('login_ip_ranges'));
  }

  // minimum_password_length - computed: true, optional: false, required: false
  public get minimumPasswordLength() {
    return this.getNumberAttribute('minimum_password_length');
  }

  // num_different_passwords - computed: true, optional: false, required: false
  public get numDifferentPasswords() {
    return this.getNumberAttribute('num_different_passwords');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // password_expiration_days - computed: true, optional: false, required: false
  public get passwordExpirationDays() {
    return this.getNumberAttribute('password_expiration_days');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
