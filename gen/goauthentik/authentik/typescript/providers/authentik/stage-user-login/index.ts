// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_user_login
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StageUserLoginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allowed values:
  *   - `no_binding`
  *   - `bind_continent`
  *   - `bind_continent_country`
  *   - `bind_continent_country_city`
  *  Defaults to `no_binding`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_user_login#geoip_binding StageUserLogin#geoip_binding}
  */
  readonly geoipBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_user_login#id StageUserLogin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_user_login#name StageUserLogin#name}
  */
  readonly name: string;
  /**
  * Allowed values:
  *   - `no_binding`
  *   - `bind_asn`
  *   - `bind_asn_network`
  *   - `bind_asn_network_ip`
  *  Defaults to `no_binding`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_user_login#network_binding StageUserLogin#network_binding}
  */
  readonly networkBinding?: string;
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `days=30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_user_login#remember_device StageUserLogin#remember_device}
  */
  readonly rememberDevice?: string;
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `seconds=0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_user_login#remember_me_offset StageUserLogin#remember_me_offset}
  */
  readonly rememberMeOffset?: string;
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `seconds=0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_user_login#session_duration StageUserLogin#session_duration}
  */
  readonly sessionDuration?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_user_login#terminate_other_sessions StageUserLogin#terminate_other_sessions}
  */
  readonly terminateOtherSessions?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_user_login authentik_stage_user_login}
*/
export class StageUserLogin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_stage_user_login";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StageUserLogin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StageUserLogin to import
  * @param importFromId The id of the existing StageUserLogin that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_user_login#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StageUserLogin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_stage_user_login", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_user_login authentik_stage_user_login} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StageUserLoginConfig
  */
  public constructor(scope: Construct, id: string, config: StageUserLoginConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_stage_user_login',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0',
        providerVersionConstraint: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._geoipBinding = config.geoipBinding;
    this._id = config.id;
    this._name = config.name;
    this._networkBinding = config.networkBinding;
    this._rememberDevice = config.rememberDevice;
    this._rememberMeOffset = config.rememberMeOffset;
    this._sessionDuration = config.sessionDuration;
    this._terminateOtherSessions = config.terminateOtherSessions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // geoip_binding - computed: false, optional: true, required: false
  private _geoipBinding?: string; 
  public get geoipBinding() {
    return this.getStringAttribute('geoip_binding');
  }
  public set geoipBinding(value: string) {
    this._geoipBinding = value;
  }
  public resetGeoipBinding() {
    this._geoipBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipBindingInput() {
    return this._geoipBinding;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // network_binding - computed: false, optional: true, required: false
  private _networkBinding?: string; 
  public get networkBinding() {
    return this.getStringAttribute('network_binding');
  }
  public set networkBinding(value: string) {
    this._networkBinding = value;
  }
  public resetNetworkBinding() {
    this._networkBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkBindingInput() {
    return this._networkBinding;
  }

  // remember_device - computed: false, optional: true, required: false
  private _rememberDevice?: string; 
  public get rememberDevice() {
    return this.getStringAttribute('remember_device');
  }
  public set rememberDevice(value: string) {
    this._rememberDevice = value;
  }
  public resetRememberDevice() {
    this._rememberDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rememberDeviceInput() {
    return this._rememberDevice;
  }

  // remember_me_offset - computed: false, optional: true, required: false
  private _rememberMeOffset?: string; 
  public get rememberMeOffset() {
    return this.getStringAttribute('remember_me_offset');
  }
  public set rememberMeOffset(value: string) {
    this._rememberMeOffset = value;
  }
  public resetRememberMeOffset() {
    this._rememberMeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rememberMeOffsetInput() {
    return this._rememberMeOffset;
  }

  // session_duration - computed: false, optional: true, required: false
  private _sessionDuration?: string; 
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }
  public set sessionDuration(value: string) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }

  // terminate_other_sessions - computed: false, optional: true, required: false
  private _terminateOtherSessions?: boolean | cdktf.IResolvable; 
  public get terminateOtherSessions() {
    return this.getBooleanAttribute('terminate_other_sessions');
  }
  public set terminateOtherSessions(value: boolean | cdktf.IResolvable) {
    this._terminateOtherSessions = value;
  }
  public resetTerminateOtherSessions() {
    this._terminateOtherSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateOtherSessionsInput() {
    return this._terminateOtherSessions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      geoip_binding: cdktf.stringToTerraform(this._geoipBinding),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_binding: cdktf.stringToTerraform(this._networkBinding),
      remember_device: cdktf.stringToTerraform(this._rememberDevice),
      remember_me_offset: cdktf.stringToTerraform(this._rememberMeOffset),
      session_duration: cdktf.stringToTerraform(this._sessionDuration),
      terminate_other_sessions: cdktf.booleanToTerraform(this._terminateOtherSessions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      geoip_binding: {
        value: cdktf.stringToHclTerraform(this._geoipBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_binding: {
        value: cdktf.stringToHclTerraform(this._networkBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remember_device: {
        value: cdktf.stringToHclTerraform(this._rememberDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remember_me_offset: {
        value: cdktf.stringToHclTerraform(this._rememberMeOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_duration: {
        value: cdktf.stringToHclTerraform(this._sessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terminate_other_sessions: {
        value: cdktf.booleanToHclTerraform(this._terminateOtherSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
