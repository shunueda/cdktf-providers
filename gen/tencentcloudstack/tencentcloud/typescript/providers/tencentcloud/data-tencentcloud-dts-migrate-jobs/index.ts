// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDtsMigrateJobsConfig extends cdktf.TerraformMetaArguments {
  /**
  * destination access type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#dst_access_type DataTencentcloudDtsMigrateJobs#dst_access_type}
  */
  readonly dstAccessType?: string[];
  /**
  * destination database type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#dst_database_type DataTencentcloudDtsMigrateJobs#dst_database_type}
  */
  readonly dstDatabaseType?: string[];
  /**
  * source instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#dst_instance_id DataTencentcloudDtsMigrateJobs#dst_instance_id}
  */
  readonly dstInstanceId?: string;
  /**
  * destination region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#dst_region DataTencentcloudDtsMigrateJobs#dst_region}
  */
  readonly dstRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#id DataTencentcloudDtsMigrateJobs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * job id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#job_id DataTencentcloudDtsMigrateJobs#job_id}
  */
  readonly jobId?: string;
  /**
  * job name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#job_name DataTencentcloudDtsMigrateJobs#job_name}
  */
  readonly jobName?: string;
  /**
  * order by, default by create time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#order_seq DataTencentcloudDtsMigrateJobs#order_seq}
  */
  readonly orderSeq?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#result_output_file DataTencentcloudDtsMigrateJobs#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * run mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#run_mode DataTencentcloudDtsMigrateJobs#run_mode}
  */
  readonly runMode?: string;
  /**
  * source access type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#src_access_type DataTencentcloudDtsMigrateJobs#src_access_type}
  */
  readonly srcAccessType?: string[];
  /**
  * source database type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#src_database_type DataTencentcloudDtsMigrateJobs#src_database_type}
  */
  readonly srcDatabaseType?: string[];
  /**
  * source instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#src_instance_id DataTencentcloudDtsMigrateJobs#src_instance_id}
  */
  readonly srcInstanceId?: string;
  /**
  * source region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#src_region DataTencentcloudDtsMigrateJobs#src_region}
  */
  readonly srcRegion?: string;
  /**
  * migrate status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#status DataTencentcloudDtsMigrateJobs#status}
  */
  readonly status?: string[];
  /**
  * tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#tag_filters DataTencentcloudDtsMigrateJobs#tag_filters}
  */
  readonly tagFilters?: DataTencentcloudDtsMigrateJobsTagFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudDtsMigrateJobsListAction {
}

export function dataTencentcloudDtsMigrateJobsListActionToTerraform(struct?: DataTencentcloudDtsMigrateJobsListAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDtsMigrateJobsListActionToHclTerraform(struct?: DataTencentcloudDtsMigrateJobsListAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDtsMigrateJobsListActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDtsMigrateJobsListAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateJobsListAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_action - computed: true, optional: false, required: false
  public get allAction() {
    return cdktf.Fn.tolist(this.getListAttribute('all_action'));
  }

  // allowed_action - computed: true, optional: false, required: false
  public get allowedAction() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_action'));
  }
}

