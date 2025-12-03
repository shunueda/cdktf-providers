// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TseCngwRouteRateLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * gateway ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#gateway_id TseCngwRouteRateLimit#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#id TseCngwRouteRateLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Route id, or route name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#route_id TseCngwRouteRateLimit#route_id}
  */
  readonly routeId: string;
  /**
  * limit_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#limit_detail TseCngwRouteRateLimit#limit_detail}
  */
  readonly limitDetail: TseCngwRouteRateLimitLimitDetail;
}
export interface TseCngwRouteRateLimitLimitDetailExternalRedis {
  /**
  * redis ip, maybe null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#redis_host TseCngwRouteRateLimit#redis_host}
  */
  readonly redisHost: string;
  /**
  * redis password, maybe null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#redis_password TseCngwRouteRateLimit#redis_password}
  */
  readonly redisPassword: string;
  /**
  * redis port, maybe null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#redis_port TseCngwRouteRateLimit#redis_port}
  */
  readonly redisPort: number;
  /**
  * redis timeout, unit: `ms`, maybe null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#redis_timeout TseCngwRouteRateLimit#redis_timeout}
  */
  readonly redisTimeout: number;
}

export function tseCngwRouteRateLimitLimitDetailExternalRedisToTerraform(struct?: TseCngwRouteRateLimitLimitDetailExternalRedisOutputReference | TseCngwRouteRateLimitLimitDetailExternalRedis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redis_host: cdktf.stringToTerraform(struct!.redisHost),
    redis_password: cdktf.stringToTerraform(struct!.redisPassword),
    redis_port: cdktf.numberToTerraform(struct!.redisPort),
    redis_timeout: cdktf.numberToTerraform(struct!.redisTimeout),
  }
}


