// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/adb_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackAdbClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/adb_clusters#description DataAlibabacloudstackAdbClusters#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/adb_clusters#description_regex DataAlibabacloudstackAdbClusters#description_regex}
  */
  readonly descriptionRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/adb_clusters#enable_details DataAlibabacloudstackAdbClusters#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/adb_clusters#id DataAlibabacloudstackAdbClusters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/adb_clusters#ids DataAlibabacloudstackAdbClusters#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/adb_clusters#output_file DataAlibabacloudstackAdbClusters#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/adb_clusters#resource_group_id DataAlibabacloudstackAdbClusters#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/adb_clusters#status DataAlibabacloudstackAdbClusters#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/adb_clusters#tags DataAlibabacloudstackAdbClusters#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAlibabacloudstackAdbClustersClusters {
}

export function dataAlibabacloudstackAdbClustersClustersToTerraform(struct?: DataAlibabacloudstackAdbClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackAdbClustersClustersToHclTerraform(struct?: DataAlibabacloudstackAdbClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackAdbClustersClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackAdbClustersClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackAdbClustersClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // charge_type - computed: true, optional: false, required: false
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }

  // commodity_code - computed: true, optional: false, required: false
  public get commodityCode() {
    return this.getStringAttribute('commodity_code');
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // db_cluster_category - computed: true, optional: false, required: false
  public get dbClusterCategory() {
    return this.getStringAttribute('db_cluster_category');
  }

  // db_cluster_id - computed: true, optional: false, required: false
  public get dbClusterId() {
    return this.getStringAttribute('db_cluster_id');
  }

  // db_cluster_network_type - computed: true, optional: false, required: false
  public get dbClusterNetworkType() {
    return this.getStringAttribute('db_cluster_network_type');
  }

  // db_cluster_type - computed: true, optional: false, required: false
  public get dbClusterType() {
    return this.getStringAttribute('db_cluster_type');
  }

  // db_node_class - computed: true, optional: false, required: false
  public get dbNodeClass() {
    return this.getStringAttribute('db_node_class');
  }

  // db_node_count - computed: true, optional: false, required: false
  public get dbNodeCount() {
    return this.getNumberAttribute('db_node_count');
  }

  // db_node_storage - computed: true, optional: false, required: false
  public get dbNodeStorage() {
    return this.getNumberAttribute('db_node_storage');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // dts_job_id - computed: true, optional: false, required: false
  public get dtsJobId() {
    return this.getStringAttribute('dts_job_id');
  }

  // elastic_io_resource - computed: true, optional: false, required: false
  public get elasticIoResource() {
    return this.getNumberAttribute('elastic_io_resource');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // executor_count - computed: true, optional: false, required: false
  public get executorCount() {
    return this.getStringAttribute('executor_count');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getStringAttribute('expired');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lock_mode - computed: true, optional: false, required: false
  public get lockMode() {
    return this.getStringAttribute('lock_mode');
  }

  // lock_reason - computed: true, optional: false, required: false
  public get lockReason() {
    return this.getStringAttribute('lock_reason');
  }

  // maintain_time - computed: true, optional: false, required: false
  public get maintainTime() {
    return this.getStringAttribute('maintain_time');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // payment_type - computed: true, optional: false, required: false
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // rds_instance_id - computed: true, optional: false, required: false
  public get rdsInstanceId() {
    return this.getStringAttribute('rds_instance_id');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // security_ips - computed: true, optional: false, required: false
  public get securityIps() {
    return this.getListAttribute('security_ips');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_resource - computed: true, optional: false, required: false
  public get storageResource() {
    return this.getStringAttribute('storage_resource');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // vpc_cloud_instance_id - computed: true, optional: false, required: false
  public get vpcCloudInstanceId() {
    return this.getStringAttribute('vpc_cloud_instance_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vswitch_id - computed: true, optional: false, required: false
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataAlibabacloudstackAdbClustersClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackAdbClustersClustersOutputReference {
    return new DataAlibabacloudstackAdbClustersClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/adb_clusters alibabacloudstack_adb_clusters}
*/
export class DataAlibabacloudstackAdbClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_adb_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackAdbClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackAdbClusters to import
  * @param importFromId The id of the existing DataAlibabacloudstackAdbClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/adb_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackAdbClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_adb_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/adb_clusters alibabacloudstack_adb_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackAdbClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackAdbClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_adb_clusters',
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
    this._description = config.description;
    this._descriptionRegex = config.descriptionRegex;
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._ids = config.ids;
    this._outputFile = config.outputFile;
    this._resourceGroupId = config.resourceGroupId;
    this._status = config.status;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataAlibabacloudstackAdbClustersClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // description_regex - computed: false, optional: true, required: false
  private _descriptionRegex?: string; 
  public get descriptionRegex() {
    return this.getStringAttribute('description_regex');
  }
  public set descriptionRegex(value: string) {
    this._descriptionRegex = value;
  }
  public resetDescriptionRegex() {
    this._descriptionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionRegexInput() {
    return this._descriptionRegex;
  }

  // descriptions - computed: true, optional: false, required: false
  public get descriptions() {
    return this.getListAttribute('descriptions');
  }

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      description_regex: cdktf.stringToTerraform(this._descriptionRegex),
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description_regex: {
        value: cdktf.stringToHclTerraform(this._descriptionRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
