// https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_radius
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SettingRadiusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable RADIUS accounting Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_radius#accounting_enabled SettingRadius#accounting_enabled}
  */
  readonly accountingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The port for accounting communications. Defaults to `1813`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_radius#accounting_port SettingRadius#accounting_port}
  */
  readonly accountingPort?: number;
  /**
  * The port for authentication communications. Defaults to `1812`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_radius#auth_port SettingRadius#auth_port}
  */
  readonly authPort?: number;
  /**
  * RAIDUS server enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_radius#enabled SettingRadius#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Statistics will be collected from connected clients at this interval. Defaults to `3600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_radius#interim_update_interval SettingRadius#interim_update_interval}
  */
  readonly interimUpdateInterval?: number;
  /**
  * RAIDUS secret passphrase. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_radius#secret SettingRadius#secret}
  */
  readonly secret?: string;
  /**
  * The name of the site to associate the settings with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_radius#site SettingRadius#site}
  */
  readonly site?: string;
  /**
  * Encrypt communication between the server and the client. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_radius#tunneled_reply SettingRadius#tunneled_reply}
  */
  readonly tunneledReply?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_radius unifi_setting_radius}
*/
export class SettingRadius extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unifi_setting_radius";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SettingRadius resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SettingRadius to import
  * @param importFromId The id of the existing SettingRadius that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_radius#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SettingRadius to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unifi_setting_radius", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_radius unifi_setting_radius} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SettingRadiusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SettingRadiusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'unifi_setting_radius',
      terraformGeneratorMetadata: {
        providerName: 'unifi',
        providerVersion: '0.41.0',
        providerVersionConstraint: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountingEnabled = config.accountingEnabled;
    this._accountingPort = config.accountingPort;
    this._authPort = config.authPort;
    this._enabled = config.enabled;
    this._interimUpdateInterval = config.interimUpdateInterval;
    this._secret = config.secret;
    this._site = config.site;
    this._tunneledReply = config.tunneledReply;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounting_enabled - computed: false, optional: true, required: false
  private _accountingEnabled?: boolean | cdktf.IResolvable; 
  public get accountingEnabled() {
    return this.getBooleanAttribute('accounting_enabled');
  }
  public set accountingEnabled(value: boolean | cdktf.IResolvable) {
    this._accountingEnabled = value;
  }
  public resetAccountingEnabled() {
    this._accountingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingEnabledInput() {
    return this._accountingEnabled;
  }

  // accounting_port - computed: false, optional: true, required: false
  private _accountingPort?: number; 
  public get accountingPort() {
    return this.getNumberAttribute('accounting_port');
  }
  public set accountingPort(value: number) {
    this._accountingPort = value;
  }
  public resetAccountingPort() {
    this._accountingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingPortInput() {
    return this._accountingPort;
  }

  // auth_port - computed: false, optional: true, required: false
  private _authPort?: number; 
  public get authPort() {
    return this.getNumberAttribute('auth_port');
  }
  public set authPort(value: number) {
    this._authPort = value;
  }
  public resetAuthPort() {
    this._authPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortInput() {
    return this._authPort;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interim_update_interval - computed: false, optional: true, required: false
  private _interimUpdateInterval?: number; 
  public get interimUpdateInterval() {
    return this.getNumberAttribute('interim_update_interval');
  }
  public set interimUpdateInterval(value: number) {
    this._interimUpdateInterval = value;
  }
  public resetInterimUpdateInterval() {
    this._interimUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interimUpdateIntervalInput() {
    return this._interimUpdateInterval;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // tunneled_reply - computed: false, optional: true, required: false
  private _tunneledReply?: boolean | cdktf.IResolvable; 
  public get tunneledReply() {
    return this.getBooleanAttribute('tunneled_reply');
  }
  public set tunneledReply(value: boolean | cdktf.IResolvable) {
    this._tunneledReply = value;
  }
  public resetTunneledReply() {
    this._tunneledReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunneledReplyInput() {
    return this._tunneledReply;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounting_enabled: cdktf.booleanToTerraform(this._accountingEnabled),
      accounting_port: cdktf.numberToTerraform(this._accountingPort),
      auth_port: cdktf.numberToTerraform(this._authPort),
      enabled: cdktf.booleanToTerraform(this._enabled),
      interim_update_interval: cdktf.numberToTerraform(this._interimUpdateInterval),
      secret: cdktf.stringToTerraform(this._secret),
      site: cdktf.stringToTerraform(this._site),
      tunneled_reply: cdktf.booleanToTerraform(this._tunneledReply),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounting_enabled: {
        value: cdktf.booleanToHclTerraform(this._accountingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      accounting_port: {
        value: cdktf.numberToHclTerraform(this._accountingPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_port: {
        value: cdktf.numberToHclTerraform(this._authPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interim_update_interval: {
        value: cdktf.numberToHclTerraform(this._interimUpdateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunneled_reply: {
        value: cdktf.booleanToHclTerraform(this._tunneledReply),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
