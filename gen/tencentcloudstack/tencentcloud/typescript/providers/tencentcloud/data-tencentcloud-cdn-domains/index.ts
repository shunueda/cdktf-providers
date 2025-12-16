// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domains
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCdnDomainsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Acceleration domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domains#domain DataTencentcloudCdnDomains#domain}
  */
  readonly domain?: string;
  /**
  * Whether to enable full-path cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domains#full_url_cache DataTencentcloudCdnDomains#full_url_cache}
  */
  readonly fullUrlCache?: boolean | cdktf.IResolvable;
  /**
  * HTTPS configuration. Valid values: `on`, `off` and `processing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domains#https_switch DataTencentcloudCdnDomains#https_switch}
  */
  readonly httpsSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domains#id DataTencentcloudCdnDomains#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Origin-pull protocol configuration. Valid values: `http`, `https` and `follow`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domains#origin_pull_protocol DataTencentcloudCdnDomains#origin_pull_protocol}
  */
  readonly originPullProtocol?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domains#result_output_file DataTencentcloudCdnDomains#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Service type of acceleration domain name. The available value include `web`, `download` and `media`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domains#service_type DataTencentcloudCdnDomains#service_type}
  */
  readonly serviceType?: string;
}
export interface DataTencentcloudCdnDomainsDomainListHttpsConfig {
}

