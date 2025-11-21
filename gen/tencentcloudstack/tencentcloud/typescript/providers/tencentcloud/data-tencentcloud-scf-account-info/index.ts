// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/scf_account_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudScfAccountInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/scf_account_info#id DataTencentcloudScfAccountInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/scf_account_info#result_output_file DataTencentcloudScfAccountInfo#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudScfAccountInfoAccountLimitNamespaceTrigger {
}

export function dataTencentcloudScfAccountInfoAccountLimitNamespaceTriggerToTerraform(struct?: DataTencentcloudScfAccountInfoAccountLimitNamespaceTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudScfAccountInfoAccountLimitNamespaceTriggerToHclTerraform(struct?: DataTencentcloudScfAccountInfoAccountLimitNamespaceTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudScfAccountInfoAccountLimitNamespaceTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudScfAccountInfoAccountLimitNamespaceTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudScfAccountInfoAccountLimitNamespaceTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apigw - computed: true, optional: false, required: false
  public get apigw() {
    return this.getNumberAttribute('apigw');
  }

  // ckafka - computed: true, optional: false, required: false
  public get ckafka() {
    return this.getNumberAttribute('ckafka');
  }

  // clb - computed: true, optional: false, required: false
  public get clb() {
    return this.getNumberAttribute('clb');
  }

  // cls - computed: true, optional: false, required: false
  public get cls() {
    return this.getNumberAttribute('cls');
  }

  // cm - computed: true, optional: false, required: false
  public get cm() {
    return this.getNumberAttribute('cm');
  }

  // cmq - computed: true, optional: false, required: false
  public get cmq() {
    return this.getNumberAttribute('cmq');
  }

  // cos - computed: true, optional: false, required: false
  public get cos() {
    return this.getNumberAttribute('cos');
  }

  // eb - computed: true, optional: false, required: false
  public get eb() {
    return this.getNumberAttribute('eb');
  }

  // mps - computed: true, optional: false, required: false
  public get mps() {
    return this.getNumberAttribute('mps');
  }

  // timer - computed: true, optional: false, required: false
  public get timer() {
    return this.getNumberAttribute('timer');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // vod - computed: true, optional: false, required: false
  public get vod() {
    return this.getNumberAttribute('vod');
  }
}

export class DataTencentcloudScfAccountInfoAccountLimitNamespaceTriggerList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudScfAccountInfoAccountLimitNamespaceTriggerOutputReference {
    return new DataTencentcloudScfAccountInfoAccountLimitNamespaceTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudScfAccountInfoAccountLimitNamespace {
}

export function dataTencentcloudScfAccountInfoAccountLimitNamespaceToTerraform(struct?: DataTencentcloudScfAccountInfoAccountLimitNamespace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudScfAccountInfoAccountLimitNamespaceToHclTerraform(struct?: DataTencentcloudScfAccountInfoAccountLimitNamespace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudScfAccountInfoAccountLimitNamespaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudScfAccountInfoAccountLimitNamespace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudScfAccountInfoAccountLimitNamespace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrent_executions - computed: true, optional: false, required: false
  public get concurrentExecutions() {
    return this.getNumberAttribute('concurrent_executions');
  }

  // functions_count - computed: true, optional: false, required: false
  public get functionsCount() {
    return this.getNumberAttribute('functions_count');
  }

  // init_timeout_limit - computed: true, optional: false, required: false
  public get initTimeoutLimit() {
    return this.getNumberAttribute('init_timeout_limit');
  }

  // max_msg_ttl - computed: true, optional: false, required: false
  public get maxMsgTtl() {
    return this.getNumberAttribute('max_msg_ttl');
  }

  // min_msg_ttl - computed: true, optional: false, required: false
  public get minMsgTtl() {
    return this.getNumberAttribute('min_msg_ttl');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // retry_num_limit - computed: true, optional: false, required: false
  public get retryNumLimit() {
    return this.getNumberAttribute('retry_num_limit');
  }

  // test_model_limit - computed: true, optional: false, required: false
  public get testModelLimit() {
    return this.getNumberAttribute('test_model_limit');
  }

  // timeout_limit - computed: true, optional: false, required: false
  public get timeoutLimit() {
    return this.getNumberAttribute('timeout_limit');
  }

  // trigger - computed: true, optional: false, required: false
  private _trigger = new DataTencentcloudScfAccountInfoAccountLimitNamespaceTriggerList(this, "trigger", false);
  public get trigger() {
    return this._trigger;
  }
}

export class DataTencentcloudScfAccountInfoAccountLimitNamespaceList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudScfAccountInfoAccountLimitNamespaceOutputReference {
    return new DataTencentcloudScfAccountInfoAccountLimitNamespaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudScfAccountInfoAccountLimit {
}

export function dataTencentcloudScfAccountInfoAccountLimitToTerraform(struct?: DataTencentcloudScfAccountInfoAccountLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudScfAccountInfoAccountLimitToHclTerraform(struct?: DataTencentcloudScfAccountInfoAccountLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudScfAccountInfoAccountLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudScfAccountInfoAccountLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudScfAccountInfoAccountLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace - computed: true, optional: false, required: false
  private _namespace = new DataTencentcloudScfAccountInfoAccountLimitNamespaceList(this, "namespace", false);
  public get namespace() {
    return this._namespace;
  }

  // namespaces_count - computed: true, optional: false, required: false
  public get namespacesCount() {
    return this.getNumberAttribute('namespaces_count');
  }
}

export class DataTencentcloudScfAccountInfoAccountLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudScfAccountInfoAccountLimitOutputReference {
    return new DataTencentcloudScfAccountInfoAccountLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudScfAccountInfoAccountUsageNamespace {
}

export function dataTencentcloudScfAccountInfoAccountUsageNamespaceToTerraform(struct?: DataTencentcloudScfAccountInfoAccountUsageNamespace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudScfAccountInfoAccountUsageNamespaceToHclTerraform(struct?: DataTencentcloudScfAccountInfoAccountUsageNamespace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudScfAccountInfoAccountUsageNamespaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudScfAccountInfoAccountUsageNamespace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudScfAccountInfoAccountUsageNamespace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // functions - computed: true, optional: false, required: false
  public get functions() {
    return cdktf.Fn.tolist(this.getListAttribute('functions'));
  }

  // functions_count - computed: true, optional: false, required: false
  public get functionsCount() {
    return this.getNumberAttribute('functions_count');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // total_allocated_concurrency_mem - computed: true, optional: false, required: false
  public get totalAllocatedConcurrencyMem() {
    return this.getNumberAttribute('total_allocated_concurrency_mem');
  }

  // total_allocated_provisioned_mem - computed: true, optional: false, required: false
  public get totalAllocatedProvisionedMem() {
    return this.getNumberAttribute('total_allocated_provisioned_mem');
  }

  // total_concurrency_mem - computed: true, optional: false, required: false
  public get totalConcurrencyMem() {
    return this.getNumberAttribute('total_concurrency_mem');
  }
}

export class DataTencentcloudScfAccountInfoAccountUsageNamespaceList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudScfAccountInfoAccountUsageNamespaceOutputReference {
    return new DataTencentcloudScfAccountInfoAccountUsageNamespaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudScfAccountInfoAccountUsage {
}

export function dataTencentcloudScfAccountInfoAccountUsageToTerraform(struct?: DataTencentcloudScfAccountInfoAccountUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudScfAccountInfoAccountUsageToHclTerraform(struct?: DataTencentcloudScfAccountInfoAccountUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudScfAccountInfoAccountUsageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudScfAccountInfoAccountUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudScfAccountInfoAccountUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace - computed: true, optional: false, required: false
  private _namespace = new DataTencentcloudScfAccountInfoAccountUsageNamespaceList(this, "namespace", false);
  public get namespace() {
    return this._namespace;
  }

  // namespaces_count - computed: true, optional: false, required: false
  public get namespacesCount() {
    return this.getNumberAttribute('namespaces_count');
  }

  // total_allocated_concurrency_mem - computed: true, optional: false, required: false
  public get totalAllocatedConcurrencyMem() {
    return this.getNumberAttribute('total_allocated_concurrency_mem');
  }

  // total_concurrency_mem - computed: true, optional: false, required: false
  public get totalConcurrencyMem() {
    return this.getNumberAttribute('total_concurrency_mem');
  }

  // user_concurrency_mem_limit - computed: true, optional: false, required: false
  public get userConcurrencyMemLimit() {
    return this.getNumberAttribute('user_concurrency_mem_limit');
  }
}

export class DataTencentcloudScfAccountInfoAccountUsageList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudScfAccountInfoAccountUsageOutputReference {
    return new DataTencentcloudScfAccountInfoAccountUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/scf_account_info tencentcloud_scf_account_info}
*/
export class DataTencentcloudScfAccountInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_scf_account_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudScfAccountInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudScfAccountInfo to import
  * @param importFromId The id of the existing DataTencentcloudScfAccountInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/scf_account_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudScfAccountInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_scf_account_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/scf_account_info tencentcloud_scf_account_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudScfAccountInfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudScfAccountInfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_scf_account_info',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_limit - computed: true, optional: false, required: false
  private _accountLimit = new DataTencentcloudScfAccountInfoAccountLimitList(this, "account_limit", false);
  public get accountLimit() {
    return this._accountLimit;
  }

  // account_usage - computed: true, optional: false, required: false
  private _accountUsage = new DataTencentcloudScfAccountInfoAccountUsageList(this, "account_usage", false);
  public get accountUsage() {
    return this._accountUsage;
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
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
