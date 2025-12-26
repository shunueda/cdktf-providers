// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tdcpg_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTdcpgClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tdcpg_clusters#cluster_id DataTencentcloudTdcpgClusters#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tdcpg_clusters#cluster_name DataTencentcloudTdcpgClusters#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tdcpg_clusters#id DataTencentcloudTdcpgClusters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * pay mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tdcpg_clusters#pay_mode DataTencentcloudTdcpgClusters#pay_mode}
  */
  readonly payMode?: string;
  /**
  * project id, default to 0, means default project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tdcpg_clusters#project_id DataTencentcloudTdcpgClusters#project_id}
  */
  readonly projectId?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tdcpg_clusters#result_output_file DataTencentcloudTdcpgClusters#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * cluster status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tdcpg_clusters#status DataTencentcloudTdcpgClusters#status}
  */
  readonly status?: string;
}
export interface DataTencentcloudTdcpgClustersListEndpointSet {
}

export function dataTencentcloudTdcpgClustersListEndpointSetToTerraform(struct?: DataTencentcloudTdcpgClustersListEndpointSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTdcpgClustersListEndpointSetToHclTerraform(struct?: DataTencentcloudTdcpgClustersListEndpointSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTdcpgClustersListEndpointSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTdcpgClustersListEndpointSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTdcpgClustersListEndpointSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // private_port - computed: true, optional: false, required: false
  public get privatePort() {
    return this.getNumberAttribute('private_port');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // wan_domain - computed: true, optional: false, required: false
  public get wanDomain() {
    return this.getStringAttribute('wan_domain');
  }

  // wan_ip - computed: true, optional: false, required: false
  public get wanIp() {
    return this.getStringAttribute('wan_ip');
  }

  // wan_port - computed: true, optional: false, required: false
  public get wanPort() {
    return this.getNumberAttribute('wan_port');
  }
}

export class DataTencentcloudTdcpgClustersListEndpointSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTdcpgClustersListEndpointSetOutputReference {
    return new DataTencentcloudTdcpgClustersListEndpointSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTdcpgClustersListStruct {
}

export function dataTencentcloudTdcpgClustersListStructToTerraform(struct?: DataTencentcloudTdcpgClustersListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTdcpgClustersListStructToHclTerraform(struct?: DataTencentcloudTdcpgClustersListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTdcpgClustersListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTdcpgClustersListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTdcpgClustersListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_renew_flag - computed: true, optional: false, required: false
  public get autoRenewFlag() {
    return this.getNumberAttribute('auto_renew_flag');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // db_charset - computed: true, optional: false, required: false
  public get dbCharset() {
    return this.getStringAttribute('db_charset');
  }

  // db_kernel_version - computed: true, optional: false, required: false
  public get dbKernelVersion() {
    return this.getStringAttribute('db_kernel_version');
  }

  // db_major_version - computed: true, optional: false, required: false
  public get dbMajorVersion() {
    return this.getStringAttribute('db_major_version');
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // endpoint_set - computed: true, optional: false, required: false
  private _endpointSet = new DataTencentcloudTdcpgClustersListEndpointSetList(this, "endpoint_set", false);
  public get endpointSet() {
    return this._endpointSet;
  }

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // pay_mode - computed: true, optional: false, required: false
  public get payMode() {
    return this.getStringAttribute('pay_mode');
  }

  // pay_period_end_time - computed: true, optional: false, required: false
  public get payPeriodEndTime() {
    return this.getStringAttribute('pay_period_end_time');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_desc - computed: true, optional: false, required: false
  public get statusDesc() {
    return this.getStringAttribute('status_desc');
  }

  // storage_limit - computed: true, optional: false, required: false
  public get storageLimit() {
    return this.getNumberAttribute('storage_limit');
  }

  // storage_pay_mode - computed: true, optional: false, required: false
  public get storagePayMode() {
    return this.getStringAttribute('storage_pay_mode');
  }

  // storage_used - computed: true, optional: false, required: false
  public get storageUsed() {
    return this.getNumberAttribute('storage_used');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudTdcpgClustersListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTdcpgClustersListStructOutputReference {
    return new DataTencentcloudTdcpgClustersListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tdcpg_clusters tencentcloud_tdcpg_clusters}
*/
export class DataTencentcloudTdcpgClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tdcpg_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTdcpgClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTdcpgClusters to import
  * @param importFromId The id of the existing DataTencentcloudTdcpgClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tdcpg_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTdcpgClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tdcpg_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tdcpg_clusters tencentcloud_tdcpg_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTdcpgClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTdcpgClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tdcpg_clusters',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._payMode = config.payMode;
    this._projectId = config.projectId;
    this._resultOutputFile = config.resultOutputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudTdcpgClustersListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // pay_mode - computed: false, optional: true, required: false
  private _payMode?: string; 
  public get payMode() {
    return this.getStringAttribute('pay_mode');
  }
  public set payMode(value: string) {
    this._payMode = value;
  }
  public resetPayMode() {
    this._payMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payModeInput() {
    return this._payMode;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      pay_mode: cdktf.stringToTerraform(this._payMode),
      project_id: cdktf.numberToTerraform(this._projectId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      status: cdktf.stringToTerraform(this._status),
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
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
      pay_mode: {
        value: cdktf.stringToHclTerraform(this._payMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
