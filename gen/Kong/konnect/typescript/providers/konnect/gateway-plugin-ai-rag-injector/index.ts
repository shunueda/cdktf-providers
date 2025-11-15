// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginAiRagInjectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#config GatewayPluginAiRagInjector#config}
  */
  readonly config: GatewayPluginAiRagInjectorConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#consumer GatewayPluginAiRagInjector#consumer}
  */
  readonly consumer?: GatewayPluginAiRagInjectorConsumer;
  /**
  * If set, the plugin will activate only for requests where the specified consumer group has been authenticated. (Note that some plugins can not be restricted to consumers groups this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#consumer_group GatewayPluginAiRagInjector#consumer_group}
  */
  readonly consumerGroup?: GatewayPluginAiRagInjectorConsumerGroup;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#control_plane_id GatewayPluginAiRagInjector#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#created_at GatewayPluginAiRagInjector#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#enabled GatewayPluginAiRagInjector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#id GatewayPluginAiRagInjector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#instance_name GatewayPluginAiRagInjector#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#ordering GatewayPluginAiRagInjector#ordering}
  */
  readonly ordering?: GatewayPluginAiRagInjectorOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#partials GatewayPluginAiRagInjector#partials}
  */
  readonly partials?: GatewayPluginAiRagInjectorPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#protocols GatewayPluginAiRagInjector#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#route GatewayPluginAiRagInjector#route}
  */
  readonly route?: GatewayPluginAiRagInjectorRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#service GatewayPluginAiRagInjector#service}
  */
  readonly service?: GatewayPluginAiRagInjectorService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#tags GatewayPluginAiRagInjector#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#updated_at GatewayPluginAiRagInjector#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginAiRagInjectorConfigEmbeddingsAuth {
  /**
  * If enabled, the authorization header or parameter can be overridden in the request by the value configured in the plugin. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#allow_override GatewayPluginAiRagInjector#allow_override}
  */
  readonly allowOverride?: boolean | cdktf.IResolvable;
  /**
  * Set this if you are using an AWS provider (Bedrock) and you are authenticating using static IAM User credentials. Setting this will override the AWS_ACCESS_KEY_ID environment variable for this plugin instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#aws_access_key_id GatewayPluginAiRagInjector#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Set this if you are using an AWS provider (Bedrock) and you are authenticating using static IAM User credentials. Setting this will override the AWS_SECRET_ACCESS_KEY environment variable for this plugin instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#aws_secret_access_key GatewayPluginAiRagInjector#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#azure_client_id GatewayPluginAiRagInjector#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#azure_client_secret GatewayPluginAiRagInjector#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#azure_tenant_id GatewayPluginAiRagInjector#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Set true to use the Azure Cloud Managed Identity (or user-assigned identity) to authenticate with Azure-provider models. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#azure_use_managed_identity GatewayPluginAiRagInjector#azure_use_managed_identity}
  */
  readonly azureUseManagedIdentity?: boolean | cdktf.IResolvable;
  /**
  * Set this field to the full JSON of the GCP service account to authenticate, if required. If null (and gcp_use_service_account is true), Kong will attempt to read from environment variable `GCP_SERVICE_ACCOUNT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#gcp_service_account_json GatewayPluginAiRagInjector#gcp_service_account_json}
  */
  readonly gcpServiceAccountJson?: string;
  /**
  * Use service account auth for GCP-based providers and models. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#gcp_use_service_account GatewayPluginAiRagInjector#gcp_use_service_account}
  */
  readonly gcpUseServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * If AI model requires authentication via Authorization or API key header, specify its name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#header_name GatewayPluginAiRagInjector#header_name}
  */
  readonly headerName?: string;
  /**
  * Specify the full auth header value for 'header_name', for example 'Bearer key' or just 'key'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#header_value GatewayPluginAiRagInjector#header_value}
  */
  readonly headerValue?: string;
  /**
  * Specify whether the 'param_name' and 'param_value' options go in a query string, or the POST form/JSON body. must be one of ["body", "query"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#param_location GatewayPluginAiRagInjector#param_location}
  */
  readonly paramLocation?: string;
  /**
  * If AI model requires authentication via query parameter, specify its name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#param_name GatewayPluginAiRagInjector#param_name}
  */
  readonly paramName?: string;
  /**
  * Specify the full parameter value for 'param_name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#param_value GatewayPluginAiRagInjector#param_value}
  */
  readonly paramValue?: string;
}