export function tseCngwRouteRateLimitLimitDetailExternalRedisToHclTerraform(struct?: TseCngwRouteRateLimitLimitDetailExternalRedisOutputReference | TseCngwRouteRateLimitLimitDetailExternalRedis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redis_host: {
      value: cdktf.stringToHclTerraform(struct!.redisHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redis_password: {
      value: cdktf.stringToHclTerraform(struct!.redisPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redis_port: {
      value: cdktf.numberToHclTerraform(struct!.redisPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redis_timeout: {
      value: cdktf.numberToHclTerraform(struct!.redisTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwRouteRateLimitLimitDetailExternalRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwRouteRateLimitLimitDetailExternalRedis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redisHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisHost = this._redisHost;
    }
    if (this._redisPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisPassword = this._redisPassword;
    }
    if (this._redisPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisPort = this._redisPort;
    }
    if (this._redisTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisTimeout = this._redisTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwRouteRateLimitLimitDetailExternalRedis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redisHost = undefined;
      this._redisPassword = undefined;
      this._redisPort = undefined;
      this._redisTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redisHost = value.redisHost;
      this._redisPassword = value.redisPassword;
      this._redisPort = value.redisPort;
      this._redisTimeout = value.redisTimeout;
    }
  }

  // redis_host - computed: false, optional: false, required: true
  private _redisHost?: string; 
  public get redisHost() {
    return this.getStringAttribute('redis_host');
  }
  public set redisHost(value: string) {
    this._redisHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisHostInput() {
    return this._redisHost;
  }

  // redis_password - computed: false, optional: false, required: true
  private _redisPassword?: string; 
  public get redisPassword() {
    return this.getStringAttribute('redis_password');
  }
  public set redisPassword(value: string) {
    this._redisPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisPasswordInput() {
    return this._redisPassword;
  }

  // redis_port - computed: false, optional: false, required: true
  private _redisPort?: number; 
  public get redisPort() {
    return this.getNumberAttribute('redis_port');
  }
  public set redisPort(value: number) {
    this._redisPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisPortInput() {
    return this._redisPort;
  }

  // redis_timeout - computed: false, optional: false, required: true
  private _redisTimeout?: number; 
  public get redisTimeout() {
    return this.getNumberAttribute('redis_timeout');
  }
  public set redisTimeout(value: number) {
    this._redisTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisTimeoutInput() {
    return this._redisTimeout;
  }
}
export interface TseCngwRouteRateLimitLimitDetailQpsThresholds {
  /**
  * the max threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#max TseCngwRouteRateLimit#max}
  */
  readonly max: number;
  /**
  * qps threshold unit.Reference value:`second`,`minute`,`hour`,`day`,`month`,`year`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#unit TseCngwRouteRateLimit#unit}
  */
  readonly unit: string;
}

export function tseCngwRouteRateLimitLimitDetailQpsThresholdsToTerraform(struct?: TseCngwRouteRateLimitLimitDetailQpsThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function tseCngwRouteRateLimitLimitDetailQpsThresholdsToHclTerraform(struct?: TseCngwRouteRateLimitLimitDetailQpsThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwRouteRateLimitLimitDetailQpsThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TseCngwRouteRateLimitLimitDetailQpsThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwRouteRateLimitLimitDetailQpsThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._unit = value.unit;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class TseCngwRouteRateLimitLimitDetailQpsThresholdsList extends cdktf.ComplexList {
  public internalValue? : TseCngwRouteRateLimitLimitDetailQpsThresholds[] | cdktf.IResolvable

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
  public get(index: number): TseCngwRouteRateLimitLimitDetailQpsThresholdsOutputReference {
    return new TseCngwRouteRateLimitLimitDetailQpsThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TseCngwRouteRateLimitLimitDetailRateLimitResponseHeaders {
  /**
  * key of header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#key TseCngwRouteRateLimit#key}
  */
  readonly key?: string;
  /**
  * value of header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#value TseCngwRouteRateLimit#value}
  */
  readonly value?: string;
}

export function tseCngwRouteRateLimitLimitDetailRateLimitResponseHeadersToTerraform(struct?: TseCngwRouteRateLimitLimitDetailRateLimitResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function tseCngwRouteRateLimitLimitDetailRateLimitResponseHeadersToHclTerraform(struct?: TseCngwRouteRateLimitLimitDetailRateLimitResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwRouteRateLimitLimitDetailRateLimitResponseHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TseCngwRouteRateLimitLimitDetailRateLimitResponseHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwRouteRateLimitLimitDetailRateLimitResponseHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TseCngwRouteRateLimitLimitDetailRateLimitResponseHeadersList extends cdktf.ComplexList {
  public internalValue? : TseCngwRouteRateLimitLimitDetailRateLimitResponseHeaders[] | cdktf.IResolvable

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
  public get(index: number): TseCngwRouteRateLimitLimitDetailRateLimitResponseHeadersOutputReference {
    return new TseCngwRouteRateLimitLimitDetailRateLimitResponseHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TseCngwRouteRateLimitLimitDetailRateLimitResponse {
  /**
  * custom response body, maybe bull.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#body TseCngwRouteRateLimit#body}
  */
  readonly body?: string;
  /**
  * http status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#http_status TseCngwRouteRateLimit#http_status}
  */
  readonly httpStatus?: number;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#headers TseCngwRouteRateLimit#headers}
  */
  readonly headers?: TseCngwRouteRateLimitLimitDetailRateLimitResponseHeaders[] | cdktf.IResolvable;
}

export function tseCngwRouteRateLimitLimitDetailRateLimitResponseToTerraform(struct?: TseCngwRouteRateLimitLimitDetailRateLimitResponseOutputReference | TseCngwRouteRateLimitLimitDetailRateLimitResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    headers: cdktf.listMapper(tseCngwRouteRateLimitLimitDetailRateLimitResponseHeadersToTerraform, true)(struct!.headers),
  }
}


export function tseCngwRouteRateLimitLimitDetailRateLimitResponseToHclTerraform(struct?: TseCngwRouteRateLimitLimitDetailRateLimitResponseOutputReference | TseCngwRouteRateLimitLimitDetailRateLimitResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_status: {
      value: cdktf.numberToHclTerraform(struct!.httpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(tseCngwRouteRateLimitLimitDetailRateLimitResponseHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "TseCngwRouteRateLimitLimitDetailRateLimitResponseHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwRouteRateLimitLimitDetailRateLimitResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwRouteRateLimitLimitDetailRateLimitResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._httpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatus = this._httpStatus;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwRouteRateLimitLimitDetailRateLimitResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._httpStatus = undefined;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._httpStatus = value.httpStatus;
      this._headers.internalValue = value.headers;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // http_status - computed: false, optional: true, required: false
  private _httpStatus?: number; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number) {
    this._httpStatus = value;
  }
  public resetHttpStatus() {
    this._httpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new TseCngwRouteRateLimitLimitDetailRateLimitResponseHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: TseCngwRouteRateLimitLimitDetailRateLimitResponseHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface TseCngwRouteRateLimitLimitDetail {
  /**
  * status of service rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#enabled TseCngwRouteRateLimit#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * request headers that require rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#header TseCngwRouteRateLimit#header}
  */
  readonly header?: string;
  /**
  * whether to hide the headers of client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#hide_client_headers TseCngwRouteRateLimit#hide_client_headers}
  */
  readonly hideClientHeaders: boolean | cdktf.IResolvable;
  /**
  * whether to enable request queuing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#is_delay TseCngwRouteRateLimit#is_delay}
  */
  readonly isDelay: boolean | cdktf.IResolvable;
  /**
  * basis for service rate limit.Reference value:`ip`,`service`,`consumer`,`credential`,`path`,`header`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#limit_by TseCngwRouteRateLimit#limit_by}
  */
  readonly limitBy: string;
  /**
  * queue time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#line_up_time TseCngwRouteRateLimit#line_up_time}
  */
  readonly lineUpTime?: number;
  /**
  * request paths that require rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#path TseCngwRouteRateLimit#path}
  */
  readonly path?: string;
  /**
  * counter policy.Reference value:`local`,`redis`,`external_redis`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#policy TseCngwRouteRateLimit#policy}
  */
  readonly policy?: string;
  /**
  * request forwarding address, maybe null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#rate_limit_response_url TseCngwRouteRateLimit#rate_limit_response_url}
  */
  readonly rateLimitResponseUrl?: string;
  /**
  * response strategy.Reference value:`url`: forward request according to url,`text`: response configuration,`default`: return directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#response_type TseCngwRouteRateLimit#response_type}
  */
  readonly responseType: string;
  /**
  * external_redis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#external_redis TseCngwRouteRateLimit#external_redis}
  */
  readonly externalRedis?: TseCngwRouteRateLimitLimitDetailExternalRedis;
  /**
  * qps_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#qps_thresholds TseCngwRouteRateLimit#qps_thresholds}
  */
  readonly qpsThresholds: TseCngwRouteRateLimitLimitDetailQpsThresholds[] | cdktf.IResolvable;
  /**
  * rate_limit_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#rate_limit_response TseCngwRouteRateLimit#rate_limit_response}
  */
  readonly rateLimitResponse?: TseCngwRouteRateLimitLimitDetailRateLimitResponse;
}

export function tseCngwRouteRateLimitLimitDetailToTerraform(struct?: TseCngwRouteRateLimitLimitDetailOutputReference | TseCngwRouteRateLimitLimitDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    header: cdktf.stringToTerraform(struct!.header),
    hide_client_headers: cdktf.booleanToTerraform(struct!.hideClientHeaders),
    is_delay: cdktf.booleanToTerraform(struct!.isDelay),
    limit_by: cdktf.stringToTerraform(struct!.limitBy),
    line_up_time: cdktf.numberToTerraform(struct!.lineUpTime),
    path: cdktf.stringToTerraform(struct!.path),
    policy: cdktf.stringToTerraform(struct!.policy),
    rate_limit_response_url: cdktf.stringToTerraform(struct!.rateLimitResponseUrl),
    response_type: cdktf.stringToTerraform(struct!.responseType),
    external_redis: tseCngwRouteRateLimitLimitDetailExternalRedisToTerraform(struct!.externalRedis),
    qps_thresholds: cdktf.listMapper(tseCngwRouteRateLimitLimitDetailQpsThresholdsToTerraform, true)(struct!.qpsThresholds),
    rate_limit_response: tseCngwRouteRateLimitLimitDetailRateLimitResponseToTerraform(struct!.rateLimitResponse),
  }
}


export function tseCngwRouteRateLimitLimitDetailToHclTerraform(struct?: TseCngwRouteRateLimitLimitDetailOutputReference | TseCngwRouteRateLimitLimitDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_client_headers: {
      value: cdktf.booleanToHclTerraform(struct!.hideClientHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_delay: {
      value: cdktf.booleanToHclTerraform(struct!.isDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_by: {
      value: cdktf.stringToHclTerraform(struct!.limitBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line_up_time: {
      value: cdktf.numberToHclTerraform(struct!.lineUpTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limit_response_url: {
      value: cdktf.stringToHclTerraform(struct!.rateLimitResponseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_type: {
      value: cdktf.stringToHclTerraform(struct!.responseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_redis: {
      value: tseCngwRouteRateLimitLimitDetailExternalRedisToHclTerraform(struct!.externalRedis),
      isBlock: true,
      type: "list",
      storageClassType: "TseCngwRouteRateLimitLimitDetailExternalRedisList",
    },
    qps_thresholds: {
      value: cdktf.listMapperHcl(tseCngwRouteRateLimitLimitDetailQpsThresholdsToHclTerraform, true)(struct!.qpsThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "TseCngwRouteRateLimitLimitDetailQpsThresholdsList",
    },
    rate_limit_response: {
      value: tseCngwRouteRateLimitLimitDetailRateLimitResponseToHclTerraform(struct!.rateLimitResponse),
      isBlock: true,
      type: "list",
      storageClassType: "TseCngwRouteRateLimitLimitDetailRateLimitResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwRouteRateLimitLimitDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwRouteRateLimitLimitDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._hideClientHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideClientHeaders = this._hideClientHeaders;
    }
    if (this._isDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDelay = this._isDelay;
    }
    if (this._limitBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitBy = this._limitBy;
    }
    if (this._lineUpTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineUpTime = this._lineUpTime;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._rateLimitResponseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitResponseUrl = this._rateLimitResponseUrl;
    }
    if (this._responseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseType = this._responseType;
    }
    if (this._externalRedis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalRedis = this._externalRedis?.internalValue;
    }
    if (this._qpsThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qpsThresholds = this._qpsThresholds?.internalValue;
    }
    if (this._rateLimitResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitResponse = this._rateLimitResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwRouteRateLimitLimitDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._header = undefined;
      this._hideClientHeaders = undefined;
      this._isDelay = undefined;
      this._limitBy = undefined;
      this._lineUpTime = undefined;
      this._path = undefined;
      this._policy = undefined;
      this._rateLimitResponseUrl = undefined;
      this._responseType = undefined;
      this._externalRedis.internalValue = undefined;
      this._qpsThresholds.internalValue = undefined;
      this._rateLimitResponse.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._header = value.header;
      this._hideClientHeaders = value.hideClientHeaders;
      this._isDelay = value.isDelay;
      this._limitBy = value.limitBy;
      this._lineUpTime = value.lineUpTime;
      this._path = value.path;
      this._policy = value.policy;
      this._rateLimitResponseUrl = value.rateLimitResponseUrl;
      this._responseType = value.responseType;
      this._externalRedis.internalValue = value.externalRedis;
      this._qpsThresholds.internalValue = value.qpsThresholds;
      this._rateLimitResponse.internalValue = value.rateLimitResponse;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // hide_client_headers - computed: false, optional: false, required: true
  private _hideClientHeaders?: boolean | cdktf.IResolvable; 
  public get hideClientHeaders() {
    return this.getBooleanAttribute('hide_client_headers');
  }
  public set hideClientHeaders(value: boolean | cdktf.IResolvable) {
    this._hideClientHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hideClientHeadersInput() {
    return this._hideClientHeaders;
  }

  // is_delay - computed: false, optional: false, required: true
  private _isDelay?: boolean | cdktf.IResolvable; 
  public get isDelay() {
    return this.getBooleanAttribute('is_delay');
  }
  public set isDelay(value: boolean | cdktf.IResolvable) {
    this._isDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDelayInput() {
    return this._isDelay;
  }

  // limit_by - computed: false, optional: false, required: true
  private _limitBy?: string; 
  public get limitBy() {
    return this.getStringAttribute('limit_by');
  }
  public set limitBy(value: string) {
    this._limitBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitByInput() {
    return this._limitBy;
  }

  // line_up_time - computed: false, optional: true, required: false
  private _lineUpTime?: number; 
  public get lineUpTime() {
    return this.getNumberAttribute('line_up_time');
  }
  public set lineUpTime(value: number) {
    this._lineUpTime = value;
  }
  public resetLineUpTime() {
    this._lineUpTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineUpTimeInput() {
    return this._lineUpTime;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // rate_limit_response_url - computed: false, optional: true, required: false
  private _rateLimitResponseUrl?: string; 
  public get rateLimitResponseUrl() {
    return this.getStringAttribute('rate_limit_response_url');
  }
  public set rateLimitResponseUrl(value: string) {
    this._rateLimitResponseUrl = value;
  }
  public resetRateLimitResponseUrl() {
    this._rateLimitResponseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitResponseUrlInput() {
    return this._rateLimitResponseUrl;
  }

  // response_type - computed: false, optional: false, required: true
  private _responseType?: string; 
  public get responseType() {
    return this.getStringAttribute('response_type');
  }
  public set responseType(value: string) {
    this._responseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeInput() {
    return this._responseType;
  }

  // external_redis - computed: false, optional: true, required: false
  private _externalRedis = new TseCngwRouteRateLimitLimitDetailExternalRedisOutputReference(this, "external_redis");
  public get externalRedis() {
    return this._externalRedis;
  }
  public putExternalRedis(value: TseCngwRouteRateLimitLimitDetailExternalRedis) {
    this._externalRedis.internalValue = value;
  }
  public resetExternalRedis() {
    this._externalRedis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalRedisInput() {
    return this._externalRedis.internalValue;
  }

  // qps_thresholds - computed: false, optional: false, required: true
  private _qpsThresholds = new TseCngwRouteRateLimitLimitDetailQpsThresholdsList(this, "qps_thresholds", false);
  public get qpsThresholds() {
    return this._qpsThresholds;
  }
  public putQpsThresholds(value: TseCngwRouteRateLimitLimitDetailQpsThresholds[] | cdktf.IResolvable) {
    this._qpsThresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qpsThresholdsInput() {
    return this._qpsThresholds.internalValue;
  }

  // rate_limit_response - computed: false, optional: true, required: false
  private _rateLimitResponse = new TseCngwRouteRateLimitLimitDetailRateLimitResponseOutputReference(this, "rate_limit_response");
  public get rateLimitResponse() {
    return this._rateLimitResponse;
  }
  public putRateLimitResponse(value: TseCngwRouteRateLimitLimitDetailRateLimitResponse) {
    this._rateLimitResponse.internalValue = value;
  }
  public resetRateLimitResponse() {
    this._rateLimitResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitResponseInput() {
    return this._rateLimitResponse.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit tencentcloud_tse_cngw_route_rate_limit}
*/
export class TseCngwRouteRateLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tse_cngw_route_rate_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TseCngwRouteRateLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TseCngwRouteRateLimit to import
  * @param importFromId The id of the existing TseCngwRouteRateLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TseCngwRouteRateLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tse_cngw_route_rate_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_route_rate_limit tencentcloud_tse_cngw_route_rate_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TseCngwRouteRateLimitConfig
  */
  public constructor(scope: Construct, id: string, config: TseCngwRouteRateLimitConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tse_cngw_route_rate_limit',
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
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._routeId = config.routeId;
    this._limitDetail.internalValue = config.limitDetail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // route_id - computed: false, optional: false, required: true
  private _routeId?: string; 
  public get routeId() {
    return this.getStringAttribute('route_id');
  }
  public set routeId(value: string) {
    this._routeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIdInput() {
    return this._routeId;
  }

  // limit_detail - computed: false, optional: false, required: true
  private _limitDetail = new TseCngwRouteRateLimitLimitDetailOutputReference(this, "limit_detail");
  public get limitDetail() {
    return this._limitDetail;
  }
  public putLimitDetail(value: TseCngwRouteRateLimitLimitDetail) {
    this._limitDetail.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitDetailInput() {
    return this._limitDetail.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      route_id: cdktf.stringToTerraform(this._routeId),
      limit_detail: tseCngwRouteRateLimitLimitDetailToTerraform(this._limitDetail.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      route_id: {
        value: cdktf.stringToHclTerraform(this._routeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_detail: {
        value: tseCngwRouteRateLimitLimitDetailToHclTerraform(this._limitDetail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TseCngwRouteRateLimitLimitDetailList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
