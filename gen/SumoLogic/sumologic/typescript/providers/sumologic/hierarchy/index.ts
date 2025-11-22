// https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HierarchyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#id Hierarchy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#name Hierarchy#name}
  */
  readonly name: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#filter Hierarchy#filter}
  */
  readonly filter?: HierarchyFilter;
  /**
  * level block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#level Hierarchy#level}
  */
  readonly level: HierarchyLevel[] | cdktf.IResolvable;
}
export interface HierarchyFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#key Hierarchy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#value Hierarchy#value}
  */
  readonly value: string;
}

export function hierarchyFilterToTerraform(struct?: HierarchyFilterOutputReference | HierarchyFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hierarchyFilterToHclTerraform(struct?: HierarchyFilterOutputReference | HierarchyFilter): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HierarchyFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HierarchyFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HierarchyFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
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
}
export interface HierarchyLevelNextLevelNextLevelsWithConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#condition Hierarchy#condition}
  */
  readonly condition: string;
  /**
  * level block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#level Hierarchy#level}
  */
  readonly level: HierarchyLevel[] | cdktf.IResolvable;
}

export function hierarchyLevelNextLevelNextLevelsWithConditionsToTerraform(struct?: HierarchyLevelNextLevelNextLevelsWithConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    level: cdktf.listMapper(hierarchyLevelToTerraform, true)(struct!.level),
  }
}


