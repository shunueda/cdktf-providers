// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudInstanceTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#availability_zone DataAlicloudInstanceTypes#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#cpu_core_count DataAlicloudInstanceTypes#cpu_core_count}
  */
  readonly cpuCoreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#eni_amount DataAlicloudInstanceTypes#eni_amount}
  */
  readonly eniAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#gpu_amount DataAlicloudInstanceTypes#gpu_amount}
  */
  readonly gpuAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#gpu_spec DataAlicloudInstanceTypes#gpu_spec}
  */
  readonly gpuSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#id DataAlicloudInstanceTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#image_id DataAlicloudInstanceTypes#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#instance_charge_type DataAlicloudInstanceTypes#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#instance_type DataAlicloudInstanceTypes#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#instance_type_family DataAlicloudInstanceTypes#instance_type_family}
  */
  readonly instanceTypeFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#is_outdated DataAlicloudInstanceTypes#is_outdated}
  */
  readonly isOutdated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#kubernetes_node_role DataAlicloudInstanceTypes#kubernetes_node_role}
  */
  readonly kubernetesNodeRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#memory_size DataAlicloudInstanceTypes#memory_size}
  */
  readonly memorySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#minimum_eni_ipv6_address_quantity DataAlicloudInstanceTypes#minimum_eni_ipv6_address_quantity}
  */
  readonly minimumEniIpv6AddressQuantity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#minimum_eni_private_ip_address_quantity DataAlicloudInstanceTypes#minimum_eni_private_ip_address_quantity}
  */
  readonly minimumEniPrivateIpAddressQuantity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#network_type DataAlicloudInstanceTypes#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#output_file DataAlicloudInstanceTypes#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#sorted_by DataAlicloudInstanceTypes#sorted_by}
  */
  readonly sortedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#spot_strategy DataAlicloudInstanceTypes#spot_strategy}
  */
  readonly spotStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#system_disk_category DataAlicloudInstanceTypes#system_disk_category}
  */
  readonly systemDiskCategory?: string;
}
export interface DataAlicloudInstanceTypesInstanceTypes {
}