export class DataTencentcloudDtsMigrateJobsListActionList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDtsMigrateJobsListActionOutputReference {
    return new DataTencentcloudDtsMigrateJobsListActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDtsMigrateJobsListCompareTask {
}

export function dataTencentcloudDtsMigrateJobsListCompareTaskToTerraform(struct?: DataTencentcloudDtsMigrateJobsListCompareTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDtsMigrateJobsListCompareTaskToHclTerraform(struct?: DataTencentcloudDtsMigrateJobsListCompareTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDtsMigrateJobsListCompareTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDtsMigrateJobsListCompareTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateJobsListCompareTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compare_task_id - computed: true, optional: false, required: false
  public get compareTaskId() {
    return this.getStringAttribute('compare_task_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTencentcloudDtsMigrateJobsListCompareTaskList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDtsMigrateJobsListCompareTaskOutputReference {
    return new DataTencentcloudDtsMigrateJobsListCompareTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDtsMigrateJobsListDstInfoInfo {
}

export function dataTencentcloudDtsMigrateJobsListDstInfoInfoToTerraform(struct?: DataTencentcloudDtsMigrateJobsListDstInfoInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDtsMigrateJobsListDstInfoInfoToHclTerraform(struct?: DataTencentcloudDtsMigrateJobsListDstInfoInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDtsMigrateJobsListDstInfoInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDtsMigrateJobsListDstInfoInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateJobsListDstInfoInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // account_mode - computed: true, optional: false, required: false
  public get accountMode() {
    return this.getStringAttribute('account_mode');
  }

  // account_role - computed: true, optional: false, required: false
  public get accountRole() {
    return this.getStringAttribute('account_role');
  }

  // ccn_gw_id - computed: true, optional: false, required: false
  public get ccnGwId() {
    return this.getStringAttribute('ccn_gw_id');
  }

  // cvm_instance_id - computed: true, optional: false, required: false
  public get cvmInstanceId() {
    return this.getStringAttribute('cvm_instance_id');
  }

  // db_kernel - computed: true, optional: false, required: false
  public get dbKernel() {
    return this.getStringAttribute('db_kernel');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tmp_secret_id - computed: true, optional: false, required: false
  public get tmpSecretId() {
    return this.getStringAttribute('tmp_secret_id');
  }

  // tmp_secret_key - computed: true, optional: false, required: false
  public get tmpSecretKey() {
    return this.getStringAttribute('tmp_secret_key');
  }

  // tmp_token - computed: true, optional: false, required: false
  public get tmpToken() {
    return this.getStringAttribute('tmp_token');
  }

  // uniq_vpn_gw_id - computed: true, optional: false, required: false
  public get uniqVpnGwId() {
    return this.getStringAttribute('uniq_vpn_gw_id');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataTencentcloudDtsMigrateJobsListDstInfoInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDtsMigrateJobsListDstInfoInfoOutputReference {
    return new DataTencentcloudDtsMigrateJobsListDstInfoInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDtsMigrateJobsListDstInfo {
}

export function dataTencentcloudDtsMigrateJobsListDstInfoToTerraform(struct?: DataTencentcloudDtsMigrateJobsListDstInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDtsMigrateJobsListDstInfoToHclTerraform(struct?: DataTencentcloudDtsMigrateJobsListDstInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDtsMigrateJobsListDstInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDtsMigrateJobsListDstInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateJobsListDstInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }

  // info - computed: true, optional: false, required: false
  private _info = new DataTencentcloudDtsMigrateJobsListDstInfoInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudDtsMigrateJobsListDstInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDtsMigrateJobsListDstInfoOutputReference {
    return new DataTencentcloudDtsMigrateJobsListDstInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDtsMigrateJobsListSrcInfoExtraAttr {
}

export function dataTencentcloudDtsMigrateJobsListSrcInfoExtraAttrToTerraform(struct?: DataTencentcloudDtsMigrateJobsListSrcInfoExtraAttr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDtsMigrateJobsListSrcInfoExtraAttrToHclTerraform(struct?: DataTencentcloudDtsMigrateJobsListSrcInfoExtraAttr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDtsMigrateJobsListSrcInfoExtraAttrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDtsMigrateJobsListSrcInfoExtraAttr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateJobsListSrcInfoExtraAttr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudDtsMigrateJobsListSrcInfoExtraAttrList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDtsMigrateJobsListSrcInfoExtraAttrOutputReference {
    return new DataTencentcloudDtsMigrateJobsListSrcInfoExtraAttrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDtsMigrateJobsListSrcInfoInfo {
}

export function dataTencentcloudDtsMigrateJobsListSrcInfoInfoToTerraform(struct?: DataTencentcloudDtsMigrateJobsListSrcInfoInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDtsMigrateJobsListSrcInfoInfoToHclTerraform(struct?: DataTencentcloudDtsMigrateJobsListSrcInfoInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDtsMigrateJobsListSrcInfoInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDtsMigrateJobsListSrcInfoInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateJobsListSrcInfoInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // account_mode - computed: true, optional: false, required: false
  public get accountMode() {
    return this.getStringAttribute('account_mode');
  }

  // account_role - computed: true, optional: false, required: false
  public get accountRole() {
    return this.getStringAttribute('account_role');
  }

  // ccn_gw_id - computed: true, optional: false, required: false
  public get ccnGwId() {
    return this.getStringAttribute('ccn_gw_id');
  }

  // cvm_instance_id - computed: true, optional: false, required: false
  public get cvmInstanceId() {
    return this.getStringAttribute('cvm_instance_id');
  }

  // db_kernel - computed: true, optional: false, required: false
  public get dbKernel() {
    return this.getStringAttribute('db_kernel');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tmp_secret_id - computed: true, optional: false, required: false
  public get tmpSecretId() {
    return this.getStringAttribute('tmp_secret_id');
  }

  // tmp_secret_key - computed: true, optional: false, required: false
  public get tmpSecretKey() {
    return this.getStringAttribute('tmp_secret_key');
  }

  // tmp_token - computed: true, optional: false, required: false
  public get tmpToken() {
    return this.getStringAttribute('tmp_token');
  }

  // uniq_vpn_gw_id - computed: true, optional: false, required: false
  public get uniqVpnGwId() {
    return this.getStringAttribute('uniq_vpn_gw_id');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataTencentcloudDtsMigrateJobsListSrcInfoInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDtsMigrateJobsListSrcInfoInfoOutputReference {
    return new DataTencentcloudDtsMigrateJobsListSrcInfoInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDtsMigrateJobsListSrcInfo {
}

export function dataTencentcloudDtsMigrateJobsListSrcInfoToTerraform(struct?: DataTencentcloudDtsMigrateJobsListSrcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDtsMigrateJobsListSrcInfoToHclTerraform(struct?: DataTencentcloudDtsMigrateJobsListSrcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDtsMigrateJobsListSrcInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDtsMigrateJobsListSrcInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateJobsListSrcInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }

  // extra_attr - computed: true, optional: false, required: false
  private _extraAttr = new DataTencentcloudDtsMigrateJobsListSrcInfoExtraAttrList(this, "extra_attr", false);
  public get extraAttr() {
    return this._extraAttr;
  }

  // info - computed: true, optional: false, required: false
  private _info = new DataTencentcloudDtsMigrateJobsListSrcInfoInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // supplier - computed: true, optional: false, required: false
  public get supplier() {
    return this.getStringAttribute('supplier');
  }
}

export class DataTencentcloudDtsMigrateJobsListSrcInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDtsMigrateJobsListSrcInfoOutputReference {
    return new DataTencentcloudDtsMigrateJobsListSrcInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDtsMigrateJobsListStepInfoStepInfoErrors {
}

export function dataTencentcloudDtsMigrateJobsListStepInfoStepInfoErrorsToTerraform(struct?: DataTencentcloudDtsMigrateJobsListStepInfoStepInfoErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDtsMigrateJobsListStepInfoStepInfoErrorsToHclTerraform(struct?: DataTencentcloudDtsMigrateJobsListStepInfoStepInfoErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDtsMigrateJobsListStepInfoStepInfoErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDtsMigrateJobsListStepInfoStepInfoErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateJobsListStepInfoStepInfoErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // help_doc - computed: true, optional: false, required: false
  public get helpDoc() {
    return this.getStringAttribute('help_doc');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // solution - computed: true, optional: false, required: false
  public get solution() {
    return this.getStringAttribute('solution');
  }
}

export class DataTencentcloudDtsMigrateJobsListStepInfoStepInfoErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDtsMigrateJobsListStepInfoStepInfoErrorsOutputReference {
    return new DataTencentcloudDtsMigrateJobsListStepInfoStepInfoErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDtsMigrateJobsListStepInfoStepInfoWarnings {
}

export function dataTencentcloudDtsMigrateJobsListStepInfoStepInfoWarningsToTerraform(struct?: DataTencentcloudDtsMigrateJobsListStepInfoStepInfoWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDtsMigrateJobsListStepInfoStepInfoWarningsToHclTerraform(struct?: DataTencentcloudDtsMigrateJobsListStepInfoStepInfoWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDtsMigrateJobsListStepInfoStepInfoWarningsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDtsMigrateJobsListStepInfoStepInfoWarnings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateJobsListStepInfoStepInfoWarnings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // help_doc - computed: true, optional: false, required: false
  public get helpDoc() {
    return this.getStringAttribute('help_doc');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // solution - computed: true, optional: false, required: false
  public get solution() {
    return this.getStringAttribute('solution');
  }
}

export class DataTencentcloudDtsMigrateJobsListStepInfoStepInfoWarningsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDtsMigrateJobsListStepInfoStepInfoWarningsOutputReference {
    return new DataTencentcloudDtsMigrateJobsListStepInfoStepInfoWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDtsMigrateJobsListStepInfoStepInfo {
}

export function dataTencentcloudDtsMigrateJobsListStepInfoStepInfoToTerraform(struct?: DataTencentcloudDtsMigrateJobsListStepInfoStepInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDtsMigrateJobsListStepInfoStepInfoToHclTerraform(struct?: DataTencentcloudDtsMigrateJobsListStepInfoStepInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDtsMigrateJobsListStepInfoStepInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDtsMigrateJobsListStepInfoStepInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateJobsListStepInfoStepInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new DataTencentcloudDtsMigrateJobsListStepInfoStepInfoErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // percent - computed: true, optional: false, required: false
  public get percent() {
    return this.getNumberAttribute('percent');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // step_id - computed: true, optional: false, required: false
  public get stepId() {
    return this.getStringAttribute('step_id');
  }

  // step_message - computed: true, optional: false, required: false
  public get stepMessage() {
    return this.getStringAttribute('step_message');
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }

  // step_no - computed: true, optional: false, required: false
  public get stepNo() {
    return this.getNumberAttribute('step_no');
  }

  // warnings - computed: true, optional: false, required: false
  private _warnings = new DataTencentcloudDtsMigrateJobsListStepInfoStepInfoWarningsList(this, "warnings", false);
  public get warnings() {
    return this._warnings;
  }
}

export class DataTencentcloudDtsMigrateJobsListStepInfoStepInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDtsMigrateJobsListStepInfoStepInfoOutputReference {
    return new DataTencentcloudDtsMigrateJobsListStepInfoStepInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDtsMigrateJobsListStepInfo {
}

export function dataTencentcloudDtsMigrateJobsListStepInfoToTerraform(struct?: DataTencentcloudDtsMigrateJobsListStepInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDtsMigrateJobsListStepInfoToHclTerraform(struct?: DataTencentcloudDtsMigrateJobsListStepInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDtsMigrateJobsListStepInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDtsMigrateJobsListStepInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateJobsListStepInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // master_slave_distance - computed: true, optional: false, required: false
  public get masterSlaveDistance() {
    return this.getNumberAttribute('master_slave_distance');
  }

  // seconds_behind_master - computed: true, optional: false, required: false
  public get secondsBehindMaster() {
    return this.getNumberAttribute('seconds_behind_master');
  }

  // step_all - computed: true, optional: false, required: false
  public get stepAll() {
    return this.getNumberAttribute('step_all');
  }

  // step_info - computed: true, optional: false, required: false
  private _stepInfo = new DataTencentcloudDtsMigrateJobsListStepInfoStepInfoList(this, "step_info", false);
  public get stepInfo() {
    return this._stepInfo;
  }

  // step_now - computed: true, optional: false, required: false
  public get stepNow() {
    return this.getNumberAttribute('step_now');
  }
}

export class DataTencentcloudDtsMigrateJobsListStepInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDtsMigrateJobsListStepInfoOutputReference {
    return new DataTencentcloudDtsMigrateJobsListStepInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDtsMigrateJobsListTags {
}

export function dataTencentcloudDtsMigrateJobsListTagsToTerraform(struct?: DataTencentcloudDtsMigrateJobsListTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDtsMigrateJobsListTagsToHclTerraform(struct?: DataTencentcloudDtsMigrateJobsListTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDtsMigrateJobsListTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDtsMigrateJobsListTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateJobsListTags | undefined) {
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

export class DataTencentcloudDtsMigrateJobsListTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDtsMigrateJobsListTagsOutputReference {
    return new DataTencentcloudDtsMigrateJobsListTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDtsMigrateJobsListTradeInfo {
}

export function dataTencentcloudDtsMigrateJobsListTradeInfoToTerraform(struct?: DataTencentcloudDtsMigrateJobsListTradeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDtsMigrateJobsListTradeInfoToHclTerraform(struct?: DataTencentcloudDtsMigrateJobsListTradeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDtsMigrateJobsListTradeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDtsMigrateJobsListTradeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateJobsListTradeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // billing_type - computed: true, optional: false, required: false
  public get billingType() {
    return this.getStringAttribute('billing_type');
  }

  // deal_name - computed: true, optional: false, required: false
  public get dealName() {
    return this.getStringAttribute('deal_name');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // instance_class - computed: true, optional: false, required: false
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }

  // isolate_reason - computed: true, optional: false, required: false
  public get isolateReason() {
    return this.getStringAttribute('isolate_reason');
  }

  // isolate_time - computed: true, optional: false, required: false
  public get isolateTime() {
    return this.getStringAttribute('isolate_time');
  }

  // last_deal_name - computed: true, optional: false, required: false
  public get lastDealName() {
    return this.getStringAttribute('last_deal_name');
  }

  // offline_reason - computed: true, optional: false, required: false
  public get offlineReason() {
    return this.getStringAttribute('offline_reason');
  }

  // offline_time - computed: true, optional: false, required: false
  public get offlineTime() {
    return this.getStringAttribute('offline_time');
  }

  // pay_type - computed: true, optional: false, required: false
  public get payType() {
    return this.getStringAttribute('pay_type');
  }

  // trade_status - computed: true, optional: false, required: false
  public get tradeStatus() {
    return this.getStringAttribute('trade_status');
  }
}

export class DataTencentcloudDtsMigrateJobsListTradeInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDtsMigrateJobsListTradeInfoOutputReference {
    return new DataTencentcloudDtsMigrateJobsListTradeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDtsMigrateJobsListStruct {
}

export function dataTencentcloudDtsMigrateJobsListStructToTerraform(struct?: DataTencentcloudDtsMigrateJobsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDtsMigrateJobsListStructToHclTerraform(struct?: DataTencentcloudDtsMigrateJobsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDtsMigrateJobsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDtsMigrateJobsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateJobsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataTencentcloudDtsMigrateJobsListActionList(this, "action", false);
  public get action() {
    return this._action;
  }

  // brief_msg - computed: true, optional: false, required: false
  public get briefMsg() {
    return this.getStringAttribute('brief_msg');
  }

  // compare_task - computed: true, optional: false, required: false
  private _compareTask = new DataTencentcloudDtsMigrateJobsListCompareTaskList(this, "compare_task", false);
  public get compareTask() {
    return this._compareTask;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dst_info - computed: true, optional: false, required: false
  private _dstInfo = new DataTencentcloudDtsMigrateJobsListDstInfoList(this, "dst_info", false);
  public get dstInfo() {
    return this._dstInfo;
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // expect_run_time - computed: true, optional: false, required: false
  public get expectRunTime() {
    return this.getStringAttribute('expect_run_time');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // job_name - computed: true, optional: false, required: false
  public get jobName() {
    return this.getStringAttribute('job_name');
  }

  // run_mode - computed: true, optional: false, required: false
  public get runMode() {
    return this.getStringAttribute('run_mode');
  }

  // src_info - computed: true, optional: false, required: false
  private _srcInfo = new DataTencentcloudDtsMigrateJobsListSrcInfoList(this, "src_info", false);
  public get srcInfo() {
    return this._srcInfo;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // step_info - computed: true, optional: false, required: false
  private _stepInfo = new DataTencentcloudDtsMigrateJobsListStepInfoList(this, "step_info", false);
  public get stepInfo() {
    return this._stepInfo;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataTencentcloudDtsMigrateJobsListTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // trade_info - computed: true, optional: false, required: false
  private _tradeInfo = new DataTencentcloudDtsMigrateJobsListTradeInfoList(this, "trade_info", false);
  public get tradeInfo() {
    return this._tradeInfo;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataTencentcloudDtsMigrateJobsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDtsMigrateJobsListStructOutputReference {
    return new DataTencentcloudDtsMigrateJobsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDtsMigrateJobsTagFilters {
  /**
  * tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#tag_key DataTencentcloudDtsMigrateJobs#tag_key}
  */
  readonly tagKey?: string;
  /**
  * tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#tag_value DataTencentcloudDtsMigrateJobs#tag_value}
  */
  readonly tagValue?: string;
}

export function dataTencentcloudDtsMigrateJobsTagFiltersToTerraform(struct?: DataTencentcloudDtsMigrateJobsTagFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function dataTencentcloudDtsMigrateJobsTagFiltersToHclTerraform(struct?: DataTencentcloudDtsMigrateJobsTagFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudDtsMigrateJobsTagFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDtsMigrateJobsTagFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateJobsTagFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class DataTencentcloudDtsMigrateJobsTagFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudDtsMigrateJobsTagFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudDtsMigrateJobsTagFiltersOutputReference {
    return new DataTencentcloudDtsMigrateJobsTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs tencentcloud_dts_migrate_jobs}
*/
export class DataTencentcloudDtsMigrateJobs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dts_migrate_jobs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDtsMigrateJobs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDtsMigrateJobs to import
  * @param importFromId The id of the existing DataTencentcloudDtsMigrateJobs that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDtsMigrateJobs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dts_migrate_jobs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/dts_migrate_jobs tencentcloud_dts_migrate_jobs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDtsMigrateJobsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDtsMigrateJobsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dts_migrate_jobs',
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
    this._dstAccessType = config.dstAccessType;
    this._dstDatabaseType = config.dstDatabaseType;
    this._dstInstanceId = config.dstInstanceId;
    this._dstRegion = config.dstRegion;
    this._id = config.id;
    this._jobId = config.jobId;
    this._jobName = config.jobName;
    this._orderSeq = config.orderSeq;
    this._resultOutputFile = config.resultOutputFile;
    this._runMode = config.runMode;
    this._srcAccessType = config.srcAccessType;
    this._srcDatabaseType = config.srcDatabaseType;
    this._srcInstanceId = config.srcInstanceId;
    this._srcRegion = config.srcRegion;
    this._status = config.status;
    this._tagFilters.internalValue = config.tagFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_access_type - computed: false, optional: true, required: false
  private _dstAccessType?: string[]; 
  public get dstAccessType() {
    return cdktf.Fn.tolist(this.getListAttribute('dst_access_type'));
  }
  public set dstAccessType(value: string[]) {
    this._dstAccessType = value;
  }
  public resetDstAccessType() {
    this._dstAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAccessTypeInput() {
    return this._dstAccessType;
  }

  // dst_database_type - computed: false, optional: true, required: false
  private _dstDatabaseType?: string[]; 
  public get dstDatabaseType() {
    return cdktf.Fn.tolist(this.getListAttribute('dst_database_type'));
  }
  public set dstDatabaseType(value: string[]) {
    this._dstDatabaseType = value;
  }
  public resetDstDatabaseType() {
    this._dstDatabaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstDatabaseTypeInput() {
    return this._dstDatabaseType;
  }

  // dst_instance_id - computed: false, optional: true, required: false
  private _dstInstanceId?: string; 
  public get dstInstanceId() {
    return this.getStringAttribute('dst_instance_id');
  }
  public set dstInstanceId(value: string) {
    this._dstInstanceId = value;
  }
  public resetDstInstanceId() {
    this._dstInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInstanceIdInput() {
    return this._dstInstanceId;
  }

  // dst_region - computed: false, optional: true, required: false
  private _dstRegion?: string; 
  public get dstRegion() {
    return this.getStringAttribute('dst_region');
  }
  public set dstRegion(value: string) {
    this._dstRegion = value;
  }
  public resetDstRegion() {
    this._dstRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRegionInput() {
    return this._dstRegion;
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

  // job_id - computed: false, optional: true, required: false
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // job_name - computed: false, optional: true, required: false
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  public resetJobName() {
    this._jobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudDtsMigrateJobsListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // order_seq - computed: false, optional: true, required: false
  private _orderSeq?: string; 
  public get orderSeq() {
    return this.getStringAttribute('order_seq');
  }
  public set orderSeq(value: string) {
    this._orderSeq = value;
  }
  public resetOrderSeq() {
    this._orderSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderSeqInput() {
    return this._orderSeq;
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

  // run_mode - computed: false, optional: true, required: false
  private _runMode?: string; 
  public get runMode() {
    return this.getStringAttribute('run_mode');
  }
  public set runMode(value: string) {
    this._runMode = value;
  }
  public resetRunMode() {
    this._runMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runModeInput() {
    return this._runMode;
  }

  // src_access_type - computed: false, optional: true, required: false
  private _srcAccessType?: string[]; 
  public get srcAccessType() {
    return cdktf.Fn.tolist(this.getListAttribute('src_access_type'));
  }
  public set srcAccessType(value: string[]) {
    this._srcAccessType = value;
  }
  public resetSrcAccessType() {
    this._srcAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAccessTypeInput() {
    return this._srcAccessType;
  }

  // src_database_type - computed: false, optional: true, required: false
  private _srcDatabaseType?: string[]; 
  public get srcDatabaseType() {
    return cdktf.Fn.tolist(this.getListAttribute('src_database_type'));
  }
  public set srcDatabaseType(value: string[]) {
    this._srcDatabaseType = value;
  }
  public resetSrcDatabaseType() {
    this._srcDatabaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDatabaseTypeInput() {
    return this._srcDatabaseType;
  }

  // src_instance_id - computed: false, optional: true, required: false
  private _srcInstanceId?: string; 
  public get srcInstanceId() {
    return this.getStringAttribute('src_instance_id');
  }
  public set srcInstanceId(value: string) {
    this._srcInstanceId = value;
  }
  public resetSrcInstanceId() {
    this._srcInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInstanceIdInput() {
    return this._srcInstanceId;
  }

  // src_region - computed: false, optional: true, required: false
  private _srcRegion?: string; 
  public get srcRegion() {
    return this.getStringAttribute('src_region');
  }
  public set srcRegion(value: string) {
    this._srcRegion = value;
  }
  public resetSrcRegion() {
    this._srcRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRegionInput() {
    return this._srcRegion;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string[]; 
  public get status() {
    return cdktf.Fn.tolist(this.getListAttribute('status'));
  }
  public set status(value: string[]) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters = new DataTencentcloudDtsMigrateJobsTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: DataTencentcloudDtsMigrateJobsTagFilters[] | cdktf.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dst_access_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstAccessType),
      dst_database_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstDatabaseType),
      dst_instance_id: cdktf.stringToTerraform(this._dstInstanceId),
      dst_region: cdktf.stringToTerraform(this._dstRegion),
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      job_name: cdktf.stringToTerraform(this._jobName),
      order_seq: cdktf.stringToTerraform(this._orderSeq),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      run_mode: cdktf.stringToTerraform(this._runMode),
      src_access_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcAccessType),
      src_database_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcDatabaseType),
      src_instance_id: cdktf.stringToTerraform(this._srcInstanceId),
      src_region: cdktf.stringToTerraform(this._srcRegion),
      status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._status),
      tag_filters: cdktf.listMapper(dataTencentcloudDtsMigrateJobsTagFiltersToTerraform, true)(this._tagFilters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_access_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstAccessType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dst_database_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstDatabaseType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dst_instance_id: {
        value: cdktf.stringToHclTerraform(this._dstInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_region: {
        value: cdktf.stringToHclTerraform(this._dstRegion),
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
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_name: {
        value: cdktf.stringToHclTerraform(this._jobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_seq: {
        value: cdktf.stringToHclTerraform(this._orderSeq),
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
      run_mode: {
        value: cdktf.stringToHclTerraform(this._runMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_access_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcAccessType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      src_database_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcDatabaseType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      src_instance_id: {
        value: cdktf.stringToHclTerraform(this._srcInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_region: {
        value: cdktf.stringToHclTerraform(this._srcRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._status),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag_filters: {
        value: cdktf.listMapperHcl(dataTencentcloudDtsMigrateJobsTagFiltersToHclTerraform, true)(this._tagFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudDtsMigrateJobsTagFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
