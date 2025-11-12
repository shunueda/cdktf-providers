// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_topic_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbsTopicSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_topic_subscription#data_type DbsTopicSubscription#data_type}
  */
  readonly dataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_topic_subscription#deliver_data_only DbsTopicSubscription#deliver_data_only}
  */
  readonly deliverDataOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_topic_subscription#description DbsTopicSubscription#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_topic_subscription#id DbsTopicSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_topic_subscription#kinesis_stream_partition_key DbsTopicSubscription#kinesis_stream_partition_key}
  */
  readonly kinesisStreamPartitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_topic_subscription#name_infix DbsTopicSubscription#name_infix}
  */
  readonly nameInfix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_topic_subscription#subscriber_id DbsTopicSubscription#subscriber_id}
  */
  readonly subscriberId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_topic_subscription hsdp_dbs_topic_subscription}
*/
export class DbsTopicSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_dbs_topic_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbsTopicSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbsTopicSubscription to import
  * @param importFromId The id of the existing DbsTopicSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_topic_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbsTopicSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_dbs_topic_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/dbs_topic_subscription hsdp_dbs_topic_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbsTopicSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DbsTopicSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_dbs_topic_subscription',
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
    this._dataType = config.dataType;
    this._deliverDataOnly = config.deliverDataOnly;
    this._description = config.description;
    this._id = config.id;
    this._kinesisStreamPartitionKey = config.kinesisStreamPartitionKey;
    this._nameInfix = config.nameInfix;
    this._subscriberId = config.subscriberId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // deliver_data_only - computed: false, optional: true, required: false
  private _deliverDataOnly?: boolean | cdktf.IResolvable; 
  public get deliverDataOnly() {
    return this.getBooleanAttribute('deliver_data_only');
  }
  public set deliverDataOnly(value: boolean | cdktf.IResolvable) {
    this._deliverDataOnly = value;
  }
  public resetDeliverDataOnly() {
    this._deliverDataOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverDataOnlyInput() {
    return this._deliverDataOnly;
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

  // kinesis_stream_partition_key - computed: false, optional: true, required: false
  private _kinesisStreamPartitionKey?: string; 
  public get kinesisStreamPartitionKey() {
    return this.getStringAttribute('kinesis_stream_partition_key');
  }
  public set kinesisStreamPartitionKey(value: string) {
    this._kinesisStreamPartitionKey = value;
  }
  public resetKinesisStreamPartitionKey() {
    this._kinesisStreamPartitionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamPartitionKeyInput() {
    return this._kinesisStreamPartitionKey;
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

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subscriber_id - computed: false, optional: false, required: true
  private _subscriberId?: string; 
  public get subscriberId() {
    return this.getStringAttribute('subscriber_id');
  }
  public set subscriberId(value: string) {
    this._subscriberId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberIdInput() {
    return this._subscriberId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_type: cdktf.stringToTerraform(this._dataType),
      deliver_data_only: cdktf.booleanToTerraform(this._deliverDataOnly),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kinesis_stream_partition_key: cdktf.stringToTerraform(this._kinesisStreamPartitionKey),
      name_infix: cdktf.stringToTerraform(this._nameInfix),
      subscriber_id: cdktf.stringToTerraform(this._subscriberId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_type: {
        value: cdktf.stringToHclTerraform(this._dataType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deliver_data_only: {
        value: cdktf.booleanToHclTerraform(this._deliverDataOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      kinesis_stream_partition_key: {
        value: cdktf.stringToHclTerraform(this._kinesisStreamPartitionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_infix: {
        value: cdktf.stringToHclTerraform(this._nameInfix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriber_id: {
        value: cdktf.stringToHclTerraform(this._subscriberId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
