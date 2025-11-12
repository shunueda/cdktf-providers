// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerBackendSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#backend_max_connections LoadBalancerBackendSet#backend_max_connections}
  */
  readonly backendMaxConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#id LoadBalancerBackendSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#load_balancer_id LoadBalancerBackendSet#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#name LoadBalancerBackendSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#policy LoadBalancerBackendSet#policy}
  */
  readonly policy: string;
  /**
  * health_checker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#health_checker LoadBalancerBackendSet#health_checker}
  */
  readonly healthChecker: LoadBalancerBackendSetHealthChecker;
  /**
  * lb_cookie_session_persistence_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#lb_cookie_session_persistence_configuration LoadBalancerBackendSet#lb_cookie_session_persistence_configuration}
  */
  readonly lbCookieSessionPersistenceConfiguration?: LoadBalancerBackendSetLbCookieSessionPersistenceConfiguration;
  /**
  * session_persistence_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#session_persistence_configuration LoadBalancerBackendSet#session_persistence_configuration}
  */
  readonly sessionPersistenceConfiguration?: LoadBalancerBackendSetSessionPersistenceConfiguration;
  /**
  * ssl_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#ssl_configuration LoadBalancerBackendSet#ssl_configuration}
  */
  readonly sslConfiguration?: LoadBalancerBackendSetSslConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#timeouts LoadBalancerBackendSet#timeouts}
  */
  readonly timeouts?: LoadBalancerBackendSetTimeouts;
}
export interface LoadBalancerBackendSetBackend {
}

