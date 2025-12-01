// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MnsQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_queue#delay_seconds MnsQueue#delay_seconds}
  */
  readonly delaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_queue#id MnsQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_queue#maximum_message_size MnsQueue#maximum_message_size}
  */
  readonly maximumMessageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_queue#message_retention_period MnsQueue#message_retention_period}
  */
  readonly messageRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_queue#name MnsQueue#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_queue#polling_wait_seconds MnsQueue#polling_wait_seconds}
  */
  readonly pollingWaitSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_queue#visibility_timeout MnsQueue#visibility_timeout}
  */
  readonly visibilityTimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_queue alicloud_mns_queue}
*/
export class MnsQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_mns_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MnsQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MnsQueue to import
  * @param importFromId The id of the existing MnsQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MnsQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_mns_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_queue alicloud_mns_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MnsQueueConfig
  */
  public constructor(scope: Construct, id: string, config: MnsQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_mns_queue',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delaySeconds = config.delaySeconds;
    this._id = config.id;
    this._maximumMessageSize = config.maximumMessageSize;
    this._messageRetentionPeriod = config.messageRetentionPeriod;
    this._name = config.name;
    this._pollingWaitSeconds = config.pollingWaitSeconds;
    this._visibilityTimeout = config.visibilityTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay_seconds - computed: false, optional: true, required: false
  private _delaySeconds?: number; 
  public get delaySeconds() {
    return this.getNumberAttribute('delay_seconds');
  }
  public set delaySeconds(value: number) {
    this._delaySeconds = value;
  }
  public resetDelaySeconds() {
    this._delaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaySecondsInput() {
    return this._delaySeconds;
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

  // maximum_message_size - computed: false, optional: true, required: false
  private _maximumMessageSize?: number; 
  public get maximumMessageSize() {
    return this.getNumberAttribute('maximum_message_size');
  }
  public set maximumMessageSize(value: number) {
    this._maximumMessageSize = value;
  }
  public resetMaximumMessageSize() {
    this._maximumMessageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMessageSizeInput() {
    return this._maximumMessageSize;
  }

  // message_retention_period - computed: false, optional: true, required: false
  private _messageRetentionPeriod?: number; 
  public get messageRetentionPeriod() {
    return this.getNumberAttribute('message_retention_period');
  }
  public set messageRetentionPeriod(value: number) {
    this._messageRetentionPeriod = value;
  }
  public resetMessageRetentionPeriod() {
    this._messageRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionPeriodInput() {
    return this._messageRetentionPeriod;
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

  // polling_wait_seconds - computed: false, optional: true, required: false
  private _pollingWaitSeconds?: number; 
  public get pollingWaitSeconds() {
    return this.getNumberAttribute('polling_wait_seconds');
  }
  public set pollingWaitSeconds(value: number) {
    this._pollingWaitSeconds = value;
  }
  public resetPollingWaitSeconds() {
    this._pollingWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingWaitSecondsInput() {
    return this._pollingWaitSeconds;
  }

  // visibility_timeout - computed: false, optional: true, required: false
  private _visibilityTimeout?: number; 
  public get visibilityTimeout() {
    return this.getNumberAttribute('visibility_timeout');
  }
  public set visibilityTimeout(value: number) {
    this._visibilityTimeout = value;
  }
  public resetVisibilityTimeout() {
    this._visibilityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTimeoutInput() {
    return this._visibilityTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delay_seconds: cdktf.numberToTerraform(this._delaySeconds),
      id: cdktf.stringToTerraform(this._id),
      maximum_message_size: cdktf.numberToTerraform(this._maximumMessageSize),
      message_retention_period: cdktf.numberToTerraform(this._messageRetentionPeriod),
      name: cdktf.stringToTerraform(this._name),
      polling_wait_seconds: cdktf.numberToTerraform(this._pollingWaitSeconds),
      visibility_timeout: cdktf.numberToTerraform(this._visibilityTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay_seconds: {
        value: cdktf.numberToHclTerraform(this._delaySeconds),
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
      maximum_message_size: {
        value: cdktf.numberToHclTerraform(this._maximumMessageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_retention_period: {
        value: cdktf.numberToHclTerraform(this._messageRetentionPeriod),
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
      polling_wait_seconds: {
        value: cdktf.numberToHclTerraform(this._pollingWaitSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      visibility_timeout: {
        value: cdktf.numberToHclTerraform(this._visibilityTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
