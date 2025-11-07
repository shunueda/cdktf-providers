// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigAggregateDeliveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#aggregator_id ConfigAggregateDelivery#aggregator_id}
  */
  readonly aggregatorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#configuration_item_change_notification ConfigAggregateDelivery#configuration_item_change_notification}
  */
  readonly configurationItemChangeNotification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#configuration_snapshot ConfigAggregateDelivery#configuration_snapshot}
  */
  readonly configurationSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#delivery_channel_condition ConfigAggregateDelivery#delivery_channel_condition}
  */
  readonly deliveryChannelCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#delivery_channel_name ConfigAggregateDelivery#delivery_channel_name}
  */
  readonly deliveryChannelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#delivery_channel_target_arn ConfigAggregateDelivery#delivery_channel_target_arn}
  */
  readonly deliveryChannelTargetArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#delivery_channel_type ConfigAggregateDelivery#delivery_channel_type}
  */
  readonly deliveryChannelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#description ConfigAggregateDelivery#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#id ConfigAggregateDelivery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#non_compliant_notification ConfigAggregateDelivery#non_compliant_notification}
  */
  readonly nonCompliantNotification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#oversized_data_oss_target_arn ConfigAggregateDelivery#oversized_data_oss_target_arn}
  */
  readonly oversizedDataOssTargetArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#status ConfigAggregateDelivery#status}
  */
  readonly status?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#timeouts ConfigAggregateDelivery#timeouts}
  */
  readonly timeouts?: ConfigAggregateDeliveryTimeouts;
}
export interface ConfigAggregateDeliveryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#create ConfigAggregateDelivery#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#delete ConfigAggregateDelivery#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#update ConfigAggregateDelivery#update}
  */
  readonly update?: string;
}

