// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginAiProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#config GatewayPluginAiProxy#config}
  */
  readonly config: GatewayPluginAiProxyConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#consumer GatewayPluginAiProxy#consumer}
  */
  readonly consumer?: GatewayPluginAiProxyConsumer;
  /**
  * If set, the plugin will activate only for requests where the specified consumer group has been authenticated. (Note that some plugins can not be restricted to consumers groups this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#consumer_group GatewayPluginAiProxy#consumer_group}
  */
  readonly consumerGroup?: GatewayPluginAiProxyConsumerGroup;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#control_plane_id GatewayPluginAiProxy#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#created_at GatewayPluginAiProxy#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#enabled GatewayPluginAiProxy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#id GatewayPluginAiProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#instance_name GatewayPluginAiProxy#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#ordering GatewayPluginAiProxy#ordering}
  */
  readonly ordering?: GatewayPluginAiProxyOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#partials GatewayPluginAiProxy#partials}
  */
  readonly partials?: GatewayPluginAiProxyPartials[] | cdktf.IResolvable;
  /**
  * A list of the request protocols that will trigger this plugin. The default value, as well as the possible values allowed on this field, may change depending on the plugin type. For example, plugins that only work in stream mode will only support tcp and tls. Default: ["grpc","grpcs","http","https","ws","wss"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#protocols GatewayPluginAiProxy#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#route GatewayPluginAiProxy#route}
  */
  readonly route?: GatewayPluginAiProxyRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#service GatewayPluginAiProxy#service}
  */
  readonly service?: GatewayPluginAiProxyService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#tags GatewayPluginAiProxy#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#updated_at GatewayPluginAiProxy#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginAiProxyConfigAuth {
  /**
  * If enabled, the authorization header or parameter can be overridden in the request by the value configured in the plugin. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#allow_override GatewayPluginAiProxy#allow_override}
  */
  readonly allowOverride?: boolean | cdktf.IResolvable;
  /**
  * Set this if you are using an AWS provider (Bedrock) and you are authenticating using static IAM User credentials. Setting this will override the AWS_ACCESS_KEY_ID environment variable for this plugin instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#aws_access_key_id GatewayPluginAiProxy#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Set this if you are using an AWS provider (Bedrock) and you are authenticating using static IAM User credentials. Setting this will override the AWS_SECRET_ACCESS_KEY environment variable for this plugin instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#aws_secret_access_key GatewayPluginAiProxy#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#azure_client_id GatewayPluginAiProxy#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#azure_client_secret GatewayPluginAiProxy#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * If azure_use_managed_identity is set to true, and you need to use a different user-assigned identity for this LLM instance, set the tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#azure_tenant_id GatewayPluginAiProxy#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Set true to use the Azure Cloud Managed Identity (or user-assigned identity) to authenticate with Azure-provider models. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#azure_use_managed_identity GatewayPluginAiProxy#azure_use_managed_identity}
  */
  readonly azureUseManagedIdentity?: boolean | cdktf.IResolvable;
  /**
  * Set this field to the full JSON of the GCP service account to authenticate, if required. If null (and gcp_use_service_account is true), Kong will attempt to read from environment variable `GCP_SERVICE_ACCOUNT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#gcp_service_account_json GatewayPluginAiProxy#gcp_service_account_json}
  */
  readonly gcpServiceAccountJson?: string;
  /**
  * Use service account auth for GCP-based providers and models. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#gcp_use_service_account GatewayPluginAiProxy#gcp_use_service_account}
  */
  readonly gcpUseServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * If AI model requires authentication via Authorization or API key header, specify its name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#header_name GatewayPluginAiProxy#header_name}
  */
  readonly headerName?: string;
  /**
  * Specify the full auth header value for 'header_name', for example 'Bearer key' or just 'key'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#header_value GatewayPluginAiProxy#header_value}
  */
  readonly headerValue?: string;
  /**
  * Specify whether the 'param_name' and 'param_value' options go in a query string, or the POST form/JSON body. must be one of ["body", "query"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#param_location GatewayPluginAiProxy#param_location}
  */
  readonly paramLocation?: string;
  /**
  * If AI model requires authentication via query parameter, specify its name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#param_name GatewayPluginAiProxy#param_name}
  */
  readonly paramName?: string;
  /**
  * Specify the full parameter value for 'param_name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#param_value GatewayPluginAiProxy#param_value}
  */
  readonly paramValue?: string;
}

