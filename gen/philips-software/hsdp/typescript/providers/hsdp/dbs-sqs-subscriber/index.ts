// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_sqs_subscriber
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbsSqsSubscriberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_sqs_subscriber#delivery_delay_seconds DbsSqsSubscriber#delivery_delay_seconds}
  */
  readonly deliveryDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_sqs_subscriber#description DbsSqsSubscriber#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_sqs_subscriber#id DbsSqsSubscriber#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_sqs_subscriber#message_retention_period_seconds DbsSqsSubscriber#message_retention_period_seconds}
  */
  readonly messageRetentionPeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_sqs_subscriber#name_infix DbsSqsSubscriber#name_infix}
  */
  readonly nameInfix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_sqs_subscriber#queue_type DbsSqsSubscriber#queue_type}
  */
  readonly queueType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_sqs_subscriber#receive_wait_time_seconds DbsSqsSubscriber#receive_wait_time_seconds}
  */
  readonly receiveWaitTimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_sqs_subscriber#server_side_encryption DbsSqsSubscriber#server_side_encryption}
  */
  readonly serverSideEncryption?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_sqs_subscriber hsdp_dbs_sqs_subscriber}
*/
export class DbsSqsSubscriber extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_dbs_sqs_subscriber";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbsSqsSubscriber resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbsSqsSubscriber to import
  * @param importFromId The id of the existing DbsSqsSubscriber that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_sqs_subscriber#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbsSqsSubscriber to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_dbs_sqs_subscriber", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_sqs_subscriber hsdp_dbs_sqs_subscriber} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbsSqsSubscriberConfig
  */
  public constructor(scope: Construct, id: string, config: DbsSqsSubscriberConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_dbs_sqs_subscriber',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deliveryDelaySeconds = config.deliveryDelaySeconds;
    this._description = config.description;
    this._id = config.id;
    this._messageRetentionPeriodSeconds = config.messageRetentionPeriodSeconds;
    this._nameInfix = config.nameInfix;
    this._queueType = config.queueType;
    this._receiveWaitTimeSeconds = config.receiveWaitTimeSeconds;
    this._serverSideEncryption = config.serverSideEncryption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delivery_delay_seconds - computed: false, optional: true, required: false
  private _deliveryDelaySeconds?: number; 
  public get deliveryDelaySeconds() {
    return this.getNumberAttribute('delivery_delay_seconds');
  }
  public set deliveryDelaySeconds(value: number) {
    this._deliveryDelaySeconds = value;
  }
  public resetDeliveryDelaySeconds() {
    this._deliveryDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryDelaySecondsInput() {
    return this._deliveryDelaySeconds;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // message_retention_period_seconds - computed: false, optional: true, required: false
  private _messageRetentionPeriodSeconds?: number; 
  public get messageRetentionPeriodSeconds() {
    return this.getNumberAttribute('message_retention_period_seconds');
  }
  public set messageRetentionPeriodSeconds(value: number) {
    this._messageRetentionPeriodSeconds = value;
  }
  public resetMessageRetentionPeriodSeconds() {
    this._messageRetentionPeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionPeriodSecondsInput() {
    return this._messageRetentionPeriodSeconds;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_infix - computed: false, optional: false, required: true
  private _nameInfix?: string; 
  public get nameInfix() {
    return this.getStringAttribute('name_infix');
  }
  public set nameInfix(value: string) {
    this._nameInfix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInfixInput() {
    return this._nameInfix;
  }

  // queue_name - computed: true, optional: false, required: false
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }

  // queue_type - computed: false, optional: false, required: true
  private _queueType?: string; 
  public get queueType() {
    return this.getStringAttribute('queue_type');
  }
  public set queueType(value: string) {
    this._queueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueTypeInput() {
    return this._queueType;
  }

  // receive_wait_time_seconds - computed: false, optional: true, required: false
  private _receiveWaitTimeSeconds?: number; 
  public get receiveWaitTimeSeconds() {
    return this.getNumberAttribute('receive_wait_time_seconds');
  }
  public set receiveWaitTimeSeconds(value: number) {
    this._receiveWaitTimeSeconds = value;
  }
  public resetReceiveWaitTimeSeconds() {
    this._receiveWaitTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveWaitTimeSecondsInput() {
    return this._receiveWaitTimeSeconds;
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption?: boolean | cdktf.IResolvable; 
  public get serverSideEncryption() {
    return this.getBooleanAttribute('server_side_encryption');
  }
  public set serverSideEncryption(value: boolean | cdktf.IResolvable) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delivery_delay_seconds: cdktf.numberToTerraform(this._deliveryDelaySeconds),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      message_retention_period_seconds: cdktf.numberToTerraform(this._messageRetentionPeriodSeconds),
      name_infix: cdktf.stringToTerraform(this._nameInfix),
      queue_type: cdktf.stringToTerraform(this._queueType),
      receive_wait_time_seconds: cdktf.numberToTerraform(this._receiveWaitTimeSeconds),
      server_side_encryption: cdktf.booleanToTerraform(this._serverSideEncryption),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delivery_delay_seconds: {
        value: cdktf.numberToHclTerraform(this._deliveryDelaySeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      message_retention_period_seconds: {
        value: cdktf.numberToHclTerraform(this._messageRetentionPeriodSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name_infix: {
        value: cdktf.stringToHclTerraform(this._nameInfix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_type: {
        value: cdktf.stringToHclTerraform(this._queueType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receive_wait_time_seconds: {
        value: cdktf.numberToHclTerraform(this._receiveWaitTimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_side_encryption: {
        value: cdktf.booleanToHclTerraform(this._serverSideEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
