// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/antiddos_ip_alarm_threshold_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntiddosIpAlarmThresholdConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alarm threshold, in Mbps, with a value of&gt;=0; When used as an input parameter, setting 0 will delete the alarm threshold configuration;.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/antiddos_ip_alarm_threshold_config#alarm_threshold AntiddosIpAlarmThresholdConfig#alarm_threshold}
  */
  readonly alarmThreshold: number;
  /**
  * Alarm threshold type, value [1 (incoming traffic alarm threshold) 2 (attack cleaning traffic alarm threshold)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/antiddos_ip_alarm_threshold_config#alarm_type AntiddosIpAlarmThresholdConfig#alarm_type}
  */
  readonly alarmType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/antiddos_ip_alarm_threshold_config#id AntiddosIpAlarmThresholdConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/antiddos_ip_alarm_threshold_config#instance_id AntiddosIpAlarmThresholdConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * Instance ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/antiddos_ip_alarm_threshold_config#instance_ip AntiddosIpAlarmThresholdConfig#instance_ip}
  */
  readonly instanceIp: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/antiddos_ip_alarm_threshold_config tencentcloud_antiddos_ip_alarm_threshold_config}
*/
export class AntiddosIpAlarmThresholdConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_antiddos_ip_alarm_threshold_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntiddosIpAlarmThresholdConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntiddosIpAlarmThresholdConfig to import
  * @param importFromId The id of the existing AntiddosIpAlarmThresholdConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/antiddos_ip_alarm_threshold_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntiddosIpAlarmThresholdConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_antiddos_ip_alarm_threshold_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/antiddos_ip_alarm_threshold_config tencentcloud_antiddos_ip_alarm_threshold_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntiddosIpAlarmThresholdConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AntiddosIpAlarmThresholdConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_antiddos_ip_alarm_threshold_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmThreshold = config.alarmThreshold;
    this._alarmType = config.alarmType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceIp = config.instanceIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_threshold - computed: false, optional: false, required: true
  private _alarmThreshold?: number; 
  public get alarmThreshold() {
    return this.getNumberAttribute('alarm_threshold');
  }
  public set alarmThreshold(value: number) {
    this._alarmThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmThresholdInput() {
    return this._alarmThreshold;
  }

  // alarm_type - computed: false, optional: false, required: true
  private _alarmType?: number; 
  public get alarmType() {
    return this.getNumberAttribute('alarm_type');
  }
  public set alarmType(value: number) {
    this._alarmType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmTypeInput() {
    return this._alarmType;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_ip - computed: false, optional: false, required: true
  private _instanceIp?: string; 
  public get instanceIp() {
    return this.getStringAttribute('instance_ip');
  }
  public set instanceIp(value: string) {
    this._instanceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIpInput() {
    return this._instanceIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_threshold: cdktf.numberToTerraform(this._alarmThreshold),
      alarm_type: cdktf.numberToTerraform(this._alarmType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_ip: cdktf.stringToTerraform(this._instanceIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_threshold: {
        value: cdktf.numberToHclTerraform(this._alarmThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alarm_type: {
        value: cdktf.numberToHclTerraform(this._alarmType),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_ip: {
        value: cdktf.stringToHclTerraform(this._instanceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
