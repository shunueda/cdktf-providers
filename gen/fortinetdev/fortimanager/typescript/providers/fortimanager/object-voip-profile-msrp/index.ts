// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_msrp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVoipProfileMsrpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_msrp#adom ObjectVoipProfileMsrpA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_msrp#id ObjectVoipProfileMsrpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_msrp#log_violations ObjectVoipProfileMsrpA#log_violations}
  */
  readonly logViolations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_msrp#max_msg_size ObjectVoipProfileMsrpA#max_msg_size}
  */
  readonly maxMsgSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_msrp#max_msg_size_action ObjectVoipProfileMsrpA#max_msg_size_action}
  */
  readonly maxMsgSizeAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_msrp#profile ObjectVoipProfileMsrpA#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_msrp#scopetype ObjectVoipProfileMsrpA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_msrp#status ObjectVoipProfileMsrpA#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_msrp fortimanager_object_voip_profile_msrp}
*/
export class ObjectVoipProfileMsrpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_voip_profile_msrp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVoipProfileMsrpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVoipProfileMsrpA to import
  * @param importFromId The id of the existing ObjectVoipProfileMsrpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_msrp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVoipProfileMsrpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_voip_profile_msrp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_msrp fortimanager_object_voip_profile_msrp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVoipProfileMsrpAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectVoipProfileMsrpAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_voip_profile_msrp',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._id = config.id;
    this._logViolations = config.logViolations;
    this._maxMsgSize = config.maxMsgSize;
    this._maxMsgSizeAction = config.maxMsgSizeAction;
    this._profile = config.profile;
    this._scopetype = config.scopetype;
    this._status = config.status;
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

  // log_violations - computed: true, optional: true, required: false
  private _logViolations?: string; 
  public get logViolations() {
    return this.getStringAttribute('log_violations');
  }
  public set logViolations(value: string) {
    this._logViolations = value;
  }
  public resetLogViolations() {
    this._logViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logViolationsInput() {
    return this._logViolations;
  }

  // max_msg_size - computed: false, optional: true, required: false
  private _maxMsgSize?: number; 
  public get maxMsgSize() {
    return this.getNumberAttribute('max_msg_size');
  }
  public set maxMsgSize(value: number) {
    this._maxMsgSize = value;
  }
  public resetMaxMsgSize() {
    this._maxMsgSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMsgSizeInput() {
    return this._maxMsgSize;
  }

  // max_msg_size_action - computed: true, optional: true, required: false
  private _maxMsgSizeAction?: string; 
  public get maxMsgSizeAction() {
    return this.getStringAttribute('max_msg_size_action');
  }
  public set maxMsgSizeAction(value: string) {
    this._maxMsgSizeAction = value;
  }
  public resetMaxMsgSizeAction() {
    this._maxMsgSizeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMsgSizeActionInput() {
    return this._maxMsgSizeAction;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      log_violations: cdktf.stringToTerraform(this._logViolations),
      max_msg_size: cdktf.numberToTerraform(this._maxMsgSize),
      max_msg_size_action: cdktf.stringToTerraform(this._maxMsgSizeAction),
      profile: cdktf.stringToTerraform(this._profile),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      status: cdktf.stringToTerraform(this._status),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_violations: {
        value: cdktf.stringToHclTerraform(this._logViolations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_msg_size: {
        value: cdktf.numberToHclTerraform(this._maxMsgSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_msg_size_action: {
        value: cdktf.stringToHclTerraform(this._maxMsgSizeAction),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
