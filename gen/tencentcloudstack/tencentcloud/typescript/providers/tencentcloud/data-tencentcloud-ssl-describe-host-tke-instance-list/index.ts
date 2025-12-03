// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_host_tke_instance_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudSslDescribeHostTkeInstanceListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to cache asynchronous.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_host_tke_instance_list#async_cache DataTencentcloudSslDescribeHostTkeInstanceList#async_cache}
  */
  readonly asyncCache?: number;
  /**
  * Certificate ID to be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_host_tke_instance_list#certificate_id DataTencentcloudSslDescribeHostTkeInstanceList#certificate_id}
  */
  readonly certificateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_host_tke_instance_list#id DataTencentcloudSslDescribeHostTkeInstanceList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to query the cache, 1: Yes; 0: No, the default is the query cache, the cache is half an hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_host_tke_instance_list#is_cache DataTencentcloudSslDescribeHostTkeInstanceList#is_cache}
  */
  readonly isCache?: number;
  /**
  * Original certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_host_tke_instance_list#old_certificate_id DataTencentcloudSslDescribeHostTkeInstanceList#old_certificate_id}
  */
  readonly oldCertificateId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_host_tke_instance_list#result_output_file DataTencentcloudSslDescribeHostTkeInstanceList#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_host_tke_instance_list#filters DataTencentcloudSslDescribeHostTkeInstanceList#filters}
  */
  readonly filters?: DataTencentcloudSslDescribeHostTkeInstanceListFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListIngressListStruct {
}

export function dataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListIngressListStructToTerraform(struct?: DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListIngressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListIngressListStructToHclTerraform(struct?: DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListIngressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListIngressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListIngressListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListIngressListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }

  // ingress_name - computed: true, optional: false, required: false
  public get ingressName() {
    return this.getStringAttribute('ingress_name');
  }

  // tls_domains - computed: true, optional: false, required: false
  public get tlsDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('tls_domains'));
  }
}

