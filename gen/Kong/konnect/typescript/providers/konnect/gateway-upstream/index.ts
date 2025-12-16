// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayUpstreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Which load balancing algorithm to use. Default: "round-robin"; must be one of ["consistent-hashing", "latency", "least-connections", "round-robin", "sticky-sessions"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#algorithm GatewayUpstream#algorithm}
  */
  readonly algorithm?: string;
  /**
  * If set, the certificate to be used as client certificate while TLS handshaking to the upstream server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#client_certificate GatewayUpstream#client_certificate}
  */
  readonly clientCertificate?: GatewayUpstreamClientCertificate;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#control_plane_id GatewayUpstream#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#created_at GatewayUpstream#created_at}
  */
  readonly createdAt?: number;
  /**
  * What to use as hashing input if the primary `hash_on` does not return a hash (eg. header is missing, or no Consumer identified). Not available if `hash_on` is set to `cookie`. Default: "none"; must be one of ["consumer", "cookie", "header", "ip", "none", "path", "query_arg", "uri_capture"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#hash_fallback GatewayUpstream#hash_fallback}
  */
  readonly hashFallback?: string;
  /**
  * The header name to take the value from as hash input. Only required when `hash_fallback` is set to `header`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#hash_fallback_header GatewayUpstream#hash_fallback_header}
  */
  readonly hashFallbackHeader?: string;
  /**
  * The name of the query string argument to take the value from as hash input. Only required when `hash_fallback` is set to `query_arg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#hash_fallback_query_arg GatewayUpstream#hash_fallback_query_arg}
  */
  readonly hashFallbackQueryArg?: string;
  /**
  * The name of the route URI capture to take the value from as hash input. Only required when `hash_fallback` is set to `uri_capture`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#hash_fallback_uri_capture GatewayUpstream#hash_fallback_uri_capture}
  */
  readonly hashFallbackUriCapture?: string;
  /**
  * What to use as hashing input. Using `none` results in a weighted-round-robin scheme with no hashing. Default: "none"; must be one of ["consumer", "cookie", "header", "ip", "none", "path", "query_arg", "uri_capture"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#hash_on GatewayUpstream#hash_on}
  */
  readonly hashOn?: string;
  /**
  * The cookie name to take the value from as hash input. Only required when `hash_on` or `hash_fallback` is set to `cookie`. If the specified cookie is not in the request, Kong will generate a value and set the cookie in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#hash_on_cookie GatewayUpstream#hash_on_cookie}
  */
  readonly hashOnCookie?: string;
  /**
  * The cookie path to set in the response headers. Only required when `hash_on` or `hash_fallback` is set to `cookie`. Default: "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#hash_on_cookie_path GatewayUpstream#hash_on_cookie_path}
  */
  readonly hashOnCookiePath?: string;
  /**
  * The header name to take the value from as hash input. Only required when `hash_on` is set to `header`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#hash_on_header GatewayUpstream#hash_on_header}
  */
  readonly hashOnHeader?: string;
  /**
  * The name of the query string argument to take the value from as hash input. Only required when `hash_on` is set to `query_arg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#hash_on_query_arg GatewayUpstream#hash_on_query_arg}
  */
  readonly hashOnQueryArg?: string;
  /**
  * The name of the route URI capture to take the value from as hash input. Only required when `hash_on` is set to `uri_capture`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#hash_on_uri_capture GatewayUpstream#hash_on_uri_capture}
  */
  readonly hashOnUriCapture?: string;
  /**
  * The array of healthchecks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#healthchecks GatewayUpstream#healthchecks}
  */
  readonly healthchecks?: GatewayUpstreamHealthchecks;
  /**
  * The hostname to be used as `Host` header when proxying requests through Kong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#host_header GatewayUpstream#host_header}
  */
  readonly hostHeader?: string;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#id GatewayUpstream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This is a hostname, which must be equal to the `host` of a Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#name GatewayUpstream#name}
  */
  readonly name: string;
  /**
  * The number of slots in the load balancer algorithm. If `algorithm` is set to `round-robin`, this setting determines the maximum number of slots. If `algorithm` is set to `consistent-hashing`, this setting determines the actual number of slots in the algorithm. Accepts an integer in the range `10`-`65536`. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#slots GatewayUpstream#slots}
  */
  readonly slots?: number;
  /**
  * The cookie name to keep sticky sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#sticky_sessions_cookie GatewayUpstream#sticky_sessions_cookie}
  */
  readonly stickySessionsCookie?: string;
  /**
  * A string representing a URL path, such as /path/to/resource. Must start with a forward slash (/) and must not contain empty segments (i.e., two consecutive forward slashes). Default: "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#sticky_sessions_cookie_path GatewayUpstream#sticky_sessions_cookie_path}
  */
  readonly stickySessionsCookiePath?: string;
  /**
  * An optional set of strings associated with the Upstream for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#tags GatewayUpstream#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#updated_at GatewayUpstream#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * If set, the balancer will use SRV hostname(if DNS Answer has SRV record) as the proxy upstream `Host`. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#use_srv_name GatewayUpstream#use_srv_name}
  */
  readonly useSrvName?: boolean | cdktf.IResolvable;
}
export interface GatewayUpstreamClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#id GatewayUpstream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayUpstreamClientCertificateToTerraform(struct?: GatewayUpstreamClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayUpstreamClientCertificateToHclTerraform(struct?: GatewayUpstreamClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayUpstreamClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayUpstreamClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayUpstreamClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface GatewayUpstreamHealthchecksActiveHealthy {
  /**
  * Default: [200,302]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#http_statuses GatewayUpstream#http_statuses}
  */
  readonly httpStatuses?: number[];
  /**
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#interval GatewayUpstream#interval}
  */
  readonly interval?: number;
  /**
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#successes GatewayUpstream#successes}
  */
  readonly successes?: number;
}

