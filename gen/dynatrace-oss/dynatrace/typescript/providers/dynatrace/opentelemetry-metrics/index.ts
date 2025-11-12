// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpentelemetryMetricsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add the resource and scope attributes configured below as dimensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics#additional_attributes_to_dimension_enabled OpentelemetryMetrics#additional_attributes_to_dimension_enabled}
  */
  readonly additionalAttributesToDimensionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics#id OpentelemetryMetrics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When enabled, the Meter name (also referred to as InstrumentationScope or InstrumentationLibrary in OpenTelemetry SDKs) and version will be added as dimensions (`otel.scope.name` and `otel.scope.version`) to ingested OTLP metrics.
  * 
  * **Note:** Modifying this setting will cause the metric to change. This may have an impact on existing dashboards, events and alerts that make use of these dimensions. In this case, they will need to be updated manually
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics#meter_name_to_dimension_enabled OpentelemetryMetrics#meter_name_to_dimension_enabled}
  */
  readonly meterNameToDimensionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the given attributes to enable (`additional_attributes`) and the attributes to drop (`to_drop_attributes`) will get applied explicitly (`EXPLICIT`) or additive (`ADDITIVE`).
  * 
  * Default behavior is `EXPLICIT` - in which case it is recommended to have just ONE instance of this resource
  * 
  * With mode `ADDITIVE` you're able to have multiple instances of this resource within the same Terraform Module.
  * 
  * **Note:** Using `ADDITIVE` and `EXPLICIT` at the same time within differnt resource instances will lead to unexpected results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics#mode OpentelemetryMetrics#mode}
  */
  readonly mode?: string;
  /**
  * The scope of this setting (environment-default). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics#scope OpentelemetryMetrics#scope}
  */
  readonly scope?: string;
  /**
  * additional_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics#additional_attributes OpentelemetryMetrics#additional_attributes}
  */
  readonly additionalAttributes?: OpentelemetryMetricsAdditionalAttributes;
  /**
  * to_drop_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics#to_drop_attributes OpentelemetryMetrics#to_drop_attributes}
  */
  readonly toDropAttributes?: OpentelemetryMetricsToDropAttributes;
}
export interface OpentelemetryMetricsAdditionalAttributesAdditionalAttribute {
  /**
  * Attribute key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics#attribute_key OpentelemetryMetrics#attribute_key}
  */
  readonly attributeKey: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics#enabled OpentelemetryMetrics#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function opentelemetryMetricsAdditionalAttributesAdditionalAttributeToTerraform(struct?: OpentelemetryMetricsAdditionalAttributesAdditionalAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_key: cdktf.stringToTerraform(struct!.attributeKey),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function opentelemetryMetricsAdditionalAttributesAdditionalAttributeToHclTerraform(struct?: OpentelemetryMetricsAdditionalAttributesAdditionalAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_key: {
      value: cdktf.stringToHclTerraform(struct!.attributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpentelemetryMetricsAdditionalAttributesAdditionalAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpentelemetryMetricsAdditionalAttributesAdditionalAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeKey = this._attributeKey;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpentelemetryMetricsAdditionalAttributesAdditionalAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeKey = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeKey = value.attributeKey;
      this._enabled = value.enabled;
    }
  }

  // attribute_key - computed: false, optional: false, required: true
  private _attributeKey?: string; 
  public get attributeKey() {
    return this.getStringAttribute('attribute_key');
  }
  public set attributeKey(value: string) {
    this._attributeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeKeyInput() {
    return this._attributeKey;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class OpentelemetryMetricsAdditionalAttributesAdditionalAttributeList extends cdktf.ComplexList {
  public internalValue? : OpentelemetryMetricsAdditionalAttributesAdditionalAttribute[] | cdktf.IResolvable

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
  public get(index: number): OpentelemetryMetricsAdditionalAttributesAdditionalAttributeOutputReference {
    return new OpentelemetryMetricsAdditionalAttributesAdditionalAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpentelemetryMetricsAdditionalAttributes {
  /**
  * additional_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics#additional_attribute OpentelemetryMetrics#additional_attribute}
  */
  readonly additionalAttribute: OpentelemetryMetricsAdditionalAttributesAdditionalAttribute[] | cdktf.IResolvable;
}

export function opentelemetryMetricsAdditionalAttributesToTerraform(struct?: OpentelemetryMetricsAdditionalAttributesOutputReference | OpentelemetryMetricsAdditionalAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_attribute: cdktf.listMapper(opentelemetryMetricsAdditionalAttributesAdditionalAttributeToTerraform, true)(struct!.additionalAttribute),
  }
}


export function opentelemetryMetricsAdditionalAttributesToHclTerraform(struct?: OpentelemetryMetricsAdditionalAttributesOutputReference | OpentelemetryMetricsAdditionalAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_attribute: {
      value: cdktf.listMapperHcl(opentelemetryMetricsAdditionalAttributesAdditionalAttributeToHclTerraform, true)(struct!.additionalAttribute),
      isBlock: true,
      type: "set",
      storageClassType: "OpentelemetryMetricsAdditionalAttributesAdditionalAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpentelemetryMetricsAdditionalAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpentelemetryMetricsAdditionalAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalAttribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAttribute = this._additionalAttribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpentelemetryMetricsAdditionalAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalAttribute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalAttribute.internalValue = value.additionalAttribute;
    }
  }

  // additional_attribute - computed: false, optional: false, required: true
  private _additionalAttribute = new OpentelemetryMetricsAdditionalAttributesAdditionalAttributeList(this, "additional_attribute", true);
  public get additionalAttribute() {
    return this._additionalAttribute;
  }
  public putAdditionalAttribute(value: OpentelemetryMetricsAdditionalAttributesAdditionalAttribute[] | cdktf.IResolvable) {
    this._additionalAttribute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributeInput() {
    return this._additionalAttribute.internalValue;
  }
}
export interface OpentelemetryMetricsToDropAttributesToDropAttribute {
  /**
  * Attribute key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics#attribute_key OpentelemetryMetrics#attribute_key}
  */
  readonly attributeKey: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics#enabled OpentelemetryMetrics#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function opentelemetryMetricsToDropAttributesToDropAttributeToTerraform(struct?: OpentelemetryMetricsToDropAttributesToDropAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_key: cdktf.stringToTerraform(struct!.attributeKey),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function opentelemetryMetricsToDropAttributesToDropAttributeToHclTerraform(struct?: OpentelemetryMetricsToDropAttributesToDropAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_key: {
      value: cdktf.stringToHclTerraform(struct!.attributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpentelemetryMetricsToDropAttributesToDropAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpentelemetryMetricsToDropAttributesToDropAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeKey = this._attributeKey;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpentelemetryMetricsToDropAttributesToDropAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeKey = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeKey = value.attributeKey;
      this._enabled = value.enabled;
    }
  }

  // attribute_key - computed: false, optional: false, required: true
  private _attributeKey?: string; 
  public get attributeKey() {
    return this.getStringAttribute('attribute_key');
  }
  public set attributeKey(value: string) {
    this._attributeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeKeyInput() {
    return this._attributeKey;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class OpentelemetryMetricsToDropAttributesToDropAttributeList extends cdktf.ComplexList {
  public internalValue? : OpentelemetryMetricsToDropAttributesToDropAttribute[] | cdktf.IResolvable

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
  public get(index: number): OpentelemetryMetricsToDropAttributesToDropAttributeOutputReference {
    return new OpentelemetryMetricsToDropAttributesToDropAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpentelemetryMetricsToDropAttributes {
  /**
  * to_drop_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics#to_drop_attribute OpentelemetryMetrics#to_drop_attribute}
  */
  readonly toDropAttribute: OpentelemetryMetricsToDropAttributesToDropAttribute[] | cdktf.IResolvable;
}

export function opentelemetryMetricsToDropAttributesToTerraform(struct?: OpentelemetryMetricsToDropAttributesOutputReference | OpentelemetryMetricsToDropAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    to_drop_attribute: cdktf.listMapper(opentelemetryMetricsToDropAttributesToDropAttributeToTerraform, true)(struct!.toDropAttribute),
  }
}


export function opentelemetryMetricsToDropAttributesToHclTerraform(struct?: OpentelemetryMetricsToDropAttributesOutputReference | OpentelemetryMetricsToDropAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    to_drop_attribute: {
      value: cdktf.listMapperHcl(opentelemetryMetricsToDropAttributesToDropAttributeToHclTerraform, true)(struct!.toDropAttribute),
      isBlock: true,
      type: "set",
      storageClassType: "OpentelemetryMetricsToDropAttributesToDropAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpentelemetryMetricsToDropAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpentelemetryMetricsToDropAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toDropAttribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toDropAttribute = this._toDropAttribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpentelemetryMetricsToDropAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toDropAttribute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toDropAttribute.internalValue = value.toDropAttribute;
    }
  }

  // to_drop_attribute - computed: false, optional: false, required: true
  private _toDropAttribute = new OpentelemetryMetricsToDropAttributesToDropAttributeList(this, "to_drop_attribute", true);
  public get toDropAttribute() {
    return this._toDropAttribute;
  }
  public putToDropAttribute(value: OpentelemetryMetricsToDropAttributesToDropAttribute[] | cdktf.IResolvable) {
    this._toDropAttribute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toDropAttributeInput() {
    return this._toDropAttribute.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics dynatrace_opentelemetry_metrics}
*/
export class OpentelemetryMetrics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_opentelemetry_metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpentelemetryMetrics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpentelemetryMetrics to import
  * @param importFromId The id of the existing OpentelemetryMetrics that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpentelemetryMetrics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_opentelemetry_metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/opentelemetry_metrics dynatrace_opentelemetry_metrics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpentelemetryMetricsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpentelemetryMetricsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_opentelemetry_metrics',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalAttributesToDimensionEnabled = config.additionalAttributesToDimensionEnabled;
    this._id = config.id;
    this._meterNameToDimensionEnabled = config.meterNameToDimensionEnabled;
    this._mode = config.mode;
    this._scope = config.scope;
    this._additionalAttributes.internalValue = config.additionalAttributes;
    this._toDropAttributes.internalValue = config.toDropAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_attributes_to_dimension_enabled - computed: true, optional: true, required: false
  private _additionalAttributesToDimensionEnabled?: boolean | cdktf.IResolvable; 
  public get additionalAttributesToDimensionEnabled() {
    return this.getBooleanAttribute('additional_attributes_to_dimension_enabled');
  }
  public set additionalAttributesToDimensionEnabled(value: boolean | cdktf.IResolvable) {
    this._additionalAttributesToDimensionEnabled = value;
  }
  public resetAdditionalAttributesToDimensionEnabled() {
    this._additionalAttributesToDimensionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributesToDimensionEnabledInput() {
    return this._additionalAttributesToDimensionEnabled;
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

  // meter_name_to_dimension_enabled - computed: true, optional: true, required: false
  private _meterNameToDimensionEnabled?: boolean | cdktf.IResolvable; 
  public get meterNameToDimensionEnabled() {
    return this.getBooleanAttribute('meter_name_to_dimension_enabled');
  }
  public set meterNameToDimensionEnabled(value: boolean | cdktf.IResolvable) {
    this._meterNameToDimensionEnabled = value;
  }
  public resetMeterNameToDimensionEnabled() {
    this._meterNameToDimensionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meterNameToDimensionEnabledInput() {
    return this._meterNameToDimensionEnabled;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // additional_attributes - computed: false, optional: true, required: false
  private _additionalAttributes = new OpentelemetryMetricsAdditionalAttributesOutputReference(this, "additional_attributes");
  public get additionalAttributes() {
    return this._additionalAttributes;
  }
  public putAdditionalAttributes(value: OpentelemetryMetricsAdditionalAttributes) {
    this._additionalAttributes.internalValue = value;
  }
  public resetAdditionalAttributes() {
    this._additionalAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributesInput() {
    return this._additionalAttributes.internalValue;
  }

  // to_drop_attributes - computed: false, optional: true, required: false
  private _toDropAttributes = new OpentelemetryMetricsToDropAttributesOutputReference(this, "to_drop_attributes");
  public get toDropAttributes() {
    return this._toDropAttributes;
  }
  public putToDropAttributes(value: OpentelemetryMetricsToDropAttributes) {
    this._toDropAttributes.internalValue = value;
  }
  public resetToDropAttributes() {
    this._toDropAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toDropAttributesInput() {
    return this._toDropAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_attributes_to_dimension_enabled: cdktf.booleanToTerraform(this._additionalAttributesToDimensionEnabled),
      id: cdktf.stringToTerraform(this._id),
      meter_name_to_dimension_enabled: cdktf.booleanToTerraform(this._meterNameToDimensionEnabled),
      mode: cdktf.stringToTerraform(this._mode),
      scope: cdktf.stringToTerraform(this._scope),
      additional_attributes: opentelemetryMetricsAdditionalAttributesToTerraform(this._additionalAttributes.internalValue),
      to_drop_attributes: opentelemetryMetricsToDropAttributesToTerraform(this._toDropAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_attributes_to_dimension_enabled: {
        value: cdktf.booleanToHclTerraform(this._additionalAttributesToDimensionEnabled),
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
      meter_name_to_dimension_enabled: {
        value: cdktf.booleanToHclTerraform(this._meterNameToDimensionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_attributes: {
        value: opentelemetryMetricsAdditionalAttributesToHclTerraform(this._additionalAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpentelemetryMetricsAdditionalAttributesList",
      },
      to_drop_attributes: {
        value: opentelemetryMetricsToDropAttributesToHclTerraform(this._toDropAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpentelemetryMetricsToDropAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
