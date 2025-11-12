// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FailureDetectionRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Rule description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#description FailureDetectionRules#description}
  */
  readonly description?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#enabled FailureDetectionRules#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#id FailureDetectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#insert_after FailureDetectionRules#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#name FailureDetectionRules#name}
  */
  readonly name: string;
  /**
  * Failure detection parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#parameter_id FailureDetectionRules#parameter_id}
  */
  readonly parameterId: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#conditions FailureDetectionRules#conditions}
  */
  readonly conditions: FailureDetectionRulesConditions;
}
export interface FailureDetectionRulesConditionsConditionPredicate {
  /**
  * Case sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#case_sensitive FailureDetectionRules#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Management zones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#management_zones FailureDetectionRules#management_zones}
  */
  readonly managementZones?: string[];
  /**
  * Predicate type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#predicate_type FailureDetectionRules#predicate_type}
  */
  readonly predicateType: string;
  /**
  * Service types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#service_type FailureDetectionRules#service_type}
  */
  readonly serviceType?: string[];
  /**
  * Tag keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#tag_keys FailureDetectionRules#tag_keys}
  */
  readonly tagKeys?: string[];
  /**
  * Tags (exact match)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#tags FailureDetectionRules#tags}
  */
  readonly tags?: string[];
  /**
  * Names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#text_values FailureDetectionRules#text_values}
  */
  readonly textValues?: string[];
}

export function failureDetectionRulesConditionsConditionPredicateToTerraform(struct?: FailureDetectionRulesConditionsConditionPredicateOutputReference | FailureDetectionRulesConditionsConditionPredicate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    management_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managementZones),
    predicate_type: cdktf.stringToTerraform(struct!.predicateType),
    service_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceType),
    tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagKeys),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    text_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.textValues),
  }
}