export function gatewayUpstreamHealthchecksActiveHealthyToTerraform(struct?: GatewayUpstreamHealthchecksActiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_statuses: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.httpStatuses),
    interval: cdktf.numberToTerraform(struct!.interval),
    successes: cdktf.numberToTerraform(struct!.successes),
  }
}


export function gatewayUpstreamHealthchecksActiveHealthyToHclTerraform(struct?: GatewayUpstreamHealthchecksActiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_statuses: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.httpStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    successes: {
      value: cdktf.numberToHclTerraform(struct!.successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayUpstreamHealthchecksActiveHealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayUpstreamHealthchecksActiveHealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatuses = this._httpStatuses;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successes = this._successes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayUpstreamHealthchecksActiveHealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpStatuses = undefined;
      this._interval = undefined;
      this._successes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpStatuses = value.httpStatuses;
      this._interval = value.interval;
      this._successes = value.successes;
    }
  }

  // http_statuses - computed: true, optional: true, required: false
  private _httpStatuses?: number[]; 
  public get httpStatuses() {
    return this.getNumberListAttribute('http_statuses');
  }
  public set httpStatuses(value: number[]) {
    this._httpStatuses = value;
  }
  public resetHttpStatuses() {
    this._httpStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusesInput() {
    return this._httpStatuses;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // successes - computed: true, optional: true, required: false
  private _successes?: number; 
  public get successes() {
    return this.getNumberAttribute('successes');
  }
  public set successes(value: number) {
    this._successes = value;
  }
  public resetSuccesses() {
    this._successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successesInput() {
    return this._successes;
  }
}
export interface GatewayUpstreamHealthchecksActiveUnhealthy {
  /**
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#http_failures GatewayUpstream#http_failures}
  */
  readonly httpFailures?: number;
  /**
  * Default: [429,404,500,501,502,503,504,505]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#http_statuses GatewayUpstream#http_statuses}
  */
  readonly httpStatuses?: number[];
  /**
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#interval GatewayUpstream#interval}
  */
  readonly interval?: number;
  /**
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#tcp_failures GatewayUpstream#tcp_failures}
  */
  readonly tcpFailures?: number;
  /**
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#timeouts GatewayUpstream#timeouts}
  */
  readonly timeouts?: number;
}

export function gatewayUpstreamHealthchecksActiveUnhealthyToTerraform(struct?: GatewayUpstreamHealthchecksActiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_failures: cdktf.numberToTerraform(struct!.httpFailures),
    http_statuses: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.httpStatuses),
    interval: cdktf.numberToTerraform(struct!.interval),
    tcp_failures: cdktf.numberToTerraform(struct!.tcpFailures),
    timeouts: cdktf.numberToTerraform(struct!.timeouts),
  }
}


export function gatewayUpstreamHealthchecksActiveUnhealthyToHclTerraform(struct?: GatewayUpstreamHealthchecksActiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_failures: {
      value: cdktf.numberToHclTerraform(struct!.httpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_statuses: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.httpStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_failures: {
      value: cdktf.numberToHclTerraform(struct!.tcpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeouts: {
      value: cdktf.numberToHclTerraform(struct!.timeouts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayUpstreamHealthchecksActiveUnhealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayUpstreamHealthchecksActiveUnhealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFailures = this._httpFailures;
    }
    if (this._httpStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatuses = this._httpStatuses;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._tcpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFailures = this._tcpFailures;
    }
    if (this._timeouts !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayUpstreamHealthchecksActiveUnhealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFailures = undefined;
      this._httpStatuses = undefined;
      this._interval = undefined;
      this._tcpFailures = undefined;
      this._timeouts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFailures = value.httpFailures;
      this._httpStatuses = value.httpStatuses;
      this._interval = value.interval;
      this._tcpFailures = value.tcpFailures;
      this._timeouts = value.timeouts;
    }
  }

  // http_failures - computed: true, optional: true, required: false
  private _httpFailures?: number; 
  public get httpFailures() {
    return this.getNumberAttribute('http_failures');
  }
  public set httpFailures(value: number) {
    this._httpFailures = value;
  }
  public resetHttpFailures() {
    this._httpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFailuresInput() {
    return this._httpFailures;
  }

  // http_statuses - computed: true, optional: true, required: false
  private _httpStatuses?: number[]; 
  public get httpStatuses() {
    return this.getNumberListAttribute('http_statuses');
  }
  public set httpStatuses(value: number[]) {
    this._httpStatuses = value;
  }
  public resetHttpStatuses() {
    this._httpStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusesInput() {
    return this._httpStatuses;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // tcp_failures - computed: true, optional: true, required: false
  private _tcpFailures?: number; 
  public get tcpFailures() {
    return this.getNumberAttribute('tcp_failures');
  }
  public set tcpFailures(value: number) {
    this._tcpFailures = value;
  }
  public resetTcpFailures() {
    this._tcpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFailuresInput() {
    return this._tcpFailures;
  }

  // timeouts - computed: true, optional: true, required: false
  private _timeouts?: number; 
  public get timeouts() {
    return this.getNumberAttribute('timeouts');
  }
  public set timeouts(value: number) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts;
  }
}
export interface GatewayUpstreamHealthchecksActive {
  /**
  * Default: 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#concurrency GatewayUpstream#concurrency}
  */
  readonly concurrency?: number;
  /**
  * A map of header names to arrays of header values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#headers GatewayUpstream#headers}
  */
  readonly headers?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#healthy GatewayUpstream#healthy}
  */
  readonly healthy?: GatewayUpstreamHealthchecksActiveHealthy;
  /**
  * A string representing a URL path, such as /path/to/resource. Must start with a forward slash (/) and must not contain empty segments (i.e., two consecutive forward slashes). Default: "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#http_path GatewayUpstream#http_path}
  */
  readonly httpPath?: string;
  /**
  * A string representing an SNI (server name indication) value for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#https_sni GatewayUpstream#https_sni}
  */
  readonly httpsSni?: string;
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#https_verify_certificate GatewayUpstream#https_verify_certificate}
  */
  readonly httpsVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#timeout GatewayUpstream#timeout}
  */
  readonly timeout?: number;
  /**
  * Default: "http"; must be one of ["grpc", "grpcs", "http", "https", "tcp"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#type GatewayUpstream#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#unhealthy GatewayUpstream#unhealthy}
  */
  readonly unhealthy?: GatewayUpstreamHealthchecksActiveUnhealthy;
}

export function gatewayUpstreamHealthchecksActiveToTerraform(struct?: GatewayUpstreamHealthchecksActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    headers: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.headers),
    healthy: gatewayUpstreamHealthchecksActiveHealthyToTerraform(struct!.healthy),
    http_path: cdktf.stringToTerraform(struct!.httpPath),
    https_sni: cdktf.stringToTerraform(struct!.httpsSni),
    https_verify_certificate: cdktf.booleanToTerraform(struct!.httpsVerifyCertificate),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    unhealthy: gatewayUpstreamHealthchecksActiveUnhealthyToTerraform(struct!.unhealthy),
  }
}


export function gatewayUpstreamHealthchecksActiveToHclTerraform(struct?: GatewayUpstreamHealthchecksActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    healthy: {
      value: gatewayUpstreamHealthchecksActiveHealthyToHclTerraform(struct!.healthy),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayUpstreamHealthchecksActiveHealthy",
    },
    http_path: {
      value: cdktf.stringToHclTerraform(struct!.httpPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_sni: {
      value: cdktf.stringToHclTerraform(struct!.httpsSni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.httpsVerifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy: {
      value: gatewayUpstreamHealthchecksActiveUnhealthyToHclTerraform(struct!.unhealthy),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayUpstreamHealthchecksActiveUnhealthy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayUpstreamHealthchecksActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayUpstreamHealthchecksActive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._healthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy?.internalValue;
    }
    if (this._httpPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPath = this._httpPath;
    }
    if (this._httpsSni !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsSni = this._httpsSni;
    }
    if (this._httpsVerifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsVerifyCertificate = this._httpsVerifyCertificate;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unhealthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthy = this._unhealthy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayUpstreamHealthchecksActive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrency = undefined;
      this._headers = undefined;
      this._healthy.internalValue = undefined;
      this._httpPath = undefined;
      this._httpsSni = undefined;
      this._httpsVerifyCertificate = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._unhealthy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrency = value.concurrency;
      this._headers = value.headers;
      this._healthy.internalValue = value.healthy;
      this._httpPath = value.httpPath;
      this._httpsSni = value.httpsSni;
      this._httpsVerifyCertificate = value.httpsVerifyCertificate;
      this._timeout = value.timeout;
      this._type = value.type;
      this._unhealthy.internalValue = value.unhealthy;
    }
  }

  // concurrency - computed: true, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get headers() {
    return this.interpolationForAttribute('headers');
  }
  public set headers(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // healthy - computed: true, optional: true, required: false
  private _healthy = new GatewayUpstreamHealthchecksActiveHealthyOutputReference(this, "healthy");
  public get healthy() {
    return this._healthy;
  }
  public putHealthy(value: GatewayUpstreamHealthchecksActiveHealthy) {
    this._healthy.internalValue = value;
  }
  public resetHealthy() {
    this._healthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy.internalValue;
  }

  // http_path - computed: true, optional: true, required: false
  private _httpPath?: string; 
  public get httpPath() {
    return this.getStringAttribute('http_path');
  }
  public set httpPath(value: string) {
    this._httpPath = value;
  }
  public resetHttpPath() {
    this._httpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPathInput() {
    return this._httpPath;
  }

  // https_sni - computed: true, optional: true, required: false
  private _httpsSni?: string; 
  public get httpsSni() {
    return this.getStringAttribute('https_sni');
  }
  public set httpsSni(value: string) {
    this._httpsSni = value;
  }
  public resetHttpsSni() {
    this._httpsSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsSniInput() {
    return this._httpsSni;
  }

  // https_verify_certificate - computed: true, optional: true, required: false
  private _httpsVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get httpsVerifyCertificate() {
    return this.getBooleanAttribute('https_verify_certificate');
  }
  public set httpsVerifyCertificate(value: boolean | cdktf.IResolvable) {
    this._httpsVerifyCertificate = value;
  }
  public resetHttpsVerifyCertificate() {
    this._httpsVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsVerifyCertificateInput() {
    return this._httpsVerifyCertificate;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unhealthy - computed: true, optional: true, required: false
  private _unhealthy = new GatewayUpstreamHealthchecksActiveUnhealthyOutputReference(this, "unhealthy");
  public get unhealthy() {
    return this._unhealthy;
  }
  public putUnhealthy(value: GatewayUpstreamHealthchecksActiveUnhealthy) {
    this._unhealthy.internalValue = value;
  }
  public resetUnhealthy() {
    this._unhealthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyInput() {
    return this._unhealthy.internalValue;
  }
}
export interface GatewayUpstreamHealthchecksPassiveHealthy {
  /**
  * Default: [200,201,202,203,204,205,206,207,208,226,300,301,302,303,304,305,306,307,308]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#http_statuses GatewayUpstream#http_statuses}
  */
  readonly httpStatuses?: number[];
  /**
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#successes GatewayUpstream#successes}
  */
  readonly successes?: number;
}

export function gatewayUpstreamHealthchecksPassiveHealthyToTerraform(struct?: GatewayUpstreamHealthchecksPassiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_statuses: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.httpStatuses),
    successes: cdktf.numberToTerraform(struct!.successes),
  }
}


export function gatewayUpstreamHealthchecksPassiveHealthyToHclTerraform(struct?: GatewayUpstreamHealthchecksPassiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_statuses: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.httpStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    successes: {
      value: cdktf.numberToHclTerraform(struct!.successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayUpstreamHealthchecksPassiveHealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayUpstreamHealthchecksPassiveHealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatuses = this._httpStatuses;
    }
    if (this._successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successes = this._successes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayUpstreamHealthchecksPassiveHealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpStatuses = undefined;
      this._successes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpStatuses = value.httpStatuses;
      this._successes = value.successes;
    }
  }

  // http_statuses - computed: true, optional: true, required: false
  private _httpStatuses?: number[]; 
  public get httpStatuses() {
    return this.getNumberListAttribute('http_statuses');
  }
  public set httpStatuses(value: number[]) {
    this._httpStatuses = value;
  }
  public resetHttpStatuses() {
    this._httpStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusesInput() {
    return this._httpStatuses;
  }

  // successes - computed: true, optional: true, required: false
  private _successes?: number; 
  public get successes() {
    return this.getNumberAttribute('successes');
  }
  public set successes(value: number) {
    this._successes = value;
  }
  public resetSuccesses() {
    this._successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successesInput() {
    return this._successes;
  }
}
export interface GatewayUpstreamHealthchecksPassiveUnhealthy {
  /**
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#http_failures GatewayUpstream#http_failures}
  */
  readonly httpFailures?: number;
  /**
  * Default: [429,500,503]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#http_statuses GatewayUpstream#http_statuses}
  */
  readonly httpStatuses?: number[];
  /**
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#tcp_failures GatewayUpstream#tcp_failures}
  */
  readonly tcpFailures?: number;
  /**
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#timeouts GatewayUpstream#timeouts}
  */
  readonly timeouts?: number;
}

export function gatewayUpstreamHealthchecksPassiveUnhealthyToTerraform(struct?: GatewayUpstreamHealthchecksPassiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_failures: cdktf.numberToTerraform(struct!.httpFailures),
    http_statuses: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.httpStatuses),
    tcp_failures: cdktf.numberToTerraform(struct!.tcpFailures),
    timeouts: cdktf.numberToTerraform(struct!.timeouts),
  }
}


export function gatewayUpstreamHealthchecksPassiveUnhealthyToHclTerraform(struct?: GatewayUpstreamHealthchecksPassiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_failures: {
      value: cdktf.numberToHclTerraform(struct!.httpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_statuses: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.httpStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    tcp_failures: {
      value: cdktf.numberToHclTerraform(struct!.tcpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeouts: {
      value: cdktf.numberToHclTerraform(struct!.timeouts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayUpstreamHealthchecksPassiveUnhealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayUpstreamHealthchecksPassiveUnhealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFailures = this._httpFailures;
    }
    if (this._httpStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatuses = this._httpStatuses;
    }
    if (this._tcpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFailures = this._tcpFailures;
    }
    if (this._timeouts !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayUpstreamHealthchecksPassiveUnhealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFailures = undefined;
      this._httpStatuses = undefined;
      this._tcpFailures = undefined;
      this._timeouts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFailures = value.httpFailures;
      this._httpStatuses = value.httpStatuses;
      this._tcpFailures = value.tcpFailures;
      this._timeouts = value.timeouts;
    }
  }

  // http_failures - computed: true, optional: true, required: false
  private _httpFailures?: number; 
  public get httpFailures() {
    return this.getNumberAttribute('http_failures');
  }
  public set httpFailures(value: number) {
    this._httpFailures = value;
  }
  public resetHttpFailures() {
    this._httpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFailuresInput() {
    return this._httpFailures;
  }

  // http_statuses - computed: true, optional: true, required: false
  private _httpStatuses?: number[]; 
  public get httpStatuses() {
    return this.getNumberListAttribute('http_statuses');
  }
  public set httpStatuses(value: number[]) {
    this._httpStatuses = value;
  }
  public resetHttpStatuses() {
    this._httpStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusesInput() {
    return this._httpStatuses;
  }

  // tcp_failures - computed: true, optional: true, required: false
  private _tcpFailures?: number; 
  public get tcpFailures() {
    return this.getNumberAttribute('tcp_failures');
  }
  public set tcpFailures(value: number) {
    this._tcpFailures = value;
  }
  public resetTcpFailures() {
    this._tcpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFailuresInput() {
    return this._tcpFailures;
  }

  // timeouts - computed: true, optional: true, required: false
  private _timeouts?: number; 
  public get timeouts() {
    return this.getNumberAttribute('timeouts');
  }
  public set timeouts(value: number) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts;
  }
}
export interface GatewayUpstreamHealthchecksPassive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#healthy GatewayUpstream#healthy}
  */
  readonly healthy?: GatewayUpstreamHealthchecksPassiveHealthy;
  /**
  * Default: "http"; must be one of ["grpc", "grpcs", "http", "https", "tcp"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#type GatewayUpstream#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#unhealthy GatewayUpstream#unhealthy}
  */
  readonly unhealthy?: GatewayUpstreamHealthchecksPassiveUnhealthy;
}

export function gatewayUpstreamHealthchecksPassiveToTerraform(struct?: GatewayUpstreamHealthchecksPassive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy: gatewayUpstreamHealthchecksPassiveHealthyToTerraform(struct!.healthy),
    type: cdktf.stringToTerraform(struct!.type),
    unhealthy: gatewayUpstreamHealthchecksPassiveUnhealthyToTerraform(struct!.unhealthy),
  }
}


export function gatewayUpstreamHealthchecksPassiveToHclTerraform(struct?: GatewayUpstreamHealthchecksPassive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy: {
      value: gatewayUpstreamHealthchecksPassiveHealthyToHclTerraform(struct!.healthy),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayUpstreamHealthchecksPassiveHealthy",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy: {
      value: gatewayUpstreamHealthchecksPassiveUnhealthyToHclTerraform(struct!.unhealthy),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayUpstreamHealthchecksPassiveUnhealthy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayUpstreamHealthchecksPassiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayUpstreamHealthchecksPassive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unhealthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthy = this._unhealthy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayUpstreamHealthchecksPassive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthy.internalValue = undefined;
      this._type = undefined;
      this._unhealthy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthy.internalValue = value.healthy;
      this._type = value.type;
      this._unhealthy.internalValue = value.unhealthy;
    }
  }

  // healthy - computed: true, optional: true, required: false
  private _healthy = new GatewayUpstreamHealthchecksPassiveHealthyOutputReference(this, "healthy");
  public get healthy() {
    return this._healthy;
  }
  public putHealthy(value: GatewayUpstreamHealthchecksPassiveHealthy) {
    this._healthy.internalValue = value;
  }
  public resetHealthy() {
    this._healthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unhealthy - computed: true, optional: true, required: false
  private _unhealthy = new GatewayUpstreamHealthchecksPassiveUnhealthyOutputReference(this, "unhealthy");
  public get unhealthy() {
    return this._unhealthy;
  }
  public putUnhealthy(value: GatewayUpstreamHealthchecksPassiveUnhealthy) {
    this._unhealthy.internalValue = value;
  }
  public resetUnhealthy() {
    this._unhealthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyInput() {
    return this._unhealthy.internalValue;
  }
}
export interface GatewayUpstreamHealthchecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#active GatewayUpstream#active}
  */
  readonly active?: GatewayUpstreamHealthchecksActive;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#passive GatewayUpstream#passive}
  */
  readonly passive?: GatewayUpstreamHealthchecksPassive;
  /**
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#threshold GatewayUpstream#threshold}
  */
  readonly threshold?: number;
}

export function gatewayUpstreamHealthchecksToTerraform(struct?: GatewayUpstreamHealthchecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: gatewayUpstreamHealthchecksActiveToTerraform(struct!.active),
    passive: gatewayUpstreamHealthchecksPassiveToTerraform(struct!.passive),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function gatewayUpstreamHealthchecksToHclTerraform(struct?: GatewayUpstreamHealthchecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: gatewayUpstreamHealthchecksActiveToHclTerraform(struct!.active),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayUpstreamHealthchecksActive",
    },
    passive: {
      value: gatewayUpstreamHealthchecksPassiveToHclTerraform(struct!.passive),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayUpstreamHealthchecksPassive",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayUpstreamHealthchecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayUpstreamHealthchecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active?.internalValue;
    }
    if (this._passive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive?.internalValue;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayUpstreamHealthchecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active.internalValue = undefined;
      this._passive.internalValue = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active.internalValue = value.active;
      this._passive.internalValue = value.passive;
      this._threshold = value.threshold;
    }
  }

  // active - computed: true, optional: true, required: false
  private _active = new GatewayUpstreamHealthchecksActiveOutputReference(this, "active");
  public get active() {
    return this._active;
  }
  public putActive(value: GatewayUpstreamHealthchecksActive) {
    this._active.internalValue = value;
  }
  public resetActive() {
    this._active.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active.internalValue;
  }

  // passive - computed: true, optional: true, required: false
  private _passive = new GatewayUpstreamHealthchecksPassiveOutputReference(this, "passive");
  public get passive() {
    return this._passive;
  }
  public putPassive(value: GatewayUpstreamHealthchecksPassive) {
    this._passive.internalValue = value;
  }
  public resetPassive() {
    this._passive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive.internalValue;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream konnect_gateway_upstream}
*/
export class GatewayUpstream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_upstream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayUpstream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayUpstream to import
  * @param importFromId The id of the existing GatewayUpstream that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayUpstream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_upstream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_upstream konnect_gateway_upstream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayUpstreamConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayUpstreamConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_upstream',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._clientCertificate.internalValue = config.clientCertificate;
    this._controlPlaneId = config.controlPlaneId;
    this._createdAt = config.createdAt;
    this._hashFallback = config.hashFallback;
    this._hashFallbackHeader = config.hashFallbackHeader;
    this._hashFallbackQueryArg = config.hashFallbackQueryArg;
    this._hashFallbackUriCapture = config.hashFallbackUriCapture;
    this._hashOn = config.hashOn;
    this._hashOnCookie = config.hashOnCookie;
    this._hashOnCookiePath = config.hashOnCookiePath;
    this._hashOnHeader = config.hashOnHeader;
    this._hashOnQueryArg = config.hashOnQueryArg;
    this._hashOnUriCapture = config.hashOnUriCapture;
    this._healthchecks.internalValue = config.healthchecks;
    this._hostHeader = config.hostHeader;
    this._id = config.id;
    this._name = config.name;
    this._slots = config.slots;
    this._stickySessionsCookie = config.stickySessionsCookie;
    this._stickySessionsCookiePath = config.stickySessionsCookiePath;
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
    this._useSrvName = config.useSrvName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate = new GatewayUpstreamClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: GatewayUpstreamClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // hash_fallback - computed: true, optional: true, required: false
  private _hashFallback?: string; 
  public get hashFallback() {
    return this.getStringAttribute('hash_fallback');
  }
  public set hashFallback(value: string) {
    this._hashFallback = value;
  }
  public resetHashFallback() {
    this._hashFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashFallbackInput() {
    return this._hashFallback;
  }

  // hash_fallback_header - computed: false, optional: true, required: false
  private _hashFallbackHeader?: string; 
  public get hashFallbackHeader() {
    return this.getStringAttribute('hash_fallback_header');
  }
  public set hashFallbackHeader(value: string) {
    this._hashFallbackHeader = value;
  }
  public resetHashFallbackHeader() {
    this._hashFallbackHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashFallbackHeaderInput() {
    return this._hashFallbackHeader;
  }

  // hash_fallback_query_arg - computed: false, optional: true, required: false
  private _hashFallbackQueryArg?: string; 
  public get hashFallbackQueryArg() {
    return this.getStringAttribute('hash_fallback_query_arg');
  }
  public set hashFallbackQueryArg(value: string) {
    this._hashFallbackQueryArg = value;
  }
  public resetHashFallbackQueryArg() {
    this._hashFallbackQueryArg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashFallbackQueryArgInput() {
    return this._hashFallbackQueryArg;
  }

  // hash_fallback_uri_capture - computed: false, optional: true, required: false
  private _hashFallbackUriCapture?: string; 
  public get hashFallbackUriCapture() {
    return this.getStringAttribute('hash_fallback_uri_capture');
  }
  public set hashFallbackUriCapture(value: string) {
    this._hashFallbackUriCapture = value;
  }
  public resetHashFallbackUriCapture() {
    this._hashFallbackUriCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashFallbackUriCaptureInput() {
    return this._hashFallbackUriCapture;
  }

  // hash_on - computed: true, optional: true, required: false
  private _hashOn?: string; 
  public get hashOn() {
    return this.getStringAttribute('hash_on');
  }
  public set hashOn(value: string) {
    this._hashOn = value;
  }
  public resetHashOn() {
    this._hashOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashOnInput() {
    return this._hashOn;
  }

  // hash_on_cookie - computed: false, optional: true, required: false
  private _hashOnCookie?: string; 
  public get hashOnCookie() {
    return this.getStringAttribute('hash_on_cookie');
  }
  public set hashOnCookie(value: string) {
    this._hashOnCookie = value;
  }
  public resetHashOnCookie() {
    this._hashOnCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashOnCookieInput() {
    return this._hashOnCookie;
  }

  // hash_on_cookie_path - computed: true, optional: true, required: false
  private _hashOnCookiePath?: string; 
  public get hashOnCookiePath() {
    return this.getStringAttribute('hash_on_cookie_path');
  }
  public set hashOnCookiePath(value: string) {
    this._hashOnCookiePath = value;
  }
  public resetHashOnCookiePath() {
    this._hashOnCookiePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashOnCookiePathInput() {
    return this._hashOnCookiePath;
  }

  // hash_on_header - computed: false, optional: true, required: false
  private _hashOnHeader?: string; 
  public get hashOnHeader() {
    return this.getStringAttribute('hash_on_header');
  }
  public set hashOnHeader(value: string) {
    this._hashOnHeader = value;
  }
  public resetHashOnHeader() {
    this._hashOnHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashOnHeaderInput() {
    return this._hashOnHeader;
  }

  // hash_on_query_arg - computed: false, optional: true, required: false
  private _hashOnQueryArg?: string; 
  public get hashOnQueryArg() {
    return this.getStringAttribute('hash_on_query_arg');
  }
  public set hashOnQueryArg(value: string) {
    this._hashOnQueryArg = value;
  }
  public resetHashOnQueryArg() {
    this._hashOnQueryArg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashOnQueryArgInput() {
    return this._hashOnQueryArg;
  }

  // hash_on_uri_capture - computed: false, optional: true, required: false
  private _hashOnUriCapture?: string; 
  public get hashOnUriCapture() {
    return this.getStringAttribute('hash_on_uri_capture');
  }
  public set hashOnUriCapture(value: string) {
    this._hashOnUriCapture = value;
  }
  public resetHashOnUriCapture() {
    this._hashOnUriCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashOnUriCaptureInput() {
    return this._hashOnUriCapture;
  }

  // healthchecks - computed: true, optional: true, required: false
  private _healthchecks = new GatewayUpstreamHealthchecksOutputReference(this, "healthchecks");
  public get healthchecks() {
    return this._healthchecks;
  }
  public putHealthchecks(value: GatewayUpstreamHealthchecks) {
    this._healthchecks.internalValue = value;
  }
  public resetHealthchecks() {
    this._healthchecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthchecksInput() {
    return this._healthchecks.internalValue;
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
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

  // slots - computed: true, optional: true, required: false
  private _slots?: number; 
  public get slots() {
    return this.getNumberAttribute('slots');
  }
  public set slots(value: number) {
    this._slots = value;
  }
  public resetSlots() {
    this._slots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotsInput() {
    return this._slots;
  }

  // sticky_sessions_cookie - computed: false, optional: true, required: false
  private _stickySessionsCookie?: string; 
  public get stickySessionsCookie() {
    return this.getStringAttribute('sticky_sessions_cookie');
  }
  public set stickySessionsCookie(value: string) {
    this._stickySessionsCookie = value;
  }
  public resetStickySessionsCookie() {
    this._stickySessionsCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickySessionsCookieInput() {
    return this._stickySessionsCookie;
  }

  // sticky_sessions_cookie_path - computed: true, optional: true, required: false
  private _stickySessionsCookiePath?: string; 
  public get stickySessionsCookiePath() {
    return this.getStringAttribute('sticky_sessions_cookie_path');
  }
  public set stickySessionsCookiePath(value: string) {
    this._stickySessionsCookiePath = value;
  }
  public resetStickySessionsCookiePath() {
    this._stickySessionsCookiePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickySessionsCookiePathInput() {
    return this._stickySessionsCookiePath;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // use_srv_name - computed: true, optional: true, required: false
  private _useSrvName?: boolean | cdktf.IResolvable; 
  public get useSrvName() {
    return this.getBooleanAttribute('use_srv_name');
  }
  public set useSrvName(value: boolean | cdktf.IResolvable) {
    this._useSrvName = value;
  }
  public resetUseSrvName() {
    this._useSrvName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSrvNameInput() {
    return this._useSrvName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      client_certificate: gatewayUpstreamClientCertificateToTerraform(this._clientCertificate.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      hash_fallback: cdktf.stringToTerraform(this._hashFallback),
      hash_fallback_header: cdktf.stringToTerraform(this._hashFallbackHeader),
      hash_fallback_query_arg: cdktf.stringToTerraform(this._hashFallbackQueryArg),
      hash_fallback_uri_capture: cdktf.stringToTerraform(this._hashFallbackUriCapture),
      hash_on: cdktf.stringToTerraform(this._hashOn),
      hash_on_cookie: cdktf.stringToTerraform(this._hashOnCookie),
      hash_on_cookie_path: cdktf.stringToTerraform(this._hashOnCookiePath),
      hash_on_header: cdktf.stringToTerraform(this._hashOnHeader),
      hash_on_query_arg: cdktf.stringToTerraform(this._hashOnQueryArg),
      hash_on_uri_capture: cdktf.stringToTerraform(this._hashOnUriCapture),
      healthchecks: gatewayUpstreamHealthchecksToTerraform(this._healthchecks.internalValue),
      host_header: cdktf.stringToTerraform(this._hostHeader),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      slots: cdktf.numberToTerraform(this._slots),
      sticky_sessions_cookie: cdktf.stringToTerraform(this._stickySessionsCookie),
      sticky_sessions_cookie_path: cdktf.stringToTerraform(this._stickySessionsCookiePath),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
      use_srv_name: cdktf.booleanToTerraform(this._useSrvName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate: {
        value: gatewayUpstreamClientCertificateToHclTerraform(this._clientCertificate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayUpstreamClientCertificate",
      },
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.numberToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hash_fallback: {
        value: cdktf.stringToHclTerraform(this._hashFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_fallback_header: {
        value: cdktf.stringToHclTerraform(this._hashFallbackHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_fallback_query_arg: {
        value: cdktf.stringToHclTerraform(this._hashFallbackQueryArg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_fallback_uri_capture: {
        value: cdktf.stringToHclTerraform(this._hashFallbackUriCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_on: {
        value: cdktf.stringToHclTerraform(this._hashOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_on_cookie: {
        value: cdktf.stringToHclTerraform(this._hashOnCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_on_cookie_path: {
        value: cdktf.stringToHclTerraform(this._hashOnCookiePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_on_header: {
        value: cdktf.stringToHclTerraform(this._hashOnHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_on_query_arg: {
        value: cdktf.stringToHclTerraform(this._hashOnQueryArg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_on_uri_capture: {
        value: cdktf.stringToHclTerraform(this._hashOnUriCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthchecks: {
        value: gatewayUpstreamHealthchecksToHclTerraform(this._healthchecks.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayUpstreamHealthchecks",
      },
      host_header: {
        value: cdktf.stringToHclTerraform(this._hostHeader),
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
      slots: {
        value: cdktf.numberToHclTerraform(this._slots),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sticky_sessions_cookie: {
        value: cdktf.stringToHclTerraform(this._stickySessionsCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sticky_sessions_cookie_path: {
        value: cdktf.stringToHclTerraform(this._stickySessionsCookiePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      updated_at: {
        value: cdktf.numberToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_srv_name: {
        value: cdktf.booleanToHclTerraform(this._useSrvName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
