// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudEmrServiceNodeInfosConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration Status, -2: Configuration Failed, -1: Configuration Expired, 1: Synchronized, -99 All.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#conf_status DataTencentcloudEmrServiceNodeInfos#conf_status}
  */
  readonly confStatus?: number;
  /**
  * Filter Condition: Whether DN is in Maintenance Mode - 0 represents all statuses, 1 represents in maintenance mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#data_node_maintenance_id DataTencentcloudEmrServiceNodeInfos#data_node_maintenance_id}
  */
  readonly dataNodeMaintenanceId?: number;
  /**
  * Filter Conditions: Health Status, 0 represents unavailable, 1 represents good, -2 represents unknown, -99 represents all, -3 represents potential risks, -4 represents not detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#health_state_id DataTencentcloudEmrServiceNodeInfos#health_state_id}
  */
  readonly healthStateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#id DataTencentcloudEmrServiceNodeInfos#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * EMR Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#instance_id DataTencentcloudEmrServiceNodeInfos#instance_id}
  */
  readonly instanceId: string;
  /**
  * Number of Items per Page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#limit DataTencentcloudEmrServiceNodeInfos#limit}
  */
  readonly limit?: number;
  /**
  * Filter Condition: Maintenance Status - 0 represents all statuses, 1 represents normal mode, 2 represents maintenance mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#maintain_state_id DataTencentcloudEmrServiceNodeInfos#maintain_state_id}
  */
  readonly maintainStateId?: number;
  /**
  * Node Names: master, core, task, common, router, all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#node_type_name DataTencentcloudEmrServiceNodeInfos#node_type_name}
  */
  readonly nodeTypeName?: string;
  /**
  * Page Number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#offset DataTencentcloudEmrServiceNodeInfos#offset}
  */
  readonly offset?: number;
  /**
  * Filter Condition: Operation Status - 0 represents all statuses, 1 represents started, 2 represents stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#operator_state_id DataTencentcloudEmrServiceNodeInfos#operator_state_id}
  */
  readonly operatorStateId?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#result_output_file DataTencentcloudEmrServiceNodeInfos#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Search Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#search_text DataTencentcloudEmrServiceNodeInfos#search_text}
  */
  readonly searchText?: string;
  /**
  * Service Component Name, all in uppercase, e.g., YARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#service_name DataTencentcloudEmrServiceNodeInfos#service_name}
  */
  readonly serviceName?: string;
  /**
  * search_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#search_fields DataTencentcloudEmrServiceNodeInfos#search_fields}
  */
  readonly searchFields?: DataTencentcloudEmrServiceNodeInfosSearchFields[] | cdktf.IResolvable;
}
export interface DataTencentcloudEmrServiceNodeInfosServiceNodeListHealthStatus {
}

