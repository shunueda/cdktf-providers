// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlarmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable an alarm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm#enabled Alarm#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm#id Alarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm#instance_id Alarm#instance_id}
  */
  readonly instanceId: number;
  /**
  * Message types (total, unacked, ready) of the queue to trigger the alarm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm#message_type Alarm#message_type}
  */
  readonly messageType?: string;
  /**
  * Regex for which queues to check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm#queue_regex Alarm#queue_regex}
  */
  readonly queueRegex?: string;
  /**
  * Identifiers for recipients to be notified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm#recipients Alarm#recipients}
  */
  readonly recipients: number[];
  /**
  * The reminder interval (in seconds) to resend the alarm if not resolved. Set to 0 for no reminders. The Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm#reminder_interval Alarm#reminder_interval}
  */
  readonly reminderInterval?: number;
  /**
  * For how long (in seconds) the value_threshold should be active before trigger alarm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm#time_threshold Alarm#time_threshold}
  */
  readonly timeThreshold?: number;
  /**
  * Type of the alarm, valid options are: cpu, memory, disk_usage, queue_length, connection_count, consumers_count, net_split
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm#type Alarm#type}
  */
  readonly type: string;
  /**
  * Disk value threshold calculation. Fixed or percentage of disk space remaining
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm#value_calculation Alarm#value_calculation}
  */
  readonly valueCalculation?: string;
  /**
  * What value to trigger the alarm for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm#value_threshold Alarm#value_threshold}
  */
  readonly valueThreshold?: number;
  /**
  * Regex for which vhost the queues are in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm#vhost_regex Alarm#vhost_regex}
  */
  readonly vhostRegex?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm cloudamqp_alarm}
*/
export class Alarm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_alarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alarm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alarm to import
  * @param importFromId The id of the existing Alarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_alarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/alarm cloudamqp_alarm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlarmConfig
  */
  public constructor(scope: Construct, id: string, config: AlarmConfig) {
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._messageType = config.messageType;
    this._queueRegex = config.queueRegex;
    this._recipients = config.recipients;
    this._reminderInterval = config.reminderInterval;
    this._timeThreshold = config.timeThreshold;
    this._type = config.type;
    this._valueCalculation = config.valueCalculation;
    this._valueThreshold = config.valueThreshold;
    this._vhostRegex = config.vhostRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }

  // queue_regex - computed: false, optional: true, required: false
  private _queueRegex?: string; 
  public get queueRegex() {
    return this.getStringAttribute('queue_regex');
  }
  public set queueRegex(value: string) {
    this._queueRegex = value;
  }
  public resetQueueRegex() {
    this._queueRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueRegexInput() {
    return this._queueRegex;
  }

  // recipients - computed: false, optional: false, required: true
  private _recipients?: number[]; 
  public get recipients() {
    return this.getNumberListAttribute('recipients');
  }
  public set recipients(value: number[]) {
    this._recipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // reminder_interval - computed: false, optional: true, required: false
  private _reminderInterval?: number; 
  public get reminderInterval() {
    return this.getNumberAttribute('reminder_interval');
  }
  public set reminderInterval(value: number) {
    this._reminderInterval = value;
  }
  public resetReminderInterval() {
    this._reminderInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reminderIntervalInput() {
    return this._reminderInterval;
  }

  // time_threshold - computed: false, optional: true, required: false
  private _timeThreshold?: number; 
  public get timeThreshold() {
    return this.getNumberAttribute('time_threshold');
  }
  public set timeThreshold(value: number) {
    this._timeThreshold = value;
  }
  public resetTimeThreshold() {
    this._timeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeThresholdInput() {
    return this._timeThreshold;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
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

  // value_threshold - computed: false, optional: true, required: false
  private _valueThreshold?: number; 
  public get valueThreshold() {
    return this.getNumberAttribute('value_threshold');
  }
  public set valueThreshold(value: number) {
    this._valueThreshold = value;
  }
  public resetValueThreshold() {
    this._valueThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueThresholdInput() {
    return this._valueThreshold;
  }

  // vhost_regex - computed: false, optional: true, required: false
  private _vhostRegex?: string; 
  public get vhostRegex() {
    return this.getStringAttribute('vhost_regex');
  }
  public set vhostRegex(value: string) {
    this._vhostRegex = value;
  }
  public resetVhostRegex() {
    this._vhostRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostRegexInput() {
    return this._vhostRegex;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      message_type: cdktf.stringToTerraform(this._messageType),
      queue_regex: cdktf.stringToTerraform(this._queueRegex),
      recipients: cdktf.listMapper(cdktf.numberToTerraform, false)(this._recipients),
      reminder_interval: cdktf.numberToTerraform(this._reminderInterval),
      time_threshold: cdktf.numberToTerraform(this._timeThreshold),
      type: cdktf.stringToTerraform(this._type),
      value_calculation: cdktf.stringToTerraform(this._valueCalculation),
      value_threshold: cdktf.numberToTerraform(this._valueThreshold),
      vhost_regex: cdktf.stringToTerraform(this._vhostRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      message_type: {
        value: cdktf.stringToHclTerraform(this._messageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_regex: {
        value: cdktf.stringToHclTerraform(this._queueRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recipients: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._recipients),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      reminder_interval: {
        value: cdktf.numberToHclTerraform(this._reminderInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_threshold: {
        value: cdktf.numberToHclTerraform(this._timeThreshold),
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
      value_threshold: {
        value: cdktf.numberToHclTerraform(this._valueThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vhost_regex: {
        value: cdktf.stringToHclTerraform(this._vhostRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
