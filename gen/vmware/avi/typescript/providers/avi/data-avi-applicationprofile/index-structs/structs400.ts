import * as cdktf from 'cdktf';
import { DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostList,
DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathList,
DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileList,
DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitList,
DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitList,
DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitList,
DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitList,
DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitList,
DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitList,
DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitList,
DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsList,
DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitList,
DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitList,
DataAviApplicationprofileDosRlProfileDosProfileList } from './structs0'
export interface DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirect {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_string - computed: true, optional: false, required: false
  public get addString() {
    return this.getStringAttribute('add_string');
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }

  // keep_query - computed: true, optional: false, required: false
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
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
    return this.getStringAttribute('status_code');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitAction {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }

  // redirect - computed: true, optional: false, required: false
  private _redirect = new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiter {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // burst_sz - computed: true, optional: false, required: false
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimit {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }

  // explicit_tracking - computed: true, optional: false, required: false
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }

  // fine_grain - computed: true, optional: false, required: false
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }

  // http_cookie - computed: true, optional: false, required: false
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }

  // rate_limiter - computed: true, optional: false, required: false
  private _rateLimiter = new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfile {
}

export function dataAviApplicationprofileDosRlProfileRlProfileToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_ip_connections_rate_limit - computed: true, optional: false, required: false
  private _clientIpConnectionsRateLimit = new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitList(this, "client_ip_connections_rate_limit", true);
  public get clientIpConnectionsRateLimit() {
    return this._clientIpConnectionsRateLimit;
  }

  // client_ip_failed_requests_rate_limit - computed: true, optional: false, required: false
  private _clientIpFailedRequestsRateLimit = new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitList(this, "client_ip_failed_requests_rate_limit", true);
  public get clientIpFailedRequestsRateLimit() {
    return this._clientIpFailedRequestsRateLimit;
  }

  // client_ip_requests_rate_limit - computed: true, optional: false, required: false
  private _clientIpRequestsRateLimit = new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitList(this, "client_ip_requests_rate_limit", true);
  public get clientIpRequestsRateLimit() {
    return this._clientIpRequestsRateLimit;
  }

  // client_ip_scanners_requests_rate_limit - computed: true, optional: false, required: false
  private _clientIpScannersRequestsRateLimit = new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitList(this, "client_ip_scanners_requests_rate_limit", true);
  public get clientIpScannersRequestsRateLimit() {
    return this._clientIpScannersRequestsRateLimit;
  }

  // client_ip_to_uri_failed_requests_rate_limit - computed: true, optional: false, required: false
  private _clientIpToUriFailedRequestsRateLimit = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitList(this, "client_ip_to_uri_failed_requests_rate_limit", true);
  public get clientIpToUriFailedRequestsRateLimit() {
    return this._clientIpToUriFailedRequestsRateLimit;
  }

  // client_ip_to_uri_requests_rate_limit - computed: true, optional: false, required: false
  private _clientIpToUriRequestsRateLimit = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitList(this, "client_ip_to_uri_requests_rate_limit", true);
  public get clientIpToUriRequestsRateLimit() {
    return this._clientIpToUriRequestsRateLimit;
  }

  // custom_requests_rate_limit - computed: true, optional: false, required: false
  private _customRequestsRateLimit = new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitList(this, "custom_requests_rate_limit", true);
  public get customRequestsRateLimit() {
    return this._customRequestsRateLimit;
  }

  // http_header_rate_limits - computed: true, optional: false, required: false
  private _httpHeaderRateLimits = new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsList(this, "http_header_rate_limits", false);
  public get httpHeaderRateLimits() {
    return this._httpHeaderRateLimits;
  }

  // uri_failed_requests_rate_limit - computed: true, optional: false, required: false
  private _uriFailedRequestsRateLimit = new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitList(this, "uri_failed_requests_rate_limit", true);
  public get uriFailedRequestsRateLimit() {
    return this._uriFailedRequestsRateLimit;
  }

  // uri_requests_rate_limit - computed: true, optional: false, required: false
  private _uriRequestsRateLimit = new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitList(this, "uri_requests_rate_limit", true);
  public get uriRequestsRateLimit() {
    return this._uriRequestsRateLimit;
  }

  // uri_scanners_requests_rate_limit - computed: true, optional: false, required: false
  private _uriScannersRequestsRateLimit = new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitList(this, "uri_scanners_requests_rate_limit", true);
  public get uriScannersRequestsRateLimit() {
    return this._uriScannersRequestsRateLimit;
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfile {
}

export function dataAviApplicationprofileDosRlProfileToTerraform(struct?: DataAviApplicationprofileDosRlProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileToHclTerraform(struct?: DataAviApplicationprofileDosRlProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dos_profile - computed: true, optional: false, required: false
  private _dosProfile = new DataAviApplicationprofileDosRlProfileDosProfileList(this, "dos_profile", true);
  public get dosProfile() {
    return this._dosProfile;
  }

  // rl_profile - computed: true, optional: false, required: false
  private _rlProfile = new DataAviApplicationprofileDosRlProfileRlProfileList(this, "rl_profile", true);
  public get rlProfile() {
    return this._rlProfile;
  }
}

export class DataAviApplicationprofileDosRlProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileOutputReference {
    return new DataAviApplicationprofileDosRlProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfileCacheConfigUriNonCacheable {
}

export function dataAviApplicationprofileHttpProfileCacheConfigUriNonCacheableToTerraform(struct?: DataAviApplicationprofileHttpProfileCacheConfigUriNonCacheable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileCacheConfigUriNonCacheableToHclTerraform(struct?: DataAviApplicationprofileHttpProfileCacheConfigUriNonCacheable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileCacheConfigUriNonCacheableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfileCacheConfigUriNonCacheable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfileCacheConfigUriNonCacheable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_case - computed: true, optional: false, required: false
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }

  // match_criteria - computed: true, optional: false, required: false
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }

  // match_decoded_string - computed: true, optional: false, required: false
  public get matchDecodedString() {
    return this.getStringAttribute('match_decoded_string');
  }

  // match_str - computed: true, optional: false, required: false
  public get matchStr() {
    return this.getListAttribute('match_str');
  }

  // string_group_refs - computed: true, optional: false, required: false
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
}

export class DataAviApplicationprofileHttpProfileCacheConfigUriNonCacheableList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileCacheConfigUriNonCacheableOutputReference {
    return new DataAviApplicationprofileHttpProfileCacheConfigUriNonCacheableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfileCacheConfig {
}

export function dataAviApplicationprofileHttpProfileCacheConfigToTerraform(struct?: DataAviApplicationprofileHttpProfileCacheConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileCacheConfigToHclTerraform(struct?: DataAviApplicationprofileHttpProfileCacheConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileCacheConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfileCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfileCacheConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // age_header - computed: true, optional: false, required: false
  public get ageHeader() {
    return this.getStringAttribute('age_header');
  }

  // aggressive - computed: true, optional: false, required: false
  public get aggressive() {
    return this.getStringAttribute('aggressive');
  }

  // date_header - computed: true, optional: false, required: false
  public get dateHeader() {
    return this.getStringAttribute('date_header');
  }

  // default_expire - computed: true, optional: false, required: false
  public get defaultExpire() {
    return this.getStringAttribute('default_expire');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }

  // heuristic_expire - computed: true, optional: false, required: false
  public get heuristicExpire() {
    return this.getStringAttribute('heuristic_expire');
  }

  // ignore_request_cache_control - computed: true, optional: false, required: false
  public get ignoreRequestCacheControl() {
    return this.getStringAttribute('ignore_request_cache_control');
  }

  // max_cache_size - computed: true, optional: false, required: false
  public get maxCacheSize() {
    return this.getStringAttribute('max_cache_size');
  }

  // max_object_size - computed: true, optional: false, required: false
  public get maxObjectSize() {
    return this.getStringAttribute('max_object_size');
  }

  // mime_types_block_group_refs - computed: true, optional: false, required: false
  public get mimeTypesBlockGroupRefs() {
    return this.getListAttribute('mime_types_block_group_refs');
  }

  // mime_types_block_lists - computed: true, optional: false, required: false
  public get mimeTypesBlockLists() {
    return this.getListAttribute('mime_types_block_lists');
  }

  // mime_types_group_refs - computed: true, optional: false, required: false
  public get mimeTypesGroupRefs() {
    return this.getListAttribute('mime_types_group_refs');
  }

  // mime_types_list - computed: true, optional: false, required: false
  public get mimeTypesList() {
    return this.getListAttribute('mime_types_list');
  }

  // min_object_size - computed: true, optional: false, required: false
  public get minObjectSize() {
    return this.getStringAttribute('min_object_size');
  }

  // query_cacheable - computed: true, optional: false, required: false
  public get queryCacheable() {
    return this.getStringAttribute('query_cacheable');
  }

  // uri_non_cacheable - computed: true, optional: false, required: false
  private _uriNonCacheable = new DataAviApplicationprofileHttpProfileCacheConfigUriNonCacheableList(this, "uri_non_cacheable", true);
  public get uriNonCacheable() {
    return this._uriNonCacheable;
  }

  // xcache_header - computed: true, optional: false, required: false
  public get xcacheHeader() {
    return this.getStringAttribute('xcache_header');
  }
}

export class DataAviApplicationprofileHttpProfileCacheConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileCacheConfigOutputReference {
    return new DataAviApplicationprofileHttpProfileCacheConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddr {
}

export function dataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrToTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrToHclTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrOutputReference {
    return new DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixes {
}

export function dataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesToTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesToHclTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesOutputReference {
    return new DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBegin {
}

export function dataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginToTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginToHclTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBegin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBegin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginOutputReference {
    return new DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEnd {
}

export function dataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndToTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndToHclTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEnd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEnd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndOutputReference {
    return new DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRanges {
}

export function dataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesToTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesToHclTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin - computed: true, optional: false, required: false
  private _begin = new DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }

  // end - computed: true, optional: false, required: false
  private _end = new DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
}

export class DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesOutputReference {
    return new DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrs {
}

export function dataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrsToTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrsToHclTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrsOutputReference {
    return new DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfileCompressionProfileFilter {
}

export function dataAviApplicationprofileHttpProfileCompressionProfileFilterToTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfileFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileCompressionProfileFilterToHclTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfileFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileCompressionProfileFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfileCompressionProfileFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfileCompressionProfileFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // devices_ref - computed: true, optional: false, required: false
  public get devicesRef() {
    return this.getStringAttribute('devices_ref');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // ip_addr_prefixes - computed: true, optional: false, required: false
  private _ipAddrPrefixes = new DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesList(this, "ip_addr_prefixes", false);
  public get ipAddrPrefixes() {
    return this._ipAddrPrefixes;
  }

  // ip_addr_ranges - computed: true, optional: false, required: false
  private _ipAddrRanges = new DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesList(this, "ip_addr_ranges", false);
  public get ipAddrRanges() {
    return this._ipAddrRanges;
  }

  // ip_addrs - computed: true, optional: false, required: false
  private _ipAddrs = new DataAviApplicationprofileHttpProfileCompressionProfileFilterIpAddrsList(this, "ip_addrs", false);
  public get ipAddrs() {
    return this._ipAddrs;
  }

  // ip_addrs_ref - computed: true, optional: false, required: false
  public get ipAddrsRef() {
    return this.getStringAttribute('ip_addrs_ref');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // user_agent - computed: true, optional: false, required: false
  public get userAgent() {
    return this.getListAttribute('user_agent');
  }
}

export class DataAviApplicationprofileHttpProfileCompressionProfileFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileCompressionProfileFilterOutputReference {
    return new DataAviApplicationprofileHttpProfileCompressionProfileFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfileCompressionProfile {
}

export function dataAviApplicationprofileHttpProfileCompressionProfileToTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileCompressionProfileToHclTerraform(struct?: DataAviApplicationprofileHttpProfileCompressionProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileCompressionProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfileCompressionProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfileCompressionProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buf_num - computed: true, optional: false, required: false
  public get bufNum() {
    return this.getStringAttribute('buf_num');
  }

  // buf_size - computed: true, optional: false, required: false
  public get bufSize() {
    return this.getStringAttribute('buf_size');
  }

  // compressible_content_ref - computed: true, optional: false, required: false
  public get compressibleContentRef() {
    return this.getStringAttribute('compressible_content_ref');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAviApplicationprofileHttpProfileCompressionProfileFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }

  // hash_size - computed: true, optional: false, required: false
  public get hashSize() {
    return this.getStringAttribute('hash_size');
  }

  // level_aggressive - computed: true, optional: false, required: false
  public get levelAggressive() {
    return this.getStringAttribute('level_aggressive');
  }

  // level_normal - computed: true, optional: false, required: false
  public get levelNormal() {
    return this.getStringAttribute('level_normal');
  }

  // max_low_rtt - computed: true, optional: false, required: false
  public get maxLowRtt() {
    return this.getStringAttribute('max_low_rtt');
  }

  // min_high_rtt - computed: true, optional: false, required: false
  public get minHighRtt() {
    return this.getStringAttribute('min_high_rtt');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getStringAttribute('min_length');
  }

  // mobile_str_ref - computed: true, optional: false, required: false
  public get mobileStrRef() {
    return this.getStringAttribute('mobile_str_ref');
  }

  // remove_accept_encoding_header - computed: true, optional: false, required: false
  public get removeAcceptEncodingHeader() {
    return this.getStringAttribute('remove_accept_encoding_header');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // window_size - computed: true, optional: false, required: false
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
}

export class DataAviApplicationprofileHttpProfileCompressionProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileCompressionProfileOutputReference {
    return new DataAviApplicationprofileHttpProfileCompressionProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfileHttp2Profile {
}

export function dataAviApplicationprofileHttpProfileHttp2ProfileToTerraform(struct?: DataAviApplicationprofileHttpProfileHttp2Profile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileHttp2ProfileToHclTerraform(struct?: DataAviApplicationprofileHttpProfileHttp2Profile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileHttp2ProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfileHttp2Profile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfileHttp2Profile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_http2_server_push - computed: true, optional: false, required: false
  public get enableHttp2ServerPush() {
    return this.getStringAttribute('enable_http2_server_push');
  }

  // http2_initial_window_size - computed: true, optional: false, required: false
  public get http2InitialWindowSize() {
    return this.getStringAttribute('http2_initial_window_size');
  }

  // max_http2_concurrent_pushes_per_connection - computed: true, optional: false, required: false
  public get maxHttp2ConcurrentPushesPerConnection() {
    return this.getStringAttribute('max_http2_concurrent_pushes_per_connection');
  }

  // max_http2_concurrent_streams_per_connection - computed: true, optional: false, required: false
  public get maxHttp2ConcurrentStreamsPerConnection() {
    return this.getStringAttribute('max_http2_concurrent_streams_per_connection');
  }

  // max_http2_control_frames_per_connection - computed: true, optional: false, required: false
  public get maxHttp2ControlFramesPerConnection() {
    return this.getStringAttribute('max_http2_control_frames_per_connection');
  }

  // max_http2_empty_data_frames_per_connection - computed: true, optional: false, required: false
  public get maxHttp2EmptyDataFramesPerConnection() {
    return this.getStringAttribute('max_http2_empty_data_frames_per_connection');
  }

  // max_http2_header_field_size - computed: true, optional: false, required: false
  public get maxHttp2HeaderFieldSize() {
    return this.getStringAttribute('max_http2_header_field_size');
  }

  // max_http2_queued_frames_to_client_per_connection - computed: true, optional: false, required: false
  public get maxHttp2QueuedFramesToClientPerConnection() {
    return this.getStringAttribute('max_http2_queued_frames_to_client_per_connection');
  }

  // max_http2_requests_per_connection - computed: true, optional: false, required: false
  public get maxHttp2RequestsPerConnection() {
    return this.getStringAttribute('max_http2_requests_per_connection');
  }
}

export class DataAviApplicationprofileHttpProfileHttp2ProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileHttp2ProfileOutputReference {
    return new DataAviApplicationprofileHttpProfileHttp2ProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfileSessionConfig {
}

export function dataAviApplicationprofileHttpProfileSessionConfigToTerraform(struct?: DataAviApplicationprofileHttpProfileSessionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileSessionConfigToHclTerraform(struct?: DataAviApplicationprofileHttpProfileSessionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileSessionConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfileSessionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfileSessionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // session_cookie_httponly - computed: true, optional: false, required: false
  public get sessionCookieHttponly() {
    return this.getStringAttribute('session_cookie_httponly');
  }

  // session_cookie_name - computed: true, optional: false, required: false
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }

  // session_cookie_samesite - computed: true, optional: false, required: false
  public get sessionCookieSamesite() {
    return this.getStringAttribute('session_cookie_samesite');
  }

  // session_cookie_secure - computed: true, optional: false, required: false
  public get sessionCookieSecure() {
    return this.getStringAttribute('session_cookie_secure');
  }

  // session_establishment_timeout - computed: true, optional: false, required: false
  public get sessionEstablishmentTimeout() {
    return this.getStringAttribute('session_establishment_timeout');
  }

  // session_idle_timeout - computed: true, optional: false, required: false
  public get sessionIdleTimeout() {
    return this.getStringAttribute('session_idle_timeout');
  }

  // session_maximum_timeout - computed: true, optional: false, required: false
  public get sessionMaximumTimeout() {
    return this.getStringAttribute('session_maximum_timeout');
  }
}

export class DataAviApplicationprofileHttpProfileSessionConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileSessionConfigOutputReference {
    return new DataAviApplicationprofileHttpProfileSessionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfileSslClientCertificateActionHeaders {
}

export function dataAviApplicationprofileHttpProfileSslClientCertificateActionHeadersToTerraform(struct?: DataAviApplicationprofileHttpProfileSslClientCertificateActionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileSslClientCertificateActionHeadersToHclTerraform(struct?: DataAviApplicationprofileHttpProfileSslClientCertificateActionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileSslClientCertificateActionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfileSslClientCertificateActionHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfileSslClientCertificateActionHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // request_header - computed: true, optional: false, required: false
  public get requestHeader() {
    return this.getStringAttribute('request_header');
  }

  // request_header_value - computed: true, optional: false, required: false
  public get requestHeaderValue() {
    return this.getStringAttribute('request_header_value');
  }
}

export class DataAviApplicationprofileHttpProfileSslClientCertificateActionHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileSslClientCertificateActionHeadersOutputReference {
    return new DataAviApplicationprofileHttpProfileSslClientCertificateActionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfileSslClientCertificateAction {
}

export function dataAviApplicationprofileHttpProfileSslClientCertificateActionToTerraform(struct?: DataAviApplicationprofileHttpProfileSslClientCertificateAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileSslClientCertificateActionToHclTerraform(struct?: DataAviApplicationprofileHttpProfileSslClientCertificateAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileSslClientCertificateActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfileSslClientCertificateAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfileSslClientCertificateAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // close_connection - computed: true, optional: false, required: false
  public get closeConnection() {
    return this.getStringAttribute('close_connection');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataAviApplicationprofileHttpProfileSslClientCertificateActionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
}

export class DataAviApplicationprofileHttpProfileSslClientCertificateActionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileSslClientCertificateActionOutputReference {
    return new DataAviApplicationprofileHttpProfileSslClientCertificateActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfileTrueClientIp {
}

export function dataAviApplicationprofileHttpProfileTrueClientIpToTerraform(struct?: DataAviApplicationprofileHttpProfileTrueClientIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileTrueClientIpToHclTerraform(struct?: DataAviApplicationprofileHttpProfileTrueClientIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileTrueClientIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfileTrueClientIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfileTrueClientIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return this.getListAttribute('headers');
  }

  // index_in_header - computed: true, optional: false, required: false
  public get indexInHeader() {
    return this.getStringAttribute('index_in_header');
  }
}

export class DataAviApplicationprofileHttpProfileTrueClientIpList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileTrueClientIpOutputReference {
    return new DataAviApplicationprofileHttpProfileTrueClientIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileHttpProfile {
}

export function dataAviApplicationprofileHttpProfileToTerraform(struct?: DataAviApplicationprofileHttpProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileHttpProfileToHclTerraform(struct?: DataAviApplicationprofileHttpProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileHttpProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileHttpProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileHttpProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_dots_in_header_name - computed: true, optional: false, required: false
  public get allowDotsInHeaderName() {
    return this.getStringAttribute('allow_dots_in_header_name');
  }

  // cache_config - computed: true, optional: false, required: false
  private _cacheConfig = new DataAviApplicationprofileHttpProfileCacheConfigList(this, "cache_config", true);
  public get cacheConfig() {
    return this._cacheConfig;
  }

  // client_body_timeout - computed: true, optional: false, required: false
  public get clientBodyTimeout() {
    return this.getStringAttribute('client_body_timeout');
  }

  // client_header_timeout - computed: true, optional: false, required: false
  public get clientHeaderTimeout() {
    return this.getStringAttribute('client_header_timeout');
  }

  // client_max_body_size - computed: true, optional: false, required: false
  public get clientMaxBodySize() {
    return this.getStringAttribute('client_max_body_size');
  }

  // client_max_header_size - computed: true, optional: false, required: false
  public get clientMaxHeaderSize() {
    return this.getStringAttribute('client_max_header_size');
  }

  // client_max_request_size - computed: true, optional: false, required: false
  public get clientMaxRequestSize() {
    return this.getStringAttribute('client_max_request_size');
  }

  // close_server_side_connection_on_error - computed: true, optional: false, required: false
  public get closeServerSideConnectionOnError() {
    return this.getStringAttribute('close_server_side_connection_on_error');
  }

  // collect_client_tls_fingerprint - computed: true, optional: false, required: false
  public get collectClientTlsFingerprint() {
    return this.getStringAttribute('collect_client_tls_fingerprint');
  }

  // compression_profile - computed: true, optional: false, required: false
  private _compressionProfile = new DataAviApplicationprofileHttpProfileCompressionProfileList(this, "compression_profile", true);
  public get compressionProfile() {
    return this._compressionProfile;
  }

  // connection_multiplexing_enabled - computed: true, optional: false, required: false
  public get connectionMultiplexingEnabled() {
    return this.getStringAttribute('connection_multiplexing_enabled');
  }

  // detect_ntlm_app - computed: true, optional: false, required: false
  public get detectNtlmApp() {
    return this.getStringAttribute('detect_ntlm_app');
  }

  // disable_keepalive_posts_msie6 - computed: true, optional: false, required: false
  public get disableKeepalivePostsMsie6() {
    return this.getStringAttribute('disable_keepalive_posts_msie6');
  }

  // disable_sni_hostname_check - computed: true, optional: false, required: false
  public get disableSniHostnameCheck() {
    return this.getStringAttribute('disable_sni_hostname_check');
  }

  // enable_chunk_merge - computed: true, optional: false, required: false
  public get enableChunkMerge() {
    return this.getStringAttribute('enable_chunk_merge');
  }

  // enable_fire_and_forget - computed: true, optional: false, required: false
  public get enableFireAndForget() {
    return this.getStringAttribute('enable_fire_and_forget');
  }

  // enable_request_body_buffering - computed: true, optional: false, required: false
  public get enableRequestBodyBuffering() {
    return this.getStringAttribute('enable_request_body_buffering');
  }

  // enable_request_body_metrics - computed: true, optional: false, required: false
  public get enableRequestBodyMetrics() {
    return this.getStringAttribute('enable_request_body_metrics');
  }

  // fwd_close_hdr_for_bound_connections - computed: true, optional: false, required: false
  public get fwdCloseHdrForBoundConnections() {
    return this.getStringAttribute('fwd_close_hdr_for_bound_connections');
  }

  // hsts_enabled - computed: true, optional: false, required: false
  public get hstsEnabled() {
    return this.getStringAttribute('hsts_enabled');
  }

  // hsts_max_age - computed: true, optional: false, required: false
  public get hstsMaxAge() {
    return this.getStringAttribute('hsts_max_age');
  }

  // hsts_subdomains_enabled - computed: true, optional: false, required: false
  public get hstsSubdomainsEnabled() {
    return this.getStringAttribute('hsts_subdomains_enabled');
  }

  // http2_profile - computed: true, optional: false, required: false
  private _http2Profile = new DataAviApplicationprofileHttpProfileHttp2ProfileList(this, "http2_profile", true);
  public get http2Profile() {
    return this._http2Profile;
  }

  // http_to_https - computed: true, optional: false, required: false
  public get httpToHttps() {
    return this.getStringAttribute('http_to_https');
  }

  // http_upstream_buffer_size - computed: true, optional: false, required: false
  public get httpUpstreamBufferSize() {
    return this.getStringAttribute('http_upstream_buffer_size');
  }

  // httponly_enabled - computed: true, optional: false, required: false
  public get httponlyEnabled() {
    return this.getStringAttribute('httponly_enabled');
  }

  // keepalive_header - computed: true, optional: false, required: false
  public get keepaliveHeader() {
    return this.getStringAttribute('keepalive_header');
  }

  // keepalive_timeout - computed: true, optional: false, required: false
  public get keepaliveTimeout() {
    return this.getStringAttribute('keepalive_timeout');
  }

  // max_bad_rps_cip - computed: true, optional: false, required: false
  public get maxBadRpsCip() {
    return this.getStringAttribute('max_bad_rps_cip');
  }

  // max_bad_rps_cip_uri - computed: true, optional: false, required: false
  public get maxBadRpsCipUri() {
    return this.getStringAttribute('max_bad_rps_cip_uri');
  }

  // max_bad_rps_uri - computed: true, optional: false, required: false
  public get maxBadRpsUri() {
    return this.getStringAttribute('max_bad_rps_uri');
  }

  // max_header_count - computed: true, optional: false, required: false
  public get maxHeaderCount() {
    return this.getStringAttribute('max_header_count');
  }

  // max_keepalive_requests - computed: true, optional: false, required: false
  public get maxKeepaliveRequests() {
    return this.getStringAttribute('max_keepalive_requests');
  }

  // max_response_headers_size - computed: true, optional: false, required: false
  public get maxResponseHeadersSize() {
    return this.getStringAttribute('max_response_headers_size');
  }

  // max_rps_cip - computed: true, optional: false, required: false
  public get maxRpsCip() {
    return this.getStringAttribute('max_rps_cip');
  }

  // max_rps_cip_uri - computed: true, optional: false, required: false
  public get maxRpsCipUri() {
    return this.getStringAttribute('max_rps_cip_uri');
  }

  // max_rps_unknown_cip - computed: true, optional: false, required: false
  public get maxRpsUnknownCip() {
    return this.getStringAttribute('max_rps_unknown_cip');
  }

  // max_rps_unknown_uri - computed: true, optional: false, required: false
  public get maxRpsUnknownUri() {
    return this.getStringAttribute('max_rps_unknown_uri');
  }

  // max_rps_uri - computed: true, optional: false, required: false
  public get maxRpsUri() {
    return this.getStringAttribute('max_rps_uri');
  }

  // pass_through_x_accel_headers - computed: true, optional: false, required: false
  public get passThroughXAccelHeaders() {
    return this.getStringAttribute('pass_through_x_accel_headers');
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // post_accept_timeout - computed: true, optional: false, required: false
  public get postAcceptTimeout() {
    return this.getStringAttribute('post_accept_timeout');
  }

  // reset_conn_http_on_ssl_port - computed: true, optional: false, required: false
  public get resetConnHttpOnSslPort() {
    return this.getStringAttribute('reset_conn_http_on_ssl_port');
  }

  // respond_with_100_continue - computed: true, optional: false, required: false
  public get respondWith100Continue() {
    return this.getStringAttribute('respond_with_100_continue');
  }

  // secure_cookie_enabled - computed: true, optional: false, required: false
  public get secureCookieEnabled() {
    return this.getStringAttribute('secure_cookie_enabled');
  }

  // server_side_redirect_to_https - computed: true, optional: false, required: false
  public get serverSideRedirectToHttps() {
    return this.getStringAttribute('server_side_redirect_to_https');
  }

  // session_config - computed: true, optional: false, required: false
  private _sessionConfig = new DataAviApplicationprofileHttpProfileSessionConfigList(this, "session_config", true);
  public get sessionConfig() {
    return this._sessionConfig;
  }

  // ssl_client_certificate_action - computed: true, optional: false, required: false
  private _sslClientCertificateAction = new DataAviApplicationprofileHttpProfileSslClientCertificateActionList(this, "ssl_client_certificate_action", true);
  public get sslClientCertificateAction() {
    return this._sslClientCertificateAction;
  }

  // ssl_client_certificate_mode - computed: true, optional: false, required: false
  public get sslClientCertificateMode() {
    return this.getStringAttribute('ssl_client_certificate_mode');
  }

  // true_client_ip - computed: true, optional: false, required: false
  private _trueClientIp = new DataAviApplicationprofileHttpProfileTrueClientIpList(this, "true_client_ip", true);
  public get trueClientIp() {
    return this._trueClientIp;
  }

  // use_app_keepalive_timeout - computed: true, optional: false, required: false
  public get useAppKeepaliveTimeout() {
    return this.getStringAttribute('use_app_keepalive_timeout');
  }

  // use_true_client_ip - computed: true, optional: false, required: false
  public get useTrueClientIp() {
    return this.getStringAttribute('use_true_client_ip');
  }

  // websockets_enabled - computed: true, optional: false, required: false
  public get websocketsEnabled() {
    return this.getStringAttribute('websockets_enabled');
  }

  // x_forwarded_proto_enabled - computed: true, optional: false, required: false
  public get xForwardedProtoEnabled() {
    return this.getStringAttribute('x_forwarded_proto_enabled');
  }

  // xff_alternate_name - computed: true, optional: false, required: false
  public get xffAlternateName() {
    return this.getStringAttribute('xff_alternate_name');
  }

  // xff_enabled - computed: true, optional: false, required: false
  public get xffEnabled() {
    return this.getStringAttribute('xff_enabled');
  }

  // xff_update - computed: true, optional: false, required: false
  public get xffUpdate() {
    return this.getStringAttribute('xff_update');
  }
}

export class DataAviApplicationprofileHttpProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileHttpProfileOutputReference {
    return new DataAviApplicationprofileHttpProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileL4SslProfile {
}

export function dataAviApplicationprofileL4SslProfileToTerraform(struct?: DataAviApplicationprofileL4SslProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileL4SslProfileToHclTerraform(struct?: DataAviApplicationprofileL4SslProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileL4SslProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileL4SslProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileL4SslProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssl_stream_idle_timeout - computed: true, optional: false, required: false
  public get sslStreamIdleTimeout() {
    return this.getStringAttribute('ssl_stream_idle_timeout');
  }
}

export class DataAviApplicationprofileL4SslProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileL4SslProfileOutputReference {
    return new DataAviApplicationprofileL4SslProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileMarkers {
}

export function dataAviApplicationprofileMarkersToTerraform(struct?: DataAviApplicationprofileMarkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileMarkersToHclTerraform(struct?: DataAviApplicationprofileMarkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileMarkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileMarkers | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAviApplicationprofileMarkersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileMarkersOutputReference {
    return new DataAviApplicationprofileMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileSipServiceProfile {
}

export function dataAviApplicationprofileSipServiceProfileToTerraform(struct?: DataAviApplicationprofileSipServiceProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileSipServiceProfileToHclTerraform(struct?: DataAviApplicationprofileSipServiceProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileSipServiceProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileSipServiceProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileSipServiceProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // transaction_timeout - computed: true, optional: false, required: false
  public get transactionTimeout() {
    return this.getStringAttribute('transaction_timeout');
  }
}

export class DataAviApplicationprofileSipServiceProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileSipServiceProfileOutputReference {
    return new DataAviApplicationprofileSipServiceProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileTcpAppProfileFtpProfile {
}

export function dataAviApplicationprofileTcpAppProfileFtpProfileToTerraform(struct?: DataAviApplicationprofileTcpAppProfileFtpProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileTcpAppProfileFtpProfileToHclTerraform(struct?: DataAviApplicationprofileTcpAppProfileFtpProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileTcpAppProfileFtpProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileTcpAppProfileFtpProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileTcpAppProfileFtpProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deactivate_active - computed: true, optional: false, required: false
  public get deactivateActive() {
    return this.getStringAttribute('deactivate_active');
  }

  // deactivate_passive - computed: true, optional: false, required: false
  public get deactivatePassive() {
    return this.getStringAttribute('deactivate_passive');
  }
}

export class DataAviApplicationprofileTcpAppProfileFtpProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileTcpAppProfileFtpProfileOutputReference {
    return new DataAviApplicationprofileTcpAppProfileFtpProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileTcpAppProfile {
}

export function dataAviApplicationprofileTcpAppProfileToTerraform(struct?: DataAviApplicationprofileTcpAppProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileTcpAppProfileToHclTerraform(struct?: DataAviApplicationprofileTcpAppProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileTcpAppProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileTcpAppProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileTcpAppProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ftp_profile - computed: true, optional: false, required: false
  private _ftpProfile = new DataAviApplicationprofileTcpAppProfileFtpProfileList(this, "ftp_profile", true);
  public get ftpProfile() {
    return this._ftpProfile;
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // proxy_protocol_enabled - computed: true, optional: false, required: false
  public get proxyProtocolEnabled() {
    return this.getStringAttribute('proxy_protocol_enabled');
  }

  // proxy_protocol_version - computed: true, optional: false, required: false
  public get proxyProtocolVersion() {
    return this.getStringAttribute('proxy_protocol_version');
  }

  // ssl_client_certificate_mode - computed: true, optional: false, required: false
  public get sslClientCertificateMode() {
    return this.getStringAttribute('ssl_client_certificate_mode');
  }
}

export class DataAviApplicationprofileTcpAppProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileTcpAppProfileOutputReference {
    return new DataAviApplicationprofileTcpAppProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