export function gatewayPluginAiProxyConfigAuthToTerraform(struct?: GatewayPluginAiProxyConfigAuth | cdktf.IResolvable): any {
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


export function gatewayPluginAiProxyConfigAuthToHclTerraform(struct?: GatewayPluginAiProxyConfigAuth | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyConfigAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyConfigAuth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyConfigAuth | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyConfigLogging {
  /**
  * If enabled, will log the request and response body into the Kong log plugin(s) output. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#log_payloads GatewayPluginAiProxy#log_payloads}
  */
  readonly logPayloads?: boolean | cdktf.IResolvable;
  /**
  * If enabled and supported by the driver, will add model usage and token metrics into the Kong log plugin(s) output. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#log_statistics GatewayPluginAiProxy#log_statistics}
  */
  readonly logStatistics?: boolean | cdktf.IResolvable;
}

export function gatewayPluginAiProxyConfigLoggingToTerraform(struct?: GatewayPluginAiProxyConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_payloads: cdktf.booleanToTerraform(struct!.logPayloads),
    log_statistics: cdktf.booleanToTerraform(struct!.logStatistics),
  }
}


export function gatewayPluginAiProxyConfigLoggingToHclTerraform(struct?: GatewayPluginAiProxyConfigLogging | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyConfigLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyConfigLogging | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyConfigModelOptionsBedrock {
  /**
  * If using AWS providers (Bedrock) you can assume a different role after authentication with the current IAM context is successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#aws_assume_role_arn GatewayPluginAiProxy#aws_assume_role_arn}
  */
  readonly awsAssumeRoleArn?: string;
  /**
  * If using AWS providers (Bedrock) you can override the `AWS_REGION` environment variable by setting this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#aws_region GatewayPluginAiProxy#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * If using AWS providers (Bedrock), set the identifier of the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#aws_role_session_name GatewayPluginAiProxy#aws_role_session_name}
  */
  readonly awsRoleSessionName?: string;
  /**
  * If using AWS providers (Bedrock), override the STS endpoint URL when assuming a different role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#aws_sts_endpoint_url GatewayPluginAiProxy#aws_sts_endpoint_url}
  */
  readonly awsStsEndpointUrl?: string;
  /**
  * If using AWS providers (Bedrock), set to true to normalize the embeddings. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#embeddings_normalize GatewayPluginAiProxy#embeddings_normalize}
  */
  readonly embeddingsNormalize?: boolean | cdktf.IResolvable;
  /**
  * Force the client's performance configuration 'latency' for all requests. Leave empty to let the consumer select the performance configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#performance_config_latency GatewayPluginAiProxy#performance_config_latency}
  */
  readonly performanceConfigLatency?: string;
}

export function gatewayPluginAiProxyConfigModelOptionsBedrockToTerraform(struct?: GatewayPluginAiProxyConfigModelOptionsBedrock | cdktf.IResolvable): any {
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


export function gatewayPluginAiProxyConfigModelOptionsBedrockToHclTerraform(struct?: GatewayPluginAiProxyConfigModelOptionsBedrock | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyConfigModelOptionsBedrockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyConfigModelOptionsBedrock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyConfigModelOptionsBedrock | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyConfigModelOptionsCohere {
  /**
  * The purpose of the input text to calculate embedding vectors. Default: "classification"; must be one of ["classification", "clustering", "image", "search_document", "search_query"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#embedding_input_type GatewayPluginAiProxy#embedding_input_type}
  */
  readonly embeddingInputType?: string;
  /**
  * Wait for the model if it is not ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#wait_for_model GatewayPluginAiProxy#wait_for_model}
  */
  readonly waitForModel?: boolean | cdktf.IResolvable;
}

export function gatewayPluginAiProxyConfigModelOptionsCohereToTerraform(struct?: GatewayPluginAiProxyConfigModelOptionsCohere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_input_type: cdktf.stringToTerraform(struct!.embeddingInputType),
    wait_for_model: cdktf.booleanToTerraform(struct!.waitForModel),
  }
}


export function gatewayPluginAiProxyConfigModelOptionsCohereToHclTerraform(struct?: GatewayPluginAiProxyConfigModelOptionsCohere | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyConfigModelOptionsCohereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyConfigModelOptionsCohere | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyConfigModelOptionsCohere | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyConfigModelOptionsGemini {
  /**
  * If running Gemini on Vertex, specify the regional API endpoint (hostname only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#api_endpoint GatewayPluginAiProxy#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * If running Gemini on Vertex Model Garden, specify the endpoint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#endpoint_id GatewayPluginAiProxy#endpoint_id}
  */
  readonly endpointId?: string;
  /**
  * If running Gemini on Vertex, specify the location ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#location_id GatewayPluginAiProxy#location_id}
  */
  readonly locationId?: string;
  /**
  * If running Gemini on Vertex, specify the project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#project_id GatewayPluginAiProxy#project_id}
  */
  readonly projectId?: string;
}

export function gatewayPluginAiProxyConfigModelOptionsGeminiToTerraform(struct?: GatewayPluginAiProxyConfigModelOptionsGemini | cdktf.IResolvable): any {
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


export function gatewayPluginAiProxyConfigModelOptionsGeminiToHclTerraform(struct?: GatewayPluginAiProxyConfigModelOptionsGemini | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyConfigModelOptionsGeminiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyConfigModelOptionsGemini | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyConfigModelOptionsGemini | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyConfigModelOptionsHuggingface {
  /**
  * Use the cache layer on the inference API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#use_cache GatewayPluginAiProxy#use_cache}
  */
  readonly useCache?: boolean | cdktf.IResolvable;
  /**
  * Wait for the model if it is not ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#wait_for_model GatewayPluginAiProxy#wait_for_model}
  */
  readonly waitForModel?: boolean | cdktf.IResolvable;
}

export function gatewayPluginAiProxyConfigModelOptionsHuggingfaceToTerraform(struct?: GatewayPluginAiProxyConfigModelOptionsHuggingface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_cache: cdktf.booleanToTerraform(struct!.useCache),
    wait_for_model: cdktf.booleanToTerraform(struct!.waitForModel),
  }
}


export function gatewayPluginAiProxyConfigModelOptionsHuggingfaceToHclTerraform(struct?: GatewayPluginAiProxyConfigModelOptionsHuggingface | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyConfigModelOptionsHuggingfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyConfigModelOptionsHuggingface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyConfigModelOptionsHuggingface | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyConfigModelOptions {
  /**
  * Defines the schema/API version, if using Anthropic provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#anthropic_version GatewayPluginAiProxy#anthropic_version}
  */
  readonly anthropicVersion?: string;
  /**
  * 'api-version' for Azure OpenAI instances. Default: "2023-05-15"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#azure_api_version GatewayPluginAiProxy#azure_api_version}
  */
  readonly azureApiVersion?: string;
  /**
  * Deployment ID for Azure OpenAI instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#azure_deployment_id GatewayPluginAiProxy#azure_deployment_id}
  */
  readonly azureDeploymentId?: string;
  /**
  * Instance name for Azure OpenAI hosted models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#azure_instance GatewayPluginAiProxy#azure_instance}
  */
  readonly azureInstance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#bedrock GatewayPluginAiProxy#bedrock}
  */
  readonly bedrock?: GatewayPluginAiProxyConfigModelOptionsBedrock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#cohere GatewayPluginAiProxy#cohere}
  */
  readonly cohere?: GatewayPluginAiProxyConfigModelOptionsCohere;
  /**
  * If using embeddings models, set the number of dimensions to generate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#embeddings_dimensions GatewayPluginAiProxy#embeddings_dimensions}
  */
  readonly embeddingsDimensions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#gemini GatewayPluginAiProxy#gemini}
  */
  readonly gemini?: GatewayPluginAiProxyConfigModelOptionsGemini;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#huggingface GatewayPluginAiProxy#huggingface}
  */
  readonly huggingface?: GatewayPluginAiProxyConfigModelOptionsHuggingface;
  /**
  * Defines the cost per 1M tokens in your prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#input_cost GatewayPluginAiProxy#input_cost}
  */
  readonly inputCost?: number;
  /**
  * If using llama2 provider, select the upstream message format. must be one of ["ollama", "openai", "raw"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#llama2_format GatewayPluginAiProxy#llama2_format}
  */
  readonly llama2Format?: string;
  /**
  * Defines the max_tokens, if using chat or completion models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#max_tokens GatewayPluginAiProxy#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * If using mistral provider, select the upstream message format. must be one of ["ollama", "openai"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#mistral_format GatewayPluginAiProxy#mistral_format}
  */
  readonly mistralFormat?: string;
  /**
  * Defines the cost per 1M tokens in the output of the AI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#output_cost GatewayPluginAiProxy#output_cost}
  */
  readonly outputCost?: number;
  /**
  * Defines the matching temperature, if using chat or completion models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#temperature GatewayPluginAiProxy#temperature}
  */
  readonly temperature?: number;
  /**
  * Defines the top-k most likely tokens, if supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#top_k GatewayPluginAiProxy#top_k}
  */
  readonly topK?: number;
  /**
  * Defines the top-p probability mass, if supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#top_p GatewayPluginAiProxy#top_p}
  */
  readonly topP?: number;
  /**
  * Manually specify or override the AI operation path, used when e.g. using the 'preserve' route_type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#upstream_path GatewayPluginAiProxy#upstream_path}
  */
  readonly upstreamPath?: string;
  /**
  * Manually specify or override the full URL to the AI operation endpoints, when calling (self-)hosted models, or for running via a private endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#upstream_url GatewayPluginAiProxy#upstream_url}
  */
  readonly upstreamUrl?: string;
}

export function gatewayPluginAiProxyConfigModelOptionsToTerraform(struct?: GatewayPluginAiProxyConfigModelOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anthropic_version: cdktf.stringToTerraform(struct!.anthropicVersion),
    azure_api_version: cdktf.stringToTerraform(struct!.azureApiVersion),
    azure_deployment_id: cdktf.stringToTerraform(struct!.azureDeploymentId),
    azure_instance: cdktf.stringToTerraform(struct!.azureInstance),
    bedrock: gatewayPluginAiProxyConfigModelOptionsBedrockToTerraform(struct!.bedrock),
    cohere: gatewayPluginAiProxyConfigModelOptionsCohereToTerraform(struct!.cohere),
    embeddings_dimensions: cdktf.numberToTerraform(struct!.embeddingsDimensions),
    gemini: gatewayPluginAiProxyConfigModelOptionsGeminiToTerraform(struct!.gemini),
    huggingface: gatewayPluginAiProxyConfigModelOptionsHuggingfaceToTerraform(struct!.huggingface),
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


export function gatewayPluginAiProxyConfigModelOptionsToHclTerraform(struct?: GatewayPluginAiProxyConfigModelOptions | cdktf.IResolvable): any {
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
      value: gatewayPluginAiProxyConfigModelOptionsBedrockToHclTerraform(struct!.bedrock),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyConfigModelOptionsBedrock",
    },
    cohere: {
      value: gatewayPluginAiProxyConfigModelOptionsCohereToHclTerraform(struct!.cohere),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyConfigModelOptionsCohere",
    },
    embeddings_dimensions: {
      value: cdktf.numberToHclTerraform(struct!.embeddingsDimensions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gemini: {
      value: gatewayPluginAiProxyConfigModelOptionsGeminiToHclTerraform(struct!.gemini),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyConfigModelOptionsGemini",
    },
    huggingface: {
      value: gatewayPluginAiProxyConfigModelOptionsHuggingfaceToHclTerraform(struct!.huggingface),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyConfigModelOptionsHuggingface",
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

export class GatewayPluginAiProxyConfigModelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyConfigModelOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyConfigModelOptions | cdktf.IResolvable | undefined) {
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
  private _bedrock = new GatewayPluginAiProxyConfigModelOptionsBedrockOutputReference(this, "bedrock");
  public get bedrock() {
    return this._bedrock;
  }
  public putBedrock(value: GatewayPluginAiProxyConfigModelOptionsBedrock) {
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
  private _cohere = new GatewayPluginAiProxyConfigModelOptionsCohereOutputReference(this, "cohere");
  public get cohere() {
    return this._cohere;
  }
  public putCohere(value: GatewayPluginAiProxyConfigModelOptionsCohere) {
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
  private _gemini = new GatewayPluginAiProxyConfigModelOptionsGeminiOutputReference(this, "gemini");
  public get gemini() {
    return this._gemini;
  }
  public putGemini(value: GatewayPluginAiProxyConfigModelOptionsGemini) {
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
  private _huggingface = new GatewayPluginAiProxyConfigModelOptionsHuggingfaceOutputReference(this, "huggingface");
  public get huggingface() {
    return this._huggingface;
  }
  public putHuggingface(value: GatewayPluginAiProxyConfigModelOptionsHuggingface) {
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
export interface GatewayPluginAiProxyConfigModel {
  /**
  * Model name to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#name GatewayPluginAiProxy#name}
  */
  readonly name?: string;
  /**
  * Key/value settings for the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#options GatewayPluginAiProxy#options}
  */
  readonly options?: GatewayPluginAiProxyConfigModelOptions;
  /**
  * AI provider request format - Kong translates requests to and from the specified backend compatible formats. must be one of ["anthropic", "azure", "bedrock", "cohere", "gemini", "huggingface", "llama2", "mistral", "openai"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#provider GatewayPluginAiProxy#provider}
  */
  readonly provider: string;
}

export function gatewayPluginAiProxyConfigModelToTerraform(struct?: GatewayPluginAiProxyConfigModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    options: gatewayPluginAiProxyConfigModelOptionsToTerraform(struct!.options),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}


export function gatewayPluginAiProxyConfigModelToHclTerraform(struct?: GatewayPluginAiProxyConfigModel | cdktf.IResolvable): any {
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
      value: gatewayPluginAiProxyConfigModelOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyConfigModelOptions",
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

export class GatewayPluginAiProxyConfigModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyConfigModel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyConfigModel | cdktf.IResolvable | undefined) {
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
  private _options = new GatewayPluginAiProxyConfigModelOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: GatewayPluginAiProxyConfigModelOptions) {
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
export interface GatewayPluginAiProxyConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#auth GatewayPluginAiProxy#auth}
  */
  readonly auth?: GatewayPluginAiProxyConfigAuth;
  /**
  * Generative AI category of the request. Default: "text/generation"; must be one of ["audio/speech", "audio/transcription", "image/generation", "text/embeddings", "text/generation"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#genai_category GatewayPluginAiProxy#genai_category}
  */
  readonly genaiCategory?: string;
  /**
  * LLM input and output format and schema to use. Default: "openai"; must be one of ["bedrock", "cohere", "gemini", "huggingface", "openai"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#llm_format GatewayPluginAiProxy#llm_format}
  */
  readonly llmFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#logging GatewayPluginAiProxy#logging}
  */
  readonly logging?: GatewayPluginAiProxyConfigLogging;
  /**
  * max allowed body size allowed to be introspected. 0 means unlimited, but the size of this body will still be limited by Nginx's client_max_body_size. Default: 8192
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#max_request_body_size GatewayPluginAiProxy#max_request_body_size}
  */
  readonly maxRequestBodySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#model GatewayPluginAiProxy#model}
  */
  readonly model: GatewayPluginAiProxyConfigModel;
  /**
  * Display the model name selected in the X-Kong-LLM-Model response header. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#model_name_header GatewayPluginAiProxy#model_name_header}
  */
  readonly modelNameHeader?: boolean | cdktf.IResolvable;
  /**
  * Whether to 'optionally allow', 'deny', or 'always' (force) the streaming of answers via server sent events. Default: "allow"; must be one of ["allow", "always", "deny"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#response_streaming GatewayPluginAiProxy#response_streaming}
  */
  readonly responseStreaming?: string;
  /**
  * The model's operation implementation, for this provider. must be one of ["audio/v1/audio/speech", "audio/v1/audio/transcriptions", "audio/v1/audio/translations", "image/v1/images/edits", "image/v1/images/generations", "llm/v1/assistants", "llm/v1/batches", "llm/v1/chat", "llm/v1/completions", "llm/v1/embeddings", "llm/v1/files", "llm/v1/responses", "preserve", "realtime/v1/realtime"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#route_type GatewayPluginAiProxy#route_type}
  */
  readonly routeType: string;
}

export function gatewayPluginAiProxyConfigAToTerraform(struct?: GatewayPluginAiProxyConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: gatewayPluginAiProxyConfigAuthToTerraform(struct!.auth),
    genai_category: cdktf.stringToTerraform(struct!.genaiCategory),
    llm_format: cdktf.stringToTerraform(struct!.llmFormat),
    logging: gatewayPluginAiProxyConfigLoggingToTerraform(struct!.logging),
    max_request_body_size: cdktf.numberToTerraform(struct!.maxRequestBodySize),
    model: gatewayPluginAiProxyConfigModelToTerraform(struct!.model),
    model_name_header: cdktf.booleanToTerraform(struct!.modelNameHeader),
    response_streaming: cdktf.stringToTerraform(struct!.responseStreaming),
    route_type: cdktf.stringToTerraform(struct!.routeType),
  }
}


export function gatewayPluginAiProxyConfigAToHclTerraform(struct?: GatewayPluginAiProxyConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: gatewayPluginAiProxyConfigAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyConfigAuth",
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
    logging: {
      value: gatewayPluginAiProxyConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyConfigLogging",
    },
    max_request_body_size: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model: {
      value: gatewayPluginAiProxyConfigModelToHclTerraform(struct!.model),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyConfigModel",
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

export class GatewayPluginAiProxyConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._genaiCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.genaiCategory = this._genaiCategory;
    }
    if (this._llmFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmFormat = this._llmFormat;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._maxRequestBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBodySize = this._maxRequestBodySize;
    }
    if (this._model?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model?.internalValue;
    }
    if (this._modelNameHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelNameHeader = this._modelNameHeader;
    }
    if (this._responseStreaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseStreaming = this._responseStreaming;
    }
    if (this._routeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeType = this._routeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiProxyConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._genaiCategory = undefined;
      this._llmFormat = undefined;
      this._logging.internalValue = undefined;
      this._maxRequestBodySize = undefined;
      this._model.internalValue = undefined;
      this._modelNameHeader = undefined;
      this._responseStreaming = undefined;
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
      this._genaiCategory = value.genaiCategory;
      this._llmFormat = value.llmFormat;
      this._logging.internalValue = value.logging;
      this._maxRequestBodySize = value.maxRequestBodySize;
      this._model.internalValue = value.model;
      this._modelNameHeader = value.modelNameHeader;
      this._responseStreaming = value.responseStreaming;
      this._routeType = value.routeType;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new GatewayPluginAiProxyConfigAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: GatewayPluginAiProxyConfigAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
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

  // logging - computed: true, optional: true, required: false
  private _logging = new GatewayPluginAiProxyConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: GatewayPluginAiProxyConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
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

  // model - computed: false, optional: false, required: true
  private _model = new GatewayPluginAiProxyConfigModelOutputReference(this, "model");
  public get model() {
    return this._model;
  }
  public putModel(value: GatewayPluginAiProxyConfigModel) {
    this._model.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
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
export interface GatewayPluginAiProxyConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#id GatewayPluginAiProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiProxyConsumerToTerraform(struct?: GatewayPluginAiProxyConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiProxyConsumerToHclTerraform(struct?: GatewayPluginAiProxyConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyConsumerGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#id GatewayPluginAiProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiProxyConsumerGroupToTerraform(struct?: GatewayPluginAiProxyConsumerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiProxyConsumerGroupToHclTerraform(struct?: GatewayPluginAiProxyConsumerGroup | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyConsumerGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyConsumerGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyConsumerGroup | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#access GatewayPluginAiProxy#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiProxyOrderingAfterToTerraform(struct?: GatewayPluginAiProxyOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiProxyOrderingAfterToHclTerraform(struct?: GatewayPluginAiProxyOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#access GatewayPluginAiProxy#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiProxyOrderingBeforeToTerraform(struct?: GatewayPluginAiProxyOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiProxyOrderingBeforeToHclTerraform(struct?: GatewayPluginAiProxyOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#after GatewayPluginAiProxy#after}
  */
  readonly after?: GatewayPluginAiProxyOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#before GatewayPluginAiProxy#before}
  */
  readonly before?: GatewayPluginAiProxyOrderingBefore;
}

export function gatewayPluginAiProxyOrderingToTerraform(struct?: GatewayPluginAiProxyOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginAiProxyOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginAiProxyOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginAiProxyOrderingToHclTerraform(struct?: GatewayPluginAiProxyOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginAiProxyOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyOrderingAfter",
    },
    before: {
      value: gatewayPluginAiProxyOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiProxyOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiProxyOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginAiProxyOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginAiProxyOrderingAfter) {
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
  private _before = new GatewayPluginAiProxyOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginAiProxyOrderingBefore) {
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
export interface GatewayPluginAiProxyPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#id GatewayPluginAiProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#name GatewayPluginAiProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#path GatewayPluginAiProxy#path}
  */
  readonly path?: string;
}

export function gatewayPluginAiProxyPartialsToTerraform(struct?: GatewayPluginAiProxyPartials | cdktf.IResolvable): any {
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


export function gatewayPluginAiProxyPartialsToHclTerraform(struct?: GatewayPluginAiProxyPartials | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiProxyPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAiProxyPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiProxyPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiProxyPartialsOutputReference {
    return new GatewayPluginAiProxyPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiProxyRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#id GatewayPluginAiProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiProxyRouteToTerraform(struct?: GatewayPluginAiProxyRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiProxyRouteToHclTerraform(struct?: GatewayPluginAiProxyRoute | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiProxyService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#id GatewayPluginAiProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiProxyServiceToTerraform(struct?: GatewayPluginAiProxyService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiProxyServiceToHclTerraform(struct?: GatewayPluginAiProxyService | cdktf.IResolvable): any {
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

export class GatewayPluginAiProxyServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiProxyService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiProxyService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy konnect_gateway_plugin_ai_proxy}
*/
export class GatewayPluginAiProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_ai_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginAiProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginAiProxy to import
  * @param importFromId The id of the existing GatewayPluginAiProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginAiProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_ai_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_proxy konnect_gateway_plugin_ai_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginAiProxyConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginAiProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_ai_proxy',
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
  private _config = new GatewayPluginAiProxyConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginAiProxyConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginAiProxyConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginAiProxyConsumer) {
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
  private _consumerGroup = new GatewayPluginAiProxyConsumerGroupOutputReference(this, "consumer_group");
  public get consumerGroup() {
    return this._consumerGroup;
  }
  public putConsumerGroup(value: GatewayPluginAiProxyConsumerGroup) {
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
  private _ordering = new GatewayPluginAiProxyOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginAiProxyOrdering) {
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
  private _partials = new GatewayPluginAiProxyPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginAiProxyPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginAiProxyRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginAiProxyRoute) {
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
  private _service = new GatewayPluginAiProxyServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginAiProxyService) {
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
      config: gatewayPluginAiProxyConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginAiProxyConsumerToTerraform(this._consumer.internalValue),
      consumer_group: gatewayPluginAiProxyConsumerGroupToTerraform(this._consumerGroup.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginAiProxyOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginAiProxyPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginAiProxyRouteToTerraform(this._route.internalValue),
      service: gatewayPluginAiProxyServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginAiProxyConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiProxyConfigA",
      },
      consumer: {
        value: gatewayPluginAiProxyConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiProxyConsumer",
      },
      consumer_group: {
        value: gatewayPluginAiProxyConsumerGroupToHclTerraform(this._consumerGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiProxyConsumerGroup",
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
        value: gatewayPluginAiProxyOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiProxyOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginAiProxyPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginAiProxyPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginAiProxyRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiProxyRoute",
      },
      service: {
        value: gatewayPluginAiProxyServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiProxyService",
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
