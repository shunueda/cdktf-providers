// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginAiGcpModelArmorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#config GatewayPluginAiGcpModelArmor#config}
  */
  readonly config: GatewayPluginAiGcpModelArmorConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#consumer GatewayPluginAiGcpModelArmor#consumer}
  */
  readonly consumer?: GatewayPluginAiGcpModelArmorConsumer;
  /**
  * If set, the plugin will activate only for requests where the specified consumer group has been authenticated. (Note that some plugins can not be restricted to consumers groups this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#consumer_group GatewayPluginAiGcpModelArmor#consumer_group}
  */
  readonly consumerGroup?: GatewayPluginAiGcpModelArmorConsumerGroup;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#control_plane_id GatewayPluginAiGcpModelArmor#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#created_at GatewayPluginAiGcpModelArmor#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#enabled GatewayPluginAiGcpModelArmor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#id GatewayPluginAiGcpModelArmor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#instance_name GatewayPluginAiGcpModelArmor#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#ordering GatewayPluginAiGcpModelArmor#ordering}
  */
  readonly ordering?: GatewayPluginAiGcpModelArmorOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#partials GatewayPluginAiGcpModelArmor#partials}
  */
  readonly partials?: GatewayPluginAiGcpModelArmorPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#protocols GatewayPluginAiGcpModelArmor#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#route GatewayPluginAiGcpModelArmor#route}
  */
  readonly route?: GatewayPluginAiGcpModelArmorRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#service GatewayPluginAiGcpModelArmor#service}
  */
  readonly service?: GatewayPluginAiGcpModelArmorService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#tags GatewayPluginAiGcpModelArmor#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#updated_at GatewayPluginAiGcpModelArmor#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginAiGcpModelArmorConfigA {
  /**
  * Enables multi-language detection mode. Must be used with 'source_language'. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#enable_multi_language_detection GatewayPluginAiGcpModelArmor#enable_multi_language_detection}
  */
  readonly enableMultiLanguageDetection?: boolean | cdktf.IResolvable;
  /**
  * Set this field to the full JSON of the GCP service account to authenticate, if required. If null (and gcp_use_service_account is true), Kong will attempt to read from environment variable `GCP_SERVICE_ACCOUNT` or from the instance/container metadata service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#gcp_service_account_json GatewayPluginAiGcpModelArmor#gcp_service_account_json}
  */
  readonly gcpServiceAccountJson?: string;
  /**
  * Use service account auth for GCP-based providers and models. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#gcp_use_service_account GatewayPluginAiGcpModelArmor#gcp_use_service_account}
  */
  readonly gcpUseServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * The guardrail mode to use for the request. Default: "INPUT"; must be one of ["BOTH", "INPUT", "OUTPUT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#guarding_mode GatewayPluginAiGcpModelArmor#guarding_mode}
  */
  readonly guardingMode?: string;
  /**
  * GCP Location ID for the GCP Model Armor subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#location_id GatewayPluginAiGcpModelArmor#location_id}
  */
  readonly locationId: string;
  /**
  * GCP Project ID for the GCP Model Armor subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#project_id GatewayPluginAiGcpModelArmor#project_id}
  */
  readonly projectId: string;
  /**
  * The message to return when a failure occurs on the request phase. Default: "Request was filtered by GCP Model Armor"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#request_failure_message GatewayPluginAiGcpModelArmor#request_failure_message}
  */
  readonly requestFailureMessage?: string;
  /**
  * The amount of bytes receiving from upstream to be buffered before sending to the model armor service. This only applies to the response content guard. Default: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#response_buffer_size GatewayPluginAiGcpModelArmor#response_buffer_size}
  */
  readonly responseBufferSize?: number;
  /**
  * The message to return when a failure occurs on the response phase. Default: "Response was filtered by GCP Model Armor"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#response_failure_message GatewayPluginAiGcpModelArmor#response_failure_message}
  */
  readonly responseFailureMessage?: string;
  /**
  * Whether to reveal failure categories in the response to the caller. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#reveal_failure_categories GatewayPluginAiGcpModelArmor#reveal_failure_categories}
  */
  readonly revealFailureCategories?: boolean | cdktf.IResolvable;
  /**
  * Source language (ISO code) to use when 'enable_multi_language_detection' is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#source_language GatewayPluginAiGcpModelArmor#source_language}
  */
  readonly sourceLanguage?: string;
  /**
  * Stop processing if an error occurs. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#stop_on_error GatewayPluginAiGcpModelArmor#stop_on_error}
  */
  readonly stopOnError?: boolean | cdktf.IResolvable;
  /**
  * GCP Model Armor Template ID to enforce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#template_id GatewayPluginAiGcpModelArmor#template_id}
  */
  readonly templateId: string;
  /**
  * Select where to pick the 'text' for the GCP Model Armor Services request. Default: "last_message"; must be one of ["concatenate_all_content", "concatenate_user_content", "last_message"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#text_source GatewayPluginAiGcpModelArmor#text_source}
  */
  readonly textSource?: string;
  /**
  * Connection timeout with the GCP Model Armor service. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#timeout GatewayPluginAiGcpModelArmor#timeout}
  */
  readonly timeout?: number;
}

