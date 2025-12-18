// https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbVirtualHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of domains (host/authority header) that will be matched to this virtual host. Wildcard hosts are supported in the form of '*.foo.com' or '*-bar.foo.com'. If not specified, all domains will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#authority AlbVirtualHost#authority}
  */
  readonly authority?: string[];
  /**
  * The ID of the HTTP router to which the virtual host belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#http_router_id AlbVirtualHost#http_router_id}
  */
  readonly httpRouterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#id AlbVirtualHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#name AlbVirtualHost#name}
  */
  readonly name: string;
  /**
  * modify_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#modify_request_headers AlbVirtualHost#modify_request_headers}
  */
  readonly modifyRequestHeaders?: AlbVirtualHostModifyRequestHeaders[] | cdktf.IResolvable;
  /**
  * modify_response_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#modify_response_headers AlbVirtualHost#modify_response_headers}
  */
  readonly modifyResponseHeaders?: AlbVirtualHostModifyResponseHeaders[] | cdktf.IResolvable;
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#rate_limit AlbVirtualHost#rate_limit}
  */
  readonly rateLimit?: AlbVirtualHostRateLimit;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#route AlbVirtualHost#route}
  */
  readonly route?: AlbVirtualHostRoute[] | cdktf.IResolvable;
  /**
  * route_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#route_options AlbVirtualHost#route_options}
  */
  readonly routeOptions?: AlbVirtualHostRouteOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#timeouts AlbVirtualHost#timeouts}
  */
  readonly timeouts?: AlbVirtualHostTimeouts;
}
export interface AlbVirtualHostModifyRequestHeaders {
  /**
  * Append string to the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#append AlbVirtualHost#append}
  */
  readonly append?: string;
  /**
  * Name of the header to modify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#name AlbVirtualHost#name}
  */
  readonly name: string;
  /**
  * If set, remove the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#remove AlbVirtualHost#remove}
  */
  readonly remove?: boolean | cdktf.IResolvable;
  /**
  * New value for a header. Header values support the following [formatters](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/headers#custom-request-response-headers).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#replace AlbVirtualHost#replace}
  */
  readonly replace?: string;
}

export function albVirtualHostModifyRequestHeadersToTerraform(struct?: AlbVirtualHostModifyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.stringToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    remove: cdktf.booleanToTerraform(struct!.remove),
    replace: cdktf.stringToTerraform(struct!.replace),
  }
}


