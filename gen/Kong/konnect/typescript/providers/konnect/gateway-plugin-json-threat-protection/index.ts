// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginJsonThreatProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#config GatewayPluginJsonThreatProtection#config}
  */
  readonly config?: GatewayPluginJsonThreatProtectionConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#control_plane_id GatewayPluginJsonThreatProtection#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#created_at GatewayPluginJsonThreatProtection#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#enabled GatewayPluginJsonThreatProtection#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#id GatewayPluginJsonThreatProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#instance_name GatewayPluginJsonThreatProtection#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#ordering GatewayPluginJsonThreatProtection#ordering}
  */
  readonly ordering?: GatewayPluginJsonThreatProtectionOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#partials GatewayPluginJsonThreatProtection#partials}
  */
  readonly partials?: GatewayPluginJsonThreatProtectionPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#protocols GatewayPluginJsonThreatProtection#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#route GatewayPluginJsonThreatProtection#route}
  */
  readonly route?: GatewayPluginJsonThreatProtectionRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#service GatewayPluginJsonThreatProtection#service}
  */
  readonly service?: GatewayPluginJsonThreatProtectionService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#tags GatewayPluginJsonThreatProtection#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#updated_at GatewayPluginJsonThreatProtection#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginJsonThreatProtectionConfigA {
  /**
  * Allow or disallow duplicate object entry name. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#allow_duplicate_object_entry_name GatewayPluginJsonThreatProtection#allow_duplicate_object_entry_name}
  */
  readonly allowDuplicateObjectEntryName?: boolean | cdktf.IResolvable;
  /**
  * Enforcement mode of the security policy. Default: "block"; must be one of ["block", "log_only"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#enforcement_mode GatewayPluginJsonThreatProtection#enforcement_mode}
  */
  readonly enforcementMode?: string;
  /**
  * The response message when validation fails. Default: "Bad Request"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#error_message GatewayPluginJsonThreatProtection#error_message}
  */
  readonly errorMessage?: string;
  /**
  * The response status code when validation fails. Default: 400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#error_status_code GatewayPluginJsonThreatProtection#error_status_code}
  */
  readonly errorStatusCode?: number;
  /**
  * Max number of elements in an array. -1 means unlimited. Default: -1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#max_array_element_count GatewayPluginJsonThreatProtection#max_array_element_count}
  */
  readonly maxArrayElementCount?: number;
  /**
  * Max size of the request body. -1 means unlimited. Default: 8192
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#max_body_size GatewayPluginJsonThreatProtection#max_body_size}
  */
  readonly maxBodySize?: number;
  /**
  * Max nested depth of objects and arrays. -1 means unlimited. Default: -1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#max_container_depth GatewayPluginJsonThreatProtection#max_container_depth}
  */
  readonly maxContainerDepth?: number;
  /**
  * Max number of entries in an object. -1 means unlimited. Default: -1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#max_object_entry_count GatewayPluginJsonThreatProtection#max_object_entry_count}
  */
  readonly maxObjectEntryCount?: number;
  /**
  * Max string length of object name. -1 means unlimited. Default: -1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#max_object_entry_name_length GatewayPluginJsonThreatProtection#max_object_entry_name_length}
  */
  readonly maxObjectEntryNameLength?: number;
  /**
  * Max string value length. -1 means unlimited. Default: -1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#max_string_value_length GatewayPluginJsonThreatProtection#max_string_value_length}
  */
  readonly maxStringValueLength?: number;
}

export function gatewayPluginJsonThreatProtectionConfigAToTerraform(struct?: GatewayPluginJsonThreatProtectionConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_duplicate_object_entry_name: cdktf.booleanToTerraform(struct!.allowDuplicateObjectEntryName),
    enforcement_mode: cdktf.stringToTerraform(struct!.enforcementMode),
    error_message: cdktf.stringToTerraform(struct!.errorMessage),
    error_status_code: cdktf.numberToTerraform(struct!.errorStatusCode),
    max_array_element_count: cdktf.numberToTerraform(struct!.maxArrayElementCount),
    max_body_size: cdktf.numberToTerraform(struct!.maxBodySize),
    max_container_depth: cdktf.numberToTerraform(struct!.maxContainerDepth),
    max_object_entry_count: cdktf.numberToTerraform(struct!.maxObjectEntryCount),
    max_object_entry_name_length: cdktf.numberToTerraform(struct!.maxObjectEntryNameLength),
    max_string_value_length: cdktf.numberToTerraform(struct!.maxStringValueLength),
  }
}


