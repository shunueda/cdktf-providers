// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/alb_virtual_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexAlbVirtualHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the HTTP router to which the virtual host belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/alb_virtual_host#http_router_id DataYandexAlbVirtualHost#http_router_id}
  */
  readonly httpRouterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/alb_virtual_host#id DataYandexAlbVirtualHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/alb_virtual_host#name DataYandexAlbVirtualHost#name}
  */
  readonly name?: string;
  /**
  * The ID of a specific Virtual Host. Virtual Host ID is concatenation of HTTP Router ID and Virtual Host name with `/` symbol between them. For Example, `http_router_id/vhost_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/alb_virtual_host#virtual_host_id DataYandexAlbVirtualHost#virtual_host_id}
  */
  readonly virtualHostId?: string;
}
export interface DataYandexAlbVirtualHostModifyRequestHeaders {
}

export function dataYandexAlbVirtualHostModifyRequestHeadersToTerraform(struct?: DataYandexAlbVirtualHostModifyRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostModifyRequestHeadersToHclTerraform(struct?: DataYandexAlbVirtualHostModifyRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostModifyRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostModifyRequestHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostModifyRequestHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append - computed: true, optional: false, required: false
  public get append() {
    return this.getStringAttribute('append');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remove - computed: true, optional: false, required: false
  public get remove() {
    return this.getBooleanAttribute('remove');
  }

  // replace - computed: true, optional: false, required: false
  public get replace() {
    return this.getStringAttribute('replace');
  }
}

export class DataYandexAlbVirtualHostModifyRequestHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostModifyRequestHeadersOutputReference {
    return new DataYandexAlbVirtualHostModifyRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostModifyResponseHeaders {
}

export function dataYandexAlbVirtualHostModifyResponseHeadersToTerraform(struct?: DataYandexAlbVirtualHostModifyResponseHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostModifyResponseHeadersToHclTerraform(struct?: DataYandexAlbVirtualHostModifyResponseHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostModifyResponseHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostModifyResponseHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostModifyResponseHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append - computed: true, optional: false, required: false
  public get append() {
    return this.getStringAttribute('append');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remove - computed: true, optional: false, required: false
  public get remove() {
    return this.getBooleanAttribute('remove');
  }

  // replace - computed: true, optional: false, required: false
  public get replace() {
    return this.getStringAttribute('replace');
  }
}

export class DataYandexAlbVirtualHostModifyResponseHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostModifyResponseHeadersOutputReference {
    return new DataYandexAlbVirtualHostModifyResponseHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRateLimitAllRequests {
}

export function dataYandexAlbVirtualHostRateLimitAllRequestsToTerraform(struct?: DataYandexAlbVirtualHostRateLimitAllRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRateLimitAllRequestsToHclTerraform(struct?: DataYandexAlbVirtualHostRateLimitAllRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRateLimitAllRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRateLimitAllRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRateLimitAllRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // per_minute - computed: true, optional: false, required: false
  public get perMinute() {
    return this.getNumberAttribute('per_minute');
  }

  // per_second - computed: true, optional: false, required: false
  public get perSecond() {
    return this.getNumberAttribute('per_second');
  }
}

export class DataYandexAlbVirtualHostRateLimitAllRequestsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRateLimitAllRequestsOutputReference {
    return new DataYandexAlbVirtualHostRateLimitAllRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRateLimitRequestsPerIp {
}

export function dataYandexAlbVirtualHostRateLimitRequestsPerIpToTerraform(struct?: DataYandexAlbVirtualHostRateLimitRequestsPerIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRateLimitRequestsPerIpToHclTerraform(struct?: DataYandexAlbVirtualHostRateLimitRequestsPerIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRateLimitRequestsPerIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRateLimitRequestsPerIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRateLimitRequestsPerIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // per_minute - computed: true, optional: false, required: false
  public get perMinute() {
    return this.getNumberAttribute('per_minute');
  }

  // per_second - computed: true, optional: false, required: false
  public get perSecond() {
    return this.getNumberAttribute('per_second');
  }
}

export class DataYandexAlbVirtualHostRateLimitRequestsPerIpList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRateLimitRequestsPerIpOutputReference {
    return new DataYandexAlbVirtualHostRateLimitRequestsPerIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRateLimit {
}

export function dataYandexAlbVirtualHostRateLimitToTerraform(struct?: DataYandexAlbVirtualHostRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRateLimitToHclTerraform(struct?: DataYandexAlbVirtualHostRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_requests - computed: true, optional: false, required: false
  private _allRequests = new DataYandexAlbVirtualHostRateLimitAllRequestsList(this, "all_requests", false);
  public get allRequests() {
    return this._allRequests;
  }

  // requests_per_ip - computed: true, optional: false, required: false
  private _requestsPerIp = new DataYandexAlbVirtualHostRateLimitRequestsPerIpList(this, "requests_per_ip", false);
  public get requestsPerIp() {
    return this._requestsPerIp;
  }
}

export class DataYandexAlbVirtualHostRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRateLimitOutputReference {
    return new DataYandexAlbVirtualHostRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmn {
}

export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmnToTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmnToHclTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact - computed: true, optional: false, required: false
  public get exact() {
    return this.getStringAttribute('exact');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmnList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmnOutputReference {
    return new DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatch {
}

export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchToTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchToHclTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqmn - computed: true, optional: false, required: false
  private _fqmn = new DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchFqmnList(this, "fqmn", false);
  public get fqmn() {
    return this._fqmn;
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchOutputReference {
    return new DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequests {
}

export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsToTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsToHclTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // per_minute - computed: true, optional: false, required: false
  public get perMinute() {
    return this.getNumberAttribute('per_minute');
  }

  // per_second - computed: true, optional: false, required: false
  public get perSecond() {
    return this.getNumberAttribute('per_second');
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsOutputReference {
    return new DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIp {
}

export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpToTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpToHclTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // per_minute - computed: true, optional: false, required: false
  public get perMinute() {
    return this.getNumberAttribute('per_minute');
  }

  // per_second - computed: true, optional: false, required: false
  public get perSecond() {
    return this.getNumberAttribute('per_second');
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpOutputReference {
    return new DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimit {
}

export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitToTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitToHclTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_requests - computed: true, optional: false, required: false
  private _allRequests = new DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsList(this, "all_requests", false);
  public get allRequests() {
    return this._allRequests;
  }

  // requests_per_ip - computed: true, optional: false, required: false
  private _requestsPerIp = new DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpList(this, "requests_per_ip", false);
  public get requestsPerIp() {
    return this._requestsPerIp;
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitOutputReference {
    return new DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteAction {
}

export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionToTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionToHclTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_host_rewrite - computed: true, optional: false, required: false
  public get autoHostRewrite() {
    return this.getBooleanAttribute('auto_host_rewrite');
  }

  // backend_group_id - computed: true, optional: false, required: false
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }

  // host_rewrite - computed: true, optional: false, required: false
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }

  // max_timeout - computed: true, optional: false, required: false
  public get maxTimeout() {
    return this.getStringAttribute('max_timeout');
  }

  // rate_limit - computed: true, optional: false, required: false
  private _rateLimit = new DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitList(this, "rate_limit", false);
  public get rateLimit() {
    return this._rateLimit;
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionOutputReference {
    return new DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction {
}

export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionToTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionToHclTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionOutputReference {
    return new DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteGrpcRoute {
}

export function dataYandexAlbVirtualHostRouteGrpcRouteToTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteGrpcRouteToHclTerraform(struct?: DataYandexAlbVirtualHostRouteGrpcRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteGrpcRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteGrpcRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteGrpcRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grpc_match - computed: true, optional: false, required: false
  private _grpcMatch = new DataYandexAlbVirtualHostRouteGrpcRouteGrpcMatchList(this, "grpc_match", false);
  public get grpcMatch() {
    return this._grpcMatch;
  }

  // grpc_route_action - computed: true, optional: false, required: false
  private _grpcRouteAction = new DataYandexAlbVirtualHostRouteGrpcRouteGrpcRouteActionList(this, "grpc_route_action", false);
  public get grpcRouteAction() {
    return this._grpcRouteAction;
  }

  // grpc_status_response_action - computed: true, optional: false, required: false
  private _grpcStatusResponseAction = new DataYandexAlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionList(this, "grpc_status_response_action", false);
  public get grpcStatusResponseAction() {
    return this._grpcStatusResponseAction;
  }
}

export class DataYandexAlbVirtualHostRouteGrpcRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteGrpcRouteOutputReference {
    return new DataYandexAlbVirtualHostRouteGrpcRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRouteDirectResponseAction {
}

export function dataYandexAlbVirtualHostRouteHttpRouteDirectResponseActionToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteDirectResponseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteHttpRouteDirectResponseActionToHclTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteDirectResponseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteHttpRouteDirectResponseActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRouteDirectResponseAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRouteDirectResponseAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteDirectResponseActionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteDirectResponseActionOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteDirectResponseActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPath {
}

export function dataYandexAlbVirtualHostRouteHttpRouteHttpMatchPathToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteHttpRouteHttpMatchPathToHclTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact - computed: true, optional: false, required: false
  public get exact() {
    return this.getStringAttribute('exact');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPathList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPathOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRouteHttpMatch {
}

export function dataYandexAlbVirtualHostRouteHttpRouteHttpMatchToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteHttpRouteHttpMatchToHclTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRouteHttpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRouteHttpMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return cdktf.Fn.tolist(this.getListAttribute('http_method'));
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataYandexAlbVirtualHostRouteHttpRouteHttpMatchPathList(this, "path", false);
  public get path() {
    return this._path;
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteHttpMatchOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteHttpMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequests {
}

export function dataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsToHclTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // per_minute - computed: true, optional: false, required: false
  public get perMinute() {
    return this.getNumberAttribute('per_minute');
  }

  // per_second - computed: true, optional: false, required: false
  public get perSecond() {
    return this.getNumberAttribute('per_second');
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIp {
}

export function dataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpToHclTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // per_minute - computed: true, optional: false, required: false
  public get perMinute() {
    return this.getNumberAttribute('per_minute');
  }

  // per_second - computed: true, optional: false, required: false
  public get perSecond() {
    return this.getNumberAttribute('per_second');
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimit {
}

export function dataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitToHclTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_requests - computed: true, optional: false, required: false
  private _allRequests = new DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsList(this, "all_requests", false);
  public get allRequests() {
    return this._allRequests;
  }

  // requests_per_ip - computed: true, optional: false, required: false
  private _requestsPerIp = new DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpList(this, "requests_per_ip", false);
  public get requestsPerIp() {
    return this._requestsPerIp;
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewrite {
}

export function dataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteToHclTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }

  // substitute - computed: true, optional: false, required: false
  public get substitute() {
    return this.getStringAttribute('substitute');
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRouteHttpRouteAction {
}

export function dataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionToHclTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRouteHttpRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRouteHttpRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_host_rewrite - computed: true, optional: false, required: false
  public get autoHostRewrite() {
    return this.getBooleanAttribute('auto_host_rewrite');
  }

  // backend_group_id - computed: true, optional: false, required: false
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }

  // host_rewrite - computed: true, optional: false, required: false
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }

  // prefix_rewrite - computed: true, optional: false, required: false
  public get prefixRewrite() {
    return this.getStringAttribute('prefix_rewrite');
  }

  // rate_limit - computed: true, optional: false, required: false
  private _rateLimit = new DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitList(this, "rate_limit", false);
  public get rateLimit() {
    return this._rateLimit;
  }

  // regex_rewrite - computed: true, optional: false, required: false
  private _regexRewrite = new DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteList(this, "regex_rewrite", false);
  public get regexRewrite() {
    return this._regexRewrite;
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // upgrade_types - computed: true, optional: false, required: false
  public get upgradeTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('upgrade_types'));
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRouteRedirectAction {
}

export function dataYandexAlbVirtualHostRouteHttpRouteRedirectActionToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteHttpRouteRedirectActionToHclTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRouteRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteHttpRouteRedirectActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRouteRedirectAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRouteRedirectAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // remove_query - computed: true, optional: false, required: false
  public get removeQuery() {
    return this.getBooleanAttribute('remove_query');
  }

  // replace_host - computed: true, optional: false, required: false
  public get replaceHost() {
    return this.getStringAttribute('replace_host');
  }

  // replace_path - computed: true, optional: false, required: false
  public get replacePath() {
    return this.getStringAttribute('replace_path');
  }

  // replace_port - computed: true, optional: false, required: false
  public get replacePort() {
    return this.getNumberAttribute('replace_port');
  }

  // replace_prefix - computed: true, optional: false, required: false
  public get replacePrefix() {
    return this.getStringAttribute('replace_prefix');
  }

  // replace_scheme - computed: true, optional: false, required: false
  public get replaceScheme() {
    return this.getStringAttribute('replace_scheme');
  }

  // response_code - computed: true, optional: false, required: false
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteRedirectActionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteRedirectActionOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteRedirectActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteHttpRoute {
}

export function dataYandexAlbVirtualHostRouteHttpRouteToTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteHttpRouteToHclTerraform(struct?: DataYandexAlbVirtualHostRouteHttpRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteHttpRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteHttpRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteHttpRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direct_response_action - computed: true, optional: false, required: false
  private _directResponseAction = new DataYandexAlbVirtualHostRouteHttpRouteDirectResponseActionList(this, "direct_response_action", false);
  public get directResponseAction() {
    return this._directResponseAction;
  }

  // http_match - computed: true, optional: false, required: false
  private _httpMatch = new DataYandexAlbVirtualHostRouteHttpRouteHttpMatchList(this, "http_match", false);
  public get httpMatch() {
    return this._httpMatch;
  }

  // http_route_action - computed: true, optional: false, required: false
  private _httpRouteAction = new DataYandexAlbVirtualHostRouteHttpRouteHttpRouteActionList(this, "http_route_action", false);
  public get httpRouteAction() {
    return this._httpRouteAction;
  }

  // redirect_action - computed: true, optional: false, required: false
  private _redirectAction = new DataYandexAlbVirtualHostRouteHttpRouteRedirectActionList(this, "redirect_action", false);
  public get redirectAction() {
    return this._redirectAction;
  }
}

export class DataYandexAlbVirtualHostRouteHttpRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteHttpRouteOutputReference {
    return new DataYandexAlbVirtualHostRouteHttpRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersValue {
}

export function dataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueToTerraform(struct?: DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueToHclTerraform(struct?: DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact - computed: true, optional: false, required: false
  public get exact() {
    return this.getStringAttribute('exact');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}

export class DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueOutputReference {
    return new DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaders {
}

export function dataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersToTerraform(struct?: DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersToHclTerraform(struct?: DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaders | undefined) {
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

  // value - computed: true, optional: false, required: false
  private _value = new DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersOutputReference {
    return new DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipals {
}

export function dataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsToTerraform(struct?: DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsToHclTerraform(struct?: DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // any - computed: true, optional: false, required: false
  public get any() {
    return this.getBooleanAttribute('any');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // remote_ip - computed: true, optional: false, required: false
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
}

export class DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsOutputReference {
    return new DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipals {
}

export function dataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsToTerraform(struct?: DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsToHclTerraform(struct?: DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_principals - computed: true, optional: false, required: false
  private _andPrincipals = new DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsList(this, "and_principals", false);
  public get andPrincipals() {
    return this._andPrincipals;
  }
}

export class DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsOutputReference {
    return new DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteRouteOptionsRbac {
}

export function dataYandexAlbVirtualHostRouteRouteOptionsRbacToTerraform(struct?: DataYandexAlbVirtualHostRouteRouteOptionsRbac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteRouteOptionsRbacToHclTerraform(struct?: DataYandexAlbVirtualHostRouteRouteOptionsRbac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteRouteOptionsRbacOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteRouteOptionsRbac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteRouteOptionsRbac | undefined) {
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

  // principals - computed: true, optional: false, required: false
  private _principals = new DataYandexAlbVirtualHostRouteRouteOptionsRbacPrincipalsList(this, "principals", false);
  public get principals() {
    return this._principals;
  }
}

export class DataYandexAlbVirtualHostRouteRouteOptionsRbacList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteRouteOptionsRbacOutputReference {
    return new DataYandexAlbVirtualHostRouteRouteOptionsRbacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteRouteOptions {
}

export function dataYandexAlbVirtualHostRouteRouteOptionsToTerraform(struct?: DataYandexAlbVirtualHostRouteRouteOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteRouteOptionsToHclTerraform(struct?: DataYandexAlbVirtualHostRouteRouteOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteRouteOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteRouteOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteRouteOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rbac - computed: true, optional: false, required: false
  private _rbac = new DataYandexAlbVirtualHostRouteRouteOptionsRbacList(this, "rbac", false);
  public get rbac() {
    return this._rbac;
  }

  // security_profile_id - computed: true, optional: false, required: false
  public get securityProfileId() {
    return this.getStringAttribute('security_profile_id');
  }
}

export class DataYandexAlbVirtualHostRouteRouteOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteRouteOptionsOutputReference {
    return new DataYandexAlbVirtualHostRouteRouteOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRoute {
}

export function dataYandexAlbVirtualHostRouteToTerraform(struct?: DataYandexAlbVirtualHostRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteToHclTerraform(struct?: DataYandexAlbVirtualHostRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_security_profile - computed: true, optional: false, required: false
  public get disableSecurityProfile() {
    return this.getBooleanAttribute('disable_security_profile');
  }

  // grpc_route - computed: true, optional: false, required: false
  private _grpcRoute = new DataYandexAlbVirtualHostRouteGrpcRouteList(this, "grpc_route", false);
  public get grpcRoute() {
    return this._grpcRoute;
  }

  // http_route - computed: true, optional: false, required: false
  private _httpRoute = new DataYandexAlbVirtualHostRouteHttpRouteList(this, "http_route", false);
  public get httpRoute() {
    return this._httpRoute;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // route_options - computed: true, optional: false, required: false
  private _routeOptions = new DataYandexAlbVirtualHostRouteRouteOptionsList(this, "route_options", false);
  public get routeOptions() {
    return this._routeOptions;
  }
}

export class DataYandexAlbVirtualHostRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteOutputReference {
    return new DataYandexAlbVirtualHostRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersValue {
}

export function dataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueToTerraform(struct?: DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueToHclTerraform(struct?: DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact - computed: true, optional: false, required: false
  public get exact() {
    return this.getStringAttribute('exact');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}

export class DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueOutputReference {
    return new DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaders {
}

export function dataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersToTerraform(struct?: DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersToHclTerraform(struct?: DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaders | undefined) {
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

  // value - computed: true, optional: false, required: false
  private _value = new DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersOutputReference {
    return new DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipals {
}

export function dataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsToTerraform(struct?: DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsToHclTerraform(struct?: DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // any - computed: true, optional: false, required: false
  public get any() {
    return this.getBooleanAttribute('any');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // remote_ip - computed: true, optional: false, required: false
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
}

export class DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsOutputReference {
    return new DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteOptionsRbacPrincipals {
}

export function dataYandexAlbVirtualHostRouteOptionsRbacPrincipalsToTerraform(struct?: DataYandexAlbVirtualHostRouteOptionsRbacPrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteOptionsRbacPrincipalsToHclTerraform(struct?: DataYandexAlbVirtualHostRouteOptionsRbacPrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteOptionsRbacPrincipals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteOptionsRbacPrincipals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_principals - computed: true, optional: false, required: false
  private _andPrincipals = new DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsList(this, "and_principals", false);
  public get andPrincipals() {
    return this._andPrincipals;
  }
}

export class DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsOutputReference {
    return new DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteOptionsRbac {
}

export function dataYandexAlbVirtualHostRouteOptionsRbacToTerraform(struct?: DataYandexAlbVirtualHostRouteOptionsRbac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteOptionsRbacToHclTerraform(struct?: DataYandexAlbVirtualHostRouteOptionsRbac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteOptionsRbacOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteOptionsRbac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteOptionsRbac | undefined) {
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

  // principals - computed: true, optional: false, required: false
  private _principals = new DataYandexAlbVirtualHostRouteOptionsRbacPrincipalsList(this, "principals", false);
  public get principals() {
    return this._principals;
  }
}

export class DataYandexAlbVirtualHostRouteOptionsRbacList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteOptionsRbacOutputReference {
    return new DataYandexAlbVirtualHostRouteOptionsRbacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbVirtualHostRouteOptions {
}

export function dataYandexAlbVirtualHostRouteOptionsToTerraform(struct?: DataYandexAlbVirtualHostRouteOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbVirtualHostRouteOptionsToHclTerraform(struct?: DataYandexAlbVirtualHostRouteOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbVirtualHostRouteOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbVirtualHostRouteOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbVirtualHostRouteOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rbac - computed: true, optional: false, required: false
  private _rbac = new DataYandexAlbVirtualHostRouteOptionsRbacList(this, "rbac", false);
  public get rbac() {
    return this._rbac;
  }

  // security_profile_id - computed: true, optional: false, required: false
  public get securityProfileId() {
    return this.getStringAttribute('security_profile_id');
  }
}

export class DataYandexAlbVirtualHostRouteOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbVirtualHostRouteOptionsOutputReference {
    return new DataYandexAlbVirtualHostRouteOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/alb_virtual_host yandex_alb_virtual_host}
*/
export class DataYandexAlbVirtualHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_alb_virtual_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexAlbVirtualHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexAlbVirtualHost to import
  * @param importFromId The id of the existing DataYandexAlbVirtualHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/alb_virtual_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexAlbVirtualHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_alb_virtual_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/alb_virtual_host yandex_alb_virtual_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexAlbVirtualHostConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexAlbVirtualHostConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_alb_virtual_host',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._httpRouterId = config.httpRouterId;
    this._id = config.id;
    this._name = config.name;
    this._virtualHostId = config.virtualHostId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authority - computed: true, optional: false, required: false
  public get authority() {
    return cdktf.Fn.tolist(this.getListAttribute('authority'));
  }

  // http_router_id - computed: true, optional: true, required: false
  private _httpRouterId?: string; 
  public get httpRouterId() {
    return this.getStringAttribute('http_router_id');
  }
  public set httpRouterId(value: string) {
    this._httpRouterId = value;
  }
  public resetHttpRouterId() {
    this._httpRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouterIdInput() {
    return this._httpRouterId;
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

  // modify_request_headers - computed: true, optional: false, required: false
  private _modifyRequestHeaders = new DataYandexAlbVirtualHostModifyRequestHeadersList(this, "modify_request_headers", false);
  public get modifyRequestHeaders() {
    return this._modifyRequestHeaders;
  }

  // modify_response_headers - computed: true, optional: false, required: false
  private _modifyResponseHeaders = new DataYandexAlbVirtualHostModifyResponseHeadersList(this, "modify_response_headers", false);
  public get modifyResponseHeaders() {
    return this._modifyResponseHeaders;
  }

  // name - computed: true, optional: true, required: false
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

  // rate_limit - computed: true, optional: false, required: false
  private _rateLimit = new DataYandexAlbVirtualHostRateLimitList(this, "rate_limit", false);
  public get rateLimit() {
    return this._rateLimit;
  }

  // route - computed: true, optional: false, required: false
  private _route = new DataYandexAlbVirtualHostRouteList(this, "route", false);
  public get route() {
    return this._route;
  }

  // route_options - computed: true, optional: false, required: false
  private _routeOptions = new DataYandexAlbVirtualHostRouteOptionsList(this, "route_options", false);
  public get routeOptions() {
    return this._routeOptions;
  }

  // virtual_host_id - computed: true, optional: true, required: false
  private _virtualHostId?: string; 
  public get virtualHostId() {
    return this.getStringAttribute('virtual_host_id');
  }
  public set virtualHostId(value: string) {
    this._virtualHostId = value;
  }
  public resetVirtualHostId() {
    this._virtualHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostIdInput() {
    return this._virtualHostId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_router_id: cdktf.stringToTerraform(this._httpRouterId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      virtual_host_id: cdktf.stringToTerraform(this._virtualHostId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      http_router_id: {
        value: cdktf.stringToHclTerraform(this._httpRouterId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_host_id: {
        value: cdktf.stringToHclTerraform(this._virtualHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
