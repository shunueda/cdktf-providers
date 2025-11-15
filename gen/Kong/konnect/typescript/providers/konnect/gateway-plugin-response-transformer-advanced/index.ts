// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginResponseTransformerAdvancedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#config GatewayPluginResponseTransformerAdvanced#config}
  */
  readonly config?: GatewayPluginResponseTransformerAdvancedConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#consumer GatewayPluginResponseTransformerAdvanced#consumer}
  */
  readonly consumer?: GatewayPluginResponseTransformerAdvancedConsumer;
  /**
  * If set, the plugin will activate only for requests where the specified consumer group has been authenticated. (Note that some plugins can not be restricted to consumers groups this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#consumer_group GatewayPluginResponseTransformerAdvanced#consumer_group}
  */
  readonly consumerGroup?: GatewayPluginResponseTransformerAdvancedConsumerGroup;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#control_plane_id GatewayPluginResponseTransformerAdvanced#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#created_at GatewayPluginResponseTransformerAdvanced#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#enabled GatewayPluginResponseTransformerAdvanced#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#id GatewayPluginResponseTransformerAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#instance_name GatewayPluginResponseTransformerAdvanced#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#ordering GatewayPluginResponseTransformerAdvanced#ordering}
  */
  readonly ordering?: GatewayPluginResponseTransformerAdvancedOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#partials GatewayPluginResponseTransformerAdvanced#partials}
  */
  readonly partials?: GatewayPluginResponseTransformerAdvancedPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#protocols GatewayPluginResponseTransformerAdvanced#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#route GatewayPluginResponseTransformerAdvanced#route}
  */
  readonly route?: GatewayPluginResponseTransformerAdvancedRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#service GatewayPluginResponseTransformerAdvanced#service}
  */
  readonly service?: GatewayPluginResponseTransformerAdvancedService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#tags GatewayPluginResponseTransformerAdvanced#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#updated_at GatewayPluginResponseTransformerAdvanced#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginResponseTransformerAdvancedConfigAdd {
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#headers GatewayPluginResponseTransformerAdvanced#headers}
  */
  readonly headers?: string[];
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#if_status GatewayPluginResponseTransformerAdvanced#if_status}
  */
  readonly ifStatus?: string[];
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#json GatewayPluginResponseTransformerAdvanced#json}
  */
  readonly json?: string[];
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#json_types GatewayPluginResponseTransformerAdvanced#json_types}
  */
  readonly jsonTypes?: string[];
}

export function gatewayPluginResponseTransformerAdvancedConfigAddToTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    if_status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ifStatus),
    json: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.json),
    json_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonTypes),
  }
}


export function gatewayPluginResponseTransformerAdvancedConfigAddToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    if_status: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ifStatus),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    json: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.json),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    json_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginResponseTransformerAdvancedConfigAddOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginResponseTransformerAdvancedConfigAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._ifStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifStatus = this._ifStatus;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._jsonTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonTypes = this._jsonTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedConfigAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers = undefined;
      this._ifStatus = undefined;
      this._json = undefined;
      this._jsonTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers = value.headers;
      this._ifStatus = value.ifStatus;
      this._json = value.json;
      this._jsonTypes = value.jsonTypes;
    }
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // if_status - computed: true, optional: true, required: false
  private _ifStatus?: string[]; 
  public get ifStatus() {
    return this.getListAttribute('if_status');
  }
  public set ifStatus(value: string[]) {
    this._ifStatus = value;
  }
  public resetIfStatus() {
    this._ifStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifStatusInput() {
    return this._ifStatus;
  }

  // json - computed: true, optional: true, required: false
  private _json?: string[]; 
  public get json() {
    return this.getListAttribute('json');
  }
  public set json(value: string[]) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // json_types - computed: true, optional: true, required: false
  private _jsonTypes?: string[]; 
  public get jsonTypes() {
    return this.getListAttribute('json_types');
  }
  public set jsonTypes(value: string[]) {
    this._jsonTypes = value;
  }
  public resetJsonTypes() {
    this._jsonTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonTypesInput() {
    return this._jsonTypes;
  }
}
export interface GatewayPluginResponseTransformerAdvancedConfigAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#json GatewayPluginResponseTransformerAdvanced#json}
  */
  readonly json?: string[];
}

