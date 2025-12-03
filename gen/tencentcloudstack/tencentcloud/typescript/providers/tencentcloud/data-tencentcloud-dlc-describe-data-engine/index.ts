// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dlc_describe_data_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDlcDescribeDataEngineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Engine name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dlc_describe_data_engine#data_engine_name DataTencentcloudDlcDescribeDataEngine#data_engine_name}
  */
  readonly dataEngineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dlc_describe_data_engine#id DataTencentcloudDlcDescribeDataEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dlc_describe_data_engine#result_output_file DataTencentcloudDlcDescribeDataEngine#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudDlcDescribeDataEngineDataEngineCrontabResumeSuspendStrategy {
}

export function dataTencentcloudDlcDescribeDataEngineDataEngineCrontabResumeSuspendStrategyToTerraform(struct?: DataTencentcloudDlcDescribeDataEngineDataEngineCrontabResumeSuspendStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeDataEngineDataEngineCrontabResumeSuspendStrategyToHclTerraform(struct?: DataTencentcloudDlcDescribeDataEngineDataEngineCrontabResumeSuspendStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeDataEngineDataEngineCrontabResumeSuspendStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeDataEngineDataEngineCrontabResumeSuspendStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeDataEngineDataEngineCrontabResumeSuspendStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resume_time - computed: true, optional: false, required: false
  public get resumeTime() {
    return this.getStringAttribute('resume_time');
  }

  // suspend_strategy - computed: true, optional: false, required: false
  public get suspendStrategy() {
    return this.getNumberAttribute('suspend_strategy');
  }

  // suspend_time - computed: true, optional: false, required: false
  public get suspendTime() {
    return this.getStringAttribute('suspend_time');
  }
}

export class DataTencentcloudDlcDescribeDataEngineDataEngineCrontabResumeSuspendStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeDataEngineDataEngineCrontabResumeSuspendStrategyOutputReference {
    return new DataTencentcloudDlcDescribeDataEngineDataEngineCrontabResumeSuspendStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcDescribeDataEngineDataEngineNetworkConnectionSet {
}

export function dataTencentcloudDlcDescribeDataEngineDataEngineNetworkConnectionSetToTerraform(struct?: DataTencentcloudDlcDescribeDataEngineDataEngineNetworkConnectionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeDataEngineDataEngineNetworkConnectionSetToHclTerraform(struct?: DataTencentcloudDlcDescribeDataEngineDataEngineNetworkConnectionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeDataEngineDataEngineNetworkConnectionSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeDataEngineDataEngineNetworkConnectionSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeDataEngineDataEngineNetworkConnectionSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // appid - computed: true, optional: false, required: false
  public get appid() {
    return this.getNumberAttribute('appid');
  }

  // associate_id - computed: true, optional: false, required: false
  public get associateId() {
    return this.getStringAttribute('associate_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // datasource_connection_cidr_block - computed: true, optional: false, required: false
  public get datasourceConnectionCidrBlock() {
    return this.getStringAttribute('datasource_connection_cidr_block');
  }

  // datasource_connection_id - computed: true, optional: false, required: false
  public get datasourceConnectionId() {
    return this.getStringAttribute('datasource_connection_id');
  }

  // datasource_connection_name - computed: true, optional: false, required: false
  public get datasourceConnectionName() {
    return this.getStringAttribute('datasource_connection_name');
  }

  // datasource_connection_subnet_cidr_block - computed: true, optional: false, required: false
  public get datasourceConnectionSubnetCidrBlock() {
    return this.getStringAttribute('datasource_connection_subnet_cidr_block');
  }

  // datasource_connection_subnet_id - computed: true, optional: false, required: false
  public get datasourceConnectionSubnetId() {
    return this.getStringAttribute('datasource_connection_subnet_id');
  }

  // datasource_connection_vpc_id - computed: true, optional: false, required: false
  public get datasourceConnectionVpcId() {
    return this.getStringAttribute('datasource_connection_vpc_id');
  }

  // house_id - computed: true, optional: false, required: false
  public get houseId() {
    return this.getStringAttribute('house_id');
  }

  // house_name - computed: true, optional: false, required: false
  public get houseName() {
    return this.getStringAttribute('house_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // network_connection_desc - computed: true, optional: false, required: false
  public get networkConnectionDesc() {
    return this.getStringAttribute('network_connection_desc');
  }

  // network_connection_type - computed: true, optional: false, required: false
  public get networkConnectionType() {
    return this.getNumberAttribute('network_connection_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getNumberAttribute('state');
  }

  // sub_account_uin - computed: true, optional: false, required: false
  public get subAccountUin() {
    return this.getStringAttribute('sub_account_uin');
  }

  // uin - computed: true, optional: false, required: false
  public get uin() {
    return this.getStringAttribute('uin');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }
}

export class DataTencentcloudDlcDescribeDataEngineDataEngineNetworkConnectionSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeDataEngineDataEngineNetworkConnectionSetOutputReference {
    return new DataTencentcloudDlcDescribeDataEngineDataEngineNetworkConnectionSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcDescribeDataEngineDataEngineSessionResourceTemplate {
}

export function dataTencentcloudDlcDescribeDataEngineDataEngineSessionResourceTemplateToTerraform(struct?: DataTencentcloudDlcDescribeDataEngineDataEngineSessionResourceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeDataEngineDataEngineSessionResourceTemplateToHclTerraform(struct?: DataTencentcloudDlcDescribeDataEngineDataEngineSessionResourceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeDataEngineDataEngineSessionResourceTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeDataEngineDataEngineSessionResourceTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeDataEngineDataEngineSessionResourceTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // driver_size - computed: true, optional: false, required: false
  public get driverSize() {
    return this.getStringAttribute('driver_size');
  }

  // executor_max_numbers - computed: true, optional: false, required: false
  public get executorMaxNumbers() {
    return this.getNumberAttribute('executor_max_numbers');
  }

  // executor_nums - computed: true, optional: false, required: false
  public get executorNums() {
    return this.getNumberAttribute('executor_nums');
  }

  // executor_size - computed: true, optional: false, required: false
  public get executorSize() {
    return this.getStringAttribute('executor_size');
  }
}

export class DataTencentcloudDlcDescribeDataEngineDataEngineSessionResourceTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeDataEngineDataEngineSessionResourceTemplateOutputReference {
    return new DataTencentcloudDlcDescribeDataEngineDataEngineSessionResourceTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcDescribeDataEngineDataEngineTagListStruct {
}

export function dataTencentcloudDlcDescribeDataEngineDataEngineTagListStructToTerraform(struct?: DataTencentcloudDlcDescribeDataEngineDataEngineTagListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeDataEngineDataEngineTagListStructToHclTerraform(struct?: DataTencentcloudDlcDescribeDataEngineDataEngineTagListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeDataEngineDataEngineTagListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeDataEngineDataEngineTagListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeDataEngineDataEngineTagListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataTencentcloudDlcDescribeDataEngineDataEngineTagListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeDataEngineDataEngineTagListStructOutputReference {
    return new DataTencentcloudDlcDescribeDataEngineDataEngineTagListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcDescribeDataEngineDataEngine {
}

export function dataTencentcloudDlcDescribeDataEngineDataEngineToTerraform(struct?: DataTencentcloudDlcDescribeDataEngineDataEngine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeDataEngineDataEngineToHclTerraform(struct?: DataTencentcloudDlcDescribeDataEngineDataEngine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeDataEngineDataEngineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeDataEngineDataEngine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeDataEngineDataEngine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_resume - computed: true, optional: false, required: false
  public get autoResume() {
    return this.getBooleanAttribute('auto_resume');
  }

  // auto_suspend - computed: true, optional: false, required: false
  public get autoSuspend() {
    return this.getBooleanAttribute('auto_suspend');
  }

  // auto_suspend_time - computed: true, optional: false, required: false
  public get autoSuspendTime() {
    return this.getNumberAttribute('auto_suspend_time');
  }

  // child_image_version_id - computed: true, optional: false, required: false
  public get childImageVersionId() {
    return this.getStringAttribute('child_image_version_id');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // crontab_resume_suspend - computed: true, optional: false, required: false
  public get crontabResumeSuspend() {
    return this.getNumberAttribute('crontab_resume_suspend');
  }

  // crontab_resume_suspend_strategy - computed: true, optional: false, required: false
  private _crontabResumeSuspendStrategy = new DataTencentcloudDlcDescribeDataEngineDataEngineCrontabResumeSuspendStrategyList(this, "crontab_resume_suspend_strategy", false);
  public get crontabResumeSuspendStrategy() {
    return this._crontabResumeSuspendStrategy;
  }

  // data_engine_id - computed: true, optional: false, required: false
  public get dataEngineId() {
    return this.getStringAttribute('data_engine_id');
  }

  // data_engine_name - computed: true, optional: false, required: false
  public get dataEngineName() {
    return this.getStringAttribute('data_engine_name');
  }

  // default_data_engine - computed: true, optional: false, required: false
  public get defaultDataEngine() {
    return this.getBooleanAttribute('default_data_engine');
  }

  // default_house - computed: true, optional: false, required: false
  public get defaultHouse() {
    return this.getBooleanAttribute('default_house');
  }

  // elastic_limit - computed: true, optional: false, required: false
  public get elasticLimit() {
    return this.getNumberAttribute('elastic_limit');
  }

  // elastic_switch - computed: true, optional: false, required: false
  public get elasticSwitch() {
    return this.getBooleanAttribute('elastic_switch');
  }

  // engine_exec_type - computed: true, optional: false, required: false
  public get engineExecType() {
    return this.getStringAttribute('engine_exec_type');
  }

  // engine_type - computed: true, optional: false, required: false
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // image_version_id - computed: true, optional: false, required: false
  public get imageVersionId() {
    return this.getStringAttribute('image_version_id');
  }

  // image_version_name - computed: true, optional: false, required: false
  public get imageVersionName() {
    return this.getStringAttribute('image_version_name');
  }

  // isolated_time - computed: true, optional: false, required: false
  public get isolatedTime() {
    return this.getStringAttribute('isolated_time');
  }

  // max_clusters - computed: true, optional: false, required: false
  public get maxClusters() {
    return this.getNumberAttribute('max_clusters');
  }

  // max_concurrency - computed: true, optional: false, required: false
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // min_clusters - computed: true, optional: false, required: false
  public get minClusters() {
    return this.getNumberAttribute('min_clusters');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getNumberAttribute('mode');
  }

  // network_connection_set - computed: true, optional: false, required: false
  private _networkConnectionSet = new DataTencentcloudDlcDescribeDataEngineDataEngineNetworkConnectionSetList(this, "network_connection_set", false);
  public get networkConnectionSet() {
    return this._networkConnectionSet;
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }

  // quota_id - computed: true, optional: false, required: false
  public get quotaId() {
    return this.getStringAttribute('quota_id');
  }

  // renew_flag - computed: true, optional: false, required: false
  public get renewFlag() {
    return this.getNumberAttribute('renew_flag');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // reversal_time - computed: true, optional: false, required: false
  public get reversalTime() {
    return this.getStringAttribute('reversal_time');
  }

  // session_resource_template - computed: true, optional: false, required: false
  private _sessionResourceTemplate = new DataTencentcloudDlcDescribeDataEngineDataEngineSessionResourceTemplateList(this, "session_resource_template", false);
  public get sessionResourceTemplate() {
    return this._sessionResourceTemplate;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // spend_after - computed: true, optional: false, required: false
  public get spendAfter() {
    return this.getNumberAttribute('spend_after');
  }

  // start_standby_cluster - computed: true, optional: false, required: false
  public get startStandbyCluster() {
    return this.getBooleanAttribute('start_standby_cluster');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getNumberAttribute('state');
  }

  // sub_account_uin - computed: true, optional: false, required: false
  public get subAccountUin() {
    return this.getStringAttribute('sub_account_uin');
  }

  // tag_list - computed: true, optional: false, required: false
  private _tagList = new DataTencentcloudDlcDescribeDataEngineDataEngineTagListStructList(this, "tag_list", false);
  public get tagList() {
    return this._tagList;
  }

  // tolerable_queue_time - computed: true, optional: false, required: false
  public get tolerableQueueTime() {
    return this.getNumberAttribute('tolerable_queue_time');
  }

  // ui_u_r_l - computed: true, optional: false, required: false
  public get uiURL() {
    return this.getStringAttribute('ui_u_r_l');
  }

  // ui_url - computed: true, optional: false, required: false
  public get uiUrl() {
    return this.getStringAttribute('ui_url');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }

  // user_alias - computed: true, optional: false, required: false
  public get userAlias() {
    return this.getStringAttribute('user_alias');
  }

  // user_app_id - computed: true, optional: false, required: false
  public get userAppId() {
    return this.getNumberAttribute('user_app_id');
  }

  // user_uin - computed: true, optional: false, required: false
  public get userUin() {
    return this.getStringAttribute('user_uin');
  }
}

export class DataTencentcloudDlcDescribeDataEngineDataEngineList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeDataEngineDataEngineOutputReference {
    return new DataTencentcloudDlcDescribeDataEngineDataEngineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dlc_describe_data_engine tencentcloud_dlc_describe_data_engine}
*/
export class DataTencentcloudDlcDescribeDataEngine extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_describe_data_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDlcDescribeDataEngine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDlcDescribeDataEngine to import
  * @param importFromId The id of the existing DataTencentcloudDlcDescribeDataEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dlc_describe_data_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDlcDescribeDataEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_describe_data_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dlc_describe_data_engine tencentcloud_dlc_describe_data_engine} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDlcDescribeDataEngineConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDlcDescribeDataEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_describe_data_engine',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataEngineName = config.dataEngineName;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_engine - computed: true, optional: false, required: false
  private _dataEngine = new DataTencentcloudDlcDescribeDataEngineDataEngineList(this, "data_engine", false);
  public get dataEngine() {
    return this._dataEngine;
  }

  // data_engine_name - computed: false, optional: false, required: true
  private _dataEngineName?: string; 
  public get dataEngineName() {
    return this.getStringAttribute('data_engine_name');
  }
  public set dataEngineName(value: string) {
    this._dataEngineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineNameInput() {
    return this._dataEngineName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_engine_name: cdktf.stringToTerraform(this._dataEngineName),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_engine_name: {
        value: cdktf.stringToHclTerraform(this._dataEngineName),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
