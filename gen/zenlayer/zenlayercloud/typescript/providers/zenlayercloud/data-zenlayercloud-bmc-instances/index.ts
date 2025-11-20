// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZenlayercloudBmcInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of zone that the bmc instance locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances#availability_zone DataZenlayercloudBmcInstances#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The hostname of the instance to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances#hostname DataZenlayercloudBmcInstances#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances#id DataZenlayercloudBmcInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The image of the instance to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances#image_id DataZenlayercloudBmcInstances#image_id}
  */
  readonly imageId?: string;
  /**
  * IDs of the instances to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances#instance_ids DataZenlayercloudBmcInstances#instance_ids}
  */
  readonly instanceIds?: string[];
  /**
  * Name of the instances to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances#instance_name DataZenlayercloudBmcInstances#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Status of the instances to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances#instance_status DataZenlayercloudBmcInstances#instance_status}
  */
  readonly instanceStatus?: string;
  /**
  * Instance type, such as `M6C`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances#instance_type_id DataZenlayercloudBmcInstances#instance_type_id}
  */
  readonly instanceTypeId?: string;
  /**
  * The private ip of the instances to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances#private_ipv4 DataZenlayercloudBmcInstances#private_ipv4}
  */
  readonly privateIpv4?: string;
  /**
  * The public ipv4 of the instances to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances#public_ipv4 DataZenlayercloudBmcInstances#public_ipv4}
  */
  readonly publicIpv4?: string;
  /**
  * The ID of resource group that the instance grouped by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances#resource_group_id DataZenlayercloudBmcInstances#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances#result_output_file DataZenlayercloudBmcInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * The ID of vpc subnetwork.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances#subnet_id DataZenlayercloudBmcInstances#subnet_id}
  */
  readonly subnetId?: string;
}
export interface DataZenlayercloudBmcInstancesInstanceListPartitions {
}

export function dataZenlayercloudBmcInstancesInstanceListPartitionsToTerraform(struct?: DataZenlayercloudBmcInstancesInstanceListPartitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudBmcInstancesInstanceListPartitionsToHclTerraform(struct?: DataZenlayercloudBmcInstancesInstanceListPartitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudBmcInstancesInstanceListPartitionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZenlayercloudBmcInstancesInstanceListPartitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudBmcInstancesInstanceListPartitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_path - computed: true, optional: false, required: false
  public get fsPath() {
    return this.getStringAttribute('fs_path');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataZenlayercloudBmcInstancesInstanceListPartitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudBmcInstancesInstanceListPartitionsOutputReference {
    return new DataZenlayercloudBmcInstancesInstanceListPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZenlayercloudBmcInstancesInstanceListRaidConfigCustom {
}

export function dataZenlayercloudBmcInstancesInstanceListRaidConfigCustomToTerraform(struct?: DataZenlayercloudBmcInstancesInstanceListRaidConfigCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudBmcInstancesInstanceListRaidConfigCustomToHclTerraform(struct?: DataZenlayercloudBmcInstancesInstanceListRaidConfigCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudBmcInstancesInstanceListRaidConfigCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZenlayercloudBmcInstancesInstanceListRaidConfigCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudBmcInstancesInstanceListRaidConfigCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_sequence - computed: true, optional: false, required: false
  public get diskSequence() {
    return this.getNumberListAttribute('disk_sequence');
  }

  // raid_type - computed: true, optional: false, required: false
  public get raidType() {
    return this.getStringAttribute('raid_type');
  }
}

export class DataZenlayercloudBmcInstancesInstanceListRaidConfigCustomList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudBmcInstancesInstanceListRaidConfigCustomOutputReference {
    return new DataZenlayercloudBmcInstancesInstanceListRaidConfigCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZenlayercloudBmcInstancesInstanceListStruct {
}

export function dataZenlayercloudBmcInstancesInstanceListStructToTerraform(struct?: DataZenlayercloudBmcInstancesInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudBmcInstancesInstanceListStructToHclTerraform(struct?: DataZenlayercloudBmcInstancesInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudBmcInstancesInstanceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZenlayercloudBmcInstancesInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudBmcInstancesInstanceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // instance_charge_prepaid_period - computed: true, optional: false, required: false
  public get instanceChargePrepaidPeriod() {
    return this.getNumberAttribute('instance_charge_prepaid_period');
  }

  // instance_charge_type - computed: true, optional: false, required: false
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }

  // instance_type_id - computed: true, optional: false, required: false
  public get instanceTypeId() {
    return this.getStringAttribute('instance_type_id');
  }

  // internet_charge_type - computed: true, optional: false, required: false
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }

  // internet_max_bandwidth_out - computed: true, optional: false, required: false
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // nic_lan_name - computed: true, optional: false, required: false
  public get nicLanName() {
    return this.getStringAttribute('nic_lan_name');
  }

  // nic_wan_name - computed: true, optional: false, required: false
  public get nicWanName() {
    return this.getStringAttribute('nic_wan_name');
  }

  // partitions - computed: true, optional: false, required: false
  private _partitions = new DataZenlayercloudBmcInstancesInstanceListPartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }

  // private_ipv4_addresses - computed: true, optional: false, required: false
  public get privateIpv4Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('private_ipv4_addresses'));
  }

  // public_ipv4_addresses - computed: true, optional: false, required: false
  public get publicIpv4Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('public_ipv4_addresses'));
  }

  // public_ipv6_addresses - computed: true, optional: false, required: false
  public get publicIpv6Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('public_ipv6_addresses'));
  }

  // raid_config_custom - computed: true, optional: false, required: false
  private _raidConfigCustom = new DataZenlayercloudBmcInstancesInstanceListRaidConfigCustomList(this, "raid_config_custom", false);
  public get raidConfigCustom() {
    return this._raidConfigCustom;
  }

  // raid_config_type - computed: true, optional: false, required: false
  public get raidConfigType() {
    return this.getStringAttribute('raid_config_type');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // traffic_package_size - computed: true, optional: false, required: false
  public get trafficPackageSize() {
    return this.getNumberAttribute('traffic_package_size');
  }
}

export class DataZenlayercloudBmcInstancesInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudBmcInstancesInstanceListStructOutputReference {
    return new DataZenlayercloudBmcInstancesInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances zenlayercloud_bmc_instances}
*/
export class DataZenlayercloudBmcInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_bmc_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZenlayercloudBmcInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZenlayercloudBmcInstances to import
  * @param importFromId The id of the existing DataZenlayercloudBmcInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZenlayercloudBmcInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_bmc_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/bmc_instances zenlayercloud_bmc_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZenlayercloudBmcInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZenlayercloudBmcInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_bmc_instances',
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
    this._hostname = config.hostname;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceIds = config.instanceIds;
    this._instanceName = config.instanceName;
    this._instanceStatus = config.instanceStatus;
    this._instanceTypeId = config.instanceTypeId;
    this._privateIpv4 = config.privateIpv4;
    this._publicIpv4 = config.publicIpv4;
    this._resourceGroupId = config.resourceGroupId;
    this._resultOutputFile = config.resultOutputFile;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
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

  // instance_ids - computed: false, optional: true, required: false
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ids'));
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  public resetInstanceIds() {
    this._instanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // instance_list - computed: true, optional: false, required: false
  private _instanceList = new DataZenlayercloudBmcInstancesInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
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

  // instance_status - computed: false, optional: true, required: false
  private _instanceStatus?: string; 
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }
  public set instanceStatus(value: string) {
    this._instanceStatus = value;
  }
  public resetInstanceStatus() {
    this._instanceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStatusInput() {
    return this._instanceStatus;
  }

  // instance_type_id - computed: false, optional: true, required: false
  private _instanceTypeId?: string; 
  public get instanceTypeId() {
    return this.getStringAttribute('instance_type_id');
  }
  public set instanceTypeId(value: string) {
    this._instanceTypeId = value;
  }
  public resetInstanceTypeId() {
    this._instanceTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeIdInput() {
    return this._instanceTypeId;
  }

  // private_ipv4 - computed: false, optional: true, required: false
  private _privateIpv4?: string; 
  public get privateIpv4() {
    return this.getStringAttribute('private_ipv4');
  }
  public set privateIpv4(value: string) {
    this._privateIpv4 = value;
  }
  public resetPrivateIpv4() {
    this._privateIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv4Input() {
    return this._privateIpv4;
  }

  // public_ipv4 - computed: false, optional: true, required: false
  private _publicIpv4?: string; 
  public get publicIpv4() {
    return this.getStringAttribute('public_ipv4');
  }
  public set publicIpv4(value: string) {
    this._publicIpv4 = value;
  }
  public resetPublicIpv4() {
    this._publicIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpv4Input() {
    return this._publicIpv4;
  }

  // resource_group_id - computed: false, optional: true, required: false
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_status: cdktf.stringToTerraform(this._instanceStatus),
      instance_type_id: cdktf.stringToTerraform(this._instanceTypeId),
      private_ipv4: cdktf.stringToTerraform(this._privateIpv4),
      public_ipv4: cdktf.stringToTerraform(this._publicIpv4),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
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
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_status: {
        value: cdktf.stringToHclTerraform(this._instanceStatus),
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
      private_ipv4: {
        value: cdktf.stringToHclTerraform(this._privateIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ipv4: {
        value: cdktf.stringToHclTerraform(this._publicIpv4),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
