// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JourneyOutcomeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#description JourneyOutcome#description}
  */
  readonly description?: string;
  /**
  * The display name of the outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#display_name JourneyOutcome#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#id JourneyOutcome#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether or not the outcome is active. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#is_active JourneyOutcome#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Whether or not the outcome is positive. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#is_positive JourneyOutcome#is_positive}
  */
  readonly isPositive?: boolean | cdktf.IResolvable;
  /**
  * associated_value_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#associated_value_field JourneyOutcome#associated_value_field}
  */
  readonly associatedValueField?: JourneyOutcomeAssociatedValueField;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#context JourneyOutcome#context}
  */
  readonly context?: JourneyOutcomeContext;
  /**
  * journey block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#journey JourneyOutcome#journey}
  */
  readonly journey?: JourneyOutcomeJourney;
}
export interface JourneyOutcomeAssociatedValueField {
  /**
  * The data type of the value field.Valid values: Number, Integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#data_type JourneyOutcome#data_type}
  */
  readonly dataType: string;
  /**
  * The field name for extracting value from event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#name JourneyOutcome#name}
  */
  readonly name: string;
}

export function journeyOutcomeAssociatedValueFieldToTerraform(struct?: JourneyOutcomeAssociatedValueFieldOutputReference | JourneyOutcomeAssociatedValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function journeyOutcomeAssociatedValueFieldToHclTerraform(struct?: JourneyOutcomeAssociatedValueFieldOutputReference | JourneyOutcomeAssociatedValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyOutcomeAssociatedValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyOutcomeAssociatedValueField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyOutcomeAssociatedValueField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataType = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataType = value.dataType;
      this._name = value.name;
    }
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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
}
export interface JourneyOutcomeContextPatternsCriteria {
  /**
  * The entity to match the pattern against.Valid values: visit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#entity_type JourneyOutcome#entity_type}
  */
  readonly entityType: string;
  /**
  * The criteria key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#key JourneyOutcome#key}
  */
  readonly key: string;
  /**
  * The comparison operator. Valid values: containsAll, containsAny, notContainsAll, notContainsAny, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual, startsWith, endsWith. Defaults to `equal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#operator JourneyOutcome#operator}
  */
  readonly operator?: string;
  /**
  * Should criteria be case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#should_ignore_case JourneyOutcome#should_ignore_case}
  */
  readonly shouldIgnoreCase: boolean | cdktf.IResolvable;
  /**
  * The criteria values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#values JourneyOutcome#values}
  */
  readonly values: string[];
}

