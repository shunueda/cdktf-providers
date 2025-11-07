// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbPolicyActiveRdtAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Active round-delay-time by controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#controller GslbPolicyActiveRdtA#controller}
  */
  readonly controller?: number;
  /**
  * The difference between the round-delay-time, default is 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#difference GslbPolicyActiveRdtA#difference}
  */
  readonly difference?: number;
  /**
  * Enable the active rdt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#enable GslbPolicyActiveRdtA#enable}
  */
  readonly enable?: number;
  /**
  * Break when no valid RDT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#fail_break GslbPolicyActiveRdtA#fail_break}
  */
  readonly failBreak?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#id GslbPolicyActiveRdtA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignore IP Address specified in IP List by ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#ignore_id GslbPolicyActiveRdtA#ignore_id}
  */
  readonly ignoreId?: number;
  /**
  * Keep tracking client even round-delay-time samples are ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#keep_tracking GslbPolicyActiveRdtA#keep_tracking}
  */
  readonly keepTracking?: number;
  /**
  * Limit of allowed RDT, default is 16383 (Limit, unit: millisecond)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#limit GslbPolicyActiveRdtA#limit}
  */
  readonly limit?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#name GslbPolicyActiveRdtA#name}
  */
  readonly name: string;
  /**
  * Enable the round-delay-time to the controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#proto_rdt_enable GslbPolicyActiveRdtA#proto_rdt_enable}
  */
  readonly protoRdtEnable?: number;
  /**
  * Specify samples number for round-delay-time (Number of samples,default is 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#samples GslbPolicyActiveRdtA#samples}
  */
  readonly samples?: number;
  /**
  * Single Shot RDT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#single_shot GslbPolicyActiveRdtA#single_shot}
  */
  readonly singleShot?: number;
  /**
  * Skip query if round-delay-time samples are not ready (Specify maximum skip count,default is 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#skip GslbPolicyActiveRdtA#skip}
  */
  readonly skip?: number;
  /**
  * Specify timeout if round-delay-time samples are not ready (Specify timeout, unit:sec,default is 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#timeout GslbPolicyActiveRdtA#timeout}
  */
  readonly timeout?: number;
  /**
  * The difference percentage between the round-delay-time, default is 10 (Tolerance)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#tolerance GslbPolicyActiveRdtA#tolerance}
  */
  readonly tolerance?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#uuid GslbPolicyActiveRdtA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt thunder_gslb_policy_active_rdt}