export function gatewayPluginAiRagInjectorConfigEmbeddingsAuthToTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddingsAuth | cdktf.IResolvable): any {
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


export function gatewayPluginAiRagInjectorConfigEmbeddingsAuthToHclTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddingsAuth | cdktf.IResolvable): any {
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

export class GatewayPluginAiRagInjectorConfigEmbeddingsAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorConfigEmbeddingsAuth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorConfigEmbeddingsAuth | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsAzure {
  /**
  * 'api-version' for Azure OpenAI instances. Default: "2023-05-15"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#api_version GatewayPluginAiRagInjector#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Deployment ID for Azure OpenAI instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#deployment_id GatewayPluginAiRagInjector#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Instance name for Azure OpenAI hosted models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#instance GatewayPluginAiRagInjector#instance}
  */
  readonly instance?: string;
}

export function gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsAzureToTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsAzure | cdktf.IResolvable): any {
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


export function gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsAzureToHclTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsAzure | cdktf.IResolvable): any {
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

export class GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsAzure | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsBedrock {
  /**
  * If using AWS providers (Bedrock) you can assume a different role after authentication with the current IAM context is successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#aws_assume_role_arn GatewayPluginAiRagInjector#aws_assume_role_arn}
  */
  readonly awsAssumeRoleArn?: string;
  /**
  * If using AWS providers (Bedrock) you can override the `AWS_REGION` environment variable by setting this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#aws_region GatewayPluginAiRagInjector#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * If using AWS providers (Bedrock), set the identifier of the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#aws_role_session_name GatewayPluginAiRagInjector#aws_role_session_name}
  */
  readonly awsRoleSessionName?: string;
  /**
  * If using AWS providers (Bedrock), override the STS endpoint URL when assuming a different role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#aws_sts_endpoint_url GatewayPluginAiRagInjector#aws_sts_endpoint_url}
  */
  readonly awsStsEndpointUrl?: string;
  /**
  * If using AWS providers (Bedrock), set to true to normalize the embeddings. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#embeddings_normalize GatewayPluginAiRagInjector#embeddings_normalize}
  */
  readonly embeddingsNormalize?: boolean | cdktf.IResolvable;
  /**
  * Force the client's performance configuration 'latency' for all requests. Leave empty to let the consumer select the performance configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#performance_config_latency GatewayPluginAiRagInjector#performance_config_latency}
  */
  readonly performanceConfigLatency?: string;
}

export function gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsBedrockToTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsBedrock | cdktf.IResolvable): any {
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


export function gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsBedrockToHclTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsBedrock | cdktf.IResolvable): any {
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

export class GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsBedrockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsBedrock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsBedrock | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsGemini {
  /**
  * If running Gemini on Vertex, specify the regional API endpoint (hostname only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#api_endpoint GatewayPluginAiRagInjector#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * If running Gemini on Vertex, specify the location ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#location_id GatewayPluginAiRagInjector#location_id}
  */
  readonly locationId?: string;
  /**
  * If running Gemini on Vertex, specify the project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#project_id GatewayPluginAiRagInjector#project_id}
  */
  readonly projectId?: string;
}

export function gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsGeminiToTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsGemini | cdktf.IResolvable): any {
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


export function gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsGeminiToHclTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsGemini | cdktf.IResolvable): any {
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

export class GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsGeminiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsGemini | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsGemini | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsHuggingface {
  /**
  * Use the cache layer on the inference API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#use_cache GatewayPluginAiRagInjector#use_cache}
  */
  readonly useCache?: boolean | cdktf.IResolvable;
  /**
  * Wait for the model if it is not ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#wait_for_model GatewayPluginAiRagInjector#wait_for_model}
  */
  readonly waitForModel?: boolean | cdktf.IResolvable;
}

export function gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsHuggingfaceToTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsHuggingface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_cache: cdktf.booleanToTerraform(struct!.useCache),
    wait_for_model: cdktf.booleanToTerraform(struct!.waitForModel),
  }
}


export function gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsHuggingfaceToHclTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsHuggingface | cdktf.IResolvable): any {
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

export class GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsHuggingfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsHuggingface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsHuggingface | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRagInjectorConfigEmbeddingsModelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#azure GatewayPluginAiRagInjector#azure}
  */
  readonly azure?: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsAzure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#bedrock GatewayPluginAiRagInjector#bedrock}
  */
  readonly bedrock?: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsBedrock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#gemini GatewayPluginAiRagInjector#gemini}
  */
  readonly gemini?: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsGemini;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#huggingface GatewayPluginAiRagInjector#huggingface}
  */
  readonly huggingface?: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsHuggingface;
  /**
  * upstream url for the embeddings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#upstream_url GatewayPluginAiRagInjector#upstream_url}
  */
  readonly upstreamUrl?: string;
}

export function gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsToTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure: gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsAzureToTerraform(struct!.azure),
    bedrock: gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsBedrockToTerraform(struct!.bedrock),
    gemini: gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsGeminiToTerraform(struct!.gemini),
    huggingface: gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsHuggingfaceToTerraform(struct!.huggingface),
    upstream_url: cdktf.stringToTerraform(struct!.upstreamUrl),
  }
}


