// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OptimizerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#aggregation_interval_in_days OptimizerProfile#aggregation_interval_in_days}
  */
  readonly aggregationIntervalInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#compartment_id OptimizerProfile#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#defined_tags OptimizerProfile#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#description OptimizerProfile#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#freeform_tags OptimizerProfile#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#id OptimizerProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#name OptimizerProfile#name}
  */
  readonly name: string;
  /**
  * levels_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#levels_configuration OptimizerProfile#levels_configuration}
  */
  readonly levelsConfiguration: OptimizerProfileLevelsConfiguration;
  /**
  * target_compartments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#target_compartments OptimizerProfile#target_compartments}
  */
  readonly targetCompartments?: OptimizerProfileTargetCompartments;
  /**
  * target_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#target_tags OptimizerProfile#target_tags}
  */
  readonly targetTags?: OptimizerProfileTargetTags;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#timeouts OptimizerProfile#timeouts}
  */
  readonly timeouts?: OptimizerProfileTimeouts;
}
export interface OptimizerProfileLevelsConfigurationItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#level OptimizerProfile#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#recommendation_id OptimizerProfile#recommendation_id}
  */
  readonly recommendationId?: string;
}

export function optimizerProfileLevelsConfigurationItemsToTerraform(struct?: OptimizerProfileLevelsConfigurationItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    recommendation_id: cdktf.stringToTerraform(struct!.recommendationId),
  }
}


