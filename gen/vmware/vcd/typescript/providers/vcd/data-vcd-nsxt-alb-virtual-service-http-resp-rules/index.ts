// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_virtual_service_http_resp_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdNsxtAlbVirtualServiceHttpRespRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_virtual_service_http_resp_rules#id DataVcdNsxtAlbVirtualServiceHttpRespRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX-T ALB Virtual Service ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_virtual_service_http_resp_rules#virtual_service_id DataVcdNsxtAlbVirtualServiceHttpRespRules#virtual_service_id}
  */
  readonly virtualServiceId: string;
}
export interface DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeader {
}

export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
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

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeader {
}

export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeader | undefined) {
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
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActions {
}

export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // modify_header - computed: true, optional: false, required: false
  private _modifyHeader = new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderList(this, "modify_header", true);
  public get modifyHeader() {
    return this._modifyHeader;
  }

  // rewrite_location_header - computed: true, optional: false, required: false
  private _rewriteLocationHeader = new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderList(this, "rewrite_location_header", false);
  public get rewriteLocationHeader() {
    return this._rewriteLocationHeader;
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddress {
}

export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddress | undefined) {
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

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookie {
}

export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookie | undefined) {
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

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethods {
}

export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethods | undefined) {
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

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeader {
}

export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeader | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPath {
}

export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPath | undefined) {
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

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeaders {
}

export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeaders | undefined) {
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

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeaders {
}

export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeaders | undefined) {
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

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePorts {
}

export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePorts | undefined) {
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

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCode {
}

export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCode | undefined) {
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

  // http_status_code - computed: true, optional: false, required: false
  public get httpStatusCode() {
    return this.getStringAttribute('http_status_code');
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteria {
}

export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_ip_address - computed: true, optional: false, required: false
  private _clientIpAddress = new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressList(this, "client_ip_address", false);
  public get clientIpAddress() {
    return this._clientIpAddress;
  }

  // cookie - computed: true, optional: false, required: false
  private _cookie = new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieList(this, "cookie", false);
  public get cookie() {
    return this._cookie;
  }

  // http_methods - computed: true, optional: false, required: false
  private _httpMethods = new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsList(this, "http_methods", false);
  public get httpMethods() {
    return this._httpMethods;
  }

  // location_header - computed: true, optional: false, required: false
  private _locationHeader = new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderList(this, "location_header", false);
  public get locationHeader() {
    return this._locationHeader;
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathList(this, "path", false);
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
  private _requestHeaders = new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersList(this, "request_headers", true);
  public get requestHeaders() {
    return this._requestHeaders;
  }

  // response_headers - computed: true, optional: false, required: false
  private _responseHeaders = new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersList(this, "response_headers", true);
  public get responseHeaders() {
    return this._responseHeaders;
  }

  // service_ports - computed: true, optional: false, required: false
  private _servicePorts = new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsList(this, "service_ports", false);
  public get servicePorts() {
    return this._servicePorts;
  }

  // status_code - computed: true, optional: false, required: false
  private _statusCode = new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeList(this, "status_code", false);
  public get statusCode() {
    return this._statusCode;
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtAlbVirtualServiceHttpRespRulesRule {
}

export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleToTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtAlbVirtualServiceHttpRespRulesRuleToHclTerraform(struct?: DataVcdNsxtAlbVirtualServiceHttpRespRulesRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtAlbVirtualServiceHttpRespRulesRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtAlbVirtualServiceHttpRespRulesRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleActionsList(this, "actions", true);
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
  private _matchCriteria = new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaList(this, "match_criteria", true);
  public get matchCriteria() {
    return this._matchCriteria;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleOutputReference {
    return new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_virtual_service_http_resp_rules vcd_nsxt_alb_virtual_service_http_resp_rules}
*/
export class DataVcdNsxtAlbVirtualServiceHttpRespRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_alb_virtual_service_http_resp_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdNsxtAlbVirtualServiceHttpRespRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdNsxtAlbVirtualServiceHttpRespRules to import
  * @param importFromId The id of the existing DataVcdNsxtAlbVirtualServiceHttpRespRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_virtual_service_http_resp_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdNsxtAlbVirtualServiceHttpRespRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_alb_virtual_service_http_resp_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_virtual_service_http_resp_rules vcd_nsxt_alb_virtual_service_http_resp_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdNsxtAlbVirtualServiceHttpRespRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdNsxtAlbVirtualServiceHttpRespRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_alb_virtual_service_http_resp_rules',
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
  private _rule = new DataVcdNsxtAlbVirtualServiceHttpRespRulesRuleList(this, "rule", false);
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
