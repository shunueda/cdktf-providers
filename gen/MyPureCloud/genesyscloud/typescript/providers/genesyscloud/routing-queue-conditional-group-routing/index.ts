// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_queue_conditional_group_routing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingQueueConditionalGroupRoutingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_queue_conditional_group_routing#id RoutingQueueConditionalGroupRouting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Id of the routing queue to which the rules belong
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_queue_conditional_group_routing#queue_id RoutingQueueConditionalGroupRouting#queue_id}
  */
  readonly queueId: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_queue_conditional_group_routing#rules RoutingQueueConditionalGroupRouting#rules}
  */
  readonly rules: RoutingQueueConditionalGroupRoutingRulesA[] | cdktf.IResolvable;
}
export interface RoutingQueueConditionalGroupRoutingRulesGroupsA {
  /**
  * ID (GUID) for Group, SkillGroup, Team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_queue_conditional_group_routing#member_group_id RoutingQueueConditionalGroupRouting#member_group_id}
  */
  readonly memberGroupId: string;
  /**
  * The type of the member group. Accepted values: TEAM, GROUP, SKILLGROUP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_queue_conditional_group_routing#member_group_type RoutingQueueConditionalGroupRouting#member_group_type}
  */
  readonly memberGroupType: string;
}

export function routingQueueConditionalGroupRoutingRulesGroupsAToTerraform(struct?: RoutingQueueConditionalGroupRoutingRulesGroupsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_group_id: cdktf.stringToTerraform(struct!.memberGroupId),
    member_group_type: cdktf.stringToTerraform(struct!.memberGroupType),
  }
}


