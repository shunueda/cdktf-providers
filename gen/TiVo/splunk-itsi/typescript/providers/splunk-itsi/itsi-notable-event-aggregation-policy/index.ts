// https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ItsiNotableEventAggregationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the notable event aggregation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#description ItsiNotableEventAggregationPolicy#description}
  */
  readonly description?: string;
  /**
  * Whether the notable event aggregation policy is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#disabled ItsiNotableEventAggregationPolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the entity factor is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#entity_factor_enabled ItsiNotableEventAggregationPolicy#entity_factor_enabled}
  */
  readonly entityFactorEnabled?: boolean | cdktf.IResolvable;
  /**
  * The default owner of each episode created by the notable event aggregation policy. (Episode Asignee)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#group_assignee ItsiNotableEventAggregationPolicy#group_assignee}
  */
  readonly groupAssignee?: string;
  /**
  * The custom instruction of each episode created by the notable event aggregation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#group_custom_instruction ItsiNotableEventAggregationPolicy#group_custom_instruction}
  */
  readonly groupCustomInstruction?: string;
  /**
  * Customize the Episode dashboard using a JSON-formatted dashboard definition. The first notable event's fields are available to use as tokens in the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#group_dashboard ItsiNotableEventAggregationPolicy#group_dashboard}
  */
  readonly groupDashboard?: string;
  /**
  * Dashboard Tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#group_dashboard_context ItsiNotableEventAggregationPolicy#group_dashboard_context}
  */
  readonly groupDashboardContext?: string;
  /**
  * The description of each episode created by the notable event aggregation policy. (Episode Description)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#group_description ItsiNotableEventAggregationPolicy#group_description}
  */
  readonly groupDescription?: string;
  /**
  * The default instructions of each episode created by the notable event aggregation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#group_instruction ItsiNotableEventAggregationPolicy#group_instruction}
  */
  readonly groupInstruction?: string;
  /**
  * The default severity of each episode created by the notable event aggregation policy. (Episode Severity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#group_severity ItsiNotableEventAggregationPolicy#group_severity}
  */
  readonly groupSeverity?: string;
  /**
  * The default status of each episode created by the notable event aggregation policy.  (Episode Status)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#group_status ItsiNotableEventAggregationPolicy#group_status}
  */
  readonly groupStatus?: string;
  /**
  * The default title of each episode created by the notable event aggregation policy. (Episode Title)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#group_title ItsiNotableEventAggregationPolicy#group_title}
  */
  readonly groupTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#priority ItsiNotableEventAggregationPolicy#priority}
  */
  readonly priority?: number;
  /**
  * 
  * If you create an action to add a comment after an episode has existed for 60 seconds, a comment will only be added once for the episode.
  * There are 2 conditions that trigger time-based actions:
  * - The episode existed for (duration)
  * - The flow of events into the episode paused for (pause)
  * 				
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#run_time_based_actions_once ItsiNotableEventAggregationPolicy#run_time_based_actions_once}
  */
  readonly runTimeBasedActionsOnce?: boolean | cdktf.IResolvable;
  /**
  * Whether the service topology is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#service_topology_enabled ItsiNotableEventAggregationPolicy#service_topology_enabled}
  */
  readonly serviceTopologyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Fields to split an episode by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#split_by_field ItsiNotableEventAggregationPolicy#split_by_field}
  */
  readonly splitByField?: string[];
  /**
  * The title of the notable event aggregation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#title ItsiNotableEventAggregationPolicy#title}
  */
  readonly title: string;
  /**
  * breaking_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#breaking_criteria ItsiNotableEventAggregationPolicy#breaking_criteria}
  */
  readonly breakingCriteria?: ItsiNotableEventAggregationPolicyBreakingCriteria;
  /**
  * filter_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#filter_criteria ItsiNotableEventAggregationPolicy#filter_criteria}
  */
  readonly filterCriteria?: ItsiNotableEventAggregationPolicyFilterCriteria;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#rule ItsiNotableEventAggregationPolicy#rule}
  */
  readonly rule?: ItsiNotableEventAggregationPolicyRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#timeouts ItsiNotableEventAggregationPolicy#timeouts}
  */
  readonly timeouts?: ItsiNotableEventAggregationPolicyTimeouts;
}
export interface ItsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteria {
}

export function itsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteriaToTerraform(struct?: ItsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function itsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteriaToHclTerraform(struct?: ItsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ItsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }
}

