// https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRancher2ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster to whom the project belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/project#cluster_id DataRancher2Project#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/project#id DataRancher2Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/project#name DataRancher2Project#name}
  */
  readonly name: string;
}
export interface DataRancher2ProjectContainerResourceLimit {
}

export function dataRancher2ProjectContainerResourceLimitToTerraform(struct?: DataRancher2ProjectContainerResourceLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ProjectContainerResourceLimitToHclTerraform(struct?: DataRancher2ProjectContainerResourceLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ProjectContainerResourceLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ProjectContainerResourceLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ProjectContainerResourceLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits_cpu - computed: true, optional: false, required: false
  public get limitsCpu() {
    return this.getStringAttribute('limits_cpu');
  }

  // limits_memory - computed: true, optional: false, required: false
  public get limitsMemory() {
    return this.getStringAttribute('limits_memory');
  }

  // requests_cpu - computed: true, optional: false, required: false
  public get requestsCpu() {
    return this.getStringAttribute('requests_cpu');
  }

  // requests_memory - computed: true, optional: false, required: false
  public get requestsMemory() {
    return this.getStringAttribute('requests_memory');
  }
}

export class DataRancher2ProjectContainerResourceLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ProjectContainerResourceLimitOutputReference {
    return new DataRancher2ProjectContainerResourceLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ProjectResourceQuotaNamespaceDefaultLimit {
}

export function dataRancher2ProjectResourceQuotaNamespaceDefaultLimitToTerraform(struct?: DataRancher2ProjectResourceQuotaNamespaceDefaultLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ProjectResourceQuotaNamespaceDefaultLimitToHclTerraform(struct?: DataRancher2ProjectResourceQuotaNamespaceDefaultLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ProjectResourceQuotaNamespaceDefaultLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ProjectResourceQuotaNamespaceDefaultLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ProjectResourceQuotaNamespaceDefaultLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_maps - computed: true, optional: false, required: false
  public get configMaps() {
    return this.getStringAttribute('config_maps');
  }

  // limits_cpu - computed: true, optional: false, required: false
  public get limitsCpu() {
    return this.getStringAttribute('limits_cpu');
  }

  // limits_memory - computed: true, optional: false, required: false
  public get limitsMemory() {
    return this.getStringAttribute('limits_memory');
  }

  // persistent_volume_claims - computed: true, optional: false, required: false
  public get persistentVolumeClaims() {
    return this.getStringAttribute('persistent_volume_claims');
  }

  // pods - computed: true, optional: false, required: false
  public get pods() {
    return this.getStringAttribute('pods');
  }

  // replication_controllers - computed: true, optional: false, required: false
  public get replicationControllers() {
    return this.getStringAttribute('replication_controllers');
  }

  // requests_cpu - computed: true, optional: false, required: false
  public get requestsCpu() {
    return this.getStringAttribute('requests_cpu');
  }

  // requests_memory - computed: true, optional: false, required: false
  public get requestsMemory() {
    return this.getStringAttribute('requests_memory');
  }

  // requests_storage - computed: true, optional: false, required: false
  public get requestsStorage() {
    return this.getStringAttribute('requests_storage');
  }

  // secrets - computed: true, optional: false, required: false
  public get secrets() {
    return this.getStringAttribute('secrets');
  }

  // services - computed: true, optional: false, required: false
  public get services() {
    return this.getStringAttribute('services');
  }

  // services_load_balancers - computed: true, optional: false, required: false
  public get servicesLoadBalancers() {
    return this.getStringAttribute('services_load_balancers');
  }

  // services_node_ports - computed: true, optional: false, required: false
  public get servicesNodePorts() {
    return this.getStringAttribute('services_node_ports');
  }
}

export class DataRancher2ProjectResourceQuotaNamespaceDefaultLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ProjectResourceQuotaNamespaceDefaultLimitOutputReference {
    return new DataRancher2ProjectResourceQuotaNamespaceDefaultLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ProjectResourceQuotaProjectLimit {
}

export function dataRancher2ProjectResourceQuotaProjectLimitToTerraform(struct?: DataRancher2ProjectResourceQuotaProjectLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ProjectResourceQuotaProjectLimitToHclTerraform(struct?: DataRancher2ProjectResourceQuotaProjectLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ProjectResourceQuotaProjectLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ProjectResourceQuotaProjectLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ProjectResourceQuotaProjectLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_maps - computed: true, optional: false, required: false
  public get configMaps() {
    return this.getStringAttribute('config_maps');
  }

  // limits_cpu - computed: true, optional: false, required: false
  public get limitsCpu() {
    return this.getStringAttribute('limits_cpu');
  }

  // limits_memory - computed: true, optional: false, required: false
  public get limitsMemory() {
    return this.getStringAttribute('limits_memory');
  }

  // persistent_volume_claims - computed: true, optional: false, required: false
  public get persistentVolumeClaims() {
    return this.getStringAttribute('persistent_volume_claims');
  }

  // pods - computed: true, optional: false, required: false
  public get pods() {
    return this.getStringAttribute('pods');
  }

  // replication_controllers - computed: true, optional: false, required: false
  public get replicationControllers() {
    return this.getStringAttribute('replication_controllers');
  }

  // requests_cpu - computed: true, optional: false, required: false
  public get requestsCpu() {
    return this.getStringAttribute('requests_cpu');
  }

  // requests_memory - computed: true, optional: false, required: false
  public get requestsMemory() {
    return this.getStringAttribute('requests_memory');
  }

  // requests_storage - computed: true, optional: false, required: false
  public get requestsStorage() {
    return this.getStringAttribute('requests_storage');
  }

  // secrets - computed: true, optional: false, required: false
  public get secrets() {
    return this.getStringAttribute('secrets');
  }

  // services - computed: true, optional: false, required: false
  public get services() {
    return this.getStringAttribute('services');
  }

  // services_load_balancers - computed: true, optional: false, required: false
  public get servicesLoadBalancers() {
    return this.getStringAttribute('services_load_balancers');
  }

  // services_node_ports - computed: true, optional: false, required: false
  public get servicesNodePorts() {
    return this.getStringAttribute('services_node_ports');
  }
}

export class DataRancher2ProjectResourceQuotaProjectLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ProjectResourceQuotaProjectLimitOutputReference {
    return new DataRancher2ProjectResourceQuotaProjectLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ProjectResourceQuota {
}

export function dataRancher2ProjectResourceQuotaToTerraform(struct?: DataRancher2ProjectResourceQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ProjectResourceQuotaToHclTerraform(struct?: DataRancher2ProjectResourceQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ProjectResourceQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ProjectResourceQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ProjectResourceQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace_default_limit - computed: true, optional: false, required: false
  private _namespaceDefaultLimit = new DataRancher2ProjectResourceQuotaNamespaceDefaultLimitList(this, "namespace_default_limit", false);
  public get namespaceDefaultLimit() {
    return this._namespaceDefaultLimit;
  }

  // project_limit - computed: true, optional: false, required: false
  private _projectLimit = new DataRancher2ProjectResourceQuotaProjectLimitList(this, "project_limit", false);
  public get projectLimit() {
    return this._projectLimit;
  }
}

export class DataRancher2ProjectResourceQuotaList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ProjectResourceQuotaOutputReference {
    return new DataRancher2ProjectResourceQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/project rancher2_project}
*/
export class DataRancher2Project extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRancher2Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRancher2Project to import
  * @param importFromId The id of the existing DataRancher2Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRancher2Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/project rancher2_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRancher2ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataRancher2ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_project',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '8.3.1',
        providerVersionConstraint: '8.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // container_resource_limit - computed: true, optional: false, required: false
  private _containerResourceLimit = new DataRancher2ProjectContainerResourceLimitList(this, "container_resource_limit", false);
  public get containerResourceLimit() {
    return this._containerResourceLimit;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
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

  // resource_quota - computed: true, optional: false, required: false
  private _resourceQuota = new DataRancher2ProjectResourceQuotaList(this, "resource_quota", false);
  public get resourceQuota() {
    return this._resourceQuota;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