export function gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsToHclTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure: {
      value: gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsAzure",
    },
    bedrock: {
      value: gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsBedrockToHclTerraform(struct!.bedrock),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsBedrock",
    },
    gemini: {
      value: gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsGeminiToHclTerraform(struct!.gemini),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsGemini",
    },
    huggingface: {
      value: gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsHuggingfaceToHclTerraform(struct!.huggingface),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsHuggingface",
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

export class GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorConfigEmbeddingsModelOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptions | cdktf.IResolvable | undefined) {
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
  private _azure = new GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsAzure) {
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
  private _bedrock = new GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsBedrockOutputReference(this, "bedrock");
  public get bedrock() {
    return this._bedrock;
  }
  public putBedrock(value: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsBedrock) {
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
  private _gemini = new GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsGeminiOutputReference(this, "gemini");
  public get gemini() {
    return this._gemini;
  }
  public putGemini(value: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsGemini) {
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
  private _huggingface = new GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsHuggingfaceOutputReference(this, "huggingface");
  public get huggingface() {
    return this._huggingface;
  }
  public putHuggingface(value: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsHuggingface) {
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
export interface GatewayPluginAiRagInjectorConfigEmbeddingsModel {
  /**
  * Model name to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#name GatewayPluginAiRagInjector#name}
  */
  readonly name: string;
  /**
  * Key/value settings for the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#options GatewayPluginAiRagInjector#options}
  */
  readonly options?: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptions;
  /**
  * AI provider format to use for embeddings API. must be one of ["azure", "bedrock", "gemini", "huggingface", "mistral", "openai"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#provider GatewayPluginAiRagInjector#provider}
  */
  readonly provider: string;
}

export function gatewayPluginAiRagInjectorConfigEmbeddingsModelToTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddingsModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    options: gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsToTerraform(struct!.options),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}


export function gatewayPluginAiRagInjectorConfigEmbeddingsModelToHclTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddingsModel | cdktf.IResolvable): any {
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
      value: gatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRagInjectorConfigEmbeddingsModelOptions",
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

export class GatewayPluginAiRagInjectorConfigEmbeddingsModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorConfigEmbeddingsModel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorConfigEmbeddingsModel | cdktf.IResolvable | undefined) {
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
  private _options = new GatewayPluginAiRagInjectorConfigEmbeddingsModelOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: GatewayPluginAiRagInjectorConfigEmbeddingsModelOptions) {
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
export interface GatewayPluginAiRagInjectorConfigEmbeddings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#auth GatewayPluginAiRagInjector#auth}
  */
  readonly auth?: GatewayPluginAiRagInjectorConfigEmbeddingsAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#model GatewayPluginAiRagInjector#model}
  */
  readonly model: GatewayPluginAiRagInjectorConfigEmbeddingsModel;
}

export function gatewayPluginAiRagInjectorConfigEmbeddingsToTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: gatewayPluginAiRagInjectorConfigEmbeddingsAuthToTerraform(struct!.auth),
    model: gatewayPluginAiRagInjectorConfigEmbeddingsModelToTerraform(struct!.model),
  }
}


export function gatewayPluginAiRagInjectorConfigEmbeddingsToHclTerraform(struct?: GatewayPluginAiRagInjectorConfigEmbeddings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: gatewayPluginAiRagInjectorConfigEmbeddingsAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRagInjectorConfigEmbeddingsAuth",
    },
    model: {
      value: gatewayPluginAiRagInjectorConfigEmbeddingsModelToHclTerraform(struct!.model),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRagInjectorConfigEmbeddingsModel",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiRagInjectorConfigEmbeddingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorConfigEmbeddings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorConfigEmbeddings | cdktf.IResolvable | undefined) {
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
  private _auth = new GatewayPluginAiRagInjectorConfigEmbeddingsAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: GatewayPluginAiRagInjectorConfigEmbeddingsAuth) {
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
  private _model = new GatewayPluginAiRagInjectorConfigEmbeddingsModelOutputReference(this, "model");
  public get model() {
    return this._model;
  }
  public putModel(value: GatewayPluginAiRagInjectorConfigEmbeddingsModel) {
    this._model.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }
}
export interface GatewayPluginAiRagInjectorConfigVectordbPgvector {
  /**
  * the database of the pgvector database. Default: "kong-pgvector"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#database GatewayPluginAiRagInjector#database}
  */
  readonly database?: string;
  /**
  * the host of the pgvector database. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#host GatewayPluginAiRagInjector#host}
  */
  readonly host?: string;
  /**
  * the password of the pgvector database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#password GatewayPluginAiRagInjector#password}
  */
  readonly password?: string;
  /**
  * the port of the pgvector database. Default: 5432
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#port GatewayPluginAiRagInjector#port}
  */
  readonly port?: number;
  /**
  * whether to use ssl for the pgvector database. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#ssl GatewayPluginAiRagInjector#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * the path of ssl cert to use for the pgvector database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#ssl_cert GatewayPluginAiRagInjector#ssl_cert}
  */
  readonly sslCert?: string;
  /**
  * the path of ssl cert key to use for the pgvector database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#ssl_cert_key GatewayPluginAiRagInjector#ssl_cert_key}
  */
  readonly sslCertKey?: string;
  /**
  * whether ssl is required for the pgvector database. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#ssl_required GatewayPluginAiRagInjector#ssl_required}
  */
  readonly sslRequired?: boolean | cdktf.IResolvable;
  /**
  * whether to verify ssl for the pgvector database. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#ssl_verify GatewayPluginAiRagInjector#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * the ssl version to use for the pgvector database. Default: "tlsv1_2"; must be one of ["any", "tlsv1_2", "tlsv1_3"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#ssl_version GatewayPluginAiRagInjector#ssl_version}
  */
  readonly sslVersion?: string;
  /**
  * the timeout of the pgvector database. Default: 5000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#timeout GatewayPluginAiRagInjector#timeout}
  */
  readonly timeout?: number;
  /**
  * the user of the pgvector database. Default: "postgres"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#user GatewayPluginAiRagInjector#user}
  */
  readonly user?: string;
}