export function journeyOutcomeContextPatternsCriteriaToTerraform(struct?: JourneyOutcomeContextPatternsCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    should_ignore_case: cdktf.booleanToTerraform(struct!.shouldIgnoreCase),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function journeyOutcomeContextPatternsCriteriaToHclTerraform(struct?: JourneyOutcomeContextPatternsCriteria | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.shouldIgnoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyOutcomeContextPatternsCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyOutcomeContextPatternsCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._shouldIgnoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldIgnoreCase = this._shouldIgnoreCase;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyOutcomeContextPatternsCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityType = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._shouldIgnoreCase = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityType = value.entityType;
      this._key = value.key;
      this._operator = value.operator;
      this._shouldIgnoreCase = value.shouldIgnoreCase;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // should_ignore_case - computed: false, optional: false, required: true
  private _shouldIgnoreCase?: boolean | cdktf.IResolvable; 
  public get shouldIgnoreCase() {
    return this.getBooleanAttribute('should_ignore_case');
  }
  public set shouldIgnoreCase(value: boolean | cdktf.IResolvable) {
    this._shouldIgnoreCase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldIgnoreCaseInput() {
    return this._shouldIgnoreCase;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class JourneyOutcomeContextPatternsCriteriaList extends cdktf.ComplexList {
  public internalValue? : JourneyOutcomeContextPatternsCriteria[] | cdktf.IResolvable

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
  public get(index: number): JourneyOutcomeContextPatternsCriteriaOutputReference {
    return new JourneyOutcomeContextPatternsCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyOutcomeContextPatterns {
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#criteria JourneyOutcome#criteria}
  */
  readonly criteria: JourneyOutcomeContextPatternsCriteria[] | cdktf.IResolvable;
}

export function journeyOutcomeContextPatternsToTerraform(struct?: JourneyOutcomeContextPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.listMapper(journeyOutcomeContextPatternsCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function journeyOutcomeContextPatternsToHclTerraform(struct?: JourneyOutcomeContextPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.listMapperHcl(journeyOutcomeContextPatternsCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyOutcomeContextPatternsCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyOutcomeContextPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyOutcomeContextPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyOutcomeContextPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new JourneyOutcomeContextPatternsCriteriaList(this, "criteria", true);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: JourneyOutcomeContextPatternsCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}

export class JourneyOutcomeContextPatternsList extends cdktf.ComplexList {
  public internalValue? : JourneyOutcomeContextPatterns[] | cdktf.IResolvable

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
  public get(index: number): JourneyOutcomeContextPatternsOutputReference {
    return new JourneyOutcomeContextPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyOutcomeContext {
  /**
  * patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#patterns JourneyOutcome#patterns}
  */
  readonly patterns: JourneyOutcomeContextPatterns[] | cdktf.IResolvable;
}

export function journeyOutcomeContextToTerraform(struct?: JourneyOutcomeContextOutputReference | JourneyOutcomeContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patterns: cdktf.listMapper(journeyOutcomeContextPatternsToTerraform, true)(struct!.patterns),
  }
}


export function journeyOutcomeContextToHclTerraform(struct?: JourneyOutcomeContextOutputReference | JourneyOutcomeContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patterns: {
      value: cdktf.listMapperHcl(journeyOutcomeContextPatternsToHclTerraform, true)(struct!.patterns),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyOutcomeContextPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyOutcomeContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyOutcomeContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyOutcomeContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._patterns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._patterns.internalValue = value.patterns;
    }
  }

  // patterns - computed: false, optional: false, required: true
  private _patterns = new JourneyOutcomeContextPatternsList(this, "patterns", true);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: JourneyOutcomeContextPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }
}
export interface JourneyOutcomeJourneyPatternsCriteria {
  /**
  * The criteria key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#key JourneyOutcome#key}
  */
  readonly key: string;
  /**
  * The comparison operator.Valid values: containsAll, containsAny, notContainsAll, notContainsAny, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual, startsWith, endsWith. Defaults to `equal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#operator JourneyOutcome#operator}
  */
  readonly operator?: string;
  /**
  * Should criteria be case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#should_ignore_case JourneyOutcome#should_ignore_case}
  */
  readonly shouldIgnoreCase: boolean | cdktf.IResolvable;
  /**
  * The criteria values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#values JourneyOutcome#values}
  */
  readonly values: string[];
}

export function journeyOutcomeJourneyPatternsCriteriaToTerraform(struct?: JourneyOutcomeJourneyPatternsCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    should_ignore_case: cdktf.booleanToTerraform(struct!.shouldIgnoreCase),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function journeyOutcomeJourneyPatternsCriteriaToHclTerraform(struct?: JourneyOutcomeJourneyPatternsCriteria | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.shouldIgnoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyOutcomeJourneyPatternsCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyOutcomeJourneyPatternsCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._shouldIgnoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldIgnoreCase = this._shouldIgnoreCase;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyOutcomeJourneyPatternsCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._shouldIgnoreCase = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._shouldIgnoreCase = value.shouldIgnoreCase;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // should_ignore_case - computed: false, optional: false, required: true
  private _shouldIgnoreCase?: boolean | cdktf.IResolvable; 
  public get shouldIgnoreCase() {
    return this.getBooleanAttribute('should_ignore_case');
  }
  public set shouldIgnoreCase(value: boolean | cdktf.IResolvable) {
    this._shouldIgnoreCase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldIgnoreCaseInput() {
    return this._shouldIgnoreCase;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class JourneyOutcomeJourneyPatternsCriteriaList extends cdktf.ComplexList {
  public internalValue? : JourneyOutcomeJourneyPatternsCriteria[] | cdktf.IResolvable

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
  public get(index: number): JourneyOutcomeJourneyPatternsCriteriaOutputReference {
    return new JourneyOutcomeJourneyPatternsCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyOutcomeJourneyPatterns {
  /**
  * The number of times the pattern must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#count JourneyOutcome#count}
  */
  readonly count: number;
  /**
  * The name of the event for which this pattern can be matched on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#event_name JourneyOutcome#event_name}
  */
  readonly eventName?: string;
  /**
  * The session type for which this pattern can be matched on. Valid values: web, app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#session_type JourneyOutcome#session_type}
  */
  readonly sessionType: string;
  /**
  * The stream type for which this pattern can be matched on. Valid values: Web, App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#stream_type JourneyOutcome#stream_type}
  */
  readonly streamType: string;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#criteria JourneyOutcome#criteria}
  */
  readonly criteria: JourneyOutcomeJourneyPatternsCriteria[] | cdktf.IResolvable;
}

export function journeyOutcomeJourneyPatternsToTerraform(struct?: JourneyOutcomeJourneyPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    event_name: cdktf.stringToTerraform(struct!.eventName),
    session_type: cdktf.stringToTerraform(struct!.sessionType),
    stream_type: cdktf.stringToTerraform(struct!.streamType),
    criteria: cdktf.listMapper(journeyOutcomeJourneyPatternsCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function journeyOutcomeJourneyPatternsToHclTerraform(struct?: JourneyOutcomeJourneyPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_name: {
      value: cdktf.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_type: {
      value: cdktf.stringToHclTerraform(struct!.sessionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_type: {
      value: cdktf.stringToHclTerraform(struct!.streamType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    criteria: {
      value: cdktf.listMapperHcl(journeyOutcomeJourneyPatternsCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyOutcomeJourneyPatternsCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyOutcomeJourneyPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyOutcomeJourneyPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    if (this._sessionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionType = this._sessionType;
    }
    if (this._streamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamType = this._streamType;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyOutcomeJourneyPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._eventName = undefined;
      this._sessionType = undefined;
      this._streamType = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._eventName = value.eventName;
      this._sessionType = value.sessionType;
      this._streamType = value.streamType;
      this._criteria.internalValue = value.criteria;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // event_name - computed: false, optional: true, required: false
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  public resetEventName() {
    this._eventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // session_type - computed: false, optional: false, required: true
  private _sessionType?: string; 
  public get sessionType() {
    return this.getStringAttribute('session_type');
  }
  public set sessionType(value: string) {
    this._sessionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTypeInput() {
    return this._sessionType;
  }

  // stream_type - computed: false, optional: false, required: true
  private _streamType?: string; 
  public get streamType() {
    return this.getStringAttribute('stream_type');
  }
  public set streamType(value: string) {
    this._streamType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTypeInput() {
    return this._streamType;
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new JourneyOutcomeJourneyPatternsCriteriaList(this, "criteria", true);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: JourneyOutcomeJourneyPatternsCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}

export class JourneyOutcomeJourneyPatternsList extends cdktf.ComplexList {
  public internalValue? : JourneyOutcomeJourneyPatterns[] | cdktf.IResolvable

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
  public get(index: number): JourneyOutcomeJourneyPatternsOutputReference {
    return new JourneyOutcomeJourneyPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyOutcomeJourney {
  /**
  * patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#patterns JourneyOutcome#patterns}
  */
  readonly patterns: JourneyOutcomeJourneyPatterns[] | cdktf.IResolvable;
}

export function journeyOutcomeJourneyToTerraform(struct?: JourneyOutcomeJourneyOutputReference | JourneyOutcomeJourney): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patterns: cdktf.listMapper(journeyOutcomeJourneyPatternsToTerraform, true)(struct!.patterns),
  }
}


export function journeyOutcomeJourneyToHclTerraform(struct?: JourneyOutcomeJourneyOutputReference | JourneyOutcomeJourney): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patterns: {
      value: cdktf.listMapperHcl(journeyOutcomeJourneyPatternsToHclTerraform, true)(struct!.patterns),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyOutcomeJourneyPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyOutcomeJourneyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyOutcomeJourney | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyOutcomeJourney | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._patterns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._patterns.internalValue = value.patterns;
    }
  }

  // patterns - computed: false, optional: false, required: true
  private _patterns = new JourneyOutcomeJourneyPatternsList(this, "patterns", true);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: JourneyOutcomeJourneyPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome genesyscloud_journey_outcome}
*/
export class JourneyOutcome extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_journey_outcome";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JourneyOutcome resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JourneyOutcome to import
  * @param importFromId The id of the existing JourneyOutcome that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JourneyOutcome to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_journey_outcome", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_outcome genesyscloud_journey_outcome} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JourneyOutcomeConfig
  */
  public constructor(scope: Construct, id: string, config: JourneyOutcomeConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_journey_outcome',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._isActive = config.isActive;
    this._isPositive = config.isPositive;
    this._associatedValueField.internalValue = config.associatedValueField;
    this._context.internalValue = config.context;
    this._journey.internalValue = config.journey;
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

  // is_active - computed: false, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // is_positive - computed: false, optional: true, required: false
  private _isPositive?: boolean | cdktf.IResolvable; 
  public get isPositive() {
    return this.getBooleanAttribute('is_positive');
  }
  public set isPositive(value: boolean | cdktf.IResolvable) {
    this._isPositive = value;
  }
  public resetIsPositive() {
    this._isPositive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPositiveInput() {
    return this._isPositive;
  }

  // associated_value_field - computed: false, optional: true, required: false
  private _associatedValueField = new JourneyOutcomeAssociatedValueFieldOutputReference(this, "associated_value_field");
  public get associatedValueField() {
    return this._associatedValueField;
  }
  public putAssociatedValueField(value: JourneyOutcomeAssociatedValueField) {
    this._associatedValueField.internalValue = value;
  }
  public resetAssociatedValueField() {
    this._associatedValueField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedValueFieldInput() {
    return this._associatedValueField.internalValue;
  }

  // context - computed: false, optional: true, required: false
  private _context = new JourneyOutcomeContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: JourneyOutcomeContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // journey - computed: false, optional: true, required: false
  private _journey = new JourneyOutcomeJourneyOutputReference(this, "journey");
  public get journey() {
    return this._journey;
  }
  public putJourney(value: JourneyOutcomeJourney) {
    this._journey.internalValue = value;
  }
  public resetJourney() {
    this._journey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get journeyInput() {
    return this._journey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      is_active: cdktf.booleanToTerraform(this._isActive),
      is_positive: cdktf.booleanToTerraform(this._isPositive),
      associated_value_field: journeyOutcomeAssociatedValueFieldToTerraform(this._associatedValueField.internalValue),
      context: journeyOutcomeContextToTerraform(this._context.internalValue),
      journey: journeyOutcomeJourneyToTerraform(this._journey.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_positive: {
        value: cdktf.booleanToHclTerraform(this._isPositive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      associated_value_field: {
        value: journeyOutcomeAssociatedValueFieldToHclTerraform(this._associatedValueField.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "JourneyOutcomeAssociatedValueFieldList",
      },
      context: {
        value: journeyOutcomeContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "JourneyOutcomeContextList",
      },
      journey: {
        value: journeyOutcomeJourneyToHclTerraform(this._journey.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "JourneyOutcomeJourneyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
