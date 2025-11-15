// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginAiProxyAdvancedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#config GatewayPluginAiProxyAdvanced#config}
  */
  readonly config: GatewayPluginAiProxyAdvancedConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#consumer GatewayPluginAiProxyAdvanced#consumer}
  */
  readonly consumer?: GatewayPluginAiProxyAdvancedConsumer;
  /**
  * If set, the plugin will activate only for requests where the specified consumer group has been authenticated. (Note that some plugins can not be restricted to consumers groups this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#consumer_group GatewayPluginAiProxyAdvanced#consumer_group}
  */
  readonly consumerGroup?: GatewayPluginAiProxyAdvancedConsumerGroup;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#control_plane_id GatewayPluginAiProxyAdvanced#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#created_at GatewayPluginAiProxyAdvanced#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#enabled GatewayPluginAiProxyAdvanced#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#id GatewayPluginAiProxyAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#instance_name GatewayPluginAiProxyAdvanced#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#ordering GatewayPluginAiProxyAdvanced#ordering}
  */
  readonly ordering?: GatewayPluginAiProxyAdvancedOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#partials GatewayPluginAiProxyAdvanced#partials}
  */
  readonly partials?: GatewayPluginAiProxyAdvancedPartials[] | cdktf.IResolvable;
  /**
  * A list of the request protocols that will trigger this plugin. The default value, as well as the possible values allowed on this field, may change depending on the plugin type. For example, plugins that only work in stream mode will only support tcp and tls. Default: ["grpc","grpcs","http","https","ws","wss"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#protocols GatewayPluginAiProxyAdvanced#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#route GatewayPluginAiProxyAdvanced#route}
  */
  readonly route?: GatewayPluginAiProxyAdvancedRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#service GatewayPluginAiProxyAdvanced#service}
  */
  readonly service?: GatewayPluginAiProxyAdvancedService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#tags GatewayPluginAiProxyAdvanced#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#updated_at GatewayPluginAiProxyAdvanced#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginAiProxyAdvancedConfigBalancer {
  /**
  * Which load balancing algorithm to use. Default: "round-robin"; must be one of ["consistent-hashing", "lowest-latency", "lowest-usage", "priority", "round-robin", "semantic"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#algorithm GatewayPluginAiProxyAdvanced#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Default: 60000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#connect_timeout GatewayPluginAiProxyAdvanced#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Specifies in which cases an upstream response should be failover to the next target. Each option in the array is equivalent to the function of http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream. Default: ["error","timeout"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#failover_criteria GatewayPluginAiProxyAdvanced#failover_criteria}
  */
  readonly failoverCriteria?: string[];
  /**
  * The header to use for consistent-hashing. Default: "X-Kong-LLM-Request-ID"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#hash_on_header GatewayPluginAiProxyAdvanced#hash_on_header}
  */
  readonly hashOnHeader?: string;
  /**
  * What metrics to use for latency. Available values are: `tpot` (time-per-output-token) and `e2e`. Default: "tpot"; must be one of ["e2e", "tpot"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#latency_strategy GatewayPluginAiProxyAdvanced#latency_strategy}
  */
  readonly latencyStrategy?: string;
  /**
  * Default: 60000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#read_timeout GatewayPluginAiProxyAdvanced#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * The number of retries to execute upon failure to proxy. Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#retries GatewayPluginAiProxyAdvanced#retries}
  */
  readonly retries?: number;
  /**
  * The number of slots in the load balancer algorithm. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#slots GatewayPluginAiProxyAdvanced#slots}
  */
  readonly slots?: number;
  /**
  * What tokens to use for usage calculation. Available values are: `total_tokens` `prompt_tokens`, `completion_tokens` and `cost`. Default: "total-tokens"; must be one of ["completion-tokens", "cost", "llm-accuracy", "prompt-tokens", "total-tokens"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#tokens_count_strategy GatewayPluginAiProxyAdvanced#tokens_count_strategy}
  */
  readonly tokensCountStrategy?: string;
  /**
  * Default: 60000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#write_timeout GatewayPluginAiProxyAdvanced#write_timeout}
  */
  readonly writeTimeout?: number;
}

export function gatewayPluginAiProxyAdvancedConfigBalancerToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    failover_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failoverCriteria),
    hash_on_header: cdktf.stringToTerraform(struct!.hashOnHeader),
    latency_strategy: cdktf.stringToTerraform(struct!.latencyStrategy),
    read_timeout: cdktf.numberToTerraform(struct!.readTimeout),
    retries: cdktf.numberToTerraform(struct!.retries),
    slots: cdktf.numberToTerraform(struct!.slots),
    tokens_count_strategy: cdktf.stringToTerraform(struct!.tokensCountStrategy),
    write_timeout: cdktf.numberToTerraform(struct!.writeTimeout),
  }
}