export function albVirtualHostModifyRequestHeadersToHclTerraform(struct?: AlbVirtualHostModifyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.stringToHclTerraform(struct!.append),
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
    remove: {
      value: cdktf.booleanToHclTerraform(struct!.remove),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace: {
      value: cdktf.stringToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostModifyRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbVirtualHostModifyRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostModifyRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._name = undefined;
      this._remove = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._name = value.name;
      this._remove = value.remove;
      this._replace = value.replace;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: string; 
  public get append() {
    return this.getStringAttribute('append');
  }
  public set append(value: string) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
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

  // remove - computed: false, optional: true, required: false
  private _remove?: boolean | cdktf.IResolvable; 
  public get remove() {
    return this.getBooleanAttribute('remove');
  }
  public set remove(value: boolean | cdktf.IResolvable) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: string; 
  public get replace() {
    return this.getStringAttribute('replace');
  }
  public set replace(value: string) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class AlbVirtualHostModifyRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : AlbVirtualHostModifyRequestHeaders[] | cdktf.IResolvable

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
  public get(index: number): AlbVirtualHostModifyRequestHeadersOutputReference {
    return new AlbVirtualHostModifyRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbVirtualHostModifyResponseHeaders {
  /**
  * Append string to the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#append AlbVirtualHost#append}
  */
  readonly append?: string;
  /**
  * Name of the header to modify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#name AlbVirtualHost#name}
  */
  readonly name: string;
  /**
  * If set, remove the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#remove AlbVirtualHost#remove}
  */
  readonly remove?: boolean | cdktf.IResolvable;
  /**
  * New value for a header. Header values support the following [formatters](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/headers#custom-request-response-headers).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#replace AlbVirtualHost#replace}
  */
  readonly replace?: string;
}

export function albVirtualHostModifyResponseHeadersToTerraform(struct?: AlbVirtualHostModifyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.stringToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    remove: cdktf.booleanToTerraform(struct!.remove),
    replace: cdktf.stringToTerraform(struct!.replace),
  }
}


export function albVirtualHostModifyResponseHeadersToHclTerraform(struct?: AlbVirtualHostModifyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.stringToHclTerraform(struct!.append),
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
    remove: {
      value: cdktf.booleanToHclTerraform(struct!.remove),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace: {
      value: cdktf.stringToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostModifyResponseHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbVirtualHostModifyResponseHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostModifyResponseHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._name = undefined;
      this._remove = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._name = value.name;
      this._remove = value.remove;
      this._replace = value.replace;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: string; 
  public get append() {
    return this.getStringAttribute('append');
  }
  public set append(value: string) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
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

  // remove - computed: false, optional: true, required: false
  private _remove?: boolean | cdktf.IResolvable; 
  public get remove() {
    return this.getBooleanAttribute('remove');
  }
  public set remove(value: boolean | cdktf.IResolvable) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: string; 
  public get replace() {
    return this.getStringAttribute('replace');
  }
  public set replace(value: string) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class AlbVirtualHostModifyResponseHeadersList extends cdktf.ComplexList {
  public internalValue? : AlbVirtualHostModifyResponseHeaders[] | cdktf.IResolvable

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
  public get(index: number): AlbVirtualHostModifyResponseHeadersOutputReference {
    return new AlbVirtualHostModifyResponseHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbVirtualHostRateLimitAllRequests {
  /**
  * Limit value specified with per minute time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#per_minute AlbVirtualHost#per_minute}
  */
  readonly perMinute?: number;
  /**
  * Limit value specified with per second time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#per_second AlbVirtualHost#per_second}
  */
  readonly perSecond?: number;
}

export function albVirtualHostRateLimitAllRequestsToTerraform(struct?: AlbVirtualHostRateLimitAllRequestsOutputReference | AlbVirtualHostRateLimitAllRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_minute: cdktf.numberToTerraform(struct!.perMinute),
    per_second: cdktf.numberToTerraform(struct!.perSecond),
  }
}


export function albVirtualHostRateLimitAllRequestsToHclTerraform(struct?: AlbVirtualHostRateLimitAllRequestsOutputReference | AlbVirtualHostRateLimitAllRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_minute: {
      value: cdktf.numberToHclTerraform(struct!.perMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_second: {
      value: cdktf.numberToHclTerraform(struct!.perSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRateLimitAllRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRateLimitAllRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.perMinute = this._perMinute;
    }
    if (this._perSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSecond = this._perSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRateLimitAllRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perMinute = undefined;
      this._perSecond = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perMinute = value.perMinute;
      this._perSecond = value.perSecond;
    }
  }

  // per_minute - computed: false, optional: true, required: false
  private _perMinute?: number; 
  public get perMinute() {
    return this.getNumberAttribute('per_minute');
  }
  public set perMinute(value: number) {
    this._perMinute = value;
  }
  public resetPerMinute() {
    this._perMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perMinuteInput() {
    return this._perMinute;
  }

  // per_second - computed: false, optional: true, required: false
  private _perSecond?: number; 
  public get perSecond() {
    return this.getNumberAttribute('per_second');
  }
  public set perSecond(value: number) {
    this._perSecond = value;
  }
  public resetPerSecond() {
    this._perSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSecondInput() {
    return this._perSecond;
  }
}
export interface AlbVirtualHostRateLimitRequestsPerIp {
  /**
  * Limit value specified with per minute time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#per_minute AlbVirtualHost#per_minute}
  */
  readonly perMinute?: number;
  /**
  * Limit value specified with per second time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#per_second AlbVirtualHost#per_second}
  */
  readonly perSecond?: number;
}

export function albVirtualHostRateLimitRequestsPerIpToTerraform(struct?: AlbVirtualHostRateLimitRequestsPerIpOutputReference | AlbVirtualHostRateLimitRequestsPerIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_minute: cdktf.numberToTerraform(struct!.perMinute),
    per_second: cdktf.numberToTerraform(struct!.perSecond),
  }
}


export function albVirtualHostRateLimitRequestsPerIpToHclTerraform(struct?: AlbVirtualHostRateLimitRequestsPerIpOutputReference | AlbVirtualHostRateLimitRequestsPerIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_minute: {
      value: cdktf.numberToHclTerraform(struct!.perMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_second: {
      value: cdktf.numberToHclTerraform(struct!.perSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRateLimitRequestsPerIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRateLimitRequestsPerIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.perMinute = this._perMinute;
    }
    if (this._perSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSecond = this._perSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRateLimitRequestsPerIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perMinute = undefined;
      this._perSecond = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perMinute = value.perMinute;
      this._perSecond = value.perSecond;
    }
  }

  // per_minute - computed: false, optional: true, required: false
  private _perMinute?: number; 
  public get perMinute() {
    return this.getNumberAttribute('per_minute');
  }
  public set perMinute(value: number) {
    this._perMinute = value;
  }
  public resetPerMinute() {
    this._perMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perMinuteInput() {
    return this._perMinute;
  }

  // per_second - computed: false, optional: true, required: false
  private _perSecond?: number; 
  public get perSecond() {
    return this.getNumberAttribute('per_second');
  }
  public set perSecond(value: number) {
    this._perSecond = value;
  }
  public resetPerSecond() {
    this._perSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSecondInput() {
    return this._perSecond;
  }
}
export interface AlbVirtualHostRateLimit {
  /**
  * all_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#all_requests AlbVirtualHost#all_requests}
  */
  readonly allRequests?: AlbVirtualHostRateLimitAllRequests;
  /**
  * requests_per_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#requests_per_ip AlbVirtualHost#requests_per_ip}
  */
  readonly requestsPerIp?: AlbVirtualHostRateLimitRequestsPerIp;
}

export function albVirtualHostRateLimitToTerraform(struct?: AlbVirtualHostRateLimitOutputReference | AlbVirtualHostRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_requests: albVirtualHostRateLimitAllRequestsToTerraform(struct!.allRequests),
    requests_per_ip: albVirtualHostRateLimitRequestsPerIpToTerraform(struct!.requestsPerIp),
  }
}


export function albVirtualHostRateLimitToHclTerraform(struct?: AlbVirtualHostRateLimitOutputReference | AlbVirtualHostRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_requests: {
      value: albVirtualHostRateLimitAllRequestsToHclTerraform(struct!.allRequests),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRateLimitAllRequestsList",
    },
    requests_per_ip: {
      value: albVirtualHostRateLimitRequestsPerIpToHclTerraform(struct!.requestsPerIp),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRateLimitRequestsPerIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRequests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRequests = this._allRequests?.internalValue;
    }
    if (this._requestsPerIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsPerIp = this._requestsPerIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRequests.internalValue = undefined;
      this._requestsPerIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRequests.internalValue = value.allRequests;
      this._requestsPerIp.internalValue = value.requestsPerIp;
    }
  }

  // all_requests - computed: false, optional: true, required: false
  private _allRequests = new AlbVirtualHostRateLimitAllRequestsOutputReference(this, "all_requests");
  public get allRequests() {
    return this._allRequests;
  }
  public putAllRequests(value: AlbVirtualHostRateLimitAllRequests) {
    this._allRequests.internalValue = value;
  }
  public resetAllRequests() {
    this._allRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRequestsInput() {
    return this._allRequests.internalValue;
  }

  // requests_per_ip - computed: false, optional: true, required: false
  private _requestsPerIp = new AlbVirtualHostRateLimitRequestsPerIpOutputReference(this, "requests_per_ip");
  public get requestsPerIp() {
    return this._requestsPerIp;
  }
  public putRequestsPerIp(value: AlbVirtualHostRateLimitRequestsPerIp) {
    this._requestsPerIp.internalValue = value;
  }
  public resetRequestsPerIp() {
    this._requestsPerIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsPerIpInput() {
    return this._requestsPerIp.internalValue;
  }
}
export interface AlbVirtualHostRouteGrpcRouteGrpcMatchFqmn {
  /**
  * Match exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#exact AlbVirtualHost#exact}
  */
  readonly exact?: string;
  /**
  * Match prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#prefix AlbVirtualHost#prefix}
  */
  readonly prefix?: string;
  /**
  * Match regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#regex AlbVirtualHost#regex}
  */
  readonly regex?: string;
}

export function albVirtualHostRouteGrpcRouteGrpcMatchFqmnToTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcMatchFqmnOutputReference | AlbVirtualHostRouteGrpcRouteGrpcMatchFqmn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function albVirtualHostRouteGrpcRouteGrpcMatchFqmnToHclTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcMatchFqmnOutputReference | AlbVirtualHostRouteGrpcRouteGrpcMatchFqmn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteGrpcRouteGrpcMatchFqmnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteGrpcRouteGrpcMatchFqmn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteGrpcRouteGrpcMatchFqmn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface AlbVirtualHostRouteGrpcRouteGrpcMatch {
  /**
  * fqmn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#fqmn AlbVirtualHost#fqmn}
  */
  readonly fqmn?: AlbVirtualHostRouteGrpcRouteGrpcMatchFqmn;
}

export function albVirtualHostRouteGrpcRouteGrpcMatchToTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqmn: albVirtualHostRouteGrpcRouteGrpcMatchFqmnToTerraform(struct!.fqmn),
  }
}


export function albVirtualHostRouteGrpcRouteGrpcMatchToHclTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqmn: {
      value: albVirtualHostRouteGrpcRouteGrpcMatchFqmnToHclTerraform(struct!.fqmn),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteGrpcRouteGrpcMatchFqmnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteGrpcRouteGrpcMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbVirtualHostRouteGrpcRouteGrpcMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqmn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqmn = this._fqmn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteGrpcRouteGrpcMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqmn.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqmn.internalValue = value.fqmn;
    }
  }

  // fqmn - computed: false, optional: true, required: false
  private _fqmn = new AlbVirtualHostRouteGrpcRouteGrpcMatchFqmnOutputReference(this, "fqmn");
  public get fqmn() {
    return this._fqmn;
  }
  public putFqmn(value: AlbVirtualHostRouteGrpcRouteGrpcMatchFqmn) {
    this._fqmn.internalValue = value;
  }
  public resetFqmn() {
    this._fqmn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqmnInput() {
    return this._fqmn.internalValue;
  }
}

export class AlbVirtualHostRouteGrpcRouteGrpcMatchList extends cdktf.ComplexList {
  public internalValue? : AlbVirtualHostRouteGrpcRouteGrpcMatch[] | cdktf.IResolvable

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
  public get(index: number): AlbVirtualHostRouteGrpcRouteGrpcMatchOutputReference {
    return new AlbVirtualHostRouteGrpcRouteGrpcMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequests {
  /**
  * Limit value specified with per minute time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#per_minute AlbVirtualHost#per_minute}
  */
  readonly perMinute?: number;
  /**
  * Limit value specified with per second time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#per_second AlbVirtualHost#per_second}
  */
  readonly perSecond?: number;
}

export function albVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsToTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsOutputReference | AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_minute: cdktf.numberToTerraform(struct!.perMinute),
    per_second: cdktf.numberToTerraform(struct!.perSecond),
  }
}


export function albVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsToHclTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsOutputReference | AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_minute: {
      value: cdktf.numberToHclTerraform(struct!.perMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_second: {
      value: cdktf.numberToHclTerraform(struct!.perSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.perMinute = this._perMinute;
    }
    if (this._perSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSecond = this._perSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perMinute = undefined;
      this._perSecond = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perMinute = value.perMinute;
      this._perSecond = value.perSecond;
    }
  }

  // per_minute - computed: false, optional: true, required: false
  private _perMinute?: number; 
  public get perMinute() {
    return this.getNumberAttribute('per_minute');
  }
  public set perMinute(value: number) {
    this._perMinute = value;
  }
  public resetPerMinute() {
    this._perMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perMinuteInput() {
    return this._perMinute;
  }

  // per_second - computed: false, optional: true, required: false
  private _perSecond?: number; 
  public get perSecond() {
    return this.getNumberAttribute('per_second');
  }
  public set perSecond(value: number) {
    this._perSecond = value;
  }
  public resetPerSecond() {
    this._perSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSecondInput() {
    return this._perSecond;
  }
}
export interface AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIp {
  /**
  * Limit value specified with per minute time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#per_minute AlbVirtualHost#per_minute}
  */
  readonly perMinute?: number;
  /**
  * Limit value specified with per second time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#per_second AlbVirtualHost#per_second}
  */
  readonly perSecond?: number;
}

export function albVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpToTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpOutputReference | AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_minute: cdktf.numberToTerraform(struct!.perMinute),
    per_second: cdktf.numberToTerraform(struct!.perSecond),
  }
}


export function albVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpToHclTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpOutputReference | AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_minute: {
      value: cdktf.numberToHclTerraform(struct!.perMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_second: {
      value: cdktf.numberToHclTerraform(struct!.perSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.perMinute = this._perMinute;
    }
    if (this._perSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSecond = this._perSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perMinute = undefined;
      this._perSecond = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perMinute = value.perMinute;
      this._perSecond = value.perSecond;
    }
  }

  // per_minute - computed: false, optional: true, required: false
  private _perMinute?: number; 
  public get perMinute() {
    return this.getNumberAttribute('per_minute');
  }
  public set perMinute(value: number) {
    this._perMinute = value;
  }
  public resetPerMinute() {
    this._perMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perMinuteInput() {
    return this._perMinute;
  }

  // per_second - computed: false, optional: true, required: false
  private _perSecond?: number; 
  public get perSecond() {
    return this.getNumberAttribute('per_second');
  }
  public set perSecond(value: number) {
    this._perSecond = value;
  }
  public resetPerSecond() {
    this._perSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSecondInput() {
    return this._perSecond;
  }
}
export interface AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimit {
  /**
  * all_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#all_requests AlbVirtualHost#all_requests}
  */
  readonly allRequests?: AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequests;
  /**
  * requests_per_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#requests_per_ip AlbVirtualHost#requests_per_ip}
  */
  readonly requestsPerIp?: AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIp;
}

export function albVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitToTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitOutputReference | AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_requests: albVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsToTerraform(struct!.allRequests),
    requests_per_ip: albVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpToTerraform(struct!.requestsPerIp),
  }
}


export function albVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitToHclTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitOutputReference | AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_requests: {
      value: albVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsToHclTerraform(struct!.allRequests),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsList",
    },
    requests_per_ip: {
      value: albVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpToHclTerraform(struct!.requestsPerIp),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRequests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRequests = this._allRequests?.internalValue;
    }
    if (this._requestsPerIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsPerIp = this._requestsPerIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRequests.internalValue = undefined;
      this._requestsPerIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRequests.internalValue = value.allRequests;
      this._requestsPerIp.internalValue = value.requestsPerIp;
    }
  }

  // all_requests - computed: false, optional: true, required: false
  private _allRequests = new AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequestsOutputReference(this, "all_requests");
  public get allRequests() {
    return this._allRequests;
  }
  public putAllRequests(value: AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitAllRequests) {
    this._allRequests.internalValue = value;
  }
  public resetAllRequests() {
    this._allRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRequestsInput() {
    return this._allRequests.internalValue;
  }

  // requests_per_ip - computed: false, optional: true, required: false
  private _requestsPerIp = new AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIpOutputReference(this, "requests_per_ip");
  public get requestsPerIp() {
    return this._requestsPerIp;
  }
  public putRequestsPerIp(value: AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitRequestsPerIp) {
    this._requestsPerIp.internalValue = value;
  }
  public resetRequestsPerIp() {
    this._requestsPerIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsPerIpInput() {
    return this._requestsPerIp.internalValue;
  }
}
export interface AlbVirtualHostRouteGrpcRouteGrpcRouteAction {
  /**
  * If set, will automatically rewrite host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#auto_host_rewrite AlbVirtualHost#auto_host_rewrite}
  */
  readonly autoHostRewrite?: boolean | cdktf.IResolvable;
  /**
  * Backend group to route requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#backend_group_id AlbVirtualHost#backend_group_id}
  */
  readonly backendGroupId: string;
  /**
  * Host rewrite specifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#host_rewrite AlbVirtualHost#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Specifies the idle timeout (time without any data transfer for the active request) for the route. It is useful for streaming scenarios - one should set idle_timeout to something meaningful and max_timeout to the maximum time the stream is allowed to be alive. If not specified, there is no per-route idle timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#idle_timeout AlbVirtualHost#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * Lower timeout may be specified by the client (using grpc-timeout header). If not set, default is 60 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#max_timeout AlbVirtualHost#max_timeout}
  */
  readonly maxTimeout?: string;
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#rate_limit AlbVirtualHost#rate_limit}
  */
  readonly rateLimit?: AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimit;
}

export function albVirtualHostRouteGrpcRouteGrpcRouteActionToTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcRouteActionOutputReference | AlbVirtualHostRouteGrpcRouteGrpcRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_host_rewrite: cdktf.booleanToTerraform(struct!.autoHostRewrite),
    backend_group_id: cdktf.stringToTerraform(struct!.backendGroupId),
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_timeout: cdktf.stringToTerraform(struct!.maxTimeout),
    rate_limit: albVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitToTerraform(struct!.rateLimit),
  }
}


export function albVirtualHostRouteGrpcRouteGrpcRouteActionToHclTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcRouteActionOutputReference | AlbVirtualHostRouteGrpcRouteGrpcRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_host_rewrite: {
      value: cdktf.booleanToHclTerraform(struct!.autoHostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backend_group_id: {
      value: cdktf.stringToHclTerraform(struct!.backendGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.hostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_timeout: {
      value: cdktf.stringToHclTerraform(struct!.maxTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limit: {
      value: albVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteGrpcRouteGrpcRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteGrpcRouteGrpcRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHostRewrite = this._autoHostRewrite;
    }
    if (this._backendGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendGroupId = this._backendGroupId;
    }
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTimeout = this._maxTimeout;
    }
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteGrpcRouteGrpcRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHostRewrite = undefined;
      this._backendGroupId = undefined;
      this._hostRewrite = undefined;
      this._idleTimeout = undefined;
      this._maxTimeout = undefined;
      this._rateLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHostRewrite = value.autoHostRewrite;
      this._backendGroupId = value.backendGroupId;
      this._hostRewrite = value.hostRewrite;
      this._idleTimeout = value.idleTimeout;
      this._maxTimeout = value.maxTimeout;
      this._rateLimit.internalValue = value.rateLimit;
    }
  }

  // auto_host_rewrite - computed: false, optional: true, required: false
  private _autoHostRewrite?: boolean | cdktf.IResolvable; 
  public get autoHostRewrite() {
    return this.getBooleanAttribute('auto_host_rewrite');
  }
  public set autoHostRewrite(value: boolean | cdktf.IResolvable) {
    this._autoHostRewrite = value;
  }
  public resetAutoHostRewrite() {
    this._autoHostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHostRewriteInput() {
    return this._autoHostRewrite;
  }

  // backend_group_id - computed: false, optional: false, required: true
  private _backendGroupId?: string; 
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }
  public set backendGroupId(value: string) {
    this._backendGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendGroupIdInput() {
    return this._backendGroupId;
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_timeout - computed: false, optional: true, required: false
  private _maxTimeout?: string; 
  public get maxTimeout() {
    return this.getStringAttribute('max_timeout');
  }
  public set maxTimeout(value: string) {
    this._maxTimeout = value;
  }
  public resetMaxTimeout() {
    this._maxTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeoutInput() {
    return this._maxTimeout;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: AlbVirtualHostRouteGrpcRouteGrpcRouteActionRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }
}
export interface AlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction {
  /**
  * The status of the response. Supported values are: ok, invalid_argumet, not_found, permission_denied, unauthenticated, unimplemented, internal, unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#status AlbVirtualHost#status}
  */
  readonly status?: string;
}

export function albVirtualHostRouteGrpcRouteGrpcStatusResponseActionToTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionOutputReference | AlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function albVirtualHostRouteGrpcRouteGrpcStatusResponseActionToHclTerraform(struct?: AlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionOutputReference | AlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface AlbVirtualHostRouteGrpcRoute {
  /**
  * grpc_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#grpc_match AlbVirtualHost#grpc_match}
  */
  readonly grpcMatch?: AlbVirtualHostRouteGrpcRouteGrpcMatch[] | cdktf.IResolvable;
  /**
  * grpc_route_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#grpc_route_action AlbVirtualHost#grpc_route_action}
  */
  readonly grpcRouteAction?: AlbVirtualHostRouteGrpcRouteGrpcRouteAction;
  /**
  * grpc_status_response_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#grpc_status_response_action AlbVirtualHost#grpc_status_response_action}
  */
  readonly grpcStatusResponseAction?: AlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction;
}

export function albVirtualHostRouteGrpcRouteToTerraform(struct?: AlbVirtualHostRouteGrpcRouteOutputReference | AlbVirtualHostRouteGrpcRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_match: cdktf.listMapper(albVirtualHostRouteGrpcRouteGrpcMatchToTerraform, true)(struct!.grpcMatch),
    grpc_route_action: albVirtualHostRouteGrpcRouteGrpcRouteActionToTerraform(struct!.grpcRouteAction),
    grpc_status_response_action: albVirtualHostRouteGrpcRouteGrpcStatusResponseActionToTerraform(struct!.grpcStatusResponseAction),
  }
}


export function albVirtualHostRouteGrpcRouteToHclTerraform(struct?: AlbVirtualHostRouteGrpcRouteOutputReference | AlbVirtualHostRouteGrpcRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc_match: {
      value: cdktf.listMapperHcl(albVirtualHostRouteGrpcRouteGrpcMatchToHclTerraform, true)(struct!.grpcMatch),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteGrpcRouteGrpcMatchList",
    },
    grpc_route_action: {
      value: albVirtualHostRouteGrpcRouteGrpcRouteActionToHclTerraform(struct!.grpcRouteAction),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteGrpcRouteGrpcRouteActionList",
    },
    grpc_status_response_action: {
      value: albVirtualHostRouteGrpcRouteGrpcStatusResponseActionToHclTerraform(struct!.grpcStatusResponseAction),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteGrpcRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteGrpcRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcMatch = this._grpcMatch?.internalValue;
    }
    if (this._grpcRouteAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcRouteAction = this._grpcRouteAction?.internalValue;
    }
    if (this._grpcStatusResponseAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcStatusResponseAction = this._grpcStatusResponseAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteGrpcRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grpcMatch.internalValue = undefined;
      this._grpcRouteAction.internalValue = undefined;
      this._grpcStatusResponseAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grpcMatch.internalValue = value.grpcMatch;
      this._grpcRouteAction.internalValue = value.grpcRouteAction;
      this._grpcStatusResponseAction.internalValue = value.grpcStatusResponseAction;
    }
  }

  // grpc_match - computed: false, optional: true, required: false
  private _grpcMatch = new AlbVirtualHostRouteGrpcRouteGrpcMatchList(this, "grpc_match", false);
  public get grpcMatch() {
    return this._grpcMatch;
  }
  public putGrpcMatch(value: AlbVirtualHostRouteGrpcRouteGrpcMatch[] | cdktf.IResolvable) {
    this._grpcMatch.internalValue = value;
  }
  public resetGrpcMatch() {
    this._grpcMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcMatchInput() {
    return this._grpcMatch.internalValue;
  }

  // grpc_route_action - computed: false, optional: true, required: false
  private _grpcRouteAction = new AlbVirtualHostRouteGrpcRouteGrpcRouteActionOutputReference(this, "grpc_route_action");
  public get grpcRouteAction() {
    return this._grpcRouteAction;
  }
  public putGrpcRouteAction(value: AlbVirtualHostRouteGrpcRouteGrpcRouteAction) {
    this._grpcRouteAction.internalValue = value;
  }
  public resetGrpcRouteAction() {
    this._grpcRouteAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcRouteActionInput() {
    return this._grpcRouteAction.internalValue;
  }

  // grpc_status_response_action - computed: false, optional: true, required: false
  private _grpcStatusResponseAction = new AlbVirtualHostRouteGrpcRouteGrpcStatusResponseActionOutputReference(this, "grpc_status_response_action");
  public get grpcStatusResponseAction() {
    return this._grpcStatusResponseAction;
  }
  public putGrpcStatusResponseAction(value: AlbVirtualHostRouteGrpcRouteGrpcStatusResponseAction) {
    this._grpcStatusResponseAction.internalValue = value;
  }
  public resetGrpcStatusResponseAction() {
    this._grpcStatusResponseAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcStatusResponseActionInput() {
    return this._grpcStatusResponseAction.internalValue;
  }
}
export interface AlbVirtualHostRouteHttpRouteDirectResponseAction {
  /**
  * Response body text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#body AlbVirtualHost#body}
  */
  readonly body?: string;
  /**
  * HTTP response status. Should be between `100` and `599`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#status AlbVirtualHost#status}
  */
  readonly status?: number;
}

export function albVirtualHostRouteHttpRouteDirectResponseActionToTerraform(struct?: AlbVirtualHostRouteHttpRouteDirectResponseActionOutputReference | AlbVirtualHostRouteHttpRouteDirectResponseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    status: cdktf.numberToTerraform(struct!.status),
  }
}


export function albVirtualHostRouteHttpRouteDirectResponseActionToHclTerraform(struct?: AlbVirtualHostRouteHttpRouteDirectResponseActionOutputReference | AlbVirtualHostRouteHttpRouteDirectResponseAction): any {
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
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteHttpRouteDirectResponseActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteHttpRouteDirectResponseAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRouteDirectResponseAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._status = value.status;
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

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface AlbVirtualHostRouteHttpRouteHttpMatchPath {
  /**
  * Match exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#exact AlbVirtualHost#exact}
  */
  readonly exact?: string;
  /**
  * Match prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#prefix AlbVirtualHost#prefix}
  */
  readonly prefix?: string;
  /**
  * Match regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#regex AlbVirtualHost#regex}
  */
  readonly regex?: string;
}

export function albVirtualHostRouteHttpRouteHttpMatchPathToTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpMatchPathOutputReference | AlbVirtualHostRouteHttpRouteHttpMatchPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function albVirtualHostRouteHttpRouteHttpMatchPathToHclTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpMatchPathOutputReference | AlbVirtualHostRouteHttpRouteHttpMatchPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteHttpRouteHttpMatchPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteHttpRouteHttpMatchPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRouteHttpMatchPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface AlbVirtualHostRouteHttpRouteHttpMatch {
  /**
  * List of methods (strings).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#http_method AlbVirtualHost#http_method}
  */
  readonly httpMethod?: string[];
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#path AlbVirtualHost#path}
  */
  readonly path?: AlbVirtualHostRouteHttpRouteHttpMatchPath;
}

export function albVirtualHostRouteHttpRouteHttpMatchToTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpMethod),
    path: albVirtualHostRouteHttpRouteHttpMatchPathToTerraform(struct!.path),
  }
}


export function albVirtualHostRouteHttpRouteHttpMatchToHclTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_method: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpMethod),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    path: {
      value: albVirtualHostRouteHttpRouteHttpMatchPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteHttpRouteHttpMatchPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteHttpRouteHttpMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbVirtualHostRouteHttpRouteHttpMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRouteHttpMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpMethod = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpMethod = value.httpMethod;
      this._path.internalValue = value.path;
    }
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string[]; 
  public get httpMethod() {
    return cdktf.Fn.tolist(this.getListAttribute('http_method'));
  }
  public set httpMethod(value: string[]) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // path - computed: false, optional: true, required: false
  private _path = new AlbVirtualHostRouteHttpRouteHttpMatchPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: AlbVirtualHostRouteHttpRouteHttpMatchPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class AlbVirtualHostRouteHttpRouteHttpMatchList extends cdktf.ComplexList {
  public internalValue? : AlbVirtualHostRouteHttpRouteHttpMatch[] | cdktf.IResolvable

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
  public get(index: number): AlbVirtualHostRouteHttpRouteHttpMatchOutputReference {
    return new AlbVirtualHostRouteHttpRouteHttpMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequests {
  /**
  * Limit value specified with per minute time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#per_minute AlbVirtualHost#per_minute}
  */
  readonly perMinute?: number;
  /**
  * Limit value specified with per second time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#per_second AlbVirtualHost#per_second}
  */
  readonly perSecond?: number;
}

export function albVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsToTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsOutputReference | AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_minute: cdktf.numberToTerraform(struct!.perMinute),
    per_second: cdktf.numberToTerraform(struct!.perSecond),
  }
}


export function albVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsToHclTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsOutputReference | AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_minute: {
      value: cdktf.numberToHclTerraform(struct!.perMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_second: {
      value: cdktf.numberToHclTerraform(struct!.perSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.perMinute = this._perMinute;
    }
    if (this._perSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSecond = this._perSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perMinute = undefined;
      this._perSecond = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perMinute = value.perMinute;
      this._perSecond = value.perSecond;
    }
  }

  // per_minute - computed: false, optional: true, required: false
  private _perMinute?: number; 
  public get perMinute() {
    return this.getNumberAttribute('per_minute');
  }
  public set perMinute(value: number) {
    this._perMinute = value;
  }
  public resetPerMinute() {
    this._perMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perMinuteInput() {
    return this._perMinute;
  }

  // per_second - computed: false, optional: true, required: false
  private _perSecond?: number; 
  public get perSecond() {
    return this.getNumberAttribute('per_second');
  }
  public set perSecond(value: number) {
    this._perSecond = value;
  }
  public resetPerSecond() {
    this._perSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSecondInput() {
    return this._perSecond;
  }
}
export interface AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIp {
  /**
  * Limit value specified with per minute time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#per_minute AlbVirtualHost#per_minute}
  */
  readonly perMinute?: number;
  /**
  * Limit value specified with per second time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#per_second AlbVirtualHost#per_second}
  */
  readonly perSecond?: number;
}

export function albVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpToTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpOutputReference | AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_minute: cdktf.numberToTerraform(struct!.perMinute),
    per_second: cdktf.numberToTerraform(struct!.perSecond),
  }
}


export function albVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpToHclTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpOutputReference | AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_minute: {
      value: cdktf.numberToHclTerraform(struct!.perMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_second: {
      value: cdktf.numberToHclTerraform(struct!.perSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.perMinute = this._perMinute;
    }
    if (this._perSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSecond = this._perSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perMinute = undefined;
      this._perSecond = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perMinute = value.perMinute;
      this._perSecond = value.perSecond;
    }
  }

  // per_minute - computed: false, optional: true, required: false
  private _perMinute?: number; 
  public get perMinute() {
    return this.getNumberAttribute('per_minute');
  }
  public set perMinute(value: number) {
    this._perMinute = value;
  }
  public resetPerMinute() {
    this._perMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perMinuteInput() {
    return this._perMinute;
  }

  // per_second - computed: false, optional: true, required: false
  private _perSecond?: number; 
  public get perSecond() {
    return this.getNumberAttribute('per_second');
  }
  public set perSecond(value: number) {
    this._perSecond = value;
  }
  public resetPerSecond() {
    this._perSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSecondInput() {
    return this._perSecond;
  }
}
export interface AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimit {
  /**
  * all_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#all_requests AlbVirtualHost#all_requests}
  */
  readonly allRequests?: AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequests;
  /**
  * requests_per_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#requests_per_ip AlbVirtualHost#requests_per_ip}
  */
  readonly requestsPerIp?: AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIp;
}

export function albVirtualHostRouteHttpRouteHttpRouteActionRateLimitToTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitOutputReference | AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_requests: albVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsToTerraform(struct!.allRequests),
    requests_per_ip: albVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpToTerraform(struct!.requestsPerIp),
  }
}


export function albVirtualHostRouteHttpRouteHttpRouteActionRateLimitToHclTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitOutputReference | AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_requests: {
      value: albVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsToHclTerraform(struct!.allRequests),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsList",
    },
    requests_per_ip: {
      value: albVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpToHclTerraform(struct!.requestsPerIp),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRequests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRequests = this._allRequests?.internalValue;
    }
    if (this._requestsPerIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsPerIp = this._requestsPerIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRequests.internalValue = undefined;
      this._requestsPerIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRequests.internalValue = value.allRequests;
      this._requestsPerIp.internalValue = value.requestsPerIp;
    }
  }

  // all_requests - computed: false, optional: true, required: false
  private _allRequests = new AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequestsOutputReference(this, "all_requests");
  public get allRequests() {
    return this._allRequests;
  }
  public putAllRequests(value: AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitAllRequests) {
    this._allRequests.internalValue = value;
  }
  public resetAllRequests() {
    this._allRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRequestsInput() {
    return this._allRequests.internalValue;
  }

  // requests_per_ip - computed: false, optional: true, required: false
  private _requestsPerIp = new AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIpOutputReference(this, "requests_per_ip");
  public get requestsPerIp() {
    return this._requestsPerIp;
  }
  public putRequestsPerIp(value: AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitRequestsPerIp) {
    this._requestsPerIp.internalValue = value;
  }
  public resetRequestsPerIp() {
    this._requestsPerIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsPerIpInput() {
    return this._requestsPerIp.internalValue;
  }
}
export interface AlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewrite {
  /**
  * RE2 regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#regex AlbVirtualHost#regex}
  */
  readonly regex?: string;
  /**
  * The string which should be used to substitute matched substrings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#substitute AlbVirtualHost#substitute}
  */
  readonly substitute?: string;
}

export function albVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteToTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteOutputReference | AlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: cdktf.stringToTerraform(struct!.regex),
    substitute: cdktf.stringToTerraform(struct!.substitute),
  }
}


export function albVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteToHclTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteOutputReference | AlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitute: {
      value: cdktf.stringToHclTerraform(struct!.substitute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._substitute !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitute = this._substitute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regex = undefined;
      this._substitute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regex = value.regex;
      this._substitute = value.substitute;
    }
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // substitute - computed: false, optional: true, required: false
  private _substitute?: string; 
  public get substitute() {
    return this.getStringAttribute('substitute');
  }
  public set substitute(value: string) {
    this._substitute = value;
  }
  public resetSubstitute() {
    this._substitute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteInput() {
    return this._substitute;
  }
}
export interface AlbVirtualHostRouteHttpRouteHttpRouteAction {
  /**
  * If set, will automatically rewrite host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#auto_host_rewrite AlbVirtualHost#auto_host_rewrite}
  */
  readonly autoHostRewrite?: boolean | cdktf.IResolvable;
  /**
  * Backend group to route requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#backend_group_id AlbVirtualHost#backend_group_id}
  */
  readonly backendGroupId: string;
  /**
  * Host rewrite specifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#host_rewrite AlbVirtualHost#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Specifies the idle timeout (time without any data transfer for the active request) for the route. It is useful for streaming scenarios (i.e. long-polling, server-sent events) - one should set idle_timeout to something meaningful and timeout to the maximum time the stream is allowed to be alive. If not specified, there is no per-route idle timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#idle_timeout AlbVirtualHost#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * If not empty, matched path prefix will be replaced by this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#prefix_rewrite AlbVirtualHost#prefix_rewrite}
  */
  readonly prefixRewrite?: string;
  /**
  * Specifies the request timeout (overall time request processing is allowed to take) for the route. If not set, default is 60 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#timeout AlbVirtualHost#timeout}
  */
  readonly timeout?: string;
  /**
  * List of upgrade types. Only specified upgrade types will be allowed. For example, `websocket`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#upgrade_types AlbVirtualHost#upgrade_types}
  */
  readonly upgradeTypes?: string[];
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#rate_limit AlbVirtualHost#rate_limit}
  */
  readonly rateLimit?: AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimit;
  /**
  * regex_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#regex_rewrite AlbVirtualHost#regex_rewrite}
  */
  readonly regexRewrite?: AlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewrite;
}

export function albVirtualHostRouteHttpRouteHttpRouteActionToTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpRouteActionOutputReference | AlbVirtualHostRouteHttpRouteHttpRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_host_rewrite: cdktf.booleanToTerraform(struct!.autoHostRewrite),
    backend_group_id: cdktf.stringToTerraform(struct!.backendGroupId),
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    prefix_rewrite: cdktf.stringToTerraform(struct!.prefixRewrite),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    upgrade_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.upgradeTypes),
    rate_limit: albVirtualHostRouteHttpRouteHttpRouteActionRateLimitToTerraform(struct!.rateLimit),
    regex_rewrite: albVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteToTerraform(struct!.regexRewrite),
  }
}


export function albVirtualHostRouteHttpRouteHttpRouteActionToHclTerraform(struct?: AlbVirtualHostRouteHttpRouteHttpRouteActionOutputReference | AlbVirtualHostRouteHttpRouteHttpRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_host_rewrite: {
      value: cdktf.booleanToHclTerraform(struct!.autoHostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backend_group_id: {
      value: cdktf.stringToHclTerraform(struct!.backendGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.hostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.prefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.upgradeTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rate_limit: {
      value: albVirtualHostRouteHttpRouteHttpRouteActionRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitList",
    },
    regex_rewrite: {
      value: albVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteToHclTerraform(struct!.regexRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteHttpRouteHttpRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteHttpRouteHttpRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHostRewrite = this._autoHostRewrite;
    }
    if (this._backendGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendGroupId = this._backendGroupId;
    }
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._prefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRewrite = this._prefixRewrite;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._upgradeTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeTypes = this._upgradeTypes;
    }
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    if (this._regexRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexRewrite = this._regexRewrite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRouteHttpRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHostRewrite = undefined;
      this._backendGroupId = undefined;
      this._hostRewrite = undefined;
      this._idleTimeout = undefined;
      this._prefixRewrite = undefined;
      this._timeout = undefined;
      this._upgradeTypes = undefined;
      this._rateLimit.internalValue = undefined;
      this._regexRewrite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHostRewrite = value.autoHostRewrite;
      this._backendGroupId = value.backendGroupId;
      this._hostRewrite = value.hostRewrite;
      this._idleTimeout = value.idleTimeout;
      this._prefixRewrite = value.prefixRewrite;
      this._timeout = value.timeout;
      this._upgradeTypes = value.upgradeTypes;
      this._rateLimit.internalValue = value.rateLimit;
      this._regexRewrite.internalValue = value.regexRewrite;
    }
  }

  // auto_host_rewrite - computed: false, optional: true, required: false
  private _autoHostRewrite?: boolean | cdktf.IResolvable; 
  public get autoHostRewrite() {
    return this.getBooleanAttribute('auto_host_rewrite');
  }
  public set autoHostRewrite(value: boolean | cdktf.IResolvable) {
    this._autoHostRewrite = value;
  }
  public resetAutoHostRewrite() {
    this._autoHostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHostRewriteInput() {
    return this._autoHostRewrite;
  }

  // backend_group_id - computed: false, optional: false, required: true
  private _backendGroupId?: string; 
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }
  public set backendGroupId(value: string) {
    this._backendGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendGroupIdInput() {
    return this._backendGroupId;
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // prefix_rewrite - computed: false, optional: true, required: false
  private _prefixRewrite?: string; 
  public get prefixRewrite() {
    return this.getStringAttribute('prefix_rewrite');
  }
  public set prefixRewrite(value: string) {
    this._prefixRewrite = value;
  }
  public resetPrefixRewrite() {
    this._prefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRewriteInput() {
    return this._prefixRewrite;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // upgrade_types - computed: false, optional: true, required: false
  private _upgradeTypes?: string[]; 
  public get upgradeTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('upgrade_types'));
  }
  public set upgradeTypes(value: string[]) {
    this._upgradeTypes = value;
  }
  public resetUpgradeTypes() {
    this._upgradeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTypesInput() {
    return this._upgradeTypes;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: AlbVirtualHostRouteHttpRouteHttpRouteActionRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }

  // regex_rewrite - computed: false, optional: true, required: false
  private _regexRewrite = new AlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewriteOutputReference(this, "regex_rewrite");
  public get regexRewrite() {
    return this._regexRewrite;
  }
  public putRegexRewrite(value: AlbVirtualHostRouteHttpRouteHttpRouteActionRegexRewrite) {
    this._regexRewrite.internalValue = value;
  }
  public resetRegexRewrite() {
    this._regexRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexRewriteInput() {
    return this._regexRewrite.internalValue;
  }
}
export interface AlbVirtualHostRouteHttpRouteRedirectAction {
  /**
  * If set, remove query part.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#remove_query AlbVirtualHost#remove_query}
  */
  readonly removeQuery?: boolean | cdktf.IResolvable;
  /**
  * Replaces hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#replace_host AlbVirtualHost#replace_host}
  */
  readonly replaceHost?: string;
  /**
  * Replace path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#replace_path AlbVirtualHost#replace_path}
  */
  readonly replacePath?: string;
  /**
  * Replaces port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#replace_port AlbVirtualHost#replace_port}
  */
  readonly replacePort?: number;
  /**
  * Replace only matched prefix. Example:<br/> match:{ prefix_match: `/some` } <br/> redirect: { replace_prefix: `/other` } <br/> will redirect `/something` to `/otherthing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#replace_prefix AlbVirtualHost#replace_prefix}
  */
  readonly replacePrefix?: string;
  /**
  * Replaces scheme. If the original scheme is `http` or `https`, will also remove the 80 or 443 port, if present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#replace_scheme AlbVirtualHost#replace_scheme}
  */
  readonly replaceScheme?: string;
  /**
  * The HTTP status code to use in the redirect response. Supported values are: `moved_permanently`, `found`, `see_other`, `temporary_redirect`, `permanent_redirect`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#response_code AlbVirtualHost#response_code}
  */
  readonly responseCode?: string;
}

export function albVirtualHostRouteHttpRouteRedirectActionToTerraform(struct?: AlbVirtualHostRouteHttpRouteRedirectActionOutputReference | AlbVirtualHostRouteHttpRouteRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remove_query: cdktf.booleanToTerraform(struct!.removeQuery),
    replace_host: cdktf.stringToTerraform(struct!.replaceHost),
    replace_path: cdktf.stringToTerraform(struct!.replacePath),
    replace_port: cdktf.numberToTerraform(struct!.replacePort),
    replace_prefix: cdktf.stringToTerraform(struct!.replacePrefix),
    replace_scheme: cdktf.stringToTerraform(struct!.replaceScheme),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
  }
}


export function albVirtualHostRouteHttpRouteRedirectActionToHclTerraform(struct?: AlbVirtualHostRouteHttpRouteRedirectActionOutputReference | AlbVirtualHostRouteHttpRouteRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remove_query: {
      value: cdktf.booleanToHclTerraform(struct!.removeQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace_host: {
      value: cdktf.stringToHclTerraform(struct!.replaceHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_path: {
      value: cdktf.stringToHclTerraform(struct!.replacePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_port: {
      value: cdktf.numberToHclTerraform(struct!.replacePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replace_prefix: {
      value: cdktf.stringToHclTerraform(struct!.replacePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_scheme: {
      value: cdktf.stringToHclTerraform(struct!.replaceScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteHttpRouteRedirectActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteHttpRouteRedirectAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._removeQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeQuery = this._removeQuery;
    }
    if (this._replaceHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceHost = this._replaceHost;
    }
    if (this._replacePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePath = this._replacePath;
    }
    if (this._replacePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePort = this._replacePort;
    }
    if (this._replacePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePrefix = this._replacePrefix;
    }
    if (this._replaceScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceScheme = this._replaceScheme;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRouteRedirectAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._removeQuery = undefined;
      this._replaceHost = undefined;
      this._replacePath = undefined;
      this._replacePort = undefined;
      this._replacePrefix = undefined;
      this._replaceScheme = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._removeQuery = value.removeQuery;
      this._replaceHost = value.replaceHost;
      this._replacePath = value.replacePath;
      this._replacePort = value.replacePort;
      this._replacePrefix = value.replacePrefix;
      this._replaceScheme = value.replaceScheme;
      this._responseCode = value.responseCode;
    }
  }

  // remove_query - computed: false, optional: true, required: false
  private _removeQuery?: boolean | cdktf.IResolvable; 
  public get removeQuery() {
    return this.getBooleanAttribute('remove_query');
  }
  public set removeQuery(value: boolean | cdktf.IResolvable) {
    this._removeQuery = value;
  }
  public resetRemoveQuery() {
    this._removeQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeQueryInput() {
    return this._removeQuery;
  }

  // replace_host - computed: false, optional: true, required: false
  private _replaceHost?: string; 
  public get replaceHost() {
    return this.getStringAttribute('replace_host');
  }
  public set replaceHost(value: string) {
    this._replaceHost = value;
  }
  public resetReplaceHost() {
    this._replaceHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceHostInput() {
    return this._replaceHost;
  }

  // replace_path - computed: false, optional: true, required: false
  private _replacePath?: string; 
  public get replacePath() {
    return this.getStringAttribute('replace_path');
  }
  public set replacePath(value: string) {
    this._replacePath = value;
  }
  public resetReplacePath() {
    this._replacePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePathInput() {
    return this._replacePath;
  }

  // replace_port - computed: false, optional: true, required: false
  private _replacePort?: number; 
  public get replacePort() {
    return this.getNumberAttribute('replace_port');
  }
  public set replacePort(value: number) {
    this._replacePort = value;
  }
  public resetReplacePort() {
    this._replacePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePortInput() {
    return this._replacePort;
  }

  // replace_prefix - computed: false, optional: true, required: false
  private _replacePrefix?: string; 
  public get replacePrefix() {
    return this.getStringAttribute('replace_prefix');
  }
  public set replacePrefix(value: string) {
    this._replacePrefix = value;
  }
  public resetReplacePrefix() {
    this._replacePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePrefixInput() {
    return this._replacePrefix;
  }

  // replace_scheme - computed: false, optional: true, required: false
  private _replaceScheme?: string; 
  public get replaceScheme() {
    return this.getStringAttribute('replace_scheme');
  }
  public set replaceScheme(value: string) {
    this._replaceScheme = value;
  }
  public resetReplaceScheme() {
    this._replaceScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceSchemeInput() {
    return this._replaceScheme;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface AlbVirtualHostRouteHttpRoute {
  /**
  * direct_response_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#direct_response_action AlbVirtualHost#direct_response_action}
  */
  readonly directResponseAction?: AlbVirtualHostRouteHttpRouteDirectResponseAction;
  /**
  * http_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#http_match AlbVirtualHost#http_match}
  */
  readonly httpMatch?: AlbVirtualHostRouteHttpRouteHttpMatch[] | cdktf.IResolvable;
  /**
  * http_route_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#http_route_action AlbVirtualHost#http_route_action}
  */
  readonly httpRouteAction?: AlbVirtualHostRouteHttpRouteHttpRouteAction;
  /**
  * redirect_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#redirect_action AlbVirtualHost#redirect_action}
  */
  readonly redirectAction?: AlbVirtualHostRouteHttpRouteRedirectAction;
}

export function albVirtualHostRouteHttpRouteToTerraform(struct?: AlbVirtualHostRouteHttpRouteOutputReference | AlbVirtualHostRouteHttpRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direct_response_action: albVirtualHostRouteHttpRouteDirectResponseActionToTerraform(struct!.directResponseAction),
    http_match: cdktf.listMapper(albVirtualHostRouteHttpRouteHttpMatchToTerraform, true)(struct!.httpMatch),
    http_route_action: albVirtualHostRouteHttpRouteHttpRouteActionToTerraform(struct!.httpRouteAction),
    redirect_action: albVirtualHostRouteHttpRouteRedirectActionToTerraform(struct!.redirectAction),
  }
}


export function albVirtualHostRouteHttpRouteToHclTerraform(struct?: AlbVirtualHostRouteHttpRouteOutputReference | AlbVirtualHostRouteHttpRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direct_response_action: {
      value: albVirtualHostRouteHttpRouteDirectResponseActionToHclTerraform(struct!.directResponseAction),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteHttpRouteDirectResponseActionList",
    },
    http_match: {
      value: cdktf.listMapperHcl(albVirtualHostRouteHttpRouteHttpMatchToHclTerraform, true)(struct!.httpMatch),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteHttpRouteHttpMatchList",
    },
    http_route_action: {
      value: albVirtualHostRouteHttpRouteHttpRouteActionToHclTerraform(struct!.httpRouteAction),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteHttpRouteHttpRouteActionList",
    },
    redirect_action: {
      value: albVirtualHostRouteHttpRouteRedirectActionToHclTerraform(struct!.redirectAction),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteHttpRouteRedirectActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteHttpRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteHttpRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directResponseAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directResponseAction = this._directResponseAction?.internalValue;
    }
    if (this._httpMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMatch = this._httpMatch?.internalValue;
    }
    if (this._httpRouteAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRouteAction = this._httpRouteAction?.internalValue;
    }
    if (this._redirectAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectAction = this._redirectAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteHttpRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directResponseAction.internalValue = undefined;
      this._httpMatch.internalValue = undefined;
      this._httpRouteAction.internalValue = undefined;
      this._redirectAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directResponseAction.internalValue = value.directResponseAction;
      this._httpMatch.internalValue = value.httpMatch;
      this._httpRouteAction.internalValue = value.httpRouteAction;
      this._redirectAction.internalValue = value.redirectAction;
    }
  }

  // direct_response_action - computed: false, optional: true, required: false
  private _directResponseAction = new AlbVirtualHostRouteHttpRouteDirectResponseActionOutputReference(this, "direct_response_action");
  public get directResponseAction() {
    return this._directResponseAction;
  }
  public putDirectResponseAction(value: AlbVirtualHostRouteHttpRouteDirectResponseAction) {
    this._directResponseAction.internalValue = value;
  }
  public resetDirectResponseAction() {
    this._directResponseAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directResponseActionInput() {
    return this._directResponseAction.internalValue;
  }

  // http_match - computed: false, optional: true, required: false
  private _httpMatch = new AlbVirtualHostRouteHttpRouteHttpMatchList(this, "http_match", false);
  public get httpMatch() {
    return this._httpMatch;
  }
  public putHttpMatch(value: AlbVirtualHostRouteHttpRouteHttpMatch[] | cdktf.IResolvable) {
    this._httpMatch.internalValue = value;
  }
  public resetHttpMatch() {
    this._httpMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMatchInput() {
    return this._httpMatch.internalValue;
  }

  // http_route_action - computed: false, optional: true, required: false
  private _httpRouteAction = new AlbVirtualHostRouteHttpRouteHttpRouteActionOutputReference(this, "http_route_action");
  public get httpRouteAction() {
    return this._httpRouteAction;
  }
  public putHttpRouteAction(value: AlbVirtualHostRouteHttpRouteHttpRouteAction) {
    this._httpRouteAction.internalValue = value;
  }
  public resetHttpRouteAction() {
    this._httpRouteAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteActionInput() {
    return this._httpRouteAction.internalValue;
  }

  // redirect_action - computed: false, optional: true, required: false
  private _redirectAction = new AlbVirtualHostRouteHttpRouteRedirectActionOutputReference(this, "redirect_action");
  public get redirectAction() {
    return this._redirectAction;
  }
  public putRedirectAction(value: AlbVirtualHostRouteHttpRouteRedirectAction) {
    this._redirectAction.internalValue = value;
  }
  public resetRedirectAction() {
    this._redirectAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectActionInput() {
    return this._redirectAction.internalValue;
  }
}
export interface AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValue {
  /**
  * Match exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#exact AlbVirtualHost#exact}
  */
  readonly exact?: string;
  /**
  * Match prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#prefix AlbVirtualHost#prefix}
  */
  readonly prefix?: string;
  /**
  * Match regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#regex AlbVirtualHost#regex}
  */
  readonly regex?: string;
}

export function albVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueToTerraform(struct?: AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueOutputReference | AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function albVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueToHclTerraform(struct?: AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueOutputReference | AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#name AlbVirtualHost#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#value AlbVirtualHost#value}
  */
  readonly value?: AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValue;
}

export function albVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderToTerraform(struct?: AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderOutputReference | AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: albVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueToTerraform(struct!.value),
  }
}


export function albVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderToHclTerraform(struct?: AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderOutputReference | AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeader): any {
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
    value: {
      value: albVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value = new AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#any AlbVirtualHost#any}
  */
  readonly any?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#remote_ip AlbVirtualHost#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#header AlbVirtualHost#header}
  */
  readonly header?: AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeader;
}

export function albVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsToTerraform(struct?: AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: cdktf.booleanToTerraform(struct!.any),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    header: albVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderToTerraform(struct!.header),
  }
}


export function albVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsToHclTerraform(struct?: AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any: {
      value: cdktf.booleanToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: albVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._any = undefined;
      this._remoteIp = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._any = value.any;
      this._remoteIp = value.remoteIp;
      this._header.internalValue = value.header;
    }
  }

  // any - computed: false, optional: true, required: false
  private _any?: boolean | cdktf.IResolvable; 
  public get any() {
    return this.getBooleanAttribute('any');
  }
  public set any(value: boolean | cdktf.IResolvable) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // remote_ip - computed: false, optional: true, required: false
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  public resetRemoteIp() {
    this._remoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // header - computed: false, optional: true, required: false
  private _header = new AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsList extends cdktf.ComplexList {
  public internalValue? : AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipals[] | cdktf.IResolvable

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
  public get(index: number): AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsOutputReference {
    return new AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbVirtualHostRouteRouteOptionsRbacPrincipals {
  /**
  * and_principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#and_principals AlbVirtualHost#and_principals}
  */
  readonly andPrincipals: AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipals[] | cdktf.IResolvable;
}

export function albVirtualHostRouteRouteOptionsRbacPrincipalsToTerraform(struct?: AlbVirtualHostRouteRouteOptionsRbacPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_principals: cdktf.listMapper(albVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsToTerraform, true)(struct!.andPrincipals),
  }
}


export function albVirtualHostRouteRouteOptionsRbacPrincipalsToHclTerraform(struct?: AlbVirtualHostRouteRouteOptionsRbacPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and_principals: {
      value: cdktf.listMapperHcl(albVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsToHclTerraform, true)(struct!.andPrincipals),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteRouteOptionsRbacPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbVirtualHostRouteRouteOptionsRbacPrincipals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andPrincipals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andPrincipals = this._andPrincipals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteRouteOptionsRbacPrincipals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andPrincipals.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andPrincipals.internalValue = value.andPrincipals;
    }
  }

  // and_principals - computed: false, optional: false, required: true
  private _andPrincipals = new AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipalsList(this, "and_principals", false);
  public get andPrincipals() {
    return this._andPrincipals;
  }
  public putAndPrincipals(value: AlbVirtualHostRouteRouteOptionsRbacPrincipalsAndPrincipals[] | cdktf.IResolvable) {
    this._andPrincipals.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get andPrincipalsInput() {
    return this._andPrincipals.internalValue;
  }
}

export class AlbVirtualHostRouteRouteOptionsRbacPrincipalsList extends cdktf.ComplexList {
  public internalValue? : AlbVirtualHostRouteRouteOptionsRbacPrincipals[] | cdktf.IResolvable

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
  public get(index: number): AlbVirtualHostRouteRouteOptionsRbacPrincipalsOutputReference {
    return new AlbVirtualHostRouteRouteOptionsRbacPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbVirtualHostRouteRouteOptionsRbac {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#action AlbVirtualHost#action}
  */
  readonly action?: string;
  /**
  * principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#principals AlbVirtualHost#principals}
  */
  readonly principals: AlbVirtualHostRouteRouteOptionsRbacPrincipals[] | cdktf.IResolvable;
}

export function albVirtualHostRouteRouteOptionsRbacToTerraform(struct?: AlbVirtualHostRouteRouteOptionsRbacOutputReference | AlbVirtualHostRouteRouteOptionsRbac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    principals: cdktf.listMapper(albVirtualHostRouteRouteOptionsRbacPrincipalsToTerraform, true)(struct!.principals),
  }
}


export function albVirtualHostRouteRouteOptionsRbacToHclTerraform(struct?: AlbVirtualHostRouteRouteOptionsRbacOutputReference | AlbVirtualHostRouteRouteOptionsRbac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principals: {
      value: cdktf.listMapperHcl(albVirtualHostRouteRouteOptionsRbacPrincipalsToHclTerraform, true)(struct!.principals),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteRouteOptionsRbacPrincipalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteRouteOptionsRbacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteRouteOptionsRbac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._principals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteRouteOptionsRbac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._principals.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._principals.internalValue = value.principals;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // principals - computed: false, optional: false, required: true
  private _principals = new AlbVirtualHostRouteRouteOptionsRbacPrincipalsList(this, "principals", false);
  public get principals() {
    return this._principals;
  }
  public putPrincipals(value: AlbVirtualHostRouteRouteOptionsRbacPrincipals[] | cdktf.IResolvable) {
    this._principals.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals.internalValue;
  }
}
export interface AlbVirtualHostRouteRouteOptions {
  /**
  * SWS profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#security_profile_id AlbVirtualHost#security_profile_id}
  */
  readonly securityProfileId?: string;
  /**
  * rbac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#rbac AlbVirtualHost#rbac}
  */
  readonly rbac?: AlbVirtualHostRouteRouteOptionsRbac;
}

export function albVirtualHostRouteRouteOptionsToTerraform(struct?: AlbVirtualHostRouteRouteOptionsOutputReference | AlbVirtualHostRouteRouteOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_profile_id: cdktf.stringToTerraform(struct!.securityProfileId),
    rbac: albVirtualHostRouteRouteOptionsRbacToTerraform(struct!.rbac),
  }
}


export function albVirtualHostRouteRouteOptionsToHclTerraform(struct?: AlbVirtualHostRouteRouteOptionsOutputReference | AlbVirtualHostRouteRouteOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.securityProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rbac: {
      value: albVirtualHostRouteRouteOptionsRbacToHclTerraform(struct!.rbac),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteRouteOptionsRbacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteRouteOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteRouteOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProfileId = this._securityProfileId;
    }
    if (this._rbac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbac = this._rbac?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteRouteOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityProfileId = undefined;
      this._rbac.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityProfileId = value.securityProfileId;
      this._rbac.internalValue = value.rbac;
    }
  }

  // security_profile_id - computed: false, optional: true, required: false
  private _securityProfileId?: string; 
  public get securityProfileId() {
    return this.getStringAttribute('security_profile_id');
  }
  public set securityProfileId(value: string) {
    this._securityProfileId = value;
  }
  public resetSecurityProfileId() {
    this._securityProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileIdInput() {
    return this._securityProfileId;
  }

  // rbac - computed: false, optional: true, required: false
  private _rbac = new AlbVirtualHostRouteRouteOptionsRbacOutputReference(this, "rbac");
  public get rbac() {
    return this._rbac;
  }
  public putRbac(value: AlbVirtualHostRouteRouteOptionsRbac) {
    this._rbac.internalValue = value;
  }
  public resetRbac() {
    this._rbac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacInput() {
    return this._rbac.internalValue;
  }
}
export interface AlbVirtualHostRoute {
  /**
  * Disables security profile for the route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#disable_security_profile AlbVirtualHost#disable_security_profile}
  */
  readonly disableSecurityProfile?: boolean | cdktf.IResolvable;
  /**
  * Name of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#name AlbVirtualHost#name}
  */
  readonly name?: string;
  /**
  * grpc_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#grpc_route AlbVirtualHost#grpc_route}
  */
  readonly grpcRoute?: AlbVirtualHostRouteGrpcRoute;
  /**
  * http_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#http_route AlbVirtualHost#http_route}
  */
  readonly httpRoute?: AlbVirtualHostRouteHttpRoute;
  /**
  * route_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#route_options AlbVirtualHost#route_options}
  */
  readonly routeOptions?: AlbVirtualHostRouteRouteOptions;
}

export function albVirtualHostRouteToTerraform(struct?: AlbVirtualHostRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_security_profile: cdktf.booleanToTerraform(struct!.disableSecurityProfile),
    name: cdktf.stringToTerraform(struct!.name),
    grpc_route: albVirtualHostRouteGrpcRouteToTerraform(struct!.grpcRoute),
    http_route: albVirtualHostRouteHttpRouteToTerraform(struct!.httpRoute),
    route_options: albVirtualHostRouteRouteOptionsToTerraform(struct!.routeOptions),
  }
}


export function albVirtualHostRouteToHclTerraform(struct?: AlbVirtualHostRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_security_profile: {
      value: cdktf.booleanToHclTerraform(struct!.disableSecurityProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grpc_route: {
      value: albVirtualHostRouteGrpcRouteToHclTerraform(struct!.grpcRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteGrpcRouteList",
    },
    http_route: {
      value: albVirtualHostRouteHttpRouteToHclTerraform(struct!.httpRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteHttpRouteList",
    },
    route_options: {
      value: albVirtualHostRouteRouteOptionsToHclTerraform(struct!.routeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteRouteOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbVirtualHostRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSecurityProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSecurityProfile = this._disableSecurityProfile;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._grpcRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcRoute = this._grpcRoute?.internalValue;
    }
    if (this._httpRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRoute = this._httpRoute?.internalValue;
    }
    if (this._routeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeOptions = this._routeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableSecurityProfile = undefined;
      this._name = undefined;
      this._grpcRoute.internalValue = undefined;
      this._httpRoute.internalValue = undefined;
      this._routeOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableSecurityProfile = value.disableSecurityProfile;
      this._name = value.name;
      this._grpcRoute.internalValue = value.grpcRoute;
      this._httpRoute.internalValue = value.httpRoute;
      this._routeOptions.internalValue = value.routeOptions;
    }
  }

  // disable_security_profile - computed: false, optional: true, required: false
  private _disableSecurityProfile?: boolean | cdktf.IResolvable; 
  public get disableSecurityProfile() {
    return this.getBooleanAttribute('disable_security_profile');
  }
  public set disableSecurityProfile(value: boolean | cdktf.IResolvable) {
    this._disableSecurityProfile = value;
  }
  public resetDisableSecurityProfile() {
    this._disableSecurityProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSecurityProfileInput() {
    return this._disableSecurityProfile;
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

  // grpc_route - computed: false, optional: true, required: false
  private _grpcRoute = new AlbVirtualHostRouteGrpcRouteOutputReference(this, "grpc_route");
  public get grpcRoute() {
    return this._grpcRoute;
  }
  public putGrpcRoute(value: AlbVirtualHostRouteGrpcRoute) {
    this._grpcRoute.internalValue = value;
  }
  public resetGrpcRoute() {
    this._grpcRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcRouteInput() {
    return this._grpcRoute.internalValue;
  }

  // http_route - computed: false, optional: true, required: false
  private _httpRoute = new AlbVirtualHostRouteHttpRouteOutputReference(this, "http_route");
  public get httpRoute() {
    return this._httpRoute;
  }
  public putHttpRoute(value: AlbVirtualHostRouteHttpRoute) {
    this._httpRoute.internalValue = value;
  }
  public resetHttpRoute() {
    this._httpRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteInput() {
    return this._httpRoute.internalValue;
  }

  // route_options - computed: false, optional: true, required: false
  private _routeOptions = new AlbVirtualHostRouteRouteOptionsOutputReference(this, "route_options");
  public get routeOptions() {
    return this._routeOptions;
  }
  public putRouteOptions(value: AlbVirtualHostRouteRouteOptions) {
    this._routeOptions.internalValue = value;
  }
  public resetRouteOptions() {
    this._routeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeOptionsInput() {
    return this._routeOptions.internalValue;
  }
}

export class AlbVirtualHostRouteList extends cdktf.ComplexList {
  public internalValue? : AlbVirtualHostRoute[] | cdktf.IResolvable

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
  public get(index: number): AlbVirtualHostRouteOutputReference {
    return new AlbVirtualHostRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValue {
  /**
  * Match exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#exact AlbVirtualHost#exact}
  */
  readonly exact?: string;
  /**
  * Match prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#prefix AlbVirtualHost#prefix}
  */
  readonly prefix?: string;
  /**
  * Match regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#regex AlbVirtualHost#regex}
  */
  readonly regex?: string;
}

export function albVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueToTerraform(struct?: AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueOutputReference | AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function albVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueToHclTerraform(struct?: AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueOutputReference | AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#name AlbVirtualHost#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#value AlbVirtualHost#value}
  */
  readonly value?: AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValue;
}

export function albVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderToTerraform(struct?: AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderOutputReference | AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: albVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueToTerraform(struct!.value),
  }
}


export function albVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderToHclTerraform(struct?: AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderOutputReference | AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeader): any {
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
    value: {
      value: albVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value = new AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#any AlbVirtualHost#any}
  */
  readonly any?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#remote_ip AlbVirtualHost#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#header AlbVirtualHost#header}
  */
  readonly header?: AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeader;
}

export function albVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsToTerraform(struct?: AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: cdktf.booleanToTerraform(struct!.any),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    header: albVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderToTerraform(struct!.header),
  }
}


export function albVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsToHclTerraform(struct?: AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any: {
      value: cdktf.booleanToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: albVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._any = undefined;
      this._remoteIp = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._any = value.any;
      this._remoteIp = value.remoteIp;
      this._header.internalValue = value.header;
    }
  }

  // any - computed: false, optional: true, required: false
  private _any?: boolean | cdktf.IResolvable; 
  public get any() {
    return this.getBooleanAttribute('any');
  }
  public set any(value: boolean | cdktf.IResolvable) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // remote_ip - computed: false, optional: true, required: false
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  public resetRemoteIp() {
    this._remoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // header - computed: false, optional: true, required: false
  private _header = new AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsList extends cdktf.ComplexList {
  public internalValue? : AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipals[] | cdktf.IResolvable

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
  public get(index: number): AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsOutputReference {
    return new AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbVirtualHostRouteOptionsRbacPrincipals {
  /**
  * and_principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#and_principals AlbVirtualHost#and_principals}
  */
  readonly andPrincipals: AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipals[] | cdktf.IResolvable;
}

export function albVirtualHostRouteOptionsRbacPrincipalsToTerraform(struct?: AlbVirtualHostRouteOptionsRbacPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_principals: cdktf.listMapper(albVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsToTerraform, true)(struct!.andPrincipals),
  }
}


export function albVirtualHostRouteOptionsRbacPrincipalsToHclTerraform(struct?: AlbVirtualHostRouteOptionsRbacPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and_principals: {
      value: cdktf.listMapperHcl(albVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsToHclTerraform, true)(struct!.andPrincipals),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteOptionsRbacPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbVirtualHostRouteOptionsRbacPrincipals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andPrincipals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andPrincipals = this._andPrincipals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteOptionsRbacPrincipals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andPrincipals.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andPrincipals.internalValue = value.andPrincipals;
    }
  }

  // and_principals - computed: false, optional: false, required: true
  private _andPrincipals = new AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipalsList(this, "and_principals", false);
  public get andPrincipals() {
    return this._andPrincipals;
  }
  public putAndPrincipals(value: AlbVirtualHostRouteOptionsRbacPrincipalsAndPrincipals[] | cdktf.IResolvable) {
    this._andPrincipals.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get andPrincipalsInput() {
    return this._andPrincipals.internalValue;
  }
}

export class AlbVirtualHostRouteOptionsRbacPrincipalsList extends cdktf.ComplexList {
  public internalValue? : AlbVirtualHostRouteOptionsRbacPrincipals[] | cdktf.IResolvable

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
  public get(index: number): AlbVirtualHostRouteOptionsRbacPrincipalsOutputReference {
    return new AlbVirtualHostRouteOptionsRbacPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbVirtualHostRouteOptionsRbac {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#action AlbVirtualHost#action}
  */
  readonly action?: string;
  /**
  * principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#principals AlbVirtualHost#principals}
  */
  readonly principals: AlbVirtualHostRouteOptionsRbacPrincipals[] | cdktf.IResolvable;
}

export function albVirtualHostRouteOptionsRbacToTerraform(struct?: AlbVirtualHostRouteOptionsRbacOutputReference | AlbVirtualHostRouteOptionsRbac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    principals: cdktf.listMapper(albVirtualHostRouteOptionsRbacPrincipalsToTerraform, true)(struct!.principals),
  }
}


export function albVirtualHostRouteOptionsRbacToHclTerraform(struct?: AlbVirtualHostRouteOptionsRbacOutputReference | AlbVirtualHostRouteOptionsRbac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principals: {
      value: cdktf.listMapperHcl(albVirtualHostRouteOptionsRbacPrincipalsToHclTerraform, true)(struct!.principals),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteOptionsRbacPrincipalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteOptionsRbacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteOptionsRbac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._principals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteOptionsRbac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._principals.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._principals.internalValue = value.principals;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // principals - computed: false, optional: false, required: true
  private _principals = new AlbVirtualHostRouteOptionsRbacPrincipalsList(this, "principals", false);
  public get principals() {
    return this._principals;
  }
  public putPrincipals(value: AlbVirtualHostRouteOptionsRbacPrincipals[] | cdktf.IResolvable) {
    this._principals.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals.internalValue;
  }
}
export interface AlbVirtualHostRouteOptions {
  /**
  * SWS profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#security_profile_id AlbVirtualHost#security_profile_id}
  */
  readonly securityProfileId?: string;
  /**
  * rbac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#rbac AlbVirtualHost#rbac}
  */
  readonly rbac?: AlbVirtualHostRouteOptionsRbac;
}

export function albVirtualHostRouteOptionsToTerraform(struct?: AlbVirtualHostRouteOptionsOutputReference | AlbVirtualHostRouteOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_profile_id: cdktf.stringToTerraform(struct!.securityProfileId),
    rbac: albVirtualHostRouteOptionsRbacToTerraform(struct!.rbac),
  }
}


export function albVirtualHostRouteOptionsToHclTerraform(struct?: AlbVirtualHostRouteOptionsOutputReference | AlbVirtualHostRouteOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.securityProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rbac: {
      value: albVirtualHostRouteOptionsRbacToHclTerraform(struct!.rbac),
      isBlock: true,
      type: "list",
      storageClassType: "AlbVirtualHostRouteOptionsRbacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostRouteOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbVirtualHostRouteOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProfileId = this._securityProfileId;
    }
    if (this._rbac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbac = this._rbac?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostRouteOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityProfileId = undefined;
      this._rbac.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityProfileId = value.securityProfileId;
      this._rbac.internalValue = value.rbac;
    }
  }

  // security_profile_id - computed: false, optional: true, required: false
  private _securityProfileId?: string; 
  public get securityProfileId() {
    return this.getStringAttribute('security_profile_id');
  }
  public set securityProfileId(value: string) {
    this._securityProfileId = value;
  }
  public resetSecurityProfileId() {
    this._securityProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileIdInput() {
    return this._securityProfileId;
  }

  // rbac - computed: false, optional: true, required: false
  private _rbac = new AlbVirtualHostRouteOptionsRbacOutputReference(this, "rbac");
  public get rbac() {
    return this._rbac;
  }
  public putRbac(value: AlbVirtualHostRouteOptionsRbac) {
    this._rbac.internalValue = value;
  }
  public resetRbac() {
    this._rbac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacInput() {
    return this._rbac.internalValue;
  }
}
export interface AlbVirtualHostTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#create AlbVirtualHost#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#delete AlbVirtualHost#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#update AlbVirtualHost#update}
  */
  readonly update?: string;
}

export function albVirtualHostTimeoutsToTerraform(struct?: AlbVirtualHostTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function albVirtualHostTimeoutsToHclTerraform(struct?: AlbVirtualHostTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbVirtualHostTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlbVirtualHostTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbVirtualHostTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host yandex_alb_virtual_host}
*/
export class AlbVirtualHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_alb_virtual_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlbVirtualHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlbVirtualHost to import
  * @param importFromId The id of the existing AlbVirtualHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlbVirtualHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_alb_virtual_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/alb_virtual_host yandex_alb_virtual_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbVirtualHostConfig
  */
  public constructor(scope: Construct, id: string, config: AlbVirtualHostConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_alb_virtual_host',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.177.0',
        providerVersionConstraint: '0.177.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authority = config.authority;
    this._httpRouterId = config.httpRouterId;
    this._id = config.id;
    this._name = config.name;
    this._modifyRequestHeaders.internalValue = config.modifyRequestHeaders;
    this._modifyResponseHeaders.internalValue = config.modifyResponseHeaders;
    this._rateLimit.internalValue = config.rateLimit;
    this._route.internalValue = config.route;
    this._routeOptions.internalValue = config.routeOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authority - computed: false, optional: true, required: false
  private _authority?: string[]; 
  public get authority() {
    return cdktf.Fn.tolist(this.getListAttribute('authority'));
  }
  public set authority(value: string[]) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority;
  }

  // http_router_id - computed: false, optional: false, required: true
  private _httpRouterId?: string; 
  public get httpRouterId() {
    return this.getStringAttribute('http_router_id');
  }
  public set httpRouterId(value: string) {
    this._httpRouterId = value;
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

  // modify_request_headers - computed: false, optional: true, required: false
  private _modifyRequestHeaders = new AlbVirtualHostModifyRequestHeadersList(this, "modify_request_headers", false);
  public get modifyRequestHeaders() {
    return this._modifyRequestHeaders;
  }
  public putModifyRequestHeaders(value: AlbVirtualHostModifyRequestHeaders[] | cdktf.IResolvable) {
    this._modifyRequestHeaders.internalValue = value;
  }
  public resetModifyRequestHeaders() {
    this._modifyRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyRequestHeadersInput() {
    return this._modifyRequestHeaders.internalValue;
  }

  // modify_response_headers - computed: false, optional: true, required: false
  private _modifyResponseHeaders = new AlbVirtualHostModifyResponseHeadersList(this, "modify_response_headers", false);
  public get modifyResponseHeaders() {
    return this._modifyResponseHeaders;
  }
  public putModifyResponseHeaders(value: AlbVirtualHostModifyResponseHeaders[] | cdktf.IResolvable) {
    this._modifyResponseHeaders.internalValue = value;
  }
  public resetModifyResponseHeaders() {
    this._modifyResponseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyResponseHeadersInput() {
    return this._modifyResponseHeaders.internalValue;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new AlbVirtualHostRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: AlbVirtualHostRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new AlbVirtualHostRouteList(this, "route", false);
  public get route() {
    return this._route;
  }
  public putRoute(value: AlbVirtualHostRoute[] | cdktf.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // route_options - computed: false, optional: true, required: false
  private _routeOptions = new AlbVirtualHostRouteOptionsOutputReference(this, "route_options");
  public get routeOptions() {
    return this._routeOptions;
  }
  public putRouteOptions(value: AlbVirtualHostRouteOptions) {
    this._routeOptions.internalValue = value;
  }
  public resetRouteOptions() {
    this._routeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeOptionsInput() {
    return this._routeOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlbVirtualHostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlbVirtualHostTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authority: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authority),
      http_router_id: cdktf.stringToTerraform(this._httpRouterId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      modify_request_headers: cdktf.listMapper(albVirtualHostModifyRequestHeadersToTerraform, true)(this._modifyRequestHeaders.internalValue),
      modify_response_headers: cdktf.listMapper(albVirtualHostModifyResponseHeadersToTerraform, true)(this._modifyResponseHeaders.internalValue),
      rate_limit: albVirtualHostRateLimitToTerraform(this._rateLimit.internalValue),
      route: cdktf.listMapper(albVirtualHostRouteToTerraform, true)(this._route.internalValue),
      route_options: albVirtualHostRouteOptionsToTerraform(this._routeOptions.internalValue),
      timeouts: albVirtualHostTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authority: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authority),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      modify_request_headers: {
        value: cdktf.listMapperHcl(albVirtualHostModifyRequestHeadersToHclTerraform, true)(this._modifyRequestHeaders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbVirtualHostModifyRequestHeadersList",
      },
      modify_response_headers: {
        value: cdktf.listMapperHcl(albVirtualHostModifyResponseHeadersToHclTerraform, true)(this._modifyResponseHeaders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbVirtualHostModifyResponseHeadersList",
      },
      rate_limit: {
        value: albVirtualHostRateLimitToHclTerraform(this._rateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbVirtualHostRateLimitList",
      },
      route: {
        value: cdktf.listMapperHcl(albVirtualHostRouteToHclTerraform, true)(this._route.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbVirtualHostRouteList",
      },
      route_options: {
        value: albVirtualHostRouteOptionsToHclTerraform(this._routeOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbVirtualHostRouteOptionsList",
      },
      timeouts: {
        value: albVirtualHostTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlbVirtualHostTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
