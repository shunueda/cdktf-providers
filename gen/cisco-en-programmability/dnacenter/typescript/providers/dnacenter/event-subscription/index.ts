// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#id EventSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#parameters EventSubscription#parameters}
  */
  readonly parameters?: EventSubscriptionParameters[] | cdktf.IResolvable;
}
export interface EventSubscriptionItemFilterDomainsSubdomains {
}

export function eventSubscriptionItemFilterDomainsSubdomainsToTerraform(struct?: EventSubscriptionItemFilterDomainsSubdomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventSubscriptionItemFilterDomainsSubdomainsToHclTerraform(struct?: EventSubscriptionItemFilterDomainsSubdomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventSubscriptionItemFilterDomainsSubdomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionItemFilterDomainsSubdomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionItemFilterDomainsSubdomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // sub_domains - computed: true, optional: false, required: false
  public get subDomains() {
    return this.getListAttribute('sub_domains');
  }
}

export class EventSubscriptionItemFilterDomainsSubdomainsList extends cdktf.ComplexList {

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
  public get(index: number): EventSubscriptionItemFilterDomainsSubdomainsOutputReference {
    return new EventSubscriptionItemFilterDomainsSubdomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionItemFilter {
}

export function eventSubscriptionItemFilterToTerraform(struct?: EventSubscriptionItemFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventSubscriptionItemFilterToHclTerraform(struct?: EventSubscriptionItemFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventSubscriptionItemFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionItemFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionItemFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // categories - computed: true, optional: false, required: false
  public get categories() {
    return this.getListAttribute('categories');
  }

  // domains_subdomains - computed: true, optional: false, required: false
  private _domainsSubdomains = new EventSubscriptionItemFilterDomainsSubdomainsList(this, "domains_subdomains", false);
  public get domainsSubdomains() {
    return this._domainsSubdomains;
  }

  // event_ids - computed: true, optional: false, required: false
  public get eventIds() {
    return this.getListAttribute('event_ids');
  }

  // others - computed: true, optional: false, required: false
  public get others() {
    return this.getListAttribute('others');
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return this.getListAttribute('severities');
  }

  // site_ids - computed: true, optional: false, required: false
  public get siteIds() {
    return this.getListAttribute('site_ids');
  }

  // sources - computed: true, optional: false, required: false
  public get sources() {
    return this.getListAttribute('sources');
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }
}

export class EventSubscriptionItemFilterList extends cdktf.ComplexList {

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
  public get(index: number): EventSubscriptionItemFilterOutputReference {
    return new EventSubscriptionItemFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsHeaders {
}

export function eventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsHeadersToTerraform(struct?: EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsHeadersToHclTerraform(struct?: EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string - computed: true, optional: false, required: false
  public get string() {
    return this.getStringAttribute('string');
  }
}

export class EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsHeadersList extends cdktf.ComplexList {

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
  public get(index: number): EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsHeadersOutputReference {
    return new EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsPathParams {
}

export function eventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsPathParamsToTerraform(struct?: EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsPathParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsPathParamsToHclTerraform(struct?: EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsPathParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsPathParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsPathParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsPathParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string - computed: true, optional: false, required: false
  public get string() {
    return this.getStringAttribute('string');
  }
}

export class EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsPathParamsList extends cdktf.ComplexList {

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
  public get(index: number): EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsPathParamsOutputReference {
    return new EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsPathParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsQueryParams {
}

export function eventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsQueryParamsToTerraform(struct?: EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsQueryParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsQueryParamsToHclTerraform(struct?: EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsQueryParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsQueryParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsQueryParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string - computed: true, optional: false, required: false
  public get string() {
    return this.getStringAttribute('string');
  }
}

export class EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsQueryParamsList extends cdktf.ComplexList {

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
  public get(index: number): EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsQueryParamsOutputReference {
    return new EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionItemSubscriptionEndpointsSubscriptionDetails {
}

export function eventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsToTerraform(struct?: EventSubscriptionItemSubscriptionEndpointsSubscriptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsToHclTerraform(struct?: EventSubscriptionItemSubscriptionEndpointsSubscriptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionItemSubscriptionEndpointsSubscriptionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionItemSubscriptionEndpointsSubscriptionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_path - computed: true, optional: false, required: false
  public get basePath() {
    return this.getStringAttribute('base_path');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // connect_timeout - computed: true, optional: false, required: false
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path_params - computed: true, optional: false, required: false
  private _pathParams = new EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsPathParamsList(this, "path_params", false);
  public get pathParams() {
    return this._pathParams;
  }

  // query_params - computed: true, optional: false, required: false
  private _queryParams = new EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }

  // read_timeout - computed: true, optional: false, required: false
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // trust_cert - computed: true, optional: false, required: false
  public get trustCert() {
    return this.getStringAttribute('trust_cert');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsOutputReference {
    return new EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionItemSubscriptionEndpoints {
}

export function eventSubscriptionItemSubscriptionEndpointsToTerraform(struct?: EventSubscriptionItemSubscriptionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventSubscriptionItemSubscriptionEndpointsToHclTerraform(struct?: EventSubscriptionItemSubscriptionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventSubscriptionItemSubscriptionEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionItemSubscriptionEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionItemSubscriptionEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // subscription_details - computed: true, optional: false, required: false
  private _subscriptionDetails = new EventSubscriptionItemSubscriptionEndpointsSubscriptionDetailsList(this, "subscription_details", false);
  public get subscriptionDetails() {
    return this._subscriptionDetails;
  }
}

export class EventSubscriptionItemSubscriptionEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): EventSubscriptionItemSubscriptionEndpointsOutputReference {
    return new EventSubscriptionItemSubscriptionEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionItem {
}

export function eventSubscriptionItemToTerraform(struct?: EventSubscriptionItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventSubscriptionItemToHclTerraform(struct?: EventSubscriptionItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventSubscriptionItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new EventSubscriptionItemFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }

  // is_private - computed: true, optional: false, required: false
  public get isPrivate() {
    return this.getStringAttribute('is_private');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // subscription_endpoints - computed: true, optional: false, required: false
  private _subscriptionEndpoints = new EventSubscriptionItemSubscriptionEndpointsList(this, "subscription_endpoints", false);
  public get subscriptionEndpoints() {
    return this._subscriptionEndpoints;
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class EventSubscriptionItemList extends cdktf.ComplexList {

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
  public get(index: number): EventSubscriptionItemOutputReference {
    return new EventSubscriptionItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionParametersPayloadFilterDomainsSubdomains {
  /**
  * Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#domain EventSubscription#domain}
  */
  readonly domain?: string;
  /**
  * Sub Domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#sub_domains EventSubscription#sub_domains}
  */
  readonly subDomains?: string[];
}

export function eventSubscriptionParametersPayloadFilterDomainsSubdomainsToTerraform(struct?: EventSubscriptionParametersPayloadFilterDomainsSubdomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    sub_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subDomains),
  }
}


export function eventSubscriptionParametersPayloadFilterDomainsSubdomainsToHclTerraform(struct?: EventSubscriptionParametersPayloadFilterDomainsSubdomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSubscriptionParametersPayloadFilterDomainsSubdomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionParametersPayloadFilterDomainsSubdomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._subDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.subDomains = this._subDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionParametersPayloadFilterDomainsSubdomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._subDomains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._subDomains = value.subDomains;
    }
  }

  // domain - computed: true, optional: true, required: false
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

  // sub_domains - computed: true, optional: true, required: false
  private _subDomains?: string[]; 
  public get subDomains() {
    return this.getListAttribute('sub_domains');
  }
  public set subDomains(value: string[]) {
    this._subDomains = value;
  }
  public resetSubDomains() {
    this._subDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainsInput() {
    return this._subDomains;
  }
}

export class EventSubscriptionParametersPayloadFilterDomainsSubdomainsList extends cdktf.ComplexList {
  public internalValue? : EventSubscriptionParametersPayloadFilterDomainsSubdomains[] | cdktf.IResolvable

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
  public get(index: number): EventSubscriptionParametersPayloadFilterDomainsSubdomainsOutputReference {
    return new EventSubscriptionParametersPayloadFilterDomainsSubdomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionParametersPayloadFilter {
  /**
  * Categories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#categories EventSubscription#categories}
  */
  readonly categories?: string[];
  /**
  * Event Ids (Comma separated event ids)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#event_ids EventSubscription#event_ids}
  */
  readonly eventIds?: string[];
  /**
  * Severities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#severities EventSubscription#severities}
  */
  readonly severities?: string[];
  /**
  * Site Ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#site_ids EventSubscription#site_ids}
  */
  readonly siteIds?: string[];
  /**
  * Sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#sources EventSubscription#sources}
  */
  readonly sources?: string[];
  /**
  * Types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#types EventSubscription#types}
  */
  readonly types?: string[];
  /**
  * domains_subdomains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#domains_subdomains EventSubscription#domains_subdomains}
  */
  readonly domainsSubdomains?: EventSubscriptionParametersPayloadFilterDomainsSubdomains[] | cdktf.IResolvable;
}

export function eventSubscriptionParametersPayloadFilterToTerraform(struct?: EventSubscriptionParametersPayloadFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    event_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventIds),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    site_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.siteIds),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
    domains_subdomains: cdktf.listMapper(eventSubscriptionParametersPayloadFilterDomainsSubdomainsToTerraform, true)(struct!.domainsSubdomains),
  }
}


export function eventSubscriptionParametersPayloadFilterToHclTerraform(struct?: EventSubscriptionParametersPayloadFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    event_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    site_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.siteIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domains_subdomains: {
      value: cdktf.listMapperHcl(eventSubscriptionParametersPayloadFilterDomainsSubdomainsToHclTerraform, true)(struct!.domainsSubdomains),
      isBlock: true,
      type: "list",
      storageClassType: "EventSubscriptionParametersPayloadFilterDomainsSubdomainsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSubscriptionParametersPayloadFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionParametersPayloadFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._eventIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventIds = this._eventIds;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._siteIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteIds = this._siteIds;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._domainsSubdomains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainsSubdomains = this._domainsSubdomains?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionParametersPayloadFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categories = undefined;
      this._eventIds = undefined;
      this._severities = undefined;
      this._siteIds = undefined;
      this._sources = undefined;
      this._types = undefined;
      this._domainsSubdomains.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categories = value.categories;
      this._eventIds = value.eventIds;
      this._severities = value.severities;
      this._siteIds = value.siteIds;
      this._sources = value.sources;
      this._types = value.types;
      this._domainsSubdomains.internalValue = value.domainsSubdomains;
    }
  }

  // categories - computed: true, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // event_ids - computed: true, optional: true, required: false
  private _eventIds?: string[]; 
  public get eventIds() {
    return this.getListAttribute('event_ids');
  }
  public set eventIds(value: string[]) {
    this._eventIds = value;
  }
  public resetEventIds() {
    this._eventIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIdsInput() {
    return this._eventIds;
  }

  // severities - computed: true, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return this.getListAttribute('severities');
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // site_ids - computed: true, optional: true, required: false
  private _siteIds?: string[]; 
  public get siteIds() {
    return this.getListAttribute('site_ids');
  }
  public set siteIds(value: string[]) {
    this._siteIds = value;
  }
  public resetSiteIds() {
    this._siteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdsInput() {
    return this._siteIds;
  }

  // sources - computed: true, optional: true, required: false
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // types - computed: true, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // domains_subdomains - computed: false, optional: true, required: false
  private _domainsSubdomains = new EventSubscriptionParametersPayloadFilterDomainsSubdomainsList(this, "domains_subdomains", false);
  public get domainsSubdomains() {
    return this._domainsSubdomains;
  }
  public putDomainsSubdomains(value: EventSubscriptionParametersPayloadFilterDomainsSubdomains[] | cdktf.IResolvable) {
    this._domainsSubdomains.internalValue = value;
  }
  public resetDomainsSubdomains() {
    this._domainsSubdomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsSubdomainsInput() {
    return this._domainsSubdomains.internalValue;
  }
}

export class EventSubscriptionParametersPayloadFilterList extends cdktf.ComplexList {
  public internalValue? : EventSubscriptionParametersPayloadFilter[] | cdktf.IResolvable

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
  public get(index: number): EventSubscriptionParametersPayloadFilterOutputReference {
    return new EventSubscriptionParametersPayloadFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetails {
  /**
  * Connector Type (Must be REST)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#connector_type EventSubscription#connector_type}
  */
  readonly connectorType?: string;
}

export function eventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetailsToTerraform(struct?: EventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
  }
}


export function eventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetailsToHclTerraform(struct?: EventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_type: {
      value: cdktf.stringToHclTerraform(struct!.connectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorType = this._connectorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorType = value.connectorType;
    }
  }

  // connector_type - computed: true, optional: true, required: false
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  public resetConnectorType() {
    this._connectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }
}

export class EventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetailsList extends cdktf.ComplexList {
  public internalValue? : EventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetails[] | cdktf.IResolvable

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
  public get(index: number): EventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetailsOutputReference {
    return new EventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionParametersPayloadSubscriptionEndpoints {
  /**
  * (From 	Get Rest/Webhook Subscription Details --> pick instanceId)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#instance_id EventSubscription#instance_id}
  */
  readonly instanceId?: string;
  /**
  * subscription_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#subscription_details EventSubscription#subscription_details}
  */
  readonly subscriptionDetails?: EventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetails[] | cdktf.IResolvable;
}

export function eventSubscriptionParametersPayloadSubscriptionEndpointsToTerraform(struct?: EventSubscriptionParametersPayloadSubscriptionEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    subscription_details: cdktf.listMapper(eventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetailsToTerraform, true)(struct!.subscriptionDetails),
  }
}


export function eventSubscriptionParametersPayloadSubscriptionEndpointsToHclTerraform(struct?: EventSubscriptionParametersPayloadSubscriptionEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_details: {
      value: cdktf.listMapperHcl(eventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetailsToHclTerraform, true)(struct!.subscriptionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "EventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSubscriptionParametersPayloadSubscriptionEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionParametersPayloadSubscriptionEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._subscriptionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionDetails = this._subscriptionDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionParametersPayloadSubscriptionEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._subscriptionDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._subscriptionDetails.internalValue = value.subscriptionDetails;
    }
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // subscription_details - computed: false, optional: true, required: false
  private _subscriptionDetails = new EventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetailsList(this, "subscription_details", false);
  public get subscriptionDetails() {
    return this._subscriptionDetails;
  }
  public putSubscriptionDetails(value: EventSubscriptionParametersPayloadSubscriptionEndpointsSubscriptionDetails[] | cdktf.IResolvable) {
    this._subscriptionDetails.internalValue = value;
  }
  public resetSubscriptionDetails() {
    this._subscriptionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionDetailsInput() {
    return this._subscriptionDetails.internalValue;
  }
}

export class EventSubscriptionParametersPayloadSubscriptionEndpointsList extends cdktf.ComplexList {
  public internalValue? : EventSubscriptionParametersPayloadSubscriptionEndpoints[] | cdktf.IResolvable

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
  public get(index: number): EventSubscriptionParametersPayloadSubscriptionEndpointsOutputReference {
    return new EventSubscriptionParametersPayloadSubscriptionEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionParametersPayload {
  /**
  * Description
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#description EventSubscription#description}
  */
  readonly description?: string;
  /**
  * Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#name EventSubscription#name}
  */
  readonly name?: string;
  /**
  * Subscription Id (Unique UUID)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#subscription_id EventSubscription#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Version
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#version EventSubscription#version}
  */
  readonly version?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#filter EventSubscription#filter}
  */
  readonly filter?: EventSubscriptionParametersPayloadFilter[] | cdktf.IResolvable;
  /**
  * subscription_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#subscription_endpoints EventSubscription#subscription_endpoints}
  */
  readonly subscriptionEndpoints?: EventSubscriptionParametersPayloadSubscriptionEndpoints[] | cdktf.IResolvable;
}

export function eventSubscriptionParametersPayloadToTerraform(struct?: EventSubscriptionParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    version: cdktf.stringToTerraform(struct!.version),
    filter: cdktf.listMapper(eventSubscriptionParametersPayloadFilterToTerraform, true)(struct!.filter),
    subscription_endpoints: cdktf.listMapper(eventSubscriptionParametersPayloadSubscriptionEndpointsToTerraform, true)(struct!.subscriptionEndpoints),
  }
}


export function eventSubscriptionParametersPayloadToHclTerraform(struct?: EventSubscriptionParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.listMapperHcl(eventSubscriptionParametersPayloadFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "EventSubscriptionParametersPayloadFilterList",
    },
    subscription_endpoints: {
      value: cdktf.listMapperHcl(eventSubscriptionParametersPayloadSubscriptionEndpointsToHclTerraform, true)(struct!.subscriptionEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "EventSubscriptionParametersPayloadSubscriptionEndpointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSubscriptionParametersPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionParametersPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._subscriptionEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionEndpoints = this._subscriptionEndpoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionParametersPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._subscriptionId = undefined;
      this._version = undefined;
      this._filter.internalValue = undefined;
      this._subscriptionEndpoints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._subscriptionId = value.subscriptionId;
      this._version = value.version;
      this._filter.internalValue = value.filter;
      this._subscriptionEndpoints.internalValue = value.subscriptionEndpoints;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new EventSubscriptionParametersPayloadFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: EventSubscriptionParametersPayloadFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // subscription_endpoints - computed: false, optional: true, required: false
  private _subscriptionEndpoints = new EventSubscriptionParametersPayloadSubscriptionEndpointsList(this, "subscription_endpoints", false);
  public get subscriptionEndpoints() {
    return this._subscriptionEndpoints;
  }
  public putSubscriptionEndpoints(value: EventSubscriptionParametersPayloadSubscriptionEndpoints[] | cdktf.IResolvable) {
    this._subscriptionEndpoints.internalValue = value;
  }
  public resetSubscriptionEndpoints() {
    this._subscriptionEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionEndpointsInput() {
    return this._subscriptionEndpoints.internalValue;
  }
}

export class EventSubscriptionParametersPayloadList extends cdktf.ComplexList {
  public internalValue? : EventSubscriptionParametersPayload[] | cdktf.IResolvable

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
  public get(index: number): EventSubscriptionParametersPayloadOutputReference {
    return new EventSubscriptionParametersPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionParameters {
  /**
  * payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#payload EventSubscription#payload}
  */
  readonly payload?: EventSubscriptionParametersPayload[] | cdktf.IResolvable;
}

export function eventSubscriptionParametersToTerraform(struct?: EventSubscriptionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: cdktf.listMapper(eventSubscriptionParametersPayloadToTerraform, true)(struct!.payload),
  }
}


export function eventSubscriptionParametersToHclTerraform(struct?: EventSubscriptionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: cdktf.listMapperHcl(eventSubscriptionParametersPayloadToHclTerraform, true)(struct!.payload),
      isBlock: true,
      type: "list",
      storageClassType: "EventSubscriptionParametersPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSubscriptionParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
    }
  }

  // payload - computed: false, optional: true, required: false
  private _payload = new EventSubscriptionParametersPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }
  public putPayload(value: EventSubscriptionParametersPayload[] | cdktf.IResolvable) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}

export class EventSubscriptionParametersList extends cdktf.ComplexList {
  public internalValue? : EventSubscriptionParameters[] | cdktf.IResolvable

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
  public get(index: number): EventSubscriptionParametersOutputReference {
    return new EventSubscriptionParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription dnacenter_event_subscription}
*/
export class EventSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_event_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventSubscription to import
  * @param importFromId The id of the existing EventSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_event_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription dnacenter_event_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventSubscriptionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EventSubscriptionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_event_subscription',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new EventSubscriptionItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new EventSubscriptionParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: EventSubscriptionParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(eventSubscriptionParametersToTerraform, true)(this._parameters.internalValue),
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
      parameters: {
        value: cdktf.listMapperHcl(eventSubscriptionParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventSubscriptionParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
