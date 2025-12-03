// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/cfw_alarm_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfwAlarmConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the alarm period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/cfw_alarm_config#alarm_time_period CfwAlarmConfig#alarm_time_period}
  */
  readonly alarmTimePeriod: number;
  /**
  * Specifies the alarm type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/cfw_alarm_config#alarm_type CfwAlarmConfig#alarm_type}
  */
  readonly alarmType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/cfw_alarm_config#enable_force_new CfwAlarmConfig#enable_force_new}
  */
  readonly enableForceNew?: string;
  /**
  * Specifies the alarm triggering frequency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/cfw_alarm_config#frequency_count CfwAlarmConfig#frequency_count}
  */
  readonly frequencyCount: number;
  /**
  * Specifies the alarm frequency time range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/cfw_alarm_config#frequency_time CfwAlarmConfig#frequency_time}
  */
  readonly frequencyTime: number;
  /**
  * Specifies the firewall ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/cfw_alarm_config#fw_instance_id CfwAlarmConfig#fw_instance_id}
  */
  readonly fwInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/cfw_alarm_config#id CfwAlarmConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The region in which to create the resource. If omitted, the provider-level region will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/cfw_alarm_config#region CfwAlarmConfig#region}
  */
  readonly region?: string;
  /**
  * Specifies the alarm severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/cfw_alarm_config#severity CfwAlarmConfig#severity}
  */
  readonly severity: string;
  /**
  * Specifies the alarm URN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/cfw_alarm_config#topic_urn CfwAlarmConfig#topic_urn}
  */
  readonly topicUrn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/cfw_alarm_config sbercloud_cfw_alarm_config}
*/
export class CfwAlarmConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_cfw_alarm_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfwAlarmConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfwAlarmConfig to import
  * @param importFromId The id of the existing CfwAlarmConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/cfw_alarm_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfwAlarmConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_cfw_alarm_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/cfw_alarm_config sbercloud_cfw_alarm_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfwAlarmConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CfwAlarmConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_cfw_alarm_config',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.15',
        providerVersionConstraint: '1.12.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmTimePeriod = config.alarmTimePeriod;
    this._alarmType = config.alarmType;
    this._enableForceNew = config.enableForceNew;
    this._frequencyCount = config.frequencyCount;
    this._frequencyTime = config.frequencyTime;
    this._fwInstanceId = config.fwInstanceId;
    this._id = config.id;
    this._region = config.region;
    this._severity = config.severity;
    this._topicUrn = config.topicUrn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_time_period - computed: false, optional: false, required: true
  private _alarmTimePeriod?: number; 
  public get alarmTimePeriod() {
    return this.getNumberAttribute('alarm_time_period');
  }
  public set alarmTimePeriod(value: number) {
    this._alarmTimePeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmTimePeriodInput() {
    return this._alarmTimePeriod;
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

  // enable_force_new - computed: false, optional: true, required: false
  private _enableForceNew?: string; 
  public get enableForceNew() {
    return this.getStringAttribute('enable_force_new');
  }
  public set enableForceNew(value: string) {
    this._enableForceNew = value;
  }
  public resetEnableForceNew() {
    this._enableForceNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableForceNewInput() {
    return this._enableForceNew;
  }

  // frequency_count - computed: false, optional: false, required: true
  private _frequencyCount?: number; 
  public get frequencyCount() {
    return this.getNumberAttribute('frequency_count');
  }
  public set frequencyCount(value: number) {
    this._frequencyCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyCountInput() {
    return this._frequencyCount;
  }

  // frequency_time - computed: false, optional: false, required: true
  private _frequencyTime?: number; 
  public get frequencyTime() {
    return this.getNumberAttribute('frequency_time');
  }
  public set frequencyTime(value: number) {
    this._frequencyTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyTimeInput() {
    return this._frequencyTime;
  }

  // fw_instance_id - computed: false, optional: false, required: true
  private _fwInstanceId?: string; 
  public get fwInstanceId() {
    return this.getStringAttribute('fw_instance_id');
  }
  public set fwInstanceId(value: string) {
    this._fwInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fwInstanceIdInput() {
    return this._fwInstanceId;
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

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // topic_urn - computed: false, optional: false, required: true
  private _topicUrn?: string; 
  public get topicUrn() {
    return this.getStringAttribute('topic_urn');
  }
  public set topicUrn(value: string) {
    this._topicUrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicUrnInput() {
    return this._topicUrn;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_time_period: cdktf.numberToTerraform(this._alarmTimePeriod),
      alarm_type: cdktf.numberToTerraform(this._alarmType),
      enable_force_new: cdktf.stringToTerraform(this._enableForceNew),
      frequency_count: cdktf.numberToTerraform(this._frequencyCount),
      frequency_time: cdktf.numberToTerraform(this._frequencyTime),
      fw_instance_id: cdktf.stringToTerraform(this._fwInstanceId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      severity: cdktf.stringToTerraform(this._severity),
      topic_urn: cdktf.stringToTerraform(this._topicUrn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_time_period: {
        value: cdktf.numberToHclTerraform(this._alarmTimePeriod),
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
      enable_force_new: {
        value: cdktf.stringToHclTerraform(this._enableForceNew),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency_count: {
        value: cdktf.numberToHclTerraform(this._frequencyCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frequency_time: {
        value: cdktf.numberToHclTerraform(this._frequencyTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fw_instance_id: {
        value: cdktf.stringToHclTerraform(this._fwInstanceId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      topic_urn: {
        value: cdktf.stringToHclTerraform(this._topicUrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
