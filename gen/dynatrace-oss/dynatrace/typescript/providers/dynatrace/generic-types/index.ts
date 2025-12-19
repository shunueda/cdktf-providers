// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenericTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user or extension that created this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#created_by GenericTypes#created_by}
  */
  readonly createdBy: string;
  /**
  * The human readable type name for this entity type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#display_name GenericTypes#display_name}
  */
  readonly displayName: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#enabled GenericTypes#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#id GenericTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#insert_after GenericTypes#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * The entity type name. This type name must be unique and must not be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#name GenericTypes#name}
  */
  readonly name: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#rules GenericTypes#rules}
  */
  readonly rules: GenericTypesRules;
}
export interface GenericTypesRulesRuleAttributesAttribute {
  /**
  * The human readable attribute name for this extraction rule. Leave blank to use the key as the display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#display_name GenericTypes#display_name}
  */
  readonly displayName?: string;
  /**
  * The attribute key is the unique name of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#key GenericTypes#key}
  */
  readonly key: string;
  /**
  * Pattern for specifying the value for the extracted attribute. Can be a static value, placeholders or a combination of both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#pattern GenericTypes#pattern}
  */
  readonly pattern: string;
}

export function genericTypesRulesRuleAttributesAttributeToTerraform(struct?: GenericTypesRulesRuleAttributesAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    key: cdktf.stringToTerraform(struct!.key),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function genericTypesRulesRuleAttributesAttributeToHclTerraform(struct?: GenericTypesRulesRuleAttributesAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenericTypesRulesRuleAttributesAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenericTypesRulesRuleAttributesAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenericTypesRulesRuleAttributesAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._key = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._key = value.key;
      this._pattern = value.pattern;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class GenericTypesRulesRuleAttributesAttributeList extends cdktf.ComplexList {
  public internalValue? : GenericTypesRulesRuleAttributesAttribute[] | cdktf.IResolvable

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
  public get(index: number): GenericTypesRulesRuleAttributesAttributeOutputReference {
    return new GenericTypesRulesRuleAttributesAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenericTypesRulesRuleAttributes {
  /**
  * attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#attribute GenericTypes#attribute}
  */
  readonly attribute: GenericTypesRulesRuleAttributesAttribute[] | cdktf.IResolvable;
}

export function genericTypesRulesRuleAttributesToTerraform(struct?: GenericTypesRulesRuleAttributesOutputReference | GenericTypesRulesRuleAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.listMapper(genericTypesRulesRuleAttributesAttributeToTerraform, true)(struct!.attribute),
  }
}


export function genericTypesRulesRuleAttributesToHclTerraform(struct?: GenericTypesRulesRuleAttributesOutputReference | GenericTypesRulesRuleAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.listMapperHcl(genericTypesRulesRuleAttributesAttributeToHclTerraform, true)(struct!.attribute),
      isBlock: true,
      type: "set",
      storageClassType: "GenericTypesRulesRuleAttributesAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenericTypesRulesRuleAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenericTypesRulesRuleAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenericTypesRulesRuleAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attribute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attribute.internalValue = value.attribute;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute = new GenericTypesRulesRuleAttributesAttributeList(this, "attribute", true);
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: GenericTypesRulesRuleAttributesAttribute[] | cdktf.IResolvable) {
    this._attribute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute.internalValue;
  }
}
export interface GenericTypesRulesRuleRequiredDimensionsRequiredDimension {
  /**
  * A dimension key which needs to exist in the ingest data to match this filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#key GenericTypes#key}
  */
  readonly key: string;
  /**
  * A dimension value pattern which needs to exist in the ingest data to match this filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#value_pattern GenericTypes#value_pattern}
  */
  readonly valuePattern?: string;
}

export function genericTypesRulesRuleRequiredDimensionsRequiredDimensionToTerraform(struct?: GenericTypesRulesRuleRequiredDimensionsRequiredDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value_pattern: cdktf.stringToTerraform(struct!.valuePattern),
  }
}


export function genericTypesRulesRuleRequiredDimensionsRequiredDimensionToHclTerraform(struct?: GenericTypesRulesRuleRequiredDimensionsRequiredDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_pattern: {
      value: cdktf.stringToHclTerraform(struct!.valuePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenericTypesRulesRuleRequiredDimensionsRequiredDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenericTypesRulesRuleRequiredDimensionsRequiredDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._valuePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePattern = this._valuePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenericTypesRulesRuleRequiredDimensionsRequiredDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._valuePattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._valuePattern = value.valuePattern;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value_pattern - computed: false, optional: true, required: false
  private _valuePattern?: string; 
  public get valuePattern() {
    return this.getStringAttribute('value_pattern');
  }
  public set valuePattern(value: string) {
    this._valuePattern = value;
  }
  public resetValuePattern() {
    this._valuePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern;
  }
}

export class GenericTypesRulesRuleRequiredDimensionsRequiredDimensionList extends cdktf.ComplexList {
  public internalValue? : GenericTypesRulesRuleRequiredDimensionsRequiredDimension[] | cdktf.IResolvable

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
  public get(index: number): GenericTypesRulesRuleRequiredDimensionsRequiredDimensionOutputReference {
    return new GenericTypesRulesRuleRequiredDimensionsRequiredDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenericTypesRulesRuleRequiredDimensions {
  /**
  * required_dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#required_dimension GenericTypes#required_dimension}
  */
  readonly requiredDimension: GenericTypesRulesRuleRequiredDimensionsRequiredDimension[] | cdktf.IResolvable;
}

export function genericTypesRulesRuleRequiredDimensionsToTerraform(struct?: GenericTypesRulesRuleRequiredDimensionsOutputReference | GenericTypesRulesRuleRequiredDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required_dimension: cdktf.listMapper(genericTypesRulesRuleRequiredDimensionsRequiredDimensionToTerraform, true)(struct!.requiredDimension),
  }
}


export function genericTypesRulesRuleRequiredDimensionsToHclTerraform(struct?: GenericTypesRulesRuleRequiredDimensionsOutputReference | GenericTypesRulesRuleRequiredDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required_dimension: {
      value: cdktf.listMapperHcl(genericTypesRulesRuleRequiredDimensionsRequiredDimensionToHclTerraform, true)(struct!.requiredDimension),
      isBlock: true,
      type: "set",
      storageClassType: "GenericTypesRulesRuleRequiredDimensionsRequiredDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenericTypesRulesRuleRequiredDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenericTypesRulesRuleRequiredDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requiredDimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDimension = this._requiredDimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenericTypesRulesRuleRequiredDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requiredDimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requiredDimension.internalValue = value.requiredDimension;
    }
  }

  // required_dimension - computed: false, optional: false, required: true
  private _requiredDimension = new GenericTypesRulesRuleRequiredDimensionsRequiredDimensionList(this, "required_dimension", true);
  public get requiredDimension() {
    return this._requiredDimension;
  }
  public putRequiredDimension(value: GenericTypesRulesRuleRequiredDimensionsRequiredDimension[] | cdktf.IResolvable) {
    this._requiredDimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDimensionInput() {
    return this._requiredDimension.internalValue;
  }
}
export interface GenericTypesRulesRuleSourcesSource {
  /**
  * Specify a filter that needs to match in order for the extraction to happen.. Three different filters are supported: `$eq(value)` will ensure that the source matches exactly 'value', `$prefix(value)` will ensure that the source begins with exactly 'value', '$exists()' will ensure that any source with matching dimension filter exists.
  * If your value contains the characters '(', ')' or '\~', you need to escape them by adding a '\~' in front of them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#condition GenericTypes#condition}
  */
  readonly condition?: string;
  /**
  * Possible Values: `BusinessEvents`, `Entities`, `Events`, `Logs`, `Metrics`, `Spans`, `Topology`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#source_type GenericTypes#source_type}
  */
  readonly sourceType: string;
}

export function genericTypesRulesRuleSourcesSourceToTerraform(struct?: GenericTypesRulesRuleSourcesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function genericTypesRulesRuleSourcesSourceToHclTerraform(struct?: GenericTypesRulesRuleSourcesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenericTypesRulesRuleSourcesSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenericTypesRulesRuleSourcesSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenericTypesRulesRuleSourcesSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._sourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._sourceType = value.sourceType;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}

export class GenericTypesRulesRuleSourcesSourceList extends cdktf.ComplexList {
  public internalValue? : GenericTypesRulesRuleSourcesSource[] | cdktf.IResolvable

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
  public get(index: number): GenericTypesRulesRuleSourcesSourceOutputReference {
    return new GenericTypesRulesRuleSourcesSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenericTypesRulesRuleSources {
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#source GenericTypes#source}
  */
  readonly source: GenericTypesRulesRuleSourcesSource[] | cdktf.IResolvable;
}

export function genericTypesRulesRuleSourcesToTerraform(struct?: GenericTypesRulesRuleSourcesOutputReference | GenericTypesRulesRuleSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.listMapper(genericTypesRulesRuleSourcesSourceToTerraform, true)(struct!.source),
  }
}


export function genericTypesRulesRuleSourcesToHclTerraform(struct?: GenericTypesRulesRuleSourcesOutputReference | GenericTypesRulesRuleSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.listMapperHcl(genericTypesRulesRuleSourcesSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "set",
      storageClassType: "GenericTypesRulesRuleSourcesSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenericTypesRulesRuleSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenericTypesRulesRuleSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenericTypesRulesRuleSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._source.internalValue = value.source;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source = new GenericTypesRulesRuleSourcesSourceList(this, "source", true);
  public get source() {
    return this._source;
  }
  public putSource(value: GenericTypesRulesRuleSourcesSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface GenericTypesRulesRule {
  /**
  * Define a pattern which is used to set the icon attribute of the entity. The extracted values must reference barista icon ids. You may define placeholders referencing data source dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#icon_pattern GenericTypes#icon_pattern}
  */
  readonly iconPattern?: string;
  /**
  * ID patterns are comprised of static text and placeholders referring to dimensions in the ingest data. An ID pattern **must** contain at least one placeholder to ensure that different entities will be created.. Take care that the pattern results in the same ID for the same entity. For example, using timestamp or counter-like dimensions as part of the ID would lead to the creation of new entities for each ingest data and is strongly discouraged!
  * 
  * Each dimension key referred to by an identifier placeholder must be present in order to extract an entity. If any dimension key referred to in the identifier is missing, the rule will not be considered for evaluation. If you have cases where you still want to extract the same entity type but have differently named keys, consider creating multiple rules extracting the same entity type. In this case take care that each ID pattern evaluates to the same value if the same entity should be extracted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#id_pattern GenericTypes#id_pattern}
  */
  readonly idPattern: string;
  /**
  * Define a pattern which is used to set the name attribute of the entity. You may define placeholders referencing data source dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#instance_name_pattern GenericTypes#instance_name_pattern}
  */
  readonly instanceNamePattern?: string;
  /**
  * If you want to extract multiple entities of the same type from a single ingest line you need to define multiple rules with different roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#role GenericTypes#role}
  */
  readonly role?: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#attributes GenericTypes#attributes}
  */
  readonly attributes?: GenericTypesRulesRuleAttributes;
  /**
  * required_dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#required_dimensions GenericTypes#required_dimensions}
  */
  readonly requiredDimensions?: GenericTypesRulesRuleRequiredDimensions;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#sources GenericTypes#sources}
  */
  readonly sources: GenericTypesRulesRuleSources;
}

export function genericTypesRulesRuleToTerraform(struct?: GenericTypesRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icon_pattern: cdktf.stringToTerraform(struct!.iconPattern),
    id_pattern: cdktf.stringToTerraform(struct!.idPattern),
    instance_name_pattern: cdktf.stringToTerraform(struct!.instanceNamePattern),
    role: cdktf.stringToTerraform(struct!.role),
    attributes: genericTypesRulesRuleAttributesToTerraform(struct!.attributes),
    required_dimensions: genericTypesRulesRuleRequiredDimensionsToTerraform(struct!.requiredDimensions),
    sources: genericTypesRulesRuleSourcesToTerraform(struct!.sources),
  }
}


export function genericTypesRulesRuleToHclTerraform(struct?: GenericTypesRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icon_pattern: {
      value: cdktf.stringToHclTerraform(struct!.iconPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_pattern: {
      value: cdktf.stringToHclTerraform(struct!.idPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name_pattern: {
      value: cdktf.stringToHclTerraform(struct!.instanceNamePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: genericTypesRulesRuleAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "GenericTypesRulesRuleAttributesList",
    },
    required_dimensions: {
      value: genericTypesRulesRuleRequiredDimensionsToHclTerraform(struct!.requiredDimensions),
      isBlock: true,
      type: "list",
      storageClassType: "GenericTypesRulesRuleRequiredDimensionsList",
    },
    sources: {
      value: genericTypesRulesRuleSourcesToHclTerraform(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "GenericTypesRulesRuleSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenericTypesRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenericTypesRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iconPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconPattern = this._iconPattern;
    }
    if (this._idPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.idPattern = this._idPattern;
    }
    if (this._instanceNamePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceNamePattern = this._instanceNamePattern;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._requiredDimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDimensions = this._requiredDimensions?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenericTypesRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iconPattern = undefined;
      this._idPattern = undefined;
      this._instanceNamePattern = undefined;
      this._role = undefined;
      this._attributes.internalValue = undefined;
      this._requiredDimensions.internalValue = undefined;
      this._sources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iconPattern = value.iconPattern;
      this._idPattern = value.idPattern;
      this._instanceNamePattern = value.instanceNamePattern;
      this._role = value.role;
      this._attributes.internalValue = value.attributes;
      this._requiredDimensions.internalValue = value.requiredDimensions;
      this._sources.internalValue = value.sources;
    }
  }

  // icon_pattern - computed: false, optional: true, required: false
  private _iconPattern?: string; 
  public get iconPattern() {
    return this.getStringAttribute('icon_pattern');
  }
  public set iconPattern(value: string) {
    this._iconPattern = value;
  }
  public resetIconPattern() {
    this._iconPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconPatternInput() {
    return this._iconPattern;
  }

  // id_pattern - computed: false, optional: false, required: true
  private _idPattern?: string; 
  public get idPattern() {
    return this.getStringAttribute('id_pattern');
  }
  public set idPattern(value: string) {
    this._idPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idPatternInput() {
    return this._idPattern;
  }

  // instance_name_pattern - computed: false, optional: true, required: false
  private _instanceNamePattern?: string; 
  public get instanceNamePattern() {
    return this.getStringAttribute('instance_name_pattern');
  }
  public set instanceNamePattern(value: string) {
    this._instanceNamePattern = value;
  }
  public resetInstanceNamePattern() {
    this._instanceNamePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNamePatternInput() {
    return this._instanceNamePattern;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new GenericTypesRulesRuleAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: GenericTypesRulesRuleAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // required_dimensions - computed: false, optional: true, required: false
  private _requiredDimensions = new GenericTypesRulesRuleRequiredDimensionsOutputReference(this, "required_dimensions");
  public get requiredDimensions() {
    return this._requiredDimensions;
  }
  public putRequiredDimensions(value: GenericTypesRulesRuleRequiredDimensions) {
    this._requiredDimensions.internalValue = value;
  }
  public resetRequiredDimensions() {
    this._requiredDimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDimensionsInput() {
    return this._requiredDimensions.internalValue;
  }

  // sources - computed: false, optional: false, required: true
  private _sources = new GenericTypesRulesRuleSourcesOutputReference(this, "sources");
  public get sources() {
    return this._sources;
  }
  public putSources(value: GenericTypesRulesRuleSources) {
    this._sources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}

export class GenericTypesRulesRuleList extends cdktf.ComplexList {
  public internalValue? : GenericTypesRulesRule[] | cdktf.IResolvable

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
  public get(index: number): GenericTypesRulesRuleOutputReference {
    return new GenericTypesRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenericTypesRules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#rule GenericTypes#rule}
  */
  readonly rule: GenericTypesRulesRule[] | cdktf.IResolvable;
}

export function genericTypesRulesToTerraform(struct?: GenericTypesRulesOutputReference | GenericTypesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(genericTypesRulesRuleToTerraform, true)(struct!.rule),
  }
}


export function genericTypesRulesToHclTerraform(struct?: GenericTypesRulesOutputReference | GenericTypesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(genericTypesRulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "GenericTypesRulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenericTypesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenericTypesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenericTypesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new GenericTypesRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: GenericTypesRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types dynatrace_generic_types}
*/
export class GenericTypes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_generic_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenericTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenericTypes to import
  * @param importFromId The id of the existing GenericTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenericTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_generic_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/generic_types dynatrace_generic_types} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenericTypesConfig
  */
  public constructor(scope: Construct, id: string, config: GenericTypesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_generic_types',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdBy = config.createdBy;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._name = config.name;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: false, optional: false, required: true
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
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

  // rules - computed: false, optional: false, required: true
  private _rules = new GenericTypesRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: GenericTypesRules) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      name: cdktf.stringToTerraform(this._name),
      rules: genericTypesRulesToTerraform(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: genericTypesRulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenericTypesRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
