// https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/general_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GeneralSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The length of time before a user is logged out of the Clumio system due to inactivity. Measured in seconds. The valid range is between 600 seconds (10 minutes) and 3600 seconds (60 minutes). If not configured, the value defaults to 900 seconds (15 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/general_settings#auto_logout_duration GeneralSettings#auto_logout_duration}
  */
  readonly autoLogoutDuration?: number;
  /**
  * The designated range of IP addresses that are allowed to access the Clumio REST API. API requests that originate from outside this list will be blocked. The IP address of the server from which this request is being made must be in this list; otherwise, the request will fail. Set the parameter to individual IP addresses and/or a range of IP addresses in CIDR notation. For example, [`193.168.1.0/24`, `193.172.1.1`]. If not configured, the value defaults to [`0.0.0.0/0`] meaning all addresses will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/general_settings#ip_allowlist GeneralSettings#ip_allowlist}
  */
  readonly ipAllowlist?: string[];
  /**
  * The length of time a user password is valid before it must be changed. Measured in seconds. The valid range is between 2592000 seconds (30 days) and 15552000 seconds (180 days). If not configured, the value defaults to 7776000 seconds (90 days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/general_settings#password_expiration_duration GeneralSettings#password_expiration_duration}
  */
  readonly passwordExpirationDuration?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/general_settings clumio_general_settings}
*/
export class GeneralSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_general_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GeneralSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GeneralSettings to import
  * @param importFromId The id of the existing GeneralSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/general_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GeneralSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_general_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/general_settings clumio_general_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GeneralSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GeneralSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'clumio_general_settings',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoLogoutDuration = config.autoLogoutDuration;
    this._ipAllowlist = config.ipAllowlist;
    this._passwordExpirationDuration = config.passwordExpirationDuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_logout_duration - computed: true, optional: true, required: false
  private _autoLogoutDuration?: number; 
  public get autoLogoutDuration() {
    return this.getNumberAttribute('auto_logout_duration');
  }
  public set autoLogoutDuration(value: number) {
    this._autoLogoutDuration = value;
  }
  public resetAutoLogoutDuration() {
    this._autoLogoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLogoutDurationInput() {
    return this._autoLogoutDuration;
  }

  // ip_allowlist - computed: false, optional: true, required: false
  private _ipAllowlist?: string[]; 
  public get ipAllowlist() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_allowlist'));
  }
  public set ipAllowlist(value: string[]) {
    this._ipAllowlist = value;
  }
  public resetIpAllowlist() {
    this._ipAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowlistInput() {
    return this._ipAllowlist;
  }

  // password_expiration_duration - computed: true, optional: true, required: false
  private _passwordExpirationDuration?: number; 
  public get passwordExpirationDuration() {
    return this.getNumberAttribute('password_expiration_duration');
  }
  public set passwordExpirationDuration(value: number) {
    this._passwordExpirationDuration = value;
  }
  public resetPasswordExpirationDuration() {
    this._passwordExpirationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpirationDurationInput() {
    return this._passwordExpirationDuration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_logout_duration: cdktf.numberToTerraform(this._autoLogoutDuration),
      ip_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAllowlist),
      password_expiration_duration: cdktf.numberToTerraform(this._passwordExpirationDuration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_logout_duration: {
        value: cdktf.numberToHclTerraform(this._autoLogoutDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_allowlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAllowlist),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password_expiration_duration: {
        value: cdktf.numberToHclTerraform(this._passwordExpirationDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