export function gatewayPluginResponseTransformerAdvancedConfigAllowToTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.json),
  }
}


export function gatewayPluginResponseTransformerAdvancedConfigAllowToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.json),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginResponseTransformerAdvancedConfigAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginResponseTransformerAdvancedConfigAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedConfigAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._json = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._json = value.json;
    }
  }

  // json - computed: true, optional: true, required: false
  private _json?: string[]; 
  public get json() {
    return this.getListAttribute('json');
  }
  public set json(value: string[]) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }
}
export interface GatewayPluginResponseTransformerAdvancedConfigAppend {
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#headers GatewayPluginResponseTransformerAdvanced#headers}
  */
  readonly headers?: string[];
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#if_status GatewayPluginResponseTransformerAdvanced#if_status}
  */
  readonly ifStatus?: string[];
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#json GatewayPluginResponseTransformerAdvanced#json}
  */
  readonly json?: string[];
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#json_types GatewayPluginResponseTransformerAdvanced#json_types}
  */
  readonly jsonTypes?: string[];
}

export function gatewayPluginResponseTransformerAdvancedConfigAppendToTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigAppend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    if_status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ifStatus),
    json: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.json),
    json_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonTypes),
  }
}


export function gatewayPluginResponseTransformerAdvancedConfigAppendToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigAppend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    if_status: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ifStatus),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    json: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.json),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    json_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginResponseTransformerAdvancedConfigAppendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginResponseTransformerAdvancedConfigAppend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._ifStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifStatus = this._ifStatus;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._jsonTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonTypes = this._jsonTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedConfigAppend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers = undefined;
      this._ifStatus = undefined;
      this._json = undefined;
      this._jsonTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers = value.headers;
      this._ifStatus = value.ifStatus;
      this._json = value.json;
      this._jsonTypes = value.jsonTypes;
    }
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // if_status - computed: true, optional: true, required: false
  private _ifStatus?: string[]; 
  public get ifStatus() {
    return this.getListAttribute('if_status');
  }
  public set ifStatus(value: string[]) {
    this._ifStatus = value;
  }
  public resetIfStatus() {
    this._ifStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifStatusInput() {
    return this._ifStatus;
  }

  // json - computed: true, optional: true, required: false
  private _json?: string[]; 
  public get json() {
    return this.getListAttribute('json');
  }
  public set json(value: string[]) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // json_types - computed: true, optional: true, required: false
  private _jsonTypes?: string[]; 
  public get jsonTypes() {
    return this.getListAttribute('json_types');
  }
  public set jsonTypes(value: string[]) {
    this._jsonTypes = value;
  }
  public resetJsonTypes() {
    this._jsonTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonTypesInput() {
    return this._jsonTypes;
  }
}
export interface GatewayPluginResponseTransformerAdvancedConfigRemove {
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#headers GatewayPluginResponseTransformerAdvanced#headers}
  */
  readonly headers?: string[];
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#if_status GatewayPluginResponseTransformerAdvanced#if_status}
  */
  readonly ifStatus?: string[];
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#json GatewayPluginResponseTransformerAdvanced#json}
  */
  readonly json?: string[];
}

export function gatewayPluginResponseTransformerAdvancedConfigRemoveToTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigRemove | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    if_status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ifStatus),
    json: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.json),
  }
}


export function gatewayPluginResponseTransformerAdvancedConfigRemoveToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigRemove | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    if_status: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ifStatus),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    json: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.json),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginResponseTransformerAdvancedConfigRemoveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginResponseTransformerAdvancedConfigRemove | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._ifStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifStatus = this._ifStatus;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedConfigRemove | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers = undefined;
      this._ifStatus = undefined;
      this._json = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers = value.headers;
      this._ifStatus = value.ifStatus;
      this._json = value.json;
    }
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // if_status - computed: true, optional: true, required: false
  private _ifStatus?: string[]; 
  public get ifStatus() {
    return this.getListAttribute('if_status');
  }
  public set ifStatus(value: string[]) {
    this._ifStatus = value;
  }
  public resetIfStatus() {
    this._ifStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifStatusInput() {
    return this._ifStatus;
  }

  // json - computed: true, optional: true, required: false
  private _json?: string[]; 
  public get json() {
    return this.getListAttribute('json');
  }
  public set json(value: string[]) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }
}
export interface GatewayPluginResponseTransformerAdvancedConfigRename {
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#headers GatewayPluginResponseTransformerAdvanced#headers}
  */
  readonly headers?: string[];
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#if_status GatewayPluginResponseTransformerAdvanced#if_status}
  */
  readonly ifStatus?: string[];
}

