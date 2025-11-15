// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginAiSemanticCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#config GatewayPluginAiSemanticCache#config}
  */
  readonly config: GatewayPluginAiSemanticCacheConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#consumer GatewayPluginAiSemanticCache#consumer}
  */
  readonly consumer?: GatewayPluginAiSemanticCacheConsumer;
  /**
  * If set, the plugin will activate only for requests where the specified consumer group has been authenticated. (Note that some plugins can not be restricted to consumers groups this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#consumer_group GatewayPluginAiSemanticCache#consumer_group}
  */
  readonly consumerGroup?: GatewayPluginAiSemanticCacheConsumerGroup;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#control_plane_id GatewayPluginAiSemanticCache#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#created_at GatewayPluginAiSemanticCache#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#enabled GatewayPluginAiSemanticCache#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#id GatewayPluginAiSemanticCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#instance_name GatewayPluginAiSemanticCache#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#ordering GatewayPluginAiSemanticCache#ordering}
  */
  readonly ordering?: GatewayPluginAiSemanticCacheOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#partials GatewayPluginAiSemanticCache#partials}
  */
  readonly partials?: GatewayPluginAiSemanticCachePartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#protocols GatewayPluginAiSemanticCache#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#route GatewayPluginAiSemanticCache#route}
  */
  readonly route?: GatewayPluginAiSemanticCacheRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#service GatewayPluginAiSemanticCache#service}
  */
  readonly service?: GatewayPluginAiSemanticCacheService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#tags GatewayPluginAiSemanticCache#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#updated_at GatewayPluginAiSemanticCache#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginAiSemanticCacheConfigEmbeddingsAuth {
  /**
  * If enabled, the authorization header or parameter can be overridden in the request by the value configured in the plugin. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#allow_override GatewayPluginAiSemanticCache#allow_override}
  */
  readonly allowOverride?: boolean | cdktf.IResolvable;
  /**
  * Set this if you are using an AWS provider (Bedrock) and you are authenticating using static IAM User credentials. Setting this will override the AWS_ACCESS_KEY_ID environment variable for this plugin instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#aws_access_key_id GatewayPluginAiSemanticCache#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Set this if you are using an AWS provider (Bedrock) and you are authenticating using static IAM User credentials. Setting this will override the AWS_SECRET_ACCESS_KEY environment variable for this plugin instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#aws_secret_access_key GatewayPluginAiSemanticCache#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#azure_client_id GatewayPluginAiSemanticCache#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#azure_client_secret GatewayPluginAiSemanticCache#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#azure_tenant_id GatewayPluginAiSemanticCache#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Set true to use the Azure Cloud Managed Identity (or user-assigned identity) to authenticate with Azure-provider models. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#azure_use_managed_identity GatewayPluginAiSemanticCache#azure_use_managed_identity}
  */
  readonly azureUseManagedIdentity?: boolean | cdktf.IResolvable;
  /**
  * Set this field to the full JSON of the GCP service account to authenticate, if required. If null (and gcp_use_service_account is true), Kong will attempt to read from environment variable `GCP_SERVICE_ACCOUNT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#gcp_service_account_json GatewayPluginAiSemanticCache#gcp_service_account_json}
  */
  readonly gcpServiceAccountJson?: string;
  /**
  * Use service account auth for GCP-based providers and models. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#gcp_use_service_account GatewayPluginAiSemanticCache#gcp_use_service_account}
  */
  readonly gcpUseServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * If AI model requires authentication via Authorization or API key header, specify its name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#header_name GatewayPluginAiSemanticCache#header_name}
  */
  readonly headerName?: string;
  /**
  * Specify the full auth header value for 'header_name', for example 'Bearer key' or just 'key'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#header_value GatewayPluginAiSemanticCache#header_value}
  */
  readonly headerValue?: string;
  /**
  * Specify whether the 'param_name' and 'param_value' options go in a query string, or the POST form/JSON body. must be one of ["body", "query"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#param_location GatewayPluginAiSemanticCache#param_location}
  */
  readonly paramLocation?: string;
  /**
  * If AI model requires authentication via query parameter, specify its name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#param_name GatewayPluginAiSemanticCache#param_name}
  */
  readonly paramName?: string;
  /**
  * Specify the full parameter value for 'param_name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#param_value GatewayPluginAiSemanticCache#param_value}
  */
  readonly paramValue?: string;
}