*/
export class GslbPolicyActiveRdtA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_policy_active_rdt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbPolicyActiveRdtA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbPolicyActiveRdtA to import
  * @param importFromId The id of the existing GslbPolicyActiveRdtA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbPolicyActiveRdtA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_policy_active_rdt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_active_rdt thunder_gslb_policy_active_rdt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbPolicyActiveRdtAConfig
  */
  public constructor(scope: Construct, id: string, config: GslbPolicyActiveRdtAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_policy_active_rdt',
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
    this._controller = config.controller;
    this._difference = config.difference;
    this._enable = config.enable;
    this._failBreak = config.failBreak;
    this._id = config.id;
    this._ignoreId = config.ignoreId;
    this._keepTracking = config.keepTracking;
    this._limit = config.limit;
    this._name = config.name;
    this._protoRdtEnable = config.protoRdtEnable;
    this._samples = config.samples;
    this._singleShot = config.singleShot;
    this._skip = config.skip;
    this._timeout = config.timeout;
    this._tolerance = config.tolerance;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // controller - computed: false, optional: true, required: false
  private _controller?: number; 
  public get controller() {
    return this.getNumberAttribute('controller');
  }
  public set controller(value: number) {
    this._controller = value;
  }
  public resetController() {
    this._controller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller;
  }

  // difference - computed: false, optional: true, required: false
  private _difference?: number; 
  public get difference() {
    return this.getNumberAttribute('difference');
  }
  public set difference(value: number) {
    this._difference = value;
  }
  public resetDifference() {
    this._difference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get differenceInput() {
    return this._difference;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // fail_break - computed: false, optional: true, required: false
  private _failBreak?: number; 
  public get failBreak() {
    return this.getNumberAttribute('fail_break');
  }
  public set failBreak(value: number) {
    this._failBreak = value;
  }
  public resetFailBreak() {
    this._failBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failBreakInput() {
    return this._failBreak;
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

  // ignore_id - computed: false, optional: true, required: false
  private _ignoreId?: number; 
  public get ignoreId() {
    return this.getNumberAttribute('ignore_id');
  }
  public set ignoreId(value: number) {
    this._ignoreId = value;
  }
  public resetIgnoreId() {
    this._ignoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreIdInput() {
    return this._ignoreId;
  }

  // keep_tracking - computed: false, optional: true, required: false
  private _keepTracking?: number; 
  public get keepTracking() {
    return this.getNumberAttribute('keep_tracking');
  }
  public set keepTracking(value: number) {
    this._keepTracking = value;
  }
  public resetKeepTracking() {
    this._keepTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTrackingInput() {
    return this._keepTracking;
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

  // proto_rdt_enable - computed: false, optional: true, required: false
  private _protoRdtEnable?: number; 
  public get protoRdtEnable() {
    return this.getNumberAttribute('proto_rdt_enable');
  }
  public set protoRdtEnable(value: number) {
    this._protoRdtEnable = value;
  }
  public resetProtoRdtEnable() {
    this._protoRdtEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoRdtEnableInput() {
    return this._protoRdtEnable;
  }

  // samples - computed: false, optional: true, required: false
  private _samples?: number; 
  public get samples() {
    return this.getNumberAttribute('samples');
  }
  public set samples(value: number) {
    this._samples = value;
  }
  public resetSamples() {
    this._samples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesInput() {
    return this._samples;
  }

  // single_shot - computed: false, optional: true, required: false
  private _singleShot?: number; 
  public get singleShot() {
    return this.getNumberAttribute('single_shot');
  }
  public set singleShot(value: number) {
    this._singleShot = value;
  }
  public resetSingleShot() {
    this._singleShot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleShotInput() {
    return this._singleShot;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: number; 
  public get skip() {
    return this.getNumberAttribute('skip');
  }
  public set skip(value: number) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tolerance - computed: false, optional: true, required: false
  private _tolerance?: number; 
  public get tolerance() {
    return this.getNumberAttribute('tolerance');
  }
  public set tolerance(value: number) {
    this._tolerance = value;
  }
  public resetTolerance() {
    this._tolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleranceInput() {
    return this._tolerance;
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
      controller: cdktf.numberToTerraform(this._controller),
      difference: cdktf.numberToTerraform(this._difference),
      enable: cdktf.numberToTerraform(this._enable),
      fail_break: cdktf.numberToTerraform(this._failBreak),
      id: cdktf.stringToTerraform(this._id),
      ignore_id: cdktf.numberToTerraform(this._ignoreId),
      keep_tracking: cdktf.numberToTerraform(this._keepTracking),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      proto_rdt_enable: cdktf.numberToTerraform(this._protoRdtEnable),
      samples: cdktf.numberToTerraform(this._samples),
      single_shot: cdktf.numberToTerraform(this._singleShot),
      skip: cdktf.numberToTerraform(this._skip),
      timeout: cdktf.numberToTerraform(this._timeout),
      tolerance: cdktf.numberToTerraform(this._tolerance),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      controller: {
        value: cdktf.numberToHclTerraform(this._controller),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      difference: {
        value: cdktf.numberToHclTerraform(this._difference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fail_break: {
        value: cdktf.numberToHclTerraform(this._failBreak),
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
      ignore_id: {
        value: cdktf.numberToHclTerraform(this._ignoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keep_tracking: {
        value: cdktf.numberToHclTerraform(this._keepTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      proto_rdt_enable: {
        value: cdktf.numberToHclTerraform(this._protoRdtEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      samples: {
        value: cdktf.numberToHclTerraform(this._samples),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      single_shot: {
        value: cdktf.numberToHclTerraform(this._singleShot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip: {
        value: cdktf.numberToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tolerance: {
        value: cdktf.numberToHclTerraform(this._tolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