export function gatewayPluginResponseTransformerAdvancedConfigRenameToTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigRename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    if_status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ifStatus),
  }
}


export function gatewayPluginResponseTransformerAdvancedConfigRenameToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigRename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    if_status: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ifStatus),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginResponseTransformerAdvancedConfigRenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginResponseTransformerAdvancedConfigRename | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._ifStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifStatus = this._ifStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedConfigRename | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers = undefined;
      this._ifStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers = value.headers;
      this._ifStatus = value.ifStatus;
    }
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // if_status - computed: true, optional: true, required: false
  private _ifStatus?: string[]; 
  public get ifStatus() {
    return this.getListAttribute('if_status');
  }
  public set ifStatus(value: string[]) {
    this._ifStatus = value;
  }
  public resetIfStatus() {
    this._ifStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifStatusInput() {
    return this._ifStatus;
  }
}
export interface GatewayPluginResponseTransformerAdvancedConfigReplace {
  /**
  * String with which to replace the entire response body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#body GatewayPluginResponseTransformerAdvanced#body}
  */
  readonly body?: string;
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#headers GatewayPluginResponseTransformerAdvanced#headers}
  */
  readonly headers?: string[];
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#if_status GatewayPluginResponseTransformerAdvanced#if_status}
  */
  readonly ifStatus?: string[];
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#json GatewayPluginResponseTransformerAdvanced#json}
  */
  readonly json?: string[];
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#json_types GatewayPluginResponseTransformerAdvanced#json_types}
  */
  readonly jsonTypes?: string[];
}

export function gatewayPluginResponseTransformerAdvancedConfigReplaceToTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigReplace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    if_status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ifStatus),
    json: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.json),
    json_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonTypes),
  }
}


export function gatewayPluginResponseTransformerAdvancedConfigReplaceToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigReplace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    if_status: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ifStatus),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    json: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.json),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    json_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginResponseTransformerAdvancedConfigReplaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginResponseTransformerAdvancedConfigReplace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._ifStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifStatus = this._ifStatus;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._jsonTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonTypes = this._jsonTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedConfigReplace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._headers = undefined;
      this._ifStatus = undefined;
      this._json = undefined;
      this._jsonTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._headers = value.headers;
      this._ifStatus = value.ifStatus;
      this._json = value.json;
      this._jsonTypes = value.jsonTypes;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // if_status - computed: true, optional: true, required: false
  private _ifStatus?: string[]; 
  public get ifStatus() {
    return this.getListAttribute('if_status');
  }
  public set ifStatus(value: string[]) {
    this._ifStatus = value;
  }
  public resetIfStatus() {
    this._ifStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifStatusInput() {
    return this._ifStatus;
  }

  // json - computed: true, optional: true, required: false
  private _json?: string[]; 
  public get json() {
    return this.getListAttribute('json');
  }
  public set json(value: string[]) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // json_types - computed: true, optional: true, required: false
  private _jsonTypes?: string[]; 
  public get jsonTypes() {
    return this.getListAttribute('json_types');
  }
  public set jsonTypes(value: string[]) {
    this._jsonTypes = value;
  }
  public resetJsonTypes() {
    this._jsonTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonTypesInput() {
    return this._jsonTypes;
  }
}
export interface GatewayPluginResponseTransformerAdvancedConfigTransform {
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#functions GatewayPluginResponseTransformerAdvanced#functions}
  */
  readonly functions?: string[];
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#if_status GatewayPluginResponseTransformerAdvanced#if_status}
  */
  readonly ifStatus?: string[];
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#json GatewayPluginResponseTransformerAdvanced#json}
  */
  readonly json?: string[];
}

export function gatewayPluginResponseTransformerAdvancedConfigTransformToTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    functions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.functions),
    if_status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ifStatus),
    json: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.json),
  }
}


