// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JourneySegmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time, in days, from when the segment is assigned until it is automatically unassigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#assignment_expiration_days JourneySegment#assignment_expiration_days}
  */
  readonly assignmentExpirationDays?: number;
  /**
  * The hexadecimal color value of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#color JourneySegment#color}
  */
  readonly color: string;
  /**
  * A description of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#description JourneySegment#description}
  */
  readonly description?: string;
  /**
  * The display name of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#display_name JourneySegment#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#id JourneySegment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether or not the segment is active. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#is_active JourneySegment#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Whether or not the segment should be displayed to agent/supervisor users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#should_display_to_agent JourneySegment#should_display_to_agent}
  */
  readonly shouldDisplayToAgent?: boolean | cdktf.IResolvable;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#context JourneySegment#context}
  */
  readonly context?: JourneySegmentContext;
  /**
  * journey block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#journey JourneySegment#journey}
  */
  readonly journey?: JourneySegmentJourney;
}
export interface JourneySegmentContextPatternsCriteria {
  /**
  * The entity to match the pattern against.Valid values: visit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#entity_type JourneySegment#entity_type}
  */
  readonly entityType: string;
  /**
  * The criteria key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#key JourneySegment#key}
  */
  readonly key: string;
  /**
  * The comparison operator. Valid values: containsAll, containsAny, notContainsAll, notContainsAny, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual, startsWith, endsWith. Defaults to `equal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#operator JourneySegment#operator}
  */
  readonly operator?: string;
  /**
  * Should criteria be case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#should_ignore_case JourneySegment#should_ignore_case}
  */
  readonly shouldIgnoreCase: boolean | cdktf.IResolvable;
  /**
  * The criteria values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#values JourneySegment#values}
  */
  readonly values: string[];
}

