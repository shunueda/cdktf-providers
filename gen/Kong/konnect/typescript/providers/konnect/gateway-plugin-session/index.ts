// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginSessionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#config GatewayPluginSession#config}
  */
  readonly config?: GatewayPluginSessionConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#control_plane_id GatewayPluginSession#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#created_at GatewayPluginSession#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#enabled GatewayPluginSession#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#id GatewayPluginSession#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#instance_name GatewayPluginSession#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#ordering GatewayPluginSession#ordering}
  */
  readonly ordering?: GatewayPluginSessionOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#partials GatewayPluginSession#partials}
  */
  readonly partials?: GatewayPluginSessionPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#protocols GatewayPluginSession#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#route GatewayPluginSession#route}
  */
  readonly route?: GatewayPluginSessionRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#service GatewayPluginSession#service}
  */
  readonly service?: GatewayPluginSessionService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#tags GatewayPluginSession#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#updated_at GatewayPluginSession#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginSessionConfigA {
  /**
  * The session cookie absolute timeout, in seconds. Specifies how long the session can be used until it is no longer valid. Default: 86400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#absolute_timeout GatewayPluginSession#absolute_timeout}
  */
  readonly absoluteTimeout?: number;
  /**
  * The session audience, which is the intended target application. For example `"my-application"`. Default: "default"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#audience GatewayPluginSession#audience}
  */
  readonly audience?: string;
  /**
  * Bind the session to data acquired from the HTTP request or connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#bind GatewayPluginSession#bind}
  */
  readonly bind?: string[];
  /**
  * The domain with which the cookie is intended to be exchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#cookie_domain GatewayPluginSession#cookie_domain}
  */
  readonly cookieDomain?: string;
  /**
  * Applies the `HttpOnly` tag so that the cookie is sent only to a server. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#cookie_http_only GatewayPluginSession#cookie_http_only}
  */
  readonly cookieHttpOnly?: boolean | cdktf.IResolvable;
  /**
  * The name of the cookie. Default: "session"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#cookie_name GatewayPluginSession#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * The resource in the host where the cookie is available. Default: "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#cookie_path GatewayPluginSession#cookie_path}
  */
  readonly cookiePath?: string;
  /**
  * Determines whether and how a cookie may be sent with cross-site requests. Default: "Strict"; must be one of ["Default", "Lax", "None", "Strict"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#cookie_same_site GatewayPluginSession#cookie_same_site}
  */
  readonly cookieSameSite?: string;
  /**
  * Applies the Secure directive so that the cookie may be sent to the server only with an encrypted request over the HTTPS protocol. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#cookie_secure GatewayPluginSession#cookie_secure}
  */
  readonly cookieSecure?: boolean | cdktf.IResolvable;
  /**
  * Whether to hash or not the subject when store_metadata is enabled. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#hash_subject GatewayPluginSession#hash_subject}
  */
  readonly hashSubject?: boolean | cdktf.IResolvable;
  /**
  * The session cookie idle time, in seconds. Default: 900
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#idling_timeout GatewayPluginSession#idling_timeout}
  */
  readonly idlingTimeout?: number;
  /**
  * A set of HTTP methods that the plugin will respond to. Default: ["DELETE","POST"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#logout_methods GatewayPluginSession#logout_methods}
  */
  readonly logoutMethods?: string[];
  /**
  * The POST argument passed to logout requests. Do not change this property. Default: "session_logout"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#logout_post_arg GatewayPluginSession#logout_post_arg}
  */
  readonly logoutPostArg?: string;
  /**
  * The query argument passed to logout requests. Default: "session_logout"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#logout_query_arg GatewayPluginSession#logout_query_arg}
  */
  readonly logoutQueryArg?: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#read_body_for_logout GatewayPluginSession#read_body_for_logout}
  */
  readonly readBodyForLogout?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables persistent sessions. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#remember GatewayPluginSession#remember}
  */
  readonly remember?: boolean | cdktf.IResolvable;
  /**
  * The persistent session absolute timeout limit, in seconds. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#remember_absolute_timeout GatewayPluginSession#remember_absolute_timeout}
  */
  readonly rememberAbsoluteTimeout?: number;
  /**
  * Persistent session cookie name. Use with the `remember` configuration parameter. Default: "remember"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#remember_cookie_name GatewayPluginSession#remember_cookie_name}
  */
  readonly rememberCookieName?: string;
  /**
  * The persistent session rolling timeout window, in seconds. Default: 604800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#remember_rolling_timeout GatewayPluginSession#remember_rolling_timeout}
  */
  readonly rememberRollingTimeout?: number;
  /**
  * List of information to include, as headers, in the response to the downstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#request_headers GatewayPluginSession#request_headers}
  */
  readonly requestHeaders?: string[];
  /**
  * List of information to include, as headers, in the response to the downstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#response_headers GatewayPluginSession#response_headers}
  */
  readonly responseHeaders?: string[];
  /**
  * The session cookie rolling timeout, in seconds. Specifies how long the session can be used until it needs to be renewed. Default: 3600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#rolling_timeout GatewayPluginSession#rolling_timeout}
  */
  readonly rollingTimeout?: number;
  /**
  * The secret that is used in keyed HMAC generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#secret GatewayPluginSession#secret}
  */
  readonly secret?: string;
  /**
  * The duration, in seconds, after which an old cookie is discarded, starting from the moment when the session becomes outdated and is replaced by a new one. Default: 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#stale_ttl GatewayPluginSession#stale_ttl}
  */
  readonly staleTtl?: number;
  /**
  * Determines where the session data is stored. `kong`: Stores encrypted session data into Kong's current database strategy; the cookie will not contain any session data. `cookie`: Stores encrypted session data within the cookie itself. Default: "cookie"; must be one of ["cookie", "kong"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#storage GatewayPluginSession#storage}
  */
  readonly storage?: string;
  /**
  * Whether to also store metadata of sessions, such as collecting data of sessions for a specific audience belonging to a specific subject. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#store_metadata GatewayPluginSession#store_metadata}
  */
  readonly storeMetadata?: boolean | cdktf.IResolvable;
}

