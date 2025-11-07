// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DerivedLabelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#description DerivedLabel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#existing_label_policy DerivedLabel#existing_label_policy}
  */
  readonly existingLabelPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#id DerivedLabel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#label_name DerivedLabel#label_name}
  */
  readonly labelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#name DerivedLabel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#slug DerivedLabel#slug}
  */
  readonly slug?: string;
  /**
  * metric_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#metric_label DerivedLabel#metric_label}
  */
  readonly metricLabel?: DerivedLabelMetricLabel;
  /**
  * span_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#span_tag DerivedLabel#span_tag}
  */
  readonly spanTag?: DerivedLabelSpanTag;
}
export interface DerivedLabelMetricLabelConstructedLabelValueDefinitionsFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#name DerivedLabel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#value_glob DerivedLabel#value_glob}
  */
  readonly valueGlob: string;
}

export function derivedLabelMetricLabelConstructedLabelValueDefinitionsFiltersToTerraform(struct?: DerivedLabelMetricLabelConstructedLabelValueDefinitionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_glob: cdktf.stringToTerraform(struct!.valueGlob),
  }
}


export function derivedLabelMetricLabelConstructedLabelValueDefinitionsFiltersToHclTerraform(struct?: DerivedLabelMetricLabelConstructedLabelValueDefinitionsFilters | cdktf.IResolvable): any {
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
    value_glob: {
      value: cdktf.stringToHclTerraform(struct!.valueGlob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DerivedLabelMetricLabelConstructedLabelValueDefinitionsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DerivedLabelMetricLabelConstructedLabelValueDefinitionsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueGlob !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueGlob = this._valueGlob;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DerivedLabelMetricLabelConstructedLabelValueDefinitionsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueGlob = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueGlob = value.valueGlob;
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

  // value_glob - computed: false, optional: false, required: true
  private _valueGlob?: string; 
  public get valueGlob() {
    return this.getStringAttribute('value_glob');
  }
  public set valueGlob(value: string) {
    this._valueGlob = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueGlobInput() {
    return this._valueGlob;
  }
}

export class DerivedLabelMetricLabelConstructedLabelValueDefinitionsFiltersList extends cdktf.ComplexList {
  public internalValue? : DerivedLabelMetricLabelConstructedLabelValueDefinitionsFilters[] | cdktf.IResolvable

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
  public get(index: number): DerivedLabelMetricLabelConstructedLabelValueDefinitionsFiltersOutputReference {
    return new DerivedLabelMetricLabelConstructedLabelValueDefinitionsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DerivedLabelMetricLabelConstructedLabelValueDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#value DerivedLabel#value}
  */
  readonly value: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#filters DerivedLabel#filters}
  */
  readonly filters: DerivedLabelMetricLabelConstructedLabelValueDefinitionsFilters[] | cdktf.IResolvable;
}

export function derivedLabelMetricLabelConstructedLabelValueDefinitionsToTerraform(struct?: DerivedLabelMetricLabelConstructedLabelValueDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    filters: cdktf.listMapper(derivedLabelMetricLabelConstructedLabelValueDefinitionsFiltersToTerraform, true)(struct!.filters),
  }
}


export function derivedLabelMetricLabelConstructedLabelValueDefinitionsToHclTerraform(struct?: DerivedLabelMetricLabelConstructedLabelValueDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktf.listMapperHcl(derivedLabelMetricLabelConstructedLabelValueDefinitionsFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DerivedLabelMetricLabelConstructedLabelValueDefinitionsFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DerivedLabelMetricLabelConstructedLabelValueDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DerivedLabelMetricLabelConstructedLabelValueDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DerivedLabelMetricLabelConstructedLabelValueDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._filters.internalValue = value.filters;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // filters - computed: false, optional: false, required: true
  private _filters = new DerivedLabelMetricLabelConstructedLabelValueDefinitionsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DerivedLabelMetricLabelConstructedLabelValueDefinitionsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

export class DerivedLabelMetricLabelConstructedLabelValueDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DerivedLabelMetricLabelConstructedLabelValueDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DerivedLabelMetricLabelConstructedLabelValueDefinitionsOutputReference {
    return new DerivedLabelMetricLabelConstructedLabelValueDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DerivedLabelMetricLabelConstructedLabel {
  /**
  * value_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#value_definitions DerivedLabel#value_definitions}
  */
  readonly valueDefinitions: DerivedLabelMetricLabelConstructedLabelValueDefinitions[] | cdktf.IResolvable;
}

export function derivedLabelMetricLabelConstructedLabelToTerraform(struct?: DerivedLabelMetricLabelConstructedLabelOutputReference | DerivedLabelMetricLabelConstructedLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_definitions: cdktf.listMapper(derivedLabelMetricLabelConstructedLabelValueDefinitionsToTerraform, true)(struct!.valueDefinitions),
  }
}


export function derivedLabelMetricLabelConstructedLabelToHclTerraform(struct?: DerivedLabelMetricLabelConstructedLabelOutputReference | DerivedLabelMetricLabelConstructedLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_definitions: {
      value: cdktf.listMapperHcl(derivedLabelMetricLabelConstructedLabelValueDefinitionsToHclTerraform, true)(struct!.valueDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DerivedLabelMetricLabelConstructedLabelValueDefinitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DerivedLabelMetricLabelConstructedLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DerivedLabelMetricLabelConstructedLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueDefinitions = this._valueDefinitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DerivedLabelMetricLabelConstructedLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._valueDefinitions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._valueDefinitions.internalValue = value.valueDefinitions;
    }
  }

  // value_definitions - computed: false, optional: false, required: true
  private _valueDefinitions = new DerivedLabelMetricLabelConstructedLabelValueDefinitionsList(this, "value_definitions", false);
  public get valueDefinitions() {
    return this._valueDefinitions;
  }
  public putValueDefinitions(value: DerivedLabelMetricLabelConstructedLabelValueDefinitions[] | cdktf.IResolvable) {
    this._valueDefinitions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueDefinitionsInput() {
    return this._valueDefinitions.internalValue;
  }
}
export interface DerivedLabelMetricLabelMappingLabelNameMappingsFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#name DerivedLabel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#value_glob DerivedLabel#value_glob}
  */
  readonly valueGlob: string;
}

export function derivedLabelMetricLabelMappingLabelNameMappingsFiltersToTerraform(struct?: DerivedLabelMetricLabelMappingLabelNameMappingsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_glob: cdktf.stringToTerraform(struct!.valueGlob),
  }
}


export function derivedLabelMetricLabelMappingLabelNameMappingsFiltersToHclTerraform(struct?: DerivedLabelMetricLabelMappingLabelNameMappingsFilters | cdktf.IResolvable): any {
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
    value_glob: {
      value: cdktf.stringToHclTerraform(struct!.valueGlob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DerivedLabelMetricLabelMappingLabelNameMappingsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DerivedLabelMetricLabelMappingLabelNameMappingsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueGlob !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueGlob = this._valueGlob;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DerivedLabelMetricLabelMappingLabelNameMappingsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueGlob = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueGlob = value.valueGlob;
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

  // value_glob - computed: false, optional: false, required: true
  private _valueGlob?: string; 
  public get valueGlob() {
    return this.getStringAttribute('value_glob');
  }
  public set valueGlob(value: string) {
    this._valueGlob = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueGlobInput() {
    return this._valueGlob;
  }
}

export class DerivedLabelMetricLabelMappingLabelNameMappingsFiltersList extends cdktf.ComplexList {
  public internalValue? : DerivedLabelMetricLabelMappingLabelNameMappingsFilters[] | cdktf.IResolvable

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
  public get(index: number): DerivedLabelMetricLabelMappingLabelNameMappingsFiltersOutputReference {
    return new DerivedLabelMetricLabelMappingLabelNameMappingsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DerivedLabelMetricLabelMappingLabelNameMappingsValueMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#source_value_globs DerivedLabel#source_value_globs}
  */
  readonly sourceValueGlobs: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#target_value DerivedLabel#target_value}
  */
  readonly targetValue: string;
}

export function derivedLabelMetricLabelMappingLabelNameMappingsValueMappingsToTerraform(struct?: DerivedLabelMetricLabelMappingLabelNameMappingsValueMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_value_globs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceValueGlobs),
    target_value: cdktf.stringToTerraform(struct!.targetValue),
  }
}


export function derivedLabelMetricLabelMappingLabelNameMappingsValueMappingsToHclTerraform(struct?: DerivedLabelMetricLabelMappingLabelNameMappingsValueMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_value_globs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceValueGlobs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_value: {
      value: cdktf.stringToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DerivedLabelMetricLabelMappingLabelNameMappingsValueMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DerivedLabelMetricLabelMappingLabelNameMappingsValueMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceValueGlobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceValueGlobs = this._sourceValueGlobs;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DerivedLabelMetricLabelMappingLabelNameMappingsValueMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceValueGlobs = undefined;
      this._targetValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceValueGlobs = value.sourceValueGlobs;
      this._targetValue = value.targetValue;
    }
  }

  // source_value_globs - computed: false, optional: false, required: true
  private _sourceValueGlobs?: string[]; 
  public get sourceValueGlobs() {
    return this.getListAttribute('source_value_globs');
  }
  public set sourceValueGlobs(value: string[]) {
    this._sourceValueGlobs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceValueGlobsInput() {
    return this._sourceValueGlobs;
  }

  // target_value - computed: false, optional: false, required: true
  private _targetValue?: string; 
  public get targetValue() {
    return this.getStringAttribute('target_value');
  }
  public set targetValue(value: string) {
    this._targetValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}

export class DerivedLabelMetricLabelMappingLabelNameMappingsValueMappingsList extends cdktf.ComplexList {
  public internalValue? : DerivedLabelMetricLabelMappingLabelNameMappingsValueMappings[] | cdktf.IResolvable

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
  public get(index: number): DerivedLabelMetricLabelMappingLabelNameMappingsValueMappingsOutputReference {
    return new DerivedLabelMetricLabelMappingLabelNameMappingsValueMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DerivedLabelMetricLabelMappingLabelNameMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#source_label DerivedLabel#source_label}
  */
  readonly sourceLabel: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#filters DerivedLabel#filters}
  */
  readonly filters: DerivedLabelMetricLabelMappingLabelNameMappingsFilters[] | cdktf.IResolvable;
  /**
  * value_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#value_mappings DerivedLabel#value_mappings}
  */
  readonly valueMappings?: DerivedLabelMetricLabelMappingLabelNameMappingsValueMappings[] | cdktf.IResolvable;
}

export function derivedLabelMetricLabelMappingLabelNameMappingsToTerraform(struct?: DerivedLabelMetricLabelMappingLabelNameMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_label: cdktf.stringToTerraform(struct!.sourceLabel),
    filters: cdktf.listMapper(derivedLabelMetricLabelMappingLabelNameMappingsFiltersToTerraform, true)(struct!.filters),
    value_mappings: cdktf.listMapper(derivedLabelMetricLabelMappingLabelNameMappingsValueMappingsToTerraform, true)(struct!.valueMappings),
  }
}


export function derivedLabelMetricLabelMappingLabelNameMappingsToHclTerraform(struct?: DerivedLabelMetricLabelMappingLabelNameMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_label: {
      value: cdktf.stringToHclTerraform(struct!.sourceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktf.listMapperHcl(derivedLabelMetricLabelMappingLabelNameMappingsFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DerivedLabelMetricLabelMappingLabelNameMappingsFiltersList",
    },
    value_mappings: {
      value: cdktf.listMapperHcl(derivedLabelMetricLabelMappingLabelNameMappingsValueMappingsToHclTerraform, true)(struct!.valueMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DerivedLabelMetricLabelMappingLabelNameMappingsValueMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DerivedLabelMetricLabelMappingLabelNameMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DerivedLabelMetricLabelMappingLabelNameMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabel = this._sourceLabel;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._valueMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueMappings = this._valueMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DerivedLabelMetricLabelMappingLabelNameMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceLabel = undefined;
      this._filters.internalValue = undefined;
      this._valueMappings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceLabel = value.sourceLabel;
      this._filters.internalValue = value.filters;
      this._valueMappings.internalValue = value.valueMappings;
    }
  }

  // source_label - computed: false, optional: false, required: true
  private _sourceLabel?: string; 
  public get sourceLabel() {
    return this.getStringAttribute('source_label');
  }
  public set sourceLabel(value: string) {
    this._sourceLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelInput() {
    return this._sourceLabel;
  }

  // filters - computed: false, optional: false, required: true
  private _filters = new DerivedLabelMetricLabelMappingLabelNameMappingsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DerivedLabelMetricLabelMappingLabelNameMappingsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // value_mappings - computed: false, optional: true, required: false
  private _valueMappings = new DerivedLabelMetricLabelMappingLabelNameMappingsValueMappingsList(this, "value_mappings", false);
  public get valueMappings() {
    return this._valueMappings;
  }
  public putValueMappings(value: DerivedLabelMetricLabelMappingLabelNameMappingsValueMappings[] | cdktf.IResolvable) {
    this._valueMappings.internalValue = value;
  }
  public resetValueMappings() {
    this._valueMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMappingsInput() {
    return this._valueMappings.internalValue;
  }
}

export class DerivedLabelMetricLabelMappingLabelNameMappingsList extends cdktf.ComplexList {
  public internalValue? : DerivedLabelMetricLabelMappingLabelNameMappings[] | cdktf.IResolvable

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
  public get(index: number): DerivedLabelMetricLabelMappingLabelNameMappingsOutputReference {
    return new DerivedLabelMetricLabelMappingLabelNameMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DerivedLabelMetricLabelMappingLabelValueMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#source_value_globs DerivedLabel#source_value_globs}
  */
  readonly sourceValueGlobs: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#target_value DerivedLabel#target_value}
  */
  readonly targetValue: string;
}

export function derivedLabelMetricLabelMappingLabelValueMappingsToTerraform(struct?: DerivedLabelMetricLabelMappingLabelValueMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_value_globs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceValueGlobs),
    target_value: cdktf.stringToTerraform(struct!.targetValue),
  }
}


export function derivedLabelMetricLabelMappingLabelValueMappingsToHclTerraform(struct?: DerivedLabelMetricLabelMappingLabelValueMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_value_globs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceValueGlobs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_value: {
      value: cdktf.stringToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DerivedLabelMetricLabelMappingLabelValueMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DerivedLabelMetricLabelMappingLabelValueMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceValueGlobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceValueGlobs = this._sourceValueGlobs;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DerivedLabelMetricLabelMappingLabelValueMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceValueGlobs = undefined;
      this._targetValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceValueGlobs = value.sourceValueGlobs;
      this._targetValue = value.targetValue;
    }
  }

  // source_value_globs - computed: false, optional: false, required: true
  private _sourceValueGlobs?: string[]; 
  public get sourceValueGlobs() {
    return this.getListAttribute('source_value_globs');
  }
  public set sourceValueGlobs(value: string[]) {
    this._sourceValueGlobs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceValueGlobsInput() {
    return this._sourceValueGlobs;
  }

  // target_value - computed: false, optional: false, required: true
  private _targetValue?: string; 
  public get targetValue() {
    return this.getStringAttribute('target_value');
  }
  public set targetValue(value: string) {
    this._targetValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}

export class DerivedLabelMetricLabelMappingLabelValueMappingsList extends cdktf.ComplexList {
  public internalValue? : DerivedLabelMetricLabelMappingLabelValueMappings[] | cdktf.IResolvable

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
  public get(index: number): DerivedLabelMetricLabelMappingLabelValueMappingsOutputReference {
    return new DerivedLabelMetricLabelMappingLabelValueMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DerivedLabelMetricLabelMappingLabel {
  /**
  * name_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#name_mappings DerivedLabel#name_mappings}
  */
  readonly nameMappings?: DerivedLabelMetricLabelMappingLabelNameMappings[] | cdktf.IResolvable;
  /**
  * value_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#value_mappings DerivedLabel#value_mappings}
  */
  readonly valueMappings?: DerivedLabelMetricLabelMappingLabelValueMappings[] | cdktf.IResolvable;
}

export function derivedLabelMetricLabelMappingLabelToTerraform(struct?: DerivedLabelMetricLabelMappingLabelOutputReference | DerivedLabelMetricLabelMappingLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_mappings: cdktf.listMapper(derivedLabelMetricLabelMappingLabelNameMappingsToTerraform, true)(struct!.nameMappings),
    value_mappings: cdktf.listMapper(derivedLabelMetricLabelMappingLabelValueMappingsToTerraform, true)(struct!.valueMappings),
  }
}


export function derivedLabelMetricLabelMappingLabelToHclTerraform(struct?: DerivedLabelMetricLabelMappingLabelOutputReference | DerivedLabelMetricLabelMappingLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_mappings: {
      value: cdktf.listMapperHcl(derivedLabelMetricLabelMappingLabelNameMappingsToHclTerraform, true)(struct!.nameMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DerivedLabelMetricLabelMappingLabelNameMappingsList",
    },
    value_mappings: {
      value: cdktf.listMapperHcl(derivedLabelMetricLabelMappingLabelValueMappingsToHclTerraform, true)(struct!.valueMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DerivedLabelMetricLabelMappingLabelValueMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DerivedLabelMetricLabelMappingLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DerivedLabelMetricLabelMappingLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameMappings = this._nameMappings?.internalValue;
    }
    if (this._valueMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueMappings = this._valueMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DerivedLabelMetricLabelMappingLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nameMappings.internalValue = undefined;
      this._valueMappings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nameMappings.internalValue = value.nameMappings;
      this._valueMappings.internalValue = value.valueMappings;
    }
  }

  // name_mappings - computed: false, optional: true, required: false
  private _nameMappings = new DerivedLabelMetricLabelMappingLabelNameMappingsList(this, "name_mappings", false);
  public get nameMappings() {
    return this._nameMappings;
  }
  public putNameMappings(value: DerivedLabelMetricLabelMappingLabelNameMappings[] | cdktf.IResolvable) {
    this._nameMappings.internalValue = value;
  }
  public resetNameMappings() {
    this._nameMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameMappingsInput() {
    return this._nameMappings.internalValue;
  }

  // value_mappings - computed: false, optional: true, required: false
  private _valueMappings = new DerivedLabelMetricLabelMappingLabelValueMappingsList(this, "value_mappings", false);
  public get valueMappings() {
    return this._valueMappings;
  }
  public putValueMappings(value: DerivedLabelMetricLabelMappingLabelValueMappings[] | cdktf.IResolvable) {
    this._valueMappings.internalValue = value;
  }
  public resetValueMappings() {
    this._valueMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMappingsInput() {
    return this._valueMappings.internalValue;
  }
}
export interface DerivedLabelMetricLabel {
  /**
  * constructed_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#constructed_label DerivedLabel#constructed_label}
  */
  readonly constructedLabel?: DerivedLabelMetricLabelConstructedLabel;
  /**
  * mapping_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#mapping_label DerivedLabel#mapping_label}
  */
  readonly mappingLabel?: DerivedLabelMetricLabelMappingLabel;
}

export function derivedLabelMetricLabelToTerraform(struct?: DerivedLabelMetricLabelOutputReference | DerivedLabelMetricLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constructed_label: derivedLabelMetricLabelConstructedLabelToTerraform(struct!.constructedLabel),
    mapping_label: derivedLabelMetricLabelMappingLabelToTerraform(struct!.mappingLabel),
  }
}


export function derivedLabelMetricLabelToHclTerraform(struct?: DerivedLabelMetricLabelOutputReference | DerivedLabelMetricLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constructed_label: {
      value: derivedLabelMetricLabelConstructedLabelToHclTerraform(struct!.constructedLabel),
      isBlock: true,
      type: "list",
      storageClassType: "DerivedLabelMetricLabelConstructedLabelList",
    },
    mapping_label: {
      value: derivedLabelMetricLabelMappingLabelToHclTerraform(struct!.mappingLabel),
      isBlock: true,
      type: "list",
      storageClassType: "DerivedLabelMetricLabelMappingLabelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DerivedLabelMetricLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DerivedLabelMetricLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constructedLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constructedLabel = this._constructedLabel?.internalValue;
    }
    if (this._mappingLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingLabel = this._mappingLabel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DerivedLabelMetricLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constructedLabel.internalValue = undefined;
      this._mappingLabel.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constructedLabel.internalValue = value.constructedLabel;
      this._mappingLabel.internalValue = value.mappingLabel;
    }
  }

  // constructed_label - computed: false, optional: true, required: false
  private _constructedLabel = new DerivedLabelMetricLabelConstructedLabelOutputReference(this, "constructed_label");
  public get constructedLabel() {
    return this._constructedLabel;
  }
  public putConstructedLabel(value: DerivedLabelMetricLabelConstructedLabel) {
    this._constructedLabel.internalValue = value;
  }
  public resetConstructedLabel() {
    this._constructedLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constructedLabelInput() {
    return this._constructedLabel.internalValue;
  }

  // mapping_label - computed: false, optional: true, required: false
  private _mappingLabel = new DerivedLabelMetricLabelMappingLabelOutputReference(this, "mapping_label");
  public get mappingLabel() {
    return this._mappingLabel;
  }
  public putMappingLabel(value: DerivedLabelMetricLabelMappingLabel) {
    this._mappingLabel.internalValue = value;
  }
  public resetMappingLabel() {
    this._mappingLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingLabelInput() {
    return this._mappingLabel.internalValue;
  }
}
export interface DerivedLabelSpanTagNameMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#source_tag DerivedLabel#source_tag}
  */
  readonly sourceTag: string;
}

export function derivedLabelSpanTagNameMappingsToTerraform(struct?: DerivedLabelSpanTagNameMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_tag: cdktf.stringToTerraform(struct!.sourceTag),
  }
}


export function derivedLabelSpanTagNameMappingsToHclTerraform(struct?: DerivedLabelSpanTagNameMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_tag: {
      value: cdktf.stringToHclTerraform(struct!.sourceTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DerivedLabelSpanTagNameMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DerivedLabelSpanTagNameMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTag = this._sourceTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DerivedLabelSpanTagNameMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceTag = value.sourceTag;
    }
  }

  // source_tag - computed: false, optional: false, required: true
  private _sourceTag?: string; 
  public get sourceTag() {
    return this.getStringAttribute('source_tag');
  }
  public set sourceTag(value: string) {
    this._sourceTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTagInput() {
    return this._sourceTag;
  }
}

export class DerivedLabelSpanTagNameMappingsList extends cdktf.ComplexList {
  public internalValue? : DerivedLabelSpanTagNameMappings[] | cdktf.IResolvable

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
  public get(index: number): DerivedLabelSpanTagNameMappingsOutputReference {
    return new DerivedLabelSpanTagNameMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DerivedLabelSpanTag {
  /**
  * name_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#name_mappings DerivedLabel#name_mappings}
  */
  readonly nameMappings?: DerivedLabelSpanTagNameMappings[] | cdktf.IResolvable;
}

export function derivedLabelSpanTagToTerraform(struct?: DerivedLabelSpanTagOutputReference | DerivedLabelSpanTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_mappings: cdktf.listMapper(derivedLabelSpanTagNameMappingsToTerraform, true)(struct!.nameMappings),
  }
}


export function derivedLabelSpanTagToHclTerraform(struct?: DerivedLabelSpanTagOutputReference | DerivedLabelSpanTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_mappings: {
      value: cdktf.listMapperHcl(derivedLabelSpanTagNameMappingsToHclTerraform, true)(struct!.nameMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DerivedLabelSpanTagNameMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DerivedLabelSpanTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DerivedLabelSpanTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameMappings = this._nameMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DerivedLabelSpanTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nameMappings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nameMappings.internalValue = value.nameMappings;
    }
  }

  // name_mappings - computed: false, optional: true, required: false
  private _nameMappings = new DerivedLabelSpanTagNameMappingsList(this, "name_mappings", false);
  public get nameMappings() {
    return this._nameMappings;
  }
  public putNameMappings(value: DerivedLabelSpanTagNameMappings[] | cdktf.IResolvable) {
    this._nameMappings.internalValue = value;
  }
  public resetNameMappings() {
    this._nameMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameMappingsInput() {
    return this._nameMappings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label chronosphere_derived_label}
*/
export class DerivedLabel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_derived_label";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DerivedLabel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DerivedLabel to import
  * @param importFromId The id of the existing DerivedLabel that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DerivedLabel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_derived_label", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/derived_label chronosphere_derived_label} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DerivedLabelConfig
  */
  public constructor(scope: Construct, id: string, config: DerivedLabelConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_derived_label',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._existingLabelPolicy = config.existingLabelPolicy;
    this._id = config.id;
    this._labelName = config.labelName;
    this._name = config.name;
    this._slug = config.slug;
    this._metricLabel.internalValue = config.metricLabel;
    this._spanTag.internalValue = config.spanTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // existing_label_policy - computed: false, optional: true, required: false
  private _existingLabelPolicy?: string; 
  public get existingLabelPolicy() {
    return this.getStringAttribute('existing_label_policy');
  }
  public set existingLabelPolicy(value: string) {
    this._existingLabelPolicy = value;
  }
  public resetExistingLabelPolicy() {
    this._existingLabelPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingLabelPolicyInput() {
    return this._existingLabelPolicy;
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

  // label_name - computed: false, optional: false, required: true
  private _labelName?: string; 
  public get labelName() {
    return this.getStringAttribute('label_name');
  }
  public set labelName(value: string) {
    this._labelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameInput() {
    return this._labelName;
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

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // metric_label - computed: false, optional: true, required: false
  private _metricLabel = new DerivedLabelMetricLabelOutputReference(this, "metric_label");
  public get metricLabel() {
    return this._metricLabel;
  }
  public putMetricLabel(value: DerivedLabelMetricLabel) {
    this._metricLabel.internalValue = value;
  }
  public resetMetricLabel() {
    this._metricLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLabelInput() {
    return this._metricLabel.internalValue;
  }

  // span_tag - computed: false, optional: true, required: false
  private _spanTag = new DerivedLabelSpanTagOutputReference(this, "span_tag");
  public get spanTag() {
    return this._spanTag;
  }
  public putSpanTag(value: DerivedLabelSpanTag) {
    this._spanTag.internalValue = value;
  }
  public resetSpanTag() {
    this._spanTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanTagInput() {
    return this._spanTag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      existing_label_policy: cdktf.stringToTerraform(this._existingLabelPolicy),
      id: cdktf.stringToTerraform(this._id),
      label_name: cdktf.stringToTerraform(this._labelName),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
      metric_label: derivedLabelMetricLabelToTerraform(this._metricLabel.internalValue),
      span_tag: derivedLabelSpanTagToTerraform(this._spanTag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      existing_label_policy: {
        value: cdktf.stringToHclTerraform(this._existingLabelPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label_name: {
        value: cdktf.stringToHclTerraform(this._labelName),
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
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_label: {
        value: derivedLabelMetricLabelToHclTerraform(this._metricLabel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DerivedLabelMetricLabelList",
      },
      span_tag: {
        value: derivedLabelSpanTagToHclTerraform(this._spanTag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DerivedLabelSpanTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