export function hierarchyLevelNextLevelNextLevelsWithConditionsToHclTerraform(struct?: HierarchyLevelNextLevelNextLevelsWithConditions | cdktf.IResolvable): any {
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
    level: {
      value: cdktf.listMapperHcl(hierarchyLevelToHclTerraform, true)(struct!.level),
      isBlock: true,
      type: "list",
      storageClassType: "HierarchyLevelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HierarchyLevelNextLevelNextLevelsWithConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HierarchyLevelNextLevelNextLevelsWithConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._level?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HierarchyLevelNextLevelNextLevelsWithConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._level.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._level.internalValue = value.level;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // level - computed: false, optional: false, required: true
  private _level = new HierarchyLevelList(this, "level", false);
  public get level() {
    return this._level;
  }
  public putLevel(value: HierarchyLevel[] | cdktf.IResolvable) {
    this._level.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level.internalValue;
  }
}

export class HierarchyLevelNextLevelNextLevelsWithConditionsList extends cdktf.ComplexList {
  public internalValue? : HierarchyLevelNextLevelNextLevelsWithConditions[] | cdktf.IResolvable

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
  public get(index: number): HierarchyLevelNextLevelNextLevelsWithConditionsOutputReference {
    return new HierarchyLevelNextLevelNextLevelsWithConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HierarchyLevelNextLevel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#entity_type Hierarchy#entity_type}
  */
  readonly entityType: string;
  /**
  * next_level block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#next_level Hierarchy#next_level}
  */
  readonly nextLevel?: HierarchyLevelNextLevel;
  /**
  * next_levels_with_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#next_levels_with_conditions Hierarchy#next_levels_with_conditions}
  */
  readonly nextLevelsWithConditions?: HierarchyLevelNextLevelNextLevelsWithConditions[] | cdktf.IResolvable;
}

export function hierarchyLevelNextLevelToTerraform(struct?: HierarchyLevelNextLevelOutputReference | HierarchyLevelNextLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    next_level: hierarchyLevelNextLevelToTerraform(struct!.nextLevel),
    next_levels_with_conditions: cdktf.listMapper(hierarchyLevelNextLevelNextLevelsWithConditionsToTerraform, true)(struct!.nextLevelsWithConditions),
  }
}


export function hierarchyLevelNextLevelToHclTerraform(struct?: HierarchyLevelNextLevelOutputReference | HierarchyLevelNextLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_level: {
      value: hierarchyLevelNextLevelToHclTerraform(struct!.nextLevel),
      isBlock: true,
      type: "list",
      storageClassType: "HierarchyLevelNextLevelList",
    },
    next_levels_with_conditions: {
      value: cdktf.listMapperHcl(hierarchyLevelNextLevelNextLevelsWithConditionsToHclTerraform, true)(struct!.nextLevelsWithConditions),
      isBlock: true,
      type: "list",
      storageClassType: "HierarchyLevelNextLevelNextLevelsWithConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HierarchyLevelNextLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HierarchyLevelNextLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._nextLevel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextLevel = this._nextLevel?.internalValue;
    }
    if (this._nextLevelsWithConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextLevelsWithConditions = this._nextLevelsWithConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HierarchyLevelNextLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityType = undefined;
      this._nextLevel.internalValue = undefined;
      this._nextLevelsWithConditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityType = value.entityType;
      this._nextLevel.internalValue = value.nextLevel;
      this._nextLevelsWithConditions.internalValue = value.nextLevelsWithConditions;
    }
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // next_level - computed: false, optional: true, required: false
  private _nextLevel = new HierarchyLevelNextLevelOutputReference(this, "next_level");
  public get nextLevel() {
    return this._nextLevel;
  }
  public putNextLevel(value: HierarchyLevelNextLevel) {
    this._nextLevel.internalValue = value;
  }
  public resetNextLevel() {
    this._nextLevel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextLevelInput() {
    return this._nextLevel.internalValue;
  }

  // next_levels_with_conditions - computed: false, optional: true, required: false
  private _nextLevelsWithConditions = new HierarchyLevelNextLevelNextLevelsWithConditionsList(this, "next_levels_with_conditions", false);
  public get nextLevelsWithConditions() {
    return this._nextLevelsWithConditions;
  }
  public putNextLevelsWithConditions(value: HierarchyLevelNextLevelNextLevelsWithConditions[] | cdktf.IResolvable) {
    this._nextLevelsWithConditions.internalValue = value;
  }
  public resetNextLevelsWithConditions() {
    this._nextLevelsWithConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextLevelsWithConditionsInput() {
    return this._nextLevelsWithConditions.internalValue;
  }
}
export interface HierarchyLevelNextLevelsWithConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#condition Hierarchy#condition}
  */
  readonly condition: string;
  /**
  * level block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#level Hierarchy#level}
  */
  readonly level: HierarchyLevel[] | cdktf.IResolvable;
}

export function hierarchyLevelNextLevelsWithConditionsToTerraform(struct?: HierarchyLevelNextLevelsWithConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    level: cdktf.listMapper(hierarchyLevelToTerraform, true)(struct!.level),
  }
}


export function hierarchyLevelNextLevelsWithConditionsToHclTerraform(struct?: HierarchyLevelNextLevelsWithConditions | cdktf.IResolvable): any {
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
    level: {
      value: cdktf.listMapperHcl(hierarchyLevelToHclTerraform, true)(struct!.level),
      isBlock: true,
      type: "list",
      storageClassType: "HierarchyLevelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HierarchyLevelNextLevelsWithConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HierarchyLevelNextLevelsWithConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._level?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HierarchyLevelNextLevelsWithConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._level.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._level.internalValue = value.level;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // level - computed: false, optional: false, required: true
  private _level = new HierarchyLevelList(this, "level", false);
  public get level() {
    return this._level;
  }
  public putLevel(value: HierarchyLevel[] | cdktf.IResolvable) {
    this._level.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level.internalValue;
  }
}

export class HierarchyLevelNextLevelsWithConditionsList extends cdktf.ComplexList {
  public internalValue? : HierarchyLevelNextLevelsWithConditions[] | cdktf.IResolvable

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
  public get(index: number): HierarchyLevelNextLevelsWithConditionsOutputReference {
    return new HierarchyLevelNextLevelsWithConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HierarchyLevel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#entity_type Hierarchy#entity_type}
  */
  readonly entityType: string;
  /**
  * next_level block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#next_level Hierarchy#next_level}
  */
  readonly nextLevel?: HierarchyLevelNextLevel;
  /**
  * next_levels_with_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#next_levels_with_conditions Hierarchy#next_levels_with_conditions}
  */
  readonly nextLevelsWithConditions?: HierarchyLevelNextLevelsWithConditions[] | cdktf.IResolvable;
}

export function hierarchyLevelToTerraform(struct?: HierarchyLevel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    next_level: hierarchyLevelNextLevelToTerraform(struct!.nextLevel),
    next_levels_with_conditions: cdktf.listMapper(hierarchyLevelNextLevelsWithConditionsToTerraform, true)(struct!.nextLevelsWithConditions),
  }
}


export function hierarchyLevelToHclTerraform(struct?: HierarchyLevel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_level: {
      value: hierarchyLevelNextLevelToHclTerraform(struct!.nextLevel),
      isBlock: true,
      type: "list",
      storageClassType: "HierarchyLevelNextLevelList",
    },
    next_levels_with_conditions: {
      value: cdktf.listMapperHcl(hierarchyLevelNextLevelsWithConditionsToHclTerraform, true)(struct!.nextLevelsWithConditions),
      isBlock: true,
      type: "list",
      storageClassType: "HierarchyLevelNextLevelsWithConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HierarchyLevelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HierarchyLevel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._nextLevel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextLevel = this._nextLevel?.internalValue;
    }
    if (this._nextLevelsWithConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextLevelsWithConditions = this._nextLevelsWithConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HierarchyLevel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityType = undefined;
      this._nextLevel.internalValue = undefined;
      this._nextLevelsWithConditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityType = value.entityType;
      this._nextLevel.internalValue = value.nextLevel;
      this._nextLevelsWithConditions.internalValue = value.nextLevelsWithConditions;
    }
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // next_level - computed: false, optional: true, required: false
  private _nextLevel = new HierarchyLevelNextLevelOutputReference(this, "next_level");
  public get nextLevel() {
    return this._nextLevel;
  }
  public putNextLevel(value: HierarchyLevelNextLevel) {
    this._nextLevel.internalValue = value;
  }
  public resetNextLevel() {
    this._nextLevel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextLevelInput() {
    return this._nextLevel.internalValue;
  }

  // next_levels_with_conditions - computed: false, optional: true, required: false
  private _nextLevelsWithConditions = new HierarchyLevelNextLevelsWithConditionsList(this, "next_levels_with_conditions", false);
  public get nextLevelsWithConditions() {
    return this._nextLevelsWithConditions;
  }
  public putNextLevelsWithConditions(value: HierarchyLevelNextLevelsWithConditions[] | cdktf.IResolvable) {
    this._nextLevelsWithConditions.internalValue = value;
  }
  public resetNextLevelsWithConditions() {
    this._nextLevelsWithConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextLevelsWithConditionsInput() {
    return this._nextLevelsWithConditions.internalValue;
  }
}

export class HierarchyLevelList extends cdktf.ComplexList {
  public internalValue? : HierarchyLevel[] | cdktf.IResolvable

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
  public get(index: number): HierarchyLevelOutputReference {
    return new HierarchyLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy sumologic_hierarchy}
*/
export class Hierarchy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_hierarchy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Hierarchy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Hierarchy to import
  * @param importFromId The id of the existing Hierarchy that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Hierarchy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_hierarchy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/hierarchy sumologic_hierarchy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HierarchyConfig
  */
  public constructor(scope: Construct, id: string, config: HierarchyConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_hierarchy',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._filter.internalValue = config.filter;
    this._level.internalValue = config.level;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // filter - computed: false, optional: true, required: false
  private _filter = new HierarchyFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: HierarchyFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // level - computed: false, optional: false, required: true
  private _level = new HierarchyLevelList(this, "level", false);
  public get level() {
    return this._level;
  }
  public putLevel(value: HierarchyLevel[] | cdktf.IResolvable) {
    this._level.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      filter: hierarchyFilterToTerraform(this._filter.internalValue),
      level: cdktf.listMapper(hierarchyLevelToTerraform, true)(this._level.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      filter: {
        value: hierarchyFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HierarchyFilterList",
      },
      level: {
        value: cdktf.listMapperHcl(hierarchyLevelToHclTerraform, true)(this._level.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HierarchyLevelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
