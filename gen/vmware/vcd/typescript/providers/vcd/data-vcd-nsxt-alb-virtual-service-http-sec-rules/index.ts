// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_virtual_service_http_sec_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdNsxtAlbVirtualServiceHttpSecRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_virtual_service_http_sec_rules#id DataVcdNsxtAlbVirtualServiceHttpSecRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX-T ALB Virtual Service ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_virtual_service_http_sec_rules#virtual_service_id DataVcdNsxtAlbVirtualServiceHttpSecRules#virtual_service_id}
  */
  readonly virtualServiceId: string;
}
export interface DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponse {
}

export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirect {
}

export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // keep_query - computed: true, optional: false, required: false
  public get keepQuery() {
    return this.getBooleanAttribute('keep_query');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimit {
}

export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_close_connection - computed: true, optional: false, required: false
  public get actionCloseConnection() {
    return this.getBooleanAttribute('action_close_connection');
  }

  // action_local_response - computed: true, optional: false, required: false
  private _actionLocalResponse = new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseList(this, "action_local_response", false);
  public get actionLocalResponse() {
    return this._actionLocalResponse;
  }

  // action_redirect - computed: true, optional: false, required: false
  private _actionRedirect = new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectList(this, "action_redirect", false);
  public get actionRedirect() {
    return this._actionRedirect;
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponse {
}

export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActions {
}

export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connections - computed: true, optional: false, required: false
  public get connections() {
    return this.getStringAttribute('connections');
  }

  // rate_limit - computed: true, optional: false, required: false
  private _rateLimit = new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitList(this, "rate_limit", false);
  public get rateLimit() {
    return this._rateLimit;
  }

  // redirect_to_https - computed: true, optional: false, required: false
  public get redirectToHttps() {
    return this.getStringAttribute('redirect_to_https');
  }

  // send_response - computed: true, optional: false, required: false
  private _sendResponse = new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseList(this, "send_response", false);
  public get sendResponse() {
    return this._sendResponse;
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddress {
}

export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  public get criteria() {
    return this.getStringAttribute('criteria');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookie {
}

export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  public get criteria() {
    return this.getStringAttribute('criteria');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethods {
}

export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  public get criteria() {
    return this.getStringAttribute('criteria');
  }

  // methods - computed: true, optional: false, required: false
  public get methods() {
    return cdktf.Fn.tolist(this.getListAttribute('methods'));
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPath {
}

export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  public get criteria() {
    return this.getStringAttribute('criteria');
  }

  // paths - computed: true, optional: false, required: false
  public get paths() {
    return cdktf.Fn.tolist(this.getListAttribute('paths'));
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeaders {
}

export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  public get criteria() {
    return this.getStringAttribute('criteria');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePorts {
}

export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  public get criteria() {
    return this.getStringAttribute('criteria');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteria {
}

export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_ip_address - computed: true, optional: false, required: false
  private _clientIpAddress = new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressList(this, "client_ip_address", false);
  public get clientIpAddress() {
    return this._clientIpAddress;
  }

  // cookie - computed: true, optional: false, required: false
  private _cookie = new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieList(this, "cookie", false);
  public get cookie() {
    return this._cookie;
  }

  // http_methods - computed: true, optional: false, required: false
  private _httpMethods = new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsList(this, "http_methods", false);
  public get httpMethods() {
    return this._httpMethods;
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathList(this, "path", false);
  public get path() {
    return this._path;
  }

  // protocol_type - computed: true, optional: false, required: false
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return cdktf.Fn.tolist(this.getListAttribute('query'));
  }

  // request_headers - computed: true, optional: false, required: false
  private _requestHeaders = new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersList(this, "request_headers", true);
  public get requestHeaders() {
    return this._requestHeaders;
  }

  // service_ports - computed: true, optional: false, required: false
  private _servicePorts = new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsList(this, "service_ports", false);
  public get servicePorts() {
    return this._servicePorts;
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpSecRulesRule {
}

export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpSecRulesRuleToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpSecRulesRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpSecRulesRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpSecRulesRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleActionsList(this, "actions", true);
  public get actions() {
    return this._actions;
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // logging - computed: true, optional: false, required: false
  public get logging() {
    return this.getBooleanAttribute('logging');
  }

  // match_criteria - computed: true, optional: false, required: false
  private _matchCriteria = new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaList(this, "match_criteria", true);
  public get matchCriteria() {
    return this._matchCriteria;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_virtual_service_http_sec_rules vcd_nsxt_alb_virtual_service_http_sec_rules}
*/
export class DataVcdNsxtAlbVirtualServiceHttpSecRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_alb_virtual_service_http_sec_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdNsxtAlbVirtualServiceHttpSecRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdNsxtAlbVirtualServiceHttpSecRules to import
  * @param importFromId The id of the existing DataVcdNsxtAlbVirtualServiceHttpSecRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_virtual_service_http_sec_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdNsxtAlbVirtualServiceHttpSecRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_alb_virtual_service_http_sec_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_virtual_service_http_sec_rules vcd_nsxt_alb_virtual_service_http_sec_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdNsxtAlbVirtualServiceHttpSecRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdNsxtAlbVirtualServiceHttpSecRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_alb_virtual_service_http_sec_rules',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
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
    this._virtualServiceId = config.virtualServiceId;
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

  // rule - computed: true, optional: false, required: false
  private _rule = new DataVcdNsxtAlbVirtualServiceHttpSecRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }

  // virtual_service_id - computed: false, optional: false, required: true
  private _virtualServiceId?: string; 
  public get virtualServiceId() {
    return this.getStringAttribute('virtual_service_id');
  }
  public set virtualServiceId(value: string) {
    this._virtualServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceIdInput() {
    return this._virtualServiceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      virtual_service_id: cdktf.stringToTerraform(this._virtualServiceId),
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
      virtual_service_id: {
        value: cdktf.stringToHclTerraform(this._virtualServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
