// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudInstanceTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The available zone that the CVM instance locates at. This field is conflict with `filter`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types#availability_zone DataTencentcloudInstanceTypes#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The number of CPU cores of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types#cpu_core_count DataTencentcloudInstanceTypes#cpu_core_count}
  */
  readonly cpuCoreCount?: number;
  /**
  * Indicate to filter instances types that is sold out or not, default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types#exclude_sold_out DataTencentcloudInstanceTypes#exclude_sold_out}
  */
  readonly excludeSoldOut?: boolean | cdktf.IResolvable;
  /**
  * The number of GPU cores of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types#gpu_core_count DataTencentcloudInstanceTypes#gpu_core_count}
  */
  readonly gpuCoreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types#id DataTencentcloudInstanceTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance memory capacity, unit in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types#memory_size DataTencentcloudInstanceTypes#memory_size}
  */
  readonly memorySize?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types#result_output_file DataTencentcloudInstanceTypes#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * cbs_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types#cbs_filter DataTencentcloudInstanceTypes#cbs_filter}
  */
  readonly cbsFilter?: DataTencentcloudInstanceTypesCbsFilter;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types#filter DataTencentcloudInstanceTypes#filter}
  */
  readonly filter?: DataTencentcloudInstanceTypesFilter[] | cdktf.IResolvable;
}
export interface DataTencentcloudInstanceTypesInstanceTypesCbsConfigs {
}

