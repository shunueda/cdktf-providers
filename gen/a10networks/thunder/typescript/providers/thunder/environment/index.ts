// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/environment#id Environment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/environment#uuid Environment#uuid}
  */
  readonly uuid?: string;
  /**
  * threshold_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/environment#threshold_cfg Environment#threshold_cfg}
  */
  readonly thresholdCfg?: EnvironmentThresholdCfg;
  /**
  * update_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/environment#update_interval Environment#update_interval}
  */
  readonly updateInterval?: EnvironmentUpdateInterval;
}
export interface EnvironmentThresholdCfg {
  /**
  * High threshold value in Celsius - default 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/environment#high Environment#high}
  */
  readonly high?: number;
  /**
  * Low threshold value in Celsius - default 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/environment#low Environment#low}
  */
  readonly low?: number;
  /**
  * Medium threshold value in Celsius - default 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/environment#medium Environment#medium}
  */
  readonly medium?: number;
}

export function environmentThresholdCfgToTerraform(struct?: EnvironmentThresholdCfgOutputReference | EnvironmentThresholdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: cdktf.numberToTerraform(struct!.high),
    low: cdktf.numberToTerraform(struct!.low),
    medium: cdktf.numberToTerraform(struct!.medium),
  }
}


export function environmentThresholdCfgToHclTerraform(struct?: EnvironmentThresholdCfgOutputReference | EnvironmentThresholdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: cdktf.numberToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low: {
      value: cdktf.numberToHclTerraform(struct!.low),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    medium: {
      value: cdktf.numberToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentThresholdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentThresholdCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentThresholdCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._high = undefined;
      this._low = undefined;
      this._medium = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._high = value.high;
      this._low = value.low;
      this._medium = value.medium;
    }
  }

  // high - computed: false, optional: true, required: false
  private _high?: number; 
  public get high() {
    return this.getNumberAttribute('high');
  }
  public set high(value: number) {
    this._high = value;
  }
  public resetHigh() {
    this._high = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: false, optional: true, required: false
  private _low?: number; 
  public get low() {
    return this.getNumberAttribute('low');
  }
  public set low(value: number) {
    this._low = value;
  }
  public resetLow() {
    this._low = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: number; 
  public get medium() {
    return this.getNumberAttribute('medium');
  }
  public set medium(value: number) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }
}
export interface EnvironmentUpdateInterval {
  /**
  * Interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/environment#interval Environment#interval}
  */
  readonly interval?: number;
}

export function environmentUpdateIntervalToTerraform(struct?: EnvironmentUpdateIntervalOutputReference | EnvironmentUpdateInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function environmentUpdateIntervalToHclTerraform(struct?: EnvironmentUpdateIntervalOutputReference | EnvironmentUpdateInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentUpdateIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentUpdateInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentUpdateInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/environment thunder_environment}
*/
export class Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Environment to import
  * @param importFromId The id of the existing Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/environment thunder_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EnvironmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_environment',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._uuid = config.uuid;
    this._thresholdCfg.internalValue = config.thresholdCfg;
    this._updateInterval.internalValue = config.updateInterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // threshold_cfg - computed: false, optional: true, required: false
  private _thresholdCfg = new EnvironmentThresholdCfgOutputReference(this, "threshold_cfg");
  public get thresholdCfg() {
    return this._thresholdCfg;
  }
  public putThresholdCfg(value: EnvironmentThresholdCfg) {
    this._thresholdCfg.internalValue = value;
  }
  public resetThresholdCfg() {
    this._thresholdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCfgInput() {
    return this._thresholdCfg.internalValue;
  }

  // update_interval - computed: false, optional: true, required: false
  private _updateInterval = new EnvironmentUpdateIntervalOutputReference(this, "update_interval");
  public get updateInterval() {
    return this._updateInterval;
  }
  public putUpdateInterval(value: EnvironmentUpdateInterval) {
    this._updateInterval.internalValue = value;
  }
  public resetUpdateInterval() {
    this._updateInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      threshold_cfg: environmentThresholdCfgToTerraform(this._thresholdCfg.internalValue),
      update_interval: environmentUpdateIntervalToTerraform(this._updateInterval.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      threshold_cfg: {
        value: environmentThresholdCfgToHclTerraform(this._thresholdCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnvironmentThresholdCfgList",
      },
      update_interval: {
        value: environmentUpdateIntervalToHclTerraform(this._updateInterval.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnvironmentUpdateIntervalList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