export class DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListIngressListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListIngressListStructOutputReference {
    return new DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListIngressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListStruct {
}

export function dataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListStructToTerraform(struct?: DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListStructToHclTerraform(struct?: DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_id - computed: true, optional: false, required: false
  public get certId() {
    return this.getStringAttribute('cert_id');
  }

  // ingress_list - computed: true, optional: false, required: false
  private _ingressList = new DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListIngressListStructList(this, "ingress_list", false);
  public get ingressList() {
    return this._ingressList;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // no_match_domains - computed: true, optional: false, required: false
  public get noMatchDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('no_match_domains'));
  }
}

export class DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListStructOutputReference {
    return new DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListStruct {
}

export function dataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListStructToTerraform(struct?: DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListStructToHclTerraform(struct?: DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret_list - computed: true, optional: false, required: false
  private _secretList = new DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListSecretListStructList(this, "secret_list", false);
  public get secretList() {
    return this._secretList;
  }
}

export class DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListStructOutputReference {
    return new DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudSslDescribeHostTkeInstanceListInstanceListStruct {
}

export function dataTencentcloudSslDescribeHostTkeInstanceListInstanceListStructToTerraform(struct?: DataTencentcloudSslDescribeHostTkeInstanceListInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSslDescribeHostTkeInstanceListInstanceListStructToHclTerraform(struct?: DataTencentcloudSslDescribeHostTkeInstanceListInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSslDescribeHostTkeInstanceListInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSslDescribeHostTkeInstanceListInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeHostTkeInstanceListInstanceListStruct | undefined) {
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

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // cluster_version - computed: true, optional: false, required: false
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }

  // namespace_list - computed: true, optional: false, required: false
  private _namespaceList = new DataTencentcloudSslDescribeHostTkeInstanceListInstanceListNamespaceListStructList(this, "namespace_list", false);
  public get namespaceList() {
    return this._namespaceList;
  }
}

export class DataTencentcloudSslDescribeHostTkeInstanceListInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSslDescribeHostTkeInstanceListInstanceListStructOutputReference {
    return new DataTencentcloudSslDescribeHostTkeInstanceListInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudSslDescribeHostTkeInstanceListFilters {
  /**
  * Filter parameter key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_host_tke_instance_list#filter_key DataTencentcloudSslDescribeHostTkeInstanceList#filter_key}
  */
  readonly filterKey: string;
  /**
  * Filter parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_host_tke_instance_list#filter_value DataTencentcloudSslDescribeHostTkeInstanceList#filter_value}
  */
  readonly filterValue: string;
}

export function dataTencentcloudSslDescribeHostTkeInstanceListFiltersToTerraform(struct?: DataTencentcloudSslDescribeHostTkeInstanceListFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_key: cdktf.stringToTerraform(struct!.filterKey),
    filter_value: cdktf.stringToTerraform(struct!.filterValue),
  }
}


export function dataTencentcloudSslDescribeHostTkeInstanceListFiltersToHclTerraform(struct?: DataTencentcloudSslDescribeHostTkeInstanceListFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_key: {
      value: cdktf.stringToHclTerraform(struct!.filterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_value: {
      value: cdktf.stringToHclTerraform(struct!.filterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudSslDescribeHostTkeInstanceListFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSslDescribeHostTkeInstanceListFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterKey = this._filterKey;
    }
    if (this._filterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterValue = this._filterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeHostTkeInstanceListFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterKey = undefined;
      this._filterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterKey = value.filterKey;
      this._filterValue = value.filterValue;
    }
  }

  // filter_key - computed: false, optional: false, required: true
  private _filterKey?: string; 
  public get filterKey() {
    return this.getStringAttribute('filter_key');
  }
  public set filterKey(value: string) {
    this._filterKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKeyInput() {
    return this._filterKey;
  }

  // filter_value - computed: false, optional: false, required: true
  private _filterValue?: string; 
  public get filterValue() {
    return this.getStringAttribute('filter_value');
  }
  public set filterValue(value: string) {
    this._filterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterValueInput() {
    return this._filterValue;
  }
}

export class DataTencentcloudSslDescribeHostTkeInstanceListFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudSslDescribeHostTkeInstanceListFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudSslDescribeHostTkeInstanceListFiltersOutputReference {
    return new DataTencentcloudSslDescribeHostTkeInstanceListFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_host_tke_instance_list tencentcloud_ssl_describe_host_tke_instance_list}
*/
export class DataTencentcloudSslDescribeHostTkeInstanceList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssl_describe_host_tke_instance_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudSslDescribeHostTkeInstanceList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudSslDescribeHostTkeInstanceList to import
  * @param importFromId The id of the existing DataTencentcloudSslDescribeHostTkeInstanceList that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_host_tke_instance_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudSslDescribeHostTkeInstanceList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssl_describe_host_tke_instance_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_host_tke_instance_list tencentcloud_ssl_describe_host_tke_instance_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudSslDescribeHostTkeInstanceListConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudSslDescribeHostTkeInstanceListConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssl_describe_host_tke_instance_list',
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
    this._asyncCache = config.asyncCache;
    this._certificateId = config.certificateId;
    this._id = config.id;
    this._isCache = config.isCache;
    this._oldCertificateId = config.oldCertificateId;
    this._resultOutputFile = config.resultOutputFile;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // async_cache - computed: false, optional: true, required: false
  private _asyncCache?: number; 
  public get asyncCache() {
    return this.getNumberAttribute('async_cache');
  }
  public set asyncCache(value: number) {
    this._asyncCache = value;
  }
  public resetAsyncCache() {
    this._asyncCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncCacheInput() {
    return this._asyncCache;
  }

  // async_cache_time - computed: true, optional: false, required: false
  public get asyncCacheTime() {
    return this.getStringAttribute('async_cache_time');
  }

  // async_offset - computed: true, optional: false, required: false
  public get asyncOffset() {
    return this.getNumberAttribute('async_offset');
  }

  // async_total_num - computed: true, optional: false, required: false
  public get asyncTotalNum() {
    return this.getNumberAttribute('async_total_num');
  }

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
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

  // instance_list - computed: true, optional: false, required: false
  private _instanceList = new DataTencentcloudSslDescribeHostTkeInstanceListInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }

  // is_cache - computed: false, optional: true, required: false
  private _isCache?: number; 
  public get isCache() {
    return this.getNumberAttribute('is_cache');
  }
  public set isCache(value: number) {
    this._isCache = value;
  }
  public resetIsCache() {
    this._isCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCacheInput() {
    return this._isCache;
  }

  // old_certificate_id - computed: false, optional: true, required: false
  private _oldCertificateId?: string; 
  public get oldCertificateId() {
    return this.getStringAttribute('old_certificate_id');
  }
  public set oldCertificateId(value: string) {
    this._oldCertificateId = value;
  }
  public resetOldCertificateId() {
    this._oldCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldCertificateIdInput() {
    return this._oldCertificateId;
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

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudSslDescribeHostTkeInstanceListFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudSslDescribeHostTkeInstanceListFilters[] | cdktf.IResolvable) {
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
      async_cache: cdktf.numberToTerraform(this._asyncCache),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      id: cdktf.stringToTerraform(this._id),
      is_cache: cdktf.numberToTerraform(this._isCache),
      old_certificate_id: cdktf.stringToTerraform(this._oldCertificateId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filters: cdktf.listMapper(dataTencentcloudSslDescribeHostTkeInstanceListFiltersToTerraform, true)(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      async_cache: {
        value: cdktf.numberToHclTerraform(this._asyncCache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
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
      is_cache: {
        value: cdktf.numberToHclTerraform(this._isCache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      old_certificate_id: {
        value: cdktf.stringToHclTerraform(this._oldCertificateId),
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
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudSslDescribeHostTkeInstanceListFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudSslDescribeHostTkeInstanceListFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
