// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zec_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZenlayercloudZecInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of zone that the bmc instance locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zec_instances#availability_zone DataZenlayercloudZecInstances#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zec_instances#id DataZenlayercloudZecInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDs of the ZEC instances to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zec_instances#ids DataZenlayercloudZecInstances#ids}
  */
  readonly ids?: string[];
  /**
  * The image of the ZEC instance to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zec_instances#image_id DataZenlayercloudZecInstances#image_id}
  */
  readonly imageId?: string;
  /**
  * Status of the ZEC instances to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zec_instances#instance_status DataZenlayercloudZecInstances#instance_status}
  */
  readonly instanceStatus?: string;
  /**
  * The ipv4 address of the ZEC instances to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zec_instances#ipv4_address DataZenlayercloudZecInstances#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * The ipv6 address of the ZEC instances to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zec_instances#ipv6_address DataZenlayercloudZecInstances#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * A regex string to filter results by instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zec_instances#name_regex DataZenlayercloudZecInstances#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * The ID of resource group that the ZEC instance grouped by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zec_instances#resource_group_id DataZenlayercloudZecInstances#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zec_instances#result_output_file DataZenlayercloudZecInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataZenlayercloudZecInstancesInstancesDataDisks {
}

export function dataZenlayercloudZecInstancesInstancesDataDisksToTerraform(struct?: DataZenlayercloudZecInstancesInstancesDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZecInstancesInstancesDataDisksToHclTerraform(struct?: DataZenlayercloudZecInstancesInstancesDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZecInstancesInstancesDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZecInstancesInstancesDataDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZecInstancesInstancesDataDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_disk_category - computed: true, optional: false, required: false
  public get dataDiskCategory() {
    return this.getStringAttribute('data_disk_category');
  }

  // data_disk_id - computed: true, optional: false, required: false
  public get dataDiskId() {
    return this.getStringAttribute('data_disk_id');
  }

  // data_disk_size - computed: true, optional: false, required: false
  public get dataDiskSize() {
    return this.getNumberAttribute('data_disk_size');
  }
}

export class DataZenlayercloudZecInstancesInstancesDataDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZecInstancesInstancesDataDisksOutputReference {
    return new DataZenlayercloudZecInstancesInstancesDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZenlayercloudZecInstancesInstances {
}

export function dataZenlayercloudZecInstancesInstancesToTerraform(struct?: DataZenlayercloudZecInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZecInstancesInstancesToHclTerraform(struct?: DataZenlayercloudZecInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZecInstancesInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZecInstancesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZecInstancesInstances | undefined) {
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

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_disks - computed: true, optional: false, required: false
  private _dataDisks = new DataZenlayercloudZecInstancesInstancesDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // nic_network_type - computed: true, optional: false, required: false
  public get nicNetworkType() {
    return this.getStringAttribute('nic_network_type');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('private_ip_addresses'));
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('public_ip_addresses'));
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // system_disk_category - computed: true, optional: false, required: false
  public get systemDiskCategory() {
    return this.getStringAttribute('system_disk_category');
  }

  // system_disk_id - computed: true, optional: false, required: false
  public get systemDiskId() {
    return this.getStringAttribute('system_disk_id');
  }

  // system_disk_size - computed: true, optional: false, required: false
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }
}

export class DataZenlayercloudZecInstancesInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZecInstancesInstancesOutputReference {
    return new DataZenlayercloudZecInstancesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zec_instances zenlayercloud_zec_instances}
*/
export class DataZenlayercloudZecInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zec_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZenlayercloudZecInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZenlayercloudZecInstances to import
  * @param importFromId The id of the existing DataZenlayercloudZecInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zec_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZenlayercloudZecInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zec_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zec_instances zenlayercloud_zec_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZenlayercloudZecInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZenlayercloudZecInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zec_instances',
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
    this._id = config.id;
    this._ids = config.ids;
    this._imageId = config.imageId;
    this._instanceStatus = config.instanceStatus;
    this._ipv4Address = config.ipv4Address;
    this._ipv6Address = config.ipv6Address;
    this._nameRegex = config.nameRegex;
    this._resourceGroupId = config.resourceGroupId;
    this._resultOutputFile = config.resultOutputFile;
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

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
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

  // instances - computed: true, optional: false, required: false
  private _instances = new DataZenlayercloudZecInstancesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_status: cdktf.stringToTerraform(this._instanceStatus),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
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
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