export function optimizerProfileLevelsConfigurationItemsToHclTerraform(struct?: OptimizerProfileLevelsConfigurationItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recommendation_id: {
      value: cdktf.stringToHclTerraform(struct!.recommendationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OptimizerProfileLevelsConfigurationItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OptimizerProfileLevelsConfigurationItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._recommendationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendationId = this._recommendationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OptimizerProfileLevelsConfigurationItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._recommendationId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._recommendationId = value.recommendationId;
    }
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // recommendation_id - computed: true, optional: true, required: false
  private _recommendationId?: string; 
  public get recommendationId() {
    return this.getStringAttribute('recommendation_id');
  }
  public set recommendationId(value: string) {
    this._recommendationId = value;
  }
  public resetRecommendationId() {
    this._recommendationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationIdInput() {
    return this._recommendationId;
  }
}

export class OptimizerProfileLevelsConfigurationItemsList extends cdktf.ComplexList {
  public internalValue? : OptimizerProfileLevelsConfigurationItems[] | cdktf.IResolvable

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
  public get(index: number): OptimizerProfileLevelsConfigurationItemsOutputReference {
    return new OptimizerProfileLevelsConfigurationItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OptimizerProfileLevelsConfiguration {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#items OptimizerProfile#items}
  */
  readonly items?: OptimizerProfileLevelsConfigurationItems[] | cdktf.IResolvable;
}

export function optimizerProfileLevelsConfigurationToTerraform(struct?: OptimizerProfileLevelsConfigurationOutputReference | OptimizerProfileLevelsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(optimizerProfileLevelsConfigurationItemsToTerraform, true)(struct!.items),
  }
}


export function optimizerProfileLevelsConfigurationToHclTerraform(struct?: OptimizerProfileLevelsConfigurationOutputReference | OptimizerProfileLevelsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(optimizerProfileLevelsConfigurationItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "OptimizerProfileLevelsConfigurationItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OptimizerProfileLevelsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OptimizerProfileLevelsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OptimizerProfileLevelsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new OptimizerProfileLevelsConfigurationItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: OptimizerProfileLevelsConfigurationItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface OptimizerProfileTargetCompartments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#items OptimizerProfile#items}
  */
  readonly items: string[];
}

export function optimizerProfileTargetCompartmentsToTerraform(struct?: OptimizerProfileTargetCompartmentsOutputReference | OptimizerProfileTargetCompartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function optimizerProfileTargetCompartmentsToHclTerraform(struct?: OptimizerProfileTargetCompartmentsOutputReference | OptimizerProfileTargetCompartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OptimizerProfileTargetCompartmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OptimizerProfileTargetCompartments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OptimizerProfileTargetCompartments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface OptimizerProfileTargetTagsItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#tag_definition_name OptimizerProfile#tag_definition_name}
  */
  readonly tagDefinitionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#tag_namespace_name OptimizerProfile#tag_namespace_name}
  */
  readonly tagNamespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#tag_value_type OptimizerProfile#tag_value_type}
  */
  readonly tagValueType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#tag_values OptimizerProfile#tag_values}
  */
  readonly tagValues?: string[];
}

export function optimizerProfileTargetTagsItemsToTerraform(struct?: OptimizerProfileTargetTagsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_definition_name: cdktf.stringToTerraform(struct!.tagDefinitionName),
    tag_namespace_name: cdktf.stringToTerraform(struct!.tagNamespaceName),
    tag_value_type: cdktf.stringToTerraform(struct!.tagValueType),
    tag_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagValues),
  }
}


export function optimizerProfileTargetTagsItemsToHclTerraform(struct?: OptimizerProfileTargetTagsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_definition_name: {
      value: cdktf.stringToHclTerraform(struct!.tagDefinitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_namespace_name: {
      value: cdktf.stringToHclTerraform(struct!.tagNamespaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value_type: {
      value: cdktf.stringToHclTerraform(struct!.tagValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OptimizerProfileTargetTagsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OptimizerProfileTargetTagsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagDefinitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagDefinitionName = this._tagDefinitionName;
    }
    if (this._tagNamespaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagNamespaceName = this._tagNamespaceName;
    }
    if (this._tagValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValueType = this._tagValueType;
    }
    if (this._tagValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValues = this._tagValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OptimizerProfileTargetTagsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagDefinitionName = undefined;
      this._tagNamespaceName = undefined;
      this._tagValueType = undefined;
      this._tagValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagDefinitionName = value.tagDefinitionName;
      this._tagNamespaceName = value.tagNamespaceName;
      this._tagValueType = value.tagValueType;
      this._tagValues = value.tagValues;
    }
  }

  // tag_definition_name - computed: false, optional: false, required: true
  private _tagDefinitionName?: string; 
  public get tagDefinitionName() {
    return this.getStringAttribute('tag_definition_name');
  }
  public set tagDefinitionName(value: string) {
    this._tagDefinitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagDefinitionNameInput() {
    return this._tagDefinitionName;
  }

  // tag_namespace_name - computed: false, optional: false, required: true
  private _tagNamespaceName?: string; 
  public get tagNamespaceName() {
    return this.getStringAttribute('tag_namespace_name');
  }
  public set tagNamespaceName(value: string) {
    this._tagNamespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNamespaceNameInput() {
    return this._tagNamespaceName;
  }

  // tag_value_type - computed: false, optional: false, required: true
  private _tagValueType?: string; 
  public get tagValueType() {
    return this.getStringAttribute('tag_value_type');
  }
  public set tagValueType(value: string) {
    this._tagValueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueTypeInput() {
    return this._tagValueType;
  }

  // tag_values - computed: true, optional: true, required: false
  private _tagValues?: string[]; 
  public get tagValues() {
    return this.getListAttribute('tag_values');
  }
  public set tagValues(value: string[]) {
    this._tagValues = value;
  }
  public resetTagValues() {
    this._tagValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuesInput() {
    return this._tagValues;
  }
}

export class OptimizerProfileTargetTagsItemsList extends cdktf.ComplexList {
  public internalValue? : OptimizerProfileTargetTagsItems[] | cdktf.IResolvable

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
  public get(index: number): OptimizerProfileTargetTagsItemsOutputReference {
    return new OptimizerProfileTargetTagsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OptimizerProfileTargetTags {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#items OptimizerProfile#items}
  */
  readonly items: OptimizerProfileTargetTagsItems[] | cdktf.IResolvable;
}

export function optimizerProfileTargetTagsToTerraform(struct?: OptimizerProfileTargetTagsOutputReference | OptimizerProfileTargetTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(optimizerProfileTargetTagsItemsToTerraform, true)(struct!.items),
  }
}


export function optimizerProfileTargetTagsToHclTerraform(struct?: OptimizerProfileTargetTagsOutputReference | OptimizerProfileTargetTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(optimizerProfileTargetTagsItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "OptimizerProfileTargetTagsItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OptimizerProfileTargetTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OptimizerProfileTargetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OptimizerProfileTargetTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new OptimizerProfileTargetTagsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: OptimizerProfileTargetTagsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface OptimizerProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#create OptimizerProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#delete OptimizerProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#update OptimizerProfile#update}
  */
  readonly update?: string;
}

export function optimizerProfileTimeoutsToTerraform(struct?: OptimizerProfileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function optimizerProfileTimeoutsToHclTerraform(struct?: OptimizerProfileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OptimizerProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OptimizerProfileTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OptimizerProfileTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile oci_optimizer_profile}
*/
export class OptimizerProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_optimizer_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OptimizerProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OptimizerProfile to import
  * @param importFromId The id of the existing OptimizerProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OptimizerProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_optimizer_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/optimizer_profile oci_optimizer_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OptimizerProfileConfig
  */
  public constructor(scope: Construct, id: string, config: OptimizerProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_optimizer_profile',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregationIntervalInDays = config.aggregationIntervalInDays;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._name = config.name;
    this._levelsConfiguration.internalValue = config.levelsConfiguration;
    this._targetCompartments.internalValue = config.targetCompartments;
    this._targetTags.internalValue = config.targetTags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation_interval_in_days - computed: true, optional: true, required: false
  private _aggregationIntervalInDays?: number; 
  public get aggregationIntervalInDays() {
    return this.getNumberAttribute('aggregation_interval_in_days');
  }
  public set aggregationIntervalInDays(value: number) {
    this._aggregationIntervalInDays = value;
  }
  public resetAggregationIntervalInDays() {
    this._aggregationIntervalInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationIntervalInDaysInput() {
    return this._aggregationIntervalInDays;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // levels_configuration - computed: false, optional: false, required: true
  private _levelsConfiguration = new OptimizerProfileLevelsConfigurationOutputReference(this, "levels_configuration");
  public get levelsConfiguration() {
    return this._levelsConfiguration;
  }
  public putLevelsConfiguration(value: OptimizerProfileLevelsConfiguration) {
    this._levelsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelsConfigurationInput() {
    return this._levelsConfiguration.internalValue;
  }

  // target_compartments - computed: false, optional: true, required: false
  private _targetCompartments = new OptimizerProfileTargetCompartmentsOutputReference(this, "target_compartments");
  public get targetCompartments() {
    return this._targetCompartments;
  }
  public putTargetCompartments(value: OptimizerProfileTargetCompartments) {
    this._targetCompartments.internalValue = value;
  }
  public resetTargetCompartments() {
    this._targetCompartments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCompartmentsInput() {
    return this._targetCompartments.internalValue;
  }

  // target_tags - computed: false, optional: true, required: false
  private _targetTags = new OptimizerProfileTargetTagsOutputReference(this, "target_tags");
  public get targetTags() {
    return this._targetTags;
  }
  public putTargetTags(value: OptimizerProfileTargetTags) {
    this._targetTags.internalValue = value;
  }
  public resetTargetTags() {
    this._targetTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTagsInput() {
    return this._targetTags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OptimizerProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OptimizerProfileTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregation_interval_in_days: cdktf.numberToTerraform(this._aggregationIntervalInDays),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      levels_configuration: optimizerProfileLevelsConfigurationToTerraform(this._levelsConfiguration.internalValue),
      target_compartments: optimizerProfileTargetCompartmentsToTerraform(this._targetCompartments.internalValue),
      target_tags: optimizerProfileTargetTagsToTerraform(this._targetTags.internalValue),
      timeouts: optimizerProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregation_interval_in_days: {
        value: cdktf.numberToHclTerraform(this._aggregationIntervalInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      levels_configuration: {
        value: optimizerProfileLevelsConfigurationToHclTerraform(this._levelsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OptimizerProfileLevelsConfigurationList",
      },
      target_compartments: {
        value: optimizerProfileTargetCompartmentsToHclTerraform(this._targetCompartments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OptimizerProfileTargetCompartmentsList",
      },
      target_tags: {
        value: optimizerProfileTargetTagsToHclTerraform(this._targetTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OptimizerProfileTargetTagsList",
      },
      timeouts: {
        value: optimizerProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OptimizerProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
