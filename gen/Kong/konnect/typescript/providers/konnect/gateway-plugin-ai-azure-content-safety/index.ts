// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginAiAzureContentSafetyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#config GatewayPluginAiAzureContentSafety#config}
  */
  readonly config: GatewayPluginAiAzureContentSafetyConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#control_plane_id GatewayPluginAiAzureContentSafety#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#created_at GatewayPluginAiAzureContentSafety#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#enabled GatewayPluginAiAzureContentSafety#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#id GatewayPluginAiAzureContentSafety#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#instance_name GatewayPluginAiAzureContentSafety#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#ordering GatewayPluginAiAzureContentSafety#ordering}
  */
  readonly ordering?: GatewayPluginAiAzureContentSafetyOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#partials GatewayPluginAiAzureContentSafety#partials}
  */
  readonly partials?: GatewayPluginAiAzureContentSafetyPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#protocols GatewayPluginAiAzureContentSafety#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#route GatewayPluginAiAzureContentSafety#route}
  */
  readonly route?: GatewayPluginAiAzureContentSafetyRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#service GatewayPluginAiAzureContentSafety#service}
  */
  readonly service?: GatewayPluginAiAzureContentSafetyService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#tags GatewayPluginAiAzureContentSafety#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#updated_at GatewayPluginAiAzureContentSafety#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginAiAzureContentSafetyConfigCategories {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#name GatewayPluginAiAzureContentSafety#name}
  */
  readonly name?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#rejection_level GatewayPluginAiAzureContentSafety#rejection_level}
  */
  readonly rejectionLevel?: number;
}

export function gatewayPluginAiAzureContentSafetyConfigCategoriesToTerraform(struct?: GatewayPluginAiAzureContentSafetyConfigCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rejection_level: cdktf.numberToTerraform(struct!.rejectionLevel),
  }
}