export function gatewayPluginAiSemanticCacheConfigEmbeddingsAuthToTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddingsAuth | cdktf.IResolvable): any {
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


export function gatewayPluginAiSemanticCacheConfigEmbeddingsAuthToHclTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddingsAuth | cdktf.IResolvable): any {
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

export class GatewayPluginAiSemanticCacheConfigEmbeddingsAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheConfigEmbeddingsAuth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheConfigEmbeddingsAuth | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsAzure {
  /**
  * 'api-version' for Azure OpenAI instances. Default: "2023-05-15"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#api_version GatewayPluginAiSemanticCache#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Deployment ID for Azure OpenAI instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#deployment_id GatewayPluginAiSemanticCache#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Instance name for Azure OpenAI hosted models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#instance GatewayPluginAiSemanticCache#instance}
  */
  readonly instance?: string;
}

export function gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsAzureToTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsAzure | cdktf.IResolvable): any {
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


export function gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsAzureToHclTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsAzure | cdktf.IResolvable): any {
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

export class GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsAzure | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsBedrock {
  /**
  * If using AWS providers (Bedrock) you can assume a different role after authentication with the current IAM context is successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#aws_assume_role_arn GatewayPluginAiSemanticCache#aws_assume_role_arn}
  */
  readonly awsAssumeRoleArn?: string;
  /**
  * If using AWS providers (Bedrock) you can override the `AWS_REGION` environment variable by setting this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#aws_region GatewayPluginAiSemanticCache#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * If using AWS providers (Bedrock), set the identifier of the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#aws_role_session_name GatewayPluginAiSemanticCache#aws_role_session_name}
  */
  readonly awsRoleSessionName?: string;
  /**
  * If using AWS providers (Bedrock), override the STS endpoint URL when assuming a different role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#aws_sts_endpoint_url GatewayPluginAiSemanticCache#aws_sts_endpoint_url}
  */
  readonly awsStsEndpointUrl?: string;
  /**
  * If using AWS providers (Bedrock), set to true to normalize the embeddings. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#embeddings_normalize GatewayPluginAiSemanticCache#embeddings_normalize}
  */
  readonly embeddingsNormalize?: boolean | cdktf.IResolvable;
  /**
  * Force the client's performance configuration 'latency' for all requests. Leave empty to let the consumer select the performance configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#performance_config_latency GatewayPluginAiSemanticCache#performance_config_latency}
  */
  readonly performanceConfigLatency?: string;
}

export function gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsBedrockToTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsBedrock | cdktf.IResolvable): any {
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


export function gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsBedrockToHclTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsBedrock | cdktf.IResolvable): any {
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

export class GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsBedrockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsBedrock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsBedrock | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsGemini {
  /**
  * If running Gemini on Vertex, specify the regional API endpoint (hostname only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#api_endpoint GatewayPluginAiSemanticCache#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * If running Gemini on Vertex, specify the location ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#location_id GatewayPluginAiSemanticCache#location_id}
  */
  readonly locationId?: string;
  /**
  * If running Gemini on Vertex, specify the project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#project_id GatewayPluginAiSemanticCache#project_id}
  */
  readonly projectId?: string;
}

export function gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsGeminiToTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsGemini | cdktf.IResolvable): any {
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


export function gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsGeminiToHclTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsGemini | cdktf.IResolvable): any {
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

export class GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsGeminiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsGemini | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsGemini | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsHuggingface {
  /**
  * Use the cache layer on the inference API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#use_cache GatewayPluginAiSemanticCache#use_cache}
  */
  readonly useCache?: boolean | cdktf.IResolvable;
  /**
  * Wait for the model if it is not ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#wait_for_model GatewayPluginAiSemanticCache#wait_for_model}
  */
  readonly waitForModel?: boolean | cdktf.IResolvable;
}

export function gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsHuggingfaceToTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsHuggingface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_cache: cdktf.booleanToTerraform(struct!.useCache),
    wait_for_model: cdktf.booleanToTerraform(struct!.waitForModel),
  }
}


export function gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsHuggingfaceToHclTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsHuggingface | cdktf.IResolvable): any {
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

export class GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsHuggingfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsHuggingface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsHuggingface | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#azure GatewayPluginAiSemanticCache#azure}
  */
  readonly azure?: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsAzure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#bedrock GatewayPluginAiSemanticCache#bedrock}
  */
  readonly bedrock?: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsBedrock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#gemini GatewayPluginAiSemanticCache#gemini}
  */
  readonly gemini?: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsGemini;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#huggingface GatewayPluginAiSemanticCache#huggingface}
  */
  readonly huggingface?: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsHuggingface;
  /**
  * upstream url for the embeddings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#upstream_url GatewayPluginAiSemanticCache#upstream_url}
  */
  readonly upstreamUrl?: string;
}

export function gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsToTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure: gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsAzureToTerraform(struct!.azure),
    bedrock: gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsBedrockToTerraform(struct!.bedrock),
    gemini: gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsGeminiToTerraform(struct!.gemini),
    huggingface: gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsHuggingfaceToTerraform(struct!.huggingface),
    upstream_url: cdktf.stringToTerraform(struct!.upstreamUrl),
  }
}