export function gatewayPluginAiRagInjectorConfigVectordbPgvectorToTerraform(struct?: GatewayPluginAiRagInjectorConfigVectordbPgvector | cdktf.IResolvable): any {
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


export function gatewayPluginAiRagInjectorConfigVectordbPgvectorToHclTerraform(struct?: GatewayPluginAiRagInjectorConfigVectordbPgvector | cdktf.IResolvable): any {
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

export class GatewayPluginAiRagInjectorConfigVectordbPgvectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorConfigVectordbPgvector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorConfigVectordbPgvector | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRagInjectorConfigVectordbRedisClusterNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#ip GatewayPluginAiRagInjector#ip}
  */
  readonly ip?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#port GatewayPluginAiRagInjector#port}
  */
  readonly port?: number;
}

export function gatewayPluginAiRagInjectorConfigVectordbRedisClusterNodesToTerraform(struct?: GatewayPluginAiRagInjectorConfigVectordbRedisClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginAiRagInjectorConfigVectordbRedisClusterNodesToHclTerraform(struct?: GatewayPluginAiRagInjectorConfigVectordbRedisClusterNodes | cdktf.IResolvable): any {
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

export class GatewayPluginAiRagInjectorConfigVectordbRedisClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiRagInjectorConfigVectordbRedisClusterNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorConfigVectordbRedisClusterNodes | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAiRagInjectorConfigVectordbRedisClusterNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiRagInjectorConfigVectordbRedisClusterNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiRagInjectorConfigVectordbRedisClusterNodesOutputReference {
    return new GatewayPluginAiRagInjectorConfigVectordbRedisClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#host GatewayPluginAiRagInjector#host}
  */
  readonly host?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#port GatewayPluginAiRagInjector#port}
  */
  readonly port?: number;
}

export function gatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodesToTerraform(struct?: GatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodesToHclTerraform(struct?: GatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodes | cdktf.IResolvable): any {
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

export class GatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodes | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodesOutputReference {
    return new GatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiRagInjectorConfigVectordbRedis {
  /**
  * Maximum retry attempts for redirection. Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#cluster_max_redirections GatewayPluginAiRagInjector#cluster_max_redirections}
  */
  readonly clusterMaxRedirections?: number;
  /**
  * Cluster addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Cluster. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#cluster_nodes GatewayPluginAiRagInjector#cluster_nodes}
  */
  readonly clusterNodes?: GatewayPluginAiRagInjectorConfigVectordbRedisClusterNodes[] | cdktf.IResolvable;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#connect_timeout GatewayPluginAiRagInjector#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * If the connection to Redis is proxied (e.g. Envoy), set it `true`. Set the `host` and `port` to point to the proxy address. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#connection_is_proxied GatewayPluginAiRagInjector#connection_is_proxied}
  */
  readonly connectionIsProxied?: boolean | cdktf.IResolvable;
  /**
  * Database to use for the Redis connection when using the `redis` strategy. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#database GatewayPluginAiRagInjector#database}
  */
  readonly database?: number;
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#host GatewayPluginAiRagInjector#host}
  */
  readonly host?: string;
  /**
  * Limits the total number of opened connections for a pool. If the connection pool is full, connection queues above the limit go into the backlog queue. If the backlog queue is full, subsequent connect operations fail and return `nil`. Queued operations (subject to set timeouts) resume once the number of connections in the pool is less than `keepalive_pool_size`. If latency is high or throughput is low, try increasing this value. Empirically, this value is larger than `keepalive_pool_size`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#keepalive_backlog GatewayPluginAiRagInjector#keepalive_backlog}
  */
  readonly keepaliveBacklog?: number;
  /**
  * The size limit for every cosocket connection pool associated with every remote server, per worker process. If neither `keepalive_pool_size` nor `keepalive_backlog` is specified, no pool is created. If `keepalive_pool_size` isn't specified but `keepalive_backlog` is specified, then the pool uses the default value. Try to increase (e.g. 512) this value if latency is high or throughput is low. Default: 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#keepalive_pool_size GatewayPluginAiRagInjector#keepalive_pool_size}
  */
  readonly keepalivePoolSize?: number;
  /**
  * Password to use for Redis connections. If undefined, no AUTH commands are sent to Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#password GatewayPluginAiRagInjector#password}
  */
  readonly password?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#port GatewayPluginAiRagInjector#port}
  */
  readonly port?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#read_timeout GatewayPluginAiRagInjector#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#send_timeout GatewayPluginAiRagInjector#send_timeout}
  */
  readonly sendTimeout?: number;
  /**
  * Sentinel master to use for Redis connections. Defining this value implies using Redis Sentinel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#sentinel_master GatewayPluginAiRagInjector#sentinel_master}
  */
  readonly sentinelMaster?: string;
  /**
  * Sentinel node addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Sentinel. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#sentinel_nodes GatewayPluginAiRagInjector#sentinel_nodes}
  */
  readonly sentinelNodes?: GatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodes[] | cdktf.IResolvable;
  /**
  * Sentinel password to authenticate with a Redis Sentinel instance. If undefined, no AUTH commands are sent to Redis Sentinels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#sentinel_password GatewayPluginAiRagInjector#sentinel_password}
  */
  readonly sentinelPassword?: string;
  /**
  * Sentinel role to use for Redis connections when the `redis` strategy is defined. Defining this value implies using Redis Sentinel. must be one of ["any", "master", "slave"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#sentinel_role GatewayPluginAiRagInjector#sentinel_role}
  */
  readonly sentinelRole?: string;
  /**
  * Sentinel username to authenticate with a Redis Sentinel instance. If undefined, ACL authentication won't be performed. This requires Redis v6.2.0+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#sentinel_username GatewayPluginAiRagInjector#sentinel_username}
  */
  readonly sentinelUsername?: string;
  /**
  * A string representing an SNI (server name indication) value for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#server_name GatewayPluginAiRagInjector#server_name}
  */
  readonly serverName?: string;
  /**
  * If set to true, uses SSL to connect to Redis. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#ssl GatewayPluginAiRagInjector#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * If set to true, verifies the validity of the server SSL certificate. If setting this parameter, also configure `lua_ssl_trusted_certificate` in `kong.conf` to specify the CA (or server) certificate used by your Redis server. You may also need to configure `lua_ssl_verify_depth` accordingly. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#ssl_verify GatewayPluginAiRagInjector#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Username to use for Redis connections. If undefined, ACL authentication won't be performed. This requires Redis v6.0.0+. To be compatible with Redis v5.x.y, you can set it to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#username GatewayPluginAiRagInjector#username}
  */
  readonly username?: string;
}

export function gatewayPluginAiRagInjectorConfigVectordbRedisToTerraform(struct?: GatewayPluginAiRagInjectorConfigVectordbRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_max_redirections: cdktf.numberToTerraform(struct!.clusterMaxRedirections),
    cluster_nodes: cdktf.listMapper(gatewayPluginAiRagInjectorConfigVectordbRedisClusterNodesToTerraform, false)(struct!.clusterNodes),
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
    sentinel_nodes: cdktf.listMapper(gatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodesToTerraform, false)(struct!.sentinelNodes),
    sentinel_password: cdktf.stringToTerraform(struct!.sentinelPassword),
    sentinel_role: cdktf.stringToTerraform(struct!.sentinelRole),
    sentinel_username: cdktf.stringToTerraform(struct!.sentinelUsername),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginAiRagInjectorConfigVectordbRedisToHclTerraform(struct?: GatewayPluginAiRagInjectorConfigVectordbRedis | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(gatewayPluginAiRagInjectorConfigVectordbRedisClusterNodesToHclTerraform, false)(struct!.clusterNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginAiRagInjectorConfigVectordbRedisClusterNodesList",
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
      value: cdktf.listMapperHcl(gatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodesToHclTerraform, false)(struct!.sentinelNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodesList",
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

export class GatewayPluginAiRagInjectorConfigVectordbRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorConfigVectordbRedis | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorConfigVectordbRedis | cdktf.IResolvable | undefined) {
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
  private _clusterNodes = new GatewayPluginAiRagInjectorConfigVectordbRedisClusterNodesList(this, "cluster_nodes", false);
  public get clusterNodes() {
    return this._clusterNodes;
  }
  public putClusterNodes(value: GatewayPluginAiRagInjectorConfigVectordbRedisClusterNodes[] | cdktf.IResolvable) {
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
  private _sentinelNodes = new GatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodesList(this, "sentinel_nodes", false);
  public get sentinelNodes() {
    return this._sentinelNodes;
  }
  public putSentinelNodes(value: GatewayPluginAiRagInjectorConfigVectordbRedisSentinelNodes[] | cdktf.IResolvable) {
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
export interface GatewayPluginAiRagInjectorConfigVectordb {
  /**
  * the desired dimensionality for the vectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#dimensions GatewayPluginAiRagInjector#dimensions}
  */
  readonly dimensions: number;
  /**
  * the distance metric to use for vector searches. must be one of ["cosine", "euclidean"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#distance_metric GatewayPluginAiRagInjector#distance_metric}
  */
  readonly distanceMetric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#pgvector GatewayPluginAiRagInjector#pgvector}
  */
  readonly pgvector?: GatewayPluginAiRagInjectorConfigVectordbPgvector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#redis GatewayPluginAiRagInjector#redis}
  */
  readonly redis?: GatewayPluginAiRagInjectorConfigVectordbRedis;
  /**
  * which vector database driver to use. must be one of ["pgvector", "redis"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#strategy GatewayPluginAiRagInjector#strategy}
  */
  readonly strategy: string;
}

export function gatewayPluginAiRagInjectorConfigVectordbToTerraform(struct?: GatewayPluginAiRagInjectorConfigVectordb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.numberToTerraform(struct!.dimensions),
    distance_metric: cdktf.stringToTerraform(struct!.distanceMetric),
    pgvector: gatewayPluginAiRagInjectorConfigVectordbPgvectorToTerraform(struct!.pgvector),
    redis: gatewayPluginAiRagInjectorConfigVectordbRedisToTerraform(struct!.redis),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function gatewayPluginAiRagInjectorConfigVectordbToHclTerraform(struct?: GatewayPluginAiRagInjectorConfigVectordb | cdktf.IResolvable): any {
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
      value: gatewayPluginAiRagInjectorConfigVectordbPgvectorToHclTerraform(struct!.pgvector),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRagInjectorConfigVectordbPgvector",
    },
    redis: {
      value: gatewayPluginAiRagInjectorConfigVectordbRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRagInjectorConfigVectordbRedis",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiRagInjectorConfigVectordbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorConfigVectordb | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiRagInjectorConfigVectordb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions = undefined;
      this._distanceMetric = undefined;
      this._pgvector.internalValue = undefined;
      this._redis.internalValue = undefined;
      this._strategy = undefined;
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
  private _pgvector = new GatewayPluginAiRagInjectorConfigVectordbPgvectorOutputReference(this, "pgvector");
  public get pgvector() {
    return this._pgvector;
  }
  public putPgvector(value: GatewayPluginAiRagInjectorConfigVectordbPgvector) {
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
  private _redis = new GatewayPluginAiRagInjectorConfigVectordbRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: GatewayPluginAiRagInjectorConfigVectordbRedis) {
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
}
export interface GatewayPluginAiRagInjectorConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#embeddings GatewayPluginAiRagInjector#embeddings}
  */
  readonly embeddings: GatewayPluginAiRagInjectorConfigEmbeddings;
  /**
  * The maximum number of chunks to fetch from vectordb. Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#fetch_chunks_count GatewayPluginAiRagInjector#fetch_chunks_count}
  */
  readonly fetchChunksCount?: number;
  /**
  * Default: "user"; must be one of ["assistant", "system", "user"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#inject_as_role GatewayPluginAiRagInjector#inject_as_role}
  */
  readonly injectAsRole?: string;
  /**
  * Default: "<CONTEXT>\n<PROMPT>"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#inject_template GatewayPluginAiRagInjector#inject_template}
  */
  readonly injectTemplate?: string;
  /**
  * Halt the LLM request process in case of a vectordb or embeddings service failure. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#stop_on_failure GatewayPluginAiRagInjector#stop_on_failure}
  */
  readonly stopOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#vectordb GatewayPluginAiRagInjector#vectordb}
  */
  readonly vectordb: GatewayPluginAiRagInjectorConfigVectordb;
  /**
  * The namespace of the vectordb to use for embeddings lookup. Default: "kong_rag_injector"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#vectordb_namespace GatewayPluginAiRagInjector#vectordb_namespace}
  */
  readonly vectordbNamespace?: string;
}

export function gatewayPluginAiRagInjectorConfigAToTerraform(struct?: GatewayPluginAiRagInjectorConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embeddings: gatewayPluginAiRagInjectorConfigEmbeddingsToTerraform(struct!.embeddings),
    fetch_chunks_count: cdktf.numberToTerraform(struct!.fetchChunksCount),
    inject_as_role: cdktf.stringToTerraform(struct!.injectAsRole),
    inject_template: cdktf.stringToTerraform(struct!.injectTemplate),
    stop_on_failure: cdktf.booleanToTerraform(struct!.stopOnFailure),
    vectordb: gatewayPluginAiRagInjectorConfigVectordbToTerraform(struct!.vectordb),
    vectordb_namespace: cdktf.stringToTerraform(struct!.vectordbNamespace),
  }
}


export function gatewayPluginAiRagInjectorConfigAToHclTerraform(struct?: GatewayPluginAiRagInjectorConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embeddings: {
      value: gatewayPluginAiRagInjectorConfigEmbeddingsToHclTerraform(struct!.embeddings),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRagInjectorConfigEmbeddings",
    },
    fetch_chunks_count: {
      value: cdktf.numberToHclTerraform(struct!.fetchChunksCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inject_as_role: {
      value: cdktf.stringToHclTerraform(struct!.injectAsRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inject_template: {
      value: cdktf.stringToHclTerraform(struct!.injectTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.stopOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vectordb: {
      value: gatewayPluginAiRagInjectorConfigVectordbToHclTerraform(struct!.vectordb),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRagInjectorConfigVectordb",
    },
    vectordb_namespace: {
      value: cdktf.stringToHclTerraform(struct!.vectordbNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiRagInjectorConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddings = this._embeddings?.internalValue;
    }
    if (this._fetchChunksCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchChunksCount = this._fetchChunksCount;
    }
    if (this._injectAsRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.injectAsRole = this._injectAsRole;
    }
    if (this._injectTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.injectTemplate = this._injectTemplate;
    }
    if (this._stopOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnFailure = this._stopOnFailure;
    }
    if (this._vectordb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectordb = this._vectordb?.internalValue;
    }
    if (this._vectordbNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectordbNamespace = this._vectordbNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiRagInjectorConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddings.internalValue = undefined;
      this._fetchChunksCount = undefined;
      this._injectAsRole = undefined;
      this._injectTemplate = undefined;
      this._stopOnFailure = undefined;
      this._vectordb.internalValue = undefined;
      this._vectordbNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddings.internalValue = value.embeddings;
      this._fetchChunksCount = value.fetchChunksCount;
      this._injectAsRole = value.injectAsRole;
      this._injectTemplate = value.injectTemplate;
      this._stopOnFailure = value.stopOnFailure;
      this._vectordb.internalValue = value.vectordb;
      this._vectordbNamespace = value.vectordbNamespace;
    }
  }

  // embeddings - computed: false, optional: false, required: true
  private _embeddings = new GatewayPluginAiRagInjectorConfigEmbeddingsOutputReference(this, "embeddings");
  public get embeddings() {
    return this._embeddings;
  }
  public putEmbeddings(value: GatewayPluginAiRagInjectorConfigEmbeddings) {
    this._embeddings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingsInput() {
    return this._embeddings.internalValue;
  }

  // fetch_chunks_count - computed: true, optional: true, required: false
  private _fetchChunksCount?: number; 
  public get fetchChunksCount() {
    return this.getNumberAttribute('fetch_chunks_count');
  }
  public set fetchChunksCount(value: number) {
    this._fetchChunksCount = value;
  }
  public resetFetchChunksCount() {
    this._fetchChunksCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchChunksCountInput() {
    return this._fetchChunksCount;
  }

  // inject_as_role - computed: true, optional: true, required: false
  private _injectAsRole?: string; 
  public get injectAsRole() {
    return this.getStringAttribute('inject_as_role');
  }
  public set injectAsRole(value: string) {
    this._injectAsRole = value;
  }
  public resetInjectAsRole() {
    this._injectAsRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectAsRoleInput() {
    return this._injectAsRole;
  }

  // inject_template - computed: true, optional: true, required: false
  private _injectTemplate?: string; 
  public get injectTemplate() {
    return this.getStringAttribute('inject_template');
  }
  public set injectTemplate(value: string) {
    this._injectTemplate = value;
  }
  public resetInjectTemplate() {
    this._injectTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectTemplateInput() {
    return this._injectTemplate;
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
  private _vectordb = new GatewayPluginAiRagInjectorConfigVectordbOutputReference(this, "vectordb");
  public get vectordb() {
    return this._vectordb;
  }
  public putVectordb(value: GatewayPluginAiRagInjectorConfigVectordb) {
    this._vectordb.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectordbInput() {
    return this._vectordb.internalValue;
  }

  // vectordb_namespace - computed: true, optional: true, required: false
  private _vectordbNamespace?: string; 
  public get vectordbNamespace() {
    return this.getStringAttribute('vectordb_namespace');
  }
  public set vectordbNamespace(value: string) {
    this._vectordbNamespace = value;
  }
  public resetVectordbNamespace() {
    this._vectordbNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectordbNamespaceInput() {
    return this._vectordbNamespace;
  }
}
export interface GatewayPluginAiRagInjectorConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#id GatewayPluginAiRagInjector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiRagInjectorConsumerToTerraform(struct?: GatewayPluginAiRagInjectorConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiRagInjectorConsumerToHclTerraform(struct?: GatewayPluginAiRagInjectorConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginAiRagInjectorConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRagInjectorConsumerGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#id GatewayPluginAiRagInjector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiRagInjectorConsumerGroupToTerraform(struct?: GatewayPluginAiRagInjectorConsumerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiRagInjectorConsumerGroupToHclTerraform(struct?: GatewayPluginAiRagInjectorConsumerGroup | cdktf.IResolvable): any {
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

export class GatewayPluginAiRagInjectorConsumerGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorConsumerGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorConsumerGroup | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRagInjectorOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#access GatewayPluginAiRagInjector#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiRagInjectorOrderingAfterToTerraform(struct?: GatewayPluginAiRagInjectorOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiRagInjectorOrderingAfterToHclTerraform(struct?: GatewayPluginAiRagInjectorOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginAiRagInjectorOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRagInjectorOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#access GatewayPluginAiRagInjector#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiRagInjectorOrderingBeforeToTerraform(struct?: GatewayPluginAiRagInjectorOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiRagInjectorOrderingBeforeToHclTerraform(struct?: GatewayPluginAiRagInjectorOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginAiRagInjectorOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRagInjectorOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#after GatewayPluginAiRagInjector#after}
  */
  readonly after?: GatewayPluginAiRagInjectorOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#before GatewayPluginAiRagInjector#before}
  */
  readonly before?: GatewayPluginAiRagInjectorOrderingBefore;
}

export function gatewayPluginAiRagInjectorOrderingToTerraform(struct?: GatewayPluginAiRagInjectorOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginAiRagInjectorOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginAiRagInjectorOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginAiRagInjectorOrderingToHclTerraform(struct?: GatewayPluginAiRagInjectorOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginAiRagInjectorOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRagInjectorOrderingAfter",
    },
    before: {
      value: gatewayPluginAiRagInjectorOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRagInjectorOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiRagInjectorOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginAiRagInjectorOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginAiRagInjectorOrderingAfter) {
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
  private _before = new GatewayPluginAiRagInjectorOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginAiRagInjectorOrderingBefore) {
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
export interface GatewayPluginAiRagInjectorPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#id GatewayPluginAiRagInjector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#name GatewayPluginAiRagInjector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#path GatewayPluginAiRagInjector#path}
  */
  readonly path?: string;
}

export function gatewayPluginAiRagInjectorPartialsToTerraform(struct?: GatewayPluginAiRagInjectorPartials | cdktf.IResolvable): any {
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


export function gatewayPluginAiRagInjectorPartialsToHclTerraform(struct?: GatewayPluginAiRagInjectorPartials | cdktf.IResolvable): any {
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

export class GatewayPluginAiRagInjectorPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiRagInjectorPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAiRagInjectorPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiRagInjectorPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiRagInjectorPartialsOutputReference {
    return new GatewayPluginAiRagInjectorPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiRagInjectorRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#id GatewayPluginAiRagInjector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiRagInjectorRouteToTerraform(struct?: GatewayPluginAiRagInjectorRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiRagInjectorRouteToHclTerraform(struct?: GatewayPluginAiRagInjectorRoute | cdktf.IResolvable): any {
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

export class GatewayPluginAiRagInjectorRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRagInjectorService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#id GatewayPluginAiRagInjector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiRagInjectorServiceToTerraform(struct?: GatewayPluginAiRagInjectorService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiRagInjectorServiceToHclTerraform(struct?: GatewayPluginAiRagInjectorService | cdktf.IResolvable): any {
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

export class GatewayPluginAiRagInjectorServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRagInjectorService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRagInjectorService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector konnect_gateway_plugin_ai_rag_injector}
*/
export class GatewayPluginAiRagInjector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_ai_rag_injector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginAiRagInjector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginAiRagInjector to import
  * @param importFromId The id of the existing GatewayPluginAiRagInjector that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginAiRagInjector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_ai_rag_injector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_rag_injector konnect_gateway_plugin_ai_rag_injector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginAiRagInjectorConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginAiRagInjectorConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_ai_rag_injector',
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
  private _config = new GatewayPluginAiRagInjectorConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginAiRagInjectorConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginAiRagInjectorConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginAiRagInjectorConsumer) {
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
  private _consumerGroup = new GatewayPluginAiRagInjectorConsumerGroupOutputReference(this, "consumer_group");
  public get consumerGroup() {
    return this._consumerGroup;
  }
  public putConsumerGroup(value: GatewayPluginAiRagInjectorConsumerGroup) {
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
  private _ordering = new GatewayPluginAiRagInjectorOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginAiRagInjectorOrdering) {
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
  private _partials = new GatewayPluginAiRagInjectorPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginAiRagInjectorPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginAiRagInjectorRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginAiRagInjectorRoute) {
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
  private _service = new GatewayPluginAiRagInjectorServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginAiRagInjectorService) {
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
      config: gatewayPluginAiRagInjectorConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginAiRagInjectorConsumerToTerraform(this._consumer.internalValue),
      consumer_group: gatewayPluginAiRagInjectorConsumerGroupToTerraform(this._consumerGroup.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginAiRagInjectorOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginAiRagInjectorPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginAiRagInjectorRouteToTerraform(this._route.internalValue),
      service: gatewayPluginAiRagInjectorServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginAiRagInjectorConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiRagInjectorConfigA",
      },
      consumer: {
        value: gatewayPluginAiRagInjectorConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiRagInjectorConsumer",
      },
      consumer_group: {
        value: gatewayPluginAiRagInjectorConsumerGroupToHclTerraform(this._consumerGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiRagInjectorConsumerGroup",
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
        value: gatewayPluginAiRagInjectorOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiRagInjectorOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginAiRagInjectorPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginAiRagInjectorPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginAiRagInjectorRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiRagInjectorRoute",
      },
      service: {
        value: gatewayPluginAiRagInjectorServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiRagInjectorService",
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
