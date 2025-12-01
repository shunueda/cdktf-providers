// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_instance_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApsarastackInstanceTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_instance_types#availability_zone DataApsarastackInstanceTypes#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_instance_types#cpu_core_count DataApsarastackInstanceTypes#cpu_core_count}
  */
  readonly cpuCoreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_instance_types#cpu_type DataApsarastackInstanceTypes#cpu_type}
  */
  readonly cpuType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_instance_types#eni_amount DataApsarastackInstanceTypes#eni_amount}
  */
  readonly eniAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_instance_types#id DataApsarastackInstanceTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_instance_types#instance_type_family DataApsarastackInstanceTypes#instance_type_family}
  */
  readonly instanceTypeFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_instance_types#kubernetes_node_role DataApsarastackInstanceTypes#kubernetes_node_role}
  */
  readonly kubernetesNodeRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_instance_types#memory_size DataApsarastackInstanceTypes#memory_size}
  */
  readonly memorySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_instance_types#output_file DataApsarastackInstanceTypes#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_instance_types#sorted_by DataApsarastackInstanceTypes#sorted_by}
  */
  readonly sortedBy?: string;
}
export interface DataApsarastackInstanceTypesInstanceTypesBurstableInstance {
}

export function dataApsarastackInstanceTypesInstanceTypesBurstableInstanceToTerraform(struct?: DataApsarastackInstanceTypesInstanceTypesBurstableInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackInstanceTypesInstanceTypesBurstableInstanceToHclTerraform(struct?: DataApsarastackInstanceTypesInstanceTypesBurstableInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackInstanceTypesInstanceTypesBurstableInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackInstanceTypesInstanceTypesBurstableInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackInstanceTypesInstanceTypesBurstableInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline_credit - computed: true, optional: false, required: false
  public get baselineCredit() {
    return this.getStringAttribute('baseline_credit');
  }

  // initial_credit - computed: true, optional: false, required: false
  public get initialCredit() {
    return this.getStringAttribute('initial_credit');
  }
}

export class DataApsarastackInstanceTypesInstanceTypesBurstableInstanceList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackInstanceTypesInstanceTypesBurstableInstanceOutputReference {
    return new DataApsarastackInstanceTypesInstanceTypesBurstableInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApsarastackInstanceTypesInstanceTypesLocalStorage {
}

export function dataApsarastackInstanceTypesInstanceTypesLocalStorageToTerraform(struct?: DataApsarastackInstanceTypesInstanceTypesLocalStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackInstanceTypesInstanceTypesLocalStorageToHclTerraform(struct?: DataApsarastackInstanceTypesInstanceTypesLocalStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackInstanceTypesInstanceTypesLocalStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackInstanceTypesInstanceTypesLocalStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackInstanceTypesInstanceTypesLocalStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amount - computed: true, optional: false, required: false
  public get amount() {
    return this.getStringAttribute('amount');
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getStringAttribute('capacity');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }
}

export class DataApsarastackInstanceTypesInstanceTypesLocalStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackInstanceTypesInstanceTypesLocalStorageOutputReference {
    return new DataApsarastackInstanceTypesInstanceTypesLocalStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApsarastackInstanceTypesInstanceTypes {
}

export function dataApsarastackInstanceTypesInstanceTypesToTerraform(struct?: DataApsarastackInstanceTypesInstanceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackInstanceTypesInstanceTypesToHclTerraform(struct?: DataApsarastackInstanceTypesInstanceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackInstanceTypesInstanceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackInstanceTypesInstanceTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackInstanceTypesInstanceTypes | undefined) {
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
  private _burstableInstance = new DataApsarastackInstanceTypesInstanceTypesBurstableInstanceList(this, "burstable_instance", false);
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

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_storage - computed: true, optional: false, required: false
  private _localStorage = new DataApsarastackInstanceTypesInstanceTypesLocalStorageList(this, "local_storage", false);
  public get localStorage() {
    return this._localStorage;
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // price - computed: true, optional: false, required: false
  public get price() {
    return this.getStringAttribute('price');
  }
}

export class DataApsarastackInstanceTypesInstanceTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackInstanceTypesInstanceTypesOutputReference {
    return new DataApsarastackInstanceTypesInstanceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_instance_types apsarastack_instance_types}
*/
export class DataApsarastackInstanceTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_instance_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApsarastackInstanceTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApsarastackInstanceTypes to import
  * @param importFromId The id of the existing DataApsarastackInstanceTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_instance_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApsarastackInstanceTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_instance_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_instance_types apsarastack_instance_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApsarastackInstanceTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApsarastackInstanceTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_instance_types',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
    this._cpuType = config.cpuType;
    this._eniAmount = config.eniAmount;
    this._id = config.id;
    this._instanceTypeFamily = config.instanceTypeFamily;
    this._kubernetesNodeRole = config.kubernetesNodeRole;
    this._memorySize = config.memorySize;
    this._outputFile = config.outputFile;
    this._sortedBy = config.sortedBy;
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

  // cpu_type - computed: false, optional: true, required: false
  private _cpuType?: string; 
  public get cpuType() {
    return this.getStringAttribute('cpu_type');
  }
  public set cpuType(value: string) {
    this._cpuType = value;
  }
  public resetCpuType() {
    this._cpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTypeInput() {
    return this._cpuType;
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
  private _instanceTypes = new DataApsarastackInstanceTypesInstanceTypesList(this, "instance_types", false);
  public get instanceTypes() {
    return this._instanceTypes;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
      cpu_type: cdktf.stringToTerraform(this._cpuType),
      eni_amount: cdktf.numberToTerraform(this._eniAmount),
      id: cdktf.stringToTerraform(this._id),
      instance_type_family: cdktf.stringToTerraform(this._instanceTypeFamily),
      kubernetes_node_role: cdktf.stringToTerraform(this._kubernetesNodeRole),
      memory_size: cdktf.numberToTerraform(this._memorySize),
      output_file: cdktf.stringToTerraform(this._outputFile),
      sorted_by: cdktf.stringToTerraform(this._sortedBy),
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
      cpu_type: {
        value: cdktf.stringToHclTerraform(this._cpuType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eni_amount: {
        value: cdktf.numberToHclTerraform(this._eniAmount),
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
      instance_type_family: {
        value: cdktf.stringToHclTerraform(this._instanceTypeFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
