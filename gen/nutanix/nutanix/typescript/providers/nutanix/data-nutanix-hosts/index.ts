// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/hosts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixHostsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/hosts#id DataNutanixHosts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataNutanixHostsEntitiesCategories {
}

export function dataNutanixHostsEntitiesCategoriesToTerraform(struct?: DataNutanixHostsEntitiesCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixHostsEntitiesCategoriesToHclTerraform(struct?: DataNutanixHostsEntitiesCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixHostsEntitiesCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixHostsEntitiesCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixHostsEntitiesCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixHostsEntitiesCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixHostsEntitiesCategoriesOutputReference {
    return new DataNutanixHostsEntitiesCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixHostsEntitiesGpuListStruct {
}

export function dataNutanixHostsEntitiesGpuListStructToTerraform(struct?: DataNutanixHostsEntitiesGpuListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixHostsEntitiesGpuListStructToHclTerraform(struct?: DataNutanixHostsEntitiesGpuListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixHostsEntitiesGpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixHostsEntitiesGpuListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixHostsEntitiesGpuListStruct | undefined) {
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

export class DataNutanixHostsEntitiesGpuListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixHostsEntitiesGpuListStructOutputReference {
    return new DataNutanixHostsEntitiesGpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixHostsEntitiesHostDisksReferenceListStruct {
}

export function dataNutanixHostsEntitiesHostDisksReferenceListStructToTerraform(struct?: DataNutanixHostsEntitiesHostDisksReferenceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixHostsEntitiesHostDisksReferenceListStructToHclTerraform(struct?: DataNutanixHostsEntitiesHostDisksReferenceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixHostsEntitiesHostDisksReferenceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixHostsEntitiesHostDisksReferenceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixHostsEntitiesHostDisksReferenceListStruct | undefined) {
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

export class DataNutanixHostsEntitiesHostDisksReferenceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixHostsEntitiesHostDisksReferenceListStructOutputReference {
    return new DataNutanixHostsEntitiesHostDisksReferenceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixHostsEntities {
}

export function dataNutanixHostsEntitiesToTerraform(struct?: DataNutanixHostsEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixHostsEntitiesToHclTerraform(struct?: DataNutanixHostsEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixHostsEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixHostsEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixHostsEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // block - computed: true, optional: false, required: false
  private _block = new cdktf.StringMap(this, "block");
  public get block() {
    return this._block;
  }

  // categories - computed: true, optional: false, required: false
  private _categories = new DataNutanixHostsEntitiesCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
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
  private _gpuList = new DataNutanixHostsEntitiesGpuListStructList(this, "gpu_list", false);
  public get gpuList() {
    return this._gpuList;
  }

  // host_disks_reference_list - computed: true, optional: false, required: false
  private _hostDisksReferenceList = new DataNutanixHostsEntitiesHostDisksReferenceListStructList(this, "host_disks_reference_list", false);
  public get hostDisksReferenceList() {
    return this._hostDisksReferenceList;
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
}

export class DataNutanixHostsEntitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixHostsEntitiesOutputReference {
    return new DataNutanixHostsEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/hosts nutanix_hosts}
*/
export class DataNutanixHosts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_hosts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixHosts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixHosts to import
  * @param importFromId The id of the existing DataNutanixHosts that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/hosts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixHosts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_hosts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/hosts nutanix_hosts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixHostsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixHostsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_hosts',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // entities - computed: true, optional: false, required: false
  private _entities = new DataNutanixHostsEntitiesList(this, "entities", false);
  public get entities() {
    return this._entities;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
