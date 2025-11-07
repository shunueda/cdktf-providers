// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/host#host_id DataNutanixHost#host_id}
  */
  readonly hostId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/host#id DataNutanixHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/host#categories DataNutanixHost#categories}
  */
  readonly categories?: DataNutanixHostCategories[] | cdktf.IResolvable;
}
export interface DataNutanixHostGpuListStruct {
}

export function dataNutanixHostGpuListStructToTerraform(struct?: DataNutanixHostGpuListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixHostGpuListStructToHclTerraform(struct?: DataNutanixHostGpuListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixHostGpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixHostGpuListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixHostGpuListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assignable - computed: true, optional: false, required: false
  public get assignable() {
    return this.getBooleanAttribute('assignable');
  }

  // consumer_reference - computed: true, optional: false, required: false
  private _consumerReference = new cdktf.StringMap(this, "consumer_reference");
  public get consumerReference() {
    return this._consumerReference;
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }

  // fraction - computed: true, optional: false, required: false
  public get fraction() {
    return this.getNumberAttribute('fraction');
  }

  // frame_buffer_size_mib - computed: true, optional: false, required: false
  public get frameBufferSizeMib() {
    return this.getNumberAttribute('frame_buffer_size_mib');
  }

  // guest_driver_version - computed: true, optional: false, required: false
  public get guestDriverVersion() {
    return this.getStringAttribute('guest_driver_version');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // license_list - computed: true, optional: false, required: false
  public get licenseList() {
    return this.getListAttribute('license_list');
  }

  // max_resolution - computed: true, optional: false, required: false
  public get maxResolution() {
    return this.getStringAttribute('max_resolution');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_vgpus_allocated - computed: true, optional: false, required: false
  public get numVgpusAllocated() {
    return this.getNumberAttribute('num_vgpus_allocated');
  }

  // num_virtual_display_heads - computed: true, optional: false, required: false
  public get numVirtualDisplayHeads() {
    return this.getNumberAttribute('num_virtual_display_heads');
  }

  // numa_node - computed: true, optional: false, required: false
  public get numaNode() {
    return this.getNumberAttribute('numa_node');
  }

  // pci_address - computed: true, optional: false, required: false
  public get pciAddress() {
    return this.getStringAttribute('pci_address');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
}

export class DataNutanixHostGpuListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixHostGpuListStructOutputReference {
    return new DataNutanixHostGpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixHostHostDisksReferenceListStruct {
}

export function dataNutanixHostHostDisksReferenceListStructToTerraform(struct?: DataNutanixHostHostDisksReferenceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixHostHostDisksReferenceListStructToHclTerraform(struct?: DataNutanixHostHostDisksReferenceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixHostHostDisksReferenceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixHostHostDisksReferenceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixHostHostDisksReferenceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixHostHostDisksReferenceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixHostHostDisksReferenceListStructOutputReference {
    return new DataNutanixHostHostDisksReferenceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixHostCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/host#name DataNutanixHost#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/host#value DataNutanixHost#value}
  */
  readonly value?: string;
}

export function dataNutanixHostCategoriesToTerraform(struct?: DataNutanixHostCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataNutanixHostCategoriesToHclTerraform(struct?: DataNutanixHostCategories | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNutanixHostCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixHostCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixHostCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataNutanixHostCategoriesList extends cdktf.ComplexList {
  public internalValue? : DataNutanixHostCategories[] | cdktf.IResolvable

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
  public get(index: number): DataNutanixHostCategoriesOutputReference {
    return new DataNutanixHostCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/host nutanix_host}
*/
export class DataNutanixHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixHost to import
  * @param importFromId The id of the existing DataNutanixHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/host nutanix_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixHostConfig
  */
  public constructor(scope: Construct, id: string, config: DataNutanixHostConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_host',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostId = config.hostId;
    this._id = config.id;
    this._categories.internalValue = config.categories;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // block - computed: true, optional: false, required: false
  private _block = new cdktf.StringMap(this, "block");
  public get block() {
    return this._block;
  }

  // cluster_reference - computed: true, optional: false, required: false
  private _clusterReference = new cdktf.StringMap(this, "cluster_reference");
  public get clusterReference() {
    return this._clusterReference;
  }

  // controller_vm - computed: true, optional: false, required: false
  private _controllerVm = new cdktf.StringMap(this, "controller_vm");
  public get controllerVm() {
    return this._controllerVm;
  }

  // cpu_capacity_hz - computed: true, optional: false, required: false
  public get cpuCapacityHz() {
    return this.getNumberAttribute('cpu_capacity_hz');
  }

  // cpu_model - computed: true, optional: false, required: false
  public get cpuModel() {
    return this.getStringAttribute('cpu_model');
  }

  // failover_cluster - computed: true, optional: false, required: false
  private _failoverCluster = new cdktf.StringMap(this, "failover_cluster");
  public get failoverCluster() {
    return this._failoverCluster;
  }

  // gpu_driver_version - computed: true, optional: false, required: false
  public get gpuDriverVersion() {
    return this.getStringAttribute('gpu_driver_version');
  }

  // gpu_list - computed: true, optional: false, required: false
  private _gpuList = new DataNutanixHostGpuListStructList(this, "gpu_list", false);
  public get gpuList() {
    return this._gpuList;
  }

  // host_disks_reference_list - computed: true, optional: false, required: false
  private _hostDisksReferenceList = new DataNutanixHostHostDisksReferenceListStructList(this, "host_disks_reference_list", false);
  public get hostDisksReferenceList() {
    return this._hostDisksReferenceList;
  }

  // host_id - computed: false, optional: false, required: true
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // host_nics_id_list - computed: true, optional: false, required: false
  public get hostNicsIdList() {
    return this.getListAttribute('host_nics_id_list');
  }

  // host_type - computed: true, optional: false, required: false
  public get hostType() {
    return this.getStringAttribute('host_type');
  }

  // hypervisor - computed: true, optional: false, required: false
  private _hypervisor = new cdktf.StringMap(this, "hypervisor");
  public get hypervisor() {
    return this._hypervisor;
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

  // ipmi - computed: true, optional: false, required: false
  private _ipmi = new cdktf.StringMap(this, "ipmi");
  public get ipmi() {
    return this._ipmi;
  }

  // memory_capacity_mib - computed: true, optional: false, required: false
  public get memoryCapacityMib() {
    return this.getNumberAttribute('memory_capacity_mib');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // monitoring_state - computed: true, optional: false, required: false
  public get monitoringState() {
    return this.getStringAttribute('monitoring_state');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_cpu_cores - computed: true, optional: false, required: false
  public get numCpuCores() {
    return this.getNumberAttribute('num_cpu_cores');
  }

  // num_cpu_sockets - computed: true, optional: false, required: false
  public get numCpuSockets() {
    return this.getNumberAttribute('num_cpu_sockets');
  }

  // owner_reference - computed: true, optional: false, required: false
  private _ownerReference = new cdktf.StringMap(this, "owner_reference");
  public get ownerReference() {
    return this._ownerReference;
  }

  // project_reference - computed: true, optional: false, required: false
  private _projectReference = new cdktf.StringMap(this, "project_reference");
  public get projectReference() {
    return this._projectReference;
  }

  // rackable_unit_reference - computed: true, optional: false, required: false
  private _rackableUnitReference = new cdktf.StringMap(this, "rackable_unit_reference");
  public get rackableUnitReference() {
    return this._rackableUnitReference;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // windows_domain - computed: true, optional: false, required: false
  private _windowsDomain = new cdktf.StringMap(this, "windows_domain");
  public get windowsDomain() {
    return this._windowsDomain;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new DataNutanixHostCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: DataNutanixHostCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
      categories: cdktf.listMapper(dataNutanixHostCategoriesToTerraform, true)(this._categories.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
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
      categories: {
        value: cdktf.listMapperHcl(dataNutanixHostCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNutanixHostCategoriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