export function loadBalancerBackendSetBackendToTerraform(struct?: LoadBalancerBackendSetBackend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function loadBalancerBackendSetBackendToHclTerraform(struct?: LoadBalancerBackendSetBackend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LoadBalancerBackendSetBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerBackendSetBackend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerBackendSetBackend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup - computed: true, optional: false, required: false
  public get backup() {
    return this.getBooleanAttribute('backup');
  }

  // drain - computed: true, optional: false, required: false
  public get drain() {
    return this.getBooleanAttribute('drain');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // offline - computed: true, optional: false, required: false
  public get offline() {
    return this.getBooleanAttribute('offline');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class LoadBalancerBackendSetBackendList extends cdktf.ComplexList {

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
  public get(index: number): LoadBalancerBackendSetBackendOutputReference {
    return new LoadBalancerBackendSetBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerBackendSetHealthChecker {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#interval_ms LoadBalancerBackendSet#interval_ms}
  */
  readonly intervalMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#is_force_plain_text LoadBalancerBackendSet#is_force_plain_text}
  */
  readonly isForcePlainText?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#port LoadBalancerBackendSet#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#protocol LoadBalancerBackendSet#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#response_body_regex LoadBalancerBackendSet#response_body_regex}
  */
  readonly responseBodyRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#retries LoadBalancerBackendSet#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#return_code LoadBalancerBackendSet#return_code}
  */
  readonly returnCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#timeout_in_millis LoadBalancerBackendSet#timeout_in_millis}
  */
  readonly timeoutInMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#url_path LoadBalancerBackendSet#url_path}
  */
  readonly urlPath?: string;
}

export function loadBalancerBackendSetHealthCheckerToTerraform(struct?: LoadBalancerBackendSetHealthCheckerOutputReference | LoadBalancerBackendSetHealthChecker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_ms: cdktf.numberToTerraform(struct!.intervalMs),
    is_force_plain_text: cdktf.booleanToTerraform(struct!.isForcePlainText),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    response_body_regex: cdktf.stringToTerraform(struct!.responseBodyRegex),
    retries: cdktf.numberToTerraform(struct!.retries),
    return_code: cdktf.numberToTerraform(struct!.returnCode),
    timeout_in_millis: cdktf.numberToTerraform(struct!.timeoutInMillis),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
  }
}


export function loadBalancerBackendSetHealthCheckerToHclTerraform(struct?: LoadBalancerBackendSetHealthCheckerOutputReference | LoadBalancerBackendSetHealthChecker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.intervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_force_plain_text: {
      value: cdktf.booleanToHclTerraform(struct!.isForcePlainText),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_body_regex: {
      value: cdktf.stringToHclTerraform(struct!.responseBodyRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    return_code: {
      value: cdktf.numberToHclTerraform(struct!.returnCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_millis: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url_path: {
      value: cdktf.stringToHclTerraform(struct!.urlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerBackendSetHealthCheckerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerBackendSetHealthChecker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMs = this._intervalMs;
    }
    if (this._isForcePlainText !== undefined) {
      hasAnyValues = true;
      internalValueResult.isForcePlainText = this._isForcePlainText;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._responseBodyRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBodyRegex = this._responseBodyRegex;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._returnCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCode = this._returnCode;
    }
    if (this._timeoutInMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMillis = this._timeoutInMillis;
    }
    if (this._urlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPath = this._urlPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerBackendSetHealthChecker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intervalMs = undefined;
      this._isForcePlainText = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._responseBodyRegex = undefined;
      this._retries = undefined;
      this._returnCode = undefined;
      this._timeoutInMillis = undefined;
      this._urlPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intervalMs = value.intervalMs;
      this._isForcePlainText = value.isForcePlainText;
      this._port = value.port;
      this._protocol = value.protocol;
      this._responseBodyRegex = value.responseBodyRegex;
      this._retries = value.retries;
      this._returnCode = value.returnCode;
      this._timeoutInMillis = value.timeoutInMillis;
      this._urlPath = value.urlPath;
    }
  }

  // interval_ms - computed: false, optional: true, required: false
  private _intervalMs?: number; 
  public get intervalMs() {
    return this.getNumberAttribute('interval_ms');
  }
  public set intervalMs(value: number) {
    this._intervalMs = value;
  }
  public resetIntervalMs() {
    this._intervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMsInput() {
    return this._intervalMs;
  }

  // is_force_plain_text - computed: true, optional: true, required: false
  private _isForcePlainText?: boolean | cdktf.IResolvable; 
  public get isForcePlainText() {
    return this.getBooleanAttribute('is_force_plain_text');
  }
  public set isForcePlainText(value: boolean | cdktf.IResolvable) {
    this._isForcePlainText = value;
  }
  public resetIsForcePlainText() {
    this._isForcePlainText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isForcePlainTextInput() {
    return this._isForcePlainText;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // response_body_regex - computed: true, optional: true, required: false
  private _responseBodyRegex?: string; 
  public get responseBodyRegex() {
    return this.getStringAttribute('response_body_regex');
  }
  public set responseBodyRegex(value: string) {
    this._responseBodyRegex = value;
  }
  public resetResponseBodyRegex() {
    this._responseBodyRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyRegexInput() {
    return this._responseBodyRegex;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // return_code - computed: true, optional: true, required: false
  private _returnCode?: number; 
  public get returnCode() {
    return this.getNumberAttribute('return_code');
  }
  public set returnCode(value: number) {
    this._returnCode = value;
  }
  public resetReturnCode() {
    this._returnCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCodeInput() {
    return this._returnCode;
  }

  // timeout_in_millis - computed: false, optional: true, required: false
  private _timeoutInMillis?: number; 
  public get timeoutInMillis() {
    return this.getNumberAttribute('timeout_in_millis');
  }
  public set timeoutInMillis(value: number) {
    this._timeoutInMillis = value;
  }
  public resetTimeoutInMillis() {
    this._timeoutInMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMillisInput() {
    return this._timeoutInMillis;
  }

  // url_path - computed: true, optional: true, required: false
  private _urlPath?: string; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  public resetUrlPath() {
    this._urlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath;
  }
}
export interface LoadBalancerBackendSetLbCookieSessionPersistenceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#cookie_name LoadBalancerBackendSet#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#disable_fallback LoadBalancerBackendSet#disable_fallback}
  */
  readonly disableFallback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#domain LoadBalancerBackendSet#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#is_http_only LoadBalancerBackendSet#is_http_only}
  */
  readonly isHttpOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#is_secure LoadBalancerBackendSet#is_secure}
  */
  readonly isSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#max_age_in_seconds LoadBalancerBackendSet#max_age_in_seconds}
  */
  readonly maxAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#path LoadBalancerBackendSet#path}
  */
  readonly path?: string;
}

export function loadBalancerBackendSetLbCookieSessionPersistenceConfigurationToTerraform(struct?: LoadBalancerBackendSetLbCookieSessionPersistenceConfigurationOutputReference | LoadBalancerBackendSetLbCookieSessionPersistenceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    disable_fallback: cdktf.booleanToTerraform(struct!.disableFallback),
    domain: cdktf.stringToTerraform(struct!.domain),
    is_http_only: cdktf.booleanToTerraform(struct!.isHttpOnly),
    is_secure: cdktf.booleanToTerraform(struct!.isSecure),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function loadBalancerBackendSetLbCookieSessionPersistenceConfigurationToHclTerraform(struct?: LoadBalancerBackendSetLbCookieSessionPersistenceConfigurationOutputReference | LoadBalancerBackendSetLbCookieSessionPersistenceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_fallback: {
      value: cdktf.booleanToHclTerraform(struct!.disableFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_http_only: {
      value: cdktf.booleanToHclTerraform(struct!.isHttpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_secure: {
      value: cdktf.booleanToHclTerraform(struct!.isSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeInSeconds),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerBackendSetLbCookieSessionPersistenceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerBackendSetLbCookieSessionPersistenceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._disableFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFallback = this._disableFallback;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._isHttpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHttpOnly = this._isHttpOnly;
    }
    if (this._isSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSecure = this._isSecure;
    }
    if (this._maxAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeInSeconds = this._maxAgeInSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerBackendSetLbCookieSessionPersistenceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieName = undefined;
      this._disableFallback = undefined;
      this._domain = undefined;
      this._isHttpOnly = undefined;
      this._isSecure = undefined;
      this._maxAgeInSeconds = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieName = value.cookieName;
      this._disableFallback = value.disableFallback;
      this._domain = value.domain;
      this._isHttpOnly = value.isHttpOnly;
      this._isSecure = value.isSecure;
      this._maxAgeInSeconds = value.maxAgeInSeconds;
      this._path = value.path;
    }
  }

  // cookie_name - computed: true, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // disable_fallback - computed: true, optional: true, required: false
  private _disableFallback?: boolean | cdktf.IResolvable; 
  public get disableFallback() {
    return this.getBooleanAttribute('disable_fallback');
  }
  public set disableFallback(value: boolean | cdktf.IResolvable) {
    this._disableFallback = value;
  }
  public resetDisableFallback() {
    this._disableFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFallbackInput() {
    return this._disableFallback;
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

  // is_http_only - computed: true, optional: true, required: false
  private _isHttpOnly?: boolean | cdktf.IResolvable; 
  public get isHttpOnly() {
    return this.getBooleanAttribute('is_http_only');
  }
  public set isHttpOnly(value: boolean | cdktf.IResolvable) {
    this._isHttpOnly = value;
  }
  public resetIsHttpOnly() {
    this._isHttpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHttpOnlyInput() {
    return this._isHttpOnly;
  }

  // is_secure - computed: true, optional: true, required: false
  private _isSecure?: boolean | cdktf.IResolvable; 
  public get isSecure() {
    return this.getBooleanAttribute('is_secure');
  }
  public set isSecure(value: boolean | cdktf.IResolvable) {
    this._isSecure = value;
  }
  public resetIsSecure() {
    this._isSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecureInput() {
    return this._isSecure;
  }

  // max_age_in_seconds - computed: true, optional: true, required: false
  private _maxAgeInSeconds?: number; 
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
  public set maxAgeInSeconds(value: number) {
    this._maxAgeInSeconds = value;
  }
  public resetMaxAgeInSeconds() {
    this._maxAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInSecondsInput() {
    return this._maxAgeInSeconds;
  }

  // path - computed: true, optional: true, required: false
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
}
export interface LoadBalancerBackendSetSessionPersistenceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#cookie_name LoadBalancerBackendSet#cookie_name}
  */
  readonly cookieName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#disable_fallback LoadBalancerBackendSet#disable_fallback}
  */
  readonly disableFallback?: boolean | cdktf.IResolvable;
}

export function loadBalancerBackendSetSessionPersistenceConfigurationToTerraform(struct?: LoadBalancerBackendSetSessionPersistenceConfigurationOutputReference | LoadBalancerBackendSetSessionPersistenceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    disable_fallback: cdktf.booleanToTerraform(struct!.disableFallback),
  }
}


export function loadBalancerBackendSetSessionPersistenceConfigurationToHclTerraform(struct?: LoadBalancerBackendSetSessionPersistenceConfigurationOutputReference | LoadBalancerBackendSetSessionPersistenceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_fallback: {
      value: cdktf.booleanToHclTerraform(struct!.disableFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerBackendSetSessionPersistenceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerBackendSetSessionPersistenceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._disableFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFallback = this._disableFallback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerBackendSetSessionPersistenceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieName = undefined;
      this._disableFallback = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieName = value.cookieName;
      this._disableFallback = value.disableFallback;
    }
  }

  // cookie_name - computed: false, optional: false, required: true
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // disable_fallback - computed: false, optional: true, required: false
  private _disableFallback?: boolean | cdktf.IResolvable; 
  public get disableFallback() {
    return this.getBooleanAttribute('disable_fallback');
  }
  public set disableFallback(value: boolean | cdktf.IResolvable) {
    this._disableFallback = value;
  }
  public resetDisableFallback() {
    this._disableFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFallbackInput() {
    return this._disableFallback;
  }
}
export interface LoadBalancerBackendSetSslConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#certificate_ids LoadBalancerBackendSet#certificate_ids}
  */
  readonly certificateIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#certificate_name LoadBalancerBackendSet#certificate_name}
  */
  readonly certificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#cipher_suite_name LoadBalancerBackendSet#cipher_suite_name}
  */
  readonly cipherSuiteName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#protocols LoadBalancerBackendSet#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#server_order_preference LoadBalancerBackendSet#server_order_preference}
  */
  readonly serverOrderPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#trusted_certificate_authority_ids LoadBalancerBackendSet#trusted_certificate_authority_ids}
  */
  readonly trustedCertificateAuthorityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#verify_depth LoadBalancerBackendSet#verify_depth}
  */
  readonly verifyDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#verify_peer_certificate LoadBalancerBackendSet#verify_peer_certificate}
  */
  readonly verifyPeerCertificate?: boolean | cdktf.IResolvable;
}

export function loadBalancerBackendSetSslConfigurationToTerraform(struct?: LoadBalancerBackendSetSslConfigurationOutputReference | LoadBalancerBackendSetSslConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateIds),
    certificate_name: cdktf.stringToTerraform(struct!.certificateName),
    cipher_suite_name: cdktf.stringToTerraform(struct!.cipherSuiteName),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
    server_order_preference: cdktf.stringToTerraform(struct!.serverOrderPreference),
    trusted_certificate_authority_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedCertificateAuthorityIds),
    verify_depth: cdktf.numberToTerraform(struct!.verifyDepth),
    verify_peer_certificate: cdktf.booleanToTerraform(struct!.verifyPeerCertificate),
  }
}


export function loadBalancerBackendSetSslConfigurationToHclTerraform(struct?: LoadBalancerBackendSetSslConfigurationOutputReference | LoadBalancerBackendSetSslConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    certificate_name: {
      value: cdktf.stringToHclTerraform(struct!.certificateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cipher_suite_name: {
      value: cdktf.stringToHclTerraform(struct!.cipherSuiteName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server_order_preference: {
      value: cdktf.stringToHclTerraform(struct!.serverOrderPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_certificate_authority_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustedCertificateAuthorityIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verify_depth: {
      value: cdktf.numberToHclTerraform(struct!.verifyDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verify_peer_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.verifyPeerCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerBackendSetSslConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerBackendSetSslConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIds = this._certificateIds;
    }
    if (this._certificateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateName = this._certificateName;
    }
    if (this._cipherSuiteName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuiteName = this._cipherSuiteName;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._serverOrderPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverOrderPreference = this._serverOrderPreference;
    }
    if (this._trustedCertificateAuthorityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCertificateAuthorityIds = this._trustedCertificateAuthorityIds;
    }
    if (this._verifyDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyDepth = this._verifyDepth;
    }
    if (this._verifyPeerCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyPeerCertificate = this._verifyPeerCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerBackendSetSslConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateIds = undefined;
      this._certificateName = undefined;
      this._cipherSuiteName = undefined;
      this._protocols = undefined;
      this._serverOrderPreference = undefined;
      this._trustedCertificateAuthorityIds = undefined;
      this._verifyDepth = undefined;
      this._verifyPeerCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateIds = value.certificateIds;
      this._certificateName = value.certificateName;
      this._cipherSuiteName = value.cipherSuiteName;
      this._protocols = value.protocols;
      this._serverOrderPreference = value.serverOrderPreference;
      this._trustedCertificateAuthorityIds = value.trustedCertificateAuthorityIds;
      this._verifyDepth = value.verifyDepth;
      this._verifyPeerCertificate = value.verifyPeerCertificate;
    }
  }

  // certificate_ids - computed: false, optional: true, required: false
  private _certificateIds?: string[]; 
  public get certificateIds() {
    return this.getListAttribute('certificate_ids');
  }
  public set certificateIds(value: string[]) {
    this._certificateIds = value;
  }
  public resetCertificateIds() {
    this._certificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdsInput() {
    return this._certificateIds;
  }

  // certificate_name - computed: false, optional: true, required: false
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  public resetCertificateName() {
    this._certificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
  }

  // cipher_suite_name - computed: true, optional: true, required: false
  private _cipherSuiteName?: string; 
  public get cipherSuiteName() {
    return this.getStringAttribute('cipher_suite_name');
  }
  public set cipherSuiteName(value: string) {
    this._cipherSuiteName = value;
  }
  public resetCipherSuiteName() {
    this._cipherSuiteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuiteNameInput() {
    return this._cipherSuiteName;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // server_order_preference - computed: true, optional: true, required: false
  private _serverOrderPreference?: string; 
  public get serverOrderPreference() {
    return this.getStringAttribute('server_order_preference');
  }
  public set serverOrderPreference(value: string) {
    this._serverOrderPreference = value;
  }
  public resetServerOrderPreference() {
    this._serverOrderPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverOrderPreferenceInput() {
    return this._serverOrderPreference;
  }

  // trusted_certificate_authority_ids - computed: false, optional: true, required: false
  private _trustedCertificateAuthorityIds?: string[]; 
  public get trustedCertificateAuthorityIds() {
    return this.getListAttribute('trusted_certificate_authority_ids');
  }
  public set trustedCertificateAuthorityIds(value: string[]) {
    this._trustedCertificateAuthorityIds = value;
  }
  public resetTrustedCertificateAuthorityIds() {
    this._trustedCertificateAuthorityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCertificateAuthorityIdsInput() {
    return this._trustedCertificateAuthorityIds;
  }

  // verify_depth - computed: false, optional: true, required: false
  private _verifyDepth?: number; 
  public get verifyDepth() {
    return this.getNumberAttribute('verify_depth');
  }
  public set verifyDepth(value: number) {
    this._verifyDepth = value;
  }
  public resetVerifyDepth() {
    this._verifyDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyDepthInput() {
    return this._verifyDepth;
  }

  // verify_peer_certificate - computed: false, optional: true, required: false
  private _verifyPeerCertificate?: boolean | cdktf.IResolvable; 
  public get verifyPeerCertificate() {
    return this.getBooleanAttribute('verify_peer_certificate');
  }
  public set verifyPeerCertificate(value: boolean | cdktf.IResolvable) {
    this._verifyPeerCertificate = value;
  }
  public resetVerifyPeerCertificate() {
    this._verifyPeerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyPeerCertificateInput() {
    return this._verifyPeerCertificate;
  }
}
export interface LoadBalancerBackendSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#create LoadBalancerBackendSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#delete LoadBalancerBackendSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#update LoadBalancerBackendSet#update}
  */
  readonly update?: string;
}

export function loadBalancerBackendSetTimeoutsToTerraform(struct?: LoadBalancerBackendSetTimeouts | cdktf.IResolvable): any {
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


export function loadBalancerBackendSetTimeoutsToHclTerraform(struct?: LoadBalancerBackendSetTimeouts | cdktf.IResolvable): any {
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

export class LoadBalancerBackendSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerBackendSetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LoadBalancerBackendSetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set oci_load_balancer_backend_set}
*/
export class LoadBalancerBackendSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_load_balancer_backend_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancerBackendSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancerBackendSet to import
  * @param importFromId The id of the existing LoadBalancerBackendSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancerBackendSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_load_balancer_backend_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_backend_set oci_load_balancer_backend_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerBackendSetConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerBackendSetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_backend_set',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backendMaxConnections = config.backendMaxConnections;
    this._id = config.id;
    this._loadBalancerId = config.loadBalancerId;
    this._name = config.name;
    this._policy = config.policy;
    this._healthChecker.internalValue = config.healthChecker;
    this._lbCookieSessionPersistenceConfiguration.internalValue = config.lbCookieSessionPersistenceConfiguration;
    this._sessionPersistenceConfiguration.internalValue = config.sessionPersistenceConfiguration;
    this._sslConfiguration.internalValue = config.sslConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: true, optional: false, required: false
  private _backend = new LoadBalancerBackendSetBackendList(this, "backend", true);
  public get backend() {
    return this._backend;
  }

  // backend_max_connections - computed: true, optional: true, required: false
  private _backendMaxConnections?: number; 
  public get backendMaxConnections() {
    return this.getNumberAttribute('backend_max_connections');
  }
  public set backendMaxConnections(value: number) {
    this._backendMaxConnections = value;
  }
  public resetBackendMaxConnections() {
    this._backendMaxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendMaxConnectionsInput() {
    return this._backendMaxConnections;
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

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
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

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // health_checker - computed: false, optional: false, required: true
  private _healthChecker = new LoadBalancerBackendSetHealthCheckerOutputReference(this, "health_checker");
  public get healthChecker() {
    return this._healthChecker;
  }
  public putHealthChecker(value: LoadBalancerBackendSetHealthChecker) {
    this._healthChecker.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckerInput() {
    return this._healthChecker.internalValue;
  }

  // lb_cookie_session_persistence_configuration - computed: false, optional: true, required: false
  private _lbCookieSessionPersistenceConfiguration = new LoadBalancerBackendSetLbCookieSessionPersistenceConfigurationOutputReference(this, "lb_cookie_session_persistence_configuration");
  public get lbCookieSessionPersistenceConfiguration() {
    return this._lbCookieSessionPersistenceConfiguration;
  }
  public putLbCookieSessionPersistenceConfiguration(value: LoadBalancerBackendSetLbCookieSessionPersistenceConfiguration) {
    this._lbCookieSessionPersistenceConfiguration.internalValue = value;
  }
  public resetLbCookieSessionPersistenceConfiguration() {
    this._lbCookieSessionPersistenceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbCookieSessionPersistenceConfigurationInput() {
    return this._lbCookieSessionPersistenceConfiguration.internalValue;
  }

  // session_persistence_configuration - computed: false, optional: true, required: false
  private _sessionPersistenceConfiguration = new LoadBalancerBackendSetSessionPersistenceConfigurationOutputReference(this, "session_persistence_configuration");
  public get sessionPersistenceConfiguration() {
    return this._sessionPersistenceConfiguration;
  }
  public putSessionPersistenceConfiguration(value: LoadBalancerBackendSetSessionPersistenceConfiguration) {
    this._sessionPersistenceConfiguration.internalValue = value;
  }
  public resetSessionPersistenceConfiguration() {
    this._sessionPersistenceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPersistenceConfigurationInput() {
    return this._sessionPersistenceConfiguration.internalValue;
  }

  // ssl_configuration - computed: false, optional: true, required: false
  private _sslConfiguration = new LoadBalancerBackendSetSslConfigurationOutputReference(this, "ssl_configuration");
  public get sslConfiguration() {
    return this._sslConfiguration;
  }
  public putSslConfiguration(value: LoadBalancerBackendSetSslConfiguration) {
    this._sslConfiguration.internalValue = value;
  }
  public resetSslConfiguration() {
    this._sslConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigurationInput() {
    return this._sslConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LoadBalancerBackendSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LoadBalancerBackendSetTimeouts) {
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
      backend_max_connections: cdktf.numberToTerraform(this._backendMaxConnections),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.stringToTerraform(this._policy),
      health_checker: loadBalancerBackendSetHealthCheckerToTerraform(this._healthChecker.internalValue),
      lb_cookie_session_persistence_configuration: loadBalancerBackendSetLbCookieSessionPersistenceConfigurationToTerraform(this._lbCookieSessionPersistenceConfiguration.internalValue),
      session_persistence_configuration: loadBalancerBackendSetSessionPersistenceConfigurationToTerraform(this._sessionPersistenceConfiguration.internalValue),
      ssl_configuration: loadBalancerBackendSetSslConfigurationToTerraform(this._sslConfiguration.internalValue),
      timeouts: loadBalancerBackendSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend_max_connections: {
        value: cdktf.numberToHclTerraform(this._backendMaxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_checker: {
        value: loadBalancerBackendSetHealthCheckerToHclTerraform(this._healthChecker.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerBackendSetHealthCheckerList",
      },
      lb_cookie_session_persistence_configuration: {
        value: loadBalancerBackendSetLbCookieSessionPersistenceConfigurationToHclTerraform(this._lbCookieSessionPersistenceConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerBackendSetLbCookieSessionPersistenceConfigurationList",
      },
      session_persistence_configuration: {
        value: loadBalancerBackendSetSessionPersistenceConfigurationToHclTerraform(this._sessionPersistenceConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerBackendSetSessionPersistenceConfigurationList",
      },
      ssl_configuration: {
        value: loadBalancerBackendSetSslConfigurationToHclTerraform(this._sslConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerBackendSetSslConfigurationList",
      },
      timeouts: {
        value: loadBalancerBackendSetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoadBalancerBackendSetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
