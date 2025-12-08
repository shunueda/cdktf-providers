// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_delivery_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigDeliveryChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_delivery_channel#delivery_channel_assume_role_arn ConfigDeliveryChannel#delivery_channel_assume_role_arn}
  */
  readonly deliveryChannelAssumeRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_delivery_channel#delivery_channel_condition ConfigDeliveryChannel#delivery_channel_condition}
  */
  readonly deliveryChannelCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_delivery_channel#delivery_channel_name ConfigDeliveryChannel#delivery_channel_name}
  */
  readonly deliveryChannelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_delivery_channel#delivery_channel_target_arn ConfigDeliveryChannel#delivery_channel_target_arn}
  */
  readonly deliveryChannelTargetArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_delivery_channel#delivery_channel_type ConfigDeliveryChannel#delivery_channel_type}
  */
  readonly deliveryChannelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_delivery_channel#description ConfigDeliveryChannel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_delivery_channel#id ConfigDeliveryChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_delivery_channel#status ConfigDeliveryChannel#status}
  */
  readonly status?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_delivery_channel#timeouts ConfigDeliveryChannel#timeouts}
  */
  readonly timeouts?: ConfigDeliveryChannelTimeouts;
}
export interface ConfigDeliveryChannelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_delivery_channel#create ConfigDeliveryChannel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_delivery_channel#update ConfigDeliveryChannel#update}
  */
  readonly update?: string;
}

export function configDeliveryChannelTimeoutsToTerraform(struct?: ConfigDeliveryChannelTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function configDeliveryChannelTimeoutsToHclTerraform(struct?: ConfigDeliveryChannelTimeouts | cdktf.IResolvable): any {
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

export class ConfigDeliveryChannelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigDeliveryChannelTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigDeliveryChannelTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_delivery_channel alicloud_config_delivery_channel}
*/
export class ConfigDeliveryChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_config_delivery_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigDeliveryChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigDeliveryChannel to import
  * @param importFromId The id of the existing ConfigDeliveryChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_delivery_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigDeliveryChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_config_delivery_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_delivery_channel alicloud_config_delivery_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigDeliveryChannelConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigDeliveryChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_config_delivery_channel',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deliveryChannelAssumeRoleArn = config.deliveryChannelAssumeRoleArn;
    this._deliveryChannelCondition = config.deliveryChannelCondition;
    this._deliveryChannelName = config.deliveryChannelName;
    this._deliveryChannelTargetArn = config.deliveryChannelTargetArn;
    this._deliveryChannelType = config.deliveryChannelType;
    this._description = config.description;
    this._id = config.id;
    this._status = config.status;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delivery_channel_assume_role_arn - computed: false, optional: false, required: true
  private _deliveryChannelAssumeRoleArn?: string; 
  public get deliveryChannelAssumeRoleArn() {
    return this.getStringAttribute('delivery_channel_assume_role_arn');
  }
  public set deliveryChannelAssumeRoleArn(value: string) {
    this._deliveryChannelAssumeRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryChannelAssumeRoleArnInput() {
    return this._deliveryChannelAssumeRoleArn;
  }

  // delivery_channel_condition - computed: true, optional: true, required: false
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

  // delivery_channel_name - computed: true, optional: true, required: false
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

  // description - computed: true, optional: true, required: false
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
  private _timeouts = new ConfigDeliveryChannelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConfigDeliveryChannelTimeouts) {
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
      delivery_channel_assume_role_arn: cdktf.stringToTerraform(this._deliveryChannelAssumeRoleArn),
      delivery_channel_condition: cdktf.stringToTerraform(this._deliveryChannelCondition),
      delivery_channel_name: cdktf.stringToTerraform(this._deliveryChannelName),
      delivery_channel_target_arn: cdktf.stringToTerraform(this._deliveryChannelTargetArn),
      delivery_channel_type: cdktf.stringToTerraform(this._deliveryChannelType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.numberToTerraform(this._status),
      timeouts: configDeliveryChannelTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delivery_channel_assume_role_arn: {
        value: cdktf.stringToHclTerraform(this._deliveryChannelAssumeRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: configDeliveryChannelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigDeliveryChannelTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