export function gatewayPluginAiAzureContentSafetyConfigCategoriesToHclTerraform(struct?: GatewayPluginAiAzureContentSafetyConfigCategories | cdktf.IResolvable): any {
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
    rejection_level: {
      value: cdktf.numberToHclTerraform(struct!.rejectionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiAzureContentSafetyConfigCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiAzureContentSafetyConfigCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rejectionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectionLevel = this._rejectionLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiAzureContentSafetyConfigCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rejectionLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rejectionLevel = value.rejectionLevel;
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

  // rejection_level - computed: true, optional: true, required: false
  private _rejectionLevel?: number; 
  public get rejectionLevel() {
    return this.getNumberAttribute('rejection_level');
  }
  public set rejectionLevel(value: number) {
    this._rejectionLevel = value;
  }
  public resetRejectionLevel() {
    this._rejectionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectionLevelInput() {
    return this._rejectionLevel;
  }
}

export class GatewayPluginAiAzureContentSafetyConfigCategoriesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiAzureContentSafetyConfigCategories[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiAzureContentSafetyConfigCategoriesOutputReference {
    return new GatewayPluginAiAzureContentSafetyConfigCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiAzureContentSafetyConfigA {
  /**
  * Sets the ?api-version URL parameter, used for defining the Azure Content Services interchange format. Default: "2023-10-01"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#azure_api_version GatewayPluginAiAzureContentSafety#azure_api_version}
  */
  readonly azureApiVersion?: string;
  /**
  * If `azure_use_managed_identity` is true, set the client ID if required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#azure_client_id GatewayPluginAiAzureContentSafety#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * If `azure_use_managed_identity` is true, set the client secret if required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#azure_client_secret GatewayPluginAiAzureContentSafety#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * If `azure_use_managed_identity` is true, set the tenant ID if required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#azure_tenant_id GatewayPluginAiAzureContentSafety#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * If checked, uses (if set) `azure_client_id`, `azure_client_secret`, and/or `azure_tenant_id` for Azure authentication, via Managed or User-assigned identity. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#azure_use_managed_identity GatewayPluginAiAzureContentSafety#azure_use_managed_identity}
  */
  readonly azureUseManagedIdentity?: boolean | cdktf.IResolvable;
  /**
  * Use these configured blocklists (in Azure Content Services) when inspecting content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#blocklist_names GatewayPluginAiAzureContentSafety#blocklist_names}
  */
  readonly blocklistNames?: string[];
  /**
  * Array of categories, and their thresholds, to measure on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#categories GatewayPluginAiAzureContentSafety#categories}
  */
  readonly categories?: GatewayPluginAiAzureContentSafetyConfigCategories[] | cdktf.IResolvable;
  /**
  * If `azure_use_managed_identity` is true, set the API key to call Content Safety.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#content_safety_key GatewayPluginAiAzureContentSafety#content_safety_key}
  */
  readonly contentSafetyKey?: string;
  /**
  * Full URL, inc protocol, of the Azure Content Safety instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#content_safety_url GatewayPluginAiAzureContentSafety#content_safety_url}
  */
  readonly contentSafetyUrl: string;
  /**
  * The guard mode to use for the request. Default: "INPUT"; must be one of ["BOTH", "INPUT", "OUTPUT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#guarding_mode GatewayPluginAiAzureContentSafety#guarding_mode}
  */
  readonly guardingMode?: string;
  /**
  * Tells Azure to reject the request if any blocklist filter is hit. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#halt_on_blocklist_hit GatewayPluginAiAzureContentSafety#halt_on_blocklist_hit}
  */
  readonly haltOnBlocklistHit?: boolean | cdktf.IResolvable;
  /**
  * See https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/content-filter#content-filtering-categories. Default: "FourSeverityLevels"; must be one of ["EightSeverityLevels", "FourSeverityLevels"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#output_type GatewayPluginAiAzureContentSafety#output_type}
  */
  readonly outputType?: string;
  /**
  * The amount of bytes receiving from upstream to be buffered before sending to the guardrails service. This only applies to the response content guard. Default: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#response_buffer_size GatewayPluginAiAzureContentSafety#response_buffer_size}
  */
  readonly responseBufferSize?: number;
  /**
  * Set true to tell the caller why their request was rejected, if so. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#reveal_failure_reason GatewayPluginAiAzureContentSafety#reveal_failure_reason}
  */
  readonly revealFailureReason?: boolean | cdktf.IResolvable;
  /**
  * Stop processing if an error occurs. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#stop_on_error GatewayPluginAiAzureContentSafety#stop_on_error}
  */
  readonly stopOnError?: boolean | cdktf.IResolvable;
  /**
  * Select where to pick the 'text' for the Azure Content Services request. Default: "concatenate_all_content"; must be one of ["concatenate_all_content", "concatenate_user_content"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#text_source GatewayPluginAiAzureContentSafety#text_source}
  */
  readonly textSource?: string;
}

export function gatewayPluginAiAzureContentSafetyConfigAToTerraform(struct?: GatewayPluginAiAzureContentSafetyConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_api_version: cdktf.stringToTerraform(struct!.azureApiVersion),
    azure_client_id: cdktf.stringToTerraform(struct!.azureClientId),
    azure_client_secret: cdktf.stringToTerraform(struct!.azureClientSecret),
    azure_tenant_id: cdktf.stringToTerraform(struct!.azureTenantId),
    azure_use_managed_identity: cdktf.booleanToTerraform(struct!.azureUseManagedIdentity),
    blocklist_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blocklistNames),
    categories: cdktf.listMapper(gatewayPluginAiAzureContentSafetyConfigCategoriesToTerraform, false)(struct!.categories),
    content_safety_key: cdktf.stringToTerraform(struct!.contentSafetyKey),
    content_safety_url: cdktf.stringToTerraform(struct!.contentSafetyUrl),
    guarding_mode: cdktf.stringToTerraform(struct!.guardingMode),
    halt_on_blocklist_hit: cdktf.booleanToTerraform(struct!.haltOnBlocklistHit),
    output_type: cdktf.stringToTerraform(struct!.outputType),
    response_buffer_size: cdktf.numberToTerraform(struct!.responseBufferSize),
    reveal_failure_reason: cdktf.booleanToTerraform(struct!.revealFailureReason),
    stop_on_error: cdktf.booleanToTerraform(struct!.stopOnError),
    text_source: cdktf.stringToTerraform(struct!.textSource),
  }
}


export function gatewayPluginAiAzureContentSafetyConfigAToHclTerraform(struct?: GatewayPluginAiAzureContentSafetyConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_api_version: {
      value: cdktf.stringToHclTerraform(struct!.azureApiVersion),
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
    blocklist_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blocklistNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    categories: {
      value: cdktf.listMapperHcl(gatewayPluginAiAzureContentSafetyConfigCategoriesToHclTerraform, false)(struct!.categories),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginAiAzureContentSafetyConfigCategoriesList",
    },
    content_safety_key: {
      value: cdktf.stringToHclTerraform(struct!.contentSafetyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_safety_url: {
      value: cdktf.stringToHclTerraform(struct!.contentSafetyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guarding_mode: {
      value: cdktf.stringToHclTerraform(struct!.guardingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    halt_on_blocklist_hit: {
      value: cdktf.booleanToHclTerraform(struct!.haltOnBlocklistHit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_type: {
      value: cdktf.stringToHclTerraform(struct!.outputType),
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
    reveal_failure_reason: {
      value: cdktf.booleanToHclTerraform(struct!.revealFailureReason),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stop_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.stopOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text_source: {
      value: cdktf.stringToHclTerraform(struct!.textSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiAzureContentSafetyConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiAzureContentSafetyConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureApiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureApiVersion = this._azureApiVersion;
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
    if (this._blocklistNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocklistNames = this._blocklistNames;
    }
    if (this._categories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories?.internalValue;
    }
    if (this._contentSafetyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSafetyKey = this._contentSafetyKey;
    }
    if (this._contentSafetyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSafetyUrl = this._contentSafetyUrl;
    }
    if (this._guardingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardingMode = this._guardingMode;
    }
    if (this._haltOnBlocklistHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.haltOnBlocklistHit = this._haltOnBlocklistHit;
    }
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    if (this._responseBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBufferSize = this._responseBufferSize;
    }
    if (this._revealFailureReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.revealFailureReason = this._revealFailureReason;
    }
    if (this._stopOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnError = this._stopOnError;
    }
    if (this._textSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.textSource = this._textSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiAzureContentSafetyConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureApiVersion = undefined;
      this._azureClientId = undefined;
      this._azureClientSecret = undefined;
      this._azureTenantId = undefined;
      this._azureUseManagedIdentity = undefined;
      this._blocklistNames = undefined;
      this._categories.internalValue = undefined;
      this._contentSafetyKey = undefined;
      this._contentSafetyUrl = undefined;
      this._guardingMode = undefined;
      this._haltOnBlocklistHit = undefined;
      this._outputType = undefined;
      this._responseBufferSize = undefined;
      this._revealFailureReason = undefined;
      this._stopOnError = undefined;
      this._textSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureApiVersion = value.azureApiVersion;
      this._azureClientId = value.azureClientId;
      this._azureClientSecret = value.azureClientSecret;
      this._azureTenantId = value.azureTenantId;
      this._azureUseManagedIdentity = value.azureUseManagedIdentity;
      this._blocklistNames = value.blocklistNames;
      this._categories.internalValue = value.categories;
      this._contentSafetyKey = value.contentSafetyKey;
      this._contentSafetyUrl = value.contentSafetyUrl;
      this._guardingMode = value.guardingMode;
      this._haltOnBlocklistHit = value.haltOnBlocklistHit;
      this._outputType = value.outputType;
      this._responseBufferSize = value.responseBufferSize;
      this._revealFailureReason = value.revealFailureReason;
      this._stopOnError = value.stopOnError;
      this._textSource = value.textSource;
    }
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

  // azure_client_id - computed: false, optional: true, required: false
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

  // azure_client_secret - computed: false, optional: true, required: false
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

  // azure_tenant_id - computed: false, optional: true, required: false
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

  // blocklist_names - computed: false, optional: true, required: false
  private _blocklistNames?: string[]; 
  public get blocklistNames() {
    return this.getListAttribute('blocklist_names');
  }
  public set blocklistNames(value: string[]) {
    this._blocklistNames = value;
  }
  public resetBlocklistNames() {
    this._blocklistNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocklistNamesInput() {
    return this._blocklistNames;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new GatewayPluginAiAzureContentSafetyConfigCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: GatewayPluginAiAzureContentSafetyConfigCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // content_safety_key - computed: false, optional: true, required: false
  private _contentSafetyKey?: string; 
  public get contentSafetyKey() {
    return this.getStringAttribute('content_safety_key');
  }
  public set contentSafetyKey(value: string) {
    this._contentSafetyKey = value;
  }
  public resetContentSafetyKey() {
    this._contentSafetyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSafetyKeyInput() {
    return this._contentSafetyKey;
  }

  // content_safety_url - computed: false, optional: false, required: true
  private _contentSafetyUrl?: string; 
  public get contentSafetyUrl() {
    return this.getStringAttribute('content_safety_url');
  }
  public set contentSafetyUrl(value: string) {
    this._contentSafetyUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSafetyUrlInput() {
    return this._contentSafetyUrl;
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

  // halt_on_blocklist_hit - computed: true, optional: true, required: false
  private _haltOnBlocklistHit?: boolean | cdktf.IResolvable; 
  public get haltOnBlocklistHit() {
    return this.getBooleanAttribute('halt_on_blocklist_hit');
  }
  public set haltOnBlocklistHit(value: boolean | cdktf.IResolvable) {
    this._haltOnBlocklistHit = value;
  }
  public resetHaltOnBlocklistHit() {
    this._haltOnBlocklistHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haltOnBlocklistHitInput() {
    return this._haltOnBlocklistHit;
  }

  // output_type - computed: true, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
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

  // reveal_failure_reason - computed: true, optional: true, required: false
  private _revealFailureReason?: boolean | cdktf.IResolvable; 
  public get revealFailureReason() {
    return this.getBooleanAttribute('reveal_failure_reason');
  }
  public set revealFailureReason(value: boolean | cdktf.IResolvable) {
    this._revealFailureReason = value;
  }
  public resetRevealFailureReason() {
    this._revealFailureReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revealFailureReasonInput() {
    return this._revealFailureReason;
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
}
export interface GatewayPluginAiAzureContentSafetyOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#access GatewayPluginAiAzureContentSafety#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiAzureContentSafetyOrderingAfterToTerraform(struct?: GatewayPluginAiAzureContentSafetyOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiAzureContentSafetyOrderingAfterToHclTerraform(struct?: GatewayPluginAiAzureContentSafetyOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginAiAzureContentSafetyOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiAzureContentSafetyOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiAzureContentSafetyOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiAzureContentSafetyOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#access GatewayPluginAiAzureContentSafety#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiAzureContentSafetyOrderingBeforeToTerraform(struct?: GatewayPluginAiAzureContentSafetyOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiAzureContentSafetyOrderingBeforeToHclTerraform(struct?: GatewayPluginAiAzureContentSafetyOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginAiAzureContentSafetyOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiAzureContentSafetyOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiAzureContentSafetyOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiAzureContentSafetyOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#after GatewayPluginAiAzureContentSafety#after}
  */
  readonly after?: GatewayPluginAiAzureContentSafetyOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#before GatewayPluginAiAzureContentSafety#before}
  */
  readonly before?: GatewayPluginAiAzureContentSafetyOrderingBefore;
}

export function gatewayPluginAiAzureContentSafetyOrderingToTerraform(struct?: GatewayPluginAiAzureContentSafetyOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginAiAzureContentSafetyOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginAiAzureContentSafetyOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginAiAzureContentSafetyOrderingToHclTerraform(struct?: GatewayPluginAiAzureContentSafetyOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginAiAzureContentSafetyOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiAzureContentSafetyOrderingAfter",
    },
    before: {
      value: gatewayPluginAiAzureContentSafetyOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiAzureContentSafetyOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiAzureContentSafetyOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiAzureContentSafetyOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiAzureContentSafetyOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginAiAzureContentSafetyOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginAiAzureContentSafetyOrderingAfter) {
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
  private _before = new GatewayPluginAiAzureContentSafetyOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginAiAzureContentSafetyOrderingBefore) {
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
export interface GatewayPluginAiAzureContentSafetyPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#id GatewayPluginAiAzureContentSafety#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#name GatewayPluginAiAzureContentSafety#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#path GatewayPluginAiAzureContentSafety#path}
  */
  readonly path?: string;
}

export function gatewayPluginAiAzureContentSafetyPartialsToTerraform(struct?: GatewayPluginAiAzureContentSafetyPartials | cdktf.IResolvable): any {
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


export function gatewayPluginAiAzureContentSafetyPartialsToHclTerraform(struct?: GatewayPluginAiAzureContentSafetyPartials | cdktf.IResolvable): any {
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

export class GatewayPluginAiAzureContentSafetyPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiAzureContentSafetyPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiAzureContentSafetyPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAiAzureContentSafetyPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiAzureContentSafetyPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiAzureContentSafetyPartialsOutputReference {
    return new GatewayPluginAiAzureContentSafetyPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiAzureContentSafetyRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#id GatewayPluginAiAzureContentSafety#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiAzureContentSafetyRouteToTerraform(struct?: GatewayPluginAiAzureContentSafetyRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiAzureContentSafetyRouteToHclTerraform(struct?: GatewayPluginAiAzureContentSafetyRoute | cdktf.IResolvable): any {
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

export class GatewayPluginAiAzureContentSafetyRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiAzureContentSafetyRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiAzureContentSafetyRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiAzureContentSafetyService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#id GatewayPluginAiAzureContentSafety#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiAzureContentSafetyServiceToTerraform(struct?: GatewayPluginAiAzureContentSafetyService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiAzureContentSafetyServiceToHclTerraform(struct?: GatewayPluginAiAzureContentSafetyService | cdktf.IResolvable): any {
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

export class GatewayPluginAiAzureContentSafetyServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiAzureContentSafetyService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiAzureContentSafetyService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety konnect_gateway_plugin_ai_azure_content_safety}
*/
export class GatewayPluginAiAzureContentSafety extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_ai_azure_content_safety";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginAiAzureContentSafety resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginAiAzureContentSafety to import
  * @param importFromId The id of the existing GatewayPluginAiAzureContentSafety that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginAiAzureContentSafety to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_ai_azure_content_safety", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_azure_content_safety konnect_gateway_plugin_ai_azure_content_safety} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginAiAzureContentSafetyConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginAiAzureContentSafetyConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_ai_azure_content_safety',
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

  // config - computed: false, optional: false, required: true
  private _config = new GatewayPluginAiAzureContentSafetyConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginAiAzureContentSafetyConfigA) {
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
  private _ordering = new GatewayPluginAiAzureContentSafetyOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginAiAzureContentSafetyOrdering) {
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
  private _partials = new GatewayPluginAiAzureContentSafetyPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginAiAzureContentSafetyPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginAiAzureContentSafetyRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginAiAzureContentSafetyRoute) {
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
  private _service = new GatewayPluginAiAzureContentSafetyServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginAiAzureContentSafetyService) {
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
      config: gatewayPluginAiAzureContentSafetyConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginAiAzureContentSafetyOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginAiAzureContentSafetyPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginAiAzureContentSafetyRouteToTerraform(this._route.internalValue),
      service: gatewayPluginAiAzureContentSafetyServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginAiAzureContentSafetyConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiAzureContentSafetyConfigA",
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
        value: gatewayPluginAiAzureContentSafetyOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiAzureContentSafetyOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginAiAzureContentSafetyPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginAiAzureContentSafetyPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginAiAzureContentSafetyRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiAzureContentSafetyRoute",
      },
      service: {
        value: gatewayPluginAiAzureContentSafetyServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiAzureContentSafetyService",
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