export function failureDetectionRulesConditionsConditionPredicateToHclTerraform(struct?: FailureDetectionRulesConditionsConditionPredicateOutputReference | FailureDetectionRulesConditionsConditionPredicate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    management_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managementZones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    predicate_type: {
      value: cdktf.stringToHclTerraform(struct!.predicateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tag_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    text_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.textValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRulesConditionsConditionPredicateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionRulesConditionsConditionPredicate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._managementZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementZones = this._managementZones;
    }
    if (this._predicateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicateType = this._predicateType;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._tagKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKeys = this._tagKeys;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._textValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.textValues = this._textValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRulesConditionsConditionPredicate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseSensitive = undefined;
      this._managementZones = undefined;
      this._predicateType = undefined;
      this._serviceType = undefined;
      this._tagKeys = undefined;
      this._tags = undefined;
      this._textValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseSensitive = value.caseSensitive;
      this._managementZones = value.managementZones;
      this._predicateType = value.predicateType;
      this._serviceType = value.serviceType;
      this._tagKeys = value.tagKeys;
      this._tags = value.tags;
      this._textValues = value.textValues;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // management_zones - computed: false, optional: true, required: false
  private _managementZones?: string[]; 
  public get managementZones() {
    return cdktf.Fn.tolist(this.getListAttribute('management_zones'));
  }
  public set managementZones(value: string[]) {
    this._managementZones = value;
  }
  public resetManagementZones() {
    this._managementZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementZonesInput() {
    return this._managementZones;
  }

  // predicate_type - computed: false, optional: false, required: true
  private _predicateType?: string; 
  public get predicateType() {
    return this.getStringAttribute('predicate_type');
  }
  public set predicateType(value: string) {
    this._predicateType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateTypeInput() {
    return this._predicateType;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string[]; 
  public get serviceType() {
    return cdktf.Fn.tolist(this.getListAttribute('service_type'));
  }
  public set serviceType(value: string[]) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // tag_keys - computed: false, optional: true, required: false
  private _tagKeys?: string[]; 
  public get tagKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_keys'));
  }
  public set tagKeys(value: string[]) {
    this._tagKeys = value;
  }
  public resetTagKeys() {
    this._tagKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeysInput() {
    return this._tagKeys;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // text_values - computed: false, optional: true, required: false
  private _textValues?: string[]; 
  public get textValues() {
    return cdktf.Fn.tolist(this.getListAttribute('text_values'));
  }
  public set textValues(value: string[]) {
    this._textValues = value;
  }
  public resetTextValues() {
    this._textValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textValuesInput() {
    return this._textValues;
  }
}
export interface FailureDetectionRulesConditionsCondition {
  /**
  * Possible Values: `PG_NAME`, `PG_TAG`, `SERVICE_MANAGEMENT_ZONE`, `SERVICE_NAME`, `SERVICE_TAG`, `SERVICE_TYPE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#attribute FailureDetectionRules#attribute}
  */
  readonly attribute: string;
  /**
  * predicate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#predicate FailureDetectionRules#predicate}
  */
  readonly predicate: FailureDetectionRulesConditionsConditionPredicate;
}

export function failureDetectionRulesConditionsConditionToTerraform(struct?: FailureDetectionRulesConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    predicate: failureDetectionRulesConditionsConditionPredicateToTerraform(struct!.predicate),
  }
}


export function failureDetectionRulesConditionsConditionToHclTerraform(struct?: FailureDetectionRulesConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predicate: {
      value: failureDetectionRulesConditionsConditionPredicateToHclTerraform(struct!.predicate),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionRulesConditionsConditionPredicateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRulesConditionsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FailureDetectionRulesConditionsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._predicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRulesConditionsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._predicate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._predicate.internalValue = value.predicate;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // predicate - computed: false, optional: false, required: true
  private _predicate = new FailureDetectionRulesConditionsConditionPredicateOutputReference(this, "predicate");
  public get predicate() {
    return this._predicate;
  }
  public putPredicate(value: FailureDetectionRulesConditionsConditionPredicate) {
    this._predicate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate.internalValue;
  }
}

export class FailureDetectionRulesConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : FailureDetectionRulesConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): FailureDetectionRulesConditionsConditionOutputReference {
    return new FailureDetectionRulesConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FailureDetectionRulesConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#condition FailureDetectionRules#condition}
  */
  readonly condition: FailureDetectionRulesConditionsCondition[] | cdktf.IResolvable;
}

export function failureDetectionRulesConditionsToTerraform(struct?: FailureDetectionRulesConditionsOutputReference | FailureDetectionRulesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(failureDetectionRulesConditionsConditionToTerraform, true)(struct!.condition),
  }
}


export function failureDetectionRulesConditionsToHclTerraform(struct?: FailureDetectionRulesConditionsOutputReference | FailureDetectionRulesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(failureDetectionRulesConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "set",
      storageClassType: "FailureDetectionRulesConditionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRulesConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionRulesConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRulesConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new FailureDetectionRulesConditionsConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: FailureDetectionRulesConditionsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules dynatrace_failure_detection_rules}
*/
export class FailureDetectionRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_failure_detection_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FailureDetectionRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FailureDetectionRules to import
  * @param importFromId The id of the existing FailureDetectionRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FailureDetectionRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_failure_detection_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rules dynatrace_failure_detection_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FailureDetectionRulesConfig
  */
  public constructor(scope: Construct, id: string, config: FailureDetectionRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_failure_detection_rules',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._name = config.name;
    this._parameterId = config.parameterId;
    this._conditions.internalValue = config.conditions;
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

  // parameter_id - computed: false, optional: false, required: true
  private _parameterId?: string; 
  public get parameterId() {
    return this.getStringAttribute('parameter_id');
  }
  public set parameterId(value: string) {
    this._parameterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterIdInput() {
    return this._parameterId;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new FailureDetectionRulesConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: FailureDetectionRulesConditions) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      name: cdktf.stringToTerraform(this._name),
      parameter_id: cdktf.stringToTerraform(this._parameterId),
      conditions: failureDetectionRulesConditionsToTerraform(this._conditions.internalValue),
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
      parameter_id: {
        value: cdktf.stringToHclTerraform(this._parameterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: failureDetectionRulesConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FailureDetectionRulesConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