export function gatewayPluginAiProxyAdvancedConfigBalancerToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failover_criteria: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failoverCriteria),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hash_on_header: {
      value: cdktf.stringToHclTerraform(struct!.hashOnHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latency_strategy: {
      value: cdktf.stringToHclTerraform(struct!.latencyStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slots: {
      value: cdktf.numberToHclTerraform(struct!.slots),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tokens_count_strategy: {
      value: cdktf.stringToHclTerraform(struct!.tokensCountStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_timeout: {
      value: cdktf.numberToHclTerraform(struct!.writeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._failoverCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverCriteria = this._failoverCriteria;
    }
    if (this._hashOnHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashOnHeader = this._hashOnHeader;
    }
    if (this._latencyStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyStrategy = this._latencyStrategy;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._slots !== undefined) {
      hasAnyValues = true;
      internalValueResult.slots = this._slots;
    }
    if (this._tokensCountStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokensCountStrategy = this._tokensCountStrategy;
    }
    if (this._writeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeTimeout = this._writeTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._connectTimeout = undefined;
      this._failoverCriteria = undefined;
      this._hashOnHeader = undefined;
      this._latencyStrategy = undefined;
      this._readTimeout = undefined;
      this._retries = undefined;
      this._slots = undefined;
      this._tokensCountStrategy = undefined;
      this._writeTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._connectTimeout = value.connectTimeout;
      this._failoverCriteria = value.failoverCriteria;
      this._hashOnHeader = value.hashOnHeader;
      this._latencyStrategy = value.latencyStrategy;
      this._readTimeout = value.readTimeout;
      this._retries = value.retries;
      this._slots = value.slots;
      this._tokensCountStrategy = value.tokensCountStrategy;
      this._writeTimeout = value.writeTimeout;
    }
  }

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

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // failover_criteria - computed: true, optional: true, required: false
  private _failoverCriteria?: string[]; 
  public get failoverCriteria() {
    return this.getListAttribute('failover_criteria');
  }
  public set failoverCriteria(value: string[]) {
    this._failoverCriteria = value;
  }
  public resetFailoverCriteria() {
    this._failoverCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverCriteriaInput() {
    return this._failoverCriteria;
  }

  // hash_on_header - computed: true, optional: true, required: false
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

  // latency_strategy - computed: true, optional: true, required: false
  private _latencyStrategy?: string; 
  public get latencyStrategy() {
    return this.getStringAttribute('latency_strategy');
  }
  public set latencyStrategy(value: string) {
    this._latencyStrategy = value;
  }
  public resetLatencyStrategy() {
    this._latencyStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyStrategyInput() {
    return this._latencyStrategy;
  }

  // read_timeout - computed: true, optional: true, required: false
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // retries - computed: true, optional: true, required: false
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

  // tokens_count_strategy - computed: true, optional: true, required: false
  private _tokensCountStrategy?: string; 
  public get tokensCountStrategy() {
    return this.getStringAttribute('tokens_count_strategy');
  }
  public set tokensCountStrategy(value: string) {
    this._tokensCountStrategy = value;
  }
  public resetTokensCountStrategy() {
    this._tokensCountStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensCountStrategyInput() {
    return this._tokensCountStrategy;
  }

  // write_timeout - computed: true, optional: true, required: false
  private _writeTimeout?: number; 
  public get writeTimeout() {
    return this.getNumberAttribute('write_timeout');
  }
  public set writeTimeout(value: number) {
    this._writeTimeout = value;
  }
  public resetWriteTimeout() {
    this._writeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeTimeoutInput() {
    return this._writeTimeout;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigEmbeddingsAuth {
  /**
  * If enabled, the authorization header or parameter can be overridden in the request by the value configured in the plugin. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#allow_override GatewayPluginAiProxyAdvanced#allow_override}
  */
  readonly allowOverride?: boolean | cdktf.IResolvable;
  /**
  * Set this if you are using an AWS provider (Bedrock) and you are authenticating using static IAM User credentials. Setting this will override the AWS_ACCESS_KEY_ID environment variable for this plugin instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#aws_access_key_id GatewayPluginAiProxyAdvanced#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Set this if you are using an AWS provider (Bedrock) and you are authenticating using static IAM User credentials. Setting this will override the AWS_SECRET_ACCESS_KEY environment variable for this plugin instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#aws_secret_access_key GatewayPluginAiProxyAdvanced#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#azure_client_id GatewayPluginAiProxyAdvanced#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#azure_client_secret GatewayPluginAiProxyAdvanced#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#azure_tenant_id GatewayPluginAiProxyAdvanced#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Set true to use the Azure Cloud Managed Identity (or user-assigned identity) to authenticate with Azure-provider models. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#azure_use_managed_identity GatewayPluginAiProxyAdvanced#azure_use_managed_identity}
  */
  readonly azureUseManagedIdentity?: boolean | cdktf.IResolvable;
  /**
  * Set this field to the full JSON of the GCP service account to authenticate, if required. If null (and gcp_use_service_account is true), Kong will attempt to read from environment variable `GCP_SERVICE_ACCOUNT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#gcp_service_account_json GatewayPluginAiProxyAdvanced#gcp_service_account_json}
  */
  readonly gcpServiceAccountJson?: string;
  /**
  * Use service account auth for GCP-based providers and models. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#gcp_use_service_account GatewayPluginAiProxyAdvanced#gcp_use_service_account}
  */
  readonly gcpUseServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * If AI model requires authentication via Authorization or API key header, specify its name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#header_name GatewayPluginAiProxyAdvanced#header_name}
  */
  readonly headerName?: string;
  /**
  * Specify the full auth header value for 'header_name', for example 'Bearer key' or just 'key'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#header_value GatewayPluginAiProxyAdvanced#header_value}
  */
  readonly headerValue?: string;
  /**
  * Specify whether the 'param_name' and 'param_value' options go in a query string, or the POST form/JSON body. must be one of ["body", "query"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#param_location GatewayPluginAiProxyAdvanced#param_location}
  */
  readonly paramLocation?: string;
  /**
  * If AI model requires authentication via query parameter, specify its name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#param_name GatewayPluginAiProxyAdvanced#param_name}
  */
  readonly paramName?: string;
  /**
  * Specify the full parameter value for 'param_name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#param_value GatewayPluginAiProxyAdvanced#param_value}
  */
  readonly paramValue?: string;
}

export function gatewayPluginAiProxyAdvancedConfigEmbeddingsAuthToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddingsAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_override: cdktf.booleanToTerraform(struct!.allowOverride),
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_secret_access_key: cdktf.stringToTerraform(struct!.awsSecretAccessKey),
    azure_client_id: cdktf.stringToTerraform(struct!.azureClientId),
    azure_client_secret: cdktf.stringToTerraform(struct!.azureClientSecret),
    azure_tenant_id: cdktf.stringToTerraform(struct!.azureTenantId),
    azure_use_managed_identity: cdktf.booleanToTerraform(struct!.azureUseManagedIdentity),
    gcp_service_account_json: cdktf.stringToTerraform(struct!.gcpServiceAccountJson),
    gcp_use_service_account: cdktf.booleanToTerraform(struct!.gcpUseServiceAccount),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    param_location: cdktf.stringToTerraform(struct!.paramLocation),
    param_name: cdktf.stringToTerraform(struct!.paramName),
    param_value: cdktf.stringToTerraform(struct!.paramValue),
  }
}


export function gatewayPluginAiProxyAdvancedConfigEmbeddingsAuthToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddingsAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_override: {
      value: cdktf.booleanToHclTerraform(struct!.allowOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_client_id: {
      value: cdktf.stringToHclTerraform(struct!.azureClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.azureClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.azureTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_use_managed_identity: {
      value: cdktf.booleanToHclTerraform(struct!.azureUseManagedIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gcp_service_account_json: {
      value: cdktf.stringToHclTerraform(struct!.gcpServiceAccountJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_use_service_account: {
      value: cdktf.booleanToHclTerraform(struct!.gcpUseServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_location: {
      value: cdktf.stringToHclTerraform(struct!.paramLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_name: {
      value: cdktf.stringToHclTerraform(struct!.paramName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_value: {
      value: cdktf.stringToHclTerraform(struct!.paramValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigEmbeddingsAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigEmbeddingsAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOverride = this._allowOverride;
    }
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKey = this._awsSecretAccessKey;
    }
    if (this._azureClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureClientId = this._azureClientId;
    }
    if (this._azureClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureClientSecret = this._azureClientSecret;
    }
    if (this._azureTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureTenantId = this._azureTenantId;
    }
    if (this._azureUseManagedIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureUseManagedIdentity = this._azureUseManagedIdentity;
    }
    if (this._gcpServiceAccountJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccountJson = this._gcpServiceAccountJson;
    }
    if (this._gcpUseServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpUseServiceAccount = this._gcpUseServiceAccount;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._paramLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramLocation = this._paramLocation;
    }
    if (this._paramName !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramName = this._paramName;
    }
    if (this._paramValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramValue = this._paramValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigEmbeddingsAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowOverride = undefined;
      this._awsAccessKeyId = undefined;
      this._awsSecretAccessKey = undefined;
      this._azureClientId = undefined;
      this._azureClientSecret = undefined;
      this._azureTenantId = undefined;
      this._azureUseManagedIdentity = undefined;
      this._gcpServiceAccountJson = undefined;
      this._gcpUseServiceAccount = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._paramLocation = undefined;
      this._paramName = undefined;
      this._paramValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowOverride = value.allowOverride;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsSecretAccessKey = value.awsSecretAccessKey;
      this._azureClientId = value.azureClientId;
      this._azureClientSecret = value.azureClientSecret;
      this._azureTenantId = value.azureTenantId;
      this._azureUseManagedIdentity = value.azureUseManagedIdentity;
      this._gcpServiceAccountJson = value.gcpServiceAccountJson;
      this._gcpUseServiceAccount = value.gcpUseServiceAccount;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._paramLocation = value.paramLocation;
      this._paramName = value.paramName;
      this._paramValue = value.paramValue;
    }
  }

  // allow_override - computed: true, optional: true, required: false
  private _allowOverride?: boolean | cdktf.IResolvable; 
  public get allowOverride() {
    return this.getBooleanAttribute('allow_override');
  }
  public set allowOverride(value: boolean | cdktf.IResolvable) {
    this._allowOverride = value;
  }
  public resetAllowOverride() {
    this._allowOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverrideInput() {
    return this._allowOverride;
  }

  // aws_access_key_id - computed: true, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_secret_access_key - computed: true, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }

  // azure_client_id - computed: true, optional: true, required: false
  private _azureClientId?: string; 
  public get azureClientId() {
    return this.getStringAttribute('azure_client_id');
  }
  public set azureClientId(value: string) {
    this._azureClientId = value;
  }
  public resetAzureClientId() {
    this._azureClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientIdInput() {
    return this._azureClientId;
  }

  // azure_client_secret - computed: true, optional: true, required: false
  private _azureClientSecret?: string; 
  public get azureClientSecret() {
    return this.getStringAttribute('azure_client_secret');
  }
  public set azureClientSecret(value: string) {
    this._azureClientSecret = value;
  }
  public resetAzureClientSecret() {
    this._azureClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientSecretInput() {
    return this._azureClientSecret;
  }

  // azure_tenant_id - computed: true, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // azure_use_managed_identity - computed: true, optional: true, required: false
  private _azureUseManagedIdentity?: boolean | cdktf.IResolvable; 
  public get azureUseManagedIdentity() {
    return this.getBooleanAttribute('azure_use_managed_identity');
  }
  public set azureUseManagedIdentity(value: boolean | cdktf.IResolvable) {
    this._azureUseManagedIdentity = value;
  }
  public resetAzureUseManagedIdentity() {
    this._azureUseManagedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureUseManagedIdentityInput() {
    return this._azureUseManagedIdentity;
  }

  // gcp_service_account_json - computed: true, optional: true, required: false
  private _gcpServiceAccountJson?: string; 
  public get gcpServiceAccountJson() {
    return this.getStringAttribute('gcp_service_account_json');
  }
  public set gcpServiceAccountJson(value: string) {
    this._gcpServiceAccountJson = value;
  }
  public resetGcpServiceAccountJson() {
    this._gcpServiceAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountJsonInput() {
    return this._gcpServiceAccountJson;
  }

  // gcp_use_service_account - computed: true, optional: true, required: false
  private _gcpUseServiceAccount?: boolean | cdktf.IResolvable; 
  public get gcpUseServiceAccount() {
    return this.getBooleanAttribute('gcp_use_service_account');
  }
  public set gcpUseServiceAccount(value: boolean | cdktf.IResolvable) {
    this._gcpUseServiceAccount = value;
  }
  public resetGcpUseServiceAccount() {
    this._gcpUseServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpUseServiceAccountInput() {
    return this._gcpUseServiceAccount;
  }

  // header_name - computed: true, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: true, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // param_location - computed: true, optional: true, required: false
  private _paramLocation?: string; 
  public get paramLocation() {
    return this.getStringAttribute('param_location');
  }
  public set paramLocation(value: string) {
    this._paramLocation = value;
  }
  public resetParamLocation() {
    this._paramLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramLocationInput() {
    return this._paramLocation;
  }

  // param_name - computed: true, optional: true, required: false
  private _paramName?: string; 
  public get paramName() {
    return this.getStringAttribute('param_name');
  }
  public set paramName(value: string) {
    this._paramName = value;
  }
  public resetParamName() {
    this._paramName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramNameInput() {
    return this._paramName;
  }

  // param_value - computed: true, optional: true, required: false
  private _paramValue?: string; 
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
  public set paramValue(value: string) {
    this._paramValue = value;
  }
  public resetParamValue() {
    this._paramValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramValueInput() {
    return this._paramValue;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsAzure {
  /**
  * 'api-version' for Azure OpenAI instances. Default: "2023-05-15"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#api_version GatewayPluginAiProxyAdvanced#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Deployment ID for Azure OpenAI instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#deployment_id GatewayPluginAiProxyAdvanced#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Instance name for Azure OpenAI hosted models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#instance GatewayPluginAiProxyAdvanced#instance}
  */
  readonly instance?: string;
}

export function gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsAzureToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    deployment_id: cdktf.stringToTerraform(struct!.deploymentId),
    instance: cdktf.stringToTerraform(struct!.instance),
  }
}


export function gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsAzureToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_id: {
      value: cdktf.stringToHclTerraform(struct!.deploymentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._deploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentId = this._deploymentId;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._deploymentId = undefined;
      this._instance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._deploymentId = value.deploymentId;
      this._instance = value.instance;
    }
  }

  // api_version - computed: true, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // deployment_id - computed: true, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // instance - computed: true, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsBedrock {
  /**
  * If using AWS providers (Bedrock) you can assume a different role after authentication with the current IAM context is successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#aws_assume_role_arn GatewayPluginAiProxyAdvanced#aws_assume_role_arn}
  */
  readonly awsAssumeRoleArn?: string;
  /**
  * If using AWS providers (Bedrock) you can override the `AWS_REGION` environment variable by setting this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#aws_region GatewayPluginAiProxyAdvanced#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * If using AWS providers (Bedrock), set the identifier of the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#aws_role_session_name GatewayPluginAiProxyAdvanced#aws_role_session_name}
  */
  readonly awsRoleSessionName?: string;
  /**
  * If using AWS providers (Bedrock), override the STS endpoint URL when assuming a different role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#aws_sts_endpoint_url GatewayPluginAiProxyAdvanced#aws_sts_endpoint_url}
  */
  readonly awsStsEndpointUrl?: string;
  /**
  * If using AWS providers (Bedrock), set to true to normalize the embeddings. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#embeddings_normalize GatewayPluginAiProxyAdvanced#embeddings_normalize}
  */
  readonly embeddingsNormalize?: boolean | cdktf.IResolvable;
  /**
  * Force the client's performance configuration 'latency' for all requests. Leave empty to let the consumer select the performance configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#performance_config_latency GatewayPluginAiProxyAdvanced#performance_config_latency}
  */
  readonly performanceConfigLatency?: string;
}

export function gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsBedrockToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsBedrock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_assume_role_arn: cdktf.stringToTerraform(struct!.awsAssumeRoleArn),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    aws_role_session_name: cdktf.stringToTerraform(struct!.awsRoleSessionName),
    aws_sts_endpoint_url: cdktf.stringToTerraform(struct!.awsStsEndpointUrl),
    embeddings_normalize: cdktf.booleanToTerraform(struct!.embeddingsNormalize),
    performance_config_latency: cdktf.stringToTerraform(struct!.performanceConfigLatency),
  }
}


export function gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsBedrockToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsBedrock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_assume_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsAssumeRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_role_session_name: {
      value: cdktf.stringToHclTerraform(struct!.awsRoleSessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_sts_endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.awsStsEndpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embeddings_normalize: {
      value: cdktf.booleanToHclTerraform(struct!.embeddingsNormalize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    performance_config_latency: {
      value: cdktf.stringToHclTerraform(struct!.performanceConfigLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsBedrockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsBedrock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAssumeRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAssumeRoleArn = this._awsAssumeRoleArn;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._awsRoleSessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRoleSessionName = this._awsRoleSessionName;
    }
    if (this._awsStsEndpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsStsEndpointUrl = this._awsStsEndpointUrl;
    }
    if (this._embeddingsNormalize !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingsNormalize = this._embeddingsNormalize;
    }
    if (this._performanceConfigLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceConfigLatency = this._performanceConfigLatency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsBedrock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAssumeRoleArn = undefined;
      this._awsRegion = undefined;
      this._awsRoleSessionName = undefined;
      this._awsStsEndpointUrl = undefined;
      this._embeddingsNormalize = undefined;
      this._performanceConfigLatency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAssumeRoleArn = value.awsAssumeRoleArn;
      this._awsRegion = value.awsRegion;
      this._awsRoleSessionName = value.awsRoleSessionName;
      this._awsStsEndpointUrl = value.awsStsEndpointUrl;
      this._embeddingsNormalize = value.embeddingsNormalize;
      this._performanceConfigLatency = value.performanceConfigLatency;
    }
  }

  // aws_assume_role_arn - computed: true, optional: true, required: false
  private _awsAssumeRoleArn?: string; 
  public get awsAssumeRoleArn() {
    return this.getStringAttribute('aws_assume_role_arn');
  }
  public set awsAssumeRoleArn(value: string) {
    this._awsAssumeRoleArn = value;
  }
  public resetAwsAssumeRoleArn() {
    this._awsAssumeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAssumeRoleArnInput() {
    return this._awsAssumeRoleArn;
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_role_session_name - computed: true, optional: true, required: false
  private _awsRoleSessionName?: string; 
  public get awsRoleSessionName() {
    return this.getStringAttribute('aws_role_session_name');
  }
  public set awsRoleSessionName(value: string) {
    this._awsRoleSessionName = value;
  }
  public resetAwsRoleSessionName() {
    this._awsRoleSessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleSessionNameInput() {
    return this._awsRoleSessionName;
  }

  // aws_sts_endpoint_url - computed: true, optional: true, required: false
  private _awsStsEndpointUrl?: string; 
  public get awsStsEndpointUrl() {
    return this.getStringAttribute('aws_sts_endpoint_url');
  }
  public set awsStsEndpointUrl(value: string) {
    this._awsStsEndpointUrl = value;
  }
  public resetAwsStsEndpointUrl() {
    this._awsStsEndpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStsEndpointUrlInput() {
    return this._awsStsEndpointUrl;
  }

  // embeddings_normalize - computed: true, optional: true, required: false
  private _embeddingsNormalize?: boolean | cdktf.IResolvable; 
  public get embeddingsNormalize() {
    return this.getBooleanAttribute('embeddings_normalize');
  }
  public set embeddingsNormalize(value: boolean | cdktf.IResolvable) {
    this._embeddingsNormalize = value;
  }
  public resetEmbeddingsNormalize() {
    this._embeddingsNormalize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingsNormalizeInput() {
    return this._embeddingsNormalize;
  }

  // performance_config_latency - computed: true, optional: true, required: false
  private _performanceConfigLatency?: string; 
  public get performanceConfigLatency() {
    return this.getStringAttribute('performance_config_latency');
  }
  public set performanceConfigLatency(value: string) {
    this._performanceConfigLatency = value;
  }
  public resetPerformanceConfigLatency() {
    this._performanceConfigLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceConfigLatencyInput() {
    return this._performanceConfigLatency;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsGemini {
  /**
  * If running Gemini on Vertex, specify the regional API endpoint (hostname only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#api_endpoint GatewayPluginAiProxyAdvanced#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * If running Gemini on Vertex, specify the location ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#location_id GatewayPluginAiProxyAdvanced#location_id}
  */
  readonly locationId?: string;
  /**
  * If running Gemini on Vertex, specify the project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#project_id GatewayPluginAiProxyAdvanced#project_id}
  */
  readonly projectId?: string;
}

export function gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsGeminiToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsGemini | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint: cdktf.stringToTerraform(struct!.apiEndpoint),
    location_id: cdktf.stringToTerraform(struct!.locationId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsGeminiToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsGemini | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_id: {
      value: cdktf.stringToHclTerraform(struct!.locationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsGeminiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsGemini | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint;
    }
    if (this._locationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationId = this._locationId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsGemini | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiEndpoint = undefined;
      this._locationId = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiEndpoint = value.apiEndpoint;
      this._locationId = value.locationId;
      this._projectId = value.projectId;
    }
  }

  // api_endpoint - computed: true, optional: true, required: false
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }
  public set apiEndpoint(value: string) {
    this._apiEndpoint = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
  }

  // location_id - computed: true, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsHuggingface {
  /**
  * Use the cache layer on the inference API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#use_cache GatewayPluginAiProxyAdvanced#use_cache}
  */
  readonly useCache?: boolean | cdktf.IResolvable;
  /**
  * Wait for the model if it is not ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#wait_for_model GatewayPluginAiProxyAdvanced#wait_for_model}
  */
  readonly waitForModel?: boolean | cdktf.IResolvable;
}

export function gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsHuggingfaceToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsHuggingface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_cache: cdktf.booleanToTerraform(struct!.useCache),
    wait_for_model: cdktf.booleanToTerraform(struct!.waitForModel),
  }
}


export function gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsHuggingfaceToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsHuggingface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_cache: {
      value: cdktf.booleanToHclTerraform(struct!.useCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_for_model: {
      value: cdktf.booleanToHclTerraform(struct!.waitForModel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsHuggingfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsHuggingface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCache = this._useCache;
    }
    if (this._waitForModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForModel = this._waitForModel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsHuggingface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._useCache = undefined;
      this._waitForModel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._useCache = value.useCache;
      this._waitForModel = value.waitForModel;
    }
  }

  // use_cache - computed: true, optional: true, required: false
  private _useCache?: boolean | cdktf.IResolvable; 
  public get useCache() {
    return this.getBooleanAttribute('use_cache');
  }
  public set useCache(value: boolean | cdktf.IResolvable) {
    this._useCache = value;
  }
  public resetUseCache() {
    this._useCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCacheInput() {
    return this._useCache;
  }

  // wait_for_model - computed: true, optional: true, required: false
  private _waitForModel?: boolean | cdktf.IResolvable; 
  public get waitForModel() {
    return this.getBooleanAttribute('wait_for_model');
  }
  public set waitForModel(value: boolean | cdktf.IResolvable) {
    this._waitForModel = value;
  }
  public resetWaitForModel() {
    this._waitForModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForModelInput() {
    return this._waitForModel;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#azure GatewayPluginAiProxyAdvanced#azure}
  */
  readonly azure?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsAzure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#bedrock GatewayPluginAiProxyAdvanced#bedrock}
  */
  readonly bedrock?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsBedrock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#gemini GatewayPluginAiProxyAdvanced#gemini}
  */
  readonly gemini?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsGemini;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#huggingface GatewayPluginAiProxyAdvanced#huggingface}
  */
  readonly huggingface?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsHuggingface;
  /**
  * upstream url for the embeddings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#upstream_url GatewayPluginAiProxyAdvanced#upstream_url}
  */
  readonly upstreamUrl?: string;
}

export function gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure: gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsAzureToTerraform(struct!.azure),
    bedrock: gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsBedrockToTerraform(struct!.bedrock),
    gemini: gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsGeminiToTerraform(struct!.gemini),
    huggingface: gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsHuggingfaceToTerraform(struct!.huggingface),
    upstream_url: cdktf.stringToTerraform(struct!.upstreamUrl),
  }
}


export function gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure: {
      value: gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsAzure",
    },
    bedrock: {
      value: gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsBedrockToHclTerraform(struct!.bedrock),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsBedrock",
    },
    gemini: {
      value: gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsGeminiToHclTerraform(struct!.gemini),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsGemini",
    },
    huggingface: {
      value: gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsHuggingfaceToHclTerraform(struct!.huggingface),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsHuggingface",
    },
    upstream_url: {
      value: cdktf.stringToHclTerraform(struct!.upstreamUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._bedrock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrock = this._bedrock?.internalValue;
    }
    if (this._gemini?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gemini = this._gemini?.internalValue;
    }
    if (this._huggingface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.huggingface = this._huggingface?.internalValue;
    }
    if (this._upstreamUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamUrl = this._upstreamUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azure.internalValue = undefined;
      this._bedrock.internalValue = undefined;
      this._gemini.internalValue = undefined;
      this._huggingface.internalValue = undefined;
      this._upstreamUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azure.internalValue = value.azure;
      this._bedrock.internalValue = value.bedrock;
      this._gemini.internalValue = value.gemini;
      this._huggingface.internalValue = value.huggingface;
      this._upstreamUrl = value.upstreamUrl;
    }
  }

  // azure - computed: true, optional: true, required: false
  private _azure = new GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // bedrock - computed: true, optional: true, required: false
  private _bedrock = new GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsBedrockOutputReference(this, "bedrock");
  public get bedrock() {
    return this._bedrock;
  }
  public putBedrock(value: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsBedrock) {
    this._bedrock.internalValue = value;
  }
  public resetBedrock() {
    this._bedrock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockInput() {
    return this._bedrock.internalValue;
  }

  // gemini - computed: true, optional: true, required: false
  private _gemini = new GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsGeminiOutputReference(this, "gemini");
  public get gemini() {
    return this._gemini;
  }
  public putGemini(value: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsGemini) {
    this._gemini.internalValue = value;
  }
  public resetGemini() {
    this._gemini.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geminiInput() {
    return this._gemini.internalValue;
  }

  // huggingface - computed: true, optional: true, required: false
  private _huggingface = new GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsHuggingfaceOutputReference(this, "huggingface");
  public get huggingface() {
    return this._huggingface;
  }
  public putHuggingface(value: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsHuggingface) {
    this._huggingface.internalValue = value;
  }
  public resetHuggingface() {
    this._huggingface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get huggingfaceInput() {
    return this._huggingface.internalValue;
  }

  // upstream_url - computed: true, optional: true, required: false
  private _upstreamUrl?: string; 
  public get upstreamUrl() {
    return this.getStringAttribute('upstream_url');
  }
  public set upstreamUrl(value: string) {
    this._upstreamUrl = value;
  }
  public resetUpstreamUrl() {
    this._upstreamUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamUrlInput() {
    return this._upstreamUrl;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigEmbeddingsModel {
  /**
  * Model name to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#name GatewayPluginAiProxyAdvanced#name}
  */
  readonly name: string;
  /**
  * Key/value settings for the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#options GatewayPluginAiProxyAdvanced#options}
  */
  readonly options?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptions;
  /**
  * AI provider format to use for embeddings API. must be one of ["azure", "bedrock", "gemini", "huggingface", "mistral", "openai"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#provider GatewayPluginAiProxyAdvanced#provider}
  */
  readonly provider: string;
}

export function gatewayPluginAiProxyAdvancedConfigEmbeddingsModelToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    options: gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsToTerraform(struct!.options),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}


export function gatewayPluginAiProxyAdvancedConfigEmbeddingsModelToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddingsModel): any {
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
    options: {
      value: gatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptions",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigEmbeddingsModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigEmbeddingsModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._options.internalValue = undefined;
      this._provider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._options.internalValue = value.options;
      this._provider = value.provider;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // options - computed: true, optional: true, required: false
  private _options = new GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // provider - computed: true, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigEmbeddings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#auth GatewayPluginAiProxyAdvanced#auth}
  */
  readonly auth?: GatewayPluginAiProxyAdvancedConfigEmbeddingsAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#model GatewayPluginAiProxyAdvanced#model}
  */
  readonly model: GatewayPluginAiProxyAdvancedConfigEmbeddingsModel;
}

export function gatewayPluginAiProxyAdvancedConfigEmbeddingsToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: gatewayPluginAiProxyAdvancedConfigEmbeddingsAuthToTerraform(struct!.auth),
    model: gatewayPluginAiProxyAdvancedConfigEmbeddingsModelToTerraform(struct!.model),
  }
}


export function gatewayPluginAiProxyAdvancedConfigEmbeddingsToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigEmbeddings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: gatewayPluginAiProxyAdvancedConfigEmbeddingsAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigEmbeddingsAuth",
    },
    model: {
      value: gatewayPluginAiProxyAdvancedConfigEmbeddingsModelToHclTerraform(struct!.model),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigEmbeddingsModel",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigEmbeddingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigEmbeddings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._model?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigEmbeddings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._model.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._model.internalValue = value.model;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new GatewayPluginAiProxyAdvancedConfigEmbeddingsAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: GatewayPluginAiProxyAdvancedConfigEmbeddingsAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // model - computed: true, optional: false, required: true
  private _model = new GatewayPluginAiProxyAdvancedConfigEmbeddingsModelOutputReference(this, "model");
  public get model() {
    return this._model;
  }
  public putModel(value: GatewayPluginAiProxyAdvancedConfigEmbeddingsModel) {
    this._model.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigTargetsAuth {
  /**
  * If enabled, the authorization header or parameter can be overridden in the request by the value configured in the plugin. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#allow_override GatewayPluginAiProxyAdvanced#allow_override}
  */
  readonly allowOverride?: boolean | cdktf.IResolvable;
  /**
  * Set this if you are using an AWS provider (Bedrock) and you are authenticating using static IAM User credentials. Setting this will override the AWS_ACCESS_KEY_ID environment variable for this plugin instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#aws_access_key_id GatewayPluginAiProxyAdvanced#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Set this if you are using an AWS provider (Bedrock) and you are authenticating using static IAM User credentials. Setting this will override the AWS_SECRET_ACCESS_KEY environment variable for this plugin instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#aws_secret_access_key GatewayPluginAiProxyAdvanced#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#azure_client_id GatewayPluginAiProxyAdvanced#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#azure_client_secret GatewayPluginAiProxyAdvanced#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#azure_tenant_id GatewayPluginAiProxyAdvanced#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Set true to use the Azure Cloud Managed Identity (or user-assigned identity) to authenticate with Azure-provider models. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#azure_use_managed_identity GatewayPluginAiProxyAdvanced#azure_use_managed_identity}
  */
  readonly azureUseManagedIdentity?: boolean | cdktf.IResolvable;
  /**
  * Set this field to the full JSON of the GCP service account to authenticate, if required. If null (and gcp_use_service_account is true), Kong will attempt to read from environment variable `GCP_SERVICE_ACCOUNT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#gcp_service_account_json GatewayPluginAiProxyAdvanced#gcp_service_account_json}
  */
  readonly gcpServiceAccountJson?: string;
  /**
  * Use service account auth for GCP-based providers and models. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#gcp_use_service_account GatewayPluginAiProxyAdvanced#gcp_use_service_account}
  */
  readonly gcpUseServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * If AI model requires authentication via Authorization or API key header, specify its name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#header_name GatewayPluginAiProxyAdvanced#header_name}
  */
  readonly headerName?: string;
  /**
  * Specify the full auth header value for 'header_name', for example 'Bearer key' or just 'key'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#header_value GatewayPluginAiProxyAdvanced#header_value}
  */
  readonly headerValue?: string;
  /**
  * Specify whether the 'param_name' and 'param_value' options go in a query string, or the POST form/JSON body. must be one of ["body", "query"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#param_location GatewayPluginAiProxyAdvanced#param_location}
  */
  readonly paramLocation?: string;
  /**
  * If AI model requires authentication via query parameter, specify its name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#param_name GatewayPluginAiProxyAdvanced#param_name}
  */
  readonly paramName?: string;
  /**
  * Specify the full parameter value for 'param_name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#param_value GatewayPluginAiProxyAdvanced#param_value}
  */
  readonly paramValue?: string;
}

export function gatewayPluginAiProxyAdvancedConfigTargetsAuthToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_override: cdktf.booleanToTerraform(struct!.allowOverride),
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_secret_access_key: cdktf.stringToTerraform(struct!.awsSecretAccessKey),
    azure_client_id: cdktf.stringToTerraform(struct!.azureClientId),
    azure_client_secret: cdktf.stringToTerraform(struct!.azureClientSecret),
    azure_tenant_id: cdktf.stringToTerraform(struct!.azureTenantId),
    azure_use_managed_identity: cdktf.booleanToTerraform(struct!.azureUseManagedIdentity),
    gcp_service_account_json: cdktf.stringToTerraform(struct!.gcpServiceAccountJson),
    gcp_use_service_account: cdktf.booleanToTerraform(struct!.gcpUseServiceAccount),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    param_location: cdktf.stringToTerraform(struct!.paramLocation),
    param_name: cdktf.stringToTerraform(struct!.paramName),
    param_value: cdktf.stringToTerraform(struct!.paramValue),
  }
}


export function gatewayPluginAiProxyAdvancedConfigTargetsAuthToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_override: {
      value: cdktf.booleanToHclTerraform(struct!.allowOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_client_id: {
      value: cdktf.stringToHclTerraform(struct!.azureClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.azureClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.azureTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_use_managed_identity: {
      value: cdktf.booleanToHclTerraform(struct!.azureUseManagedIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gcp_service_account_json: {
      value: cdktf.stringToHclTerraform(struct!.gcpServiceAccountJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_use_service_account: {
      value: cdktf.booleanToHclTerraform(struct!.gcpUseServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_location: {
      value: cdktf.stringToHclTerraform(struct!.paramLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_name: {
      value: cdktf.stringToHclTerraform(struct!.paramName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_value: {
      value: cdktf.stringToHclTerraform(struct!.paramValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigTargetsAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigTargetsAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOverride = this._allowOverride;
    }
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKey = this._awsSecretAccessKey;
    }
    if (this._azureClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureClientId = this._azureClientId;
    }
    if (this._azureClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureClientSecret = this._azureClientSecret;
    }
    if (this._azureTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureTenantId = this._azureTenantId;
    }
    if (this._azureUseManagedIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureUseManagedIdentity = this._azureUseManagedIdentity;
    }
    if (this._gcpServiceAccountJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccountJson = this._gcpServiceAccountJson;
    }
    if (this._gcpUseServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpUseServiceAccount = this._gcpUseServiceAccount;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._paramLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramLocation = this._paramLocation;
    }
    if (this._paramName !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramName = this._paramName;
    }
    if (this._paramValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramValue = this._paramValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigTargetsAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowOverride = undefined;
      this._awsAccessKeyId = undefined;
      this._awsSecretAccessKey = undefined;
      this._azureClientId = undefined;
      this._azureClientSecret = undefined;
      this._azureTenantId = undefined;
      this._azureUseManagedIdentity = undefined;
      this._gcpServiceAccountJson = undefined;
      this._gcpUseServiceAccount = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._paramLocation = undefined;
      this._paramName = undefined;
      this._paramValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowOverride = value.allowOverride;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsSecretAccessKey = value.awsSecretAccessKey;
      this._azureClientId = value.azureClientId;
      this._azureClientSecret = value.azureClientSecret;
      this._azureTenantId = value.azureTenantId;
      this._azureUseManagedIdentity = value.azureUseManagedIdentity;
      this._gcpServiceAccountJson = value.gcpServiceAccountJson;
      this._gcpUseServiceAccount = value.gcpUseServiceAccount;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._paramLocation = value.paramLocation;
      this._paramName = value.paramName;
      this._paramValue = value.paramValue;
    }
  }

  // allow_override - computed: true, optional: true, required: false
  private _allowOverride?: boolean | cdktf.IResolvable; 
  public get allowOverride() {
    return this.getBooleanAttribute('allow_override');
  }
  public set allowOverride(value: boolean | cdktf.IResolvable) {
    this._allowOverride = value;
  }
  public resetAllowOverride() {
    this._allowOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverrideInput() {
    return this._allowOverride;
  }

  // aws_access_key_id - computed: true, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_secret_access_key - computed: true, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }

  // azure_client_id - computed: true, optional: true, required: false
  private _azureClientId?: string; 
  public get azureClientId() {
    return this.getStringAttribute('azure_client_id');
  }
  public set azureClientId(value: string) {
    this._azureClientId = value;
  }
  public resetAzureClientId() {
    this._azureClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientIdInput() {
    return this._azureClientId;
  }

  // azure_client_secret - computed: true, optional: true, required: false
  private _azureClientSecret?: string; 
  public get azureClientSecret() {
    return this.getStringAttribute('azure_client_secret');
  }
  public set azureClientSecret(value: string) {
    this._azureClientSecret = value;
  }
  public resetAzureClientSecret() {
    this._azureClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientSecretInput() {
    return this._azureClientSecret;
  }

  // azure_tenant_id - computed: true, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // azure_use_managed_identity - computed: true, optional: true, required: false
  private _azureUseManagedIdentity?: boolean | cdktf.IResolvable; 
  public get azureUseManagedIdentity() {
    return this.getBooleanAttribute('azure_use_managed_identity');
  }
  public set azureUseManagedIdentity(value: boolean | cdktf.IResolvable) {
    this._azureUseManagedIdentity = value;
  }
  public resetAzureUseManagedIdentity() {
    this._azureUseManagedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureUseManagedIdentityInput() {
    return this._azureUseManagedIdentity;
  }

  // gcp_service_account_json - computed: true, optional: true, required: false
  private _gcpServiceAccountJson?: string; 
  public get gcpServiceAccountJson() {
    return this.getStringAttribute('gcp_service_account_json');
  }
  public set gcpServiceAccountJson(value: string) {
    this._gcpServiceAccountJson = value;
  }
  public resetGcpServiceAccountJson() {
    this._gcpServiceAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountJsonInput() {
    return this._gcpServiceAccountJson;
  }

  // gcp_use_service_account - computed: true, optional: true, required: false
  private _gcpUseServiceAccount?: boolean | cdktf.IResolvable; 
  public get gcpUseServiceAccount() {
    return this.getBooleanAttribute('gcp_use_service_account');
  }
  public set gcpUseServiceAccount(value: boolean | cdktf.IResolvable) {
    this._gcpUseServiceAccount = value;
  }
  public resetGcpUseServiceAccount() {
    this._gcpUseServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpUseServiceAccountInput() {
    return this._gcpUseServiceAccount;
  }

  // header_name - computed: true, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: true, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // param_location - computed: true, optional: true, required: false
  private _paramLocation?: string; 
  public get paramLocation() {
    return this.getStringAttribute('param_location');
  }
  public set paramLocation(value: string) {
    this._paramLocation = value;
  }
  public resetParamLocation() {
    this._paramLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramLocationInput() {
    return this._paramLocation;
  }

  // param_name - computed: true, optional: true, required: false
  private _paramName?: string; 
  public get paramName() {
    return this.getStringAttribute('param_name');
  }
  public set paramName(value: string) {
    this._paramName = value;
  }
  public resetParamName() {
    this._paramName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramNameInput() {
    return this._paramName;
  }

  // param_value - computed: true, optional: true, required: false
  private _paramValue?: string; 
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
  public set paramValue(value: string) {
    this._paramValue = value;
  }
  public resetParamValue() {
    this._paramValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramValueInput() {
    return this._paramValue;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigTargetsLogging {
  /**
  * If enabled, will log the request and response body into the Kong log plugin(s) output. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#log_payloads GatewayPluginAiProxyAdvanced#log_payloads}
  */
  readonly logPayloads?: boolean | cdktf.IResolvable;
  /**
  * If enabled and supported by the driver, will add model usage and token metrics into the Kong log plugin(s) output. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#log_statistics GatewayPluginAiProxyAdvanced#log_statistics}
  */
  readonly logStatistics?: boolean | cdktf.IResolvable;
}

export function gatewayPluginAiProxyAdvancedConfigTargetsLoggingToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_payloads: cdktf.booleanToTerraform(struct!.logPayloads),
    log_statistics: cdktf.booleanToTerraform(struct!.logStatistics),
  }
}


export function gatewayPluginAiProxyAdvancedConfigTargetsLoggingToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_payloads: {
      value: cdktf.booleanToHclTerraform(struct!.logPayloads),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_statistics: {
      value: cdktf.booleanToHclTerraform(struct!.logStatistics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigTargetsLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigTargetsLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logPayloads !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPayloads = this._logPayloads;
    }
    if (this._logStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStatistics = this._logStatistics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigTargetsLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logPayloads = undefined;
      this._logStatistics = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logPayloads = value.logPayloads;
      this._logStatistics = value.logStatistics;
    }
  }

  // log_payloads - computed: true, optional: true, required: false
  private _logPayloads?: boolean | cdktf.IResolvable; 
  public get logPayloads() {
    return this.getBooleanAttribute('log_payloads');
  }
  public set logPayloads(value: boolean | cdktf.IResolvable) {
    this._logPayloads = value;
  }
  public resetLogPayloads() {
    this._logPayloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPayloadsInput() {
    return this._logPayloads;
  }

  // log_statistics - computed: true, optional: true, required: false
  private _logStatistics?: boolean | cdktf.IResolvable; 
  public get logStatistics() {
    return this.getBooleanAttribute('log_statistics');
  }
  public set logStatistics(value: boolean | cdktf.IResolvable) {
    this._logStatistics = value;
  }
  public resetLogStatistics() {
    this._logStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStatisticsInput() {
    return this._logStatistics;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsBedrock {
  /**
  * If using AWS providers (Bedrock) you can assume a different role after authentication with the current IAM context is successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#aws_assume_role_arn GatewayPluginAiProxyAdvanced#aws_assume_role_arn}
  */
  readonly awsAssumeRoleArn?: string;
  /**
  * If using AWS providers (Bedrock) you can override the `AWS_REGION` environment variable by setting this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#aws_region GatewayPluginAiProxyAdvanced#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * If using AWS providers (Bedrock), set the identifier of the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#aws_role_session_name GatewayPluginAiProxyAdvanced#aws_role_session_name}
  */
  readonly awsRoleSessionName?: string;
  /**
  * If using AWS providers (Bedrock), override the STS endpoint URL when assuming a different role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#aws_sts_endpoint_url GatewayPluginAiProxyAdvanced#aws_sts_endpoint_url}
  */
  readonly awsStsEndpointUrl?: string;
  /**
  * If using AWS providers (Bedrock), set to true to normalize the embeddings. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#embeddings_normalize GatewayPluginAiProxyAdvanced#embeddings_normalize}
  */
  readonly embeddingsNormalize?: boolean | cdktf.IResolvable;
  /**
  * Force the client's performance configuration 'latency' for all requests. Leave empty to let the consumer select the performance configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#performance_config_latency GatewayPluginAiProxyAdvanced#performance_config_latency}
  */
  readonly performanceConfigLatency?: string;
}

export function gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsBedrockToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsBedrock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_assume_role_arn: cdktf.stringToTerraform(struct!.awsAssumeRoleArn),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    aws_role_session_name: cdktf.stringToTerraform(struct!.awsRoleSessionName),
    aws_sts_endpoint_url: cdktf.stringToTerraform(struct!.awsStsEndpointUrl),
    embeddings_normalize: cdktf.booleanToTerraform(struct!.embeddingsNormalize),
    performance_config_latency: cdktf.stringToTerraform(struct!.performanceConfigLatency),
  }
}


export function gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsBedrockToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsBedrock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_assume_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsAssumeRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_role_session_name: {
      value: cdktf.stringToHclTerraform(struct!.awsRoleSessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_sts_endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.awsStsEndpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embeddings_normalize: {
      value: cdktf.booleanToHclTerraform(struct!.embeddingsNormalize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    performance_config_latency: {
      value: cdktf.stringToHclTerraform(struct!.performanceConfigLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsBedrockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsBedrock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAssumeRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAssumeRoleArn = this._awsAssumeRoleArn;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._awsRoleSessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRoleSessionName = this._awsRoleSessionName;
    }
    if (this._awsStsEndpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsStsEndpointUrl = this._awsStsEndpointUrl;
    }
    if (this._embeddingsNormalize !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingsNormalize = this._embeddingsNormalize;
    }
    if (this._performanceConfigLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceConfigLatency = this._performanceConfigLatency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsBedrock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAssumeRoleArn = undefined;
      this._awsRegion = undefined;
      this._awsRoleSessionName = undefined;
      this._awsStsEndpointUrl = undefined;
      this._embeddingsNormalize = undefined;
      this._performanceConfigLatency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAssumeRoleArn = value.awsAssumeRoleArn;
      this._awsRegion = value.awsRegion;
      this._awsRoleSessionName = value.awsRoleSessionName;
      this._awsStsEndpointUrl = value.awsStsEndpointUrl;
      this._embeddingsNormalize = value.embeddingsNormalize;
      this._performanceConfigLatency = value.performanceConfigLatency;
    }
  }

  // aws_assume_role_arn - computed: true, optional: true, required: false
  private _awsAssumeRoleArn?: string; 
  public get awsAssumeRoleArn() {
    return this.getStringAttribute('aws_assume_role_arn');
  }
  public set awsAssumeRoleArn(value: string) {
    this._awsAssumeRoleArn = value;
  }
  public resetAwsAssumeRoleArn() {
    this._awsAssumeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAssumeRoleArnInput() {
    return this._awsAssumeRoleArn;
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_role_session_name - computed: true, optional: true, required: false
  private _awsRoleSessionName?: string; 
  public get awsRoleSessionName() {
    return this.getStringAttribute('aws_role_session_name');
  }
  public set awsRoleSessionName(value: string) {
    this._awsRoleSessionName = value;
  }
  public resetAwsRoleSessionName() {
    this._awsRoleSessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleSessionNameInput() {
    return this._awsRoleSessionName;
  }

  // aws_sts_endpoint_url - computed: true, optional: true, required: false
  private _awsStsEndpointUrl?: string; 
  public get awsStsEndpointUrl() {
    return this.getStringAttribute('aws_sts_endpoint_url');
  }
  public set awsStsEndpointUrl(value: string) {
    this._awsStsEndpointUrl = value;
  }
  public resetAwsStsEndpointUrl() {
    this._awsStsEndpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStsEndpointUrlInput() {
    return this._awsStsEndpointUrl;
  }

  // embeddings_normalize - computed: true, optional: true, required: false
  private _embeddingsNormalize?: boolean | cdktf.IResolvable; 
  public get embeddingsNormalize() {
    return this.getBooleanAttribute('embeddings_normalize');
  }
  public set embeddingsNormalize(value: boolean | cdktf.IResolvable) {
    this._embeddingsNormalize = value;
  }
  public resetEmbeddingsNormalize() {
    this._embeddingsNormalize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingsNormalizeInput() {
    return this._embeddingsNormalize;
  }

  // performance_config_latency - computed: true, optional: true, required: false
  private _performanceConfigLatency?: string; 
  public get performanceConfigLatency() {
    return this.getStringAttribute('performance_config_latency');
  }
  public set performanceConfigLatency(value: string) {
    this._performanceConfigLatency = value;
  }
  public resetPerformanceConfigLatency() {
    this._performanceConfigLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceConfigLatencyInput() {
    return this._performanceConfigLatency;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsCohere {
  /**
  * The purpose of the input text to calculate embedding vectors. Default: "classification"; must be one of ["classification", "clustering", "image", "search_document", "search_query"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#embedding_input_type GatewayPluginAiProxyAdvanced#embedding_input_type}
  */
  readonly embeddingInputType?: string;
  /**
  * Wait for the model if it is not ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#wait_for_model GatewayPluginAiProxyAdvanced#wait_for_model}
  */
  readonly waitForModel?: boolean | cdktf.IResolvable;
}

export function gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsCohereToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsCohere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_input_type: cdktf.stringToTerraform(struct!.embeddingInputType),
    wait_for_model: cdktf.booleanToTerraform(struct!.waitForModel),
  }
}


export function gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsCohereToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsCohere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding_input_type: {
      value: cdktf.stringToHclTerraform(struct!.embeddingInputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_for_model: {
      value: cdktf.booleanToHclTerraform(struct!.waitForModel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsCohereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsCohere | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingInputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingInputType = this._embeddingInputType;
    }
    if (this._waitForModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForModel = this._waitForModel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsCohere | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingInputType = undefined;
      this._waitForModel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingInputType = value.embeddingInputType;
      this._waitForModel = value.waitForModel;
    }
  }

  // embedding_input_type - computed: true, optional: true, required: false
  private _embeddingInputType?: string; 
  public get embeddingInputType() {
    return this.getStringAttribute('embedding_input_type');
  }
  public set embeddingInputType(value: string) {
    this._embeddingInputType = value;
  }
  public resetEmbeddingInputType() {
    this._embeddingInputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingInputTypeInput() {
    return this._embeddingInputType;
  }

  // wait_for_model - computed: true, optional: true, required: false
  private _waitForModel?: boolean | cdktf.IResolvable; 
  public get waitForModel() {
    return this.getBooleanAttribute('wait_for_model');
  }
  public set waitForModel(value: boolean | cdktf.IResolvable) {
    this._waitForModel = value;
  }
  public resetWaitForModel() {
    this._waitForModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForModelInput() {
    return this._waitForModel;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsGemini {
  /**
  * If running Gemini on Vertex, specify the regional API endpoint (hostname only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#api_endpoint GatewayPluginAiProxyAdvanced#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * If running Gemini on Vertex Model Garden, specify the endpoint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#endpoint_id GatewayPluginAiProxyAdvanced#endpoint_id}
  */
  readonly endpointId?: string;
  /**
  * If running Gemini on Vertex, specify the location ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#location_id GatewayPluginAiProxyAdvanced#location_id}
  */
  readonly locationId?: string;
  /**
  * If running Gemini on Vertex, specify the project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#project_id GatewayPluginAiProxyAdvanced#project_id}
  */
  readonly projectId?: string;
}

export function gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsGeminiToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsGemini | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint: cdktf.stringToTerraform(struct!.apiEndpoint),
    endpoint_id: cdktf.stringToTerraform(struct!.endpointId),
    location_id: cdktf.stringToTerraform(struct!.locationId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsGeminiToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsGemini | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.endpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_id: {
      value: cdktf.stringToHclTerraform(struct!.locationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsGeminiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsGemini | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint;
    }
    if (this._endpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointId = this._endpointId;
    }
    if (this._locationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationId = this._locationId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsGemini | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiEndpoint = undefined;
      this._endpointId = undefined;
      this._locationId = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiEndpoint = value.apiEndpoint;
      this._endpointId = value.endpointId;
      this._locationId = value.locationId;
      this._projectId = value.projectId;
    }
  }

  // api_endpoint - computed: true, optional: true, required: false
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }
  public set apiEndpoint(value: string) {
    this._apiEndpoint = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
  }

  // endpoint_id - computed: true, optional: true, required: false
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  public resetEndpointId() {
    this._endpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }

  // location_id - computed: true, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsHuggingface {
  /**
  * Use the cache layer on the inference API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#use_cache GatewayPluginAiProxyAdvanced#use_cache}
  */
  readonly useCache?: boolean | cdktf.IResolvable;
  /**
  * Wait for the model if it is not ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#wait_for_model GatewayPluginAiProxyAdvanced#wait_for_model}
  */
  readonly waitForModel?: boolean | cdktf.IResolvable;
}

export function gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsHuggingfaceToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsHuggingface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_cache: cdktf.booleanToTerraform(struct!.useCache),
    wait_for_model: cdktf.booleanToTerraform(struct!.waitForModel),
  }
}


export function gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsHuggingfaceToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsHuggingface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_cache: {
      value: cdktf.booleanToHclTerraform(struct!.useCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_for_model: {
      value: cdktf.booleanToHclTerraform(struct!.waitForModel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsHuggingfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsHuggingface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCache = this._useCache;
    }
    if (this._waitForModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForModel = this._waitForModel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsHuggingface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._useCache = undefined;
      this._waitForModel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._useCache = value.useCache;
      this._waitForModel = value.waitForModel;
    }
  }

  // use_cache - computed: true, optional: true, required: false
  private _useCache?: boolean | cdktf.IResolvable; 
  public get useCache() {
    return this.getBooleanAttribute('use_cache');
  }
  public set useCache(value: boolean | cdktf.IResolvable) {
    this._useCache = value;
  }
  public resetUseCache() {
    this._useCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCacheInput() {
    return this._useCache;
  }

  // wait_for_model - computed: true, optional: true, required: false
  private _waitForModel?: boolean | cdktf.IResolvable; 
  public get waitForModel() {
    return this.getBooleanAttribute('wait_for_model');
  }
  public set waitForModel(value: boolean | cdktf.IResolvable) {
    this._waitForModel = value;
  }
  public resetWaitForModel() {
    this._waitForModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForModelInput() {
    return this._waitForModel;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigTargetsModelOptions {
  /**
  * Defines the schema/API version, if using Anthropic provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#anthropic_version GatewayPluginAiProxyAdvanced#anthropic_version}
  */
  readonly anthropicVersion?: string;
  /**
  * 'api-version' for Azure OpenAI instances. Default: "2023-05-15"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#azure_api_version GatewayPluginAiProxyAdvanced#azure_api_version}
  */
  readonly azureApiVersion?: string;
  /**
  * Deployment ID for Azure OpenAI instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#azure_deployment_id GatewayPluginAiProxyAdvanced#azure_deployment_id}
  */
  readonly azureDeploymentId?: string;
  /**
  * Instance name for Azure OpenAI hosted models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#azure_instance GatewayPluginAiProxyAdvanced#azure_instance}
  */
  readonly azureInstance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#bedrock GatewayPluginAiProxyAdvanced#bedrock}
  */
  readonly bedrock?: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsBedrock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#cohere GatewayPluginAiProxyAdvanced#cohere}
  */
  readonly cohere?: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsCohere;
  /**
  * If using embeddings models, set the number of dimensions to generate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#embeddings_dimensions GatewayPluginAiProxyAdvanced#embeddings_dimensions}
  */
  readonly embeddingsDimensions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#gemini GatewayPluginAiProxyAdvanced#gemini}
  */
  readonly gemini?: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsGemini;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#huggingface GatewayPluginAiProxyAdvanced#huggingface}
  */
  readonly huggingface?: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsHuggingface;
  /**
  * Defines the cost per 1M tokens in your prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#input_cost GatewayPluginAiProxyAdvanced#input_cost}
  */
  readonly inputCost?: number;
  /**
  * If using llama2 provider, select the upstream message format. must be one of ["ollama", "openai", "raw"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#llama2_format GatewayPluginAiProxyAdvanced#llama2_format}
  */
  readonly llama2Format?: string;
  /**
  * Defines the max_tokens, if using chat or completion models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#max_tokens GatewayPluginAiProxyAdvanced#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * If using mistral provider, select the upstream message format. must be one of ["ollama", "openai"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#mistral_format GatewayPluginAiProxyAdvanced#mistral_format}
  */
  readonly mistralFormat?: string;
  /**
  * Defines the cost per 1M tokens in the output of the AI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#output_cost GatewayPluginAiProxyAdvanced#output_cost}
  */
  readonly outputCost?: number;
  /**
  * Defines the matching temperature, if using chat or completion models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#temperature GatewayPluginAiProxyAdvanced#temperature}
  */
  readonly temperature?: number;
  /**
  * Defines the top-k most likely tokens, if supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#top_k GatewayPluginAiProxyAdvanced#top_k}
  */
  readonly topK?: number;
  /**
  * Defines the top-p probability mass, if supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#top_p GatewayPluginAiProxyAdvanced#top_p}
  */
  readonly topP?: number;
  /**
  * Manually specify or override the AI operation path, used when e.g. using the 'preserve' route_type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#upstream_path GatewayPluginAiProxyAdvanced#upstream_path}
  */
  readonly upstreamPath?: string;
  /**
  * Manually specify or override the full URL to the AI operation endpoints, when calling (self-)hosted models, or for running via a private endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#upstream_url GatewayPluginAiProxyAdvanced#upstream_url}
  */
  readonly upstreamUrl?: string;
}

export function gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsModelOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anthropic_version: cdktf.stringToTerraform(struct!.anthropicVersion),
    azure_api_version: cdktf.stringToTerraform(struct!.azureApiVersion),
    azure_deployment_id: cdktf.stringToTerraform(struct!.azureDeploymentId),
    azure_instance: cdktf.stringToTerraform(struct!.azureInstance),
    bedrock: gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsBedrockToTerraform(struct!.bedrock),
    cohere: gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsCohereToTerraform(struct!.cohere),
    embeddings_dimensions: cdktf.numberToTerraform(struct!.embeddingsDimensions),
    gemini: gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsGeminiToTerraform(struct!.gemini),
    huggingface: gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsHuggingfaceToTerraform(struct!.huggingface),
    input_cost: cdktf.numberToTerraform(struct!.inputCost),
    llama2_format: cdktf.stringToTerraform(struct!.llama2Format),
    max_tokens: cdktf.numberToTerraform(struct!.maxTokens),
    mistral_format: cdktf.stringToTerraform(struct!.mistralFormat),
    output_cost: cdktf.numberToTerraform(struct!.outputCost),
    temperature: cdktf.numberToTerraform(struct!.temperature),
    top_k: cdktf.numberToTerraform(struct!.topK),
    top_p: cdktf.numberToTerraform(struct!.topP),
    upstream_path: cdktf.stringToTerraform(struct!.upstreamPath),
    upstream_url: cdktf.stringToTerraform(struct!.upstreamUrl),
  }
}


export function gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsModelOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anthropic_version: {
      value: cdktf.stringToHclTerraform(struct!.anthropicVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_api_version: {
      value: cdktf.stringToHclTerraform(struct!.azureApiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_deployment_id: {
      value: cdktf.stringToHclTerraform(struct!.azureDeploymentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_instance: {
      value: cdktf.stringToHclTerraform(struct!.azureInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bedrock: {
      value: gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsBedrockToHclTerraform(struct!.bedrock),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsBedrock",
    },
    cohere: {
      value: gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsCohereToHclTerraform(struct!.cohere),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsCohere",
    },
    embeddings_dimensions: {
      value: cdktf.numberToHclTerraform(struct!.embeddingsDimensions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gemini: {
      value: gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsGeminiToHclTerraform(struct!.gemini),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsGemini",
    },
    huggingface: {
      value: gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsHuggingfaceToHclTerraform(struct!.huggingface),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsHuggingface",
    },
    input_cost: {
      value: cdktf.numberToHclTerraform(struct!.inputCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    llama2_format: {
      value: cdktf.stringToHclTerraform(struct!.llama2Format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_tokens: {
      value: cdktf.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mistral_format: {
      value: cdktf.stringToHclTerraform(struct!.mistralFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_cost: {
      value: cdktf.numberToHclTerraform(struct!.outputCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    temperature: {
      value: cdktf.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_k: {
      value: cdktf.numberToHclTerraform(struct!.topK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_p: {
      value: cdktf.numberToHclTerraform(struct!.topP),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upstream_path: {
      value: cdktf.stringToHclTerraform(struct!.upstreamPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_url: {
      value: cdktf.stringToHclTerraform(struct!.upstreamUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigTargetsModelOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anthropicVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.anthropicVersion = this._anthropicVersion;
    }
    if (this._azureApiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureApiVersion = this._azureApiVersion;
    }
    if (this._azureDeploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDeploymentId = this._azureDeploymentId;
    }
    if (this._azureInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureInstance = this._azureInstance;
    }
    if (this._bedrock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrock = this._bedrock?.internalValue;
    }
    if (this._cohere?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cohere = this._cohere?.internalValue;
    }
    if (this._embeddingsDimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingsDimensions = this._embeddingsDimensions;
    }
    if (this._gemini?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gemini = this._gemini?.internalValue;
    }
    if (this._huggingface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.huggingface = this._huggingface?.internalValue;
    }
    if (this._inputCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputCost = this._inputCost;
    }
    if (this._llama2Format !== undefined) {
      hasAnyValues = true;
      internalValueResult.llama2Format = this._llama2Format;
    }
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    if (this._mistralFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.mistralFormat = this._mistralFormat;
    }
    if (this._outputCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputCost = this._outputCost;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    if (this._topK !== undefined) {
      hasAnyValues = true;
      internalValueResult.topK = this._topK;
    }
    if (this._topP !== undefined) {
      hasAnyValues = true;
      internalValueResult.topP = this._topP;
    }
    if (this._upstreamPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamPath = this._upstreamPath;
    }
    if (this._upstreamUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamUrl = this._upstreamUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigTargetsModelOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anthropicVersion = undefined;
      this._azureApiVersion = undefined;
      this._azureDeploymentId = undefined;
      this._azureInstance = undefined;
      this._bedrock.internalValue = undefined;
      this._cohere.internalValue = undefined;
      this._embeddingsDimensions = undefined;
      this._gemini.internalValue = undefined;
      this._huggingface.internalValue = undefined;
      this._inputCost = undefined;
      this._llama2Format = undefined;
      this._maxTokens = undefined;
      this._mistralFormat = undefined;
      this._outputCost = undefined;
      this._temperature = undefined;
      this._topK = undefined;
      this._topP = undefined;
      this._upstreamPath = undefined;
      this._upstreamUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anthropicVersion = value.anthropicVersion;
      this._azureApiVersion = value.azureApiVersion;
      this._azureDeploymentId = value.azureDeploymentId;
      this._azureInstance = value.azureInstance;
      this._bedrock.internalValue = value.bedrock;
      this._cohere.internalValue = value.cohere;
      this._embeddingsDimensions = value.embeddingsDimensions;
      this._gemini.internalValue = value.gemini;
      this._huggingface.internalValue = value.huggingface;
      this._inputCost = value.inputCost;
      this._llama2Format = value.llama2Format;
      this._maxTokens = value.maxTokens;
      this._mistralFormat = value.mistralFormat;
      this._outputCost = value.outputCost;
      this._temperature = value.temperature;
      this._topK = value.topK;
      this._topP = value.topP;
      this._upstreamPath = value.upstreamPath;
      this._upstreamUrl = value.upstreamUrl;
    }
  }

  // anthropic_version - computed: true, optional: true, required: false
  private _anthropicVersion?: string; 
  public get anthropicVersion() {
    return this.getStringAttribute('anthropic_version');
  }
  public set anthropicVersion(value: string) {
    this._anthropicVersion = value;
  }
  public resetAnthropicVersion() {
    this._anthropicVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicVersionInput() {
    return this._anthropicVersion;
  }

  // azure_api_version - computed: true, optional: true, required: false
  private _azureApiVersion?: string; 
  public get azureApiVersion() {
    return this.getStringAttribute('azure_api_version');
  }
  public set azureApiVersion(value: string) {
    this._azureApiVersion = value;
  }
  public resetAzureApiVersion() {
    this._azureApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureApiVersionInput() {
    return this._azureApiVersion;
  }

  // azure_deployment_id - computed: true, optional: true, required: false
  private _azureDeploymentId?: string; 
  public get azureDeploymentId() {
    return this.getStringAttribute('azure_deployment_id');
  }
  public set azureDeploymentId(value: string) {
    this._azureDeploymentId = value;
  }
  public resetAzureDeploymentId() {
    this._azureDeploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDeploymentIdInput() {
    return this._azureDeploymentId;
  }

  // azure_instance - computed: true, optional: true, required: false
  private _azureInstance?: string; 
  public get azureInstance() {
    return this.getStringAttribute('azure_instance');
  }
  public set azureInstance(value: string) {
    this._azureInstance = value;
  }
  public resetAzureInstance() {
    this._azureInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInstanceInput() {
    return this._azureInstance;
  }

  // bedrock - computed: true, optional: true, required: false
  private _bedrock = new GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsBedrockOutputReference(this, "bedrock");
  public get bedrock() {
    return this._bedrock;
  }
  public putBedrock(value: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsBedrock) {
    this._bedrock.internalValue = value;
  }
  public resetBedrock() {
    this._bedrock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockInput() {
    return this._bedrock.internalValue;
  }

  // cohere - computed: true, optional: true, required: false
  private _cohere = new GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsCohereOutputReference(this, "cohere");
  public get cohere() {
    return this._cohere;
  }
  public putCohere(value: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsCohere) {
    this._cohere.internalValue = value;
  }
  public resetCohere() {
    this._cohere.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cohereInput() {
    return this._cohere.internalValue;
  }

  // embeddings_dimensions - computed: true, optional: true, required: false
  private _embeddingsDimensions?: number; 
  public get embeddingsDimensions() {
    return this.getNumberAttribute('embeddings_dimensions');
  }
  public set embeddingsDimensions(value: number) {
    this._embeddingsDimensions = value;
  }
  public resetEmbeddingsDimensions() {
    this._embeddingsDimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingsDimensionsInput() {
    return this._embeddingsDimensions;
  }

  // gemini - computed: true, optional: true, required: false
  private _gemini = new GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsGeminiOutputReference(this, "gemini");
  public get gemini() {
    return this._gemini;
  }
  public putGemini(value: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsGemini) {
    this._gemini.internalValue = value;
  }
  public resetGemini() {
    this._gemini.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geminiInput() {
    return this._gemini.internalValue;
  }

  // huggingface - computed: true, optional: true, required: false
  private _huggingface = new GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsHuggingfaceOutputReference(this, "huggingface");
  public get huggingface() {
    return this._huggingface;
  }
  public putHuggingface(value: GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsHuggingface) {
    this._huggingface.internalValue = value;
  }
  public resetHuggingface() {
    this._huggingface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get huggingfaceInput() {
    return this._huggingface.internalValue;
  }

  // input_cost - computed: true, optional: true, required: false
  private _inputCost?: number; 
  public get inputCost() {
    return this.getNumberAttribute('input_cost');
  }
  public set inputCost(value: number) {
    this._inputCost = value;
  }
  public resetInputCost() {
    this._inputCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputCostInput() {
    return this._inputCost;
  }

  // llama2_format - computed: true, optional: true, required: false
  private _llama2Format?: string; 
  public get llama2Format() {
    return this.getStringAttribute('llama2_format');
  }
  public set llama2Format(value: string) {
    this._llama2Format = value;
  }
  public resetLlama2Format() {
    this._llama2Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llama2FormatInput() {
    return this._llama2Format;
  }

  // max_tokens - computed: true, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // mistral_format - computed: true, optional: true, required: false
  private _mistralFormat?: string; 
  public get mistralFormat() {
    return this.getStringAttribute('mistral_format');
  }
  public set mistralFormat(value: string) {
    this._mistralFormat = value;
  }
  public resetMistralFormat() {
    this._mistralFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mistralFormatInput() {
    return this._mistralFormat;
  }

  // output_cost - computed: true, optional: true, required: false
  private _outputCost?: number; 
  public get outputCost() {
    return this.getNumberAttribute('output_cost');
  }
  public set outputCost(value: number) {
    this._outputCost = value;
  }
  public resetOutputCost() {
    this._outputCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputCostInput() {
    return this._outputCost;
  }

  // temperature - computed: true, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }

  // top_k - computed: true, optional: true, required: false
  private _topK?: number; 
  public get topK() {
    return this.getNumberAttribute('top_k');
  }
  public set topK(value: number) {
    this._topK = value;
  }
  public resetTopK() {
    this._topK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKInput() {
    return this._topK;
  }

  // top_p - computed: true, optional: true, required: false
  private _topP?: number; 
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
  public set topP(value: number) {
    this._topP = value;
  }
  public resetTopP() {
    this._topP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topPInput() {
    return this._topP;
  }

  // upstream_path - computed: true, optional: true, required: false
  private _upstreamPath?: string; 
  public get upstreamPath() {
    return this.getStringAttribute('upstream_path');
  }
  public set upstreamPath(value: string) {
    this._upstreamPath = value;
  }
  public resetUpstreamPath() {
    this._upstreamPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamPathInput() {
    return this._upstreamPath;
  }

  // upstream_url - computed: true, optional: true, required: false
  private _upstreamUrl?: string; 
  public get upstreamUrl() {
    return this.getStringAttribute('upstream_url');
  }
  public set upstreamUrl(value: string) {
    this._upstreamUrl = value;
  }
  public resetUpstreamUrl() {
    this._upstreamUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamUrlInput() {
    return this._upstreamUrl;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigTargetsModel {
  /**
  * Model name to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#name GatewayPluginAiProxyAdvanced#name}
  */
  readonly name?: string;
  /**
  * Key/value settings for the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#options GatewayPluginAiProxyAdvanced#options}
  */
  readonly options?: GatewayPluginAiProxyAdvancedConfigTargetsModelOptions;
  /**
  * AI provider request format - Kong translates requests to and from the specified backend compatible formats. Not Null; must be one of ["anthropic", "azure", "bedrock", "cohere", "gemini", "huggingface", "llama2", "mistral", "openai"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#provider GatewayPluginAiProxyAdvanced#provider}
  */
  readonly provider?: string;
}

export function gatewayPluginAiProxyAdvancedConfigTargetsModelToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    options: gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsToTerraform(struct!.options),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}


export function gatewayPluginAiProxyAdvancedConfigTargetsModelToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargetsModel | cdktf.IResolvable): any {
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
    options: {
      value: gatewayPluginAiProxyAdvancedConfigTargetsModelOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigTargetsModelOptions",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigTargetsModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigTargetsModel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigTargetsModel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._options.internalValue = undefined;
      this._provider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._options.internalValue = value.options;
      this._provider = value.provider;
    }
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

  // options - computed: true, optional: true, required: false
  private _options = new GatewayPluginAiProxyAdvancedConfigTargetsModelOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: GatewayPluginAiProxyAdvancedConfigTargetsModelOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#auth GatewayPluginAiProxyAdvanced#auth}
  */
  readonly auth?: GatewayPluginAiProxyAdvancedConfigTargetsAuth;
  /**
  * The semantic description of the target, required if using semantic load balancing. Specially, setting this to 'CATCHALL' will indicate such target to be used when no other targets match the semantic threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#description GatewayPluginAiProxyAdvanced#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#logging GatewayPluginAiProxyAdvanced#logging}
  */
  readonly logging?: GatewayPluginAiProxyAdvancedConfigTargetsLogging;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#model GatewayPluginAiProxyAdvanced#model}
  */
  readonly model?: GatewayPluginAiProxyAdvancedConfigTargetsModel;
  /**
  * The model's operation implementation, for this provider. Not Null; must be one of ["audio/v1/audio/speech", "audio/v1/audio/transcriptions", "audio/v1/audio/translations", "image/v1/images/edits", "image/v1/images/generations", "llm/v1/assistants", "llm/v1/batches", "llm/v1/chat", "llm/v1/completions", "llm/v1/embeddings", "llm/v1/files", "llm/v1/responses", "preserve", "realtime/v1/realtime"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#route_type GatewayPluginAiProxyAdvanced#route_type}
  */
  readonly routeType?: string;
  /**
  * The weight this target gets within the upstream loadbalancer (1-65535). Default: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#weight GatewayPluginAiProxyAdvanced#weight}
  */
  readonly weight?: number;
}

export function gatewayPluginAiProxyAdvancedConfigTargetsToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: gatewayPluginAiProxyAdvancedConfigTargetsAuthToTerraform(struct!.auth),
    description: cdktf.stringToTerraform(struct!.description),
    logging: gatewayPluginAiProxyAdvancedConfigTargetsLoggingToTerraform(struct!.logging),
    model: gatewayPluginAiProxyAdvancedConfigTargetsModelToTerraform(struct!.model),
    route_type: cdktf.stringToTerraform(struct!.routeType),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function gatewayPluginAiProxyAdvancedConfigTargetsToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: gatewayPluginAiProxyAdvancedConfigTargetsAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigTargetsAuth",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: gatewayPluginAiProxyAdvancedConfigTargetsLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigTargetsLogging",
    },
    model: {
      value: gatewayPluginAiProxyAdvancedConfigTargetsModelToHclTerraform(struct!.model),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigTargetsModel",
    },
    route_type: {
      value: cdktf.stringToHclTerraform(struct!.routeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._model?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model?.internalValue;
    }
    if (this._routeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeType = this._routeType;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._description = undefined;
      this._logging.internalValue = undefined;
      this._model.internalValue = undefined;
      this._routeType = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._description = value.description;
      this._logging.internalValue = value.logging;
      this._model.internalValue = value.model;
      this._routeType = value.routeType;
      this._weight = value.weight;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new GatewayPluginAiProxyAdvancedConfigTargetsAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: GatewayPluginAiProxyAdvancedConfigTargetsAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // description - computed: false, optional: true, required: false
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

  // logging - computed: true, optional: true, required: false
  private _logging = new GatewayPluginAiProxyAdvancedConfigTargetsLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: GatewayPluginAiProxyAdvancedConfigTargetsLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // model - computed: true, optional: true, required: false
  private _model = new GatewayPluginAiProxyAdvancedConfigTargetsModelOutputReference(this, "model");
  public get model() {
    return this._model;
  }
  public putModel(value: GatewayPluginAiProxyAdvancedConfigTargetsModel) {
    this._model.internalValue = value;
  }
  public resetModel() {
    this._model.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }

  // route_type - computed: true, optional: true, required: false
  private _routeType?: string; 
  public get routeType() {
    return this.getStringAttribute('route_type');
  }
  public set routeType(value: string) {
    this._routeType = value;
  }
  public resetRouteType() {
    this._routeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTypeInput() {
    return this._routeType;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class GatewayPluginAiProxyAdvancedConfigTargetsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiProxyAdvancedConfigTargets[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiProxyAdvancedConfigTargetsOutputReference {
    return new GatewayPluginAiProxyAdvancedConfigTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiProxyAdvancedConfigVectordbPgvector {
  /**
  * the database of the pgvector database. Default: "kong-pgvector"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#database GatewayPluginAiProxyAdvanced#database}
  */
  readonly database?: string;
  /**
  * the host of the pgvector database. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#host GatewayPluginAiProxyAdvanced#host}
  */
  readonly host?: string;
  /**
  * the password of the pgvector database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#password GatewayPluginAiProxyAdvanced#password}
  */
  readonly password?: string;
  /**
  * the port of the pgvector database. Default: 5432
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#port GatewayPluginAiProxyAdvanced#port}
  */
  readonly port?: number;
  /**
  * whether to use ssl for the pgvector database. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#ssl GatewayPluginAiProxyAdvanced#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * the path of ssl cert to use for the pgvector database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#ssl_cert GatewayPluginAiProxyAdvanced#ssl_cert}
  */
  readonly sslCert?: string;
  /**
  * the path of ssl cert key to use for the pgvector database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#ssl_cert_key GatewayPluginAiProxyAdvanced#ssl_cert_key}
  */
  readonly sslCertKey?: string;
  /**
  * whether ssl is required for the pgvector database. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#ssl_required GatewayPluginAiProxyAdvanced#ssl_required}
  */
  readonly sslRequired?: boolean | cdktf.IResolvable;
  /**
  * whether to verify ssl for the pgvector database. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#ssl_verify GatewayPluginAiProxyAdvanced#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * the ssl version to use for the pgvector database. Default: "tlsv1_2"; must be one of ["any", "tlsv1_2", "tlsv1_3"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#ssl_version GatewayPluginAiProxyAdvanced#ssl_version}
  */
  readonly sslVersion?: string;
  /**
  * the timeout of the pgvector database. Default: 5000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#timeout GatewayPluginAiProxyAdvanced#timeout}
  */
  readonly timeout?: number;
  /**
  * the user of the pgvector database. Default: "postgres"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#user GatewayPluginAiProxyAdvanced#user}
  */
  readonly user?: string;
}

export function gatewayPluginAiProxyAdvancedConfigVectordbPgvectorToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigVectordbPgvector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    ssl_cert: cdktf.stringToTerraform(struct!.sslCert),
    ssl_cert_key: cdktf.stringToTerraform(struct!.sslCertKey),
    ssl_required: cdktf.booleanToTerraform(struct!.sslRequired),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    ssl_version: cdktf.stringToTerraform(struct!.sslVersion),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function gatewayPluginAiProxyAdvancedConfigVectordbPgvectorToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigVectordbPgvector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl: {
      value: cdktf.booleanToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_cert: {
      value: cdktf.stringToHclTerraform(struct!.sslCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert_key: {
      value: cdktf.stringToHclTerraform(struct!.sslCertKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_required: {
      value: cdktf.booleanToHclTerraform(struct!.sslRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_version: {
      value: cdktf.stringToHclTerraform(struct!.sslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigVectordbPgvectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigVectordbPgvector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._sslCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCert = this._sslCert;
    }
    if (this._sslCertKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertKey = this._sslCertKey;
    }
    if (this._sslRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslRequired = this._sslRequired;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._sslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVersion = this._sslVersion;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigVectordbPgvector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._ssl = undefined;
      this._sslCert = undefined;
      this._sslCertKey = undefined;
      this._sslRequired = undefined;
      this._sslVerify = undefined;
      this._sslVersion = undefined;
      this._timeout = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._ssl = value.ssl;
      this._sslCert = value.sslCert;
      this._sslCertKey = value.sslCertKey;
      this._sslRequired = value.sslRequired;
      this._sslVerify = value.sslVerify;
      this._sslVersion = value.sslVersion;
      this._timeout = value.timeout;
      this._user = value.user;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
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

  // ssl - computed: true, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_cert - computed: true, optional: true, required: false
  private _sslCert?: string; 
  public get sslCert() {
    return this.getStringAttribute('ssl_cert');
  }
  public set sslCert(value: string) {
    this._sslCert = value;
  }
  public resetSslCert() {
    this._sslCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertInput() {
    return this._sslCert;
  }

  // ssl_cert_key - computed: true, optional: true, required: false
  private _sslCertKey?: string; 
  public get sslCertKey() {
    return this.getStringAttribute('ssl_cert_key');
  }
  public set sslCertKey(value: string) {
    this._sslCertKey = value;
  }
  public resetSslCertKey() {
    this._sslCertKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertKeyInput() {
    return this._sslCertKey;
  }

  // ssl_required - computed: true, optional: true, required: false
  private _sslRequired?: boolean | cdktf.IResolvable; 
  public get sslRequired() {
    return this.getBooleanAttribute('ssl_required');
  }
  public set sslRequired(value: boolean | cdktf.IResolvable) {
    this._sslRequired = value;
  }
  public resetSslRequired() {
    this._sslRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRequiredInput() {
    return this._sslRequired;
  }

  // ssl_verify - computed: true, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }

  // ssl_version - computed: true, optional: true, required: false
  private _sslVersion?: string; 
  public get sslVersion() {
    return this.getStringAttribute('ssl_version');
  }
  public set sslVersion(value: string) {
    this._sslVersion = value;
  }
  public resetSslVersion() {
    this._sslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVersionInput() {
    return this._sslVersion;
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

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#ip GatewayPluginAiProxyAdvanced#ip}
  */
  readonly ip?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#port GatewayPluginAiProxyAdvanced#port}
  */
  readonly port?: number;
}

export function gatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodesToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodesToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: true, optional: true, required: false
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
}

export class GatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodesOutputReference {
    return new GatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#host GatewayPluginAiProxyAdvanced#host}
  */
  readonly host?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#port GatewayPluginAiProxyAdvanced#port}
  */
  readonly port?: number;
}

export function gatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodesToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodesToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
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
}

export class GatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodesOutputReference {
    return new GatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiProxyAdvancedConfigVectordbRedis {
  /**
  * Maximum retry attempts for redirection. Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#cluster_max_redirections GatewayPluginAiProxyAdvanced#cluster_max_redirections}
  */
  readonly clusterMaxRedirections?: number;
  /**
  * Cluster addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Cluster. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#cluster_nodes GatewayPluginAiProxyAdvanced#cluster_nodes}
  */
  readonly clusterNodes?: GatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodes[] | cdktf.IResolvable;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#connect_timeout GatewayPluginAiProxyAdvanced#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * If the connection to Redis is proxied (e.g. Envoy), set it `true`. Set the `host` and `port` to point to the proxy address. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#connection_is_proxied GatewayPluginAiProxyAdvanced#connection_is_proxied}
  */
  readonly connectionIsProxied?: boolean | cdktf.IResolvable;
  /**
  * Database to use for the Redis connection when using the `redis` strategy. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#database GatewayPluginAiProxyAdvanced#database}
  */
  readonly database?: number;
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#host GatewayPluginAiProxyAdvanced#host}
  */
  readonly host?: string;
  /**
  * Limits the total number of opened connections for a pool. If the connection pool is full, connection queues above the limit go into the backlog queue. If the backlog queue is full, subsequent connect operations fail and return `nil`. Queued operations (subject to set timeouts) resume once the number of connections in the pool is less than `keepalive_pool_size`. If latency is high or throughput is low, try increasing this value. Empirically, this value is larger than `keepalive_pool_size`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#keepalive_backlog GatewayPluginAiProxyAdvanced#keepalive_backlog}
  */
  readonly keepaliveBacklog?: number;
  /**
  * The size limit for every cosocket connection pool associated with every remote server, per worker process. If neither `keepalive_pool_size` nor `keepalive_backlog` is specified, no pool is created. If `keepalive_pool_size` isn't specified but `keepalive_backlog` is specified, then the pool uses the default value. Try to increase (e.g. 512) this value if latency is high or throughput is low. Default: 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#keepalive_pool_size GatewayPluginAiProxyAdvanced#keepalive_pool_size}
  */
  readonly keepalivePoolSize?: number;
  /**
  * Password to use for Redis connections. If undefined, no AUTH commands are sent to Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#password GatewayPluginAiProxyAdvanced#password}
  */
  readonly password?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#port GatewayPluginAiProxyAdvanced#port}
  */
  readonly port?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#read_timeout GatewayPluginAiProxyAdvanced#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#send_timeout GatewayPluginAiProxyAdvanced#send_timeout}
  */
  readonly sendTimeout?: number;
  /**
  * Sentinel master to use for Redis connections. Defining this value implies using Redis Sentinel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#sentinel_master GatewayPluginAiProxyAdvanced#sentinel_master}
  */
  readonly sentinelMaster?: string;
  /**
  * Sentinel node addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Sentinel. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#sentinel_nodes GatewayPluginAiProxyAdvanced#sentinel_nodes}
  */
  readonly sentinelNodes?: GatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodes[] | cdktf.IResolvable;
  /**
  * Sentinel password to authenticate with a Redis Sentinel instance. If undefined, no AUTH commands are sent to Redis Sentinels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#sentinel_password GatewayPluginAiProxyAdvanced#sentinel_password}
  */
  readonly sentinelPassword?: string;
  /**
  * Sentinel role to use for Redis connections when the `redis` strategy is defined. Defining this value implies using Redis Sentinel. must be one of ["any", "master", "slave"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#sentinel_role GatewayPluginAiProxyAdvanced#sentinel_role}
  */
  readonly sentinelRole?: string;
  /**
  * Sentinel username to authenticate with a Redis Sentinel instance. If undefined, ACL authentication won't be performed. This requires Redis v6.2.0+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#sentinel_username GatewayPluginAiProxyAdvanced#sentinel_username}
  */
  readonly sentinelUsername?: string;
  /**
  * A string representing an SNI (server name indication) value for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#server_name GatewayPluginAiProxyAdvanced#server_name}
  */
  readonly serverName?: string;
  /**
  * If set to true, uses SSL to connect to Redis. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#ssl GatewayPluginAiProxyAdvanced#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * If set to true, verifies the validity of the server SSL certificate. If setting this parameter, also configure `lua_ssl_trusted_certificate` in `kong.conf` to specify the CA (or server) certificate used by your Redis server. You may also need to configure `lua_ssl_verify_depth` accordingly. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#ssl_verify GatewayPluginAiProxyAdvanced#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Username to use for Redis connections. If undefined, ACL authentication won't be performed. This requires Redis v6.0.0+. To be compatible with Redis v5.x.y, you can set it to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#username GatewayPluginAiProxyAdvanced#username}
  */
  readonly username?: string;
}

export function gatewayPluginAiProxyAdvancedConfigVectordbRedisToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigVectordbRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_max_redirections: cdktf.numberToTerraform(struct!.clusterMaxRedirections),
    cluster_nodes: cdktf.listMapper(gatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodesToTerraform, false)(struct!.clusterNodes),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    connection_is_proxied: cdktf.booleanToTerraform(struct!.connectionIsProxied),
    database: cdktf.numberToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    keepalive_backlog: cdktf.numberToTerraform(struct!.keepaliveBacklog),
    keepalive_pool_size: cdktf.numberToTerraform(struct!.keepalivePoolSize),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    read_timeout: cdktf.numberToTerraform(struct!.readTimeout),
    send_timeout: cdktf.numberToTerraform(struct!.sendTimeout),
    sentinel_master: cdktf.stringToTerraform(struct!.sentinelMaster),
    sentinel_nodes: cdktf.listMapper(gatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodesToTerraform, false)(struct!.sentinelNodes),
    sentinel_password: cdktf.stringToTerraform(struct!.sentinelPassword),
    sentinel_role: cdktf.stringToTerraform(struct!.sentinelRole),
    sentinel_username: cdktf.stringToTerraform(struct!.sentinelUsername),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginAiProxyAdvancedConfigVectordbRedisToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigVectordbRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_max_redirections: {
      value: cdktf.numberToHclTerraform(struct!.clusterMaxRedirections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_nodes: {
      value: cdktf.listMapperHcl(gatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodesToHclTerraform, false)(struct!.clusterNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodesList",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_is_proxied: {
      value: cdktf.booleanToHclTerraform(struct!.connectionIsProxied),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database: {
      value: cdktf.numberToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_backlog: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveBacklog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.keepalivePoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sentinel_master: {
      value: cdktf.stringToHclTerraform(struct!.sentinelMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_nodes: {
      value: cdktf.listMapperHcl(gatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodesToHclTerraform, false)(struct!.sentinelNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodesList",
    },
    sentinel_password: {
      value: cdktf.stringToHclTerraform(struct!.sentinelPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_role: {
      value: cdktf.stringToHclTerraform(struct!.sentinelRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_username: {
      value: cdktf.stringToHclTerraform(struct!.sentinelUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl: {
      value: cdktf.booleanToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigVectordbRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigVectordbRedis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterMaxRedirections !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMaxRedirections = this._clusterMaxRedirections;
    }
    if (this._clusterNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNodes = this._clusterNodes?.internalValue;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._connectionIsProxied !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionIsProxied = this._connectionIsProxied;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._keepaliveBacklog !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveBacklog = this._keepaliveBacklog;
    }
    if (this._keepalivePoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalivePoolSize = this._keepalivePoolSize;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._sendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeout = this._sendTimeout;
    }
    if (this._sentinelMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelMaster = this._sentinelMaster;
    }
    if (this._sentinelNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelNodes = this._sentinelNodes?.internalValue;
    }
    if (this._sentinelPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelPassword = this._sentinelPassword;
    }
    if (this._sentinelRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelRole = this._sentinelRole;
    }
    if (this._sentinelUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelUsername = this._sentinelUsername;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigVectordbRedis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterMaxRedirections = undefined;
      this._clusterNodes.internalValue = undefined;
      this._connectTimeout = undefined;
      this._connectionIsProxied = undefined;
      this._database = undefined;
      this._host = undefined;
      this._keepaliveBacklog = undefined;
      this._keepalivePoolSize = undefined;
      this._password = undefined;
      this._port = undefined;
      this._readTimeout = undefined;
      this._sendTimeout = undefined;
      this._sentinelMaster = undefined;
      this._sentinelNodes.internalValue = undefined;
      this._sentinelPassword = undefined;
      this._sentinelRole = undefined;
      this._sentinelUsername = undefined;
      this._serverName = undefined;
      this._ssl = undefined;
      this._sslVerify = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterMaxRedirections = value.clusterMaxRedirections;
      this._clusterNodes.internalValue = value.clusterNodes;
      this._connectTimeout = value.connectTimeout;
      this._connectionIsProxied = value.connectionIsProxied;
      this._database = value.database;
      this._host = value.host;
      this._keepaliveBacklog = value.keepaliveBacklog;
      this._keepalivePoolSize = value.keepalivePoolSize;
      this._password = value.password;
      this._port = value.port;
      this._readTimeout = value.readTimeout;
      this._sendTimeout = value.sendTimeout;
      this._sentinelMaster = value.sentinelMaster;
      this._sentinelNodes.internalValue = value.sentinelNodes;
      this._sentinelPassword = value.sentinelPassword;
      this._sentinelRole = value.sentinelRole;
      this._sentinelUsername = value.sentinelUsername;
      this._serverName = value.serverName;
      this._ssl = value.ssl;
      this._sslVerify = value.sslVerify;
      this._username = value.username;
    }
  }

  // cluster_max_redirections - computed: true, optional: true, required: false
  private _clusterMaxRedirections?: number; 
  public get clusterMaxRedirections() {
    return this.getNumberAttribute('cluster_max_redirections');
  }
  public set clusterMaxRedirections(value: number) {
    this._clusterMaxRedirections = value;
  }
  public resetClusterMaxRedirections() {
    this._clusterMaxRedirections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMaxRedirectionsInput() {
    return this._clusterMaxRedirections;
  }

  // cluster_nodes - computed: true, optional: true, required: false
  private _clusterNodes = new GatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodesList(this, "cluster_nodes", false);
  public get clusterNodes() {
    return this._clusterNodes;
  }
  public putClusterNodes(value: GatewayPluginAiProxyAdvancedConfigVectordbRedisClusterNodes[] | cdktf.IResolvable) {
    this._clusterNodes.internalValue = value;
  }
  public resetClusterNodes() {
    this._clusterNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNodesInput() {
    return this._clusterNodes.internalValue;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // connection_is_proxied - computed: true, optional: true, required: false
  private _connectionIsProxied?: boolean | cdktf.IResolvable; 
  public get connectionIsProxied() {
    return this.getBooleanAttribute('connection_is_proxied');
  }
  public set connectionIsProxied(value: boolean | cdktf.IResolvable) {
    this._connectionIsProxied = value;
  }
  public resetConnectionIsProxied() {
    this._connectionIsProxied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIsProxiedInput() {
    return this._connectionIsProxied;
  }

  // database - computed: true, optional: true, required: false
  private _database?: number; 
  public get database() {
    return this.getNumberAttribute('database');
  }
  public set database(value: number) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // keepalive_backlog - computed: true, optional: true, required: false
  private _keepaliveBacklog?: number; 
  public get keepaliveBacklog() {
    return this.getNumberAttribute('keepalive_backlog');
  }
  public set keepaliveBacklog(value: number) {
    this._keepaliveBacklog = value;
  }
  public resetKeepaliveBacklog() {
    this._keepaliveBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveBacklogInput() {
    return this._keepaliveBacklog;
  }

  // keepalive_pool_size - computed: true, optional: true, required: false
  private _keepalivePoolSize?: number; 
  public get keepalivePoolSize() {
    return this.getNumberAttribute('keepalive_pool_size');
  }
  public set keepalivePoolSize(value: number) {
    this._keepalivePoolSize = value;
  }
  public resetKeepalivePoolSize() {
    this._keepalivePoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepalivePoolSizeInput() {
    return this._keepalivePoolSize;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
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

  // read_timeout - computed: true, optional: true, required: false
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // send_timeout - computed: true, optional: true, required: false
  private _sendTimeout?: number; 
  public get sendTimeout() {
    return this.getNumberAttribute('send_timeout');
  }
  public set sendTimeout(value: number) {
    this._sendTimeout = value;
  }
  public resetSendTimeout() {
    this._sendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInput() {
    return this._sendTimeout;
  }

  // sentinel_master - computed: true, optional: true, required: false
  private _sentinelMaster?: string; 
  public get sentinelMaster() {
    return this.getStringAttribute('sentinel_master');
  }
  public set sentinelMaster(value: string) {
    this._sentinelMaster = value;
  }
  public resetSentinelMaster() {
    this._sentinelMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelMasterInput() {
    return this._sentinelMaster;
  }

  // sentinel_nodes - computed: true, optional: true, required: false
  private _sentinelNodes = new GatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodesList(this, "sentinel_nodes", false);
  public get sentinelNodes() {
    return this._sentinelNodes;
  }
  public putSentinelNodes(value: GatewayPluginAiProxyAdvancedConfigVectordbRedisSentinelNodes[] | cdktf.IResolvable) {
    this._sentinelNodes.internalValue = value;
  }
  public resetSentinelNodes() {
    this._sentinelNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelNodesInput() {
    return this._sentinelNodes.internalValue;
  }

  // sentinel_password - computed: true, optional: true, required: false
  private _sentinelPassword?: string; 
  public get sentinelPassword() {
    return this.getStringAttribute('sentinel_password');
  }
  public set sentinelPassword(value: string) {
    this._sentinelPassword = value;
  }
  public resetSentinelPassword() {
    this._sentinelPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelPasswordInput() {
    return this._sentinelPassword;
  }

  // sentinel_role - computed: true, optional: true, required: false
  private _sentinelRole?: string; 
  public get sentinelRole() {
    return this.getStringAttribute('sentinel_role');
  }
  public set sentinelRole(value: string) {
    this._sentinelRole = value;
  }
  public resetSentinelRole() {
    this._sentinelRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelRoleInput() {
    return this._sentinelRole;
  }

  // sentinel_username - computed: true, optional: true, required: false
  private _sentinelUsername?: string; 
  public get sentinelUsername() {
    return this.getStringAttribute('sentinel_username');
  }
  public set sentinelUsername(value: string) {
    this._sentinelUsername = value;
  }
  public resetSentinelUsername() {
    this._sentinelUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelUsernameInput() {
    return this._sentinelUsername;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_verify - computed: true, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigVectordb {
  /**
  * the desired dimensionality for the vectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#dimensions GatewayPluginAiProxyAdvanced#dimensions}
  */
  readonly dimensions: number;
  /**
  * the distance metric to use for vector searches. must be one of ["cosine", "euclidean"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#distance_metric GatewayPluginAiProxyAdvanced#distance_metric}
  */
  readonly distanceMetric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#pgvector GatewayPluginAiProxyAdvanced#pgvector}
  */
  readonly pgvector?: GatewayPluginAiProxyAdvancedConfigVectordbPgvector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#redis GatewayPluginAiProxyAdvanced#redis}
  */
  readonly redis?: GatewayPluginAiProxyAdvancedConfigVectordbRedis;
  /**
  * which vector database driver to use. must be one of ["pgvector", "redis"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#strategy GatewayPluginAiProxyAdvanced#strategy}
  */
  readonly strategy: string;
  /**
  * the default similarity threshold for accepting semantic search results (float)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#threshold GatewayPluginAiProxyAdvanced#threshold}
  */
  readonly threshold: number;
}

export function gatewayPluginAiProxyAdvancedConfigVectordbToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigVectordb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.numberToTerraform(struct!.dimensions),
    distance_metric: cdktf.stringToTerraform(struct!.distanceMetric),
    pgvector: gatewayPluginAiProxyAdvancedConfigVectordbPgvectorToTerraform(struct!.pgvector),
    redis: gatewayPluginAiProxyAdvancedConfigVectordbRedisToTerraform(struct!.redis),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function gatewayPluginAiProxyAdvancedConfigVectordbToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigVectordb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.numberToHclTerraform(struct!.dimensions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_metric: {
      value: cdktf.stringToHclTerraform(struct!.distanceMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pgvector: {
      value: gatewayPluginAiProxyAdvancedConfigVectordbPgvectorToHclTerraform(struct!.pgvector),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigVectordbPgvector",
    },
    redis: {
      value: gatewayPluginAiProxyAdvancedConfigVectordbRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigVectordbRedis",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class GatewayPluginAiProxyAdvancedConfigVectordbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigVectordb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._distanceMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceMetric = this._distanceMetric;
    }
    if (this._pgvector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgvector = this._pgvector?.internalValue;
    }
    if (this._redis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redis = this._redis?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigVectordb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions = undefined;
      this._distanceMetric = undefined;
      this._pgvector.internalValue = undefined;
      this._redis.internalValue = undefined;
      this._strategy = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions = value.dimensions;
      this._distanceMetric = value.distanceMetric;
      this._pgvector.internalValue = value.pgvector;
      this._redis.internalValue = value.redis;
      this._strategy = value.strategy;
      this._threshold = value.threshold;
    }
  }

  // dimensions - computed: true, optional: false, required: true
  private _dimensions?: number; 
  public get dimensions() {
    return this.getNumberAttribute('dimensions');
  }
  public set dimensions(value: number) {
    this._dimensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // distance_metric - computed: true, optional: false, required: true
  private _distanceMetric?: string; 
  public get distanceMetric() {
    return this.getStringAttribute('distance_metric');
  }
  public set distanceMetric(value: string) {
    this._distanceMetric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceMetricInput() {
    return this._distanceMetric;
  }

  // pgvector - computed: true, optional: true, required: false
  private _pgvector = new GatewayPluginAiProxyAdvancedConfigVectordbPgvectorOutputReference(this, "pgvector");
  public get pgvector() {
    return this._pgvector;
  }
  public putPgvector(value: GatewayPluginAiProxyAdvancedConfigVectordbPgvector) {
    this._pgvector.internalValue = value;
  }
  public resetPgvector() {
    this._pgvector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgvectorInput() {
    return this._pgvector.internalValue;
  }

  // redis - computed: true, optional: true, required: false
  private _redis = new GatewayPluginAiProxyAdvancedConfigVectordbRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: GatewayPluginAiProxyAdvancedConfigVectordbRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // strategy - computed: true, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // threshold - computed: true, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface GatewayPluginAiProxyAdvancedConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#balancer GatewayPluginAiProxyAdvanced#balancer}
  */
  readonly balancer?: GatewayPluginAiProxyAdvancedConfigBalancer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#embeddings GatewayPluginAiProxyAdvanced#embeddings}
  */
  readonly embeddings?: GatewayPluginAiProxyAdvancedConfigEmbeddings;
  /**
  * Generative AI category of the request. Default: "text/generation"; must be one of ["audio/speech", "audio/transcription", "image/generation", "realtime/generation", "text/embeddings", "text/generation"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#genai_category GatewayPluginAiProxyAdvanced#genai_category}
  */
  readonly genaiCategory?: string;
  /**
  * LLM input and output format and schema to use. Default: "openai"; must be one of ["bedrock", "cohere", "gemini", "huggingface", "openai"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#llm_format GatewayPluginAiProxyAdvanced#llm_format}
  */
  readonly llmFormat?: string;
  /**
  * max allowed body size allowed to be introspected. 0 means unlimited, but the size of this body will still be limited by Nginx's client_max_body_size. Default: 8192
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#max_request_body_size GatewayPluginAiProxyAdvanced#max_request_body_size}
  */
  readonly maxRequestBodySize?: number;
  /**
  * Display the model name selected in the X-Kong-LLM-Model response header. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#model_name_header GatewayPluginAiProxyAdvanced#model_name_header}
  */
  readonly modelNameHeader?: boolean | cdktf.IResolvable;
  /**
  * Whether to 'optionally allow', 'deny', or 'always' (force) the streaming of answers via server sent events. Default: "allow"; must be one of ["allow", "always", "deny"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#response_streaming GatewayPluginAiProxyAdvanced#response_streaming}
  */
  readonly responseStreaming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#targets GatewayPluginAiProxyAdvanced#targets}
  */
  readonly targets: GatewayPluginAiProxyAdvancedConfigTargets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#vectordb GatewayPluginAiProxyAdvanced#vectordb}
  */
  readonly vectordb?: GatewayPluginAiProxyAdvancedConfigVectordb;
}

export function gatewayPluginAiProxyAdvancedConfigAToTerraform(struct?: GatewayPluginAiProxyAdvancedConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balancer: gatewayPluginAiProxyAdvancedConfigBalancerToTerraform(struct!.balancer),
    embeddings: gatewayPluginAiProxyAdvancedConfigEmbeddingsToTerraform(struct!.embeddings),
    genai_category: cdktf.stringToTerraform(struct!.genaiCategory),
    llm_format: cdktf.stringToTerraform(struct!.llmFormat),
    max_request_body_size: cdktf.numberToTerraform(struct!.maxRequestBodySize),
    model_name_header: cdktf.booleanToTerraform(struct!.modelNameHeader),
    response_streaming: cdktf.stringToTerraform(struct!.responseStreaming),
    targets: cdktf.listMapper(gatewayPluginAiProxyAdvancedConfigTargetsToTerraform, false)(struct!.targets),
    vectordb: gatewayPluginAiProxyAdvancedConfigVectordbToTerraform(struct!.vectordb),
  }
}


export function gatewayPluginAiProxyAdvancedConfigAToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    balancer: {
      value: gatewayPluginAiProxyAdvancedConfigBalancerToHclTerraform(struct!.balancer),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigBalancer",
    },
    embeddings: {
      value: gatewayPluginAiProxyAdvancedConfigEmbeddingsToHclTerraform(struct!.embeddings),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigEmbeddings",
    },
    genai_category: {
      value: cdktf.stringToHclTerraform(struct!.genaiCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    llm_format: {
      value: cdktf.stringToHclTerraform(struct!.llmFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_request_body_size: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_name_header: {
      value: cdktf.booleanToHclTerraform(struct!.modelNameHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_streaming: {
      value: cdktf.stringToHclTerraform(struct!.responseStreaming),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targets: {
      value: cdktf.listMapperHcl(gatewayPluginAiProxyAdvancedConfigTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigTargetsList",
    },
    vectordb: {
      value: gatewayPluginAiProxyAdvancedConfigVectordbToHclTerraform(struct!.vectordb),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedConfigVectordb",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._balancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.balancer = this._balancer?.internalValue;
    }
    if (this._embeddings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddings = this._embeddings?.internalValue;
    }
    if (this._genaiCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.genaiCategory = this._genaiCategory;
    }
    if (this._llmFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmFormat = this._llmFormat;
    }
    if (this._maxRequestBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBodySize = this._maxRequestBodySize;
    }
    if (this._modelNameHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelNameHeader = this._modelNameHeader;
    }
    if (this._responseStreaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseStreaming = this._responseStreaming;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    if (this._vectordb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectordb = this._vectordb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyAdvancedConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._balancer.internalValue = undefined;
      this._embeddings.internalValue = undefined;
      this._genaiCategory = undefined;
      this._llmFormat = undefined;
      this._maxRequestBodySize = undefined;
      this._modelNameHeader = undefined;
      this._responseStreaming = undefined;
      this._targets.internalValue = undefined;
      this._vectordb.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._balancer.internalValue = value.balancer;
      this._embeddings.internalValue = value.embeddings;
      this._genaiCategory = value.genaiCategory;
      this._llmFormat = value.llmFormat;
      this._maxRequestBodySize = value.maxRequestBodySize;
      this._modelNameHeader = value.modelNameHeader;
      this._responseStreaming = value.responseStreaming;
      this._targets.internalValue = value.targets;
      this._vectordb.internalValue = value.vectordb;
    }
  }

  // balancer - computed: true, optional: true, required: false
  private _balancer = new GatewayPluginAiProxyAdvancedConfigBalancerOutputReference(this, "balancer");
  public get balancer() {
    return this._balancer;
  }
  public putBalancer(value: GatewayPluginAiProxyAdvancedConfigBalancer) {
    this._balancer.internalValue = value;
  }
  public resetBalancer() {
    this._balancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balancerInput() {
    return this._balancer.internalValue;
  }

  // embeddings - computed: true, optional: true, required: false
  private _embeddings = new GatewayPluginAiProxyAdvancedConfigEmbeddingsOutputReference(this, "embeddings");
  public get embeddings() {
    return this._embeddings;
  }
  public putEmbeddings(value: GatewayPluginAiProxyAdvancedConfigEmbeddings) {
    this._embeddings.internalValue = value;
  }
  public resetEmbeddings() {
    this._embeddings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingsInput() {
    return this._embeddings.internalValue;
  }

  // genai_category - computed: true, optional: true, required: false
  private _genaiCategory?: string; 
  public get genaiCategory() {
    return this.getStringAttribute('genai_category');
  }
  public set genaiCategory(value: string) {
    this._genaiCategory = value;
  }
  public resetGenaiCategory() {
    this._genaiCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genaiCategoryInput() {
    return this._genaiCategory;
  }

  // llm_format - computed: true, optional: true, required: false
  private _llmFormat?: string; 
  public get llmFormat() {
    return this.getStringAttribute('llm_format');
  }
  public set llmFormat(value: string) {
    this._llmFormat = value;
  }
  public resetLlmFormat() {
    this._llmFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmFormatInput() {
    return this._llmFormat;
  }

  // max_request_body_size - computed: true, optional: true, required: false
  private _maxRequestBodySize?: number; 
  public get maxRequestBodySize() {
    return this.getNumberAttribute('max_request_body_size');
  }
  public set maxRequestBodySize(value: number) {
    this._maxRequestBodySize = value;
  }
  public resetMaxRequestBodySize() {
    this._maxRequestBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestBodySizeInput() {
    return this._maxRequestBodySize;
  }

  // model_name_header - computed: true, optional: true, required: false
  private _modelNameHeader?: boolean | cdktf.IResolvable; 
  public get modelNameHeader() {
    return this.getBooleanAttribute('model_name_header');
  }
  public set modelNameHeader(value: boolean | cdktf.IResolvable) {
    this._modelNameHeader = value;
  }
  public resetModelNameHeader() {
    this._modelNameHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameHeaderInput() {
    return this._modelNameHeader;
  }

  // response_streaming - computed: true, optional: true, required: false
  private _responseStreaming?: string; 
  public get responseStreaming() {
    return this.getStringAttribute('response_streaming');
  }
  public set responseStreaming(value: string) {
    this._responseStreaming = value;
  }
  public resetResponseStreaming() {
    this._responseStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseStreamingInput() {
    return this._responseStreaming;
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new GatewayPluginAiProxyAdvancedConfigTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: GatewayPluginAiProxyAdvancedConfigTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // vectordb - computed: true, optional: true, required: false
  private _vectordb = new GatewayPluginAiProxyAdvancedConfigVectordbOutputReference(this, "vectordb");
  public get vectordb() {
    return this._vectordb;
  }
  public putVectordb(value: GatewayPluginAiProxyAdvancedConfigVectordb) {
    this._vectordb.internalValue = value;
  }
  public resetVectordb() {
    this._vectordb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectordbInput() {
    return this._vectordb.internalValue;
  }
}
export interface GatewayPluginAiProxyAdvancedConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#id GatewayPluginAiProxyAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiProxyAdvancedConsumerToTerraform(struct?: GatewayPluginAiProxyAdvancedConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiProxyAdvancedConsumerToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyAdvancedConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyAdvancedConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyAdvancedConsumerGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#id GatewayPluginAiProxyAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiProxyAdvancedConsumerGroupToTerraform(struct?: GatewayPluginAiProxyAdvancedConsumerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiProxyAdvancedConsumerGroupToHclTerraform(struct?: GatewayPluginAiProxyAdvancedConsumerGroup | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyAdvancedConsumerGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedConsumerGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyAdvancedConsumerGroup | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyAdvancedOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#access GatewayPluginAiProxyAdvanced#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiProxyAdvancedOrderingAfterToTerraform(struct?: GatewayPluginAiProxyAdvancedOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiProxyAdvancedOrderingAfterToHclTerraform(struct?: GatewayPluginAiProxyAdvancedOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyAdvancedOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyAdvancedOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyAdvancedOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#access GatewayPluginAiProxyAdvanced#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiProxyAdvancedOrderingBeforeToTerraform(struct?: GatewayPluginAiProxyAdvancedOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiProxyAdvancedOrderingBeforeToHclTerraform(struct?: GatewayPluginAiProxyAdvancedOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyAdvancedOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyAdvancedOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyAdvancedOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#after GatewayPluginAiProxyAdvanced#after}
  */
  readonly after?: GatewayPluginAiProxyAdvancedOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#before GatewayPluginAiProxyAdvanced#before}
  */
  readonly before?: GatewayPluginAiProxyAdvancedOrderingBefore;
}

export function gatewayPluginAiProxyAdvancedOrderingToTerraform(struct?: GatewayPluginAiProxyAdvancedOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginAiProxyAdvancedOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginAiProxyAdvancedOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginAiProxyAdvancedOrderingToHclTerraform(struct?: GatewayPluginAiProxyAdvancedOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginAiProxyAdvancedOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedOrderingAfter",
    },
    before: {
      value: gatewayPluginAiProxyAdvancedOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyAdvancedOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyAdvancedOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyAdvancedOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginAiProxyAdvancedOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginAiProxyAdvancedOrderingAfter) {
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
  private _before = new GatewayPluginAiProxyAdvancedOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginAiProxyAdvancedOrderingBefore) {
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
export interface GatewayPluginAiProxyAdvancedPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#id GatewayPluginAiProxyAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#name GatewayPluginAiProxyAdvanced#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#path GatewayPluginAiProxyAdvanced#path}
  */
  readonly path?: string;
}

export function gatewayPluginAiProxyAdvancedPartialsToTerraform(struct?: GatewayPluginAiProxyAdvancedPartials | cdktf.IResolvable): any {
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


export function gatewayPluginAiProxyAdvancedPartialsToHclTerraform(struct?: GatewayPluginAiProxyAdvancedPartials | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyAdvancedPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiProxyAdvancedPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyAdvancedPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAiProxyAdvancedPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiProxyAdvancedPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiProxyAdvancedPartialsOutputReference {
    return new GatewayPluginAiProxyAdvancedPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiProxyAdvancedRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#id GatewayPluginAiProxyAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiProxyAdvancedRouteToTerraform(struct?: GatewayPluginAiProxyAdvancedRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiProxyAdvancedRouteToHclTerraform(struct?: GatewayPluginAiProxyAdvancedRoute | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyAdvancedRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyAdvancedRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyAdvancedService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#id GatewayPluginAiProxyAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiProxyAdvancedServiceToTerraform(struct?: GatewayPluginAiProxyAdvancedService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiProxyAdvancedServiceToHclTerraform(struct?: GatewayPluginAiProxyAdvancedService | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyAdvancedServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyAdvancedService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyAdvancedService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced konnect_gateway_plugin_ai_proxy_advanced}
*/
export class GatewayPluginAiProxyAdvanced extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_ai_proxy_advanced";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginAiProxyAdvanced resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginAiProxyAdvanced to import
  * @param importFromId The id of the existing GatewayPluginAiProxyAdvanced that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginAiProxyAdvanced to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_ai_proxy_advanced", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy_advanced konnect_gateway_plugin_ai_proxy_advanced} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginAiProxyAdvancedConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginAiProxyAdvancedConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_ai_proxy_advanced',
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
    this._consumer.internalValue = config.consumer;
    this._consumerGroup.internalValue = config.consumerGroup;
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
  private _config = new GatewayPluginAiProxyAdvancedConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginAiProxyAdvancedConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginAiProxyAdvancedConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginAiProxyAdvancedConsumer) {
    this._consumer.internalValue = value;
  }
  public resetConsumer() {
    this._consumer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer.internalValue;
  }

  // consumer_group - computed: true, optional: true, required: false
  private _consumerGroup = new GatewayPluginAiProxyAdvancedConsumerGroupOutputReference(this, "consumer_group");
  public get consumerGroup() {
    return this._consumerGroup;
  }
  public putConsumerGroup(value: GatewayPluginAiProxyAdvancedConsumerGroup) {
    this._consumerGroup.internalValue = value;
  }
  public resetConsumerGroup() {
    this._consumerGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupInput() {
    return this._consumerGroup.internalValue;
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
  private _ordering = new GatewayPluginAiProxyAdvancedOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginAiProxyAdvancedOrdering) {
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
  private _partials = new GatewayPluginAiProxyAdvancedPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginAiProxyAdvancedPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginAiProxyAdvancedRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginAiProxyAdvancedRoute) {
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
  private _service = new GatewayPluginAiProxyAdvancedServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginAiProxyAdvancedService) {
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
      config: gatewayPluginAiProxyAdvancedConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginAiProxyAdvancedConsumerToTerraform(this._consumer.internalValue),
      consumer_group: gatewayPluginAiProxyAdvancedConsumerGroupToTerraform(this._consumerGroup.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginAiProxyAdvancedOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginAiProxyAdvancedPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginAiProxyAdvancedRouteToTerraform(this._route.internalValue),
      service: gatewayPluginAiProxyAdvancedServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginAiProxyAdvancedConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiProxyAdvancedConfigA",
      },
      consumer: {
        value: gatewayPluginAiProxyAdvancedConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiProxyAdvancedConsumer",
      },
      consumer_group: {
        value: gatewayPluginAiProxyAdvancedConsumerGroupToHclTerraform(this._consumerGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiProxyAdvancedConsumerGroup",
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
        value: gatewayPluginAiProxyAdvancedOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiProxyAdvancedOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginAiProxyAdvancedPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginAiProxyAdvancedPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginAiProxyAdvancedRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiProxyAdvancedRoute",
      },
      service: {
        value: gatewayPluginAiProxyAdvancedServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiProxyAdvancedService",
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
