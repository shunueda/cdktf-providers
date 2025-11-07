// https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BaremetalInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#allow_stopping_for_resizing BaremetalInstance#allow_stopping_for_resizing}
  */
  readonly allowStoppingForResizing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#allow_stopping_for_update BaremetalInstance#allow_stopping_for_update}
  */
  readonly allowStoppingForUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#availability_zone BaremetalInstance#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#boot_disk_size BaremetalInstance#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#boot_disk_type BaremetalInstance#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#charge_type BaremetalInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#delete_disks_with_instance BaremetalInstance#delete_disks_with_instance}
  */
  readonly deleteDisksWithInstance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#delete_eips_with_instance BaremetalInstance#delete_eips_with_instance}
  */
  readonly deleteEipsWithInstance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#duration BaremetalInstance#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#id BaremetalInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#image_id BaremetalInstance#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#instance_type BaremetalInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#name BaremetalInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#private_ip BaremetalInstance#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#raid_type BaremetalInstance#raid_type}
  */
  readonly raidType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#remark BaremetalInstance#remark}
  */
  readonly remark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#root_password BaremetalInstance#root_password}
  */
  readonly rootPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#security_group BaremetalInstance#security_group}
  */
  readonly securityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#subnet_id BaremetalInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#tag BaremetalInstance#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#vpc_id BaremetalInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#data_disks BaremetalInstance#data_disks}
  */
  readonly dataDisks?: BaremetalInstanceDataDisks;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#network_interface BaremetalInstance#network_interface}
  */
  readonly networkInterface?: BaremetalInstanceNetworkInterface;
}
export interface BaremetalInstanceDataDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#size BaremetalInstance#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#type BaremetalInstance#type}
  */
  readonly type: string;
}

export function baremetalInstanceDataDisksToTerraform(struct?: BaremetalInstanceDataDisksOutputReference | BaremetalInstanceDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function baremetalInstanceDataDisksToHclTerraform(struct?: BaremetalInstanceDataDisksOutputReference | BaremetalInstanceDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BaremetalInstanceDataDisksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BaremetalInstanceDataDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BaremetalInstanceDataDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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
}
export interface BaremetalInstanceNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#eip_bandwidth BaremetalInstance#eip_bandwidth}
  */
  readonly eipBandwidth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#eip_charge_mode BaremetalInstance#eip_charge_mode}
  */
  readonly eipChargeMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#eip_internet_type BaremetalInstance#eip_internet_type}
  */
  readonly eipInternetType: string;
}

export function baremetalInstanceNetworkInterfaceToTerraform(struct?: BaremetalInstanceNetworkInterfaceOutputReference | BaremetalInstanceNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eip_bandwidth: cdktf.numberToTerraform(struct!.eipBandwidth),
    eip_charge_mode: cdktf.stringToTerraform(struct!.eipChargeMode),
    eip_internet_type: cdktf.stringToTerraform(struct!.eipInternetType),
  }
}


