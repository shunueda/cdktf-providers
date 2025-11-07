// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_connection_load
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbPolicyConnectionLoadAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable connection-load
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_connection_load#connection_load_enable GslbPolicyConnectionLoadA#connection_load_enable}
  */
  readonly connectionLoadEnable?: number;
  /**
  * Break when exceed limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_connection_load#connection_load_fail_break GslbPolicyConnectionLoadA#connection_load_fail_break}
  */
  readonly connectionLoadFailBreak?: number;
  /**
  * Interval between two samples, Unit: second (Interval value,default is 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_connection_load#connection_load_interval GslbPolicyConnectionLoadA#connection_load_interval}
  */
  readonly connectionLoadInterval?: number;
  /**
  * The value of the connection-load limit, default is unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_connection_load#connection_load_limit GslbPolicyConnectionLoadA#connection_load_limit}
  */
  readonly connectionLoadLimit?: number;
  /**
  * Specify samples for connection-load (Number of samples used to calculate the connection load, default is 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_connection_load#connection_load_samples GslbPolicyConnectionLoadA#connection_load_samples}
  */
  readonly connectionLoadSamples?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_connection_load#id GslbPolicyConnectionLoadA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Limit of maxinum connection load, default is unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_connection_load#limit GslbPolicyConnectionLoadA#limit}
  */
  readonly limit?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_connection_load#name GslbPolicyConnectionLoadA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_connection_load#uuid GslbPolicyConnectionLoadA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_connection_load thunder_gslb_policy_connection_load}
*/
export class GslbPolicyConnectionLoadA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_policy_connection_load";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbPolicyConnectionLoadA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbPolicyConnectionLoadA to import
  * @param importFromId The id of the existing GslbPolicyConnectionLoadA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_connection_load#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbPolicyConnectionLoadA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_policy_connection_load", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_connection_load thunder_gslb_policy_connection_load} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbPolicyConnectionLoadAConfig
  */
  public constructor(scope: Construct, id: string, config: GslbPolicyConnectionLoadAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_policy_connection_load',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionLoadEnable = config.connectionLoadEnable;
    this._connectionLoadFailBreak = config.connectionLoadFailBreak;
    this._connectionLoadInterval = config.connectionLoadInterval;
    this._connectionLoadLimit = config.connectionLoadLimit;
    this._connectionLoadSamples = config.connectionLoadSamples;
    this._id = config.id;
    this._limit = config.limit;
    this._name = config.name;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_load_enable - computed: false, optional: true, required: false
  private _connectionLoadEnable?: number; 
  public get connectionLoadEnable() {
    return this.getNumberAttribute('connection_load_enable');
  }
  public set connectionLoadEnable(value: number) {
    this._connectionLoadEnable = value;
  }
  public resetConnectionLoadEnable() {
    this._connectionLoadEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLoadEnableInput() {
    return this._connectionLoadEnable;
  }

  // connection_load_fail_break - computed: false, optional: true, required: false
  private _connectionLoadFailBreak?: number; 
  public get connectionLoadFailBreak() {
    return this.getNumberAttribute('connection_load_fail_break');
  }
  public set connectionLoadFailBreak(value: number) {
    this._connectionLoadFailBreak = value;
  }
  public resetConnectionLoadFailBreak() {
    this._connectionLoadFailBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLoadFailBreakInput() {
    return this._connectionLoadFailBreak;
  }

  // connection_load_interval - computed: false, optional: true, required: false
  private _connectionLoadInterval?: number; 
  public get connectionLoadInterval() {
    return this.getNumberAttribute('connection_load_interval');
  }
  public set connectionLoadInterval(value: number) {
    this._connectionLoadInterval = value;
  }
  public resetConnectionLoadInterval() {
    this._connectionLoadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLoadIntervalInput() {
    return this._connectionLoadInterval;
  }

  // connection_load_limit - computed: false, optional: true, required: false
  private _connectionLoadLimit?: number; 
  public get connectionLoadLimit() {
    return this.getNumberAttribute('connection_load_limit');
  }
  public set connectionLoadLimit(value: number) {
    this._connectionLoadLimit = value;
  }
  public resetConnectionLoadLimit() {
    this._connectionLoadLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLoadLimitInput() {
    return this._connectionLoadLimit;
  }

  // connection_load_samples - computed: false, optional: true, required: false
  private _connectionLoadSamples?: number; 
  public get connectionLoadSamples() {
    return this.getNumberAttribute('connection_load_samples');
  }
  public set connectionLoadSamples(value: number) {
    this._connectionLoadSamples = value;
  }
  public resetConnectionLoadSamples() {
    this._connectionLoadSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLoadSamplesInput() {
    return this._connectionLoadSamples;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_load_enable: cdktf.numberToTerraform(this._connectionLoadEnable),
      connection_load_fail_break: cdktf.numberToTerraform(this._connectionLoadFailBreak),
      connection_load_interval: cdktf.numberToTerraform(this._connectionLoadInterval),
      connection_load_limit: cdktf.numberToTerraform(this._connectionLoadLimit),
      connection_load_samples: cdktf.numberToTerraform(this._connectionLoadSamples),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_load_enable: {
        value: cdktf.numberToHclTerraform(this._connectionLoadEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_load_fail_break: {
        value: cdktf.numberToHclTerraform(this._connectionLoadFailBreak),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_load_interval: {
        value: cdktf.numberToHclTerraform(this._connectionLoadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_load_limit: {
        value: cdktf.numberToHclTerraform(this._connectionLoadLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_load_samples: {
        value: cdktf.numberToHclTerraform(this._connectionLoadSamples),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
