// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BmcInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of zone that the bmc instance locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#availability_zone BmcInstance#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Indicate whether to force delete the instance. Default is `false`. If set true, the instance will be permanently deleted instead of being moved into the recycle bin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#force_delete BmcInstance#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * The hostname of the instance. The name should be a combination of 2 to 64 characters comprised of letters (case insensitive), numbers, hyphens (-) and Period (.), and the name must be start with letter. The default value is `Terraform-Instance`. Modifying will cause the instance reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#hostname BmcInstance#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#id BmcInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The image to use for the instance. Changing `image_id` will cause the instance reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#image_id BmcInstance#image_id}
  */
  readonly imageId?: string;
  /**
  * The tenancy (time unit is month) of the prepaid instance, NOTE: it only works when instance_charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#instance_charge_prepaid_period BmcInstance#instance_charge_prepaid_period}
  */
  readonly instanceChargePrepaidPeriod?: number;
  /**
  * The charge type of instance. Valid values are `PREPAID`, `POSTPAID`. The default is `POSTPAID`. Note: `PREPAID` instance may not allow to delete before expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#instance_charge_type BmcInstance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * The name of the instance. The max length of instance_name is 64, and default value is `Terraform-Instance`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#instance_name BmcInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * The type of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#instance_type_id BmcInstance#instance_type_id}
  */
  readonly instanceTypeId: string;
  /**
  * Internet charge type of the instance, Valid values are `ByBandwidth`, `ByTrafficPackage`, `ByInstanceBandwidth95` and `ByClusterBandwidth95`. This value currently not support to change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#internet_charge_type BmcInstance#internet_charge_type}
  */
  readonly internetChargeType: string;
  /**
  * Maximum outgoing bandwidth to the public network, measured in Mbps (Mega bits per second).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#internet_max_bandwidth_out BmcInstance#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * The ssh key pair id to use for the instance. Modifications may cause the instance reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#key_id BmcInstance#key_id}
  */
  readonly keyId?: string;
  /**
  * The lan name of the nic. The lan name should be a combination of 4 to 10 characters comprised of letters (case insensitive), numbers. The lan name must start with letter. Modifying will cause the instance reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#nic_lan_name BmcInstance#nic_lan_name}
  */
  readonly nicLanName?: string;
  /**
  * The wan name of the nic. The wan name should be a combination of 4 to 10 characters comprised of letters (case insensitive), numbers. The wan name must start with letter. Modifying will cause the instance reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#nic_wan_name BmcInstance#nic_wan_name}
  */
  readonly nicWanName?: string;
  /**
  * Password for the instance. The max length of password is 16. Modifying will cause the instance reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#password BmcInstance#password}
  */
  readonly password?: string;
  /**
  * Simple config for instance raid. Modifying will cause the instance reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#raid_config_type BmcInstance#raid_config_type}
  */
  readonly raidConfigType?: string;
  /**
  * Whether to reinstall the instance when modifying field including `user_data`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#reinstall BmcInstance#reinstall}
  */
  readonly reinstall?: boolean | cdktf.IResolvable;
  /**
  * The resource group id the instance belongs to, default to Default Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#resource_group_id BmcInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * The ssh keys to use for the instance. The max number of ssh keys is 5. Modifying will cause the instance reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#ssh_keys BmcInstance#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * The ID of a VPC subnet. If you want to create instances in a VPC network, this parameter must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#subnet_id BmcInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Traffic package size. Only valid when the charge type of instance is `ByTrafficPackage` and the instance charge type is `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#traffic_package_size BmcInstance#traffic_package_size}
  */
  readonly trafficPackageSize?: number;
  /**
  * A string of the user data to be injected into this instance. If `reinstall` is set to `true`, updates to this field will trigger the instance reset instead of recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#user_data BmcInstance#user_data}
  */
  readonly userData?: string;
  /**
  * partitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#partitions BmcInstance#partitions}
  */
  readonly partitions?: BmcInstancePartitions[] | cdktf.IResolvable;
  /**
  * raid_config_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#raid_config_custom BmcInstance#raid_config_custom}
  */
  readonly raidConfigCustom?: BmcInstanceRaidConfigCustom[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#timeouts BmcInstance#timeouts}
  */
  readonly timeouts?: BmcInstanceTimeouts;
}
export interface BmcInstancePartitions {
  /**
  * The drive letter(windows) or device name(linux) for the partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#fs_path BmcInstance#fs_path}
  */
  readonly fsPath: string;
  /**
  * The type of the partitioned file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#fs_type BmcInstance#fs_type}
  */
  readonly fsType: string;
  /**
  * The size of the partitioned disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#size BmcInstance#size}
  */
  readonly size: number;
}