export function dataAlicloudInstanceTypesInstanceTypesToTerraform(struct?: DataAlicloudInstanceTypesInstanceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudInstanceTypesInstanceTypesToHclTerraform(struct?: DataAlicloudInstanceTypesInstanceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudInstanceTypesInstanceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudInstanceTypesInstanceTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudInstanceTypesInstanceTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // burstable_instance - computed: true, optional: false, required: false
  private _burstableInstance = new cdktf.StringMap(this, "burstable_instance");
  public get burstableInstance() {
    return this._burstableInstance;
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // eni_amount - computed: true, optional: false, required: false
  public get eniAmount() {
    return this.getNumberAttribute('eni_amount');
  }

  // eni_ipv6_address_quantity - computed: true, optional: false, required: false
  public get eniIpv6AddressQuantity() {
    return this.getNumberAttribute('eni_ipv6_address_quantity');
  }

  // eni_private_ip_address_quantity - computed: true, optional: false, required: false
  public get eniPrivateIpAddressQuantity() {
    return this.getNumberAttribute('eni_private_ip_address_quantity');
  }

  // eni_quantity - computed: true, optional: false, required: false
  public get eniQuantity() {
    return this.getNumberAttribute('eni_quantity');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // gpu - computed: true, optional: false, required: false
  private _gpu = new cdktf.StringMap(this, "gpu");
  public get gpu() {
    return this._gpu;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_storage - computed: true, optional: false, required: false
  private _localStorage = new cdktf.StringMap(this, "local_storage");
  public get localStorage() {
    return this._localStorage;
  }

  // maximum_queue_number_per_eni - computed: true, optional: false, required: false
  public get maximumQueueNumberPerEni() {
    return this.getNumberAttribute('maximum_queue_number_per_eni');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // nvme_support - computed: true, optional: false, required: false
  public get nvmeSupport() {
    return this.getStringAttribute('nvme_support');
  }

  // price - computed: true, optional: false, required: false
  public get price() {
    return this.getStringAttribute('price');
  }

  // primary_eni_queue_number - computed: true, optional: false, required: false
  public get primaryEniQueueNumber() {
    return this.getNumberAttribute('primary_eni_queue_number');
  }

  // secondary_eni_queue_number - computed: true, optional: false, required: false
  public get secondaryEniQueueNumber() {
    return this.getNumberAttribute('secondary_eni_queue_number');
  }

  // total_eni_queue_quantity - computed: true, optional: false, required: false
  public get totalEniQueueQuantity() {
    return this.getNumberAttribute('total_eni_queue_quantity');
  }
}

export class DataAlicloudInstanceTypesInstanceTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudInstanceTypesInstanceTypesOutputReference {
    return new DataAlicloudInstanceTypesInstanceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types alicloud_instance_types}
*/
export class DataAlicloudInstanceTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_instance_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudInstanceTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudInstanceTypes to import
  * @param importFromId The id of the existing DataAlicloudInstanceTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudInstanceTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_instance_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/instance_types alicloud_instance_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudInstanceTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudInstanceTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_instance_types',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
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
    this._cpuCoreCount = config.cpuCoreCount;
    this._eniAmount = config.eniAmount;
    this._gpuAmount = config.gpuAmount;
    this._gpuSpec = config.gpuSpec;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceType = config.instanceType;
    this._instanceTypeFamily = config.instanceTypeFamily;
    this._isOutdated = config.isOutdated;
    this._kubernetesNodeRole = config.kubernetesNodeRole;
    this._memorySize = config.memorySize;
    this._minimumEniIpv6AddressQuantity = config.minimumEniIpv6AddressQuantity;
    this._minimumEniPrivateIpAddressQuantity = config.minimumEniPrivateIpAddressQuantity;
    this._networkType = config.networkType;
    this._outputFile = config.outputFile;
    this._sortedBy = config.sortedBy;
    this._spotStrategy = config.spotStrategy;
    this._systemDiskCategory = config.systemDiskCategory;
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

  // cpu_core_count - computed: false, optional: true, required: false
  private _cpuCoreCount?: number; 
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }
  public set cpuCoreCount(value: number) {
    this._cpuCoreCount = value;
  }
  public resetCpuCoreCount() {
    this._cpuCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoreCountInput() {
    return this._cpuCoreCount;
  }

  // eni_amount - computed: false, optional: true, required: false
  private _eniAmount?: number; 
  public get eniAmount() {
    return this.getNumberAttribute('eni_amount');
  }
  public set eniAmount(value: number) {
    this._eniAmount = value;
  }
  public resetEniAmount() {
    this._eniAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eniAmountInput() {
    return this._eniAmount;
  }

  // gpu_amount - computed: false, optional: true, required: false
  private _gpuAmount?: number; 
  public get gpuAmount() {
    return this.getNumberAttribute('gpu_amount');
  }
  public set gpuAmount(value: number) {
    this._gpuAmount = value;
  }
  public resetGpuAmount() {
    this._gpuAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuAmountInput() {
    return this._gpuAmount;
  }

  // gpu_spec - computed: false, optional: true, required: false
  private _gpuSpec?: string; 
  public get gpuSpec() {
    return this.getStringAttribute('gpu_spec');
  }
  public set gpuSpec(value: string) {
    this._gpuSpec = value;
  }
  public resetGpuSpec() {
    this._gpuSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSpecInput() {
    return this._gpuSpec;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
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

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // instance_type_family - computed: false, optional: true, required: false
  private _instanceTypeFamily?: string; 
  public get instanceTypeFamily() {
    return this.getStringAttribute('instance_type_family');
  }
  public set instanceTypeFamily(value: string) {
    this._instanceTypeFamily = value;
  }
  public resetInstanceTypeFamily() {
    this._instanceTypeFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeFamilyInput() {
    return this._instanceTypeFamily;
  }

  // instance_types - computed: true, optional: false, required: false
  private _instanceTypes = new DataAlicloudInstanceTypesInstanceTypesList(this, "instance_types", false);
  public get instanceTypes() {
    return this._instanceTypes;
  }

  // is_outdated - computed: false, optional: true, required: false
  private _isOutdated?: boolean | cdktf.IResolvable; 
  public get isOutdated() {
    return this.getBooleanAttribute('is_outdated');
  }
  public set isOutdated(value: boolean | cdktf.IResolvable) {
    this._isOutdated = value;
  }
  public resetIsOutdated() {
    this._isOutdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOutdatedInput() {
    return this._isOutdated;
  }

  // kubernetes_node_role - computed: false, optional: true, required: false
  private _kubernetesNodeRole?: string; 
  public get kubernetesNodeRole() {
    return this.getStringAttribute('kubernetes_node_role');
  }
  public set kubernetesNodeRole(value: string) {
    this._kubernetesNodeRole = value;
  }
  public resetKubernetesNodeRole() {
    this._kubernetesNodeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNodeRoleInput() {
    return this._kubernetesNodeRole;
  }

  // memory_size - computed: false, optional: true, required: false
  private _memorySize?: number; 
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }
  public set memorySize(value: number) {
    this._memorySize = value;
  }
  public resetMemorySize() {
    this._memorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize;
  }

  // minimum_eni_ipv6_address_quantity - computed: false, optional: true, required: false
  private _minimumEniIpv6AddressQuantity?: number; 
  public get minimumEniIpv6AddressQuantity() {
    return this.getNumberAttribute('minimum_eni_ipv6_address_quantity');
  }
  public set minimumEniIpv6AddressQuantity(value: number) {
    this._minimumEniIpv6AddressQuantity = value;
  }
  public resetMinimumEniIpv6AddressQuantity() {
    this._minimumEniIpv6AddressQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumEniIpv6AddressQuantityInput() {
    return this._minimumEniIpv6AddressQuantity;
  }

  // minimum_eni_private_ip_address_quantity - computed: false, optional: true, required: false
  private _minimumEniPrivateIpAddressQuantity?: number; 
  public get minimumEniPrivateIpAddressQuantity() {
    return this.getNumberAttribute('minimum_eni_private_ip_address_quantity');
  }
  public set minimumEniPrivateIpAddressQuantity(value: number) {
    this._minimumEniPrivateIpAddressQuantity = value;
  }
  public resetMinimumEniPrivateIpAddressQuantity() {
    this._minimumEniPrivateIpAddressQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumEniPrivateIpAddressQuantityInput() {
    return this._minimumEniPrivateIpAddressQuantity;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // sorted_by - computed: false, optional: true, required: false
  private _sortedBy?: string; 
  public get sortedBy() {
    return this.getStringAttribute('sorted_by');
  }
  public set sortedBy(value: string) {
    this._sortedBy = value;
  }
  public resetSortedBy() {
    this._sortedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortedByInput() {
    return this._sortedBy;
  }

  // spot_strategy - computed: false, optional: true, required: false
  private _spotStrategy?: string; 
  public get spotStrategy() {
    return this.getStringAttribute('spot_strategy');
  }
  public set spotStrategy(value: string) {
    this._spotStrategy = value;
  }
  public resetSpotStrategy() {
    this._spotStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotStrategyInput() {
    return this._spotStrategy;
  }

  // system_disk_category - computed: false, optional: true, required: false
  private _systemDiskCategory?: string; 
  public get systemDiskCategory() {
    return this.getStringAttribute('system_disk_category');
  }
  public set systemDiskCategory(value: string) {
    this._systemDiskCategory = value;
  }
  public resetSystemDiskCategory() {
    this._systemDiskCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskCategoryInput() {
    return this._systemDiskCategory;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
      eni_amount: cdktf.numberToTerraform(this._eniAmount),
      gpu_amount: cdktf.numberToTerraform(this._gpuAmount),
      gpu_spec: cdktf.stringToTerraform(this._gpuSpec),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      instance_type_family: cdktf.stringToTerraform(this._instanceTypeFamily),
      is_outdated: cdktf.booleanToTerraform(this._isOutdated),
      kubernetes_node_role: cdktf.stringToTerraform(this._kubernetesNodeRole),
      memory_size: cdktf.numberToTerraform(this._memorySize),
      minimum_eni_ipv6_address_quantity: cdktf.numberToTerraform(this._minimumEniIpv6AddressQuantity),
      minimum_eni_private_ip_address_quantity: cdktf.numberToTerraform(this._minimumEniPrivateIpAddressQuantity),
      network_type: cdktf.stringToTerraform(this._networkType),
      output_file: cdktf.stringToTerraform(this._outputFile),
      sorted_by: cdktf.stringToTerraform(this._sortedBy),
      spot_strategy: cdktf.stringToTerraform(this._spotStrategy),
      system_disk_category: cdktf.stringToTerraform(this._systemDiskCategory),
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
      cpu_core_count: {
        value: cdktf.numberToHclTerraform(this._cpuCoreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eni_amount: {
        value: cdktf.numberToHclTerraform(this._eniAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gpu_amount: {
        value: cdktf.numberToHclTerraform(this._gpuAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gpu_spec: {
        value: cdktf.stringToHclTerraform(this._gpuSpec),
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
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
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
      instance_type_family: {
        value: cdktf.stringToHclTerraform(this._instanceTypeFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_outdated: {
        value: cdktf.booleanToHclTerraform(this._isOutdated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kubernetes_node_role: {
        value: cdktf.stringToHclTerraform(this._kubernetesNodeRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_size: {
        value: cdktf.numberToHclTerraform(this._memorySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_eni_ipv6_address_quantity: {
        value: cdktf.numberToHclTerraform(this._minimumEniIpv6AddressQuantity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_eni_private_ip_address_quantity: {
        value: cdktf.numberToHclTerraform(this._minimumEniPrivateIpAddressQuantity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sorted_by: {
        value: cdktf.stringToHclTerraform(this._sortedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spot_strategy: {
        value: cdktf.stringToHclTerraform(this._spotStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_category: {
        value: cdktf.stringToHclTerraform(this._systemDiskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