export function dataTencentcloudInstanceTypesInstanceTypesCbsConfigsToTerraform(struct?: DataTencentcloudInstanceTypesInstanceTypesCbsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudInstanceTypesInstanceTypesCbsConfigsToHclTerraform(struct?: DataTencentcloudInstanceTypesInstanceTypesCbsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudInstanceTypesInstanceTypesCbsConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudInstanceTypesInstanceTypesCbsConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudInstanceTypesInstanceTypesCbsConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available - computed: true, optional: false, required: false
  public get available() {
    return this.getBooleanAttribute('available');
  }

  // device_class - computed: true, optional: false, required: false
  public get deviceClass() {
    return this.getStringAttribute('device_class');
  }

  // disk_charge_type - computed: true, optional: false, required: false
  public get diskChargeType() {
    return this.getStringAttribute('disk_charge_type');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // disk_usage - computed: true, optional: false, required: false
  public get diskUsage() {
    return this.getStringAttribute('disk_usage');
  }

  // extra_performance_range - computed: true, optional: false, required: false
  public get extraPerformanceRange() {
    return this.getNumberListAttribute('extra_performance_range');
  }

  // instance_family - computed: true, optional: false, required: false
  public get instanceFamily() {
    return this.getStringAttribute('instance_family');
  }

  // max_disk_size - computed: true, optional: false, required: false
  public get maxDiskSize() {
    return this.getNumberAttribute('max_disk_size');
  }

  // min_disk_size - computed: true, optional: false, required: false
  public get minDiskSize() {
    return this.getNumberAttribute('min_disk_size');
  }

  // step_size - computed: true, optional: false, required: false
  public get stepSize() {
    return this.getNumberAttribute('step_size');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudInstanceTypesInstanceTypesCbsConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudInstanceTypesInstanceTypesCbsConfigsOutputReference {
    return new DataTencentcloudInstanceTypesInstanceTypesCbsConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudInstanceTypesInstanceTypes {
}

export function dataTencentcloudInstanceTypesInstanceTypesToTerraform(struct?: DataTencentcloudInstanceTypesInstanceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudInstanceTypesInstanceTypesToHclTerraform(struct?: DataTencentcloudInstanceTypesInstanceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudInstanceTypesInstanceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudInstanceTypesInstanceTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudInstanceTypesInstanceTypes | undefined) {
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

  // cbs_configs - computed: true, optional: false, required: false
  private _cbsConfigs = new DataTencentcloudInstanceTypesInstanceTypesCbsConfigsList(this, "cbs_configs", false);
  public get cbsConfigs() {
    return this._cbsConfigs;
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // gpu_core_count - computed: true, optional: false, required: false
  public get gpuCoreCount() {
    return this.getNumberAttribute('gpu_core_count');
  }

  // instance_charge_type - computed: true, optional: false, required: false
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTencentcloudInstanceTypesInstanceTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudInstanceTypesInstanceTypesOutputReference {
    return new DataTencentcloudInstanceTypesInstanceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudInstanceTypesCbsFilter {
  /**
  * Payment model. Value range:
  * 	- PREPAID: Prepaid;
  * 	- POSTPAID_BY_HOUR: Post-payment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types#disk_charge_type DataTencentcloudInstanceTypes#disk_charge_type}
  */
  readonly diskChargeType?: string;
  /**
  * Hard disk media type. Value range:
  * 	- CLOUD_BASIC: Represents ordinary Cloud Block Storage;
  * 	- CLOUD_PREMIUM: Represents high-performance Cloud Block Storage;
  * 	- CLOUD_SSD: Represents SSD Cloud Block Storage;
  * 	- CLOUD_HSSD: Represents enhanced SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types#disk_types DataTencentcloudInstanceTypes#disk_types}
  */
  readonly diskTypes?: string[];
  /**
  * System disk or data disk. Value range:
  * 	- SYSTEM_DISK: Represents the system disk;
  * 	- DATA_DISK: Represents the data disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types#disk_usage DataTencentcloudInstanceTypes#disk_usage}
  */
  readonly diskUsage?: string;
}

export function dataTencentcloudInstanceTypesCbsFilterToTerraform(struct?: DataTencentcloudInstanceTypesCbsFilterOutputReference | DataTencentcloudInstanceTypesCbsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_charge_type: cdktf.stringToTerraform(struct!.diskChargeType),
    disk_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.diskTypes),
    disk_usage: cdktf.stringToTerraform(struct!.diskUsage),
  }
}


export function dataTencentcloudInstanceTypesCbsFilterToHclTerraform(struct?: DataTencentcloudInstanceTypesCbsFilterOutputReference | DataTencentcloudInstanceTypesCbsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.diskChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.diskTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disk_usage: {
      value: cdktf.stringToHclTerraform(struct!.diskUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudInstanceTypesCbsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTencentcloudInstanceTypesCbsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskChargeType = this._diskChargeType;
    }
    if (this._diskTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypes = this._diskTypes;
    }
    if (this._diskUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskUsage = this._diskUsage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudInstanceTypesCbsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskChargeType = undefined;
      this._diskTypes = undefined;
      this._diskUsage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskChargeType = value.diskChargeType;
      this._diskTypes = value.diskTypes;
      this._diskUsage = value.diskUsage;
    }
  }

  // disk_charge_type - computed: false, optional: true, required: false
  private _diskChargeType?: string; 
  public get diskChargeType() {
    return this.getStringAttribute('disk_charge_type');
  }
  public set diskChargeType(value: string) {
    this._diskChargeType = value;
  }
  public resetDiskChargeType() {
    this._diskChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskChargeTypeInput() {
    return this._diskChargeType;
  }

  // disk_types - computed: false, optional: true, required: false
  private _diskTypes?: string[]; 
  public get diskTypes() {
    return this.getListAttribute('disk_types');
  }
  public set diskTypes(value: string[]) {
    this._diskTypes = value;
  }
  public resetDiskTypes() {
    this._diskTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypesInput() {
    return this._diskTypes;
  }

  // disk_usage - computed: false, optional: true, required: false
  private _diskUsage?: string; 
  public get diskUsage() {
    return this.getStringAttribute('disk_usage');
  }
  public set diskUsage(value: string) {
    this._diskUsage = value;
  }
  public resetDiskUsage() {
    this._diskUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskUsageInput() {
    return this._diskUsage;
  }
}
export interface DataTencentcloudInstanceTypesFilter {
  /**
  * The filter name. Valid values: `zone`, `instance-family` and `instance-charge-type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types#name DataTencentcloudInstanceTypes#name}
  */
  readonly name: string;
  /**
  * The filter values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types#values DataTencentcloudInstanceTypes#values}
  */
  readonly values: string[];
}

export function dataTencentcloudInstanceTypesFilterToTerraform(struct?: DataTencentcloudInstanceTypesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudInstanceTypesFilterToHclTerraform(struct?: DataTencentcloudInstanceTypesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudInstanceTypesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudInstanceTypesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudInstanceTypesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataTencentcloudInstanceTypesFilterList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudInstanceTypesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudInstanceTypesFilterOutputReference {
    return new DataTencentcloudInstanceTypesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types tencentcloud_instance_types}
*/
export class DataTencentcloudInstanceTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_instance_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudInstanceTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudInstanceTypes to import
  * @param importFromId The id of the existing DataTencentcloudInstanceTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudInstanceTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_instance_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/instance_types tencentcloud_instance_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudInstanceTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudInstanceTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_instance_types',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
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
    this._excludeSoldOut = config.excludeSoldOut;
    this._gpuCoreCount = config.gpuCoreCount;
    this._id = config.id;
    this._memorySize = config.memorySize;
    this._resultOutputFile = config.resultOutputFile;
    this._cbsFilter.internalValue = config.cbsFilter;
    this._filter.internalValue = config.filter;
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

  // exclude_sold_out - computed: false, optional: true, required: false
  private _excludeSoldOut?: boolean | cdktf.IResolvable; 
  public get excludeSoldOut() {
    return this.getBooleanAttribute('exclude_sold_out');
  }
  public set excludeSoldOut(value: boolean | cdktf.IResolvable) {
    this._excludeSoldOut = value;
  }
  public resetExcludeSoldOut() {
    this._excludeSoldOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSoldOutInput() {
    return this._excludeSoldOut;
  }

  // gpu_core_count - computed: false, optional: true, required: false
  private _gpuCoreCount?: number; 
  public get gpuCoreCount() {
    return this.getNumberAttribute('gpu_core_count');
  }
  public set gpuCoreCount(value: number) {
    this._gpuCoreCount = value;
  }
  public resetGpuCoreCount() {
    this._gpuCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuCoreCountInput() {
    return this._gpuCoreCount;
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

  // instance_types - computed: true, optional: false, required: false
  private _instanceTypes = new DataTencentcloudInstanceTypesInstanceTypesList(this, "instance_types", false);
  public get instanceTypes() {
    return this._instanceTypes;
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

  // cbs_filter - computed: false, optional: true, required: false
  private _cbsFilter = new DataTencentcloudInstanceTypesCbsFilterOutputReference(this, "cbs_filter");
  public get cbsFilter() {
    return this._cbsFilter;
  }
  public putCbsFilter(value: DataTencentcloudInstanceTypesCbsFilter) {
    this._cbsFilter.internalValue = value;
  }
  public resetCbsFilter() {
    this._cbsFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsFilterInput() {
    return this._cbsFilter.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataTencentcloudInstanceTypesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataTencentcloudInstanceTypesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
      exclude_sold_out: cdktf.booleanToTerraform(this._excludeSoldOut),
      gpu_core_count: cdktf.numberToTerraform(this._gpuCoreCount),
      id: cdktf.stringToTerraform(this._id),
      memory_size: cdktf.numberToTerraform(this._memorySize),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      cbs_filter: dataTencentcloudInstanceTypesCbsFilterToTerraform(this._cbsFilter.internalValue),
      filter: cdktf.listMapper(dataTencentcloudInstanceTypesFilterToTerraform, true)(this._filter.internalValue),
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
      exclude_sold_out: {
        value: cdktf.booleanToHclTerraform(this._excludeSoldOut),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gpu_core_count: {
        value: cdktf.numberToHclTerraform(this._gpuCoreCount),
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
      memory_size: {
        value: cdktf.numberToHclTerraform(this._memorySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_filter: {
        value: dataTencentcloudInstanceTypesCbsFilterToHclTerraform(this._cbsFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudInstanceTypesCbsFilterList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataTencentcloudInstanceTypesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataTencentcloudInstanceTypesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