export function dataTencentcloudCdnDomainsDomainListHttpsConfigToTerraform(struct?: DataTencentcloudCdnDomainsDomainListHttpsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdnDomainsDomainListHttpsConfigToHclTerraform(struct?: DataTencentcloudCdnDomainsDomainListHttpsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdnDomainsDomainListHttpsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdnDomainsDomainListHttpsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdnDomainsDomainListHttpsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http2_switch - computed: true, optional: false, required: false
  public get http2Switch() {
    return this.getStringAttribute('http2_switch');
  }

  // https_switch - computed: true, optional: false, required: false
  public get httpsSwitch() {
    return this.getStringAttribute('https_switch');
  }

  // ocsp_stapling_switch - computed: true, optional: false, required: false
  public get ocspStaplingSwitch() {
    return this.getStringAttribute('ocsp_stapling_switch');
  }

  // spdy_switch - computed: true, optional: false, required: false
  public get spdySwitch() {
    return this.getStringAttribute('spdy_switch');
  }

  // verify_client - computed: true, optional: false, required: false
  public get verifyClient() {
    return this.getStringAttribute('verify_client');
  }
}

export class DataTencentcloudCdnDomainsDomainListHttpsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdnDomainsDomainListHttpsConfigOutputReference {
    return new DataTencentcloudCdnDomainsDomainListHttpsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCdnDomainsDomainListOrigin {
}

export function dataTencentcloudCdnDomainsDomainListOriginToTerraform(struct?: DataTencentcloudCdnDomainsDomainListOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdnDomainsDomainListOriginToHclTerraform(struct?: DataTencentcloudCdnDomainsDomainListOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdnDomainsDomainListOriginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdnDomainsDomainListOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdnDomainsDomainListOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_origin_list - computed: true, optional: false, required: false
  public get backupOriginList() {
    return this.getListAttribute('backup_origin_list');
  }

  // backup_origin_type - computed: true, optional: false, required: false
  public get backupOriginType() {
    return this.getStringAttribute('backup_origin_type');
  }

  // backup_server_name - computed: true, optional: false, required: false
  public get backupServerName() {
    return this.getStringAttribute('backup_server_name');
  }

  // cos_private_access - computed: true, optional: false, required: false
  public get cosPrivateAccess() {
    return this.getStringAttribute('cos_private_access');
  }

  // origin_list - computed: true, optional: false, required: false
  public get originList() {
    return this.getListAttribute('origin_list');
  }

  // origin_pull_protocol - computed: true, optional: false, required: false
  public get originPullProtocol() {
    return this.getStringAttribute('origin_pull_protocol');
  }

  // origin_type - computed: true, optional: false, required: false
  public get originType() {
    return this.getStringAttribute('origin_type');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataTencentcloudCdnDomainsDomainListOriginList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdnDomainsDomainListOriginOutputReference {
    return new DataTencentcloudCdnDomainsDomainListOriginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCdnDomainsDomainListRequestHeaderHeaderRules {
}

export function dataTencentcloudCdnDomainsDomainListRequestHeaderHeaderRulesToTerraform(struct?: DataTencentcloudCdnDomainsDomainListRequestHeaderHeaderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdnDomainsDomainListRequestHeaderHeaderRulesToHclTerraform(struct?: DataTencentcloudCdnDomainsDomainListRequestHeaderHeaderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdnDomainsDomainListRequestHeaderHeaderRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdnDomainsDomainListRequestHeaderHeaderRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdnDomainsDomainListRequestHeaderHeaderRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_mode - computed: true, optional: false, required: false
  public get headerMode() {
    return this.getStringAttribute('header_mode');
  }

  // header_name - computed: true, optional: false, required: false
  public get headerName() {
    return this.getStringAttribute('header_name');
  }

  // header_value - computed: true, optional: false, required: false
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }

  // rule_paths - computed: true, optional: false, required: false
  public get rulePaths() {
    return this.getListAttribute('rule_paths');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
}

export class DataTencentcloudCdnDomainsDomainListRequestHeaderHeaderRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdnDomainsDomainListRequestHeaderHeaderRulesOutputReference {
    return new DataTencentcloudCdnDomainsDomainListRequestHeaderHeaderRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCdnDomainsDomainListRequestHeader {
}

export function dataTencentcloudCdnDomainsDomainListRequestHeaderToTerraform(struct?: DataTencentcloudCdnDomainsDomainListRequestHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdnDomainsDomainListRequestHeaderToHclTerraform(struct?: DataTencentcloudCdnDomainsDomainListRequestHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdnDomainsDomainListRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdnDomainsDomainListRequestHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdnDomainsDomainListRequestHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_rules - computed: true, optional: false, required: false
  private _headerRules = new DataTencentcloudCdnDomainsDomainListRequestHeaderHeaderRulesList(this, "header_rules", false);
  public get headerRules() {
    return this._headerRules;
  }

  // switch - computed: true, optional: false, required: false
  public get switch() {
    return this.getStringAttribute('switch');
  }
}

export class DataTencentcloudCdnDomainsDomainListRequestHeaderList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdnDomainsDomainListRequestHeaderOutputReference {
    return new DataTencentcloudCdnDomainsDomainListRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCdnDomainsDomainListRuleCache {
}

export function dataTencentcloudCdnDomainsDomainListRuleCacheToTerraform(struct?: DataTencentcloudCdnDomainsDomainListRuleCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdnDomainsDomainListRuleCacheToHclTerraform(struct?: DataTencentcloudCdnDomainsDomainListRuleCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdnDomainsDomainListRuleCacheOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdnDomainsDomainListRuleCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdnDomainsDomainListRuleCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_time - computed: true, optional: false, required: false
  public get cacheTime() {
    return this.getNumberAttribute('cache_time');
  }

  // compare_max_age - computed: true, optional: false, required: false
  public get compareMaxAge() {
    return this.getStringAttribute('compare_max_age');
  }

  // follow_origin_switch - computed: true, optional: false, required: false
  public get followOriginSwitch() {
    return this.getStringAttribute('follow_origin_switch');
  }

  // ignore_cache_control - computed: true, optional: false, required: false
  public get ignoreCacheControl() {
    return this.getStringAttribute('ignore_cache_control');
  }

  // ignore_set_cookie - computed: true, optional: false, required: false
  public get ignoreSetCookie() {
    return this.getStringAttribute('ignore_set_cookie');
  }

  // no_cache_switch - computed: true, optional: false, required: false
  public get noCacheSwitch() {
    return this.getStringAttribute('no_cache_switch');
  }

  // re_validate - computed: true, optional: false, required: false
  public get reValidate() {
    return this.getStringAttribute('re_validate');
  }

  // rule_paths - computed: true, optional: false, required: false
  public get rulePaths() {
    return this.getListAttribute('rule_paths');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // switch - computed: true, optional: false, required: false
  public get switch() {
    return this.getStringAttribute('switch');
  }
}

export class DataTencentcloudCdnDomainsDomainListRuleCacheList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdnDomainsDomainListRuleCacheOutputReference {
    return new DataTencentcloudCdnDomainsDomainListRuleCacheOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCdnDomainsDomainListStruct {
}

export function dataTencentcloudCdnDomainsDomainListStructToTerraform(struct?: DataTencentcloudCdnDomainsDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdnDomainsDomainListStructToHclTerraform(struct?: DataTencentcloudCdnDomainsDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdnDomainsDomainListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdnDomainsDomainListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdnDomainsDomainListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // area - computed: true, optional: false, required: false
  public get area() {
    return this.getStringAttribute('area');
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // full_url_cache - computed: true, optional: false, required: false
  public get fullUrlCache() {
    return this.getBooleanAttribute('full_url_cache');
  }

  // https_config - computed: true, optional: false, required: false
  private _httpsConfig = new DataTencentcloudCdnDomainsDomainListHttpsConfigList(this, "https_config", false);
  public get httpsConfig() {
    return this._httpsConfig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // origin - computed: true, optional: false, required: false
  private _origin = new DataTencentcloudCdnDomainsDomainListOriginList(this, "origin", false);
  public get origin() {
    return this._origin;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // range_origin_switch - computed: true, optional: false, required: false
  public get rangeOriginSwitch() {
    return this.getStringAttribute('range_origin_switch');
  }

  // request_header - computed: true, optional: false, required: false
  private _requestHeader = new DataTencentcloudCdnDomainsDomainListRequestHeaderList(this, "request_header", false);
  public get requestHeader() {
    return this._requestHeader;
  }

  // rule_cache - computed: true, optional: false, required: false
  private _ruleCache = new DataTencentcloudCdnDomainsDomainListRuleCacheList(this, "rule_cache", false);
  public get ruleCache() {
    return this._ruleCache;
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataTencentcloudCdnDomainsDomainListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdnDomainsDomainListStructOutputReference {
    return new DataTencentcloudCdnDomainsDomainListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domains tencentcloud_cdn_domains}
*/
export class DataTencentcloudCdnDomains extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdn_domains";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCdnDomains resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCdnDomains to import
  * @param importFromId The id of the existing DataTencentcloudCdnDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domains#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCdnDomains to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdn_domains", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domains tencentcloud_cdn_domains} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCdnDomainsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCdnDomainsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdn_domains',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._fullUrlCache = config.fullUrlCache;
    this._httpsSwitch = config.httpsSwitch;
    this._id = config.id;
    this._originPullProtocol = config.originPullProtocol;
    this._resultOutputFile = config.resultOutputFile;
    this._serviceType = config.serviceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_list - computed: true, optional: false, required: false
  private _domainList = new DataTencentcloudCdnDomainsDomainListStructList(this, "domain_list", false);
  public get domainList() {
    return this._domainList;
  }

  // full_url_cache - computed: false, optional: true, required: false
  private _fullUrlCache?: boolean | cdktf.IResolvable; 
  public get fullUrlCache() {
    return this.getBooleanAttribute('full_url_cache');
  }
  public set fullUrlCache(value: boolean | cdktf.IResolvable) {
    this._fullUrlCache = value;
  }
  public resetFullUrlCache() {
    this._fullUrlCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullUrlCacheInput() {
    return this._fullUrlCache;
  }

  // https_switch - computed: false, optional: true, required: false
  private _httpsSwitch?: string; 
  public get httpsSwitch() {
    return this.getStringAttribute('https_switch');
  }
  public set httpsSwitch(value: string) {
    this._httpsSwitch = value;
  }
  public resetHttpsSwitch() {
    this._httpsSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsSwitchInput() {
    return this._httpsSwitch;
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

  // origin_pull_protocol - computed: false, optional: true, required: false
  private _originPullProtocol?: string; 
  public get originPullProtocol() {
    return this.getStringAttribute('origin_pull_protocol');
  }
  public set originPullProtocol(value: string) {
    this._originPullProtocol = value;
  }
  public resetOriginPullProtocol() {
    this._originPullProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPullProtocolInput() {
    return this._originPullProtocol;
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

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      full_url_cache: cdktf.booleanToTerraform(this._fullUrlCache),
      https_switch: cdktf.stringToTerraform(this._httpsSwitch),
      id: cdktf.stringToTerraform(this._id),
      origin_pull_protocol: cdktf.stringToTerraform(this._originPullProtocol),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      service_type: cdktf.stringToTerraform(this._serviceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_url_cache: {
        value: cdktf.booleanToHclTerraform(this._fullUrlCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      https_switch: {
        value: cdktf.stringToHclTerraform(this._httpsSwitch),
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
      origin_pull_protocol: {
        value: cdktf.stringToHclTerraform(this._originPullProtocol),
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
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