export function gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsToHclTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure: {
      value: gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsAzure",
    },
    bedrock: {
      value: gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsBedrockToHclTerraform(struct!.bedrock),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsBedrock",
    },
    gemini: {
      value: gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsGeminiToHclTerraform(struct!.gemini),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsGemini",
    },
    huggingface: {
      value: gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsHuggingfaceToHclTerraform(struct!.huggingface),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsHuggingface",
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

export class GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptions | cdktf.IResolvable | undefined) {
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
  private _azure = new GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsAzure) {
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
  private _bedrock = new GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsBedrockOutputReference(this, "bedrock");
  public get bedrock() {
    return this._bedrock;
  }
  public putBedrock(value: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsBedrock) {
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
  private _gemini = new GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsGeminiOutputReference(this, "gemini");
  public get gemini() {
    return this._gemini;
  }
  public putGemini(value: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsGemini) {
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
  private _huggingface = new GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsHuggingfaceOutputReference(this, "huggingface");
  public get huggingface() {
    return this._huggingface;
  }
  public putHuggingface(value: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsHuggingface) {
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
export interface GatewayPluginAiSemanticCacheConfigEmbeddingsModel {
  /**
  * Model name to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#name GatewayPluginAiSemanticCache#name}
  */
  readonly name: string;
  /**
  * Key/value settings for the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#options GatewayPluginAiSemanticCache#options}
  */
  readonly options?: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptions;
  /**
  * AI provider format to use for embeddings API. must be one of ["azure", "bedrock", "gemini", "huggingface", "mistral", "openai"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#provider GatewayPluginAiSemanticCache#provider}
  */
  readonly provider: string;
}

export function gatewayPluginAiSemanticCacheConfigEmbeddingsModelToTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddingsModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    options: gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsToTerraform(struct!.options),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}


export function gatewayPluginAiSemanticCacheConfigEmbeddingsModelToHclTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddingsModel | cdktf.IResolvable): any {
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
      value: gatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptions",
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

export class GatewayPluginAiSemanticCacheConfigEmbeddingsModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheConfigEmbeddingsModel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheConfigEmbeddingsModel | cdktf.IResolvable | undefined) {
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

  // options - computed: true, optional: true, required: false
  private _options = new GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: GatewayPluginAiSemanticCacheConfigEmbeddingsModelOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // provider - computed: false, optional: false, required: true
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
export interface GatewayPluginAiSemanticCacheConfigEmbeddings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#auth GatewayPluginAiSemanticCache#auth}
  */
  readonly auth?: GatewayPluginAiSemanticCacheConfigEmbeddingsAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#model GatewayPluginAiSemanticCache#model}
  */
  readonly model: GatewayPluginAiSemanticCacheConfigEmbeddingsModel;
}

export function gatewayPluginAiSemanticCacheConfigEmbeddingsToTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: gatewayPluginAiSemanticCacheConfigEmbeddingsAuthToTerraform(struct!.auth),
    model: gatewayPluginAiSemanticCacheConfigEmbeddingsModelToTerraform(struct!.model),
  }
}


export function gatewayPluginAiSemanticCacheConfigEmbeddingsToHclTerraform(struct?: GatewayPluginAiSemanticCacheConfigEmbeddings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: gatewayPluginAiSemanticCacheConfigEmbeddingsAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiSemanticCacheConfigEmbeddingsAuth",
    },
    model: {
      value: gatewayPluginAiSemanticCacheConfigEmbeddingsModelToHclTerraform(struct!.model),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiSemanticCacheConfigEmbeddingsModel",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiSemanticCacheConfigEmbeddingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheConfigEmbeddings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheConfigEmbeddings | cdktf.IResolvable | undefined) {
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
  private _auth = new GatewayPluginAiSemanticCacheConfigEmbeddingsAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: GatewayPluginAiSemanticCacheConfigEmbeddingsAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // model - computed: false, optional: false, required: true
  private _model = new GatewayPluginAiSemanticCacheConfigEmbeddingsModelOutputReference(this, "model");
  public get model() {
    return this._model;
  }
  public putModel(value: GatewayPluginAiSemanticCacheConfigEmbeddingsModel) {
    this._model.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }
}
export interface GatewayPluginAiSemanticCacheConfigVectordbPgvector {
  /**
  * the database of the pgvector database. Default: "kong-pgvector"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#database GatewayPluginAiSemanticCache#database}
  */
  readonly database?: string;
  /**
  * the host of the pgvector database. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#host GatewayPluginAiSemanticCache#host}
  */
  readonly host?: string;
  /**
  * the password of the pgvector database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#password GatewayPluginAiSemanticCache#password}
  */
  readonly password?: string;
  /**
  * the port of the pgvector database. Default: 5432
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#port GatewayPluginAiSemanticCache#port}
  */
  readonly port?: number;
  /**
  * whether to use ssl for the pgvector database. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#ssl GatewayPluginAiSemanticCache#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * the path of ssl cert to use for the pgvector database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#ssl_cert GatewayPluginAiSemanticCache#ssl_cert}
  */
  readonly sslCert?: string;
  /**
  * the path of ssl cert key to use for the pgvector database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#ssl_cert_key GatewayPluginAiSemanticCache#ssl_cert_key}
  */
  readonly sslCertKey?: string;
  /**
  * whether ssl is required for the pgvector database. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#ssl_required GatewayPluginAiSemanticCache#ssl_required}
  */
  readonly sslRequired?: boolean | cdktf.IResolvable;
  /**
  * whether to verify ssl for the pgvector database. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#ssl_verify GatewayPluginAiSemanticCache#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * the ssl version to use for the pgvector database. Default: "tlsv1_2"; must be one of ["any", "tlsv1_2", "tlsv1_3"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#ssl_version GatewayPluginAiSemanticCache#ssl_version}
  */
  readonly sslVersion?: string;
  /**
  * the timeout of the pgvector database. Default: 5000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#timeout GatewayPluginAiSemanticCache#timeout}
  */
  readonly timeout?: number;
  /**
  * the user of the pgvector database. Default: "postgres"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#user GatewayPluginAiSemanticCache#user}
  */
  readonly user?: string;
}