export function configAggregateDeliveryTimeoutsToTerraform(struct?: ConfigAggregateDeliveryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function configAggregateDeliveryTimeoutsToHclTerraform(struct?: ConfigAggregateDeliveryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigAggregateDeliveryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigAggregateDeliveryTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigAggregateDeliveryTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery alicloud_config_aggregate_delivery}
*/
export class ConfigAggregateDelivery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_config_aggregate_delivery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigAggregateDelivery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigAggregateDelivery to import
  * @param importFromId The id of the existing ConfigAggregateDelivery that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigAggregateDelivery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_config_aggregate_delivery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/config_aggregate_delivery alicloud_config_aggregate_delivery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigAggregateDeliveryConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigAggregateDeliveryConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_config_aggregate_delivery',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregatorId = config.aggregatorId;
    this._configurationItemChangeNotification = config.configurationItemChangeNotification;
    this._configurationSnapshot = config.configurationSnapshot;
    this._deliveryChannelCondition = config.deliveryChannelCondition;
    this._deliveryChannelName = config.deliveryChannelName;
    this._deliveryChannelTargetArn = config.deliveryChannelTargetArn;
    this._deliveryChannelType = config.deliveryChannelType;
    this._description = config.description;
    this._id = config.id;
    this._nonCompliantNotification = config.nonCompliantNotification;
    this._oversizedDataOssTargetArn = config.oversizedDataOssTargetArn;
    this._status = config.status;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregator_id - computed: false, optional: false, required: true
  private _aggregatorId?: string; 
  public get aggregatorId() {
    return this.getStringAttribute('aggregator_id');
  }
  public set aggregatorId(value: string) {
    this._aggregatorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorIdInput() {
    return this._aggregatorId;
  }

  // configuration_item_change_notification - computed: false, optional: true, required: false
  private _configurationItemChangeNotification?: boolean | cdktf.IResolvable; 
  public get configurationItemChangeNotification() {
    return this.getBooleanAttribute('configuration_item_change_notification');
  }
  public set configurationItemChangeNotification(value: boolean | cdktf.IResolvable) {
    this._configurationItemChangeNotification = value;
  }
  public resetConfigurationItemChangeNotification() {
    this._configurationItemChangeNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationItemChangeNotificationInput() {
    return this._configurationItemChangeNotification;
  }

  // configuration_snapshot - computed: false, optional: true, required: false
  private _configurationSnapshot?: boolean | cdktf.IResolvable; 
  public get configurationSnapshot() {
    return this.getBooleanAttribute('configuration_snapshot');
  }
  public set configurationSnapshot(value: boolean | cdktf.IResolvable) {
    this._configurationSnapshot = value;
  }
  public resetConfigurationSnapshot() {
    this._configurationSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSnapshotInput() {
    return this._configurationSnapshot;
  }

  // delivery_channel_condition - computed: false, optional: true, required: false
  private _deliveryChannelCondition?: string; 
  public get deliveryChannelCondition() {
    return this.getStringAttribute('delivery_channel_condition');
  }
  public set deliveryChannelCondition(value: string) {
    this._deliveryChannelCondition = value;
  }
  public resetDeliveryChannelCondition() {
    this._deliveryChannelCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryChannelConditionInput() {
    return this._deliveryChannelCondition;
  }

  // delivery_channel_id - computed: true, optional: false, required: false
  public get deliveryChannelId() {
    return this.getStringAttribute('delivery_channel_id');
  }

  // delivery_channel_name - computed: false, optional: true, required: false
  private _deliveryChannelName?: string; 
  public get deliveryChannelName() {
    return this.getStringAttribute('delivery_channel_name');
  }
  public set deliveryChannelName(value: string) {
    this._deliveryChannelName = value;
  }
  public resetDeliveryChannelName() {
    this._deliveryChannelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryChannelNameInput() {
    return this._deliveryChannelName;
  }

  // delivery_channel_target_arn - computed: false, optional: false, required: true
  private _deliveryChannelTargetArn?: string; 
  public get deliveryChannelTargetArn() {
    return this.getStringAttribute('delivery_channel_target_arn');
  }
  public set deliveryChannelTargetArn(value: string) {
    this._deliveryChannelTargetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryChannelTargetArnInput() {
    return this._deliveryChannelTargetArn;
  }

  // delivery_channel_type - computed: false, optional: false, required: true
  private _deliveryChannelType?: string; 
  public get deliveryChannelType() {
    return this.getStringAttribute('delivery_channel_type');
  }
  public set deliveryChannelType(value: string) {
    this._deliveryChannelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryChannelTypeInput() {
    return this._deliveryChannelType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
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

  // non_compliant_notification - computed: false, optional: true, required: false
  private _nonCompliantNotification?: boolean | cdktf.IResolvable; 
  public get nonCompliantNotification() {
    return this.getBooleanAttribute('non_compliant_notification');
  }
  public set nonCompliantNotification(value: boolean | cdktf.IResolvable) {
    this._nonCompliantNotification = value;
  }
  public resetNonCompliantNotification() {
    this._nonCompliantNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonCompliantNotificationInput() {
    return this._nonCompliantNotification;
  }

  // oversized_data_oss_target_arn - computed: false, optional: true, required: false
  private _oversizedDataOssTargetArn?: string; 
  public get oversizedDataOssTargetArn() {
    return this.getStringAttribute('oversized_data_oss_target_arn');
  }
  public set oversizedDataOssTargetArn(value: string) {
    this._oversizedDataOssTargetArn = value;
  }
  public resetOversizedDataOssTargetArn() {
    this._oversizedDataOssTargetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizedDataOssTargetArnInput() {
    return this._oversizedDataOssTargetArn;
  }

  // status - computed: true, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConfigAggregateDeliveryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConfigAggregateDeliveryTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregator_id: cdktf.stringToTerraform(this._aggregatorId),
      configuration_item_change_notification: cdktf.booleanToTerraform(this._configurationItemChangeNotification),
      configuration_snapshot: cdktf.booleanToTerraform(this._configurationSnapshot),
      delivery_channel_condition: cdktf.stringToTerraform(this._deliveryChannelCondition),
      delivery_channel_name: cdktf.stringToTerraform(this._deliveryChannelName),
      delivery_channel_target_arn: cdktf.stringToTerraform(this._deliveryChannelTargetArn),
      delivery_channel_type: cdktf.stringToTerraform(this._deliveryChannelType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      non_compliant_notification: cdktf.booleanToTerraform(this._nonCompliantNotification),
      oversized_data_oss_target_arn: cdktf.stringToTerraform(this._oversizedDataOssTargetArn),
      status: cdktf.numberToTerraform(this._status),
      timeouts: configAggregateDeliveryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregator_id: {
        value: cdktf.stringToHclTerraform(this._aggregatorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_item_change_notification: {
        value: cdktf.booleanToHclTerraform(this._configurationItemChangeNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      configuration_snapshot: {
        value: cdktf.booleanToHclTerraform(this._configurationSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delivery_channel_condition: {
        value: cdktf.stringToHclTerraform(this._deliveryChannelCondition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_channel_name: {
        value: cdktf.stringToHclTerraform(this._deliveryChannelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_channel_target_arn: {
        value: cdktf.stringToHclTerraform(this._deliveryChannelTargetArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_channel_type: {
        value: cdktf.stringToHclTerraform(this._deliveryChannelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      non_compliant_notification: {
        value: cdktf.booleanToHclTerraform(this._nonCompliantNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oversized_data_oss_target_arn: {
        value: cdktf.stringToHclTerraform(this._oversizedDataOssTargetArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: configAggregateDeliveryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigAggregateDeliveryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
