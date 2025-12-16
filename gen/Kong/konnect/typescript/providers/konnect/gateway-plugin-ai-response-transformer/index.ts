// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginAiResponseTransformerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#config GatewayPluginAiResponseTransformer#config}
  */
  readonly config: GatewayPluginAiResponseTransformerConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#consumer GatewayPluginAiResponseTransformer#consumer}
  */
  readonly consumer?: GatewayPluginAiResponseTransformerConsumer;
  /**
  * If set, the plugin will activate only for requests where the specified consumer group has been authenticated. (Note that some plugins can not be restricted to consumers groups this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#consumer_group GatewayPluginAiResponseTransformer#consumer_group}
  */
  readonly consumerGroup?: GatewayPluginAiResponseTransformerConsumerGroup;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#control_plane_id GatewayPluginAiResponseTransformer#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#created_at GatewayPluginAiResponseTransformer#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#enabled GatewayPluginAiResponseTransformer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#id GatewayPluginAiResponseTransformer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#instance_name GatewayPluginAiResponseTransformer#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#ordering GatewayPluginAiResponseTransformer#ordering}
  */
  readonly ordering?: GatewayPluginAiResponseTransformerOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#partials GatewayPluginAiResponseTransformer#partials}
  */
  readonly partials?: GatewayPluginAiResponseTransformerPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#protocols GatewayPluginAiResponseTransformer#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#route GatewayPluginAiResponseTransformer#route}
  */
  readonly route?: GatewayPluginAiResponseTransformerRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#service GatewayPluginAiResponseTransformer#service}
  */
  readonly service?: GatewayPluginAiResponseTransformerService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#tags GatewayPluginAiResponseTransformer#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#updated_at GatewayPluginAiResponseTransformer#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginAiResponseTransformerConfigLlmAuth {
  /**
  * If enabled, the authorization header or parameter can be overridden in the request by the value configured in the plugin. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#allow_override GatewayPluginAiResponseTransformer#allow_override}
  */
  readonly allowOverride?: boolean | cdktf.IResolvable;
  /**
  * Set this if you are using an AWS provider (Bedrock) and you are authenticating using static IAM User credentials. Setting this will override the AWS_ACCESS_KEY_ID environment variable for this plugin instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#aws_access_key_id GatewayPluginAiResponseTransformer#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Set this if you are using an AWS provider (Bedrock) and you are authenticating using static IAM User credentials. Setting this will override the AWS_SECRET_ACCESS_KEY environment variable for this plugin instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#aws_secret_access_key GatewayPluginAiResponseTransformer#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#azure_client_id GatewayPluginAiResponseTransformer#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#azure_client_secret GatewayPluginAiResponseTransformer#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#azure_tenant_id GatewayPluginAiResponseTransformer#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Set true to use the Azure Cloud Managed Identity (or user-assigned identity) to authenticate with Azure-provider models. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#azure_use_managed_identity GatewayPluginAiResponseTransformer#azure_use_managed_identity}
  */
  readonly azureUseManagedIdentity?: boolean | cdktf.IResolvable;
  /**
  * Set this field to the full JSON of the GCP service account to authenticate, if required. If null (and gcp_use_service_account is true), Kong will attempt to read from environment variable `GCP_SERVICE_ACCOUNT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#gcp_service_account_json GatewayPluginAiResponseTransformer#gcp_service_account_json}
  */
  readonly gcpServiceAccountJson?: string;
  /**
  * Use service account auth for GCP-based providers and models. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#gcp_use_service_account GatewayPluginAiResponseTransformer#gcp_use_service_account}
  */
  readonly gcpUseServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * If AI model requires authentication via Authorization or API key header, specify its name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#header_name GatewayPluginAiResponseTransformer#header_name}
  */
  readonly headerName?: string;
  /**
  * Specify the full auth header value for 'header_name', for example 'Bearer key' or just 'key'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#header_value GatewayPluginAiResponseTransformer#header_value}
  */
  readonly headerValue?: string;
  /**
  * Specify whether the 'param_name' and 'param_value' options go in a query string, or the POST form/JSON body. must be one of ["body", "query"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#param_location GatewayPluginAiResponseTransformer#param_location}
  */
  readonly paramLocation?: string;
  /**
  * If AI model requires authentication via query parameter, specify its name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#param_name GatewayPluginAiResponseTransformer#param_name}
  */
  readonly paramName?: string;
  /**
  * Specify the full parameter value for 'param_name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#param_value GatewayPluginAiResponseTransformer#param_value}
  */
  readonly paramValue?: string;
}