export function gatewayPluginResponseTransformerAdvancedConfigTransformToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    functions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.functions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    if_status: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ifStatus),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    json: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.json),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginResponseTransformerAdvancedConfigTransformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginResponseTransformerAdvancedConfigTransform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functions !== undefined) {
      hasAnyValues = true;
      internalValueResult.functions = this._functions;
    }
    if (this._ifStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifStatus = this._ifStatus;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedConfigTransform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functions = undefined;
      this._ifStatus = undefined;
      this._json = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functions = value.functions;
      this._ifStatus = value.ifStatus;
      this._json = value.json;
    }
  }

  // functions - computed: true, optional: true, required: false
  private _functions?: string[]; 
  public get functions() {
    return this.getListAttribute('functions');
  }
  public set functions(value: string[]) {
    this._functions = value;
  }
  public resetFunctions() {
    this._functions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions;
  }

  // if_status - computed: true, optional: true, required: false
  private _ifStatus?: string[]; 
  public get ifStatus() {
    return this.getListAttribute('if_status');
  }
  public set ifStatus(value: string[]) {
    this._ifStatus = value;
  }
  public resetIfStatus() {
    this._ifStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifStatusInput() {
    return this._ifStatus;
  }

  // json - computed: true, optional: true, required: false
  private _json?: string[]; 
  public get json() {
    return this.getListAttribute('json');
  }
  public set json(value: string[]) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }
}
export interface GatewayPluginResponseTransformerAdvancedConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#add GatewayPluginResponseTransformerAdvanced#add}
  */
  readonly add?: GatewayPluginResponseTransformerAdvancedConfigAdd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#allow GatewayPluginResponseTransformerAdvanced#allow}
  */
  readonly allow?: GatewayPluginResponseTransformerAdvancedConfigAllow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#append GatewayPluginResponseTransformerAdvanced#append}
  */
  readonly append?: GatewayPluginResponseTransformerAdvancedConfigAppend;
  /**
  * Whether dots (for example, `customers.info.phone`) should be treated as part of a property name or used to descend into nested JSON objects.. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#dots_in_keys GatewayPluginResponseTransformerAdvanced#dots_in_keys}
  */
  readonly dotsInKeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#remove GatewayPluginResponseTransformerAdvanced#remove}
  */
  readonly remove?: GatewayPluginResponseTransformerAdvancedConfigRemove;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#rename GatewayPluginResponseTransformerAdvanced#rename}
  */
  readonly rename?: GatewayPluginResponseTransformerAdvancedConfigRename;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#replace GatewayPluginResponseTransformerAdvanced#replace}
  */
  readonly replace?: GatewayPluginResponseTransformerAdvancedConfigReplace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#transform GatewayPluginResponseTransformerAdvanced#transform}
  */
  readonly transform?: GatewayPluginResponseTransformerAdvancedConfigTransform;
}

export function gatewayPluginResponseTransformerAdvancedConfigAToTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: gatewayPluginResponseTransformerAdvancedConfigAddToTerraform(struct!.add),
    allow: gatewayPluginResponseTransformerAdvancedConfigAllowToTerraform(struct!.allow),
    append: gatewayPluginResponseTransformerAdvancedConfigAppendToTerraform(struct!.append),
    dots_in_keys: cdktf.booleanToTerraform(struct!.dotsInKeys),
    remove: gatewayPluginResponseTransformerAdvancedConfigRemoveToTerraform(struct!.remove),
    rename: gatewayPluginResponseTransformerAdvancedConfigRenameToTerraform(struct!.rename),
    replace: gatewayPluginResponseTransformerAdvancedConfigReplaceToTerraform(struct!.replace),
    transform: gatewayPluginResponseTransformerAdvancedConfigTransformToTerraform(struct!.transform),
  }
}