export function gatewayPluginAiGcpModelArmorConfigAToTerraform(struct?: GatewayPluginAiGcpModelArmorConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_multi_language_detection: cdktf.booleanToTerraform(struct!.enableMultiLanguageDetection),
    gcp_service_account_json: cdktf.stringToTerraform(struct!.gcpServiceAccountJson),
    gcp_use_service_account: cdktf.booleanToTerraform(struct!.gcpUseServiceAccount),
    guarding_mode: cdktf.stringToTerraform(struct!.guardingMode),
    location_id: cdktf.stringToTerraform(struct!.locationId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    request_failure_message: cdktf.stringToTerraform(struct!.requestFailureMessage),
    response_buffer_size: cdktf.numberToTerraform(struct!.responseBufferSize),
    response_failure_message: cdktf.stringToTerraform(struct!.responseFailureMessage),
    reveal_failure_categories: cdktf.booleanToTerraform(struct!.revealFailureCategories),
    source_language: cdktf.stringToTerraform(struct!.sourceLanguage),
    stop_on_error: cdktf.booleanToTerraform(struct!.stopOnError),
    template_id: cdktf.stringToTerraform(struct!.templateId),
    text_source: cdktf.stringToTerraform(struct!.textSource),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function gatewayPluginAiGcpModelArmorConfigAToHclTerraform(struct?: GatewayPluginAiGcpModelArmorConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_multi_language_detection: {
      value: cdktf.booleanToHclTerraform(struct!.enableMultiLanguageDetection),
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
    guarding_mode: {
      value: cdktf.stringToHclTerraform(struct!.guardingMode),
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
    request_failure_message: {
      value: cdktf.stringToHclTerraform(struct!.requestFailureMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.responseBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_failure_message: {
      value: cdktf.stringToHclTerraform(struct!.responseFailureMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reveal_failure_categories: {
      value: cdktf.booleanToHclTerraform(struct!.revealFailureCategories),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_language: {
      value: cdktf.stringToHclTerraform(struct!.sourceLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.stopOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_source: {
      value: cdktf.stringToHclTerraform(struct!.textSource),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiGcpModelArmorConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiGcpModelArmorConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMultiLanguageDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMultiLanguageDetection = this._enableMultiLanguageDetection;
    }
    if (this._gcpServiceAccountJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccountJson = this._gcpServiceAccountJson;
    }
    if (this._gcpUseServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpUseServiceAccount = this._gcpUseServiceAccount;
    }
    if (this._guardingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardingMode = this._guardingMode;
    }
    if (this._locationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationId = this._locationId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._requestFailureMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestFailureMessage = this._requestFailureMessage;
    }
    if (this._responseBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBufferSize = this._responseBufferSize;
    }
    if (this._responseFailureMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFailureMessage = this._responseFailureMessage;
    }
    if (this._revealFailureCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.revealFailureCategories = this._revealFailureCategories;
    }
    if (this._sourceLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLanguage = this._sourceLanguage;
    }
    if (this._stopOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnError = this._stopOnError;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    if (this._textSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.textSource = this._textSource;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiGcpModelArmorConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableMultiLanguageDetection = undefined;
      this._gcpServiceAccountJson = undefined;
      this._gcpUseServiceAccount = undefined;
      this._guardingMode = undefined;
      this._locationId = undefined;
      this._projectId = undefined;
      this._requestFailureMessage = undefined;
      this._responseBufferSize = undefined;
      this._responseFailureMessage = undefined;
      this._revealFailureCategories = undefined;
      this._sourceLanguage = undefined;
      this._stopOnError = undefined;
      this._templateId = undefined;
      this._textSource = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableMultiLanguageDetection = value.enableMultiLanguageDetection;
      this._gcpServiceAccountJson = value.gcpServiceAccountJson;
      this._gcpUseServiceAccount = value.gcpUseServiceAccount;
      this._guardingMode = value.guardingMode;
      this._locationId = value.locationId;
      this._projectId = value.projectId;
      this._requestFailureMessage = value.requestFailureMessage;
      this._responseBufferSize = value.responseBufferSize;
      this._responseFailureMessage = value.responseFailureMessage;
      this._revealFailureCategories = value.revealFailureCategories;
      this._sourceLanguage = value.sourceLanguage;
      this._stopOnError = value.stopOnError;
      this._templateId = value.templateId;
      this._textSource = value.textSource;
      this._timeout = value.timeout;
    }
  }

  // enable_multi_language_detection - computed: true, optional: true, required: false
  private _enableMultiLanguageDetection?: boolean | cdktf.IResolvable; 
  public get enableMultiLanguageDetection() {
    return this.getBooleanAttribute('enable_multi_language_detection');
  }
  public set enableMultiLanguageDetection(value: boolean | cdktf.IResolvable) {
    this._enableMultiLanguageDetection = value;
  }
  public resetEnableMultiLanguageDetection() {
    this._enableMultiLanguageDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultiLanguageDetectionInput() {
    return this._enableMultiLanguageDetection;
  }

  // gcp_service_account_json - computed: false, optional: true, required: false
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

  // guarding_mode - computed: true, optional: true, required: false
  private _guardingMode?: string; 
  public get guardingMode() {
    return this.getStringAttribute('guarding_mode');
  }
  public set guardingMode(value: string) {
    this._guardingMode = value;
  }
  public resetGuardingMode() {
    this._guardingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardingModeInput() {
    return this._guardingMode;
  }

  // location_id - computed: false, optional: false, required: true
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // request_failure_message - computed: true, optional: true, required: false
  private _requestFailureMessage?: string; 
  public get requestFailureMessage() {
    return this.getStringAttribute('request_failure_message');
  }
  public set requestFailureMessage(value: string) {
    this._requestFailureMessage = value;
  }
  public resetRequestFailureMessage() {
    this._requestFailureMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestFailureMessageInput() {
    return this._requestFailureMessage;
  }

  // response_buffer_size - computed: true, optional: true, required: false
  private _responseBufferSize?: number; 
  public get responseBufferSize() {
    return this.getNumberAttribute('response_buffer_size');
  }
  public set responseBufferSize(value: number) {
    this._responseBufferSize = value;
  }
  public resetResponseBufferSize() {
    this._responseBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBufferSizeInput() {
    return this._responseBufferSize;
  }

  // response_failure_message - computed: true, optional: true, required: false
  private _responseFailureMessage?: string; 
  public get responseFailureMessage() {
    return this.getStringAttribute('response_failure_message');
  }
  public set responseFailureMessage(value: string) {
    this._responseFailureMessage = value;
  }
  public resetResponseFailureMessage() {
    this._responseFailureMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFailureMessageInput() {
    return this._responseFailureMessage;
  }

  // reveal_failure_categories - computed: true, optional: true, required: false
  private _revealFailureCategories?: boolean | cdktf.IResolvable; 
  public get revealFailureCategories() {
    return this.getBooleanAttribute('reveal_failure_categories');
  }
  public set revealFailureCategories(value: boolean | cdktf.IResolvable) {
    this._revealFailureCategories = value;
  }
  public resetRevealFailureCategories() {
    this._revealFailureCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revealFailureCategoriesInput() {
    return this._revealFailureCategories;
  }

  // source_language - computed: false, optional: true, required: false
  private _sourceLanguage?: string; 
  public get sourceLanguage() {
    return this.getStringAttribute('source_language');
  }
  public set sourceLanguage(value: string) {
    this._sourceLanguage = value;
  }
  public resetSourceLanguage() {
    this._sourceLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLanguageInput() {
    return this._sourceLanguage;
  }

  // stop_on_error - computed: true, optional: true, required: false
  private _stopOnError?: boolean | cdktf.IResolvable; 
  public get stopOnError() {
    return this.getBooleanAttribute('stop_on_error');
  }
  public set stopOnError(value: boolean | cdktf.IResolvable) {
    this._stopOnError = value;
  }
  public resetStopOnError() {
    this._stopOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnErrorInput() {
    return this._stopOnError;
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // text_source - computed: true, optional: true, required: false
  private _textSource?: string; 
  public get textSource() {
    return this.getStringAttribute('text_source');
  }
  public set textSource(value: string) {
    this._textSource = value;
  }
  public resetTextSource() {
    this._textSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textSourceInput() {
    return this._textSource;
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
}
export interface GatewayPluginAiGcpModelArmorConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#id GatewayPluginAiGcpModelArmor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiGcpModelArmorConsumerToTerraform(struct?: GatewayPluginAiGcpModelArmorConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiGcpModelArmorConsumerToHclTerraform(struct?: GatewayPluginAiGcpModelArmorConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginAiGcpModelArmorConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiGcpModelArmorConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiGcpModelArmorConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiGcpModelArmorConsumerGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#id GatewayPluginAiGcpModelArmor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiGcpModelArmorConsumerGroupToTerraform(struct?: GatewayPluginAiGcpModelArmorConsumerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiGcpModelArmorConsumerGroupToHclTerraform(struct?: GatewayPluginAiGcpModelArmorConsumerGroup | cdktf.IResolvable): any {
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

export class GatewayPluginAiGcpModelArmorConsumerGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiGcpModelArmorConsumerGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiGcpModelArmorConsumerGroup | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiGcpModelArmorOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#access GatewayPluginAiGcpModelArmor#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiGcpModelArmorOrderingAfterToTerraform(struct?: GatewayPluginAiGcpModelArmorOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiGcpModelArmorOrderingAfterToHclTerraform(struct?: GatewayPluginAiGcpModelArmorOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginAiGcpModelArmorOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiGcpModelArmorOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiGcpModelArmorOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiGcpModelArmorOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#access GatewayPluginAiGcpModelArmor#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiGcpModelArmorOrderingBeforeToTerraform(struct?: GatewayPluginAiGcpModelArmorOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiGcpModelArmorOrderingBeforeToHclTerraform(struct?: GatewayPluginAiGcpModelArmorOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginAiGcpModelArmorOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiGcpModelArmorOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiGcpModelArmorOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiGcpModelArmorOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#after GatewayPluginAiGcpModelArmor#after}
  */
  readonly after?: GatewayPluginAiGcpModelArmorOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#before GatewayPluginAiGcpModelArmor#before}
  */
  readonly before?: GatewayPluginAiGcpModelArmorOrderingBefore;
}

export function gatewayPluginAiGcpModelArmorOrderingToTerraform(struct?: GatewayPluginAiGcpModelArmorOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginAiGcpModelArmorOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginAiGcpModelArmorOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginAiGcpModelArmorOrderingToHclTerraform(struct?: GatewayPluginAiGcpModelArmorOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginAiGcpModelArmorOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiGcpModelArmorOrderingAfter",
    },
    before: {
      value: gatewayPluginAiGcpModelArmorOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiGcpModelArmorOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiGcpModelArmorOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiGcpModelArmorOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiGcpModelArmorOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginAiGcpModelArmorOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginAiGcpModelArmorOrderingAfter) {
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
  private _before = new GatewayPluginAiGcpModelArmorOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginAiGcpModelArmorOrderingBefore) {
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
export interface GatewayPluginAiGcpModelArmorPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#id GatewayPluginAiGcpModelArmor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#name GatewayPluginAiGcpModelArmor#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#path GatewayPluginAiGcpModelArmor#path}
  */
  readonly path?: string;
}

export function gatewayPluginAiGcpModelArmorPartialsToTerraform(struct?: GatewayPluginAiGcpModelArmorPartials | cdktf.IResolvable): any {
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


export function gatewayPluginAiGcpModelArmorPartialsToHclTerraform(struct?: GatewayPluginAiGcpModelArmorPartials | cdktf.IResolvable): any {
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

export class GatewayPluginAiGcpModelArmorPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiGcpModelArmorPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiGcpModelArmorPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAiGcpModelArmorPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiGcpModelArmorPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiGcpModelArmorPartialsOutputReference {
    return new GatewayPluginAiGcpModelArmorPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiGcpModelArmorRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#id GatewayPluginAiGcpModelArmor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiGcpModelArmorRouteToTerraform(struct?: GatewayPluginAiGcpModelArmorRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiGcpModelArmorRouteToHclTerraform(struct?: GatewayPluginAiGcpModelArmorRoute | cdktf.IResolvable): any {
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

export class GatewayPluginAiGcpModelArmorRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiGcpModelArmorRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiGcpModelArmorRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiGcpModelArmorService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#id GatewayPluginAiGcpModelArmor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiGcpModelArmorServiceToTerraform(struct?: GatewayPluginAiGcpModelArmorService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiGcpModelArmorServiceToHclTerraform(struct?: GatewayPluginAiGcpModelArmorService | cdktf.IResolvable): any {
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

export class GatewayPluginAiGcpModelArmorServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiGcpModelArmorService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiGcpModelArmorService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor konnect_gateway_plugin_ai_gcp_model_armor}
*/
export class GatewayPluginAiGcpModelArmor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_ai_gcp_model_armor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginAiGcpModelArmor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginAiGcpModelArmor to import
  * @param importFromId The id of the existing GatewayPluginAiGcpModelArmor that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginAiGcpModelArmor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_ai_gcp_model_armor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_gcp_model_armor konnect_gateway_plugin_ai_gcp_model_armor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginAiGcpModelArmorConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginAiGcpModelArmorConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_ai_gcp_model_armor',
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
  private _config = new GatewayPluginAiGcpModelArmorConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginAiGcpModelArmorConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginAiGcpModelArmorConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginAiGcpModelArmorConsumer) {
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
  private _consumerGroup = new GatewayPluginAiGcpModelArmorConsumerGroupOutputReference(this, "consumer_group");
  public get consumerGroup() {
    return this._consumerGroup;
  }
  public putConsumerGroup(value: GatewayPluginAiGcpModelArmorConsumerGroup) {
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
  private _ordering = new GatewayPluginAiGcpModelArmorOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginAiGcpModelArmorOrdering) {
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
  private _partials = new GatewayPluginAiGcpModelArmorPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginAiGcpModelArmorPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginAiGcpModelArmorRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginAiGcpModelArmorRoute) {
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
  private _service = new GatewayPluginAiGcpModelArmorServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginAiGcpModelArmorService) {
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
      config: gatewayPluginAiGcpModelArmorConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginAiGcpModelArmorConsumerToTerraform(this._consumer.internalValue),
      consumer_group: gatewayPluginAiGcpModelArmorConsumerGroupToTerraform(this._consumerGroup.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginAiGcpModelArmorOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginAiGcpModelArmorPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginAiGcpModelArmorRouteToTerraform(this._route.internalValue),
      service: gatewayPluginAiGcpModelArmorServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginAiGcpModelArmorConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiGcpModelArmorConfigA",
      },
      consumer: {
        value: gatewayPluginAiGcpModelArmorConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiGcpModelArmorConsumer",
      },
      consumer_group: {
        value: gatewayPluginAiGcpModelArmorConsumerGroupToHclTerraform(this._consumerGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiGcpModelArmorConsumerGroup",
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
        value: gatewayPluginAiGcpModelArmorOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiGcpModelArmorOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginAiGcpModelArmorPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginAiGcpModelArmorPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginAiGcpModelArmorRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiGcpModelArmorRoute",
      },
      service: {
        value: gatewayPluginAiGcpModelArmorServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiGcpModelArmorService",
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