export function gatewayPluginAiResponseTransformerConfigLlmAuthToTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmAuth | cdktf.IResolvable): any {
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


export function gatewayPluginAiResponseTransformerConfigLlmAuthToHclTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmAuth | cdktf.IResolvable): any {
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

export class GatewayPluginAiResponseTransformerConfigLlmAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerConfigLlmAuth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerConfigLlmAuth | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiResponseTransformerConfigLlmLogging {
  /**
  * If enabled, will log the request and response body into the Kong log plugin(s) output. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#log_payloads GatewayPluginAiResponseTransformer#log_payloads}
  */
  readonly logPayloads?: boolean | cdktf.IResolvable;
  /**
  * If enabled and supported by the driver, will add model usage and token metrics into the Kong log plugin(s) output. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#log_statistics GatewayPluginAiResponseTransformer#log_statistics}
  */
  readonly logStatistics?: boolean | cdktf.IResolvable;
}

export function gatewayPluginAiResponseTransformerConfigLlmLoggingToTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_payloads: cdktf.booleanToTerraform(struct!.logPayloads),
    log_statistics: cdktf.booleanToTerraform(struct!.logStatistics),
  }
}


export function gatewayPluginAiResponseTransformerConfigLlmLoggingToHclTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmLogging | cdktf.IResolvable): any {
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

export class GatewayPluginAiResponseTransformerConfigLlmLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerConfigLlmLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerConfigLlmLogging | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiResponseTransformerConfigLlmModelOptionsBedrock {
  /**
  * If using AWS providers (Bedrock) you can assume a different role after authentication with the current IAM context is successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#aws_assume_role_arn GatewayPluginAiResponseTransformer#aws_assume_role_arn}
  */
  readonly awsAssumeRoleArn?: string;
  /**
  * If using AWS providers (Bedrock) you can override the `AWS_REGION` environment variable by setting this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#aws_region GatewayPluginAiResponseTransformer#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * If using AWS providers (Bedrock), set the identifier of the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#aws_role_session_name GatewayPluginAiResponseTransformer#aws_role_session_name}
  */
  readonly awsRoleSessionName?: string;
  /**
  * If using AWS providers (Bedrock), override the STS endpoint URL when assuming a different role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#aws_sts_endpoint_url GatewayPluginAiResponseTransformer#aws_sts_endpoint_url}
  */
  readonly awsStsEndpointUrl?: string;
  /**
  * If using AWS providers (Bedrock), set to true to normalize the embeddings. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#embeddings_normalize GatewayPluginAiResponseTransformer#embeddings_normalize}
  */
  readonly embeddingsNormalize?: boolean | cdktf.IResolvable;
  /**
  * Force the client's performance configuration 'latency' for all requests. Leave empty to let the consumer select the performance configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#performance_config_latency GatewayPluginAiResponseTransformer#performance_config_latency}
  */
  readonly performanceConfigLatency?: string;
}

export function gatewayPluginAiResponseTransformerConfigLlmModelOptionsBedrockToTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmModelOptionsBedrock | cdktf.IResolvable): any {
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


export function gatewayPluginAiResponseTransformerConfigLlmModelOptionsBedrockToHclTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmModelOptionsBedrock | cdktf.IResolvable): any {
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

export class GatewayPluginAiResponseTransformerConfigLlmModelOptionsBedrockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerConfigLlmModelOptionsBedrock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerConfigLlmModelOptionsBedrock | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiResponseTransformerConfigLlmModelOptionsCohere {
  /**
  * The purpose of the input text to calculate embedding vectors. Default: "classification"; must be one of ["classification", "clustering", "image", "search_document", "search_query"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#embedding_input_type GatewayPluginAiResponseTransformer#embedding_input_type}
  */
  readonly embeddingInputType?: string;
  /**
  * Wait for the model if it is not ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#wait_for_model GatewayPluginAiResponseTransformer#wait_for_model}
  */
  readonly waitForModel?: boolean | cdktf.IResolvable;
}

export function gatewayPluginAiResponseTransformerConfigLlmModelOptionsCohereToTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmModelOptionsCohere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_input_type: cdktf.stringToTerraform(struct!.embeddingInputType),
    wait_for_model: cdktf.booleanToTerraform(struct!.waitForModel),
  }
}


export function gatewayPluginAiResponseTransformerConfigLlmModelOptionsCohereToHclTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmModelOptionsCohere | cdktf.IResolvable): any {
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

export class GatewayPluginAiResponseTransformerConfigLlmModelOptionsCohereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerConfigLlmModelOptionsCohere | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerConfigLlmModelOptionsCohere | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiResponseTransformerConfigLlmModelOptionsGemini {
  /**
  * If running Gemini on Vertex, specify the regional API endpoint (hostname only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#api_endpoint GatewayPluginAiResponseTransformer#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * If running Gemini on Vertex Model Garden, specify the endpoint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#endpoint_id GatewayPluginAiResponseTransformer#endpoint_id}
  */
  readonly endpointId?: string;
  /**
  * If running Gemini on Vertex, specify the location ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#location_id GatewayPluginAiResponseTransformer#location_id}
  */
  readonly locationId?: string;
  /**
  * If running Gemini on Vertex, specify the project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#project_id GatewayPluginAiResponseTransformer#project_id}
  */
  readonly projectId?: string;
}

export function gatewayPluginAiResponseTransformerConfigLlmModelOptionsGeminiToTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmModelOptionsGemini | cdktf.IResolvable): any {
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


export function gatewayPluginAiResponseTransformerConfigLlmModelOptionsGeminiToHclTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmModelOptionsGemini | cdktf.IResolvable): any {
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

export class GatewayPluginAiResponseTransformerConfigLlmModelOptionsGeminiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerConfigLlmModelOptionsGemini | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerConfigLlmModelOptionsGemini | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiResponseTransformerConfigLlmModelOptionsHuggingface {
  /**
  * Use the cache layer on the inference API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#use_cache GatewayPluginAiResponseTransformer#use_cache}
  */
  readonly useCache?: boolean | cdktf.IResolvable;
  /**
  * Wait for the model if it is not ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#wait_for_model GatewayPluginAiResponseTransformer#wait_for_model}
  */
  readonly waitForModel?: boolean | cdktf.IResolvable;
}

export function gatewayPluginAiResponseTransformerConfigLlmModelOptionsHuggingfaceToTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmModelOptionsHuggingface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_cache: cdktf.booleanToTerraform(struct!.useCache),
    wait_for_model: cdktf.booleanToTerraform(struct!.waitForModel),
  }
}


