// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/tsf_group_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTsfGroupInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/tsf_group_instances#group_id DataTencentcloudTsfGroupInstances#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/tsf_group_instances#id DataTencentcloudTsfGroupInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * order term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/tsf_group_instances#order_by DataTencentcloudTsfGroupInstances#order_by}
  */
  readonly orderBy?: string;
  /**
  * order type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/tsf_group_instances#order_type DataTencentcloudTsfGroupInstances#order_type}
  */
  readonly orderType?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/tsf_group_instances#result_output_file DataTencentcloudTsfGroupInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * search word.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/tsf_group_instances#search_word DataTencentcloudTsfGroupInstances#search_word}
  */
  readonly searchWord?: string;
}
export interface DataTencentcloudTsfGroupInstancesResultContent {
}

export function dataTencentcloudTsfGroupInstancesResultContentToTerraform(struct?: DataTencentcloudTsfGroupInstancesResultContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfGroupInstancesResultContentToHclTerraform(struct?: DataTencentcloudTsfGroupInstancesResultContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfGroupInstancesResultContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfGroupInstancesResultContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfGroupInstancesResultContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_version - computed: true, optional: false, required: false
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // application_resource_type - computed: true, optional: false, required: false
  public get applicationResourceType() {
    return this.getStringAttribute('application_resource_type');
  }

  // application_type - computed: true, optional: false, required: false
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // count_in_tsf - computed: true, optional: false, required: false
  public get countInTsf() {
    return this.getNumberAttribute('count_in_tsf');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // instance_available_status - computed: true, optional: false, required: false
  public get instanceAvailableStatus() {
    return this.getStringAttribute('instance_available_status');
  }

  // instance_charge_type - computed: true, optional: false, required: false
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }

  // instance_created_time - computed: true, optional: false, required: false
  public get instanceCreatedTime() {
    return this.getStringAttribute('instance_created_time');
  }

  // instance_desc - computed: true, optional: false, required: false
  public get instanceDesc() {
    return this.getStringAttribute('instance_desc');
  }

  // instance_expired_time - computed: true, optional: false, required: false
  public get instanceExpiredTime() {
    return this.getStringAttribute('instance_expired_time');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_import_mode - computed: true, optional: false, required: false
  public get instanceImportMode() {
    return this.getStringAttribute('instance_import_mode');
  }

  // instance_limit_cpu - computed: true, optional: false, required: false
  public get instanceLimitCpu() {
    return this.getNumberAttribute('instance_limit_cpu');
  }

  // instance_limit_mem - computed: true, optional: false, required: false
  public get instanceLimitMem() {
    return this.getNumberAttribute('instance_limit_mem');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_pkg_version - computed: true, optional: false, required: false
  public get instancePkgVersion() {
    return this.getStringAttribute('instance_pkg_version');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }

  // instance_total_cpu - computed: true, optional: false, required: false
  public get instanceTotalCpu() {
    return this.getNumberAttribute('instance_total_cpu');
  }

  // instance_total_mem - computed: true, optional: false, required: false
  public get instanceTotalMem() {
    return this.getNumberAttribute('instance_total_mem');
  }

  // instance_used_cpu - computed: true, optional: false, required: false
  public get instanceUsedCpu() {
    return this.getNumberAttribute('instance_used_cpu');
  }

  // instance_used_mem - computed: true, optional: false, required: false
  public get instanceUsedMem() {
    return this.getNumberAttribute('instance_used_mem');
  }

  // instance_zone_id - computed: true, optional: false, required: false
  public get instanceZoneId() {
    return this.getStringAttribute('instance_zone_id');
  }

  // lan_ip - computed: true, optional: false, required: false
  public get lanIp() {
    return this.getStringAttribute('lan_ip');
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // namespace_name - computed: true, optional: false, required: false
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }

  // node_instance_id - computed: true, optional: false, required: false
  public get nodeInstanceId() {
    return this.getStringAttribute('node_instance_id');
  }

  // operation_state - computed: true, optional: false, required: false
  public get operationState() {
    return this.getNumberAttribute('operation_state');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // restrict_state - computed: true, optional: false, required: false
  public get restrictState() {
    return this.getStringAttribute('restrict_state');
  }

  // service_instance_status - computed: true, optional: false, required: false
  public get serviceInstanceStatus() {
    return this.getStringAttribute('service_instance_status');
  }

  // service_sidecar_status - computed: true, optional: false, required: false
  public get serviceSidecarStatus() {
    return this.getStringAttribute('service_sidecar_status');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // wan_ip - computed: true, optional: false, required: false
  public get wanIp() {
    return this.getStringAttribute('wan_ip');
  }
}

export class DataTencentcloudTsfGroupInstancesResultContentList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfGroupInstancesResultContentOutputReference {
    return new DataTencentcloudTsfGroupInstancesResultContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfGroupInstancesResult {
}

export function dataTencentcloudTsfGroupInstancesResultToTerraform(struct?: DataTencentcloudTsfGroupInstancesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfGroupInstancesResultToHclTerraform(struct?: DataTencentcloudTsfGroupInstancesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfGroupInstancesResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfGroupInstancesResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfGroupInstancesResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  private _content = new DataTencentcloudTsfGroupInstancesResultContentList(this, "content", false);
  public get content() {
    return this._content;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
}

export class DataTencentcloudTsfGroupInstancesResultList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfGroupInstancesResultOutputReference {
    return new DataTencentcloudTsfGroupInstancesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/tsf_group_instances tencentcloud_tsf_group_instances}
*/
export class DataTencentcloudTsfGroupInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_group_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTsfGroupInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTsfGroupInstances to import
  * @param importFromId The id of the existing DataTencentcloudTsfGroupInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/tsf_group_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTsfGroupInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_group_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/tsf_group_instances tencentcloud_tsf_group_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTsfGroupInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTsfGroupInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_group_instances',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._id = config.id;
    this._orderBy = config.orderBy;
    this._orderType = config.orderType;
    this._resultOutputFile = config.resultOutputFile;
    this._searchWord = config.searchWord;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // order_type - computed: false, optional: true, required: false
  private _orderType?: number; 
  public get orderType() {
    return this.getNumberAttribute('order_type');
  }
  public set orderType(value: number) {
    this._orderType = value;
  }
  public resetOrderType() {
    this._orderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderTypeInput() {
    return this._orderType;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataTencentcloudTsfGroupInstancesResultList(this, "result", false);
  public get result() {
    return this._result;
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

  // search_word - computed: false, optional: true, required: false
  private _searchWord?: string; 
  public get searchWord() {
    return this.getStringAttribute('search_word');
  }
  public set searchWord(value: string) {
    this._searchWord = value;
  }
  public resetSearchWord() {
    this._searchWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchWordInput() {
    return this._searchWord;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      order_by: cdktf.stringToTerraform(this._orderBy),
      order_type: cdktf.numberToTerraform(this._orderType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_word: cdktf.stringToTerraform(this._searchWord),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_type: {
        value: cdktf.numberToHclTerraform(this._orderType),
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
      search_word: {
        value: cdktf.stringToHclTerraform(this._searchWord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