export function routingQueueConditionalGroupRoutingRulesGroupsAToHclTerraform(struct?: RoutingQueueConditionalGroupRoutingRulesGroupsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_group_id: {
      value: cdktf.stringToHclTerraform(struct!.memberGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_group_type: {
      value: cdktf.stringToHclTerraform(struct!.memberGroupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueConditionalGroupRoutingRulesGroupsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueConditionalGroupRoutingRulesGroupsA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberGroupId = this._memberGroupId;
    }
    if (this._memberGroupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberGroupType = this._memberGroupType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueConditionalGroupRoutingRulesGroupsA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberGroupId = undefined;
      this._memberGroupType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberGroupId = value.memberGroupId;
      this._memberGroupType = value.memberGroupType;
    }
  }

  // member_group_id - computed: false, optional: false, required: true
  private _memberGroupId?: string; 
  public get memberGroupId() {
    return this.getStringAttribute('member_group_id');
  }
  public set memberGroupId(value: string) {
    this._memberGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberGroupIdInput() {
    return this._memberGroupId;
  }

  // member_group_type - computed: false, optional: false, required: true
  private _memberGroupType?: string; 
  public get memberGroupType() {
    return this.getStringAttribute('member_group_type');
  }
  public set memberGroupType(value: string) {
    this._memberGroupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberGroupTypeInput() {
    return this._memberGroupType;
  }
}

export class RoutingQueueConditionalGroupRoutingRulesGroupsAList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueConditionalGroupRoutingRulesGroupsA[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueConditionalGroupRoutingRulesGroupsAOutputReference {
    return new RoutingQueueConditionalGroupRoutingRulesGroupsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingQueueConditionalGroupRoutingRulesA {
  /**
  * The limit value, beyond which a rule evaluates as true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_queue_conditional_group_routing#condition_value RoutingQueueConditionalGroupRouting#condition_value}
  */
  readonly conditionValue: number;
  /**
  * The queue being evaluated for this rule. For rule 1, this is always the current queue, so should not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_queue_conditional_group_routing#evaluated_queue_id RoutingQueueConditionalGroupRouting#evaluated_queue_id}
  */
  readonly evaluatedQueueId?: string;
  /**
  * The queue metric being evaluated. Valid values: EstimatedWaitTime, ServiceLevel. Defaults to `EstimatedWaitTime`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_queue_conditional_group_routing#metric RoutingQueueConditionalGroupRouting#metric}
  */
  readonly metric?: string;
  /**
  * The operator that compares the actual value against the condition value. Valid values: GreaterThan, GreaterThanOrEqualTo, LessThan, LessThanOrEqualTo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_queue_conditional_group_routing#operator RoutingQueueConditionalGroupRouting#operator}
  */
  readonly operator: string;
  /**
  * The number of seconds to wait in this rule, if it evaluates as true, before evaluating the next rule. For the final rule, this is ignored, so need not be specified. Defaults to `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_queue_conditional_group_routing#wait_seconds RoutingQueueConditionalGroupRouting#wait_seconds}
  */
  readonly waitSeconds?: number;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_queue_conditional_group_routing#groups RoutingQueueConditionalGroupRouting#groups}
  */
  readonly groups: RoutingQueueConditionalGroupRoutingRulesGroupsA[] | cdktf.IResolvable;
}

export function routingQueueConditionalGroupRoutingRulesAToTerraform(struct?: RoutingQueueConditionalGroupRoutingRulesA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_value: cdktf.numberToTerraform(struct!.conditionValue),
    evaluated_queue_id: cdktf.stringToTerraform(struct!.evaluatedQueueId),
    metric: cdktf.stringToTerraform(struct!.metric),
    operator: cdktf.stringToTerraform(struct!.operator),
    wait_seconds: cdktf.numberToTerraform(struct!.waitSeconds),
    groups: cdktf.listMapper(routingQueueConditionalGroupRoutingRulesGroupsAToTerraform, true)(struct!.groups),
  }
}


export function routingQueueConditionalGroupRoutingRulesAToHclTerraform(struct?: RoutingQueueConditionalGroupRoutingRulesA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_value: {
      value: cdktf.numberToHclTerraform(struct!.conditionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evaluated_queue_id: {
      value: cdktf.stringToHclTerraform(struct!.evaluatedQueueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
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
    wait_seconds: {
      value: cdktf.numberToHclTerraform(struct!.waitSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    groups: {
      value: cdktf.listMapperHcl(routingQueueConditionalGroupRoutingRulesGroupsAToHclTerraform, true)(struct!.groups),
      isBlock: true,
      type: "set",
      storageClassType: "RoutingQueueConditionalGroupRoutingRulesGroupsAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueConditionalGroupRoutingRulesAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueConditionalGroupRoutingRulesA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionValue = this._conditionValue;
    }
    if (this._evaluatedQueueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatedQueueId = this._evaluatedQueueId;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._waitSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitSeconds = this._waitSeconds;
    }
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueConditionalGroupRoutingRulesA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionValue = undefined;
      this._evaluatedQueueId = undefined;
      this._metric = undefined;
      this._operator = undefined;
      this._waitSeconds = undefined;
      this._groups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionValue = value.conditionValue;
      this._evaluatedQueueId = value.evaluatedQueueId;
      this._metric = value.metric;
      this._operator = value.operator;
      this._waitSeconds = value.waitSeconds;
      this._groups.internalValue = value.groups;
    }
  }

  // condition_value - computed: false, optional: false, required: true
  private _conditionValue?: number; 
  public get conditionValue() {
    return this.getNumberAttribute('condition_value');
  }
  public set conditionValue(value: number) {
    this._conditionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionValueInput() {
    return this._conditionValue;
  }

  // evaluated_queue_id - computed: false, optional: true, required: false
  private _evaluatedQueueId?: string; 
  public get evaluatedQueueId() {
    return this.getStringAttribute('evaluated_queue_id');
  }
  public set evaluatedQueueId(value: string) {
    this._evaluatedQueueId = value;
  }
  public resetEvaluatedQueueId() {
    this._evaluatedQueueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatedQueueIdInput() {
    return this._evaluatedQueueId;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // wait_seconds - computed: false, optional: true, required: false
  private _waitSeconds?: number; 
  public get waitSeconds() {
    return this.getNumberAttribute('wait_seconds');
  }
  public set waitSeconds(value: number) {
    this._waitSeconds = value;
  }
  public resetWaitSeconds() {
    this._waitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitSecondsInput() {
    return this._waitSeconds;
  }

  // groups - computed: false, optional: false, required: true
  private _groups = new RoutingQueueConditionalGroupRoutingRulesGroupsAList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: RoutingQueueConditionalGroupRoutingRulesGroupsA[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }
}

export class RoutingQueueConditionalGroupRoutingRulesAList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueConditionalGroupRoutingRulesA[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueConditionalGroupRoutingRulesAOutputReference {
    return new RoutingQueueConditionalGroupRoutingRulesAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_queue_conditional_group_routing genesyscloud_routing_queue_conditional_group_routing}
*/
export class RoutingQueueConditionalGroupRouting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_routing_queue_conditional_group_routing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingQueueConditionalGroupRouting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingQueueConditionalGroupRouting to import
  * @param importFromId The id of the existing RoutingQueueConditionalGroupRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_queue_conditional_group_routing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingQueueConditionalGroupRouting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_routing_queue_conditional_group_routing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_queue_conditional_group_routing genesyscloud_routing_queue_conditional_group_routing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingQueueConditionalGroupRoutingConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingQueueConditionalGroupRoutingConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_routing_queue_conditional_group_routing',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
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
    this._queueId = config.queueId;
    this._rules.internalValue = config.rules;
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

  // queue_id - computed: false, optional: false, required: true
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new RoutingQueueConditionalGroupRoutingRulesAList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: RoutingQueueConditionalGroupRoutingRulesA[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      queue_id: cdktf.stringToTerraform(this._queueId),
      rules: cdktf.listMapper(routingQueueConditionalGroupRoutingRulesAToTerraform, true)(this._rules.internalValue),
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
      queue_id: {
        value: cdktf.stringToHclTerraform(this._queueId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(routingQueueConditionalGroupRoutingRulesAToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingQueueConditionalGroupRoutingRulesAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
