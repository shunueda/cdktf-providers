// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dlc_describe_work_group_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDlcDescribeWorkGroupInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dlc_describe_work_group_info#id DataTencentcloudDlcDescribeWorkGroupInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dlc_describe_work_group_info#result_output_file DataTencentcloudDlcDescribeWorkGroupInfo#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Sort fields.When the type is User, create-time and user-name are supported.When the type is DataAuth, create-time is supported.When the type is EngineAuth, create-time is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dlc_describe_work_group_info#sort_by DataTencentcloudDlcDescribeWorkGroupInfo#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Sorting methods: desc means in order; asc means in reverse order; it is asc by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dlc_describe_work_group_info#sorting DataTencentcloudDlcDescribeWorkGroupInfo#sorting}
  */
  readonly sorting?: string;
  /**
  * Types of queried information. User: user information; DataAuth: data permissions; EngineAuth: engine permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dlc_describe_work_group_info#type DataTencentcloudDlcDescribeWorkGroupInfo#type}
  */
  readonly type?: string;
  /**
  * Working group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dlc_describe_work_group_info#work_group_id DataTencentcloudDlcDescribeWorkGroupInfo#work_group_id}
  */
  readonly workGroupId?: number;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dlc_describe_work_group_info#filters DataTencentcloudDlcDescribeWorkGroupInfo#filters}
  */
  readonly filters?: DataTencentcloudDlcDescribeWorkGroupInfoFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoPolicySet {
}

