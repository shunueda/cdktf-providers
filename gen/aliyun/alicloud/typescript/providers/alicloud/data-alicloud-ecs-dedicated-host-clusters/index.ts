// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecs_dedicated_host_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudEcsDedicatedHostClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecs_dedicated_host_clusters#dedicated_host_cluster_ids DataAlicloudEcsDedicatedHostClusters#dedicated_host_cluster_ids}
  */
  readonly dedicatedHostClusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecs_dedicated_host_clusters#dedicated_host_cluster_name DataAlicloudEcsDedicatedHostClusters#dedicated_host_cluster_name}
  */
  readonly dedicatedHostClusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecs_dedicated_host_clusters#id DataAlicloudEcsDedicatedHostClusters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecs_dedicated_host_clusters#ids DataAlicloudEcsDedicatedHostClusters#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecs_dedicated_host_clusters#name_regex DataAlicloudEcsDedicatedHostClusters#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecs_dedicated_host_clusters#output_file DataAlicloudEcsDedicatedHostClusters#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecs_dedicated_host_clusters#tags DataAlicloudEcsDedicatedHostClusters#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecs_dedicated_host_clusters#zone_id DataAlicloudEcsDedicatedHostClusters#zone_id}
  */
  readonly zoneId?: string;
}
export interface DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityLocalStorageCapacities {
}

export function dataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityLocalStorageCapacitiesToTerraform(struct?: DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityLocalStorageCapacities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityLocalStorageCapacitiesToHclTerraform(struct?: DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityLocalStorageCapacities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityLocalStorageCapacitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityLocalStorageCapacities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityLocalStorageCapacities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_disk - computed: true, optional: false, required: false
  public get availableDisk() {
    return this.getNumberAttribute('available_disk');
  }

  // data_disk_category - computed: true, optional: false, required: false
  public get dataDiskCategory() {
    return this.getStringAttribute('data_disk_category');
  }

  // total_disk - computed: true, optional: false, required: false
  public get totalDisk() {
    return this.getNumberAttribute('total_disk');
  }
}

export class DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityLocalStorageCapacitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityLocalStorageCapacitiesOutputReference {
    return new DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityLocalStorageCapacitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacity {
}

export function dataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityToTerraform(struct?: DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityToHclTerraform(struct?: DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_memory - computed: true, optional: false, required: false
  public get availableMemory() {
    return this.getNumberAttribute('available_memory');
  }

  // available_vcpus - computed: true, optional: false, required: false
  public get availableVcpus() {
    return this.getNumberAttribute('available_vcpus');
  }

  // local_storage_capacities - computed: true, optional: false, required: false
  private _localStorageCapacities = new DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityLocalStorageCapacitiesList(this, "local_storage_capacities", false);
  public get localStorageCapacities() {
    return this._localStorageCapacities;
  }

  // total_memory - computed: true, optional: false, required: false
  public get totalMemory() {
    return this.getNumberAttribute('total_memory');
  }

  // total_vcpus - computed: true, optional: false, required: false
  public get totalVcpus() {
    return this.getNumberAttribute('total_vcpus');
  }
}

export class DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityOutputReference {
    return new DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudEcsDedicatedHostClustersClusters {
}

export function dataAlicloudEcsDedicatedHostClustersClustersToTerraform(struct?: DataAlicloudEcsDedicatedHostClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEcsDedicatedHostClustersClustersToHclTerraform(struct?: DataAlicloudEcsDedicatedHostClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEcsDedicatedHostClustersClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEcsDedicatedHostClustersClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEcsDedicatedHostClustersClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dedicated_host_cluster_capacity - computed: true, optional: false, required: false
  private _dedicatedHostClusterCapacity = new DataAlicloudEcsDedicatedHostClustersClustersDedicatedHostClusterCapacityList(this, "dedicated_host_cluster_capacity", false);
  public get dedicatedHostClusterCapacity() {
    return this._dedicatedHostClusterCapacity;
  }

  // dedicated_host_cluster_id - computed: true, optional: false, required: false
  public get dedicatedHostClusterId() {
    return this.getStringAttribute('dedicated_host_cluster_id');
  }

  // dedicated_host_cluster_name - computed: true, optional: false, required: false
  public get dedicatedHostClusterName() {
    return this.getStringAttribute('dedicated_host_cluster_name');
  }

  // dedicated_host_ids - computed: true, optional: false, required: false
  public get dedicatedHostIds() {
    return this.getListAttribute('dedicated_host_ids');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataAlicloudEcsDedicatedHostClustersClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEcsDedicatedHostClustersClustersOutputReference {
    return new DataAlicloudEcsDedicatedHostClustersClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecs_dedicated_host_clusters alicloud_ecs_dedicated_host_clusters}
*/
export class DataAlicloudEcsDedicatedHostClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecs_dedicated_host_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudEcsDedicatedHostClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudEcsDedicatedHostClusters to import
  * @param importFromId The id of the existing DataAlicloudEcsDedicatedHostClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecs_dedicated_host_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudEcsDedicatedHostClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecs_dedicated_host_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecs_dedicated_host_clusters alicloud_ecs_dedicated_host_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudEcsDedicatedHostClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudEcsDedicatedHostClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecs_dedicated_host_clusters',
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
    this._dedicatedHostClusterIds = config.dedicatedHostClusterIds;
    this._dedicatedHostClusterName = config.dedicatedHostClusterName;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._tags = config.tags;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataAlicloudEcsDedicatedHostClustersClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }

  // dedicated_host_cluster_ids - computed: false, optional: true, required: false
  private _dedicatedHostClusterIds?: string[]; 
  public get dedicatedHostClusterIds() {
    return this.getListAttribute('dedicated_host_cluster_ids');
  }
  public set dedicatedHostClusterIds(value: string[]) {
    this._dedicatedHostClusterIds = value;
  }
  public resetDedicatedHostClusterIds() {
    this._dedicatedHostClusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostClusterIdsInput() {
    return this._dedicatedHostClusterIds;
  }

  // dedicated_host_cluster_name - computed: false, optional: true, required: false
  private _dedicatedHostClusterName?: string; 
  public get dedicatedHostClusterName() {
    return this.getStringAttribute('dedicated_host_cluster_name');
  }
  public set dedicatedHostClusterName(value: string) {
    this._dedicatedHostClusterName = value;
  }
  public resetDedicatedHostClusterName() {
    this._dedicatedHostClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostClusterNameInput() {
    return this._dedicatedHostClusterName;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
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

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated_host_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dedicatedHostClusterIds),
      dedicated_host_cluster_name: cdktf.stringToTerraform(this._dedicatedHostClusterName),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicated_host_cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dedicatedHostClusterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dedicated_host_cluster_name: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostClusterName),
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
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