export class ItsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteriaList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteria[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteriaOutputReference {
    return new ItsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#field ItsiNotableEventAggregationPolicy#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#operator ItsiNotableEventAggregationPolicy#operator}
  */
  readonly operator: string;
  /**
  * A wildcard pattern to match against a field value. E.g.: "*"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#value ItsiNotableEventAggregationPolicy#value}
  */
  readonly value: string;
}

export function itsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventFieldToTerraform(struct?: ItsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function itsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventFieldToHclTerraform(struct?: ItsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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

export class ItsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class ItsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventFieldList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventField[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventFieldOutputReference {
    return new ItsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyBreakingCriteriaClause {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#condition ItsiNotableEventAggregationPolicy#condition}
  */
  readonly condition?: string;
  /**
  * notable_event_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#notable_event_field ItsiNotableEventAggregationPolicy#notable_event_field}
  */
  readonly notableEventField?: ItsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventField[] | cdktf.IResolvable;
}

export function itsiNotableEventAggregationPolicyBreakingCriteriaClauseToTerraform(struct?: ItsiNotableEventAggregationPolicyBreakingCriteriaClause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    notable_event_field: cdktf.listMapper(itsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventFieldToTerraform, true)(struct!.notableEventField),
  }
}


export function itsiNotableEventAggregationPolicyBreakingCriteriaClauseToHclTerraform(struct?: ItsiNotableEventAggregationPolicyBreakingCriteriaClause | cdktf.IResolvable): any {
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
    notable_event_field: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventFieldToHclTerraform, true)(struct!.notableEventField),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyBreakingCriteriaClauseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyBreakingCriteriaClause | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._notableEventField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notableEventField = this._notableEventField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyBreakingCriteriaClause | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._notableEventField.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._notableEventField.internalValue = value.notableEventField;
    }
  }

  // condition - computed: true, optional: true, required: false
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

  // notable_event_field - computed: false, optional: true, required: false
  private _notableEventField = new ItsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventFieldList(this, "notable_event_field", true);
  public get notableEventField() {
    return this._notableEventField;
  }
  public putNotableEventField(value: ItsiNotableEventAggregationPolicyBreakingCriteriaClauseNotableEventField[] | cdktf.IResolvable) {
    this._notableEventField.internalValue = value;
  }
  public resetNotableEventField() {
    this._notableEventField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notableEventFieldInput() {
    return this._notableEventField.internalValue;
  }
}

export class ItsiNotableEventAggregationPolicyBreakingCriteriaClauseList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyBreakingCriteriaClause[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyBreakingCriteriaClauseOutputReference {
    return new ItsiNotableEventAggregationPolicyBreakingCriteriaClauseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyBreakingCriteriaDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#limit ItsiNotableEventAggregationPolicy#limit}
  */
  readonly limit: number;
}

export function itsiNotableEventAggregationPolicyBreakingCriteriaDurationToTerraform(struct?: ItsiNotableEventAggregationPolicyBreakingCriteriaDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
  }
}


export function itsiNotableEventAggregationPolicyBreakingCriteriaDurationToHclTerraform(struct?: ItsiNotableEventAggregationPolicyBreakingCriteriaDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyBreakingCriteriaDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyBreakingCriteriaDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyBreakingCriteriaDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
    }
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}

export class ItsiNotableEventAggregationPolicyBreakingCriteriaDurationList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyBreakingCriteriaDuration[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyBreakingCriteriaDurationOutputReference {
    return new ItsiNotableEventAggregationPolicyBreakingCriteriaDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#limit ItsiNotableEventAggregationPolicy#limit}
  */
  readonly limit: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#operator ItsiNotableEventAggregationPolicy#operator}
  */
  readonly operator: string;
}

export function itsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCountToTerraform(struct?: ItsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function itsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCountToHclTerraform(struct?: ItsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._operator = value.operator;
    }
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class ItsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCountList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCount[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCountOutputReference {
    return new ItsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyBreakingCriteriaPause {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#limit ItsiNotableEventAggregationPolicy#limit}
  */
  readonly limit: number;
}

export function itsiNotableEventAggregationPolicyBreakingCriteriaPauseToTerraform(struct?: ItsiNotableEventAggregationPolicyBreakingCriteriaPause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
  }
}


export function itsiNotableEventAggregationPolicyBreakingCriteriaPauseToHclTerraform(struct?: ItsiNotableEventAggregationPolicyBreakingCriteriaPause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyBreakingCriteriaPauseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyBreakingCriteriaPause | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyBreakingCriteriaPause | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
    }
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}

export class ItsiNotableEventAggregationPolicyBreakingCriteriaPauseList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyBreakingCriteriaPause[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyBreakingCriteriaPauseOutputReference {
    return new ItsiNotableEventAggregationPolicyBreakingCriteriaPauseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyBreakingCriteria {
  /**
  * breaking_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#breaking_criteria ItsiNotableEventAggregationPolicy#breaking_criteria}
  */
  readonly breakingCriteria?: ItsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteria[] | cdktf.IResolvable;
  /**
  * clause block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#clause ItsiNotableEventAggregationPolicy#clause}
  */
  readonly clause?: ItsiNotableEventAggregationPolicyBreakingCriteriaClause[] | cdktf.IResolvable;
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#duration ItsiNotableEventAggregationPolicy#duration}
  */
  readonly duration?: ItsiNotableEventAggregationPolicyBreakingCriteriaDuration[] | cdktf.IResolvable;
  /**
  * notable_event_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#notable_event_count ItsiNotableEventAggregationPolicy#notable_event_count}
  */
  readonly notableEventCount?: ItsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCount[] | cdktf.IResolvable;
  /**
  * pause block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#pause ItsiNotableEventAggregationPolicy#pause}
  */
  readonly pause?: ItsiNotableEventAggregationPolicyBreakingCriteriaPause[] | cdktf.IResolvable;
}

export function itsiNotableEventAggregationPolicyBreakingCriteriaToTerraform(struct?: ItsiNotableEventAggregationPolicyBreakingCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breaking_criteria: cdktf.listMapper(itsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteriaToTerraform, true)(struct!.breakingCriteria),
    clause: cdktf.listMapper(itsiNotableEventAggregationPolicyBreakingCriteriaClauseToTerraform, true)(struct!.clause),
    duration: cdktf.listMapper(itsiNotableEventAggregationPolicyBreakingCriteriaDurationToTerraform, true)(struct!.duration),
    notable_event_count: cdktf.listMapper(itsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCountToTerraform, true)(struct!.notableEventCount),
    pause: cdktf.listMapper(itsiNotableEventAggregationPolicyBreakingCriteriaPauseToTerraform, true)(struct!.pause),
  }
}


export function itsiNotableEventAggregationPolicyBreakingCriteriaToHclTerraform(struct?: ItsiNotableEventAggregationPolicyBreakingCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breaking_criteria: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteriaToHclTerraform, true)(struct!.breakingCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteriaList",
    },
    clause: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyBreakingCriteriaClauseToHclTerraform, true)(struct!.clause),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyBreakingCriteriaClauseList",
    },
    duration: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyBreakingCriteriaDurationToHclTerraform, true)(struct!.duration),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyBreakingCriteriaDurationList",
    },
    notable_event_count: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCountToHclTerraform, true)(struct!.notableEventCount),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCountList",
    },
    pause: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyBreakingCriteriaPauseToHclTerraform, true)(struct!.pause),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyBreakingCriteriaPauseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyBreakingCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItsiNotableEventAggregationPolicyBreakingCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakingCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakingCriteria = this._breakingCriteria?.internalValue;
    }
    if (this._clause?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clause = this._clause?.internalValue;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._notableEventCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notableEventCount = this._notableEventCount?.internalValue;
    }
    if (this._pause?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pause = this._pause?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyBreakingCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._breakingCriteria.internalValue = undefined;
      this._clause.internalValue = undefined;
      this._duration.internalValue = undefined;
      this._notableEventCount.internalValue = undefined;
      this._pause.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._breakingCriteria.internalValue = value.breakingCriteria;
      this._clause.internalValue = value.clause;
      this._duration.internalValue = value.duration;
      this._notableEventCount.internalValue = value.notableEventCount;
      this._pause.internalValue = value.pause;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // breaking_criteria - computed: false, optional: true, required: false
  private _breakingCriteria = new ItsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteriaList(this, "breaking_criteria", true);
  public get breakingCriteria() {
    return this._breakingCriteria;
  }
  public putBreakingCriteria(value: ItsiNotableEventAggregationPolicyBreakingCriteriaBreakingCriteria[] | cdktf.IResolvable) {
    this._breakingCriteria.internalValue = value;
  }
  public resetBreakingCriteria() {
    this._breakingCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakingCriteriaInput() {
    return this._breakingCriteria.internalValue;
  }

  // clause - computed: false, optional: true, required: false
  private _clause = new ItsiNotableEventAggregationPolicyBreakingCriteriaClauseList(this, "clause", true);
  public get clause() {
    return this._clause;
  }
  public putClause(value: ItsiNotableEventAggregationPolicyBreakingCriteriaClause[] | cdktf.IResolvable) {
    this._clause.internalValue = value;
  }
  public resetClause() {
    this._clause.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clauseInput() {
    return this._clause.internalValue;
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new ItsiNotableEventAggregationPolicyBreakingCriteriaDurationList(this, "duration", true);
  public get duration() {
    return this._duration;
  }
  public putDuration(value: ItsiNotableEventAggregationPolicyBreakingCriteriaDuration[] | cdktf.IResolvable) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // notable_event_count - computed: false, optional: true, required: false
  private _notableEventCount = new ItsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCountList(this, "notable_event_count", true);
  public get notableEventCount() {
    return this._notableEventCount;
  }
  public putNotableEventCount(value: ItsiNotableEventAggregationPolicyBreakingCriteriaNotableEventCount[] | cdktf.IResolvable) {
    this._notableEventCount.internalValue = value;
  }
  public resetNotableEventCount() {
    this._notableEventCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notableEventCountInput() {
    return this._notableEventCount.internalValue;
  }

  // pause - computed: false, optional: true, required: false
  private _pause = new ItsiNotableEventAggregationPolicyBreakingCriteriaPauseList(this, "pause", true);
  public get pause() {
    return this._pause;
  }
  public putPause(value: ItsiNotableEventAggregationPolicyBreakingCriteriaPause[] | cdktf.IResolvable) {
    this._pause.internalValue = value;
  }
  public resetPause() {
    this._pause.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseInput() {
    return this._pause.internalValue;
  }
}
export interface ItsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteria {
}

export function itsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteriaToTerraform(struct?: ItsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function itsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteriaToHclTerraform(struct?: ItsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ItsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }
}

export class ItsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteriaList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteria[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteriaOutputReference {
    return new ItsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#field ItsiNotableEventAggregationPolicy#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#operator ItsiNotableEventAggregationPolicy#operator}
  */
  readonly operator: string;
  /**
  * A wildcard pattern to match against a field value. E.g.: "*"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#value ItsiNotableEventAggregationPolicy#value}
  */
  readonly value: string;
}

export function itsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventFieldToTerraform(struct?: ItsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function itsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventFieldToHclTerraform(struct?: ItsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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

export class ItsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class ItsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventFieldList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventField[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventFieldOutputReference {
    return new ItsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyFilterCriteriaClause {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#condition ItsiNotableEventAggregationPolicy#condition}
  */
  readonly condition?: string;
  /**
  * notable_event_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#notable_event_field ItsiNotableEventAggregationPolicy#notable_event_field}
  */
  readonly notableEventField?: ItsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventField[] | cdktf.IResolvable;
}

export function itsiNotableEventAggregationPolicyFilterCriteriaClauseToTerraform(struct?: ItsiNotableEventAggregationPolicyFilterCriteriaClause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    notable_event_field: cdktf.listMapper(itsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventFieldToTerraform, true)(struct!.notableEventField),
  }
}


export function itsiNotableEventAggregationPolicyFilterCriteriaClauseToHclTerraform(struct?: ItsiNotableEventAggregationPolicyFilterCriteriaClause | cdktf.IResolvable): any {
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
    notable_event_field: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventFieldToHclTerraform, true)(struct!.notableEventField),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyFilterCriteriaClauseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyFilterCriteriaClause | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._notableEventField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notableEventField = this._notableEventField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyFilterCriteriaClause | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._notableEventField.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._notableEventField.internalValue = value.notableEventField;
    }
  }

  // condition - computed: true, optional: true, required: false
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

  // notable_event_field - computed: false, optional: true, required: false
  private _notableEventField = new ItsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventFieldList(this, "notable_event_field", true);
  public get notableEventField() {
    return this._notableEventField;
  }
  public putNotableEventField(value: ItsiNotableEventAggregationPolicyFilterCriteriaClauseNotableEventField[] | cdktf.IResolvable) {
    this._notableEventField.internalValue = value;
  }
  public resetNotableEventField() {
    this._notableEventField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notableEventFieldInput() {
    return this._notableEventField.internalValue;
  }
}

export class ItsiNotableEventAggregationPolicyFilterCriteriaClauseList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyFilterCriteriaClause[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyFilterCriteriaClauseOutputReference {
    return new ItsiNotableEventAggregationPolicyFilterCriteriaClauseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyFilterCriteriaDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#limit ItsiNotableEventAggregationPolicy#limit}
  */
  readonly limit: number;
}

export function itsiNotableEventAggregationPolicyFilterCriteriaDurationToTerraform(struct?: ItsiNotableEventAggregationPolicyFilterCriteriaDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
  }
}


export function itsiNotableEventAggregationPolicyFilterCriteriaDurationToHclTerraform(struct?: ItsiNotableEventAggregationPolicyFilterCriteriaDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyFilterCriteriaDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyFilterCriteriaDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyFilterCriteriaDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
    }
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}

export class ItsiNotableEventAggregationPolicyFilterCriteriaDurationList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyFilterCriteriaDuration[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyFilterCriteriaDurationOutputReference {
    return new ItsiNotableEventAggregationPolicyFilterCriteriaDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyFilterCriteriaNotableEventCount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#limit ItsiNotableEventAggregationPolicy#limit}
  */
  readonly limit: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#operator ItsiNotableEventAggregationPolicy#operator}
  */
  readonly operator: string;
}

export function itsiNotableEventAggregationPolicyFilterCriteriaNotableEventCountToTerraform(struct?: ItsiNotableEventAggregationPolicyFilterCriteriaNotableEventCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function itsiNotableEventAggregationPolicyFilterCriteriaNotableEventCountToHclTerraform(struct?: ItsiNotableEventAggregationPolicyFilterCriteriaNotableEventCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyFilterCriteriaNotableEventCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyFilterCriteriaNotableEventCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyFilterCriteriaNotableEventCount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._operator = value.operator;
    }
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class ItsiNotableEventAggregationPolicyFilterCriteriaNotableEventCountList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyFilterCriteriaNotableEventCount[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyFilterCriteriaNotableEventCountOutputReference {
    return new ItsiNotableEventAggregationPolicyFilterCriteriaNotableEventCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyFilterCriteriaPause {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#limit ItsiNotableEventAggregationPolicy#limit}
  */
  readonly limit: number;
}

export function itsiNotableEventAggregationPolicyFilterCriteriaPauseToTerraform(struct?: ItsiNotableEventAggregationPolicyFilterCriteriaPause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
  }
}


export function itsiNotableEventAggregationPolicyFilterCriteriaPauseToHclTerraform(struct?: ItsiNotableEventAggregationPolicyFilterCriteriaPause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyFilterCriteriaPauseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyFilterCriteriaPause | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyFilterCriteriaPause | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
    }
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}

export class ItsiNotableEventAggregationPolicyFilterCriteriaPauseList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyFilterCriteriaPause[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyFilterCriteriaPauseOutputReference {
    return new ItsiNotableEventAggregationPolicyFilterCriteriaPauseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyFilterCriteria {
  /**
  * breaking_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#breaking_criteria ItsiNotableEventAggregationPolicy#breaking_criteria}
  */
  readonly breakingCriteria?: ItsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteria[] | cdktf.IResolvable;
  /**
  * clause block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#clause ItsiNotableEventAggregationPolicy#clause}
  */
  readonly clause?: ItsiNotableEventAggregationPolicyFilterCriteriaClause[] | cdktf.IResolvable;
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#duration ItsiNotableEventAggregationPolicy#duration}
  */
  readonly duration?: ItsiNotableEventAggregationPolicyFilterCriteriaDuration[] | cdktf.IResolvable;
  /**
  * notable_event_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#notable_event_count ItsiNotableEventAggregationPolicy#notable_event_count}
  */
  readonly notableEventCount?: ItsiNotableEventAggregationPolicyFilterCriteriaNotableEventCount[] | cdktf.IResolvable;
  /**
  * pause block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#pause ItsiNotableEventAggregationPolicy#pause}
  */
  readonly pause?: ItsiNotableEventAggregationPolicyFilterCriteriaPause[] | cdktf.IResolvable;
}

export function itsiNotableEventAggregationPolicyFilterCriteriaToTerraform(struct?: ItsiNotableEventAggregationPolicyFilterCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breaking_criteria: cdktf.listMapper(itsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteriaToTerraform, true)(struct!.breakingCriteria),
    clause: cdktf.listMapper(itsiNotableEventAggregationPolicyFilterCriteriaClauseToTerraform, true)(struct!.clause),
    duration: cdktf.listMapper(itsiNotableEventAggregationPolicyFilterCriteriaDurationToTerraform, true)(struct!.duration),
    notable_event_count: cdktf.listMapper(itsiNotableEventAggregationPolicyFilterCriteriaNotableEventCountToTerraform, true)(struct!.notableEventCount),
    pause: cdktf.listMapper(itsiNotableEventAggregationPolicyFilterCriteriaPauseToTerraform, true)(struct!.pause),
  }
}


export function itsiNotableEventAggregationPolicyFilterCriteriaToHclTerraform(struct?: ItsiNotableEventAggregationPolicyFilterCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breaking_criteria: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteriaToHclTerraform, true)(struct!.breakingCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteriaList",
    },
    clause: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyFilterCriteriaClauseToHclTerraform, true)(struct!.clause),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyFilterCriteriaClauseList",
    },
    duration: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyFilterCriteriaDurationToHclTerraform, true)(struct!.duration),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyFilterCriteriaDurationList",
    },
    notable_event_count: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyFilterCriteriaNotableEventCountToHclTerraform, true)(struct!.notableEventCount),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyFilterCriteriaNotableEventCountList",
    },
    pause: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyFilterCriteriaPauseToHclTerraform, true)(struct!.pause),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyFilterCriteriaPauseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyFilterCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItsiNotableEventAggregationPolicyFilterCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakingCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakingCriteria = this._breakingCriteria?.internalValue;
    }
    if (this._clause?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clause = this._clause?.internalValue;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._notableEventCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notableEventCount = this._notableEventCount?.internalValue;
    }
    if (this._pause?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pause = this._pause?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyFilterCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._breakingCriteria.internalValue = undefined;
      this._clause.internalValue = undefined;
      this._duration.internalValue = undefined;
      this._notableEventCount.internalValue = undefined;
      this._pause.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._breakingCriteria.internalValue = value.breakingCriteria;
      this._clause.internalValue = value.clause;
      this._duration.internalValue = value.duration;
      this._notableEventCount.internalValue = value.notableEventCount;
      this._pause.internalValue = value.pause;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // breaking_criteria - computed: false, optional: true, required: false
  private _breakingCriteria = new ItsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteriaList(this, "breaking_criteria", true);
  public get breakingCriteria() {
    return this._breakingCriteria;
  }
  public putBreakingCriteria(value: ItsiNotableEventAggregationPolicyFilterCriteriaBreakingCriteria[] | cdktf.IResolvable) {
    this._breakingCriteria.internalValue = value;
  }
  public resetBreakingCriteria() {
    this._breakingCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakingCriteriaInput() {
    return this._breakingCriteria.internalValue;
  }

  // clause - computed: false, optional: true, required: false
  private _clause = new ItsiNotableEventAggregationPolicyFilterCriteriaClauseList(this, "clause", true);
  public get clause() {
    return this._clause;
  }
  public putClause(value: ItsiNotableEventAggregationPolicyFilterCriteriaClause[] | cdktf.IResolvable) {
    this._clause.internalValue = value;
  }
  public resetClause() {
    this._clause.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clauseInput() {
    return this._clause.internalValue;
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new ItsiNotableEventAggregationPolicyFilterCriteriaDurationList(this, "duration", true);
  public get duration() {
    return this._duration;
  }
  public putDuration(value: ItsiNotableEventAggregationPolicyFilterCriteriaDuration[] | cdktf.IResolvable) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // notable_event_count - computed: false, optional: true, required: false
  private _notableEventCount = new ItsiNotableEventAggregationPolicyFilterCriteriaNotableEventCountList(this, "notable_event_count", true);
  public get notableEventCount() {
    return this._notableEventCount;
  }
  public putNotableEventCount(value: ItsiNotableEventAggregationPolicyFilterCriteriaNotableEventCount[] | cdktf.IResolvable) {
    this._notableEventCount.internalValue = value;
  }
  public resetNotableEventCount() {
    this._notableEventCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notableEventCountInput() {
    return this._notableEventCount.internalValue;
  }

  // pause - computed: false, optional: true, required: false
  private _pause = new ItsiNotableEventAggregationPolicyFilterCriteriaPauseList(this, "pause", true);
  public get pause() {
    return this._pause;
  }
  public putPause(value: ItsiNotableEventAggregationPolicyFilterCriteriaPause[] | cdktf.IResolvable) {
    this._pause.internalValue = value;
  }
  public resetPause() {
    this._pause.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseInput() {
    return this._pause.internalValue;
  }
}
export interface ItsiNotableEventAggregationPolicyRuleActionsItemCustom {
  /**
  * JSON-encoded custom action configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#config ItsiNotableEventAggregationPolicy#config}
  */
  readonly config: string;
  /**
  * The name of the custom action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#type ItsiNotableEventAggregationPolicy#type}
  */
  readonly type: string;
}

export function itsiNotableEventAggregationPolicyRuleActionsItemCustomToTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActionsItemCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function itsiNotableEventAggregationPolicyRuleActionsItemCustomToHclTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActionsItemCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyRuleActionsItemCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyRuleActionsItemCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyRuleActionsItemCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ItsiNotableEventAggregationPolicyRuleActionsItemCustomList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyRuleActionsItemCustom[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyRuleActionsItemCustomOutputReference {
    return new ItsiNotableEventAggregationPolicyRuleActionsItemCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyRuleActionsItem {
  /**
  * Change the owner of the episode to the specified value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#change_owner ItsiNotableEventAggregationPolicy#change_owner}
  */
  readonly changeOwner?: string;
  /**
  * Change the severity of the episode to the specified value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#change_severity ItsiNotableEventAggregationPolicy#change_severity}
  */
  readonly changeSeverity?: string;
  /**
  * Change the status of the episode to the specified value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#change_status ItsiNotableEventAggregationPolicy#change_status}
  */
  readonly changeStatus?: string;
  /**
  * Add a comment to the episode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#comment ItsiNotableEventAggregationPolicy#comment}
  */
  readonly comment?: string;
  /**
  * ExecutionCriteria is essentially the criteria answering: "on which events is ActionItem applicable".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#execute_on ItsiNotableEventAggregationPolicy#execute_on}
  */
  readonly executeOn?: string;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#custom ItsiNotableEventAggregationPolicy#custom}
  */
  readonly custom?: ItsiNotableEventAggregationPolicyRuleActionsItemCustom[] | cdktf.IResolvable;
}

export function itsiNotableEventAggregationPolicyRuleActionsItemToTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActionsItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_owner: cdktf.stringToTerraform(struct!.changeOwner),
    change_severity: cdktf.stringToTerraform(struct!.changeSeverity),
    change_status: cdktf.stringToTerraform(struct!.changeStatus),
    comment: cdktf.stringToTerraform(struct!.comment),
    execute_on: cdktf.stringToTerraform(struct!.executeOn),
    custom: cdktf.listMapper(itsiNotableEventAggregationPolicyRuleActionsItemCustomToTerraform, true)(struct!.custom),
  }
}


export function itsiNotableEventAggregationPolicyRuleActionsItemToHclTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActionsItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    change_owner: {
      value: cdktf.stringToHclTerraform(struct!.changeOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    change_severity: {
      value: cdktf.stringToHclTerraform(struct!.changeSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    change_status: {
      value: cdktf.stringToHclTerraform(struct!.changeStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execute_on: {
      value: cdktf.stringToHclTerraform(struct!.executeOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyRuleActionsItemCustomToHclTerraform, true)(struct!.custom),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyRuleActionsItemCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyRuleActionsItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyRuleActionsItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeOwner = this._changeOwner;
    }
    if (this._changeSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeSeverity = this._changeSeverity;
    }
    if (this._changeStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeStatus = this._changeStatus;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._executeOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOn = this._executeOn;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyRuleActionsItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._changeOwner = undefined;
      this._changeSeverity = undefined;
      this._changeStatus = undefined;
      this._comment = undefined;
      this._executeOn = undefined;
      this._custom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._changeOwner = value.changeOwner;
      this._changeSeverity = value.changeSeverity;
      this._changeStatus = value.changeStatus;
      this._comment = value.comment;
      this._executeOn = value.executeOn;
      this._custom.internalValue = value.custom;
    }
  }

  // change_owner - computed: false, optional: true, required: false
  private _changeOwner?: string; 
  public get changeOwner() {
    return this.getStringAttribute('change_owner');
  }
  public set changeOwner(value: string) {
    this._changeOwner = value;
  }
  public resetChangeOwner() {
    this._changeOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeOwnerInput() {
    return this._changeOwner;
  }

  // change_severity - computed: false, optional: true, required: false
  private _changeSeverity?: string; 
  public get changeSeverity() {
    return this.getStringAttribute('change_severity');
  }
  public set changeSeverity(value: string) {
    this._changeSeverity = value;
  }
  public resetChangeSeverity() {
    this._changeSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeSeverityInput() {
    return this._changeSeverity;
  }

  // change_status - computed: false, optional: true, required: false
  private _changeStatus?: string; 
  public get changeStatus() {
    return this.getStringAttribute('change_status');
  }
  public set changeStatus(value: string) {
    this._changeStatus = value;
  }
  public resetChangeStatus() {
    this._changeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeStatusInput() {
    return this._changeStatus;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // execute_on - computed: true, optional: true, required: false
  private _executeOn?: string; 
  public get executeOn() {
    return this.getStringAttribute('execute_on');
  }
  public set executeOn(value: string) {
    this._executeOn = value;
  }
  public resetExecuteOn() {
    this._executeOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnInput() {
    return this._executeOn;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new ItsiNotableEventAggregationPolicyRuleActionsItemCustomList(this, "custom", true);
  public get custom() {
    return this._custom;
  }
  public putCustom(value: ItsiNotableEventAggregationPolicyRuleActionsItemCustom[] | cdktf.IResolvable) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }
}

export class ItsiNotableEventAggregationPolicyRuleActionsItemList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyRuleActionsItem[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyRuleActionsItemOutputReference {
    return new ItsiNotableEventAggregationPolicyRuleActionsItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyRuleActions {
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#item ItsiNotableEventAggregationPolicy#item}
  */
  readonly item?: ItsiNotableEventAggregationPolicyRuleActionsItem[] | cdktf.IResolvable;
}

export function itsiNotableEventAggregationPolicyRuleActionsToTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    item: cdktf.listMapper(itsiNotableEventAggregationPolicyRuleActionsItemToTerraform, true)(struct!.item),
  }
}


export function itsiNotableEventAggregationPolicyRuleActionsToHclTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    item: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyRuleActionsItemToHclTerraform, true)(struct!.item),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyRuleActionsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyRuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyRuleActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyRuleActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._item.internalValue = value.item;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // item - computed: false, optional: true, required: false
  private _item = new ItsiNotableEventAggregationPolicyRuleActionsItemList(this, "item", true);
  public get item() {
    return this._item;
  }
  public putItem(value: ItsiNotableEventAggregationPolicyRuleActionsItem[] | cdktf.IResolvable) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class ItsiNotableEventAggregationPolicyRuleActionsList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyRuleActions[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyRuleActionsOutputReference {
    return new ItsiNotableEventAggregationPolicyRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteria {
}

export function itsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteriaToTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function itsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteriaToHclTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ItsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }
}

export class ItsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteriaList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteria[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteriaOutputReference {
    return new ItsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#field ItsiNotableEventAggregationPolicy#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#operator ItsiNotableEventAggregationPolicy#operator}
  */
  readonly operator: string;
  /**
  * A wildcard pattern to match against a field value. E.g.: "*"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#value ItsiNotableEventAggregationPolicy#value}
  */
  readonly value: string;
}

export function itsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventFieldToTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function itsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventFieldToHclTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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

export class ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventFieldList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventField[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventFieldOutputReference {
    return new ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyRuleActivationCriteriaClause {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#condition ItsiNotableEventAggregationPolicy#condition}
  */
  readonly condition?: string;
  /**
  * notable_event_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#notable_event_field ItsiNotableEventAggregationPolicy#notable_event_field}
  */
  readonly notableEventField?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventField[] | cdktf.IResolvable;
}

export function itsiNotableEventAggregationPolicyRuleActivationCriteriaClauseToTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaClause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    notable_event_field: cdktf.listMapper(itsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventFieldToTerraform, true)(struct!.notableEventField),
  }
}


export function itsiNotableEventAggregationPolicyRuleActivationCriteriaClauseToHclTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaClause | cdktf.IResolvable): any {
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
    notable_event_field: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventFieldToHclTerraform, true)(struct!.notableEventField),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyRuleActivationCriteriaClause | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._notableEventField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notableEventField = this._notableEventField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyRuleActivationCriteriaClause | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._notableEventField.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._notableEventField.internalValue = value.notableEventField;
    }
  }

  // condition - computed: true, optional: true, required: false
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

  // notable_event_field - computed: false, optional: true, required: false
  private _notableEventField = new ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventFieldList(this, "notable_event_field", true);
  public get notableEventField() {
    return this._notableEventField;
  }
  public putNotableEventField(value: ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseNotableEventField[] | cdktf.IResolvable) {
    this._notableEventField.internalValue = value;
  }
  public resetNotableEventField() {
    this._notableEventField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notableEventFieldInput() {
    return this._notableEventField.internalValue;
  }
}

export class ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyRuleActivationCriteriaClause[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseOutputReference {
    return new ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyRuleActivationCriteriaDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#limit ItsiNotableEventAggregationPolicy#limit}
  */
  readonly limit: number;
}

export function itsiNotableEventAggregationPolicyRuleActivationCriteriaDurationToTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
  }
}


export function itsiNotableEventAggregationPolicyRuleActivationCriteriaDurationToHclTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyRuleActivationCriteriaDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyRuleActivationCriteriaDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyRuleActivationCriteriaDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
    }
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}

export class ItsiNotableEventAggregationPolicyRuleActivationCriteriaDurationList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyRuleActivationCriteriaDuration[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyRuleActivationCriteriaDurationOutputReference {
    return new ItsiNotableEventAggregationPolicyRuleActivationCriteriaDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#limit ItsiNotableEventAggregationPolicy#limit}
  */
  readonly limit: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#operator ItsiNotableEventAggregationPolicy#operator}
  */
  readonly operator: string;
}

export function itsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCountToTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function itsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCountToHclTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._operator = value.operator;
    }
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class ItsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCountList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCount[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCountOutputReference {
    return new ItsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyRuleActivationCriteriaPause {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#limit ItsiNotableEventAggregationPolicy#limit}
  */
  readonly limit: number;
}

export function itsiNotableEventAggregationPolicyRuleActivationCriteriaPauseToTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaPause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
  }
}


export function itsiNotableEventAggregationPolicyRuleActivationCriteriaPauseToHclTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaPause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyRuleActivationCriteriaPauseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyRuleActivationCriteriaPause | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyRuleActivationCriteriaPause | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
    }
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}

export class ItsiNotableEventAggregationPolicyRuleActivationCriteriaPauseList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyRuleActivationCriteriaPause[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyRuleActivationCriteriaPauseOutputReference {
    return new ItsiNotableEventAggregationPolicyRuleActivationCriteriaPauseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyRuleActivationCriteria {
  /**
  * breaking_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#breaking_criteria ItsiNotableEventAggregationPolicy#breaking_criteria}
  */
  readonly breakingCriteria?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteria[] | cdktf.IResolvable;
  /**
  * clause block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#clause ItsiNotableEventAggregationPolicy#clause}
  */
  readonly clause?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaClause[] | cdktf.IResolvable;
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#duration ItsiNotableEventAggregationPolicy#duration}
  */
  readonly duration?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaDuration[] | cdktf.IResolvable;
  /**
  * notable_event_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#notable_event_count ItsiNotableEventAggregationPolicy#notable_event_count}
  */
  readonly notableEventCount?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCount[] | cdktf.IResolvable;
  /**
  * pause block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#pause ItsiNotableEventAggregationPolicy#pause}
  */
  readonly pause?: ItsiNotableEventAggregationPolicyRuleActivationCriteriaPause[] | cdktf.IResolvable;
}

export function itsiNotableEventAggregationPolicyRuleActivationCriteriaToTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActivationCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breaking_criteria: cdktf.listMapper(itsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteriaToTerraform, true)(struct!.breakingCriteria),
    clause: cdktf.listMapper(itsiNotableEventAggregationPolicyRuleActivationCriteriaClauseToTerraform, true)(struct!.clause),
    duration: cdktf.listMapper(itsiNotableEventAggregationPolicyRuleActivationCriteriaDurationToTerraform, true)(struct!.duration),
    notable_event_count: cdktf.listMapper(itsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCountToTerraform, true)(struct!.notableEventCount),
    pause: cdktf.listMapper(itsiNotableEventAggregationPolicyRuleActivationCriteriaPauseToTerraform, true)(struct!.pause),
  }
}


export function itsiNotableEventAggregationPolicyRuleActivationCriteriaToHclTerraform(struct?: ItsiNotableEventAggregationPolicyRuleActivationCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breaking_criteria: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteriaToHclTerraform, true)(struct!.breakingCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteriaList",
    },
    clause: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyRuleActivationCriteriaClauseToHclTerraform, true)(struct!.clause),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseList",
    },
    duration: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyRuleActivationCriteriaDurationToHclTerraform, true)(struct!.duration),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyRuleActivationCriteriaDurationList",
    },
    notable_event_count: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCountToHclTerraform, true)(struct!.notableEventCount),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCountList",
    },
    pause: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyRuleActivationCriteriaPauseToHclTerraform, true)(struct!.pause),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiNotableEventAggregationPolicyRuleActivationCriteriaPauseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyRuleActivationCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItsiNotableEventAggregationPolicyRuleActivationCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakingCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakingCriteria = this._breakingCriteria?.internalValue;
    }
    if (this._clause?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clause = this._clause?.internalValue;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._notableEventCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notableEventCount = this._notableEventCount?.internalValue;
    }
    if (this._pause?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pause = this._pause?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyRuleActivationCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._breakingCriteria.internalValue = undefined;
      this._clause.internalValue = undefined;
      this._duration.internalValue = undefined;
      this._notableEventCount.internalValue = undefined;
      this._pause.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._breakingCriteria.internalValue = value.breakingCriteria;
      this._clause.internalValue = value.clause;
      this._duration.internalValue = value.duration;
      this._notableEventCount.internalValue = value.notableEventCount;
      this._pause.internalValue = value.pause;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // breaking_criteria - computed: false, optional: true, required: false
  private _breakingCriteria = new ItsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteriaList(this, "breaking_criteria", true);
  public get breakingCriteria() {
    return this._breakingCriteria;
  }
  public putBreakingCriteria(value: ItsiNotableEventAggregationPolicyRuleActivationCriteriaBreakingCriteria[] | cdktf.IResolvable) {
    this._breakingCriteria.internalValue = value;
  }
  public resetBreakingCriteria() {
    this._breakingCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakingCriteriaInput() {
    return this._breakingCriteria.internalValue;
  }

  // clause - computed: false, optional: true, required: false
  private _clause = new ItsiNotableEventAggregationPolicyRuleActivationCriteriaClauseList(this, "clause", true);
  public get clause() {
    return this._clause;
  }
  public putClause(value: ItsiNotableEventAggregationPolicyRuleActivationCriteriaClause[] | cdktf.IResolvable) {
    this._clause.internalValue = value;
  }
  public resetClause() {
    this._clause.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clauseInput() {
    return this._clause.internalValue;
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new ItsiNotableEventAggregationPolicyRuleActivationCriteriaDurationList(this, "duration", true);
  public get duration() {
    return this._duration;
  }
  public putDuration(value: ItsiNotableEventAggregationPolicyRuleActivationCriteriaDuration[] | cdktf.IResolvable) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // notable_event_count - computed: false, optional: true, required: false
  private _notableEventCount = new ItsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCountList(this, "notable_event_count", true);
  public get notableEventCount() {
    return this._notableEventCount;
  }
  public putNotableEventCount(value: ItsiNotableEventAggregationPolicyRuleActivationCriteriaNotableEventCount[] | cdktf.IResolvable) {
    this._notableEventCount.internalValue = value;
  }
  public resetNotableEventCount() {
    this._notableEventCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notableEventCountInput() {
    return this._notableEventCount.internalValue;
  }

  // pause - computed: false, optional: true, required: false
  private _pause = new ItsiNotableEventAggregationPolicyRuleActivationCriteriaPauseList(this, "pause", true);
  public get pause() {
    return this._pause;
  }
  public putPause(value: ItsiNotableEventAggregationPolicyRuleActivationCriteriaPause[] | cdktf.IResolvable) {
    this._pause.internalValue = value;
  }
  public resetPause() {
    this._pause.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseInput() {
    return this._pause.internalValue;
  }
}
export interface ItsiNotableEventAggregationPolicyRule {
  /**
  * The description of the notable event aggregation policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#description ItsiNotableEventAggregationPolicy#description}
  */
  readonly description?: string;
  /**
  * The priority of the notable event aggregation policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#priority ItsiNotableEventAggregationPolicy#priority}
  */
  readonly priority?: number;
  /**
  * The title of the notable event aggregation policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#title ItsiNotableEventAggregationPolicy#title}
  */
  readonly title?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#actions ItsiNotableEventAggregationPolicy#actions}
  */
  readonly actions?: ItsiNotableEventAggregationPolicyRuleActions[] | cdktf.IResolvable;
  /**
  * activation_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#activation_criteria ItsiNotableEventAggregationPolicy#activation_criteria}
  */
  readonly activationCriteria?: ItsiNotableEventAggregationPolicyRuleActivationCriteria;
}

export function itsiNotableEventAggregationPolicyRuleToTerraform(struct?: ItsiNotableEventAggregationPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    priority: cdktf.numberToTerraform(struct!.priority),
    title: cdktf.stringToTerraform(struct!.title),
    actions: cdktf.listMapper(itsiNotableEventAggregationPolicyRuleActionsToTerraform, true)(struct!.actions),
    activation_criteria: itsiNotableEventAggregationPolicyRuleActivationCriteriaToTerraform(struct!.activationCriteria),
  }
}


export function itsiNotableEventAggregationPolicyRuleToHclTerraform(struct?: ItsiNotableEventAggregationPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    actions: {
      value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyRuleActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "ItsiNotableEventAggregationPolicyRuleActionsList",
    },
    activation_criteria: {
      value: itsiNotableEventAggregationPolicyRuleActivationCriteriaToHclTerraform(struct!.activationCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "ItsiNotableEventAggregationPolicyRuleActivationCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiNotableEventAggregationPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiNotableEventAggregationPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._activationCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationCriteria = this._activationCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._priority = undefined;
      this._title = undefined;
      this._actions.internalValue = undefined;
      this._activationCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._priority = value.priority;
      this._title = value.title;
      this._actions.internalValue = value.actions;
      this._activationCriteria.internalValue = value.activationCriteria;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new ItsiNotableEventAggregationPolicyRuleActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: ItsiNotableEventAggregationPolicyRuleActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // activation_criteria - computed: false, optional: true, required: false
  private _activationCriteria = new ItsiNotableEventAggregationPolicyRuleActivationCriteriaOutputReference(this, "activation_criteria");
  public get activationCriteria() {
    return this._activationCriteria;
  }
  public putActivationCriteria(value: ItsiNotableEventAggregationPolicyRuleActivationCriteria) {
    this._activationCriteria.internalValue = value;
  }
  public resetActivationCriteria() {
    this._activationCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationCriteriaInput() {
    return this._activationCriteria.internalValue;
  }
}

export class ItsiNotableEventAggregationPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : ItsiNotableEventAggregationPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): ItsiNotableEventAggregationPolicyRuleOutputReference {
    return new ItsiNotableEventAggregationPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiNotableEventAggregationPolicyTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#create ItsiNotableEventAggregationPolicy#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#delete ItsiNotableEventAggregationPolicy#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#read ItsiNotableEventAggregationPolicy#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#update ItsiNotableEventAggregationPolicy#update}
  */
  readonly update?: string;
}

export function itsiNotableEventAggregationPolicyTimeoutsToTerraform(struct?: ItsiNotableEventAggregationPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function itsiNotableEventAggregationPolicyTimeoutsToHclTerraform(struct?: ItsiNotableEventAggregationPolicyTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class ItsiNotableEventAggregationPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItsiNotableEventAggregationPolicyTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiNotableEventAggregationPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy itsi_notable_event_aggregation_policy}
*/
export class ItsiNotableEventAggregationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "itsi_notable_event_aggregation_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ItsiNotableEventAggregationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ItsiNotableEventAggregationPolicy to import
  * @param importFromId The id of the existing ItsiNotableEventAggregationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ItsiNotableEventAggregationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "itsi_notable_event_aggregation_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_notable_event_aggregation_policy itsi_notable_event_aggregation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ItsiNotableEventAggregationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ItsiNotableEventAggregationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'itsi_notable_event_aggregation_policy',
      terraformGeneratorMetadata: {
        providerName: 'splunk-itsi',
        providerVersion: '2.2.4',
        providerVersionConstraint: '2.2.4'
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
    this._disabled = config.disabled;
    this._entityFactorEnabled = config.entityFactorEnabled;
    this._groupAssignee = config.groupAssignee;
    this._groupCustomInstruction = config.groupCustomInstruction;
    this._groupDashboard = config.groupDashboard;
    this._groupDashboardContext = config.groupDashboardContext;
    this._groupDescription = config.groupDescription;
    this._groupInstruction = config.groupInstruction;
    this._groupSeverity = config.groupSeverity;
    this._groupStatus = config.groupStatus;
    this._groupTitle = config.groupTitle;
    this._priority = config.priority;
    this._runTimeBasedActionsOnce = config.runTimeBasedActionsOnce;
    this._serviceTopologyEnabled = config.serviceTopologyEnabled;
    this._splitByField = config.splitByField;
    this._title = config.title;
    this._breakingCriteria.internalValue = config.breakingCriteria;
    this._filterCriteria.internalValue = config.filterCriteria;
    this._rule.internalValue = config.rule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // entity_factor_enabled - computed: true, optional: true, required: false
  private _entityFactorEnabled?: boolean | cdktf.IResolvable; 
  public get entityFactorEnabled() {
    return this.getBooleanAttribute('entity_factor_enabled');
  }
  public set entityFactorEnabled(value: boolean | cdktf.IResolvable) {
    this._entityFactorEnabled = value;
  }
  public resetEntityFactorEnabled() {
    this._entityFactorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityFactorEnabledInput() {
    return this._entityFactorEnabled;
  }

  // group_assignee - computed: true, optional: true, required: false
  private _groupAssignee?: string; 
  public get groupAssignee() {
    return this.getStringAttribute('group_assignee');
  }
  public set groupAssignee(value: string) {
    this._groupAssignee = value;
  }
  public resetGroupAssignee() {
    this._groupAssignee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAssigneeInput() {
    return this._groupAssignee;
  }

  // group_custom_instruction - computed: true, optional: true, required: false
  private _groupCustomInstruction?: string; 
  public get groupCustomInstruction() {
    return this.getStringAttribute('group_custom_instruction');
  }
  public set groupCustomInstruction(value: string) {
    this._groupCustomInstruction = value;
  }
  public resetGroupCustomInstruction() {
    this._groupCustomInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupCustomInstructionInput() {
    return this._groupCustomInstruction;
  }

  // group_dashboard - computed: true, optional: true, required: false
  private _groupDashboard?: string; 
  public get groupDashboard() {
    return this.getStringAttribute('group_dashboard');
  }
  public set groupDashboard(value: string) {
    this._groupDashboard = value;
  }
  public resetGroupDashboard() {
    this._groupDashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDashboardInput() {
    return this._groupDashboard;
  }

  // group_dashboard_context - computed: true, optional: true, required: false
  private _groupDashboardContext?: string; 
  public get groupDashboardContext() {
    return this.getStringAttribute('group_dashboard_context');
  }
  public set groupDashboardContext(value: string) {
    this._groupDashboardContext = value;
  }
  public resetGroupDashboardContext() {
    this._groupDashboardContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDashboardContextInput() {
    return this._groupDashboardContext;
  }

  // group_description - computed: true, optional: true, required: false
  private _groupDescription?: string; 
  public get groupDescription() {
    return this.getStringAttribute('group_description');
  }
  public set groupDescription(value: string) {
    this._groupDescription = value;
  }
  public resetGroupDescription() {
    this._groupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDescriptionInput() {
    return this._groupDescription;
  }

  // group_instruction - computed: true, optional: true, required: false
  private _groupInstruction?: string; 
  public get groupInstruction() {
    return this.getStringAttribute('group_instruction');
  }
  public set groupInstruction(value: string) {
    this._groupInstruction = value;
  }
  public resetGroupInstruction() {
    this._groupInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInstructionInput() {
    return this._groupInstruction;
  }

  // group_severity - computed: true, optional: true, required: false
  private _groupSeverity?: string; 
  public get groupSeverity() {
    return this.getStringAttribute('group_severity');
  }
  public set groupSeverity(value: string) {
    this._groupSeverity = value;
  }
  public resetGroupSeverity() {
    this._groupSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSeverityInput() {
    return this._groupSeverity;
  }

  // group_status - computed: true, optional: true, required: false
  private _groupStatus?: string; 
  public get groupStatus() {
    return this.getStringAttribute('group_status');
  }
  public set groupStatus(value: string) {
    this._groupStatus = value;
  }
  public resetGroupStatus() {
    this._groupStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupStatusInput() {
    return this._groupStatus;
  }

  // group_title - computed: true, optional: true, required: false
  private _groupTitle?: string; 
  public get groupTitle() {
    return this.getStringAttribute('group_title');
  }
  public set groupTitle(value: string) {
    this._groupTitle = value;
  }
  public resetGroupTitle() {
    this._groupTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTitleInput() {
    return this._groupTitle;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // run_time_based_actions_once - computed: true, optional: true, required: false
  private _runTimeBasedActionsOnce?: boolean | cdktf.IResolvable; 
  public get runTimeBasedActionsOnce() {
    return this.getBooleanAttribute('run_time_based_actions_once');
  }
  public set runTimeBasedActionsOnce(value: boolean | cdktf.IResolvable) {
    this._runTimeBasedActionsOnce = value;
  }
  public resetRunTimeBasedActionsOnce() {
    this._runTimeBasedActionsOnce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTimeBasedActionsOnceInput() {
    return this._runTimeBasedActionsOnce;
  }

  // service_topology_enabled - computed: true, optional: true, required: false
  private _serviceTopologyEnabled?: boolean | cdktf.IResolvable; 
  public get serviceTopologyEnabled() {
    return this.getBooleanAttribute('service_topology_enabled');
  }
  public set serviceTopologyEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceTopologyEnabled = value;
  }
  public resetServiceTopologyEnabled() {
    this._serviceTopologyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTopologyEnabledInput() {
    return this._serviceTopologyEnabled;
  }

  // split_by_field - computed: true, optional: true, required: false
  private _splitByField?: string[]; 
  public get splitByField() {
    return cdktf.Fn.tolist(this.getListAttribute('split_by_field'));
  }
  public set splitByField(value: string[]) {
    this._splitByField = value;
  }
  public resetSplitByField() {
    this._splitByField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitByFieldInput() {
    return this._splitByField;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // breaking_criteria - computed: false, optional: true, required: false
  private _breakingCriteria = new ItsiNotableEventAggregationPolicyBreakingCriteriaOutputReference(this, "breaking_criteria");
  public get breakingCriteria() {
    return this._breakingCriteria;
  }
  public putBreakingCriteria(value: ItsiNotableEventAggregationPolicyBreakingCriteria) {
    this._breakingCriteria.internalValue = value;
  }
  public resetBreakingCriteria() {
    this._breakingCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakingCriteriaInput() {
    return this._breakingCriteria.internalValue;
  }

  // filter_criteria - computed: false, optional: true, required: false
  private _filterCriteria = new ItsiNotableEventAggregationPolicyFilterCriteriaOutputReference(this, "filter_criteria");
  public get filterCriteria() {
    return this._filterCriteria;
  }
  public putFilterCriteria(value: ItsiNotableEventAggregationPolicyFilterCriteria) {
    this._filterCriteria.internalValue = value;
  }
  public resetFilterCriteria() {
    this._filterCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCriteriaInput() {
    return this._filterCriteria.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new ItsiNotableEventAggregationPolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ItsiNotableEventAggregationPolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ItsiNotableEventAggregationPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ItsiNotableEventAggregationPolicyTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      entity_factor_enabled: cdktf.booleanToTerraform(this._entityFactorEnabled),
      group_assignee: cdktf.stringToTerraform(this._groupAssignee),
      group_custom_instruction: cdktf.stringToTerraform(this._groupCustomInstruction),
      group_dashboard: cdktf.stringToTerraform(this._groupDashboard),
      group_dashboard_context: cdktf.stringToTerraform(this._groupDashboardContext),
      group_description: cdktf.stringToTerraform(this._groupDescription),
      group_instruction: cdktf.stringToTerraform(this._groupInstruction),
      group_severity: cdktf.stringToTerraform(this._groupSeverity),
      group_status: cdktf.stringToTerraform(this._groupStatus),
      group_title: cdktf.stringToTerraform(this._groupTitle),
      priority: cdktf.numberToTerraform(this._priority),
      run_time_based_actions_once: cdktf.booleanToTerraform(this._runTimeBasedActionsOnce),
      service_topology_enabled: cdktf.booleanToTerraform(this._serviceTopologyEnabled),
      split_by_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._splitByField),
      title: cdktf.stringToTerraform(this._title),
      breaking_criteria: itsiNotableEventAggregationPolicyBreakingCriteriaToTerraform(this._breakingCriteria.internalValue),
      filter_criteria: itsiNotableEventAggregationPolicyFilterCriteriaToTerraform(this._filterCriteria.internalValue),
      rule: cdktf.listMapper(itsiNotableEventAggregationPolicyRuleToTerraform, true)(this._rule.internalValue),
      timeouts: itsiNotableEventAggregationPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entity_factor_enabled: {
        value: cdktf.booleanToHclTerraform(this._entityFactorEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_assignee: {
        value: cdktf.stringToHclTerraform(this._groupAssignee),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_custom_instruction: {
        value: cdktf.stringToHclTerraform(this._groupCustomInstruction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_dashboard: {
        value: cdktf.stringToHclTerraform(this._groupDashboard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_dashboard_context: {
        value: cdktf.stringToHclTerraform(this._groupDashboardContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_description: {
        value: cdktf.stringToHclTerraform(this._groupDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_instruction: {
        value: cdktf.stringToHclTerraform(this._groupInstruction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_severity: {
        value: cdktf.stringToHclTerraform(this._groupSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_status: {
        value: cdktf.stringToHclTerraform(this._groupStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_title: {
        value: cdktf.stringToHclTerraform(this._groupTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      run_time_based_actions_once: {
        value: cdktf.booleanToHclTerraform(this._runTimeBasedActionsOnce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_topology_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceTopologyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      split_by_field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._splitByField),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      breaking_criteria: {
        value: itsiNotableEventAggregationPolicyBreakingCriteriaToHclTerraform(this._breakingCriteria.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ItsiNotableEventAggregationPolicyBreakingCriteria",
      },
      filter_criteria: {
        value: itsiNotableEventAggregationPolicyFilterCriteriaToHclTerraform(this._filterCriteria.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ItsiNotableEventAggregationPolicyFilterCriteria",
      },
      rule: {
        value: cdktf.listMapperHcl(itsiNotableEventAggregationPolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ItsiNotableEventAggregationPolicyRuleList",
      },
      timeouts: {
        value: itsiNotableEventAggregationPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ItsiNotableEventAggregationPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
