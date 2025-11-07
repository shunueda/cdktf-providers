// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebfilterOverrideConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override#expires WebfilterOverride#expires}
  */
  readonly expires: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override#fosid WebfilterOverride#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override#id WebfilterOverride#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override#initiator WebfilterOverride#initiator}
  */
  readonly initiator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override#ip WebfilterOverride#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override#ip6 WebfilterOverride#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override#new_profile WebfilterOverride#new_profile}
  */
  readonly newProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override#old_profile WebfilterOverride#old_profile}
  */
  readonly oldProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override#scope WebfilterOverride#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override#status WebfilterOverride#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override#user WebfilterOverride#user}
  */
  readonly user: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override#user_group WebfilterOverride#user_group}
  */
  readonly userGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override#vdomparam WebfilterOverride#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override fortios_webfilter_override}
*/
export class WebfilterOverride extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_webfilter_override";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebfilterOverride resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebfilterOverride to import
  * @param importFromId The id of the existing WebfilterOverride that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebfilterOverride to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_webfilter_override", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_override fortios_webfilter_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebfilterOverrideConfig
  */
  public constructor(scope: Construct, id: string, config: WebfilterOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_webfilter_override',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expires = config.expires;
    this._fosid = config.fosid;
    this._id = config.id;
    this._initiator = config.initiator;
    this._ip = config.ip;
    this._ip6 = config.ip6;
    this._newProfile = config.newProfile;
    this._oldProfile = config.oldProfile;
    this._scope = config.scope;
    this._status = config.status;
    this._user = config.user;
    this._userGroup = config.userGroup;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expires - computed: false, optional: false, required: true
  private _expires?: string; 
  public get expires() {
    return this.getStringAttribute('expires');
  }
  public set expires(value: string) {
    this._expires = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // initiator - computed: true, optional: true, required: false
  private _initiator?: string; 
  public get initiator() {
    return this.getStringAttribute('initiator');
  }
  public set initiator(value: string) {
    this._initiator = value;
  }
  public resetInitiator() {
    this._initiator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorInput() {
    return this._initiator;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // new_profile - computed: false, optional: false, required: true
  private _newProfile?: string; 
  public get newProfile() {
    return this.getStringAttribute('new_profile');
  }
  public set newProfile(value: string) {
    this._newProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newProfileInput() {
    return this._newProfile;
  }

  // old_profile - computed: false, optional: false, required: true
  private _oldProfile?: string; 
  public get oldProfile() {
    return this.getStringAttribute('old_profile');
  }
  public set oldProfile(value: string) {
    this._oldProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oldProfileInput() {
    return this._oldProfile;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // user_group - computed: false, optional: true, required: false
  private _userGroup?: string; 
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
  public set userGroup(value: string) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expires: cdktf.stringToTerraform(this._expires),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      initiator: cdktf.stringToTerraform(this._initiator),
      ip: cdktf.stringToTerraform(this._ip),
      ip6: cdktf.stringToTerraform(this._ip6),
      new_profile: cdktf.stringToTerraform(this._newProfile),
      old_profile: cdktf.stringToTerraform(this._oldProfile),
      scope: cdktf.stringToTerraform(this._scope),
      status: cdktf.stringToTerraform(this._status),
      user: cdktf.stringToTerraform(this._user),
      user_group: cdktf.stringToTerraform(this._userGroup),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expires: {
        value: cdktf.stringToHclTerraform(this._expires),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initiator: {
        value: cdktf.stringToHclTerraform(this._initiator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6: {
        value: cdktf.stringToHclTerraform(this._ip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_profile: {
        value: cdktf.stringToHclTerraform(this._newProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      old_profile: {
        value: cdktf.stringToHclTerraform(this._oldProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group: {
        value: cdktf.stringToHclTerraform(this._userGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