export function gatewayPluginJsonThreatProtectionConfigAToHclTerraform(struct?: GatewayPluginJsonThreatProtectionConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_duplicate_object_entry_name: {
      value: cdktf.booleanToHclTerraform(struct!.allowDuplicateObjectEntryName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforcement_mode: {
      value: cdktf.stringToHclTerraform(struct!.enforcementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_message: {
      value: cdktf.stringToHclTerraform(struct!.errorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_status_code: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_array_element_count: {
      value: cdktf.numberToHclTerraform(struct!.maxArrayElementCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_body_size: {
      value: cdktf.numberToHclTerraform(struct!.maxBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_container_depth: {
      value: cdktf.numberToHclTerraform(struct!.maxContainerDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_object_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.maxObjectEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_object_entry_name_length: {
      value: cdktf.numberToHclTerraform(struct!.maxObjectEntryNameLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_string_value_length: {
      value: cdktf.numberToHclTerraform(struct!.maxStringValueLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJsonThreatProtectionConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJsonThreatProtectionConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDuplicateObjectEntryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDuplicateObjectEntryName = this._allowDuplicateObjectEntryName;
    }
    if (this._enforcementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementMode = this._enforcementMode;
    }
    if (this._errorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorMessage = this._errorMessage;
    }
    if (this._errorStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusCode = this._errorStatusCode;
    }
    if (this._maxArrayElementCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxArrayElementCount = this._maxArrayElementCount;
    }
    if (this._maxBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBodySize = this._maxBodySize;
    }
    if (this._maxContainerDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxContainerDepth = this._maxContainerDepth;
    }
    if (this._maxObjectEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxObjectEntryCount = this._maxObjectEntryCount;
    }
    if (this._maxObjectEntryNameLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxObjectEntryNameLength = this._maxObjectEntryNameLength;
    }
    if (this._maxStringValueLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStringValueLength = this._maxStringValueLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJsonThreatProtectionConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDuplicateObjectEntryName = undefined;
      this._enforcementMode = undefined;
      this._errorMessage = undefined;
      this._errorStatusCode = undefined;
      this._maxArrayElementCount = undefined;
      this._maxBodySize = undefined;
      this._maxContainerDepth = undefined;
      this._maxObjectEntryCount = undefined;
      this._maxObjectEntryNameLength = undefined;
      this._maxStringValueLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDuplicateObjectEntryName = value.allowDuplicateObjectEntryName;
      this._enforcementMode = value.enforcementMode;
      this._errorMessage = value.errorMessage;
      this._errorStatusCode = value.errorStatusCode;
      this._maxArrayElementCount = value.maxArrayElementCount;
      this._maxBodySize = value.maxBodySize;
      this._maxContainerDepth = value.maxContainerDepth;
      this._maxObjectEntryCount = value.maxObjectEntryCount;
      this._maxObjectEntryNameLength = value.maxObjectEntryNameLength;
      this._maxStringValueLength = value.maxStringValueLength;
    }
  }

  // allow_duplicate_object_entry_name - computed: true, optional: true, required: false
  private _allowDuplicateObjectEntryName?: boolean | cdktf.IResolvable; 
  public get allowDuplicateObjectEntryName() {
    return this.getBooleanAttribute('allow_duplicate_object_entry_name');
  }
  public set allowDuplicateObjectEntryName(value: boolean | cdktf.IResolvable) {
    this._allowDuplicateObjectEntryName = value;
  }
  public resetAllowDuplicateObjectEntryName() {
    this._allowDuplicateObjectEntryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicateObjectEntryNameInput() {
    return this._allowDuplicateObjectEntryName;
  }

  // enforcement_mode - computed: true, optional: true, required: false
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  public resetEnforcementMode() {
    this._enforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
  }

  // error_message - computed: true, optional: true, required: false
  private _errorMessage?: string; 
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
  public set errorMessage(value: string) {
    this._errorMessage = value;
  }
  public resetErrorMessage() {
    this._errorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageInput() {
    return this._errorMessage;
  }

  // error_status_code - computed: true, optional: true, required: false
  private _errorStatusCode?: number; 
  public get errorStatusCode() {
    return this.getNumberAttribute('error_status_code');
  }
  public set errorStatusCode(value: number) {
    this._errorStatusCode = value;
  }
  public resetErrorStatusCode() {
    this._errorStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusCodeInput() {
    return this._errorStatusCode;
  }

  // max_array_element_count - computed: true, optional: true, required: false
  private _maxArrayElementCount?: number; 
  public get maxArrayElementCount() {
    return this.getNumberAttribute('max_array_element_count');
  }
  public set maxArrayElementCount(value: number) {
    this._maxArrayElementCount = value;
  }
  public resetMaxArrayElementCount() {
    this._maxArrayElementCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxArrayElementCountInput() {
    return this._maxArrayElementCount;
  }

  // max_body_size - computed: true, optional: true, required: false
  private _maxBodySize?: number; 
  public get maxBodySize() {
    return this.getNumberAttribute('max_body_size');
  }
  public set maxBodySize(value: number) {
    this._maxBodySize = value;
  }
  public resetMaxBodySize() {
    this._maxBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBodySizeInput() {
    return this._maxBodySize;
  }

  // max_container_depth - computed: true, optional: true, required: false
  private _maxContainerDepth?: number; 
  public get maxContainerDepth() {
    return this.getNumberAttribute('max_container_depth');
  }
  public set maxContainerDepth(value: number) {
    this._maxContainerDepth = value;
  }
  public resetMaxContainerDepth() {
    this._maxContainerDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxContainerDepthInput() {
    return this._maxContainerDepth;
  }

  // max_object_entry_count - computed: true, optional: true, required: false
  private _maxObjectEntryCount?: number; 
  public get maxObjectEntryCount() {
    return this.getNumberAttribute('max_object_entry_count');
  }
  public set maxObjectEntryCount(value: number) {
    this._maxObjectEntryCount = value;
  }
  public resetMaxObjectEntryCount() {
    this._maxObjectEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxObjectEntryCountInput() {
    return this._maxObjectEntryCount;
  }

  // max_object_entry_name_length - computed: true, optional: true, required: false
  private _maxObjectEntryNameLength?: number; 
  public get maxObjectEntryNameLength() {
    return this.getNumberAttribute('max_object_entry_name_length');
  }
  public set maxObjectEntryNameLength(value: number) {
    this._maxObjectEntryNameLength = value;
  }
  public resetMaxObjectEntryNameLength() {
    this._maxObjectEntryNameLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxObjectEntryNameLengthInput() {
    return this._maxObjectEntryNameLength;
  }

  // max_string_value_length - computed: true, optional: true, required: false
  private _maxStringValueLength?: number; 
  public get maxStringValueLength() {
    return this.getNumberAttribute('max_string_value_length');
  }
  public set maxStringValueLength(value: number) {
    this._maxStringValueLength = value;
  }
  public resetMaxStringValueLength() {
    this._maxStringValueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStringValueLengthInput() {
    return this._maxStringValueLength;
  }
}
export interface GatewayPluginJsonThreatProtectionOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#access GatewayPluginJsonThreatProtection#access}
  */
  readonly access?: string[];
}

export function gatewayPluginJsonThreatProtectionOrderingAfterToTerraform(struct?: GatewayPluginJsonThreatProtectionOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginJsonThreatProtectionOrderingAfterToHclTerraform(struct?: GatewayPluginJsonThreatProtectionOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginJsonThreatProtectionOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJsonThreatProtectionOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginJsonThreatProtectionOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginJsonThreatProtectionOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#access GatewayPluginJsonThreatProtection#access}
  */
  readonly access?: string[];
}

export function gatewayPluginJsonThreatProtectionOrderingBeforeToTerraform(struct?: GatewayPluginJsonThreatProtectionOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginJsonThreatProtectionOrderingBeforeToHclTerraform(struct?: GatewayPluginJsonThreatProtectionOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginJsonThreatProtectionOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJsonThreatProtectionOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginJsonThreatProtectionOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginJsonThreatProtectionOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#after GatewayPluginJsonThreatProtection#after}
  */
  readonly after?: GatewayPluginJsonThreatProtectionOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#before GatewayPluginJsonThreatProtection#before}
  */
  readonly before?: GatewayPluginJsonThreatProtectionOrderingBefore;
}

export function gatewayPluginJsonThreatProtectionOrderingToTerraform(struct?: GatewayPluginJsonThreatProtectionOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginJsonThreatProtectionOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginJsonThreatProtectionOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginJsonThreatProtectionOrderingToHclTerraform(struct?: GatewayPluginJsonThreatProtectionOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginJsonThreatProtectionOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginJsonThreatProtectionOrderingAfter",
    },
    before: {
      value: gatewayPluginJsonThreatProtectionOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginJsonThreatProtectionOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJsonThreatProtectionOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJsonThreatProtectionOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginJsonThreatProtectionOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginJsonThreatProtectionOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginJsonThreatProtectionOrderingAfter) {
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
  private _before = new GatewayPluginJsonThreatProtectionOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginJsonThreatProtectionOrderingBefore) {
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
export interface GatewayPluginJsonThreatProtectionPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#id GatewayPluginJsonThreatProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#name GatewayPluginJsonThreatProtection#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#path GatewayPluginJsonThreatProtection#path}
  */
  readonly path?: string;
}

export function gatewayPluginJsonThreatProtectionPartialsToTerraform(struct?: GatewayPluginJsonThreatProtectionPartials | cdktf.IResolvable): any {
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


export function gatewayPluginJsonThreatProtectionPartialsToHclTerraform(struct?: GatewayPluginJsonThreatProtectionPartials | cdktf.IResolvable): any {
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

export class GatewayPluginJsonThreatProtectionPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginJsonThreatProtectionPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginJsonThreatProtectionPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginJsonThreatProtectionPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginJsonThreatProtectionPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginJsonThreatProtectionPartialsOutputReference {
    return new GatewayPluginJsonThreatProtectionPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginJsonThreatProtectionRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#id GatewayPluginJsonThreatProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginJsonThreatProtectionRouteToTerraform(struct?: GatewayPluginJsonThreatProtectionRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginJsonThreatProtectionRouteToHclTerraform(struct?: GatewayPluginJsonThreatProtectionRoute | cdktf.IResolvable): any {
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

export class GatewayPluginJsonThreatProtectionRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJsonThreatProtectionRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginJsonThreatProtectionRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginJsonThreatProtectionService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#id GatewayPluginJsonThreatProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginJsonThreatProtectionServiceToTerraform(struct?: GatewayPluginJsonThreatProtectionService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginJsonThreatProtectionServiceToHclTerraform(struct?: GatewayPluginJsonThreatProtectionService | cdktf.IResolvable): any {
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

export class GatewayPluginJsonThreatProtectionServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJsonThreatProtectionService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginJsonThreatProtectionService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection konnect_gateway_plugin_json_threat_protection}
*/
export class GatewayPluginJsonThreatProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_json_threat_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginJsonThreatProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginJsonThreatProtection to import
  * @param importFromId The id of the existing GatewayPluginJsonThreatProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginJsonThreatProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_json_threat_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_json_threat_protection konnect_gateway_plugin_json_threat_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginJsonThreatProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginJsonThreatProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_json_threat_protection',
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

  // config - computed: true, optional: true, required: false
  private _config = new GatewayPluginJsonThreatProtectionConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginJsonThreatProtectionConfigA) {
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
  private _ordering = new GatewayPluginJsonThreatProtectionOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginJsonThreatProtectionOrdering) {
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
  private _partials = new GatewayPluginJsonThreatProtectionPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginJsonThreatProtectionPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginJsonThreatProtectionRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginJsonThreatProtectionRoute) {
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
  private _service = new GatewayPluginJsonThreatProtectionServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginJsonThreatProtectionService) {
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
      config: gatewayPluginJsonThreatProtectionConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginJsonThreatProtectionOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginJsonThreatProtectionPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginJsonThreatProtectionRouteToTerraform(this._route.internalValue),
      service: gatewayPluginJsonThreatProtectionServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginJsonThreatProtectionConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginJsonThreatProtectionConfigA",
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
        value: gatewayPluginJsonThreatProtectionOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginJsonThreatProtectionOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginJsonThreatProtectionPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginJsonThreatProtectionPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginJsonThreatProtectionRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginJsonThreatProtectionRoute",
      },
      service: {
        value: gatewayPluginJsonThreatProtectionServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginJsonThreatProtectionService",
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
