// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_sccp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVoipProfileSccpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_sccp#adom ObjectVoipProfileSccpA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_sccp#block_mcast ObjectVoipProfileSccpA#block_mcast}
  */
  readonly blockMcast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_sccp#id ObjectVoipProfileSccpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_sccp#log_call_summary ObjectVoipProfileSccpA#log_call_summary}
  */
  readonly logCallSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_sccp#log_violations ObjectVoipProfileSccpA#log_violations}
  */
  readonly logViolations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_sccp#max_calls ObjectVoipProfileSccpA#max_calls}
  */
  readonly maxCalls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_sccp#profile ObjectVoipProfileSccpA#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_sccp#scopetype ObjectVoipProfileSccpA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_sccp#status ObjectVoipProfileSccpA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_sccp#verify_header ObjectVoipProfileSccpA#verify_header}
  */
  readonly verifyHeader?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_sccp fortimanager_object_voip_profile_sccp}
*/
export class ObjectVoipProfileSccpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_voip_profile_sccp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVoipProfileSccpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVoipProfileSccpA to import
  * @param importFromId The id of the existing ObjectVoipProfileSccpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_sccp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVoipProfileSccpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_voip_profile_sccp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile_sccp fortimanager_object_voip_profile_sccp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVoipProfileSccpAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectVoipProfileSccpAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_voip_profile_sccp',
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
    this._blockMcast = config.blockMcast;
    this._id = config.id;
    this._logCallSummary = config.logCallSummary;
    this._logViolations = config.logViolations;
    this._maxCalls = config.maxCalls;
    this._profile = config.profile;
    this._scopetype = config.scopetype;
    this._status = config.status;
    this._verifyHeader = config.verifyHeader;
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

  // block_mcast - computed: true, optional: true, required: false
  private _blockMcast?: string; 
  public get blockMcast() {
    return this.getStringAttribute('block_mcast');
  }
  public set blockMcast(value: string) {
    this._blockMcast = value;
  }
  public resetBlockMcast() {
    this._blockMcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMcastInput() {
    return this._blockMcast;
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

  // log_call_summary - computed: true, optional: true, required: false
  private _logCallSummary?: string; 
  public get logCallSummary() {
    return this.getStringAttribute('log_call_summary');
  }
  public set logCallSummary(value: string) {
    this._logCallSummary = value;
  }
  public resetLogCallSummary() {
    this._logCallSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCallSummaryInput() {
    return this._logCallSummary;
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

  // max_calls - computed: false, optional: true, required: false
  private _maxCalls?: number; 
  public get maxCalls() {
    return this.getNumberAttribute('max_calls');
  }
  public set maxCalls(value: number) {
    this._maxCalls = value;
  }
  public resetMaxCalls() {
    this._maxCalls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCallsInput() {
    return this._maxCalls;
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

  // verify_header - computed: true, optional: true, required: false
  private _verifyHeader?: string; 
  public get verifyHeader() {
    return this.getStringAttribute('verify_header');
  }
  public set verifyHeader(value: string) {
    this._verifyHeader = value;
  }
  public resetVerifyHeader() {
    this._verifyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyHeaderInput() {
    return this._verifyHeader;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      block_mcast: cdktf.stringToTerraform(this._blockMcast),
      id: cdktf.stringToTerraform(this._id),
      log_call_summary: cdktf.stringToTerraform(this._logCallSummary),
      log_violations: cdktf.stringToTerraform(this._logViolations),
      max_calls: cdktf.numberToTerraform(this._maxCalls),
      profile: cdktf.stringToTerraform(this._profile),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      status: cdktf.stringToTerraform(this._status),
      verify_header: cdktf.stringToTerraform(this._verifyHeader),
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
      block_mcast: {
        value: cdktf.stringToHclTerraform(this._blockMcast),
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
      log_call_summary: {
        value: cdktf.stringToHclTerraform(this._logCallSummary),
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
      max_calls: {
        value: cdktf.numberToHclTerraform(this._maxCalls),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      verify_header: {
        value: cdktf.stringToHclTerraform(this._verifyHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
