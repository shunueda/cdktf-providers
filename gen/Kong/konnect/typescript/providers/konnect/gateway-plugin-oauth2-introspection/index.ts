// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginOauth2IntrospectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#config GatewayPluginOauth2Introspection#config}
  */
  readonly config: GatewayPluginOauth2IntrospectionConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#control_plane_id GatewayPluginOauth2Introspection#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#created_at GatewayPluginOauth2Introspection#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#enabled GatewayPluginOauth2Introspection#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#id GatewayPluginOauth2Introspection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#instance_name GatewayPluginOauth2Introspection#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#ordering GatewayPluginOauth2Introspection#ordering}
  */
  readonly ordering?: GatewayPluginOauth2IntrospectionOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#partials GatewayPluginOauth2Introspection#partials}
  */
  readonly partials?: GatewayPluginOauth2IntrospectionPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#protocols GatewayPluginOauth2Introspection#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#route GatewayPluginOauth2Introspection#route}
  */
  readonly route?: GatewayPluginOauth2IntrospectionRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#service GatewayPluginOauth2Introspection#service}
  */
  readonly service?: GatewayPluginOauth2IntrospectionService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#tags GatewayPluginOauth2Introspection#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#updated_at GatewayPluginOauth2Introspection#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginOauth2IntrospectionConfigA {
  /**
  * An optional string (consumer UUID or username) value to use as an “anonymous” consumer if authentication fails. If empty (default null), the request fails with an authentication failure `4xx`. Note that this value must refer to the consumer `id` or `username` attribute, and **not** its `custom_id`. Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#anonymous GatewayPluginOauth2Introspection#anonymous}
  */
  readonly anonymous?: string;
  /**
  * The value to set as the `Authorization` header when querying the introspection endpoint. This depends on the OAuth 2.0 server, but usually is the `client_id` and `client_secret` as a Base64-encoded Basic Auth string (`Basic MG9hNWl...`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#authorization_value GatewayPluginOauth2Introspection#authorization_value}
  */
  readonly authorizationValue: string;
  /**
  * A string indicating whether to associate OAuth2 `username` or `client_id` with the consumer's username. OAuth2 `username` is mapped to a consumer's `username` field, while an OAuth2 `client_id` maps to a consumer's `custom_id`. Default: "username"; must be one of ["client_id", "username"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#consumer_by GatewayPluginOauth2Introspection#consumer_by}
  */
  readonly consumerBy?: string;
  /**
  * A list of custom claims to be forwarded from the introspection response to the upstream request. Claims are forwarded in headers with prefix `X-Credential-{claim-name}`. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#custom_claims_forward GatewayPluginOauth2Introspection#custom_claims_forward}
  */
  readonly customClaimsForward?: string[];
  /**
  * A list of custom headers to be added in the introspection request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#custom_introspection_headers GatewayPluginOauth2Introspection#custom_introspection_headers}
  */
  readonly customIntrospectionHeaders?: { [key: string]: string };
  /**
  * An optional boolean value telling the plugin to hide the credential to the upstream API server. It will be removed by Kong before proxying the request. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#hide_credentials GatewayPluginOauth2Introspection#hide_credentials}
  */
  readonly hideCredentials?: boolean | cdktf.IResolvable;
  /**
  * A boolean indicating whether to forward information about the current downstream request to the introspect endpoint. If true, headers `X-Request-Path` and `X-Request-Http-Method` will be inserted into the introspect request. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#introspect_request GatewayPluginOauth2Introspection#introspect_request}
  */
  readonly introspectRequest?: boolean | cdktf.IResolvable;
  /**
  * A string representing a URL, such as https://example.com/path/to/resource?q=search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#introspection_url GatewayPluginOauth2Introspection#introspection_url}
  */
  readonly introspectionUrl: string;
  /**
  * An optional value in milliseconds that defines how long an idle connection lives before being closed. Default: 60000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#keepalive GatewayPluginOauth2Introspection#keepalive}
  */
  readonly keepalive?: number;
  /**
  * A boolean value that indicates whether the plugin should run (and try to authenticate) on `OPTIONS` preflight requests. If set to `false`, then `OPTIONS` requests will always be allowed. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#run_on_preflight GatewayPluginOauth2Introspection#run_on_preflight}
  */
  readonly runOnPreflight?: boolean | cdktf.IResolvable;
  /**
  * An optional timeout in milliseconds when sending data to the upstream server. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#timeout GatewayPluginOauth2Introspection#timeout}
  */
  readonly timeout?: number;
  /**
  * The `token_type_hint` value to associate to introspection requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#token_type_hint GatewayPluginOauth2Introspection#token_type_hint}
  */
  readonly tokenTypeHint?: string;
  /**
  * The TTL in seconds for the introspection response. Set to 0 to disable the expiration. Default: 30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#ttl GatewayPluginOauth2Introspection#ttl}
  */
  readonly ttl?: number;
}