export function gatewayPluginResponseTransformerAdvancedConfigAToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: gatewayPluginResponseTransformerAdvancedConfigAddToHclTerraform(struct!.add),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginResponseTransformerAdvancedConfigAdd",
    },
    allow: {
      value: gatewayPluginResponseTransformerAdvancedConfigAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginResponseTransformerAdvancedConfigAllow",
    },
    append: {
      value: gatewayPluginResponseTransformerAdvancedConfigAppendToHclTerraform(struct!.append),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginResponseTransformerAdvancedConfigAppend",
    },
    dots_in_keys: {
      value: cdktf.booleanToHclTerraform(struct!.dotsInKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove: {
      value: gatewayPluginResponseTransformerAdvancedConfigRemoveToHclTerraform(struct!.remove),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginResponseTransformerAdvancedConfigRemove",
    },
    rename: {
      value: gatewayPluginResponseTransformerAdvancedConfigRenameToHclTerraform(struct!.rename),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginResponseTransformerAdvancedConfigRename",
    },
    replace: {
      value: gatewayPluginResponseTransformerAdvancedConfigReplaceToHclTerraform(struct!.replace),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginResponseTransformerAdvancedConfigReplace",
    },
    transform: {
      value: gatewayPluginResponseTransformerAdvancedConfigTransformToHclTerraform(struct!.transform),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginResponseTransformerAdvancedConfigTransform",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginResponseTransformerAdvancedConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginResponseTransformerAdvancedConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._append?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append?.internalValue;
    }
    if (this._dotsInKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.dotsInKeys = this._dotsInKeys;
    }
    if (this._remove?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove?.internalValue;
    }
    if (this._rename?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rename = this._rename?.internalValue;
    }
    if (this._replace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace?.internalValue;
    }
    if (this._transform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
      this._allow.internalValue = undefined;
      this._append.internalValue = undefined;
      this._dotsInKeys = undefined;
      this._remove.internalValue = undefined;
      this._rename.internalValue = undefined;
      this._replace.internalValue = undefined;
      this._transform.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add.internalValue = value.add;
      this._allow.internalValue = value.allow;
      this._append.internalValue = value.append;
      this._dotsInKeys = value.dotsInKeys;
      this._remove.internalValue = value.remove;
      this._rename.internalValue = value.rename;
      this._replace.internalValue = value.replace;
      this._transform.internalValue = value.transform;
    }
  }

  // add - computed: true, optional: true, required: false
  private _add = new GatewayPluginResponseTransformerAdvancedConfigAddOutputReference(this, "add");
  public get add() {
    return this._add;
  }
  public putAdd(value: GatewayPluginResponseTransformerAdvancedConfigAdd) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // allow - computed: true, optional: true, required: false
  private _allow = new GatewayPluginResponseTransformerAdvancedConfigAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: GatewayPluginResponseTransformerAdvancedConfigAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // append - computed: true, optional: true, required: false
  private _append = new GatewayPluginResponseTransformerAdvancedConfigAppendOutputReference(this, "append");
  public get append() {
    return this._append;
  }
  public putAppend(value: GatewayPluginResponseTransformerAdvancedConfigAppend) {
    this._append.internalValue = value;
  }
  public resetAppend() {
    this._append.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append.internalValue;
  }

  // dots_in_keys - computed: true, optional: true, required: false
  private _dotsInKeys?: boolean | cdktf.IResolvable; 
  public get dotsInKeys() {
    return this.getBooleanAttribute('dots_in_keys');
  }
  public set dotsInKeys(value: boolean | cdktf.IResolvable) {
    this._dotsInKeys = value;
  }
  public resetDotsInKeys() {
    this._dotsInKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotsInKeysInput() {
    return this._dotsInKeys;
  }

  // remove - computed: true, optional: true, required: false
  private _remove = new GatewayPluginResponseTransformerAdvancedConfigRemoveOutputReference(this, "remove");
  public get remove() {
    return this._remove;
  }
  public putRemove(value: GatewayPluginResponseTransformerAdvancedConfigRemove) {
    this._remove.internalValue = value;
  }
  public resetRemove() {
    this._remove.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove.internalValue;
  }

  // rename - computed: true, optional: true, required: false
  private _rename = new GatewayPluginResponseTransformerAdvancedConfigRenameOutputReference(this, "rename");
  public get rename() {
    return this._rename;
  }
  public putRename(value: GatewayPluginResponseTransformerAdvancedConfigRename) {
    this._rename.internalValue = value;
  }
  public resetRename() {
    this._rename.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameInput() {
    return this._rename.internalValue;
  }

  // replace - computed: true, optional: true, required: false
  private _replace = new GatewayPluginResponseTransformerAdvancedConfigReplaceOutputReference(this, "replace");
  public get replace() {
    return this._replace;
  }
  public putReplace(value: GatewayPluginResponseTransformerAdvancedConfigReplace) {
    this._replace.internalValue = value;
  }
  public resetReplace() {
    this._replace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace.internalValue;
  }

  // transform - computed: true, optional: true, required: false
  private _transform = new GatewayPluginResponseTransformerAdvancedConfigTransformOutputReference(this, "transform");
  public get transform() {
    return this._transform;
  }
  public putTransform(value: GatewayPluginResponseTransformerAdvancedConfigTransform) {
    this._transform.internalValue = value;
  }
  public resetTransform() {
    this._transform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform.internalValue;
  }
}
export interface GatewayPluginResponseTransformerAdvancedConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#id GatewayPluginResponseTransformerAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginResponseTransformerAdvancedConsumerToTerraform(struct?: GatewayPluginResponseTransformerAdvancedConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginResponseTransformerAdvancedConsumerToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginResponseTransformerAdvancedConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginResponseTransformerAdvancedConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginResponseTransformerAdvancedConsumerGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#id GatewayPluginResponseTransformerAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginResponseTransformerAdvancedConsumerGroupToTerraform(struct?: GatewayPluginResponseTransformerAdvancedConsumerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginResponseTransformerAdvancedConsumerGroupToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedConsumerGroup | cdktf.IResolvable): any {
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

export class GatewayPluginResponseTransformerAdvancedConsumerGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginResponseTransformerAdvancedConsumerGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedConsumerGroup | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginResponseTransformerAdvancedOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#access GatewayPluginResponseTransformerAdvanced#access}
  */
  readonly access?: string[];
}

export function gatewayPluginResponseTransformerAdvancedOrderingAfterToTerraform(struct?: GatewayPluginResponseTransformerAdvancedOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginResponseTransformerAdvancedOrderingAfterToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginResponseTransformerAdvancedOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginResponseTransformerAdvancedOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginResponseTransformerAdvancedOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#access GatewayPluginResponseTransformerAdvanced#access}
  */
  readonly access?: string[];
}

export function gatewayPluginResponseTransformerAdvancedOrderingBeforeToTerraform(struct?: GatewayPluginResponseTransformerAdvancedOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginResponseTransformerAdvancedOrderingBeforeToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginResponseTransformerAdvancedOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginResponseTransformerAdvancedOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginResponseTransformerAdvancedOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#after GatewayPluginResponseTransformerAdvanced#after}
  */
  readonly after?: GatewayPluginResponseTransformerAdvancedOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#before GatewayPluginResponseTransformerAdvanced#before}
  */
  readonly before?: GatewayPluginResponseTransformerAdvancedOrderingBefore;
}

export function gatewayPluginResponseTransformerAdvancedOrderingToTerraform(struct?: GatewayPluginResponseTransformerAdvancedOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginResponseTransformerAdvancedOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginResponseTransformerAdvancedOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginResponseTransformerAdvancedOrderingToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginResponseTransformerAdvancedOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginResponseTransformerAdvancedOrderingAfter",
    },
    before: {
      value: gatewayPluginResponseTransformerAdvancedOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginResponseTransformerAdvancedOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginResponseTransformerAdvancedOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginResponseTransformerAdvancedOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginResponseTransformerAdvancedOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginResponseTransformerAdvancedOrderingAfter) {
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
  private _before = new GatewayPluginResponseTransformerAdvancedOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginResponseTransformerAdvancedOrderingBefore) {
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
export interface GatewayPluginResponseTransformerAdvancedPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#id GatewayPluginResponseTransformerAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#name GatewayPluginResponseTransformerAdvanced#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#path GatewayPluginResponseTransformerAdvanced#path}
  */
  readonly path?: string;
}

export function gatewayPluginResponseTransformerAdvancedPartialsToTerraform(struct?: GatewayPluginResponseTransformerAdvancedPartials | cdktf.IResolvable): any {
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


export function gatewayPluginResponseTransformerAdvancedPartialsToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedPartials | cdktf.IResolvable): any {
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

export class GatewayPluginResponseTransformerAdvancedPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginResponseTransformerAdvancedPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginResponseTransformerAdvancedPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginResponseTransformerAdvancedPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginResponseTransformerAdvancedPartialsOutputReference {
    return new GatewayPluginResponseTransformerAdvancedPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginResponseTransformerAdvancedRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#id GatewayPluginResponseTransformerAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginResponseTransformerAdvancedRouteToTerraform(struct?: GatewayPluginResponseTransformerAdvancedRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginResponseTransformerAdvancedRouteToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedRoute | cdktf.IResolvable): any {
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

export class GatewayPluginResponseTransformerAdvancedRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginResponseTransformerAdvancedRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginResponseTransformerAdvancedService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#id GatewayPluginResponseTransformerAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginResponseTransformerAdvancedServiceToTerraform(struct?: GatewayPluginResponseTransformerAdvancedService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginResponseTransformerAdvancedServiceToHclTerraform(struct?: GatewayPluginResponseTransformerAdvancedService | cdktf.IResolvable): any {
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

export class GatewayPluginResponseTransformerAdvancedServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginResponseTransformerAdvancedService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginResponseTransformerAdvancedService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced konnect_gateway_plugin_response_transformer_advanced}
*/
export class GatewayPluginResponseTransformerAdvanced extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_response_transformer_advanced";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginResponseTransformerAdvanced resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginResponseTransformerAdvanced to import
  * @param importFromId The id of the existing GatewayPluginResponseTransformerAdvanced that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginResponseTransformerAdvanced to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_response_transformer_advanced", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_response_transformer_advanced konnect_gateway_plugin_response_transformer_advanced} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginResponseTransformerAdvancedConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginResponseTransformerAdvancedConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_response_transformer_advanced',
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

  // config - computed: true, optional: true, required: false
  private _config = new GatewayPluginResponseTransformerAdvancedConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginResponseTransformerAdvancedConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginResponseTransformerAdvancedConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginResponseTransformerAdvancedConsumer) {
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
  private _consumerGroup = new GatewayPluginResponseTransformerAdvancedConsumerGroupOutputReference(this, "consumer_group");
  public get consumerGroup() {
    return this._consumerGroup;
  }
  public putConsumerGroup(value: GatewayPluginResponseTransformerAdvancedConsumerGroup) {
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
  private _ordering = new GatewayPluginResponseTransformerAdvancedOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginResponseTransformerAdvancedOrdering) {
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
  private _partials = new GatewayPluginResponseTransformerAdvancedPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginResponseTransformerAdvancedPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginResponseTransformerAdvancedRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginResponseTransformerAdvancedRoute) {
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
  private _service = new GatewayPluginResponseTransformerAdvancedServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginResponseTransformerAdvancedService) {
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
      config: gatewayPluginResponseTransformerAdvancedConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginResponseTransformerAdvancedConsumerToTerraform(this._consumer.internalValue),
      consumer_group: gatewayPluginResponseTransformerAdvancedConsumerGroupToTerraform(this._consumerGroup.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginResponseTransformerAdvancedOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginResponseTransformerAdvancedPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginResponseTransformerAdvancedRouteToTerraform(this._route.internalValue),
      service: gatewayPluginResponseTransformerAdvancedServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginResponseTransformerAdvancedConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginResponseTransformerAdvancedConfigA",
      },
      consumer: {
        value: gatewayPluginResponseTransformerAdvancedConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginResponseTransformerAdvancedConsumer",
      },
      consumer_group: {
        value: gatewayPluginResponseTransformerAdvancedConsumerGroupToHclTerraform(this._consumerGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginResponseTransformerAdvancedConsumerGroup",
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
        value: gatewayPluginResponseTransformerAdvancedOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginResponseTransformerAdvancedOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginResponseTransformerAdvancedPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginResponseTransformerAdvancedPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginResponseTransformerAdvancedRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginResponseTransformerAdvancedRoute",
      },
      service: {
        value: gatewayPluginResponseTransformerAdvancedServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginResponseTransformerAdvancedService",
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