export function dataTencentcloudEmrServiceNodeInfosServiceNodeListHealthStatusToTerraform(struct?: DataTencentcloudEmrServiceNodeInfosServiceNodeListHealthStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudEmrServiceNodeInfosServiceNodeListHealthStatusToHclTerraform(struct?: DataTencentcloudEmrServiceNodeInfosServiceNodeListHealthStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudEmrServiceNodeInfosServiceNodeListHealthStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudEmrServiceNodeInfosServiceNodeListHealthStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudEmrServiceNodeInfosServiceNodeListHealthStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // desc - computed: true, optional: false, required: false
  public get desc() {
    return this.getStringAttribute('desc');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class DataTencentcloudEmrServiceNodeInfosServiceNodeListHealthStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudEmrServiceNodeInfosServiceNodeListHealthStatusOutputReference {
    return new DataTencentcloudEmrServiceNodeInfosServiceNodeListHealthStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudEmrServiceNodeInfosServiceNodeListServiceDetectionInfo {
}

export function dataTencentcloudEmrServiceNodeInfosServiceNodeListServiceDetectionInfoToTerraform(struct?: DataTencentcloudEmrServiceNodeInfosServiceNodeListServiceDetectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudEmrServiceNodeInfosServiceNodeListServiceDetectionInfoToHclTerraform(struct?: DataTencentcloudEmrServiceNodeInfosServiceNodeListServiceDetectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudEmrServiceNodeInfosServiceNodeListServiceDetectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudEmrServiceNodeInfosServiceNodeListServiceDetectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudEmrServiceNodeInfosServiceNodeListServiceDetectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detect_alert - computed: true, optional: false, required: false
  public get detectAlert() {
    return this.getStringAttribute('detect_alert');
  }

  // detect_function_key - computed: true, optional: false, required: false
  public get detectFunctionKey() {
    return this.getStringAttribute('detect_function_key');
  }

  // detect_function_value - computed: true, optional: false, required: false
  public get detectFunctionValue() {
    return this.getStringAttribute('detect_function_value');
  }

  // detect_time - computed: true, optional: false, required: false
  public get detectTime() {
    return this.getStringAttribute('detect_time');
  }
}

export class DataTencentcloudEmrServiceNodeInfosServiceNodeListServiceDetectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudEmrServiceNodeInfosServiceNodeListServiceDetectionInfoOutputReference {
    return new DataTencentcloudEmrServiceNodeInfosServiceNodeListServiceDetectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudEmrServiceNodeInfosServiceNodeListStopPolicies {
}

export function dataTencentcloudEmrServiceNodeInfosServiceNodeListStopPoliciesToTerraform(struct?: DataTencentcloudEmrServiceNodeInfosServiceNodeListStopPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudEmrServiceNodeInfosServiceNodeListStopPoliciesToHclTerraform(struct?: DataTencentcloudEmrServiceNodeInfosServiceNodeListStopPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudEmrServiceNodeInfosServiceNodeListStopPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudEmrServiceNodeInfosServiceNodeListStopPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudEmrServiceNodeInfosServiceNodeListStopPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size_range - computed: true, optional: false, required: false
  public get batchSizeRange() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('batch_size_range')));
  }

  // describe - computed: true, optional: false, required: false
  public get describe() {
    return this.getStringAttribute('describe');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getStringAttribute('is_default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataTencentcloudEmrServiceNodeInfosServiceNodeListStopPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudEmrServiceNodeInfosServiceNodeListStopPoliciesOutputReference {
    return new DataTencentcloudEmrServiceNodeInfosServiceNodeListStopPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudEmrServiceNodeInfosServiceNodeListStruct {
}

export function dataTencentcloudEmrServiceNodeInfosServiceNodeListStructToTerraform(struct?: DataTencentcloudEmrServiceNodeInfosServiceNodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudEmrServiceNodeInfosServiceNodeListStructToHclTerraform(struct?: DataTencentcloudEmrServiceNodeInfosServiceNodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudEmrServiceNodeInfosServiceNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudEmrServiceNodeInfosServiceNodeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudEmrServiceNodeInfosServiceNodeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conf_group_id - computed: true, optional: false, required: false
  public get confGroupId() {
    return this.getNumberAttribute('conf_group_id');
  }

  // conf_group_name - computed: true, optional: false, required: false
  public get confGroupName() {
    return this.getStringAttribute('conf_group_name');
  }

  // conf_status - computed: true, optional: false, required: false
  public get confStatus() {
    return this.getNumberAttribute('conf_status');
  }

  // data_node_maintenance_state - computed: true, optional: false, required: false
  public get dataNodeMaintenanceState() {
    return this.getNumberAttribute('data_node_maintenance_state');
  }

  // flag - computed: true, optional: false, required: false
  public get flag() {
    return this.getNumberAttribute('flag');
  }

  // ha_state - computed: true, optional: false, required: false
  public get haState() {
    return this.getStringAttribute('ha_state');
  }

  // health_status - computed: true, optional: false, required: false
  private _healthStatus = new DataTencentcloudEmrServiceNodeInfosServiceNodeListHealthStatusList(this, "health_status", false);
  public get healthStatus() {
    return this._healthStatus;
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // is_federation - computed: true, optional: false, required: false
  public get isFederation() {
    return this.getBooleanAttribute('is_federation');
  }

  // is_support_role_monitor - computed: true, optional: false, required: false
  public get isSupportRoleMonitor() {
    return this.getBooleanAttribute('is_support_role_monitor');
  }

  // last_restart_time - computed: true, optional: false, required: false
  public get lastRestartTime() {
    return this.getStringAttribute('last_restart_time');
  }

  // monitor_status - computed: true, optional: false, required: false
  public get monitorStatus() {
    return this.getNumberAttribute('monitor_status');
  }

  // name_service - computed: true, optional: false, required: false
  public get nameService() {
    return this.getStringAttribute('name_service');
  }

  // node_flag_filter - computed: true, optional: false, required: false
  public get nodeFlagFilter() {
    return this.getStringAttribute('node_flag_filter');
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getNumberAttribute('node_type');
  }

  // ports_info - computed: true, optional: false, required: false
  public get portsInfo() {
    return this.getStringAttribute('ports_info');
  }

  // service_detection_info - computed: true, optional: false, required: false
  private _serviceDetectionInfo = new DataTencentcloudEmrServiceNodeInfosServiceNodeListServiceDetectionInfoList(this, "service_detection_info", false);
  public get serviceDetectionInfo() {
    return this._serviceDetectionInfo;
  }

  // service_status - computed: true, optional: false, required: false
  public get serviceStatus() {
    return this.getNumberAttribute('service_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // stop_policies - computed: true, optional: false, required: false
  private _stopPolicies = new DataTencentcloudEmrServiceNodeInfosServiceNodeListStopPoliciesList(this, "stop_policies", false);
  public get stopPolicies() {
    return this._stopPolicies;
  }
}

export class DataTencentcloudEmrServiceNodeInfosServiceNodeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudEmrServiceNodeInfosServiceNodeListStructOutputReference {
    return new DataTencentcloudEmrServiceNodeInfosServiceNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudEmrServiceNodeInfosSearchFields {
  /**
  * Types Supported for Search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#search_type DataTencentcloudEmrServiceNodeInfos#search_type}
  */
  readonly searchType: string;
  /**
  * Values Supported for Search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#search_value DataTencentcloudEmrServiceNodeInfos#search_value}
  */
  readonly searchValue: string;
}

export function dataTencentcloudEmrServiceNodeInfosSearchFieldsToTerraform(struct?: DataTencentcloudEmrServiceNodeInfosSearchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_type: cdktf.stringToTerraform(struct!.searchType),
    search_value: cdktf.stringToTerraform(struct!.searchValue),
  }
}


export function dataTencentcloudEmrServiceNodeInfosSearchFieldsToHclTerraform(struct?: DataTencentcloudEmrServiceNodeInfosSearchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_type: {
      value: cdktf.stringToHclTerraform(struct!.searchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_value: {
      value: cdktf.stringToHclTerraform(struct!.searchValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudEmrServiceNodeInfosSearchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudEmrServiceNodeInfosSearchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchType = this._searchType;
    }
    if (this._searchValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchValue = this._searchValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudEmrServiceNodeInfosSearchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._searchType = undefined;
      this._searchValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._searchType = value.searchType;
      this._searchValue = value.searchValue;
    }
  }

  // search_type - computed: false, optional: false, required: true
  private _searchType?: string; 
  public get searchType() {
    return this.getStringAttribute('search_type');
  }
  public set searchType(value: string) {
    this._searchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTypeInput() {
    return this._searchType;
  }

  // search_value - computed: false, optional: false, required: true
  private _searchValue?: string; 
  public get searchValue() {
    return this.getStringAttribute('search_value');
  }
  public set searchValue(value: string) {
    this._searchValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchValueInput() {
    return this._searchValue;
  }
}

export class DataTencentcloudEmrServiceNodeInfosSearchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudEmrServiceNodeInfosSearchFields[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudEmrServiceNodeInfosSearchFieldsOutputReference {
    return new DataTencentcloudEmrServiceNodeInfosSearchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos tencentcloud_emr_service_node_infos}
*/
export class DataTencentcloudEmrServiceNodeInfos extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_emr_service_node_infos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudEmrServiceNodeInfos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudEmrServiceNodeInfos to import
  * @param importFromId The id of the existing DataTencentcloudEmrServiceNodeInfos that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudEmrServiceNodeInfos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_emr_service_node_infos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/emr_service_node_infos tencentcloud_emr_service_node_infos} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudEmrServiceNodeInfosConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudEmrServiceNodeInfosConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_emr_service_node_infos',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._confStatus = config.confStatus;
    this._dataNodeMaintenanceId = config.dataNodeMaintenanceId;
    this._healthStateId = config.healthStateId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._limit = config.limit;
    this._maintainStateId = config.maintainStateId;
    this._nodeTypeName = config.nodeTypeName;
    this._offset = config.offset;
    this._operatorStateId = config.operatorStateId;
    this._resultOutputFile = config.resultOutputFile;
    this._searchText = config.searchText;
    this._serviceName = config.serviceName;
    this._searchFields.internalValue = config.searchFields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_info - computed: true, optional: false, required: false
  public get aliasInfo() {
    return this.getStringAttribute('alias_info');
  }

  // conf_status - computed: false, optional: true, required: false
  private _confStatus?: number; 
  public get confStatus() {
    return this.getNumberAttribute('conf_status');
  }
  public set confStatus(value: number) {
    this._confStatus = value;
  }
  public resetConfStatus() {
    this._confStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confStatusInput() {
    return this._confStatus;
  }

  // data_node_maintenance_id - computed: false, optional: true, required: false
  private _dataNodeMaintenanceId?: number; 
  public get dataNodeMaintenanceId() {
    return this.getNumberAttribute('data_node_maintenance_id');
  }
  public set dataNodeMaintenanceId(value: number) {
    this._dataNodeMaintenanceId = value;
  }
  public resetDataNodeMaintenanceId() {
    this._dataNodeMaintenanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeMaintenanceIdInput() {
    return this._dataNodeMaintenanceId;
  }

  // health_state_id - computed: false, optional: true, required: false
  private _healthStateId?: string; 
  public get healthStateId() {
    return this.getStringAttribute('health_state_id');
  }
  public set healthStateId(value: string) {
    this._healthStateId = value;
  }
  public resetHealthStateId() {
    this._healthStateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthStateIdInput() {
    return this._healthStateId;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // maintain_state_id - computed: false, optional: true, required: false
  private _maintainStateId?: number; 
  public get maintainStateId() {
    return this.getNumberAttribute('maintain_state_id');
  }
  public set maintainStateId(value: number) {
    this._maintainStateId = value;
  }
  public resetMaintainStateId() {
    this._maintainStateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainStateIdInput() {
    return this._maintainStateId;
  }

  // node_type_name - computed: false, optional: true, required: false
  private _nodeTypeName?: string; 
  public get nodeTypeName() {
    return this.getStringAttribute('node_type_name');
  }
  public set nodeTypeName(value: string) {
    this._nodeTypeName = value;
  }
  public resetNodeTypeName() {
    this._nodeTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeNameInput() {
    return this._nodeTypeName;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // operator_state_id - computed: false, optional: true, required: false
  private _operatorStateId?: number; 
  public get operatorStateId() {
    return this.getNumberAttribute('operator_state_id');
  }
  public set operatorStateId(value: number) {
    this._operatorStateId = value;
  }
  public resetOperatorStateId() {
    this._operatorStateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorStateIdInput() {
    return this._operatorStateId;
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

  // search_text - computed: false, optional: true, required: false
  private _searchText?: string; 
  public get searchText() {
    return this.getStringAttribute('search_text');
  }
  public set searchText(value: string) {
    this._searchText = value;
  }
  public resetSearchText() {
    this._searchText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTextInput() {
    return this._searchText;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_node_list - computed: true, optional: false, required: false
  private _serviceNodeList = new DataTencentcloudEmrServiceNodeInfosServiceNodeListStructList(this, "service_node_list", false);
  public get serviceNodeList() {
    return this._serviceNodeList;
  }

  // support_node_flag_filter_list - computed: true, optional: false, required: false
  public get supportNodeFlagFilterList() {
    return cdktf.Fn.tolist(this.getListAttribute('support_node_flag_filter_list'));
  }

  // total_cnt - computed: true, optional: false, required: false
  public get totalCnt() {
    return this.getNumberAttribute('total_cnt');
  }

  // search_fields - computed: false, optional: true, required: false
  private _searchFields = new DataTencentcloudEmrServiceNodeInfosSearchFieldsList(this, "search_fields", false);
  public get searchFields() {
    return this._searchFields;
  }
  public putSearchFields(value: DataTencentcloudEmrServiceNodeInfosSearchFields[] | cdktf.IResolvable) {
    this._searchFields.internalValue = value;
  }
  public resetSearchFields() {
    this._searchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFieldsInput() {
    return this._searchFields.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conf_status: cdktf.numberToTerraform(this._confStatus),
      data_node_maintenance_id: cdktf.numberToTerraform(this._dataNodeMaintenanceId),
      health_state_id: cdktf.stringToTerraform(this._healthStateId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      limit: cdktf.numberToTerraform(this._limit),
      maintain_state_id: cdktf.numberToTerraform(this._maintainStateId),
      node_type_name: cdktf.stringToTerraform(this._nodeTypeName),
      offset: cdktf.numberToTerraform(this._offset),
      operator_state_id: cdktf.numberToTerraform(this._operatorStateId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_text: cdktf.stringToTerraform(this._searchText),
      service_name: cdktf.stringToTerraform(this._serviceName),
      search_fields: cdktf.listMapper(dataTencentcloudEmrServiceNodeInfosSearchFieldsToTerraform, true)(this._searchFields.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conf_status: {
        value: cdktf.numberToHclTerraform(this._confStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_node_maintenance_id: {
        value: cdktf.numberToHclTerraform(this._dataNodeMaintenanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_state_id: {
        value: cdktf.stringToHclTerraform(this._healthStateId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maintain_state_id: {
        value: cdktf.numberToHclTerraform(this._maintainStateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_type_name: {
        value: cdktf.stringToHclTerraform(this._nodeTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      operator_state_id: {
        value: cdktf.numberToHclTerraform(this._operatorStateId),
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
      search_text: {
        value: cdktf.stringToHclTerraform(this._searchText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_fields: {
        value: cdktf.listMapperHcl(dataTencentcloudEmrServiceNodeInfosSearchFieldsToHclTerraform, true)(this._searchFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudEmrServiceNodeInfosSearchFieldsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