export function gatewayPluginOauth2IntrospectionConfigAToTerraform(struct?: GatewayPluginOauth2IntrospectionConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anonymous: cdktf.stringToTerraform(struct!.anonymous),
    authorization_value: cdktf.stringToTerraform(struct!.authorizationValue),
    consumer_by: cdktf.stringToTerraform(struct!.consumerBy),
    custom_claims_forward: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customClaimsForward),
    custom_introspection_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customIntrospectionHeaders),
    hide_credentials: cdktf.booleanToTerraform(struct!.hideCredentials),
    introspect_request: cdktf.booleanToTerraform(struct!.introspectRequest),
    introspection_url: cdktf.stringToTerraform(struct!.introspectionUrl),
    keepalive: cdktf.numberToTerraform(struct!.keepalive),
    run_on_preflight: cdktf.booleanToTerraform(struct!.runOnPreflight),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    token_type_hint: cdktf.stringToTerraform(struct!.tokenTypeHint),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function gatewayPluginOauth2IntrospectionConfigAToHclTerraform(struct?: GatewayPluginOauth2IntrospectionConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anonymous: {
      value: cdktf.stringToHclTerraform(struct!.anonymous),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_value: {
      value: cdktf.stringToHclTerraform(struct!.authorizationValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_by: {
      value: cdktf.stringToHclTerraform(struct!.consumerBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_claims_forward: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customClaimsForward),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_introspection_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customIntrospectionHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hide_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.hideCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    introspect_request: {
      value: cdktf.booleanToHclTerraform(struct!.introspectRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    introspection_url: {
      value: cdktf.stringToHclTerraform(struct!.introspectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive: {
      value: cdktf.numberToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_on_preflight: {
      value: cdktf.booleanToHclTerraform(struct!.runOnPreflight),
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
    token_type_hint: {
      value: cdktf.stringToHclTerraform(struct!.tokenTypeHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOauth2IntrospectionConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOauth2IntrospectionConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anonymous !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymous = this._anonymous;
    }
    if (this._authorizationValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationValue = this._authorizationValue;
    }
    if (this._consumerBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerBy = this._consumerBy;
    }
    if (this._customClaimsForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.customClaimsForward = this._customClaimsForward;
    }
    if (this._customIntrospectionHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIntrospectionHeaders = this._customIntrospectionHeaders;
    }
    if (this._hideCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideCredentials = this._hideCredentials;
    }
    if (this._introspectRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectRequest = this._introspectRequest;
    }
    if (this._introspectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionUrl = this._introspectionUrl;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._runOnPreflight !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOnPreflight = this._runOnPreflight;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tokenTypeHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenTypeHint = this._tokenTypeHint;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOauth2IntrospectionConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anonymous = undefined;
      this._authorizationValue = undefined;
      this._consumerBy = undefined;
      this._customClaimsForward = undefined;
      this._customIntrospectionHeaders = undefined;
      this._hideCredentials = undefined;
      this._introspectRequest = undefined;
      this._introspectionUrl = undefined;
      this._keepalive = undefined;
      this._runOnPreflight = undefined;
      this._timeout = undefined;
      this._tokenTypeHint = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anonymous = value.anonymous;
      this._authorizationValue = value.authorizationValue;
      this._consumerBy = value.consumerBy;
      this._customClaimsForward = value.customClaimsForward;
      this._customIntrospectionHeaders = value.customIntrospectionHeaders;
      this._hideCredentials = value.hideCredentials;
      this._introspectRequest = value.introspectRequest;
      this._introspectionUrl = value.introspectionUrl;
      this._keepalive = value.keepalive;
      this._runOnPreflight = value.runOnPreflight;
      this._timeout = value.timeout;
      this._tokenTypeHint = value.tokenTypeHint;
      this._ttl = value.ttl;
    }
  }

  // anonymous - computed: true, optional: true, required: false
  private _anonymous?: string; 
  public get anonymous() {
    return this.getStringAttribute('anonymous');
  }
  public set anonymous(value: string) {
    this._anonymous = value;
  }
  public resetAnonymous() {
    this._anonymous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousInput() {
    return this._anonymous;
  }

  // authorization_value - computed: false, optional: false, required: true
  private _authorizationValue?: string; 
  public get authorizationValue() {
    return this.getStringAttribute('authorization_value');
  }
  public set authorizationValue(value: string) {
    this._authorizationValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationValueInput() {
    return this._authorizationValue;
  }

  // consumer_by - computed: true, optional: true, required: false
  private _consumerBy?: string; 
  public get consumerBy() {
    return this.getStringAttribute('consumer_by');
  }
  public set consumerBy(value: string) {
    this._consumerBy = value;
  }
  public resetConsumerBy() {
    this._consumerBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerByInput() {
    return this._consumerBy;
  }

  // custom_claims_forward - computed: true, optional: true, required: false
  private _customClaimsForward?: string[]; 
  public get customClaimsForward() {
    return this.getListAttribute('custom_claims_forward');
  }
  public set customClaimsForward(value: string[]) {
    this._customClaimsForward = value;
  }
  public resetCustomClaimsForward() {
    this._customClaimsForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customClaimsForwardInput() {
    return this._customClaimsForward;
  }

  // custom_introspection_headers - computed: false, optional: true, required: false
  private _customIntrospectionHeaders?: { [key: string]: string }; 
  public get customIntrospectionHeaders() {
    return this.getStringMapAttribute('custom_introspection_headers');
  }
  public set customIntrospectionHeaders(value: { [key: string]: string }) {
    this._customIntrospectionHeaders = value;
  }
  public resetCustomIntrospectionHeaders() {
    this._customIntrospectionHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIntrospectionHeadersInput() {
    return this._customIntrospectionHeaders;
  }

  // hide_credentials - computed: true, optional: true, required: false
  private _hideCredentials?: boolean | cdktf.IResolvable; 
  public get hideCredentials() {
    return this.getBooleanAttribute('hide_credentials');
  }
  public set hideCredentials(value: boolean | cdktf.IResolvable) {
    this._hideCredentials = value;
  }
  public resetHideCredentials() {
    this._hideCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideCredentialsInput() {
    return this._hideCredentials;
  }

  // introspect_request - computed: true, optional: true, required: false
  private _introspectRequest?: boolean | cdktf.IResolvable; 
  public get introspectRequest() {
    return this.getBooleanAttribute('introspect_request');
  }
  public set introspectRequest(value: boolean | cdktf.IResolvable) {
    this._introspectRequest = value;
  }
  public resetIntrospectRequest() {
    this._introspectRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectRequestInput() {
    return this._introspectRequest;
  }

  // introspection_url - computed: false, optional: false, required: true
  private _introspectionUrl?: string; 
  public get introspectionUrl() {
    return this.getStringAttribute('introspection_url');
  }
  public set introspectionUrl(value: string) {
    this._introspectionUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionUrlInput() {
    return this._introspectionUrl;
  }

  // keepalive - computed: true, optional: true, required: false
  private _keepalive?: number; 
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }
  public set keepalive(value: number) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // run_on_preflight - computed: true, optional: true, required: false
  private _runOnPreflight?: boolean | cdktf.IResolvable; 
  public get runOnPreflight() {
    return this.getBooleanAttribute('run_on_preflight');
  }
  public set runOnPreflight(value: boolean | cdktf.IResolvable) {
    this._runOnPreflight = value;
  }
  public resetRunOnPreflight() {
    this._runOnPreflight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnPreflightInput() {
    return this._runOnPreflight;
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

  // token_type_hint - computed: false, optional: true, required: false
  private _tokenTypeHint?: string; 
  public get tokenTypeHint() {
    return this.getStringAttribute('token_type_hint');
  }
  public set tokenTypeHint(value: string) {
    this._tokenTypeHint = value;
  }
  public resetTokenTypeHint() {
    this._tokenTypeHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTypeHintInput() {
    return this._tokenTypeHint;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface GatewayPluginOauth2IntrospectionOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#access GatewayPluginOauth2Introspection#access}
  */
  readonly access?: string[];
}

export function gatewayPluginOauth2IntrospectionOrderingAfterToTerraform(struct?: GatewayPluginOauth2IntrospectionOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginOauth2IntrospectionOrderingAfterToHclTerraform(struct?: GatewayPluginOauth2IntrospectionOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginOauth2IntrospectionOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOauth2IntrospectionOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOauth2IntrospectionOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOauth2IntrospectionOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#access GatewayPluginOauth2Introspection#access}
  */
  readonly access?: string[];
}

export function gatewayPluginOauth2IntrospectionOrderingBeforeToTerraform(struct?: GatewayPluginOauth2IntrospectionOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginOauth2IntrospectionOrderingBeforeToHclTerraform(struct?: GatewayPluginOauth2IntrospectionOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginOauth2IntrospectionOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOauth2IntrospectionOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOauth2IntrospectionOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOauth2IntrospectionOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#after GatewayPluginOauth2Introspection#after}
  */
  readonly after?: GatewayPluginOauth2IntrospectionOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#before GatewayPluginOauth2Introspection#before}
  */
  readonly before?: GatewayPluginOauth2IntrospectionOrderingBefore;
}

export function gatewayPluginOauth2IntrospectionOrderingToTerraform(struct?: GatewayPluginOauth2IntrospectionOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginOauth2IntrospectionOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginOauth2IntrospectionOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginOauth2IntrospectionOrderingToHclTerraform(struct?: GatewayPluginOauth2IntrospectionOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginOauth2IntrospectionOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginOauth2IntrospectionOrderingAfter",
    },
    before: {
      value: gatewayPluginOauth2IntrospectionOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginOauth2IntrospectionOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOauth2IntrospectionOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOauth2IntrospectionOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOauth2IntrospectionOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginOauth2IntrospectionOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginOauth2IntrospectionOrderingAfter) {
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
  private _before = new GatewayPluginOauth2IntrospectionOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginOauth2IntrospectionOrderingBefore) {
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
export interface GatewayPluginOauth2IntrospectionPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#id GatewayPluginOauth2Introspection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#name GatewayPluginOauth2Introspection#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#path GatewayPluginOauth2Introspection#path}
  */
  readonly path?: string;
}

export function gatewayPluginOauth2IntrospectionPartialsToTerraform(struct?: GatewayPluginOauth2IntrospectionPartials | cdktf.IResolvable): any {
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


export function gatewayPluginOauth2IntrospectionPartialsToHclTerraform(struct?: GatewayPluginOauth2IntrospectionPartials | cdktf.IResolvable): any {
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

export class GatewayPluginOauth2IntrospectionPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginOauth2IntrospectionPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOauth2IntrospectionPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginOauth2IntrospectionPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginOauth2IntrospectionPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginOauth2IntrospectionPartialsOutputReference {
    return new GatewayPluginOauth2IntrospectionPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginOauth2IntrospectionRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#id GatewayPluginOauth2Introspection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginOauth2IntrospectionRouteToTerraform(struct?: GatewayPluginOauth2IntrospectionRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginOauth2IntrospectionRouteToHclTerraform(struct?: GatewayPluginOauth2IntrospectionRoute | cdktf.IResolvable): any {
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

export class GatewayPluginOauth2IntrospectionRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOauth2IntrospectionRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOauth2IntrospectionRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOauth2IntrospectionService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#id GatewayPluginOauth2Introspection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginOauth2IntrospectionServiceToTerraform(struct?: GatewayPluginOauth2IntrospectionService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginOauth2IntrospectionServiceToHclTerraform(struct?: GatewayPluginOauth2IntrospectionService | cdktf.IResolvable): any {
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

export class GatewayPluginOauth2IntrospectionServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOauth2IntrospectionService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOauth2IntrospectionService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection konnect_gateway_plugin_oauth2_introspection}
*/
export class GatewayPluginOauth2Introspection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_oauth2_introspection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginOauth2Introspection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginOauth2Introspection to import
  * @param importFromId The id of the existing GatewayPluginOauth2Introspection that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginOauth2Introspection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_oauth2_introspection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oauth2_introspection konnect_gateway_plugin_oauth2_introspection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginOauth2IntrospectionConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginOauth2IntrospectionConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_oauth2_introspection',
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

  // config - computed: false, optional: false, required: true
  private _config = new GatewayPluginOauth2IntrospectionConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginOauth2IntrospectionConfigA) {
    this._config.internalValue = value;
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
  private _ordering = new GatewayPluginOauth2IntrospectionOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginOauth2IntrospectionOrdering) {
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
  private _partials = new GatewayPluginOauth2IntrospectionPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginOauth2IntrospectionPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginOauth2IntrospectionRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginOauth2IntrospectionRoute) {
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
  private _service = new GatewayPluginOauth2IntrospectionServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginOauth2IntrospectionService) {
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
      config: gatewayPluginOauth2IntrospectionConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginOauth2IntrospectionOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginOauth2IntrospectionPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginOauth2IntrospectionRouteToTerraform(this._route.internalValue),
      service: gatewayPluginOauth2IntrospectionServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginOauth2IntrospectionConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOauth2IntrospectionConfigA",
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
        value: gatewayPluginOauth2IntrospectionOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOauth2IntrospectionOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginOauth2IntrospectionPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginOauth2IntrospectionPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginOauth2IntrospectionRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOauth2IntrospectionRoute",
      },
      service: {
        value: gatewayPluginOauth2IntrospectionServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOauth2IntrospectionService",
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