export function journeySegmentContextPatternsCriteriaToTerraform(struct?: JourneySegmentContextPatternsCriteria | cdktf.IResolvable): any {
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


export function journeySegmentContextPatternsCriteriaToHclTerraform(struct?: JourneySegmentContextPatternsCriteria | cdktf.IResolvable): any {
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

export class JourneySegmentContextPatternsCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneySegmentContextPatternsCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JourneySegmentContextPatternsCriteria | cdktf.IResolvable | undefined) {
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

export class JourneySegmentContextPatternsCriteriaList extends cdktf.ComplexList {
  public internalValue? : JourneySegmentContextPatternsCriteria[] | cdktf.IResolvable

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
  public get(index: number): JourneySegmentContextPatternsCriteriaOutputReference {
    return new JourneySegmentContextPatternsCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneySegmentContextPatterns {
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#criteria JourneySegment#criteria}
  */
  readonly criteria: JourneySegmentContextPatternsCriteria[] | cdktf.IResolvable;
}

export function journeySegmentContextPatternsToTerraform(struct?: JourneySegmentContextPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.listMapper(journeySegmentContextPatternsCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function journeySegmentContextPatternsToHclTerraform(struct?: JourneySegmentContextPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.listMapperHcl(journeySegmentContextPatternsCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "set",
      storageClassType: "JourneySegmentContextPatternsCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneySegmentContextPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneySegmentContextPatterns | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JourneySegmentContextPatterns | cdktf.IResolvable | undefined) {
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
  private _criteria = new JourneySegmentContextPatternsCriteriaList(this, "criteria", true);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: JourneySegmentContextPatternsCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}

export class JourneySegmentContextPatternsList extends cdktf.ComplexList {
  public internalValue? : JourneySegmentContextPatterns[] | cdktf.IResolvable

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
  public get(index: number): JourneySegmentContextPatternsOutputReference {
    return new JourneySegmentContextPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneySegmentContext {
  /**
  * patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#patterns JourneySegment#patterns}
  */
  readonly patterns: JourneySegmentContextPatterns[] | cdktf.IResolvable;
}

export function journeySegmentContextToTerraform(struct?: JourneySegmentContextOutputReference | JourneySegmentContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patterns: cdktf.listMapper(journeySegmentContextPatternsToTerraform, true)(struct!.patterns),
  }
}


export function journeySegmentContextToHclTerraform(struct?: JourneySegmentContextOutputReference | JourneySegmentContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patterns: {
      value: cdktf.listMapperHcl(journeySegmentContextPatternsToHclTerraform, true)(struct!.patterns),
      isBlock: true,
      type: "set",
      storageClassType: "JourneySegmentContextPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneySegmentContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneySegmentContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneySegmentContext | undefined) {
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
  private _patterns = new JourneySegmentContextPatternsList(this, "patterns", true);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: JourneySegmentContextPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }
}
export interface JourneySegmentJourneyPatternsCriteria {
  /**
  * The criteria key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#key JourneySegment#key}
  */
  readonly key: string;
  /**
  * The comparison operator.Valid values: containsAll, containsAny, notContainsAll, notContainsAny, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual, startsWith, endsWith. Defaults to `equal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#operator JourneySegment#operator}
  */
  readonly operator?: string;
  /**
  * Should criteria be case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#should_ignore_case JourneySegment#should_ignore_case}
  */
  readonly shouldIgnoreCase: boolean | cdktf.IResolvable;
  /**
  * The criteria values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#values JourneySegment#values}
  */
  readonly values: string[];
}

export function journeySegmentJourneyPatternsCriteriaToTerraform(struct?: JourneySegmentJourneyPatternsCriteria | cdktf.IResolvable): any {
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


export function journeySegmentJourneyPatternsCriteriaToHclTerraform(struct?: JourneySegmentJourneyPatternsCriteria | cdktf.IResolvable): any {
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

export class JourneySegmentJourneyPatternsCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneySegmentJourneyPatternsCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JourneySegmentJourneyPatternsCriteria | cdktf.IResolvable | undefined) {
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

export class JourneySegmentJourneyPatternsCriteriaList extends cdktf.ComplexList {
  public internalValue? : JourneySegmentJourneyPatternsCriteria[] | cdktf.IResolvable

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
  public get(index: number): JourneySegmentJourneyPatternsCriteriaOutputReference {
    return new JourneySegmentJourneyPatternsCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneySegmentJourneyPatterns {
  /**
  * The number of times the pattern must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#count JourneySegment#count}
  */
  readonly count: number;
  /**
  * The name of the event for which this pattern can be matched on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#event_name JourneySegment#event_name}
  */
  readonly eventName?: string;
  /**
  * The session type for which this pattern can be matched on. Valid values: web, app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#session_type JourneySegment#session_type}
  */
  readonly sessionType: string;
  /**
  * The stream type for which this pattern can be matched on. Valid values: Web, App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#stream_type JourneySegment#stream_type}
  */
  readonly streamType: string;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#criteria JourneySegment#criteria}
  */
  readonly criteria: JourneySegmentJourneyPatternsCriteria[] | cdktf.IResolvable;
}

export function journeySegmentJourneyPatternsToTerraform(struct?: JourneySegmentJourneyPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    event_name: cdktf.stringToTerraform(struct!.eventName),
    session_type: cdktf.stringToTerraform(struct!.sessionType),
    stream_type: cdktf.stringToTerraform(struct!.streamType),
    criteria: cdktf.listMapper(journeySegmentJourneyPatternsCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function journeySegmentJourneyPatternsToHclTerraform(struct?: JourneySegmentJourneyPatterns | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(journeySegmentJourneyPatternsCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "set",
      storageClassType: "JourneySegmentJourneyPatternsCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneySegmentJourneyPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneySegmentJourneyPatterns | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JourneySegmentJourneyPatterns | cdktf.IResolvable | undefined) {
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
  private _criteria = new JourneySegmentJourneyPatternsCriteriaList(this, "criteria", true);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: JourneySegmentJourneyPatternsCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}

export class JourneySegmentJourneyPatternsList extends cdktf.ComplexList {
  public internalValue? : JourneySegmentJourneyPatterns[] | cdktf.IResolvable

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
  public get(index: number): JourneySegmentJourneyPatternsOutputReference {
    return new JourneySegmentJourneyPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneySegmentJourney {
  /**
  * patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#patterns JourneySegment#patterns}
  */
  readonly patterns: JourneySegmentJourneyPatterns[] | cdktf.IResolvable;
}

export function journeySegmentJourneyToTerraform(struct?: JourneySegmentJourneyOutputReference | JourneySegmentJourney): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patterns: cdktf.listMapper(journeySegmentJourneyPatternsToTerraform, true)(struct!.patterns),
  }
}


export function journeySegmentJourneyToHclTerraform(struct?: JourneySegmentJourneyOutputReference | JourneySegmentJourney): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patterns: {
      value: cdktf.listMapperHcl(journeySegmentJourneyPatternsToHclTerraform, true)(struct!.patterns),
      isBlock: true,
      type: "set",
      storageClassType: "JourneySegmentJourneyPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneySegmentJourneyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneySegmentJourney | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneySegmentJourney | undefined) {
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
  private _patterns = new JourneySegmentJourneyPatternsList(this, "patterns", true);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: JourneySegmentJourneyPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment genesyscloud_journey_segment}
*/
export class JourneySegment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_journey_segment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JourneySegment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JourneySegment to import
  * @param importFromId The id of the existing JourneySegment that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JourneySegment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_journey_segment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_segment genesyscloud_journey_segment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JourneySegmentConfig
  */
  public constructor(scope: Construct, id: string, config: JourneySegmentConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_journey_segment',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignmentExpirationDays = config.assignmentExpirationDays;
    this._color = config.color;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._isActive = config.isActive;
    this._shouldDisplayToAgent = config.shouldDisplayToAgent;
    this._context.internalValue = config.context;
    this._journey.internalValue = config.journey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignment_expiration_days - computed: false, optional: true, required: false
  private _assignmentExpirationDays?: number; 
  public get assignmentExpirationDays() {
    return this.getNumberAttribute('assignment_expiration_days');
  }
  public set assignmentExpirationDays(value: number) {
    this._assignmentExpirationDays = value;
  }
  public resetAssignmentExpirationDays() {
    this._assignmentExpirationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentExpirationDaysInput() {
    return this._assignmentExpirationDays;
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

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

  // should_display_to_agent - computed: false, optional: true, required: false
  private _shouldDisplayToAgent?: boolean | cdktf.IResolvable; 
  public get shouldDisplayToAgent() {
    return this.getBooleanAttribute('should_display_to_agent');
  }
  public set shouldDisplayToAgent(value: boolean | cdktf.IResolvable) {
    this._shouldDisplayToAgent = value;
  }
  public resetShouldDisplayToAgent() {
    this._shouldDisplayToAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDisplayToAgentInput() {
    return this._shouldDisplayToAgent;
  }

  // context - computed: false, optional: true, required: false
  private _context = new JourneySegmentContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: JourneySegmentContext) {
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
  private _journey = new JourneySegmentJourneyOutputReference(this, "journey");
  public get journey() {
    return this._journey;
  }
  public putJourney(value: JourneySegmentJourney) {
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
      assignment_expiration_days: cdktf.numberToTerraform(this._assignmentExpirationDays),
      color: cdktf.stringToTerraform(this._color),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      is_active: cdktf.booleanToTerraform(this._isActive),
      should_display_to_agent: cdktf.booleanToTerraform(this._shouldDisplayToAgent),
      context: journeySegmentContextToTerraform(this._context.internalValue),
      journey: journeySegmentJourneyToTerraform(this._journey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignment_expiration_days: {
        value: cdktf.numberToHclTerraform(this._assignmentExpirationDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      should_display_to_agent: {
        value: cdktf.booleanToHclTerraform(this._shouldDisplayToAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      context: {
        value: journeySegmentContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "JourneySegmentContextList",
      },
      journey: {
        value: journeySegmentJourneyToHclTerraform(this._journey.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "JourneySegmentJourneyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