export function gatewayPluginAiResponseTransformerConfigLlmModelOptionsHuggingfaceToHclTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmModelOptionsHuggingface | cdktf.IResolvable): any {
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

export class GatewayPluginAiResponseTransformerConfigLlmModelOptionsHuggingfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerConfigLlmModelOptionsHuggingface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerConfigLlmModelOptionsHuggingface | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiResponseTransformerConfigLlmModelOptions {
  /**
  * Defines the schema/API version, if using Anthropic provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#anthropic_version GatewayPluginAiResponseTransformer#anthropic_version}
  */
  readonly anthropicVersion?: string;
  /**
  * 'api-version' for Azure OpenAI instances. Default: "2023-05-15"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#azure_api_version GatewayPluginAiResponseTransformer#azure_api_version}
  */
  readonly azureApiVersion?: string;
  /**
  * Deployment ID for Azure OpenAI instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#azure_deployment_id GatewayPluginAiResponseTransformer#azure_deployment_id}
  */
  readonly azureDeploymentId?: string;
  /**
  * Instance name for Azure OpenAI hosted models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#azure_instance GatewayPluginAiResponseTransformer#azure_instance}
  */
  readonly azureInstance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#bedrock GatewayPluginAiResponseTransformer#bedrock}
  */
  readonly bedrock?: GatewayPluginAiResponseTransformerConfigLlmModelOptionsBedrock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#cohere GatewayPluginAiResponseTransformer#cohere}
  */
  readonly cohere?: GatewayPluginAiResponseTransformerConfigLlmModelOptionsCohere;
  /**
  * If using embeddings models, set the number of dimensions to generate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#embeddings_dimensions GatewayPluginAiResponseTransformer#embeddings_dimensions}
  */
  readonly embeddingsDimensions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#gemini GatewayPluginAiResponseTransformer#gemini}
  */
  readonly gemini?: GatewayPluginAiResponseTransformerConfigLlmModelOptionsGemini;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#huggingface GatewayPluginAiResponseTransformer#huggingface}
  */
  readonly huggingface?: GatewayPluginAiResponseTransformerConfigLlmModelOptionsHuggingface;
  /**
  * Defines the cost per 1M tokens in your prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#input_cost GatewayPluginAiResponseTransformer#input_cost}
  */
  readonly inputCost?: number;
  /**
  * If using llama2 provider, select the upstream message format. must be one of ["ollama", "openai", "raw"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#llama2_format GatewayPluginAiResponseTransformer#llama2_format}
  */
  readonly llama2Format?: string;
  /**
  * Defines the max_tokens, if using chat or completion models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#max_tokens GatewayPluginAiResponseTransformer#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * If using mistral provider, select the upstream message format. must be one of ["ollama", "openai"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#mistral_format GatewayPluginAiResponseTransformer#mistral_format}
  */
  readonly mistralFormat?: string;
  /**
  * Defines the cost per 1M tokens in the output of the AI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#output_cost GatewayPluginAiResponseTransformer#output_cost}
  */
  readonly outputCost?: number;
  /**
  * Defines the matching temperature, if using chat or completion models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#temperature GatewayPluginAiResponseTransformer#temperature}
  */
  readonly temperature?: number;
  /**
  * Defines the top-k most likely tokens, if supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#top_k GatewayPluginAiResponseTransformer#top_k}
  */
  readonly topK?: number;
  /**
  * Defines the top-p probability mass, if supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#top_p GatewayPluginAiResponseTransformer#top_p}
  */
  readonly topP?: number;
  /**
  * Manually specify or override the AI operation path, used when e.g. using the 'preserve' route_type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#upstream_path GatewayPluginAiResponseTransformer#upstream_path}
  */
  readonly upstreamPath?: string;
  /**
  * Manually specify or override the full URL to the AI operation endpoints, when calling (self-)hosted models, or for running via a private endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#upstream_url GatewayPluginAiResponseTransformer#upstream_url}
  */
  readonly upstreamUrl?: string;
}

export function gatewayPluginAiResponseTransformerConfigLlmModelOptionsToTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmModelOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anthropic_version: cdktf.stringToTerraform(struct!.anthropicVersion),
    azure_api_version: cdktf.stringToTerraform(struct!.azureApiVersion),
    azure_deployment_id: cdktf.stringToTerraform(struct!.azureDeploymentId),
    azure_instance: cdktf.stringToTerraform(struct!.azureInstance),
    bedrock: gatewayPluginAiResponseTransformerConfigLlmModelOptionsBedrockToTerraform(struct!.bedrock),
    cohere: gatewayPluginAiResponseTransformerConfigLlmModelOptionsCohereToTerraform(struct!.cohere),
    embeddings_dimensions: cdktf.numberToTerraform(struct!.embeddingsDimensions),
    gemini: gatewayPluginAiResponseTransformerConfigLlmModelOptionsGeminiToTerraform(struct!.gemini),
    huggingface: gatewayPluginAiResponseTransformerConfigLlmModelOptionsHuggingfaceToTerraform(struct!.huggingface),
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


export function gatewayPluginAiResponseTransformerConfigLlmModelOptionsToHclTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmModelOptions | cdktf.IResolvable): any {
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
      value: gatewayPluginAiResponseTransformerConfigLlmModelOptionsBedrockToHclTerraform(struct!.bedrock),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiResponseTransformerConfigLlmModelOptionsBedrock",
    },
    cohere: {
      value: gatewayPluginAiResponseTransformerConfigLlmModelOptionsCohereToHclTerraform(struct!.cohere),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiResponseTransformerConfigLlmModelOptionsCohere",
    },
    embeddings_dimensions: {
      value: cdktf.numberToHclTerraform(struct!.embeddingsDimensions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gemini: {
      value: gatewayPluginAiResponseTransformerConfigLlmModelOptionsGeminiToHclTerraform(struct!.gemini),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiResponseTransformerConfigLlmModelOptionsGemini",
    },
    huggingface: {
      value: gatewayPluginAiResponseTransformerConfigLlmModelOptionsHuggingfaceToHclTerraform(struct!.huggingface),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiResponseTransformerConfigLlmModelOptionsHuggingface",
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

export class GatewayPluginAiResponseTransformerConfigLlmModelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerConfigLlmModelOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerConfigLlmModelOptions | cdktf.IResolvable | undefined) {
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
  private _bedrock = new GatewayPluginAiResponseTransformerConfigLlmModelOptionsBedrockOutputReference(this, "bedrock");
  public get bedrock() {
    return this._bedrock;
  }
  public putBedrock(value: GatewayPluginAiResponseTransformerConfigLlmModelOptionsBedrock) {
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
  private _cohere = new GatewayPluginAiResponseTransformerConfigLlmModelOptionsCohereOutputReference(this, "cohere");
  public get cohere() {
    return this._cohere;
  }
  public putCohere(value: GatewayPluginAiResponseTransformerConfigLlmModelOptionsCohere) {
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
  private _gemini = new GatewayPluginAiResponseTransformerConfigLlmModelOptionsGeminiOutputReference(this, "gemini");
  public get gemini() {
    return this._gemini;
  }
  public putGemini(value: GatewayPluginAiResponseTransformerConfigLlmModelOptionsGemini) {
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
  private _huggingface = new GatewayPluginAiResponseTransformerConfigLlmModelOptionsHuggingfaceOutputReference(this, "huggingface");
  public get huggingface() {
    return this._huggingface;
  }
  public putHuggingface(value: GatewayPluginAiResponseTransformerConfigLlmModelOptionsHuggingface) {
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
export interface GatewayPluginAiResponseTransformerConfigLlmModel {
  /**
  * Model name to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#name GatewayPluginAiResponseTransformer#name}
  */
  readonly name?: string;
  /**
  * Key/value settings for the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#options GatewayPluginAiResponseTransformer#options}
  */
  readonly options?: GatewayPluginAiResponseTransformerConfigLlmModelOptions;
  /**
  * AI provider request format - Kong translates requests to and from the specified backend compatible formats. must be one of ["anthropic", "azure", "bedrock", "cohere", "gemini", "huggingface", "llama2", "mistral", "openai"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#provider GatewayPluginAiResponseTransformer#provider}
  */
  readonly provider: string;
}

export function gatewayPluginAiResponseTransformerConfigLlmModelToTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    options: gatewayPluginAiResponseTransformerConfigLlmModelOptionsToTerraform(struct!.options),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}


export function gatewayPluginAiResponseTransformerConfigLlmModelToHclTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlmModel | cdktf.IResolvable): any {
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
      value: gatewayPluginAiResponseTransformerConfigLlmModelOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiResponseTransformerConfigLlmModelOptions",
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

export class GatewayPluginAiResponseTransformerConfigLlmModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerConfigLlmModel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerConfigLlmModel | cdktf.IResolvable | undefined) {
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

  // options - computed: true, optional: true, required: false
  private _options = new GatewayPluginAiResponseTransformerConfigLlmModelOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: GatewayPluginAiResponseTransformerConfigLlmModelOptions) {
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
export interface GatewayPluginAiResponseTransformerConfigLlm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#auth GatewayPluginAiResponseTransformer#auth}
  */
  readonly auth?: GatewayPluginAiResponseTransformerConfigLlmAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#logging GatewayPluginAiResponseTransformer#logging}
  */
  readonly logging?: GatewayPluginAiResponseTransformerConfigLlmLogging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#model GatewayPluginAiResponseTransformer#model}
  */
  readonly model: GatewayPluginAiResponseTransformerConfigLlmModel;
  /**
  * The model's operation implementation, for this provider. must be one of ["audio/v1/audio/speech", "audio/v1/audio/transcriptions", "audio/v1/audio/translations", "image/v1/images/edits", "image/v1/images/generations", "llm/v1/assistants", "llm/v1/batches", "llm/v1/chat", "llm/v1/completions", "llm/v1/embeddings", "llm/v1/files", "llm/v1/responses", "preserve", "realtime/v1/realtime"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#route_type GatewayPluginAiResponseTransformer#route_type}
  */
  readonly routeType: string;
}

export function gatewayPluginAiResponseTransformerConfigLlmToTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: gatewayPluginAiResponseTransformerConfigLlmAuthToTerraform(struct!.auth),
    logging: gatewayPluginAiResponseTransformerConfigLlmLoggingToTerraform(struct!.logging),
    model: gatewayPluginAiResponseTransformerConfigLlmModelToTerraform(struct!.model),
    route_type: cdktf.stringToTerraform(struct!.routeType),
  }
}


export function gatewayPluginAiResponseTransformerConfigLlmToHclTerraform(struct?: GatewayPluginAiResponseTransformerConfigLlm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: gatewayPluginAiResponseTransformerConfigLlmAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiResponseTransformerConfigLlmAuth",
    },
    logging: {
      value: gatewayPluginAiResponseTransformerConfigLlmLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiResponseTransformerConfigLlmLogging",
    },
    model: {
      value: gatewayPluginAiResponseTransformerConfigLlmModelToHclTerraform(struct!.model),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiResponseTransformerConfigLlmModel",
    },
    route_type: {
      value: cdktf.stringToHclTerraform(struct!.routeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiResponseTransformerConfigLlmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerConfigLlm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiResponseTransformerConfigLlm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._model.internalValue = undefined;
      this._routeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._logging.internalValue = value.logging;
      this._model.internalValue = value.model;
      this._routeType = value.routeType;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new GatewayPluginAiResponseTransformerConfigLlmAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: GatewayPluginAiResponseTransformerConfigLlmAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // logging - computed: true, optional: true, required: false
  private _logging = new GatewayPluginAiResponseTransformerConfigLlmLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: GatewayPluginAiResponseTransformerConfigLlmLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // model - computed: false, optional: false, required: true
  private _model = new GatewayPluginAiResponseTransformerConfigLlmModelOutputReference(this, "model");
  public get model() {
    return this._model;
  }
  public putModel(value: GatewayPluginAiResponseTransformerConfigLlmModel) {
    this._model.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }

  // route_type - computed: false, optional: false, required: true
  private _routeType?: string; 
  public get routeType() {
    return this.getStringAttribute('route_type');
  }
  public set routeType(value: string) {
    this._routeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTypeInput() {
    return this._routeType;
  }
}
export interface GatewayPluginAiResponseTransformerConfigA {
  /**
  * A string representing a host name, such as example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#http_proxy_host GatewayPluginAiResponseTransformer#http_proxy_host}
  */
  readonly httpProxyHost?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#http_proxy_port GatewayPluginAiResponseTransformer#http_proxy_port}
  */
  readonly httpProxyPort?: number;
  /**
  * Timeout in milliseconds for the AI upstream service. Default: 60000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#http_timeout GatewayPluginAiResponseTransformer#http_timeout}
  */
  readonly httpTimeout?: number;
  /**
  * A string representing a host name, such as example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#https_proxy_host GatewayPluginAiResponseTransformer#https_proxy_host}
  */
  readonly httpsProxyHost?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#https_proxy_port GatewayPluginAiResponseTransformer#https_proxy_port}
  */
  readonly httpsProxyPort?: number;
  /**
  * Verify the TLS certificate of the AI upstream service. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#https_verify GatewayPluginAiResponseTransformer#https_verify}
  */
  readonly httpsVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#llm GatewayPluginAiResponseTransformer#llm}
  */
  readonly llm: GatewayPluginAiResponseTransformerConfigLlm;
  /**
  * max allowed body size allowed to be introspected. 0 means unlimited, but the size of this body will still be limited by Nginx's client_max_body_size. Default: 8192
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#max_request_body_size GatewayPluginAiResponseTransformer#max_request_body_size}
  */
  readonly maxRequestBodySize?: number;
  /**
  * Set true to read specific response format from the LLM, and accordingly set the status code / body / headers that proxy back to the client. You need to engineer your LLM prompt to return the correct format, see plugin docs 'Overview' page for usage instructions. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#parse_llm_response_json_instructions GatewayPluginAiResponseTransformer#parse_llm_response_json_instructions}
  */
  readonly parseLlmResponseJsonInstructions?: boolean | cdktf.IResolvable;
  /**
  * Use this prompt to tune the LLM system/assistant message for the returning proxy response (from the upstream), adn what response format you are expecting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#prompt GatewayPluginAiResponseTransformer#prompt}
  */
  readonly prompt: string;
  /**
  * Defines the regular expression that must match to indicate a successful AI transformation at the response phase. The first match will be set as the returning body. If the AI service's response doesn't match this pattern, a failure is returned to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#transformation_extract_pattern GatewayPluginAiResponseTransformer#transformation_extract_pattern}
  */
  readonly transformationExtractPattern?: string;
}

export function gatewayPluginAiResponseTransformerConfigAToTerraform(struct?: GatewayPluginAiResponseTransformerConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_proxy_host: cdktf.stringToTerraform(struct!.httpProxyHost),
    http_proxy_port: cdktf.numberToTerraform(struct!.httpProxyPort),
    http_timeout: cdktf.numberToTerraform(struct!.httpTimeout),
    https_proxy_host: cdktf.stringToTerraform(struct!.httpsProxyHost),
    https_proxy_port: cdktf.numberToTerraform(struct!.httpsProxyPort),
    https_verify: cdktf.booleanToTerraform(struct!.httpsVerify),
    llm: gatewayPluginAiResponseTransformerConfigLlmToTerraform(struct!.llm),
    max_request_body_size: cdktf.numberToTerraform(struct!.maxRequestBodySize),
    parse_llm_response_json_instructions: cdktf.booleanToTerraform(struct!.parseLlmResponseJsonInstructions),
    prompt: cdktf.stringToTerraform(struct!.prompt),
    transformation_extract_pattern: cdktf.stringToTerraform(struct!.transformationExtractPattern),
  }
}


export function gatewayPluginAiResponseTransformerConfigAToHclTerraform(struct?: GatewayPluginAiResponseTransformerConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_proxy_host: {
      value: cdktf.stringToHclTerraform(struct!.httpProxyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.httpProxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_timeout: {
      value: cdktf.numberToHclTerraform(struct!.httpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_proxy_host: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsProxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_verify: {
      value: cdktf.booleanToHclTerraform(struct!.httpsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    llm: {
      value: gatewayPluginAiResponseTransformerConfigLlmToHclTerraform(struct!.llm),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiResponseTransformerConfigLlm",
    },
    max_request_body_size: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_llm_response_json_instructions: {
      value: cdktf.booleanToHclTerraform(struct!.parseLlmResponseJsonInstructions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prompt: {
      value: cdktf.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation_extract_pattern: {
      value: cdktf.stringToHclTerraform(struct!.transformationExtractPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiResponseTransformerConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpProxyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyHost = this._httpProxyHost;
    }
    if (this._httpProxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyPort = this._httpProxyPort;
    }
    if (this._httpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTimeout = this._httpTimeout;
    }
    if (this._httpsProxyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxyHost = this._httpsProxyHost;
    }
    if (this._httpsProxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxyPort = this._httpsProxyPort;
    }
    if (this._httpsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsVerify = this._httpsVerify;
    }
    if (this._llm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.llm = this._llm?.internalValue;
    }
    if (this._maxRequestBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBodySize = this._maxRequestBodySize;
    }
    if (this._parseLlmResponseJsonInstructions !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseLlmResponseJsonInstructions = this._parseLlmResponseJsonInstructions;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    if (this._transformationExtractPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationExtractPattern = this._transformationExtractPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiResponseTransformerConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpProxyHost = undefined;
      this._httpProxyPort = undefined;
      this._httpTimeout = undefined;
      this._httpsProxyHost = undefined;
      this._httpsProxyPort = undefined;
      this._httpsVerify = undefined;
      this._llm.internalValue = undefined;
      this._maxRequestBodySize = undefined;
      this._parseLlmResponseJsonInstructions = undefined;
      this._prompt = undefined;
      this._transformationExtractPattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpProxyHost = value.httpProxyHost;
      this._httpProxyPort = value.httpProxyPort;
      this._httpTimeout = value.httpTimeout;
      this._httpsProxyHost = value.httpsProxyHost;
      this._httpsProxyPort = value.httpsProxyPort;
      this._httpsVerify = value.httpsVerify;
      this._llm.internalValue = value.llm;
      this._maxRequestBodySize = value.maxRequestBodySize;
      this._parseLlmResponseJsonInstructions = value.parseLlmResponseJsonInstructions;
      this._prompt = value.prompt;
      this._transformationExtractPattern = value.transformationExtractPattern;
    }
  }

  // http_proxy_host - computed: false, optional: true, required: false
  private _httpProxyHost?: string; 
  public get httpProxyHost() {
    return this.getStringAttribute('http_proxy_host');
  }
  public set httpProxyHost(value: string) {
    this._httpProxyHost = value;
  }
  public resetHttpProxyHost() {
    this._httpProxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyHostInput() {
    return this._httpProxyHost;
  }

  // http_proxy_port - computed: false, optional: true, required: false
  private _httpProxyPort?: number; 
  public get httpProxyPort() {
    return this.getNumberAttribute('http_proxy_port');
  }
  public set httpProxyPort(value: number) {
    this._httpProxyPort = value;
  }
  public resetHttpProxyPort() {
    this._httpProxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyPortInput() {
    return this._httpProxyPort;
  }

  // http_timeout - computed: true, optional: true, required: false
  private _httpTimeout?: number; 
  public get httpTimeout() {
    return this.getNumberAttribute('http_timeout');
  }
  public set httpTimeout(value: number) {
    this._httpTimeout = value;
  }
  public resetHttpTimeout() {
    this._httpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTimeoutInput() {
    return this._httpTimeout;
  }

  // https_proxy_host - computed: false, optional: true, required: false
  private _httpsProxyHost?: string; 
  public get httpsProxyHost() {
    return this.getStringAttribute('https_proxy_host');
  }
  public set httpsProxyHost(value: string) {
    this._httpsProxyHost = value;
  }
  public resetHttpsProxyHost() {
    this._httpsProxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyHostInput() {
    return this._httpsProxyHost;
  }

  // https_proxy_port - computed: false, optional: true, required: false
  private _httpsProxyPort?: number; 
  public get httpsProxyPort() {
    return this.getNumberAttribute('https_proxy_port');
  }
  public set httpsProxyPort(value: number) {
    this._httpsProxyPort = value;
  }
  public resetHttpsProxyPort() {
    this._httpsProxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyPortInput() {
    return this._httpsProxyPort;
  }

  // https_verify - computed: true, optional: true, required: false
  private _httpsVerify?: boolean | cdktf.IResolvable; 
  public get httpsVerify() {
    return this.getBooleanAttribute('https_verify');
  }
  public set httpsVerify(value: boolean | cdktf.IResolvable) {
    this._httpsVerify = value;
  }
  public resetHttpsVerify() {
    this._httpsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsVerifyInput() {
    return this._httpsVerify;
  }

  // llm - computed: false, optional: false, required: true
  private _llm = new GatewayPluginAiResponseTransformerConfigLlmOutputReference(this, "llm");
  public get llm() {
    return this._llm;
  }
  public putLlm(value: GatewayPluginAiResponseTransformerConfigLlm) {
    this._llm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get llmInput() {
    return this._llm.internalValue;
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

  // parse_llm_response_json_instructions - computed: true, optional: true, required: false
  private _parseLlmResponseJsonInstructions?: boolean | cdktf.IResolvable; 
  public get parseLlmResponseJsonInstructions() {
    return this.getBooleanAttribute('parse_llm_response_json_instructions');
  }
  public set parseLlmResponseJsonInstructions(value: boolean | cdktf.IResolvable) {
    this._parseLlmResponseJsonInstructions = value;
  }
  public resetParseLlmResponseJsonInstructions() {
    this._parseLlmResponseJsonInstructions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseLlmResponseJsonInstructionsInput() {
    return this._parseLlmResponseJsonInstructions;
  }

  // prompt - computed: false, optional: false, required: true
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // transformation_extract_pattern - computed: false, optional: true, required: false
  private _transformationExtractPattern?: string; 
  public get transformationExtractPattern() {
    return this.getStringAttribute('transformation_extract_pattern');
  }
  public set transformationExtractPattern(value: string) {
    this._transformationExtractPattern = value;
  }
  public resetTransformationExtractPattern() {
    this._transformationExtractPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationExtractPatternInput() {
    return this._transformationExtractPattern;
  }
}
export interface GatewayPluginAiResponseTransformerConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#id GatewayPluginAiResponseTransformer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiResponseTransformerConsumerToTerraform(struct?: GatewayPluginAiResponseTransformerConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiResponseTransformerConsumerToHclTerraform(struct?: GatewayPluginAiResponseTransformerConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginAiResponseTransformerConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiResponseTransformerConsumerGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#id GatewayPluginAiResponseTransformer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiResponseTransformerConsumerGroupToTerraform(struct?: GatewayPluginAiResponseTransformerConsumerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiResponseTransformerConsumerGroupToHclTerraform(struct?: GatewayPluginAiResponseTransformerConsumerGroup | cdktf.IResolvable): any {
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

export class GatewayPluginAiResponseTransformerConsumerGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerConsumerGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerConsumerGroup | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiResponseTransformerOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#access GatewayPluginAiResponseTransformer#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiResponseTransformerOrderingAfterToTerraform(struct?: GatewayPluginAiResponseTransformerOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiResponseTransformerOrderingAfterToHclTerraform(struct?: GatewayPluginAiResponseTransformerOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginAiResponseTransformerOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiResponseTransformerOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#access GatewayPluginAiResponseTransformer#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiResponseTransformerOrderingBeforeToTerraform(struct?: GatewayPluginAiResponseTransformerOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiResponseTransformerOrderingBeforeToHclTerraform(struct?: GatewayPluginAiResponseTransformerOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginAiResponseTransformerOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiResponseTransformerOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#after GatewayPluginAiResponseTransformer#after}
  */
  readonly after?: GatewayPluginAiResponseTransformerOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#before GatewayPluginAiResponseTransformer#before}
  */
  readonly before?: GatewayPluginAiResponseTransformerOrderingBefore;
}

export function gatewayPluginAiResponseTransformerOrderingToTerraform(struct?: GatewayPluginAiResponseTransformerOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginAiResponseTransformerOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginAiResponseTransformerOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginAiResponseTransformerOrderingToHclTerraform(struct?: GatewayPluginAiResponseTransformerOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginAiResponseTransformerOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiResponseTransformerOrderingAfter",
    },
    before: {
      value: gatewayPluginAiResponseTransformerOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiResponseTransformerOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiResponseTransformerOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginAiResponseTransformerOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginAiResponseTransformerOrderingAfter) {
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
  private _before = new GatewayPluginAiResponseTransformerOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginAiResponseTransformerOrderingBefore) {
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
export interface GatewayPluginAiResponseTransformerPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#id GatewayPluginAiResponseTransformer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#name GatewayPluginAiResponseTransformer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#path GatewayPluginAiResponseTransformer#path}
  */
  readonly path?: string;
}

export function gatewayPluginAiResponseTransformerPartialsToTerraform(struct?: GatewayPluginAiResponseTransformerPartials | cdktf.IResolvable): any {
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


export function gatewayPluginAiResponseTransformerPartialsToHclTerraform(struct?: GatewayPluginAiResponseTransformerPartials | cdktf.IResolvable): any {
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

export class GatewayPluginAiResponseTransformerPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiResponseTransformerPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAiResponseTransformerPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiResponseTransformerPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiResponseTransformerPartialsOutputReference {
    return new GatewayPluginAiResponseTransformerPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiResponseTransformerRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#id GatewayPluginAiResponseTransformer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiResponseTransformerRouteToTerraform(struct?: GatewayPluginAiResponseTransformerRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiResponseTransformerRouteToHclTerraform(struct?: GatewayPluginAiResponseTransformerRoute | cdktf.IResolvable): any {
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

export class GatewayPluginAiResponseTransformerRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiResponseTransformerService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#id GatewayPluginAiResponseTransformer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiResponseTransformerServiceToTerraform(struct?: GatewayPluginAiResponseTransformerService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiResponseTransformerServiceToHclTerraform(struct?: GatewayPluginAiResponseTransformerService | cdktf.IResolvable): any {
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

export class GatewayPluginAiResponseTransformerServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiResponseTransformerService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiResponseTransformerService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer konnect_gateway_plugin_ai_response_transformer}
*/
export class GatewayPluginAiResponseTransformer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_ai_response_transformer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginAiResponseTransformer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginAiResponseTransformer to import
  * @param importFromId The id of the existing GatewayPluginAiResponseTransformer that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginAiResponseTransformer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_ai_response_transformer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_response_transformer konnect_gateway_plugin_ai_response_transformer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginAiResponseTransformerConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginAiResponseTransformerConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_ai_response_transformer',
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
  private _config = new GatewayPluginAiResponseTransformerConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginAiResponseTransformerConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginAiResponseTransformerConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginAiResponseTransformerConsumer) {
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
  private _consumerGroup = new GatewayPluginAiResponseTransformerConsumerGroupOutputReference(this, "consumer_group");
  public get consumerGroup() {
    return this._consumerGroup;
  }
  public putConsumerGroup(value: GatewayPluginAiResponseTransformerConsumerGroup) {
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
  private _ordering = new GatewayPluginAiResponseTransformerOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginAiResponseTransformerOrdering) {
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
  private _partials = new GatewayPluginAiResponseTransformerPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginAiResponseTransformerPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginAiResponseTransformerRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginAiResponseTransformerRoute) {
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
  private _service = new GatewayPluginAiResponseTransformerServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginAiResponseTransformerService) {
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
      config: gatewayPluginAiResponseTransformerConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginAiResponseTransformerConsumerToTerraform(this._consumer.internalValue),
      consumer_group: gatewayPluginAiResponseTransformerConsumerGroupToTerraform(this._consumerGroup.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginAiResponseTransformerOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginAiResponseTransformerPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginAiResponseTransformerRouteToTerraform(this._route.internalValue),
      service: gatewayPluginAiResponseTransformerServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginAiResponseTransformerConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiResponseTransformerConfigA",
      },
      consumer: {
        value: gatewayPluginAiResponseTransformerConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiResponseTransformerConsumer",
      },
      consumer_group: {
        value: gatewayPluginAiResponseTransformerConsumerGroupToHclTerraform(this._consumerGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiResponseTransformerConsumerGroup",
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
        value: gatewayPluginAiResponseTransformerOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiResponseTransformerOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginAiResponseTransformerPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginAiResponseTransformerPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginAiResponseTransformerRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiResponseTransformerRoute",
      },
      service: {
        value: gatewayPluginAiResponseTransformerServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiResponseTransformerService",
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
