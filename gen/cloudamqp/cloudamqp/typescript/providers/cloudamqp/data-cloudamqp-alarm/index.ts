// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/data-sources/alarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudamqpAlarmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alarm identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/data-sources/alarm#alarm_id DataCloudamqpAlarm#alarm_id}
  */
  readonly alarmId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/data-sources/alarm#id DataCloudamqpAlarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/data-sources/alarm#instance_id DataCloudamqpAlarm#instance_id}
  */
  readonly instanceId: number;
  /**
  * Type of the alarm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/data-sources/alarm#type DataCloudamqpAlarm#type}
  */
  readonly type?: string;
  /**
  * Disk value threshold calculation. Fixed or percentage of disk space remaining
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/data-sources/alarm#value_calculation DataCloudamqpAlarm#value_calculation}
  */
  readonly valueCalculation?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/data-sources/alarm cloudamqp_alarm}
*/
export class DataCloudamqpAlarm extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_alarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudamqpAlarm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudamqpAlarm to import
  * @param importFromId The id of the existing DataCloudamqpAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/data-sources/alarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudamqpAlarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_alarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/data-sources/alarm cloudamqp_alarm} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudamqpAlarmConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudamqpAlarmConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_alarm',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.41.0',
        providerVersionConstraint: '1.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmId = config.alarmId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._type = config.type;
    this._valueCalculation = config.valueCalculation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_id - computed: false, optional: true, required: false
  private _alarmId?: number; 
  public get alarmId() {
    return this.getNumberAttribute('alarm_id');
  }
  public set alarmId(value: number) {
    this._alarmId = value;
  }
  public resetAlarmId() {
    this._alarmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmIdInput() {
    return this._alarmId;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // message_type - computed: true, optional: false, required: false
  public get messageType() {
    return this.getStringAttribute('message_type');
  }

  // queue_regex - computed: true, optional: false, required: false
  public get queueRegex() {
    return this.getStringAttribute('queue_regex');
  }

  // recipients - computed: true, optional: false, required: false
  public get recipients() {
    return this.getNumberListAttribute('recipients');
  }

  // reminder_interval - computed: true, optional: false, required: false
  public get reminderInterval() {
    return this.getNumberAttribute('reminder_interval');
  }

  // time_threshold - computed: true, optional: false, required: false
  public get timeThreshold() {
    return this.getNumberAttribute('time_threshold');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value_calculation - computed: false, optional: true, required: false
  private _valueCalculation?: string; 
  public get valueCalculation() {
    return this.getStringAttribute('value_calculation');
  }
  public set valueCalculation(value: string) {
    this._valueCalculation = value;
  }
  public resetValueCalculation() {
    this._valueCalculation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueCalculationInput() {
    return this._valueCalculation;
  }

  // value_threshold - computed: true, optional: false, required: false
  public get valueThreshold() {
    return this.getNumberAttribute('value_threshold');
  }

  // vhost_regex - computed: true, optional: false, required: false
  public get vhostRegex() {
    return this.getStringAttribute('vhost_regex');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_id: cdktf.numberToTerraform(this._alarmId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      type: cdktf.stringToTerraform(this._type),
      value_calculation: cdktf.stringToTerraform(this._valueCalculation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_id: {
        value: cdktf.numberToHclTerraform(this._alarmId),
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
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_calculation: {
        value: cdktf.stringToHclTerraform(this._valueCalculation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