export function bmcInstancePartitionsToTerraform(struct?: BmcInstancePartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_path: cdktf.stringToTerraform(struct!.fsPath),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function bmcInstancePartitionsToHclTerraform(struct?: BmcInstancePartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_path: {
      value: cdktf.stringToHclTerraform(struct!.fsPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BmcInstancePartitionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BmcInstancePartitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsPath = this._fsPath;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BmcInstancePartitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsPath = undefined;
      this._fsType = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsPath = value.fsPath;
      this._fsType = value.fsType;
      this._size = value.size;
    }
  }

  // fs_path - computed: false, optional: false, required: true
  private _fsPath?: string; 
  public get fsPath() {
    return this.getStringAttribute('fs_path');
  }
  public set fsPath(value: string) {
    this._fsPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fsPathInput() {
    return this._fsPath;
  }

  // fs_type - computed: false, optional: false, required: true
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
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
}

export class BmcInstancePartitionsList extends cdktf.ComplexList {
  public internalValue? : BmcInstancePartitions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BmcInstancePartitionsOutputReference {
    return new BmcInstancePartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BmcInstanceRaidConfigCustom {
  /**
  * The sequence of disk to make raid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#disk_sequence BmcInstance#disk_sequence}
  */
  readonly diskSequence: number[];
  /**
  * Simple config for raid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#raid_type BmcInstance#raid_type}
  */
  readonly raidType: string;
}

export function bmcInstanceRaidConfigCustomToTerraform(struct?: BmcInstanceRaidConfigCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_sequence: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.diskSequence),
    raid_type: cdktf.stringToTerraform(struct!.raidType),
  }
}


export function bmcInstanceRaidConfigCustomToHclTerraform(struct?: BmcInstanceRaidConfigCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_sequence: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.diskSequence),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    raid_type: {
      value: cdktf.stringToHclTerraform(struct!.raidType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BmcInstanceRaidConfigCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BmcInstanceRaidConfigCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSequence = this._diskSequence;
    }
    if (this._raidType !== undefined) {
      hasAnyValues = true;
      internalValueResult.raidType = this._raidType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BmcInstanceRaidConfigCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSequence = undefined;
      this._raidType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSequence = value.diskSequence;
      this._raidType = value.raidType;
    }
  }

  // disk_sequence - computed: false, optional: false, required: true
  private _diskSequence?: number[]; 
  public get diskSequence() {
    return this.getNumberListAttribute('disk_sequence');
  }
  public set diskSequence(value: number[]) {
    this._diskSequence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSequenceInput() {
    return this._diskSequence;
  }

  // raid_type - computed: false, optional: false, required: true
  private _raidType?: string; 
  public get raidType() {
    return this.getStringAttribute('raid_type');
  }
  public set raidType(value: string) {
    this._raidType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get raidTypeInput() {
    return this._raidType;
  }
}

export class BmcInstanceRaidConfigCustomList extends cdktf.ComplexList {
  public internalValue? : BmcInstanceRaidConfigCustom[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BmcInstanceRaidConfigCustomOutputReference {
    return new BmcInstanceRaidConfigCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BmcInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#create BmcInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#update BmcInstance#update}
  */
  readonly update?: string;
}

export function bmcInstanceTimeoutsToTerraform(struct?: BmcInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function bmcInstanceTimeoutsToHclTerraform(struct?: BmcInstanceTimeouts | cdktf.IResolvable): any {
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

export class BmcInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BmcInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BmcInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance zenlayercloud_bmc_instance}
*/
export class BmcInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_bmc_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BmcInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BmcInstance to import
  * @param importFromId The id of the existing BmcInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BmcInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_bmc_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/bmc_instance zenlayercloud_bmc_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BmcInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: BmcInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_bmc_instance',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.9',
        providerVersionConstraint: '0.2.9'
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
    this._hostname = config.hostname;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceChargePrepaidPeriod = config.instanceChargePrepaidPeriod;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceName = config.instanceName;
    this._instanceTypeId = config.instanceTypeId;
    this._internetChargeType = config.internetChargeType;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._keyId = config.keyId;
    this._nicLanName = config.nicLanName;
    this._nicWanName = config.nicWanName;
    this._password = config.password;
    this._raidConfigType = config.raidConfigType;
    this._reinstall = config.reinstall;
    this._resourceGroupId = config.resourceGroupId;
    this._sshKeys = config.sshKeys;
    this._subnetId = config.subnetId;
    this._trafficPackageSize = config.trafficPackageSize;
    this._userData = config.userData;
    this._partitions.internalValue = config.partitions;
    this._raidConfigCustom.internalValue = config.raidConfigCustom;
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // instance_type_id - computed: false, optional: false, required: true
  private _instanceTypeId?: string; 
  public get instanceTypeId() {
    return this.getStringAttribute('instance_type_id');
  }
  public set instanceTypeId(value: string) {
    this._instanceTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeIdInput() {
    return this._instanceTypeId;
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

  // nic_lan_name - computed: true, optional: true, required: false
  private _nicLanName?: string; 
  public get nicLanName() {
    return this.getStringAttribute('nic_lan_name');
  }
  public set nicLanName(value: string) {
    this._nicLanName = value;
  }
  public resetNicLanName() {
    this._nicLanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicLanNameInput() {
    return this._nicLanName;
  }

  // nic_wan_name - computed: true, optional: true, required: false
  private _nicWanName?: string; 
  public get nicWanName() {
    return this.getStringAttribute('nic_wan_name');
  }
  public set nicWanName(value: string) {
    this._nicWanName = value;
  }
  public resetNicWanName() {
    this._nicWanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicWanNameInput() {
    return this._nicWanName;
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

  // primary_ipv4_address - computed: true, optional: false, required: false
  public get primaryIpv4Address() {
    return this.getStringAttribute('primary_ipv4_address');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('private_ip_addresses'));
  }

  // public_ipv4_addresses - computed: true, optional: false, required: false
  public get publicIpv4Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('public_ipv4_addresses'));
  }

  // public_ipv6_addresses - computed: true, optional: false, required: false
  public get publicIpv6Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('public_ipv6_addresses'));
  }

  // raid_config_type - computed: false, optional: true, required: false
  private _raidConfigType?: string; 
  public get raidConfigType() {
    return this.getStringAttribute('raid_config_type');
  }
  public set raidConfigType(value: string) {
    this._raidConfigType = value;
  }
  public resetRaidConfigType() {
    this._raidConfigType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidConfigTypeInput() {
    return this._raidConfigType;
  }

  // reinstall - computed: false, optional: true, required: false
  private _reinstall?: boolean | cdktf.IResolvable; 
  public get reinstall() {
    return this.getBooleanAttribute('reinstall');
  }
  public set reinstall(value: boolean | cdktf.IResolvable) {
    this._reinstall = value;
  }
  public resetReinstall() {
    this._reinstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reinstallInput() {
    return this._reinstall;
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

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
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

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // partitions - computed: false, optional: true, required: false
  private _partitions = new BmcInstancePartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }
  public putPartitions(value: BmcInstancePartitions[] | cdktf.IResolvable) {
    this._partitions.internalValue = value;
  }
  public resetPartitions() {
    this._partitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions.internalValue;
  }

  // raid_config_custom - computed: false, optional: true, required: false
  private _raidConfigCustom = new BmcInstanceRaidConfigCustomList(this, "raid_config_custom", false);
  public get raidConfigCustom() {
    return this._raidConfigCustom;
  }
  public putRaidConfigCustom(value: BmcInstanceRaidConfigCustom[] | cdktf.IResolvable) {
    this._raidConfigCustom.internalValue = value;
  }
  public resetRaidConfigCustom() {
    this._raidConfigCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidConfigCustomInput() {
    return this._raidConfigCustom.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BmcInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BmcInstanceTimeouts) {
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
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_charge_prepaid_period: cdktf.numberToTerraform(this._instanceChargePrepaidPeriod),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_type_id: cdktf.stringToTerraform(this._instanceTypeId),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      key_id: cdktf.stringToTerraform(this._keyId),
      nic_lan_name: cdktf.stringToTerraform(this._nicLanName),
      nic_wan_name: cdktf.stringToTerraform(this._nicWanName),
      password: cdktf.stringToTerraform(this._password),
      raid_config_type: cdktf.stringToTerraform(this._raidConfigType),
      reinstall: cdktf.booleanToTerraform(this._reinstall),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeys),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      traffic_package_size: cdktf.numberToTerraform(this._trafficPackageSize),
      user_data: cdktf.stringToTerraform(this._userData),
      partitions: cdktf.listMapper(bmcInstancePartitionsToTerraform, true)(this._partitions.internalValue),
      raid_config_custom: cdktf.listMapper(bmcInstanceRaidConfigCustomToTerraform, true)(this._raidConfigCustom.internalValue),
      timeouts: bmcInstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      instance_type_id: {
        value: cdktf.stringToHclTerraform(this._instanceTypeId),
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
      nic_lan_name: {
        value: cdktf.stringToHclTerraform(this._nicLanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nic_wan_name: {
        value: cdktf.stringToHclTerraform(this._nicWanName),
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
      raid_config_type: {
        value: cdktf.stringToHclTerraform(this._raidConfigType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reinstall: {
        value: cdktf.booleanToHclTerraform(this._reinstall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_package_size: {
        value: cdktf.numberToHclTerraform(this._trafficPackageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partitions: {
        value: cdktf.listMapperHcl(bmcInstancePartitionsToHclTerraform, true)(this._partitions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BmcInstancePartitionsList",
      },
      raid_config_custom: {
        value: cdktf.listMapperHcl(bmcInstanceRaidConfigCustomToHclTerraform, true)(this._raidConfigCustom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BmcInstanceRaidConfigCustomList",
      },
      timeouts: {
        value: bmcInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BmcInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