export function gatewayPluginAiSemanticCacheConfigVectordbPgvectorToTerraform(struct?: GatewayPluginAiSemanticCacheConfigVectordbPgvector | cdktf.IResolvable): any {
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


export function gatewayPluginAiSemanticCacheConfigVectordbPgvectorToHclTerraform(struct?: GatewayPluginAiSemanticCacheConfigVectordbPgvector | cdktf.IResolvable): any {
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

export class GatewayPluginAiSemanticCacheConfigVectordbPgvectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheConfigVectordbPgvector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheConfigVectordbPgvector | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#ip GatewayPluginAiSemanticCache#ip}
  */
  readonly ip?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#port GatewayPluginAiSemanticCache#port}
  */
  readonly port?: number;
}

export function gatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodesToTerraform(struct?: GatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodesToHclTerraform(struct?: GatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodes | cdktf.IResolvable): any {
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

export class GatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodes | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodesOutputReference {
    return new GatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#host GatewayPluginAiSemanticCache#host}
  */
  readonly host?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#port GatewayPluginAiSemanticCache#port}
  */
  readonly port?: number;
}

export function gatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodesToTerraform(struct?: GatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodesToHclTerraform(struct?: GatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodes | cdktf.IResolvable): any {
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

export class GatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodes | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodesOutputReference {
    return new GatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiSemanticCacheConfigVectordbRedis {
  /**
  * Maximum retry attempts for redirection. Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#cluster_max_redirections GatewayPluginAiSemanticCache#cluster_max_redirections}
  */
  readonly clusterMaxRedirections?: number;
  /**
  * Cluster addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Cluster. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#cluster_nodes GatewayPluginAiSemanticCache#cluster_nodes}
  */
  readonly clusterNodes?: GatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodes[] | cdktf.IResolvable;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#connect_timeout GatewayPluginAiSemanticCache#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * If the connection to Redis is proxied (e.g. Envoy), set it `true`. Set the `host` and `port` to point to the proxy address. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#connection_is_proxied GatewayPluginAiSemanticCache#connection_is_proxied}
  */
  readonly connectionIsProxied?: boolean | cdktf.IResolvable;
  /**
  * Database to use for the Redis connection when using the `redis` strategy. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#database GatewayPluginAiSemanticCache#database}
  */
  readonly database?: number;
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#host GatewayPluginAiSemanticCache#host}
  */
  readonly host?: string;
  /**
  * Limits the total number of opened connections for a pool. If the connection pool is full, connection queues above the limit go into the backlog queue. If the backlog queue is full, subsequent connect operations fail and return `nil`. Queued operations (subject to set timeouts) resume once the number of connections in the pool is less than `keepalive_pool_size`. If latency is high or throughput is low, try increasing this value. Empirically, this value is larger than `keepalive_pool_size`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#keepalive_backlog GatewayPluginAiSemanticCache#keepalive_backlog}
  */
  readonly keepaliveBacklog?: number;
  /**
  * The size limit for every cosocket connection pool associated with every remote server, per worker process. If neither `keepalive_pool_size` nor `keepalive_backlog` is specified, no pool is created. If `keepalive_pool_size` isn't specified but `keepalive_backlog` is specified, then the pool uses the default value. Try to increase (e.g. 512) this value if latency is high or throughput is low. Default: 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#keepalive_pool_size GatewayPluginAiSemanticCache#keepalive_pool_size}
  */
  readonly keepalivePoolSize?: number;
  /**
  * Password to use for Redis connections. If undefined, no AUTH commands are sent to Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#password GatewayPluginAiSemanticCache#password}
  */
  readonly password?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#port GatewayPluginAiSemanticCache#port}
  */
  readonly port?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#read_timeout GatewayPluginAiSemanticCache#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#send_timeout GatewayPluginAiSemanticCache#send_timeout}
  */
  readonly sendTimeout?: number;
  /**
  * Sentinel master to use for Redis connections. Defining this value implies using Redis Sentinel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#sentinel_master GatewayPluginAiSemanticCache#sentinel_master}
  */
  readonly sentinelMaster?: string;
  /**
  * Sentinel node addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Sentinel. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#sentinel_nodes GatewayPluginAiSemanticCache#sentinel_nodes}
  */
  readonly sentinelNodes?: GatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodes[] | cdktf.IResolvable;
  /**
  * Sentinel password to authenticate with a Redis Sentinel instance. If undefined, no AUTH commands are sent to Redis Sentinels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#sentinel_password GatewayPluginAiSemanticCache#sentinel_password}
  */
  readonly sentinelPassword?: string;
  /**
  * Sentinel role to use for Redis connections when the `redis` strategy is defined. Defining this value implies using Redis Sentinel. must be one of ["any", "master", "slave"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#sentinel_role GatewayPluginAiSemanticCache#sentinel_role}
  */
  readonly sentinelRole?: string;
  /**
  * Sentinel username to authenticate with a Redis Sentinel instance. If undefined, ACL authentication won't be performed. This requires Redis v6.2.0+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#sentinel_username GatewayPluginAiSemanticCache#sentinel_username}
  */
  readonly sentinelUsername?: string;
  /**
  * A string representing an SNI (server name indication) value for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#server_name GatewayPluginAiSemanticCache#server_name}
  */
  readonly serverName?: string;
  /**
  * If set to true, uses SSL to connect to Redis. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#ssl GatewayPluginAiSemanticCache#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * If set to true, verifies the validity of the server SSL certificate. If setting this parameter, also configure `lua_ssl_trusted_certificate` in `kong.conf` to specify the CA (or server) certificate used by your Redis server. You may also need to configure `lua_ssl_verify_depth` accordingly. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#ssl_verify GatewayPluginAiSemanticCache#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Username to use for Redis connections. If undefined, ACL authentication won't be performed. This requires Redis v6.0.0+. To be compatible with Redis v5.x.y, you can set it to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#username GatewayPluginAiSemanticCache#username}
  */
  readonly username?: string;
}

export function gatewayPluginAiSemanticCacheConfigVectordbRedisToTerraform(struct?: GatewayPluginAiSemanticCacheConfigVectordbRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_max_redirections: cdktf.numberToTerraform(struct!.clusterMaxRedirections),
    cluster_nodes: cdktf.listMapper(gatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodesToTerraform, false)(struct!.clusterNodes),
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
    sentinel_nodes: cdktf.listMapper(gatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodesToTerraform, false)(struct!.sentinelNodes),
    sentinel_password: cdktf.stringToTerraform(struct!.sentinelPassword),
    sentinel_role: cdktf.stringToTerraform(struct!.sentinelRole),
    sentinel_username: cdktf.stringToTerraform(struct!.sentinelUsername),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginAiSemanticCacheConfigVectordbRedisToHclTerraform(struct?: GatewayPluginAiSemanticCacheConfigVectordbRedis | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(gatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodesToHclTerraform, false)(struct!.clusterNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodesList",
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
      value: cdktf.listMapperHcl(gatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodesToHclTerraform, false)(struct!.sentinelNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodesList",
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

export class GatewayPluginAiSemanticCacheConfigVectordbRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheConfigVectordbRedis | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheConfigVectordbRedis | cdktf.IResolvable | undefined) {
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
  private _clusterNodes = new GatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodesList(this, "cluster_nodes", false);
  public get clusterNodes() {
    return this._clusterNodes;
  }
  public putClusterNodes(value: GatewayPluginAiSemanticCacheConfigVectordbRedisClusterNodes[] | cdktf.IResolvable) {
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
  private _sentinelNodes = new GatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodesList(this, "sentinel_nodes", false);
  public get sentinelNodes() {
    return this._sentinelNodes;
  }
  public putSentinelNodes(value: GatewayPluginAiSemanticCacheConfigVectordbRedisSentinelNodes[] | cdktf.IResolvable) {
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
export interface GatewayPluginAiSemanticCacheConfigVectordb {
  /**
  * the desired dimensionality for the vectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#dimensions GatewayPluginAiSemanticCache#dimensions}
  */
  readonly dimensions: number;
  /**
  * the distance metric to use for vector searches. must be one of ["cosine", "euclidean"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#distance_metric GatewayPluginAiSemanticCache#distance_metric}
  */
  readonly distanceMetric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#pgvector GatewayPluginAiSemanticCache#pgvector}
  */
  readonly pgvector?: GatewayPluginAiSemanticCacheConfigVectordbPgvector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#redis GatewayPluginAiSemanticCache#redis}
  */
  readonly redis?: GatewayPluginAiSemanticCacheConfigVectordbRedis;
  /**
  * which vector database driver to use. must be one of ["pgvector", "redis"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#strategy GatewayPluginAiSemanticCache#strategy}
  */
  readonly strategy: string;
  /**
  * the default similarity threshold for accepting semantic search results (float)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#threshold GatewayPluginAiSemanticCache#threshold}
  */
  readonly threshold: number;
}

export function gatewayPluginAiSemanticCacheConfigVectordbToTerraform(struct?: GatewayPluginAiSemanticCacheConfigVectordb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.numberToTerraform(struct!.dimensions),
    distance_metric: cdktf.stringToTerraform(struct!.distanceMetric),
    pgvector: gatewayPluginAiSemanticCacheConfigVectordbPgvectorToTerraform(struct!.pgvector),
    redis: gatewayPluginAiSemanticCacheConfigVectordbRedisToTerraform(struct!.redis),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function gatewayPluginAiSemanticCacheConfigVectordbToHclTerraform(struct?: GatewayPluginAiSemanticCacheConfigVectordb | cdktf.IResolvable): any {
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
      value: gatewayPluginAiSemanticCacheConfigVectordbPgvectorToHclTerraform(struct!.pgvector),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiSemanticCacheConfigVectordbPgvector",
    },
    redis: {
      value: gatewayPluginAiSemanticCacheConfigVectordbRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiSemanticCacheConfigVectordbRedis",
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

export class GatewayPluginAiSemanticCacheConfigVectordbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheConfigVectordb | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheConfigVectordb | cdktf.IResolvable | undefined) {
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

  // dimensions - computed: false, optional: false, required: true
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

  // distance_metric - computed: false, optional: false, required: true
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
  private _pgvector = new GatewayPluginAiSemanticCacheConfigVectordbPgvectorOutputReference(this, "pgvector");
  public get pgvector() {
    return this._pgvector;
  }
  public putPgvector(value: GatewayPluginAiSemanticCacheConfigVectordbPgvector) {
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
  private _redis = new GatewayPluginAiSemanticCacheConfigVectordbRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: GatewayPluginAiSemanticCacheConfigVectordbRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // strategy - computed: false, optional: false, required: true
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

  // threshold - computed: false, optional: false, required: true
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
export interface GatewayPluginAiSemanticCacheConfigA {
  /**
  * When enabled, respect the Cache-Control behaviors defined in RFC7234. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#cache_control GatewayPluginAiSemanticCache#cache_control}
  */
  readonly cacheControl?: boolean | cdktf.IResolvable;
  /**
  * TTL in seconds of cache entities. Must be a value greater than 0. Default: 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#cache_ttl GatewayPluginAiSemanticCache#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#embeddings GatewayPluginAiSemanticCache#embeddings}
  */
  readonly embeddings: GatewayPluginAiSemanticCacheConfigEmbeddings;
  /**
  * When enabled, a first check for exact query will be done. It will impact DB size. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#exact_caching GatewayPluginAiSemanticCache#exact_caching}
  */
  readonly exactCaching?: boolean | cdktf.IResolvable;
  /**
  * Ignore and discard any assistant prompts when Vectorizing the request. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#ignore_assistant_prompts GatewayPluginAiSemanticCache#ignore_assistant_prompts}
  */
  readonly ignoreAssistantPrompts?: boolean | cdktf.IResolvable;
  /**
  * Ignore and discard any system prompts when Vectorizing the request. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#ignore_system_prompts GatewayPluginAiSemanticCache#ignore_system_prompts}
  */
  readonly ignoreSystemPrompts?: boolean | cdktf.IResolvable;
  /**
  * Ignore and discard any tool prompts when Vectorizing the request. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#ignore_tool_prompts GatewayPluginAiSemanticCache#ignore_tool_prompts}
  */
  readonly ignoreToolPrompts?: boolean | cdktf.IResolvable;
  /**
  * LLM input and output format and schema to use. Default: "openai"; must be one of ["bedrock", "cohere", "gemini", "huggingface", "openai"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#llm_format GatewayPluginAiSemanticCache#llm_format}
  */
  readonly llmFormat?: string;
  /**
  * Number of messages in the chat history to Vectorize/Cache. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#message_countback GatewayPluginAiSemanticCache#message_countback}
  */
  readonly messageCountback?: number;
  /**
  * Halt the LLM request process in case of a caching system failure. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#stop_on_failure GatewayPluginAiSemanticCache#stop_on_failure}
  */
  readonly stopOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#vectordb GatewayPluginAiSemanticCache#vectordb}
  */
  readonly vectordb: GatewayPluginAiSemanticCacheConfigVectordb;
}

export function gatewayPluginAiSemanticCacheConfigAToTerraform(struct?: GatewayPluginAiSemanticCacheConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_control: cdktf.booleanToTerraform(struct!.cacheControl),
    cache_ttl: cdktf.numberToTerraform(struct!.cacheTtl),
    embeddings: gatewayPluginAiSemanticCacheConfigEmbeddingsToTerraform(struct!.embeddings),
    exact_caching: cdktf.booleanToTerraform(struct!.exactCaching),
    ignore_assistant_prompts: cdktf.booleanToTerraform(struct!.ignoreAssistantPrompts),
    ignore_system_prompts: cdktf.booleanToTerraform(struct!.ignoreSystemPrompts),
    ignore_tool_prompts: cdktf.booleanToTerraform(struct!.ignoreToolPrompts),
    llm_format: cdktf.stringToTerraform(struct!.llmFormat),
    message_countback: cdktf.numberToTerraform(struct!.messageCountback),
    stop_on_failure: cdktf.booleanToTerraform(struct!.stopOnFailure),
    vectordb: gatewayPluginAiSemanticCacheConfigVectordbToTerraform(struct!.vectordb),
  }
}


export function gatewayPluginAiSemanticCacheConfigAToHclTerraform(struct?: GatewayPluginAiSemanticCacheConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_control: {
      value: cdktf.booleanToHclTerraform(struct!.cacheControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    embeddings: {
      value: gatewayPluginAiSemanticCacheConfigEmbeddingsToHclTerraform(struct!.embeddings),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiSemanticCacheConfigEmbeddings",
    },
    exact_caching: {
      value: cdktf.booleanToHclTerraform(struct!.exactCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_assistant_prompts: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreAssistantPrompts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_system_prompts: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSystemPrompts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_tool_prompts: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreToolPrompts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    llm_format: {
      value: cdktf.stringToHclTerraform(struct!.llmFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_countback: {
      value: cdktf.numberToHclTerraform(struct!.messageCountback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stop_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.stopOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vectordb: {
      value: gatewayPluginAiSemanticCacheConfigVectordbToHclTerraform(struct!.vectordb),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiSemanticCacheConfigVectordb",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiSemanticCacheConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheControl = this._cacheControl;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._embeddings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddings = this._embeddings?.internalValue;
    }
    if (this._exactCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactCaching = this._exactCaching;
    }
    if (this._ignoreAssistantPrompts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreAssistantPrompts = this._ignoreAssistantPrompts;
    }
    if (this._ignoreSystemPrompts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSystemPrompts = this._ignoreSystemPrompts;
    }
    if (this._ignoreToolPrompts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreToolPrompts = this._ignoreToolPrompts;
    }
    if (this._llmFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmFormat = this._llmFormat;
    }
    if (this._messageCountback !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageCountback = this._messageCountback;
    }
    if (this._stopOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnFailure = this._stopOnFailure;
    }
    if (this._vectordb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectordb = this._vectordb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiSemanticCacheConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheControl = undefined;
      this._cacheTtl = undefined;
      this._embeddings.internalValue = undefined;
      this._exactCaching = undefined;
      this._ignoreAssistantPrompts = undefined;
      this._ignoreSystemPrompts = undefined;
      this._ignoreToolPrompts = undefined;
      this._llmFormat = undefined;
      this._messageCountback = undefined;
      this._stopOnFailure = undefined;
      this._vectordb.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheControl = value.cacheControl;
      this._cacheTtl = value.cacheTtl;
      this._embeddings.internalValue = value.embeddings;
      this._exactCaching = value.exactCaching;
      this._ignoreAssistantPrompts = value.ignoreAssistantPrompts;
      this._ignoreSystemPrompts = value.ignoreSystemPrompts;
      this._ignoreToolPrompts = value.ignoreToolPrompts;
      this._llmFormat = value.llmFormat;
      this._messageCountback = value.messageCountback;
      this._stopOnFailure = value.stopOnFailure;
      this._vectordb.internalValue = value.vectordb;
    }
  }

  // cache_control - computed: true, optional: true, required: false
  private _cacheControl?: boolean | cdktf.IResolvable; 
  public get cacheControl() {
    return this.getBooleanAttribute('cache_control');
  }
  public set cacheControl(value: boolean | cdktf.IResolvable) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl;
  }

  // cache_ttl - computed: true, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // embeddings - computed: false, optional: false, required: true
  private _embeddings = new GatewayPluginAiSemanticCacheConfigEmbeddingsOutputReference(this, "embeddings");
  public get embeddings() {
    return this._embeddings;
  }
  public putEmbeddings(value: GatewayPluginAiSemanticCacheConfigEmbeddings) {
    this._embeddings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingsInput() {
    return this._embeddings.internalValue;
  }

  // exact_caching - computed: true, optional: true, required: false
  private _exactCaching?: boolean | cdktf.IResolvable; 
  public get exactCaching() {
    return this.getBooleanAttribute('exact_caching');
  }
  public set exactCaching(value: boolean | cdktf.IResolvable) {
    this._exactCaching = value;
  }
  public resetExactCaching() {
    this._exactCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactCachingInput() {
    return this._exactCaching;
  }

  // ignore_assistant_prompts - computed: true, optional: true, required: false
  private _ignoreAssistantPrompts?: boolean | cdktf.IResolvable; 
  public get ignoreAssistantPrompts() {
    return this.getBooleanAttribute('ignore_assistant_prompts');
  }
  public set ignoreAssistantPrompts(value: boolean | cdktf.IResolvable) {
    this._ignoreAssistantPrompts = value;
  }
  public resetIgnoreAssistantPrompts() {
    this._ignoreAssistantPrompts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAssistantPromptsInput() {
    return this._ignoreAssistantPrompts;
  }

  // ignore_system_prompts - computed: true, optional: true, required: false
  private _ignoreSystemPrompts?: boolean | cdktf.IResolvable; 
  public get ignoreSystemPrompts() {
    return this.getBooleanAttribute('ignore_system_prompts');
  }
  public set ignoreSystemPrompts(value: boolean | cdktf.IResolvable) {
    this._ignoreSystemPrompts = value;
  }
  public resetIgnoreSystemPrompts() {
    this._ignoreSystemPrompts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSystemPromptsInput() {
    return this._ignoreSystemPrompts;
  }

  // ignore_tool_prompts - computed: true, optional: true, required: false
  private _ignoreToolPrompts?: boolean | cdktf.IResolvable; 
  public get ignoreToolPrompts() {
    return this.getBooleanAttribute('ignore_tool_prompts');
  }
  public set ignoreToolPrompts(value: boolean | cdktf.IResolvable) {
    this._ignoreToolPrompts = value;
  }
  public resetIgnoreToolPrompts() {
    this._ignoreToolPrompts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreToolPromptsInput() {
    return this._ignoreToolPrompts;
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

  // message_countback - computed: true, optional: true, required: false
  private _messageCountback?: number; 
  public get messageCountback() {
    return this.getNumberAttribute('message_countback');
  }
  public set messageCountback(value: number) {
    this._messageCountback = value;
  }
  public resetMessageCountback() {
    this._messageCountback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageCountbackInput() {
    return this._messageCountback;
  }

  // stop_on_failure - computed: true, optional: true, required: false
  private _stopOnFailure?: boolean | cdktf.IResolvable; 
  public get stopOnFailure() {
    return this.getBooleanAttribute('stop_on_failure');
  }
  public set stopOnFailure(value: boolean | cdktf.IResolvable) {
    this._stopOnFailure = value;
  }
  public resetStopOnFailure() {
    this._stopOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnFailureInput() {
    return this._stopOnFailure;
  }

  // vectordb - computed: false, optional: false, required: true
  private _vectordb = new GatewayPluginAiSemanticCacheConfigVectordbOutputReference(this, "vectordb");
  public get vectordb() {
    return this._vectordb;
  }
  public putVectordb(value: GatewayPluginAiSemanticCacheConfigVectordb) {
    this._vectordb.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectordbInput() {
    return this._vectordb.internalValue;
  }
}
export interface GatewayPluginAiSemanticCacheConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#id GatewayPluginAiSemanticCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiSemanticCacheConsumerToTerraform(struct?: GatewayPluginAiSemanticCacheConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiSemanticCacheConsumerToHclTerraform(struct?: GatewayPluginAiSemanticCacheConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginAiSemanticCacheConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiSemanticCacheConsumerGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#id GatewayPluginAiSemanticCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiSemanticCacheConsumerGroupToTerraform(struct?: GatewayPluginAiSemanticCacheConsumerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiSemanticCacheConsumerGroupToHclTerraform(struct?: GatewayPluginAiSemanticCacheConsumerGroup | cdktf.IResolvable): any {
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

export class GatewayPluginAiSemanticCacheConsumerGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheConsumerGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheConsumerGroup | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiSemanticCacheOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#access GatewayPluginAiSemanticCache#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiSemanticCacheOrderingAfterToTerraform(struct?: GatewayPluginAiSemanticCacheOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiSemanticCacheOrderingAfterToHclTerraform(struct?: GatewayPluginAiSemanticCacheOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginAiSemanticCacheOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiSemanticCacheOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#access GatewayPluginAiSemanticCache#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiSemanticCacheOrderingBeforeToTerraform(struct?: GatewayPluginAiSemanticCacheOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiSemanticCacheOrderingBeforeToHclTerraform(struct?: GatewayPluginAiSemanticCacheOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginAiSemanticCacheOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiSemanticCacheOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#after GatewayPluginAiSemanticCache#after}
  */
  readonly after?: GatewayPluginAiSemanticCacheOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#before GatewayPluginAiSemanticCache#before}
  */
  readonly before?: GatewayPluginAiSemanticCacheOrderingBefore;
}

export function gatewayPluginAiSemanticCacheOrderingToTerraform(struct?: GatewayPluginAiSemanticCacheOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginAiSemanticCacheOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginAiSemanticCacheOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginAiSemanticCacheOrderingToHclTerraform(struct?: GatewayPluginAiSemanticCacheOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginAiSemanticCacheOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiSemanticCacheOrderingAfter",
    },
    before: {
      value: gatewayPluginAiSemanticCacheOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiSemanticCacheOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiSemanticCacheOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginAiSemanticCacheOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginAiSemanticCacheOrderingAfter) {
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
  private _before = new GatewayPluginAiSemanticCacheOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginAiSemanticCacheOrderingBefore) {
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
export interface GatewayPluginAiSemanticCachePartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#id GatewayPluginAiSemanticCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#name GatewayPluginAiSemanticCache#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#path GatewayPluginAiSemanticCache#path}
  */
  readonly path?: string;
}

export function gatewayPluginAiSemanticCachePartialsToTerraform(struct?: GatewayPluginAiSemanticCachePartials | cdktf.IResolvable): any {
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


export function gatewayPluginAiSemanticCachePartialsToHclTerraform(struct?: GatewayPluginAiSemanticCachePartials | cdktf.IResolvable): any {
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

export class GatewayPluginAiSemanticCachePartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiSemanticCachePartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCachePartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAiSemanticCachePartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiSemanticCachePartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiSemanticCachePartialsOutputReference {
    return new GatewayPluginAiSemanticCachePartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiSemanticCacheRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#id GatewayPluginAiSemanticCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiSemanticCacheRouteToTerraform(struct?: GatewayPluginAiSemanticCacheRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiSemanticCacheRouteToHclTerraform(struct?: GatewayPluginAiSemanticCacheRoute | cdktf.IResolvable): any {
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

export class GatewayPluginAiSemanticCacheRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiSemanticCacheService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#id GatewayPluginAiSemanticCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiSemanticCacheServiceToTerraform(struct?: GatewayPluginAiSemanticCacheService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiSemanticCacheServiceToHclTerraform(struct?: GatewayPluginAiSemanticCacheService | cdktf.IResolvable): any {
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

export class GatewayPluginAiSemanticCacheServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiSemanticCacheService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiSemanticCacheService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache konnect_gateway_plugin_ai_semantic_cache}
*/
export class GatewayPluginAiSemanticCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_ai_semantic_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginAiSemanticCache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginAiSemanticCache to import
  * @param importFromId The id of the existing GatewayPluginAiSemanticCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginAiSemanticCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_ai_semantic_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_semantic_cache konnect_gateway_plugin_ai_semantic_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginAiSemanticCacheConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginAiSemanticCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_ai_semantic_cache',
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
  private _config = new GatewayPluginAiSemanticCacheConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginAiSemanticCacheConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginAiSemanticCacheConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginAiSemanticCacheConsumer) {
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
  private _consumerGroup = new GatewayPluginAiSemanticCacheConsumerGroupOutputReference(this, "consumer_group");
  public get consumerGroup() {
    return this._consumerGroup;
  }
  public putConsumerGroup(value: GatewayPluginAiSemanticCacheConsumerGroup) {
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
  private _ordering = new GatewayPluginAiSemanticCacheOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginAiSemanticCacheOrdering) {
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
  private _partials = new GatewayPluginAiSemanticCachePartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginAiSemanticCachePartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginAiSemanticCacheRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginAiSemanticCacheRoute) {
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
  private _service = new GatewayPluginAiSemanticCacheServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginAiSemanticCacheService) {
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
      config: gatewayPluginAiSemanticCacheConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginAiSemanticCacheConsumerToTerraform(this._consumer.internalValue),
      consumer_group: gatewayPluginAiSemanticCacheConsumerGroupToTerraform(this._consumerGroup.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginAiSemanticCacheOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginAiSemanticCachePartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginAiSemanticCacheRouteToTerraform(this._route.internalValue),
      service: gatewayPluginAiSemanticCacheServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginAiSemanticCacheConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiSemanticCacheConfigA",
      },
      consumer: {
        value: gatewayPluginAiSemanticCacheConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiSemanticCacheConsumer",
      },
      consumer_group: {
        value: gatewayPluginAiSemanticCacheConsumerGroupToHclTerraform(this._consumerGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiSemanticCacheConsumerGroup",
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
        value: gatewayPluginAiSemanticCacheOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiSemanticCacheOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginAiSemanticCachePartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginAiSemanticCachePartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginAiSemanticCacheRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiSemanticCacheRoute",
      },
      service: {
        value: gatewayPluginAiSemanticCacheServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiSemanticCacheService",
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