export function gatewayPluginSessionConfigAToTerraform(struct?: GatewayPluginSessionConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_timeout: cdktf.numberToTerraform(struct!.absoluteTimeout),
    audience: cdktf.stringToTerraform(struct!.audience),
    bind: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bind),
    cookie_domain: cdktf.stringToTerraform(struct!.cookieDomain),
    cookie_http_only: cdktf.booleanToTerraform(struct!.cookieHttpOnly),
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    cookie_path: cdktf.stringToTerraform(struct!.cookiePath),
    cookie_same_site: cdktf.stringToTerraform(struct!.cookieSameSite),
    cookie_secure: cdktf.booleanToTerraform(struct!.cookieSecure),
    hash_subject: cdktf.booleanToTerraform(struct!.hashSubject),
    idling_timeout: cdktf.numberToTerraform(struct!.idlingTimeout),
    logout_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logoutMethods),
    logout_post_arg: cdktf.stringToTerraform(struct!.logoutPostArg),
    logout_query_arg: cdktf.stringToTerraform(struct!.logoutQueryArg),
    read_body_for_logout: cdktf.booleanToTerraform(struct!.readBodyForLogout),
    remember: cdktf.booleanToTerraform(struct!.remember),
    remember_absolute_timeout: cdktf.numberToTerraform(struct!.rememberAbsoluteTimeout),
    remember_cookie_name: cdktf.stringToTerraform(struct!.rememberCookieName),
    remember_rolling_timeout: cdktf.numberToTerraform(struct!.rememberRollingTimeout),
    request_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeaders),
    response_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeaders),
    rolling_timeout: cdktf.numberToTerraform(struct!.rollingTimeout),
    secret: cdktf.stringToTerraform(struct!.secret),
    stale_ttl: cdktf.numberToTerraform(struct!.staleTtl),
    storage: cdktf.stringToTerraform(struct!.storage),
    store_metadata: cdktf.booleanToTerraform(struct!.storeMetadata),
  }
}


