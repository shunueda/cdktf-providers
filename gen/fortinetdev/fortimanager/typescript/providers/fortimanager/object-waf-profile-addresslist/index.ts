// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile_addresslist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWafProfileAddresslistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile_addresslist#adom ObjectWafProfileAddresslist#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile_addresslist#blocked_address ObjectWafProfileAddresslist#blocked_address}
  */
  readonly blockedAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile_addresslist#blocked_log ObjectWafProfileAddresslist#blocked_log}
  */
  readonly blockedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile_addresslist#id ObjectWafProfileAddresslist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile_addresslist#profile ObjectWafProfileAddresslist#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile_addresslist#scopetype ObjectWafProfileAddresslist#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile_addresslist#severity ObjectWafProfileAddresslist#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile_addresslist#status ObjectWafProfileAddresslist#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile_addresslist#trusted_address ObjectWafProfileAddresslist#trusted_address}
  */
  readonly trustedAddress?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile_addresslist fortimanager_object_waf_profile_addresslist}
*/
export class ObjectWafProfileAddresslist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_waf_profile_addresslist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWafProfileAddresslist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWafProfileAddresslist to import
  * @param importFromId The id of the existing ObjectWafProfileAddresslist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile_addresslist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWafProfileAddresslist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_waf_profile_addresslist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile_addresslist fortimanager_object_waf_profile_addresslist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWafProfileAddresslistConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWafProfileAddresslistConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_waf_profile_addresslist',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._blockedAddress = config.blockedAddress;
    this._blockedLog = config.blockedLog;
    this._id = config.id;
    this._profile = config.profile;
    this._scopetype = config.scopetype;
    this._severity = config.severity;
    this._status = config.status;
    this._trustedAddress = config.trustedAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // blocked_address - computed: false, optional: true, required: false
  private _blockedAddress?: string; 
  public get blockedAddress() {
    return this.getStringAttribute('blocked_address');
  }
  public set blockedAddress(value: string) {
    this._blockedAddress = value;
  }
  public resetBlockedAddress() {
    this._blockedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedAddressInput() {
    return this._blockedAddress;
  }

  // blocked_log - computed: true, optional: true, required: false
  private _blockedLog?: string; 
  public get blockedLog() {
    return this.getStringAttribute('blocked_log');
  }
  public set blockedLog(value: string) {
    this._blockedLog = value;
  }
  public resetBlockedLog() {
    this._blockedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedLogInput() {
    return this._blockedLog;
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

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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

  // trusted_address - computed: false, optional: true, required: false
  private _trustedAddress?: string; 
  public get trustedAddress() {
    return this.getStringAttribute('trusted_address');
  }
  public set trustedAddress(value: string) {
    this._trustedAddress = value;
  }
  public resetTrustedAddress() {
    this._trustedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedAddressInput() {
    return this._trustedAddress;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      blocked_address: cdktf.stringToTerraform(this._blockedAddress),
      blocked_log: cdktf.stringToTerraform(this._blockedLog),
      id: cdktf.stringToTerraform(this._id),
      profile: cdktf.stringToTerraform(this._profile),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      severity: cdktf.stringToTerraform(this._severity),
      status: cdktf.stringToTerraform(this._status),
      trusted_address: cdktf.stringToTerraform(this._trustedAddress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocked_address: {
        value: cdktf.stringToHclTerraform(this._blockedAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocked_log: {
        value: cdktf.stringToHclTerraform(this._blockedLog),
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
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
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
      trusted_address: {
        value: cdktf.stringToHclTerraform(this._trustedAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
