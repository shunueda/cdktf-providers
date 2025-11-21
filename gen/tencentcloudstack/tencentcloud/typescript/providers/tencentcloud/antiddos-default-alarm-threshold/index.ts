// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/antiddos_default_alarm_threshold
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntiddosDefaultAlarmThresholdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/antiddos_default_alarm_threshold#id AntiddosDefaultAlarmThreshold#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Product type, value [bgp (represents advanced defense package product) bgpip (represents advanced defense IP product)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/antiddos_default_alarm_threshold#instance_type AntiddosDefaultAlarmThreshold#instance_type}
  */
  readonly instanceType: string;
  /**
  * default_alarm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/antiddos_default_alarm_threshold#default_alarm_config AntiddosDefaultAlarmThreshold#default_alarm_config}
  */
  readonly defaultAlarmConfig: AntiddosDefaultAlarmThresholdDefaultAlarmConfig;
}
export interface AntiddosDefaultAlarmThresholdDefaultAlarmConfig {
  /**
  * Alarm threshold, in Mbps, with a value of&gt;=0; When used as an input parameter, setting 0 will delete the alarm threshold configuration;.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/antiddos_default_alarm_threshold#alarm_threshold AntiddosDefaultAlarmThreshold#alarm_threshold}
  */
  readonly alarmThreshold?: number;
  /**
  * Alarm threshold type, value [1 (incoming traffic alarm threshold) 2 (attack cleaning traffic alarm threshold)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/antiddos_default_alarm_threshold#alarm_type AntiddosDefaultAlarmThreshold#alarm_type}
  */
  readonly alarmType?: number;
}

export function antiddosDefaultAlarmThresholdDefaultAlarmConfigToTerraform(struct?: AntiddosDefaultAlarmThresholdDefaultAlarmConfigOutputReference | AntiddosDefaultAlarmThresholdDefaultAlarmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_threshold: cdktf.numberToTerraform(struct!.alarmThreshold),
    alarm_type: cdktf.numberToTerraform(struct!.alarmType),
  }
}


export function antiddosDefaultAlarmThresholdDefaultAlarmConfigToHclTerraform(struct?: AntiddosDefaultAlarmThresholdDefaultAlarmConfigOutputReference | AntiddosDefaultAlarmThresholdDefaultAlarmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm_threshold: {
      value: cdktf.numberToHclTerraform(struct!.alarmThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_type: {
      value: cdktf.numberToHclTerraform(struct!.alarmType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiddosDefaultAlarmThresholdDefaultAlarmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntiddosDefaultAlarmThresholdDefaultAlarmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmThreshold = this._alarmThreshold;
    }
    if (this._alarmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmType = this._alarmType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiddosDefaultAlarmThresholdDefaultAlarmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarmThreshold = undefined;
      this._alarmType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarmThreshold = value.alarmThreshold;
      this._alarmType = value.alarmType;
    }
  }

  // alarm_threshold - computed: false, optional: true, required: false
  private _alarmThreshold?: number; 
  public get alarmThreshold() {
    return this.getNumberAttribute('alarm_threshold');
  }
  public set alarmThreshold(value: number) {
    this._alarmThreshold = value;
  }
  public resetAlarmThreshold() {
    this._alarmThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmThresholdInput() {
    return this._alarmThreshold;
  }

  // alarm_type - computed: false, optional: true, required: false
  private _alarmType?: number; 
  public get alarmType() {
    return this.getNumberAttribute('alarm_type');
  }
  public set alarmType(value: number) {
    this._alarmType = value;
  }
  public resetAlarmType() {
    this._alarmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmTypeInput() {
    return this._alarmType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/antiddos_default_alarm_threshold tencentcloud_antiddos_default_alarm_threshold}
*/
export class AntiddosDefaultAlarmThreshold extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_antiddos_default_alarm_threshold";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntiddosDefaultAlarmThreshold resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntiddosDefaultAlarmThreshold to import
  * @param importFromId The id of the existing AntiddosDefaultAlarmThreshold that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/antiddos_default_alarm_threshold#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntiddosDefaultAlarmThreshold to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_antiddos_default_alarm_threshold", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/antiddos_default_alarm_threshold tencentcloud_antiddos_default_alarm_threshold} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntiddosDefaultAlarmThresholdConfig
  */
  public constructor(scope: Construct, id: string, config: AntiddosDefaultAlarmThresholdConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_antiddos_default_alarm_threshold',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
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
    this._instanceType = config.instanceType;
    this._defaultAlarmConfig.internalValue = config.defaultAlarmConfig;
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

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // default_alarm_config - computed: false, optional: false, required: true
  private _defaultAlarmConfig = new AntiddosDefaultAlarmThresholdDefaultAlarmConfigOutputReference(this, "default_alarm_config");
  public get defaultAlarmConfig() {
    return this._defaultAlarmConfig;
  }
  public putDefaultAlarmConfig(value: AntiddosDefaultAlarmThresholdDefaultAlarmConfig) {
    this._defaultAlarmConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAlarmConfigInput() {
    return this._defaultAlarmConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      default_alarm_config: antiddosDefaultAlarmThresholdDefaultAlarmConfigToTerraform(this._defaultAlarmConfig.internalValue),
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
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_alarm_config: {
        value: antiddosDefaultAlarmThresholdDefaultAlarmConfigToHclTerraform(this._defaultAlarmConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiddosDefaultAlarmThresholdDefaultAlarmConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