export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoPolicySetToTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoPolicySet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoPolicySetToHclTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoPolicySet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoPolicySetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoPolicySet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoPolicySet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // column - computed: true, optional: false, required: false
  public get column() {
    return this.getStringAttribute('column');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_engine - computed: true, optional: false, required: false
  public get dataEngine() {
    return this.getStringAttribute('data_engine');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // function - computed: true, optional: false, required: false
  public get function() {
    return this.getStringAttribute('function');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // re_auth - computed: true, optional: false, required: false
  public get reAuth() {
    return this.getBooleanAttribute('re_auth');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoPolicySetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoPolicySetOutputReference {
    return new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoPolicySetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfo {
}

export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoToTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoToHclTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_set - computed: true, optional: false, required: false
  private _policySet = new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoPolicySetList(this, "policy_set", false);
  public get policySet() {
    return this._policySet;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoOutputReference {
    return new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoPolicySet {
}

export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoPolicySetToTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoPolicySet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoPolicySetToHclTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoPolicySet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoPolicySetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoPolicySet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoPolicySet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // column - computed: true, optional: false, required: false
  public get column() {
    return this.getStringAttribute('column');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_engine - computed: true, optional: false, required: false
  public get dataEngine() {
    return this.getStringAttribute('data_engine');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // function - computed: true, optional: false, required: false
  public get function() {
    return this.getStringAttribute('function');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // re_auth - computed: true, optional: false, required: false
  public get reAuth() {
    return this.getBooleanAttribute('re_auth');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoPolicySetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoPolicySetOutputReference {
    return new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoPolicySetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfo {
}

export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoToTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoToHclTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_set - computed: true, optional: false, required: false
  private _policySet = new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoPolicySetList(this, "policy_set", false);
  public get policySet() {
    return this._policySet;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoOutputReference {
    return new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoPolicySet {
}

export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoPolicySetToTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoPolicySet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoPolicySetToHclTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoPolicySet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoPolicySetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoPolicySet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoPolicySet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // column - computed: true, optional: false, required: false
  public get column() {
    return this.getStringAttribute('column');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_engine - computed: true, optional: false, required: false
  public get dataEngine() {
    return this.getStringAttribute('data_engine');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // function - computed: true, optional: false, required: false
  public get function() {
    return this.getStringAttribute('function');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // re_auth - computed: true, optional: false, required: false
  public get reAuth() {
    return this.getBooleanAttribute('re_auth');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoPolicySetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoPolicySetOutputReference {
    return new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoPolicySetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfo {
}

export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoToTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoToHclTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_set - computed: true, optional: false, required: false
  private _policySet = new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoPolicySetList(this, "policy_set", false);
  public get policySet() {
    return this._policySet;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoOutputReference {
    return new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoUserSet {
}

export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoUserSetToTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoUserSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoUserSetToHclTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoUserSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoUserSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoUserSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoUserSet | undefined) {
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

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // user_alias - computed: true, optional: false, required: false
  public get userAlias() {
    return this.getStringAttribute('user_alias');
  }

  // user_description - computed: true, optional: false, required: false
  public get userDescription() {
    return this.getStringAttribute('user_description');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoUserSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoUserSetOutputReference {
    return new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoUserSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfo {
}

export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoToTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoToHclTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // user_set - computed: true, optional: false, required: false
  private _userSet = new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoUserSetList(this, "user_set", false);
  public get userSet() {
    return this._userSet;
  }
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoOutputReference {
    return new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfo {
}

export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoToTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoToHclTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_policy_info - computed: true, optional: false, required: false
  private _dataPolicyInfo = new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoDataPolicyInfoList(this, "data_policy_info", false);
  public get dataPolicyInfo() {
    return this._dataPolicyInfo;
  }

  // engine_policy_info - computed: true, optional: false, required: false
  private _enginePolicyInfo = new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoEnginePolicyInfoList(this, "engine_policy_info", false);
  public get enginePolicyInfo() {
    return this._enginePolicyInfo;
  }

  // row_filter_info - computed: true, optional: false, required: false
  private _rowFilterInfo = new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoRowFilterInfoList(this, "row_filter_info", false);
  public get rowFilterInfo() {
    return this._rowFilterInfo;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_info - computed: true, optional: false, required: false
  private _userInfo = new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoUserInfoList(this, "user_info", false);
  public get userInfo() {
    return this._userInfo;
  }

  // work_group_description - computed: true, optional: false, required: false
  public get workGroupDescription() {
    return this.getStringAttribute('work_group_description');
  }

  // work_group_id - computed: true, optional: false, required: false
  public get workGroupId() {
    return this.getNumberAttribute('work_group_id');
  }

  // work_group_name - computed: true, optional: false, required: false
  public get workGroupName() {
    return this.getStringAttribute('work_group_name');
  }
}

export class DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoOutputReference {
    return new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcDescribeWorkGroupInfoFilters {
  /**
  * Attribute name. If more than one filter exists, the logical relationship between these filters is `OR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dlc_describe_work_group_info#name DataTencentcloudDlcDescribeWorkGroupInfo#name}
  */
  readonly name: string;
  /**
  * Attribute value. If multiple values exist in one filter, the logical relationship between these values is `OR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dlc_describe_work_group_info#values DataTencentcloudDlcDescribeWorkGroupInfo#values}
  */
  readonly values: string[];
}

export function dataTencentcloudDlcDescribeWorkGroupInfoFiltersToTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudDlcDescribeWorkGroupInfoFiltersToHclTerraform(struct?: DataTencentcloudDlcDescribeWorkGroupInfoFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudDlcDescribeWorkGroupInfoFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeWorkGroupInfoFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeWorkGroupInfoFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataTencentcloudDlcDescribeWorkGroupInfoFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudDlcDescribeWorkGroupInfoFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudDlcDescribeWorkGroupInfoFiltersOutputReference {
    return new DataTencentcloudDlcDescribeWorkGroupInfoFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dlc_describe_work_group_info tencentcloud_dlc_describe_work_group_info}
*/
export class DataTencentcloudDlcDescribeWorkGroupInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_describe_work_group_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDlcDescribeWorkGroupInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDlcDescribeWorkGroupInfo to import
  * @param importFromId The id of the existing DataTencentcloudDlcDescribeWorkGroupInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dlc_describe_work_group_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDlcDescribeWorkGroupInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_describe_work_group_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dlc_describe_work_group_info tencentcloud_dlc_describe_work_group_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDlcDescribeWorkGroupInfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDlcDescribeWorkGroupInfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_describe_work_group_info',
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
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._sortBy = config.sortBy;
    this._sorting = config.sorting;
    this._type = config.type;
    this._workGroupId = config.workGroupId;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sorting - computed: false, optional: true, required: false
  private _sorting?: string; 
  public get sorting() {
    return this.getStringAttribute('sorting');
  }
  public set sorting(value: string) {
    this._sorting = value;
  }
  public resetSorting() {
    this._sorting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortingInput() {
    return this._sorting;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // work_group_id - computed: false, optional: true, required: false
  private _workGroupId?: number; 
  public get workGroupId() {
    return this.getNumberAttribute('work_group_id');
  }
  public set workGroupId(value: number) {
    this._workGroupId = value;
  }
  public resetWorkGroupId() {
    this._workGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupIdInput() {
    return this._workGroupId;
  }

  // work_group_info - computed: true, optional: false, required: false
  private _workGroupInfo = new DataTencentcloudDlcDescribeWorkGroupInfoWorkGroupInfoList(this, "work_group_info", false);
  public get workGroupInfo() {
    return this._workGroupInfo;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudDlcDescribeWorkGroupInfoFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudDlcDescribeWorkGroupInfoFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sorting: cdktf.stringToTerraform(this._sorting),
      type: cdktf.stringToTerraform(this._type),
      work_group_id: cdktf.numberToTerraform(this._workGroupId),
      filters: cdktf.listMapper(dataTencentcloudDlcDescribeWorkGroupInfoFiltersToTerraform, true)(this._filters.internalValue),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sorting: {
        value: cdktf.stringToHclTerraform(this._sorting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      work_group_id: {
        value: cdktf.numberToHclTerraform(this._workGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudDlcDescribeWorkGroupInfoFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudDlcDescribeWorkGroupInfoFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
