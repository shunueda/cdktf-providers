// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of zone that the instance locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#availability_zone Instance#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Indicate whether to force delete the instance. Default is `false`. If set true, the instance will be permanently deleted instead of being moved into the recycle bin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#force_delete Instance#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#id Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The image to use for the instance. Changing `image_id` will cause the instance reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#image_id Instance#image_id}
  */
  readonly imageId?: string;
  /**
  * The tenancy (time unit is month) of the prepaid instance, NOTE: it only works when instance_charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#instance_charge_prepaid_period Instance#instance_charge_prepaid_period}
  */
  readonly instanceChargePrepaidPeriod?: number;
  /**
  * The charge type of instance. Valid values are `PREPAID`, `POSTPAID`. The default is `POSTPAID`. Note: `PREPAID` instance may not allow to delete before expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#instance_charge_type Instance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * The name of the instance. The max length of instance_name is 64, and default value is `Terraform-Instance`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#instance_name Instance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * The type of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#instance_type Instance#instance_type}
  */
  readonly instanceType: string;
  /**
  * Internet charge type of the instance, Valid values are `ByBandwidth`, `ByTrafficPackage`, `ByInstanceBandwidth95` and `ByClusterBandwidth95`. This value currently not support to change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#internet_charge_type Instance#internet_charge_type}
  */
  readonly internetChargeType: string;
  /**
  * Maximum outgoing bandwidth to the public network, measured in Mbps (Mega bits per second).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#internet_max_bandwidth_out Instance#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * The key pair id to use for the instance. Changing `key_id` will cause the instance reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#key_id Instance#key_id}
  */
  readonly keyId?: string;
  /**
  * Password for the instance. The max length of password is 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#password Instance#password}
  */
  readonly password?: string;
  /**
  * The resource group id the instance belongs to, default to Default Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#resource_group_id Instance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * The ID of a VPC subnet. If you want to create instances in a VPC network, this parameter must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#subnet_id Instance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Size of the system disk. unit is GB. If modified, the instance may force stop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#system_disk_size Instance#system_disk_size}
  */
  readonly systemDiskSize: number;
  /**
  * Traffic package size. Only valid when the charge type of instance is `ByTrafficPackage` and the instance charge type is `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#traffic_package_size Instance#traffic_package_size}
  */
  readonly trafficPackageSize?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#timeouts Instance#timeouts}
  */
  readonly timeouts?: InstanceTimeouts;
}
export interface InstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#create Instance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#update Instance#update}
  */
  readonly update?: string;
}

export function instanceTimeoutsToTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function instanceTimeoutsToHclTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
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

export class InstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance zenlayercloud_instance}
*/
export class Instance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Instance to import
  * @param importFromId The id of the existing Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/instance zenlayercloud_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_instance',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.10',
        providerVersionConstraint: '0.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceChargePrepaidPeriod = config.instanceChargePrepaidPeriod;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceName = config.instanceName;
    this._instanceType = config.instanceType;
    this._internetChargeType = config.internetChargeType;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._keyId = config.keyId;
    this._password = config.password;
    this._resourceGroupId = config.resourceGroupId;
    this._subnetId = config.subnetId;
    this._systemDiskSize = config.systemDiskSize;
    this._trafficPackageSize = config.trafficPackageSize;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // instance_charge_prepaid_period - computed: false, optional: true, required: false
  private _instanceChargePrepaidPeriod?: number; 
  public get instanceChargePrepaidPeriod() {
    return this.getNumberAttribute('instance_charge_prepaid_period');
  }
  public set instanceChargePrepaidPeriod(value: number) {
    this._instanceChargePrepaidPeriod = value;
  }
  public resetInstanceChargePrepaidPeriod() {
    this._instanceChargePrepaidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargePrepaidPeriodInput() {
    return this._instanceChargePrepaidPeriod;
  }

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // internet_charge_type - computed: false, optional: false, required: true
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // internet_max_bandwidth_out - computed: true, optional: true, required: false
  private _internetMaxBandwidthOut?: number; 
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }
  public set internetMaxBandwidthOut(value: number) {
    this._internetMaxBandwidthOut = value;
  }
  public resetInternetMaxBandwidthOut() {
    this._internetMaxBandwidthOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthOutInput() {
    return this._internetMaxBandwidthOut;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('private_ip_addresses'));
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('public_ip_addresses'));
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // system_disk_size - computed: false, optional: false, required: true
  private _systemDiskSize?: number; 
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }
  public set systemDiskSize(value: number) {
    this._systemDiskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskSizeInput() {
    return this._systemDiskSize;
  }

  // traffic_package_size - computed: false, optional: true, required: false
  private _trafficPackageSize?: number; 
  public get trafficPackageSize() {
    return this.getNumberAttribute('traffic_package_size');
  }
  public set trafficPackageSize(value: number) {
    this._trafficPackageSize = value;
  }
  public resetTrafficPackageSize() {
    this._trafficPackageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPackageSizeInput() {
    return this._trafficPackageSize;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InstanceTimeouts) {
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
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_charge_prepaid_period: cdktf.numberToTerraform(this._instanceChargePrepaidPeriod),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      key_id: cdktf.stringToTerraform(this._keyId),
      password: cdktf.stringToTerraform(this._password),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      system_disk_size: cdktf.numberToTerraform(this._systemDiskSize),
      traffic_package_size: cdktf.numberToTerraform(this._trafficPackageSize),
      timeouts: instanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_charge_prepaid_period: {
        value: cdktf.numberToHclTerraform(this._instanceChargePrepaidPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_charge_type: {
        value: cdktf.stringToHclTerraform(this._internetChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_max_bandwidth_out: {
        value: cdktf.numberToHclTerraform(this._internetMaxBandwidthOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_size: {
        value: cdktf.numberToHclTerraform(this._systemDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_package_size: {
        value: cdktf.numberToHclTerraform(this._trafficPackageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: instanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
