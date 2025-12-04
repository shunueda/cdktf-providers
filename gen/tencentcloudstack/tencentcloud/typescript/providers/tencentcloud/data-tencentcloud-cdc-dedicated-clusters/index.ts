// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdc_dedicated_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCdcDedicatedClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Query by one or more instance IDs. Example of instance ID: cluster-xxxxxxxx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdc_dedicated_clusters#dedicated_cluster_ids DataTencentcloudCdcDedicatedClusters#dedicated_cluster_ids}
  */
  readonly dedicatedClusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdc_dedicated_clusters#id DataTencentcloudCdcDedicatedClusters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter by CDC life cycle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdc_dedicated_clusters#lifecycle_statuses DataTencentcloudCdcDedicatedClusters#lifecycle_statuses}
  */
  readonly lifecycleStatuses?: string[];
  /**
  * Name of fuzzy matching CDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdc_dedicated_clusters#name DataTencentcloudCdcDedicatedClusters#name}
  */
  readonly name?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdc_dedicated_clusters#result_output_file DataTencentcloudCdcDedicatedClusters#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Filter by site id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdc_dedicated_clusters#site_ids DataTencentcloudCdcDedicatedClusters#site_ids}
  */
  readonly siteIds?: string[];
  /**
  * Filter by AZ name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdc_dedicated_clusters#zones DataTencentcloudCdcDedicatedClusters#zones}
  */
  readonly zones?: string[];
}
export interface DataTencentcloudCdcDedicatedClustersDedicatedClusterSet {
}

export function dataTencentcloudCdcDedicatedClustersDedicatedClusterSetToTerraform(struct?: DataTencentcloudCdcDedicatedClustersDedicatedClusterSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdcDedicatedClustersDedicatedClusterSetToHclTerraform(struct?: DataTencentcloudCdcDedicatedClustersDedicatedClusterSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdcDedicatedClustersDedicatedClusterSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdcDedicatedClustersDedicatedClusterSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdcDedicatedClustersDedicatedClusterSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dedicated_cluster_id - computed: true, optional: false, required: false
  public get dedicatedClusterId() {
    return this.getStringAttribute('dedicated_cluster_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // lifecycle_status - computed: true, optional: false, required: false
  public get lifecycleStatus() {
    return this.getStringAttribute('lifecycle_status');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudCdcDedicatedClustersDedicatedClusterSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdcDedicatedClustersDedicatedClusterSetOutputReference {
    return new DataTencentcloudCdcDedicatedClustersDedicatedClusterSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdc_dedicated_clusters tencentcloud_cdc_dedicated_clusters}
*/
export class DataTencentcloudCdcDedicatedClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdc_dedicated_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCdcDedicatedClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCdcDedicatedClusters to import
  * @param importFromId The id of the existing DataTencentcloudCdcDedicatedClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdc_dedicated_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCdcDedicatedClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdc_dedicated_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdc_dedicated_clusters tencentcloud_cdc_dedicated_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCdcDedicatedClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCdcDedicatedClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdc_dedicated_clusters',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dedicatedClusterIds = config.dedicatedClusterIds;
    this._id = config.id;
    this._lifecycleStatuses = config.lifecycleStatuses;
    this._name = config.name;
    this._resultOutputFile = config.resultOutputFile;
    this._siteIds = config.siteIds;
    this._zones = config.zones;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dedicated_cluster_ids - computed: false, optional: true, required: false
  private _dedicatedClusterIds?: string[]; 
  public get dedicatedClusterIds() {
    return cdktf.Fn.tolist(this.getListAttribute('dedicated_cluster_ids'));
  }
  public set dedicatedClusterIds(value: string[]) {
    this._dedicatedClusterIds = value;
  }
  public resetDedicatedClusterIds() {
    this._dedicatedClusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedClusterIdsInput() {
    return this._dedicatedClusterIds;
  }

  // dedicated_cluster_set - computed: true, optional: false, required: false
  private _dedicatedClusterSet = new DataTencentcloudCdcDedicatedClustersDedicatedClusterSetList(this, "dedicated_cluster_set", false);
  public get dedicatedClusterSet() {
    return this._dedicatedClusterSet;
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

  // lifecycle_statuses - computed: false, optional: true, required: false
  private _lifecycleStatuses?: string[]; 
  public get lifecycleStatuses() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_statuses'));
  }
  public set lifecycleStatuses(value: string[]) {
    this._lifecycleStatuses = value;
  }
  public resetLifecycleStatuses() {
    this._lifecycleStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStatusesInput() {
    return this._lifecycleStatuses;
  }

  // name - computed: false, optional: true, required: false
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

  // site_ids - computed: false, optional: true, required: false
  private _siteIds?: string[]; 
  public get siteIds() {
    return cdktf.Fn.tolist(this.getListAttribute('site_ids'));
  }
  public set siteIds(value: string[]) {
    this._siteIds = value;
  }
  public resetSiteIds() {
    this._siteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdsInput() {
    return this._siteIds;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dedicatedClusterIds),
      id: cdktf.stringToTerraform(this._id),
      lifecycle_statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lifecycleStatuses),
      name: cdktf.stringToTerraform(this._name),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      site_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._siteIds),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicated_cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dedicatedClusterIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_statuses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lifecycleStatuses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      site_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._siteIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
