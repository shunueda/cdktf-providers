// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudStorageGatewayGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#description CloudStorageGatewayGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#gateway_class CloudStorageGatewayGateway#gateway_class}
  */
  readonly gatewayClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#gateway_name CloudStorageGatewayGateway#gateway_name}
  */
  readonly gatewayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#id CloudStorageGatewayGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#location CloudStorageGatewayGateway#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#payment_type CloudStorageGatewayGateway#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#public_network_bandwidth CloudStorageGatewayGateway#public_network_bandwidth}
  */
  readonly publicNetworkBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#reason_detail CloudStorageGatewayGateway#reason_detail}
  */
  readonly reasonDetail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#reason_type CloudStorageGatewayGateway#reason_type}
  */
  readonly reasonType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#release_after_expiration CloudStorageGatewayGateway#release_after_expiration}
  */
  readonly releaseAfterExpiration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#storage_bundle_id CloudStorageGatewayGateway#storage_bundle_id}
  */
  readonly storageBundleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#type CloudStorageGatewayGateway#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#vswitch_id CloudStorageGatewayGateway#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#timeouts CloudStorageGatewayGateway#timeouts}
  */
  readonly timeouts?: CloudStorageGatewayGatewayTimeouts;
}
export interface CloudStorageGatewayGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#create CloudStorageGatewayGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#delete CloudStorageGatewayGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#update CloudStorageGatewayGateway#update}
  */
  readonly update?: string;
}

export function cloudStorageGatewayGatewayTimeoutsToTerraform(struct?: CloudStorageGatewayGatewayTimeouts | cdktf.IResolvable): any {
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


export function cloudStorageGatewayGatewayTimeoutsToHclTerraform(struct?: CloudStorageGatewayGatewayTimeouts | cdktf.IResolvable): any {
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

export class CloudStorageGatewayGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudStorageGatewayGatewayTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudStorageGatewayGatewayTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway alicloud_cloud_storage_gateway_gateway}
*/
export class CloudStorageGatewayGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_storage_gateway_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudStorageGatewayGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudStorageGatewayGateway to import
  * @param importFromId The id of the existing CloudStorageGatewayGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudStorageGatewayGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_storage_gateway_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway alicloud_cloud_storage_gateway_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudStorageGatewayGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: CloudStorageGatewayGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_storage_gateway_gateway',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._gatewayClass = config.gatewayClass;
    this._gatewayName = config.gatewayName;
    this._id = config.id;
    this._location = config.location;
    this._paymentType = config.paymentType;
    this._publicNetworkBandwidth = config.publicNetworkBandwidth;
    this._reasonDetail = config.reasonDetail;
    this._reasonType = config.reasonType;
    this._releaseAfterExpiration = config.releaseAfterExpiration;
    this._storageBundleId = config.storageBundleId;
    this._type = config.type;
    this._vswitchId = config.vswitchId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // gateway_class - computed: false, optional: true, required: false
  private _gatewayClass?: string; 
  public get gatewayClass() {
    return this.getStringAttribute('gateway_class');
  }
  public set gatewayClass(value: string) {
    this._gatewayClass = value;
  }
  public resetGatewayClass() {
    this._gatewayClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayClassInput() {
    return this._gatewayClass;
  }

  // gateway_name - computed: false, optional: false, required: true
  private _gatewayName?: string; 
  public get gatewayName() {
    return this.getStringAttribute('gateway_name');
  }
  public set gatewayName(value: string) {
    this._gatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayNameInput() {
    return this._gatewayName;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // payment_type - computed: false, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // public_network_bandwidth - computed: true, optional: true, required: false
  private _publicNetworkBandwidth?: number; 
  public get publicNetworkBandwidth() {
    return this.getNumberAttribute('public_network_bandwidth');
  }
  public set publicNetworkBandwidth(value: number) {
    this._publicNetworkBandwidth = value;
  }
  public resetPublicNetworkBandwidth() {
    this._publicNetworkBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkBandwidthInput() {
    return this._publicNetworkBandwidth;
  }

  // reason_detail - computed: false, optional: true, required: false
  private _reasonDetail?: string; 
  public get reasonDetail() {
    return this.getStringAttribute('reason_detail');
  }
  public set reasonDetail(value: string) {
    this._reasonDetail = value;
  }
  public resetReasonDetail() {
    this._reasonDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonDetailInput() {
    return this._reasonDetail;
  }

  // reason_type - computed: false, optional: true, required: false
  private _reasonType?: string; 
  public get reasonType() {
    return this.getStringAttribute('reason_type');
  }
  public set reasonType(value: string) {
    this._reasonType = value;
  }
  public resetReasonType() {
    this._reasonType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonTypeInput() {
    return this._reasonType;
  }

  // release_after_expiration - computed: false, optional: true, required: false
  private _releaseAfterExpiration?: boolean | cdktf.IResolvable; 
  public get releaseAfterExpiration() {
    return this.getBooleanAttribute('release_after_expiration');
  }
  public set releaseAfterExpiration(value: boolean | cdktf.IResolvable) {
    this._releaseAfterExpiration = value;
  }
  public resetReleaseAfterExpiration() {
    this._releaseAfterExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseAfterExpirationInput() {
    return this._releaseAfterExpiration;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_bundle_id - computed: false, optional: false, required: true
  private _storageBundleId?: string; 
  public get storageBundleId() {
    return this.getStringAttribute('storage_bundle_id');
  }
  public set storageBundleId(value: string) {
    this._storageBundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBundleIdInput() {
    return this._storageBundleId;
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

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudStorageGatewayGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudStorageGatewayGatewayTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      gateway_class: cdktf.stringToTerraform(this._gatewayClass),
      gateway_name: cdktf.stringToTerraform(this._gatewayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      public_network_bandwidth: cdktf.numberToTerraform(this._publicNetworkBandwidth),
      reason_detail: cdktf.stringToTerraform(this._reasonDetail),
      reason_type: cdktf.stringToTerraform(this._reasonType),
      release_after_expiration: cdktf.booleanToTerraform(this._releaseAfterExpiration),
      storage_bundle_id: cdktf.stringToTerraform(this._storageBundleId),
      type: cdktf.stringToTerraform(this._type),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      timeouts: cloudStorageGatewayGatewayTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_class: {
        value: cdktf.stringToHclTerraform(this._gatewayClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_name: {
        value: cdktf.stringToHclTerraform(this._gatewayName),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_bandwidth: {
        value: cdktf.numberToHclTerraform(this._publicNetworkBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reason_detail: {
        value: cdktf.stringToHclTerraform(this._reasonDetail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason_type: {
        value: cdktf.stringToHclTerraform(this._reasonType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_after_expiration: {
        value: cdktf.booleanToHclTerraform(this._releaseAfterExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_bundle_id: {
        value: cdktf.stringToHclTerraform(this._storageBundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cloudStorageGatewayGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudStorageGatewayGatewayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