export function gatewayPluginSessionConfigAToHclTerraform(struct?: GatewayPluginSessionConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute_timeout: {
      value: cdktf.numberToHclTerraform(struct!.absoluteTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bind),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cookie_domain: {
      value: cdktf.stringToHclTerraform(struct!.cookieDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_http_only: {
      value: cdktf.booleanToHclTerraform(struct!.cookieHttpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_path: {
      value: cdktf.stringToHclTerraform(struct!.cookiePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_same_site: {
      value: cdktf.stringToHclTerraform(struct!.cookieSameSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_secure: {
      value: cdktf.booleanToHclTerraform(struct!.cookieSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hash_subject: {
      value: cdktf.booleanToHclTerraform(struct!.hashSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idlingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logout_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logoutMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    logout_post_arg: {
      value: cdktf.stringToHclTerraform(struct!.logoutPostArg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_query_arg: {
      value: cdktf.stringToHclTerraform(struct!.logoutQueryArg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_body_for_logout: {
      value: cdktf.booleanToHclTerraform(struct!.readBodyForLogout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remember: {
      value: cdktf.booleanToHclTerraform(struct!.remember),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remember_absolute_timeout: {
      value: cdktf.numberToHclTerraform(struct!.rememberAbsoluteTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remember_cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.rememberCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remember_rolling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.rememberRollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rolling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.rollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stale_ttl: {
      value: cdktf.numberToHclTerraform(struct!.staleTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.storeMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginSessionConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSessionConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteTimeout = this._absoluteTimeout;
    }
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._bind !== undefined) {
      hasAnyValues = true;
      internalValueResult.bind = this._bind;
    }
    if (this._cookieDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieDomain = this._cookieDomain;
    }
    if (this._cookieHttpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieHttpOnly = this._cookieHttpOnly;
    }
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._cookiePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiePath = this._cookiePath;
    }
    if (this._cookieSameSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieSameSite = this._cookieSameSite;
    }
    if (this._cookieSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieSecure = this._cookieSecure;
    }
    if (this._hashSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashSubject = this._hashSubject;
    }
    if (this._idlingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idlingTimeout = this._idlingTimeout;
    }
    if (this._logoutMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutMethods = this._logoutMethods;
    }
    if (this._logoutPostArg !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutPostArg = this._logoutPostArg;
    }
    if (this._logoutQueryArg !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutQueryArg = this._logoutQueryArg;
    }
    if (this._readBodyForLogout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readBodyForLogout = this._readBodyForLogout;
    }
    if (this._remember !== undefined) {
      hasAnyValues = true;
      internalValueResult.remember = this._remember;
    }
    if (this._rememberAbsoluteTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.rememberAbsoluteTimeout = this._rememberAbsoluteTimeout;
    }
    if (this._rememberCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rememberCookieName = this._rememberCookieName;
    }
    if (this._rememberRollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.rememberRollingTimeout = this._rememberRollingTimeout;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._responseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders;
    }
    if (this._rollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingTimeout = this._rollingTimeout;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._staleTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleTtl = this._staleTtl;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._storeMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeMetadata = this._storeMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSessionConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absoluteTimeout = undefined;
      this._audience = undefined;
      this._bind = undefined;
      this._cookieDomain = undefined;
      this._cookieHttpOnly = undefined;
      this._cookieName = undefined;
      this._cookiePath = undefined;
      this._cookieSameSite = undefined;
      this._cookieSecure = undefined;
      this._hashSubject = undefined;
      this._idlingTimeout = undefined;
      this._logoutMethods = undefined;
      this._logoutPostArg = undefined;
      this._logoutQueryArg = undefined;
      this._readBodyForLogout = undefined;
      this._remember = undefined;
      this._rememberAbsoluteTimeout = undefined;
      this._rememberCookieName = undefined;
      this._rememberRollingTimeout = undefined;
      this._requestHeaders = undefined;
      this._responseHeaders = undefined;
      this._rollingTimeout = undefined;
      this._secret = undefined;
      this._staleTtl = undefined;
      this._storage = undefined;
      this._storeMetadata = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absoluteTimeout = value.absoluteTimeout;
      this._audience = value.audience;
      this._bind = value.bind;
      this._cookieDomain = value.cookieDomain;
      this._cookieHttpOnly = value.cookieHttpOnly;
      this._cookieName = value.cookieName;
      this._cookiePath = value.cookiePath;
      this._cookieSameSite = value.cookieSameSite;
      this._cookieSecure = value.cookieSecure;
      this._hashSubject = value.hashSubject;
      this._idlingTimeout = value.idlingTimeout;
      this._logoutMethods = value.logoutMethods;
      this._logoutPostArg = value.logoutPostArg;
      this._logoutQueryArg = value.logoutQueryArg;
      this._readBodyForLogout = value.readBodyForLogout;
      this._remember = value.remember;
      this._rememberAbsoluteTimeout = value.rememberAbsoluteTimeout;
      this._rememberCookieName = value.rememberCookieName;
      this._rememberRollingTimeout = value.rememberRollingTimeout;
      this._requestHeaders = value.requestHeaders;
      this._responseHeaders = value.responseHeaders;
      this._rollingTimeout = value.rollingTimeout;
      this._secret = value.secret;
      this._staleTtl = value.staleTtl;
      this._storage = value.storage;
      this._storeMetadata = value.storeMetadata;
    }
  }

  // absolute_timeout - computed: true, optional: true, required: false
  private _absoluteTimeout?: number; 
  public get absoluteTimeout() {
    return this.getNumberAttribute('absolute_timeout');
  }
  public set absoluteTimeout(value: number) {
    this._absoluteTimeout = value;
  }
  public resetAbsoluteTimeout() {
    this._absoluteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteTimeoutInput() {
    return this._absoluteTimeout;
  }

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // bind - computed: true, optional: true, required: false
  private _bind?: string[]; 
  public get bind() {
    return this.getListAttribute('bind');
  }
  public set bind(value: string[]) {
    this._bind = value;
  }
  public resetBind() {
    this._bind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInput() {
    return this._bind;
  }

  // cookie_domain - computed: true, optional: true, required: false
  private _cookieDomain?: string; 
  public get cookieDomain() {
    return this.getStringAttribute('cookie_domain');
  }
  public set cookieDomain(value: string) {
    this._cookieDomain = value;
  }
  public resetCookieDomain() {
    this._cookieDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieDomainInput() {
    return this._cookieDomain;
  }

  // cookie_http_only - computed: true, optional: true, required: false
  private _cookieHttpOnly?: boolean | cdktf.IResolvable; 
  public get cookieHttpOnly() {
    return this.getBooleanAttribute('cookie_http_only');
  }
  public set cookieHttpOnly(value: boolean | cdktf.IResolvable) {
    this._cookieHttpOnly = value;
  }
  public resetCookieHttpOnly() {
    this._cookieHttpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieHttpOnlyInput() {
    return this._cookieHttpOnly;
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

  // cookie_path - computed: true, optional: true, required: false
  private _cookiePath?: string; 
  public get cookiePath() {
    return this.getStringAttribute('cookie_path');
  }
  public set cookiePath(value: string) {
    this._cookiePath = value;
  }
  public resetCookiePath() {
    this._cookiePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiePathInput() {
    return this._cookiePath;
  }

  // cookie_same_site - computed: true, optional: true, required: false
  private _cookieSameSite?: string; 
  public get cookieSameSite() {
    return this.getStringAttribute('cookie_same_site');
  }
  public set cookieSameSite(value: string) {
    this._cookieSameSite = value;
  }
  public resetCookieSameSite() {
    this._cookieSameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSameSiteInput() {
    return this._cookieSameSite;
  }

  // cookie_secure - computed: true, optional: true, required: false
  private _cookieSecure?: boolean | cdktf.IResolvable; 
  public get cookieSecure() {
    return this.getBooleanAttribute('cookie_secure');
  }
  public set cookieSecure(value: boolean | cdktf.IResolvable) {
    this._cookieSecure = value;
  }
  public resetCookieSecure() {
    this._cookieSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSecureInput() {
    return this._cookieSecure;
  }

  // hash_subject - computed: true, optional: true, required: false
  private _hashSubject?: boolean | cdktf.IResolvable; 
  public get hashSubject() {
    return this.getBooleanAttribute('hash_subject');
  }
  public set hashSubject(value: boolean | cdktf.IResolvable) {
    this._hashSubject = value;
  }
  public resetHashSubject() {
    this._hashSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashSubjectInput() {
    return this._hashSubject;
  }

  // idling_timeout - computed: true, optional: true, required: false
  private _idlingTimeout?: number; 
  public get idlingTimeout() {
    return this.getNumberAttribute('idling_timeout');
  }
  public set idlingTimeout(value: number) {
    this._idlingTimeout = value;
  }
  public resetIdlingTimeout() {
    this._idlingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idlingTimeoutInput() {
    return this._idlingTimeout;
  }

  // logout_methods - computed: true, optional: true, required: false
  private _logoutMethods?: string[]; 
  public get logoutMethods() {
    return this.getListAttribute('logout_methods');
  }
  public set logoutMethods(value: string[]) {
    this._logoutMethods = value;
  }
  public resetLogoutMethods() {
    this._logoutMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutMethodsInput() {
    return this._logoutMethods;
  }

  // logout_post_arg - computed: true, optional: true, required: false
  private _logoutPostArg?: string; 
  public get logoutPostArg() {
    return this.getStringAttribute('logout_post_arg');
  }
  public set logoutPostArg(value: string) {
    this._logoutPostArg = value;
  }
  public resetLogoutPostArg() {
    this._logoutPostArg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutPostArgInput() {
    return this._logoutPostArg;
  }

  // logout_query_arg - computed: true, optional: true, required: false
  private _logoutQueryArg?: string; 
  public get logoutQueryArg() {
    return this.getStringAttribute('logout_query_arg');
  }
  public set logoutQueryArg(value: string) {
    this._logoutQueryArg = value;
  }
  public resetLogoutQueryArg() {
    this._logoutQueryArg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutQueryArgInput() {
    return this._logoutQueryArg;
  }

  // read_body_for_logout - computed: true, optional: true, required: false
  private _readBodyForLogout?: boolean | cdktf.IResolvable; 
  public get readBodyForLogout() {
    return this.getBooleanAttribute('read_body_for_logout');
  }
  public set readBodyForLogout(value: boolean | cdktf.IResolvable) {
    this._readBodyForLogout = value;
  }
  public resetReadBodyForLogout() {
    this._readBodyForLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readBodyForLogoutInput() {
    return this._readBodyForLogout;
  }

  // remember - computed: true, optional: true, required: false
  private _remember?: boolean | cdktf.IResolvable; 
  public get remember() {
    return this.getBooleanAttribute('remember');
  }
  public set remember(value: boolean | cdktf.IResolvable) {
    this._remember = value;
  }
  public resetRemember() {
    this._remember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rememberInput() {
    return this._remember;
  }

  // remember_absolute_timeout - computed: true, optional: true, required: false
  private _rememberAbsoluteTimeout?: number; 
  public get rememberAbsoluteTimeout() {
    return this.getNumberAttribute('remember_absolute_timeout');
  }
  public set rememberAbsoluteTimeout(value: number) {
    this._rememberAbsoluteTimeout = value;
  }
  public resetRememberAbsoluteTimeout() {
    this._rememberAbsoluteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rememberAbsoluteTimeoutInput() {
    return this._rememberAbsoluteTimeout;
  }

  // remember_cookie_name - computed: true, optional: true, required: false
  private _rememberCookieName?: string; 
  public get rememberCookieName() {
    return this.getStringAttribute('remember_cookie_name');
  }
  public set rememberCookieName(value: string) {
    this._rememberCookieName = value;
  }
  public resetRememberCookieName() {
    this._rememberCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rememberCookieNameInput() {
    return this._rememberCookieName;
  }

  // remember_rolling_timeout - computed: true, optional: true, required: false
  private _rememberRollingTimeout?: number; 
  public get rememberRollingTimeout() {
    return this.getNumberAttribute('remember_rolling_timeout');
  }
  public set rememberRollingTimeout(value: number) {
    this._rememberRollingTimeout = value;
  }
  public resetRememberRollingTimeout() {
    this._rememberRollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rememberRollingTimeoutInput() {
    return this._rememberRollingTimeout;
  }

  // request_headers - computed: true, optional: true, required: false
  private _requestHeaders?: string[]; 
  public get requestHeaders() {
    return this.getListAttribute('request_headers');
  }
  public set requestHeaders(value: string[]) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // response_headers - computed: true, optional: true, required: false
  private _responseHeaders?: string[]; 
  public get responseHeaders() {
    return this.getListAttribute('response_headers');
  }
  public set responseHeaders(value: string[]) {
    this._responseHeaders = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders;
  }

  // rolling_timeout - computed: true, optional: true, required: false
  private _rollingTimeout?: number; 
  public get rollingTimeout() {
    return this.getNumberAttribute('rolling_timeout');
  }
  public set rollingTimeout(value: number) {
    this._rollingTimeout = value;
  }
  public resetRollingTimeout() {
    this._rollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingTimeoutInput() {
    return this._rollingTimeout;
  }

  // secret - computed: true, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // stale_ttl - computed: true, optional: true, required: false
  private _staleTtl?: number; 
  public get staleTtl() {
    return this.getNumberAttribute('stale_ttl');
  }
  public set staleTtl(value: number) {
    this._staleTtl = value;
  }
  public resetStaleTtl() {
    this._staleTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleTtlInput() {
    return this._staleTtl;
  }

  // storage - computed: true, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // store_metadata - computed: true, optional: true, required: false
  private _storeMetadata?: boolean | cdktf.IResolvable; 
  public get storeMetadata() {
    return this.getBooleanAttribute('store_metadata');
  }
  public set storeMetadata(value: boolean | cdktf.IResolvable) {
    this._storeMetadata = value;
  }
  public resetStoreMetadata() {
    this._storeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeMetadataInput() {
    return this._storeMetadata;
  }
}
export interface GatewayPluginSessionOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#access GatewayPluginSession#access}
  */
  readonly access?: string[];
}

export function gatewayPluginSessionOrderingAfterToTerraform(struct?: GatewayPluginSessionOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginSessionOrderingAfterToHclTerraform(struct?: GatewayPluginSessionOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginSessionOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSessionOrderingAfter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSessionOrderingAfter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginSessionOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#access GatewayPluginSession#access}
  */
  readonly access?: string[];
}

export function gatewayPluginSessionOrderingBeforeToTerraform(struct?: GatewayPluginSessionOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginSessionOrderingBeforeToHclTerraform(struct?: GatewayPluginSessionOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginSessionOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSessionOrderingBefore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSessionOrderingBefore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginSessionOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#after GatewayPluginSession#after}
  */
  readonly after?: GatewayPluginSessionOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#before GatewayPluginSession#before}
  */
  readonly before?: GatewayPluginSessionOrderingBefore;
}

export function gatewayPluginSessionOrderingToTerraform(struct?: GatewayPluginSessionOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginSessionOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginSessionOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginSessionOrderingToHclTerraform(struct?: GatewayPluginSessionOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginSessionOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSessionOrderingAfter",
    },
    before: {
      value: gatewayPluginSessionOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSessionOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginSessionOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSessionOrdering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after?.internalValue;
    }
    if (this._before?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.before = this._before?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSessionOrdering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after.internalValue = undefined;
      this._before.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._after.internalValue = value.after;
      this._before.internalValue = value.before;
    }
  }

  // after - computed: true, optional: true, required: false
  private _after = new GatewayPluginSessionOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginSessionOrderingAfter) {
    this._after.internalValue = value;
  }
  public resetAfter() {
    this._after.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after.internalValue;
  }

  // before - computed: true, optional: true, required: false
  private _before = new GatewayPluginSessionOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginSessionOrderingBefore) {
    this._before.internalValue = value;
  }
  public resetBefore() {
    this._before.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before.internalValue;
  }
}
export interface GatewayPluginSessionPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#id GatewayPluginSession#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#name GatewayPluginSession#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#path GatewayPluginSession#path}
  */
  readonly path?: string;
}

export function gatewayPluginSessionPartialsToTerraform(struct?: GatewayPluginSessionPartials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function gatewayPluginSessionPartialsToHclTerraform(struct?: GatewayPluginSessionPartials | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class GatewayPluginSessionPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginSessionPartials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSessionPartials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._path = value.path;
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

export class GatewayPluginSessionPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginSessionPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginSessionPartialsOutputReference {
    return new GatewayPluginSessionPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginSessionRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#id GatewayPluginSession#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginSessionRouteToTerraform(struct?: GatewayPluginSessionRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginSessionRouteToHclTerraform(struct?: GatewayPluginSessionRoute | cdktf.IResolvable): any {
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

export class GatewayPluginSessionRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSessionRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSessionRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginSessionService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#id GatewayPluginSession#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginSessionServiceToTerraform(struct?: GatewayPluginSessionService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginSessionServiceToHclTerraform(struct?: GatewayPluginSessionService | cdktf.IResolvable): any {
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

export class GatewayPluginSessionServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSessionService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSessionService | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session konnect_gateway_plugin_session}
*/
export class GatewayPluginSession extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_session";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginSession resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginSession to import
  * @param importFromId The id of the existing GatewayPluginSession that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginSession to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_session", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_session konnect_gateway_plugin_session} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginSessionConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginSessionConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_session',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._controlPlaneId = config.controlPlaneId;
    this._createdAt = config.createdAt;
    this._enabled = config.enabled;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._ordering.internalValue = config.ordering;
    this._partials.internalValue = config.partials;
    this._protocols = config.protocols;
    this._route.internalValue = config.route;
    this._service.internalValue = config.service;
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: true, required: false
  private _config = new GatewayPluginSessionConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginSessionConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // ordering - computed: true, optional: true, required: false
  private _ordering = new GatewayPluginSessionOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginSessionOrdering) {
    this._ordering.internalValue = value;
  }
  public resetOrdering() {
    this._ordering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderingInput() {
    return this._ordering.internalValue;
  }

  // partials - computed: false, optional: true, required: false
  private _partials = new GatewayPluginSessionPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginSessionPartials[] | cdktf.IResolvable) {
    this._partials.internalValue = value;
  }
  public resetPartials() {
    this._partials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialsInput() {
    return this._partials.internalValue;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
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

  // route - computed: true, optional: true, required: false
  private _route = new GatewayPluginSessionRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginSessionRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // service - computed: true, optional: true, required: false
  private _service = new GatewayPluginSessionServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginSessionService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: gatewayPluginSessionConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginSessionOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginSessionPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginSessionRouteToTerraform(this._route.internalValue),
      service: gatewayPluginSessionServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginSessionConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSessionConfigA",
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ordering: {
        value: gatewayPluginSessionOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSessionOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginSessionPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginSessionPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginSessionRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSessionRoute",
      },
      service: {
        value: gatewayPluginSessionServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSessionService",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