export function baremetalInstanceNetworkInterfaceToHclTerraform(struct?: BaremetalInstanceNetworkInterfaceOutputReference | BaremetalInstanceNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eip_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.eipBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eip_charge_mode: {
      value: cdktf.stringToHclTerraform(struct!.eipChargeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eip_internet_type: {
      value: cdktf.stringToHclTerraform(struct!.eipInternetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BaremetalInstanceNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BaremetalInstanceNetworkInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eipBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.eipBandwidth = this._eipBandwidth;
    }
    if (this._eipChargeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.eipChargeMode = this._eipChargeMode;
    }
    if (this._eipInternetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eipInternetType = this._eipInternetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BaremetalInstanceNetworkInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eipBandwidth = undefined;
      this._eipChargeMode = undefined;
      this._eipInternetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eipBandwidth = value.eipBandwidth;
      this._eipChargeMode = value.eipChargeMode;
      this._eipInternetType = value.eipInternetType;
    }
  }

  // eip_bandwidth - computed: false, optional: false, required: true
  private _eipBandwidth?: number; 
  public get eipBandwidth() {
    return this.getNumberAttribute('eip_bandwidth');
  }
  public set eipBandwidth(value: number) {
    this._eipBandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eipBandwidthInput() {
    return this._eipBandwidth;
  }

  // eip_charge_mode - computed: false, optional: false, required: true
  private _eipChargeMode?: string; 
  public get eipChargeMode() {
    return this.getStringAttribute('eip_charge_mode');
  }
  public set eipChargeMode(value: string) {
    this._eipChargeMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eipChargeModeInput() {
    return this._eipChargeMode;
  }

  // eip_internet_type - computed: false, optional: false, required: true
  private _eipInternetType?: string; 
  public get eipInternetType() {
    return this.getStringAttribute('eip_internet_type');
  }
  public set eipInternetType(value: string) {
    this._eipInternetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eipInternetTypeInput() {
    return this._eipInternetType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance ucloud_baremetal_instance}
*/
export class BaremetalInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ucloud_baremetal_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BaremetalInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BaremetalInstance to import
  * @param importFromId The id of the existing BaremetalInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BaremetalInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ucloud_baremetal_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/baremetal_instance ucloud_baremetal_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BaremetalInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: BaremetalInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'ucloud_baremetal_instance',
      terraformGeneratorMetadata: {
        providerName: 'ucloud',
        providerVersion: '1.39.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowStoppingForResizing = config.allowStoppingForResizing;
    this._allowStoppingForUpdate = config.allowStoppingForUpdate;
    this._availabilityZone = config.availabilityZone;
    this._bootDiskSize = config.bootDiskSize;
    this._bootDiskType = config.bootDiskType;
    this._chargeType = config.chargeType;
    this._deleteDisksWithInstance = config.deleteDisksWithInstance;
    this._deleteEipsWithInstance = config.deleteEipsWithInstance;
    this._duration = config.duration;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceType = config.instanceType;
    this._name = config.name;
    this._privateIp = config.privateIp;
    this._raidType = config.raidType;
    this._remark = config.remark;
    this._rootPassword = config.rootPassword;
    this._securityGroup = config.securityGroup;
    this._subnetId = config.subnetId;
    this._tag = config.tag;
    this._vpcId = config.vpcId;
    this._dataDisks.internalValue = config.dataDisks;
    this._networkInterface.internalValue = config.networkInterface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_stopping_for_resizing - computed: false, optional: true, required: false
  private _allowStoppingForResizing?: boolean | cdktf.IResolvable; 
  public get allowStoppingForResizing() {
    return this.getBooleanAttribute('allow_stopping_for_resizing');
  }
  public set allowStoppingForResizing(value: boolean | cdktf.IResolvable) {
    this._allowStoppingForResizing = value;
  }
  public resetAllowStoppingForResizing() {
    this._allowStoppingForResizing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStoppingForResizingInput() {
    return this._allowStoppingForResizing;
  }

  // allow_stopping_for_update - computed: false, optional: true, required: false
  private _allowStoppingForUpdate?: boolean | cdktf.IResolvable; 
  public get allowStoppingForUpdate() {
    return this.getBooleanAttribute('allow_stopping_for_update');
  }
  public set allowStoppingForUpdate(value: boolean | cdktf.IResolvable) {
    this._allowStoppingForUpdate = value;
  }
  public resetAllowStoppingForUpdate() {
    this._allowStoppingForUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStoppingForUpdateInput() {
    return this._allowStoppingForUpdate;
  }

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

  // boot_disk_id - computed: true, optional: false, required: false
  public get bootDiskId() {
    return this.getStringAttribute('boot_disk_id');
  }

  // boot_disk_size - computed: false, optional: true, required: false
  private _bootDiskSize?: number; 
  public get bootDiskSize() {
    return this.getNumberAttribute('boot_disk_size');
  }
  public set bootDiskSize(value: number) {
    this._bootDiskSize = value;
  }
  public resetBootDiskSize() {
    this._bootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeInput() {
    return this._bootDiskSize;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // charge_type - computed: false, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // delete_disks_with_instance - computed: false, optional: true, required: false
  private _deleteDisksWithInstance?: boolean | cdktf.IResolvable; 
  public get deleteDisksWithInstance() {
    return this.getBooleanAttribute('delete_disks_with_instance');
  }
  public set deleteDisksWithInstance(value: boolean | cdktf.IResolvable) {
    this._deleteDisksWithInstance = value;
  }
  public resetDeleteDisksWithInstance() {
    this._deleteDisksWithInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDisksWithInstanceInput() {
    return this._deleteDisksWithInstance;
  }

  // delete_eips_with_instance - computed: false, optional: true, required: false
  private _deleteEipsWithInstance?: boolean | cdktf.IResolvable; 
  public get deleteEipsWithInstance() {
    return this.getBooleanAttribute('delete_eips_with_instance');
  }
  public set deleteEipsWithInstance(value: boolean | cdktf.IResolvable) {
    this._deleteEipsWithInstance = value;
  }
  public resetDeleteEipsWithInstance() {
    this._deleteEipsWithInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEipsWithInstanceInput() {
    return this._deleteEipsWithInstance;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // raid_type - computed: false, optional: true, required: false
  private _raidType?: string; 
  public get raidType() {
    return this.getStringAttribute('raid_type');
  }
  public set raidType(value: string) {
    this._raidType = value;
  }
  public resetRaidType() {
    this._raidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidTypeInput() {
    return this._raidType;
  }

  // rdma_cluster_id - computed: true, optional: false, required: false
  public get rdmaClusterId() {
    return this.getStringAttribute('rdma_cluster_id');
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // root_password - computed: false, optional: true, required: false
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  public resetRootPassword() {
    this._rootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }

  // security_group - computed: true, optional: true, required: false
  private _securityGroup?: string; 
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
  public set securityGroup(value: string) {
    this._securityGroup = value;
  }
  public resetSecurityGroup() {
    this._securityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // data_disks - computed: false, optional: true, required: false
  private _dataDisks = new BaremetalInstanceDataDisksOutputReference(this, "data_disks");
  public get dataDisks() {
    return this._dataDisks;
  }
  public putDataDisks(value: BaremetalInstanceDataDisks) {
    this._dataDisks.internalValue = value;
  }
  public resetDataDisks() {
    this._dataDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDisksInput() {
    return this._dataDisks.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new BaremetalInstanceNetworkInterfaceOutputReference(this, "network_interface");
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: BaremetalInstanceNetworkInterface) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_stopping_for_resizing: cdktf.booleanToTerraform(this._allowStoppingForResizing),
      allow_stopping_for_update: cdktf.booleanToTerraform(this._allowStoppingForUpdate),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      boot_disk_size: cdktf.numberToTerraform(this._bootDiskSize),
      boot_disk_type: cdktf.stringToTerraform(this._bootDiskType),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      delete_disks_with_instance: cdktf.booleanToTerraform(this._deleteDisksWithInstance),
      delete_eips_with_instance: cdktf.booleanToTerraform(this._deleteEipsWithInstance),
      duration: cdktf.numberToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      name: cdktf.stringToTerraform(this._name),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      raid_type: cdktf.stringToTerraform(this._raidType),
      remark: cdktf.stringToTerraform(this._remark),
      root_password: cdktf.stringToTerraform(this._rootPassword),
      security_group: cdktf.stringToTerraform(this._securityGroup),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tag: cdktf.stringToTerraform(this._tag),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      data_disks: baremetalInstanceDataDisksToTerraform(this._dataDisks.internalValue),
      network_interface: baremetalInstanceNetworkInterfaceToTerraform(this._networkInterface.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_stopping_for_resizing: {
        value: cdktf.booleanToHclTerraform(this._allowStoppingForResizing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_stopping_for_update: {
        value: cdktf.booleanToHclTerraform(this._allowStoppingForUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_disk_size: {
        value: cdktf.numberToHclTerraform(this._bootDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      boot_disk_type: {
        value: cdktf.stringToHclTerraform(this._bootDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_disks_with_instance: {
        value: cdktf.booleanToHclTerraform(this._deleteDisksWithInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_eips_with_instance: {
        value: cdktf.booleanToHclTerraform(this._deleteEipsWithInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip: {
        value: cdktf.stringToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      raid_type: {
        value: cdktf.stringToHclTerraform(this._raidType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_password: {
        value: cdktf.stringToHclTerraform(this._rootPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group: {
        value: cdktf.stringToHclTerraform(this._securityGroup),
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
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_disks: {
        value: baremetalInstanceDataDisksToHclTerraform(this._dataDisks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BaremetalInstanceDataDisksList",
      },
      network_interface: {
        value: baremetalInstanceNetworkInterfaceToHclTerraform(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BaremetalInstanceNetworkInterfaceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
