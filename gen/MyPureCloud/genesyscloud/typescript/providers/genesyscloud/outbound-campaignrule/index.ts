// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundCampaignruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not this campaign rule is currently enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#enabled OutboundCampaignrule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#id OutboundCampaignrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether actions are executed if any condition is met, or only when all conditions are met. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#match_any_conditions OutboundCampaignrule#match_any_conditions}
  */
  readonly matchAnyConditions?: boolean | cdktf.IResolvable;
  /**
  * The name of the campaign rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#name OutboundCampaignrule#name}
  */
  readonly name: string;
  /**
  * campaign_rule_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#campaign_rule_actions OutboundCampaignrule#campaign_rule_actions}
  */
  readonly campaignRuleActions: OutboundCampaignruleCampaignRuleActions[] | cdktf.IResolvable;
  /**
  * campaign_rule_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#campaign_rule_conditions OutboundCampaignrule#campaign_rule_conditions}
  */
  readonly campaignRuleConditions: OutboundCampaignruleCampaignRuleConditions[] | cdktf.IResolvable;
  /**
  * campaign_rule_entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#campaign_rule_entities OutboundCampaignrule#campaign_rule_entities}
  */
  readonly campaignRuleEntities: OutboundCampaignruleCampaignRuleEntities;
}
export interface OutboundCampaignruleCampaignRuleActionsCampaignRuleActionEntities {
  /**
  * The list of campaigns for a CampaignRule to monitor. Required if the CampaignRule has any conditions that run on a campaign. Changing the outboundCampaignRuleEntityCampaignRuleId attribute will cause the outbound_campaignrule object to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#campaign_ids OutboundCampaignrule#campaign_ids}
  */
  readonly campaignIds?: string[];
  /**
  * The list of sequences for a CampaignRule to monitor. Required if the CampaignRule has any conditions that run on a sequence. Changing the outboundCampaignRuleEntitySequenceRuleId attribute will cause the outbound_campaignrule object to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#sequence_ids OutboundCampaignrule#sequence_ids}
  */
  readonly sequenceIds?: string[];
  /**
  * If true, the CampaignRuleAction will apply to the same entity that triggered the CampaignRuleCondition. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#use_triggering_entity OutboundCampaignrule#use_triggering_entity}
  */
  readonly useTriggeringEntity?: boolean | cdktf.IResolvable;
}

export function outboundCampaignruleCampaignRuleActionsCampaignRuleActionEntitiesToTerraform(struct?: OutboundCampaignruleCampaignRuleActionsCampaignRuleActionEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    campaign_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.campaignIds),
    sequence_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sequenceIds),
    use_triggering_entity: cdktf.booleanToTerraform(struct!.useTriggeringEntity),
  }
}


export function outboundCampaignruleCampaignRuleActionsCampaignRuleActionEntitiesToHclTerraform(struct?: OutboundCampaignruleCampaignRuleActionsCampaignRuleActionEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    campaign_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.campaignIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sequence_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sequenceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_triggering_entity: {
      value: cdktf.booleanToHclTerraform(struct!.useTriggeringEntity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCampaignruleCampaignRuleActionsCampaignRuleActionEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundCampaignruleCampaignRuleActionsCampaignRuleActionEntities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._campaignIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.campaignIds = this._campaignIds;
    }
    if (this._sequenceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceIds = this._sequenceIds;
    }
    if (this._useTriggeringEntity !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTriggeringEntity = this._useTriggeringEntity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCampaignruleCampaignRuleActionsCampaignRuleActionEntities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._campaignIds = undefined;
      this._sequenceIds = undefined;
      this._useTriggeringEntity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._campaignIds = value.campaignIds;
      this._sequenceIds = value.sequenceIds;
      this._useTriggeringEntity = value.useTriggeringEntity;
    }
  }

  // campaign_ids - computed: false, optional: true, required: false
  private _campaignIds?: string[]; 
  public get campaignIds() {
    return this.getListAttribute('campaign_ids');
  }
  public set campaignIds(value: string[]) {
    this._campaignIds = value;
  }
  public resetCampaignIds() {
    this._campaignIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get campaignIdsInput() {
    return this._campaignIds;
  }

  // sequence_ids - computed: false, optional: true, required: false
  private _sequenceIds?: string[]; 
  public get sequenceIds() {
    return this.getListAttribute('sequence_ids');
  }
  public set sequenceIds(value: string[]) {
    this._sequenceIds = value;
  }
  public resetSequenceIds() {
    this._sequenceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceIdsInput() {
    return this._sequenceIds;
  }

  // use_triggering_entity - computed: false, optional: true, required: false
  private _useTriggeringEntity?: boolean | cdktf.IResolvable; 
  public get useTriggeringEntity() {
    return this.getBooleanAttribute('use_triggering_entity');
  }
  public set useTriggeringEntity(value: boolean | cdktf.IResolvable) {
    this._useTriggeringEntity = value;
  }
  public resetUseTriggeringEntity() {
    this._useTriggeringEntity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTriggeringEntityInput() {
    return this._useTriggeringEntity;
  }
}

export class OutboundCampaignruleCampaignRuleActionsCampaignRuleActionEntitiesList extends cdktf.ComplexList {
  public internalValue? : OutboundCampaignruleCampaignRuleActionsCampaignRuleActionEntities[] | cdktf.IResolvable

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
  public get(index: number): OutboundCampaignruleCampaignRuleActionsCampaignRuleActionEntitiesOutputReference {
    return new OutboundCampaignruleCampaignRuleActionsCampaignRuleActionEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundCampaignruleCampaignRuleActionsParameters {
  /**
  * The dialing mode to set a campaign to. Required for the 'setCampaignDialingMode' action (agentless | preview | power | predictive | progressive | external).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#dialing_mode OutboundCampaignrule#dialing_mode}
  */
  readonly dialingMode?: string;
  /**
  * The operator for comparison. Required for a CampaignRuleCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#operator OutboundCampaignrule#operator}
  */
  readonly operator?: string;
  /**
  * The priority to set a campaign to (1 | 2 | 3 | 4 | 5). Required for the 'setCampaignPriority' action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#priority OutboundCampaignrule#priority}
  */
  readonly priority?: string;
  /**
  * The value for comparison. Required for a CampaignRuleCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#value OutboundCampaignrule#value}
  */
  readonly value?: string;
}

export function outboundCampaignruleCampaignRuleActionsParametersToTerraform(struct?: OutboundCampaignruleCampaignRuleActionsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dialing_mode: cdktf.stringToTerraform(struct!.dialingMode),
    operator: cdktf.stringToTerraform(struct!.operator),
    priority: cdktf.stringToTerraform(struct!.priority),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function outboundCampaignruleCampaignRuleActionsParametersToHclTerraform(struct?: OutboundCampaignruleCampaignRuleActionsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dialing_mode: {
      value: cdktf.stringToHclTerraform(struct!.dialingMode),
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
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
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

export class OutboundCampaignruleCampaignRuleActionsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundCampaignruleCampaignRuleActionsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dialingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialingMode = this._dialingMode;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCampaignruleCampaignRuleActionsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dialingMode = undefined;
      this._operator = undefined;
      this._priority = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dialingMode = value.dialingMode;
      this._operator = value.operator;
      this._priority = value.priority;
      this._value = value.value;
    }
  }

  // dialing_mode - computed: false, optional: true, required: false
  private _dialingMode?: string; 
  public get dialingMode() {
    return this.getStringAttribute('dialing_mode');
  }
  public set dialingMode(value: string) {
    this._dialingMode = value;
  }
  public resetDialingMode() {
    this._dialingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialingModeInput() {
    return this._dialingMode;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OutboundCampaignruleCampaignRuleActionsParametersList extends cdktf.ComplexList {
  public internalValue? : OutboundCampaignruleCampaignRuleActionsParameters[] | cdktf.IResolvable

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
  public get(index: number): OutboundCampaignruleCampaignRuleActionsParametersOutputReference {
    return new OutboundCampaignruleCampaignRuleActionsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundCampaignruleCampaignRuleActions {
  /**
  * The action to take on the campaignRuleActionEntities
  * (turnOnCampaign | turnOffCampaign | turnOnSequence | turnOffSequence | setCampaignPriority | recycleCampaign | setCampaignDialingMode).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#action_type OutboundCampaignrule#action_type}
  */
  readonly actionType: string;
  /**
  * The ID of the CampaignRuleAction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#id OutboundCampaignrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * campaign_rule_action_entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#campaign_rule_action_entities OutboundCampaignrule#campaign_rule_action_entities}
  */
  readonly campaignRuleActionEntities: OutboundCampaignruleCampaignRuleActionsCampaignRuleActionEntities[] | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#parameters OutboundCampaignrule#parameters}
  */
  readonly parameters?: OutboundCampaignruleCampaignRuleActionsParameters[] | cdktf.IResolvable;
}

export function outboundCampaignruleCampaignRuleActionsToTerraform(struct?: OutboundCampaignruleCampaignRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    id: cdktf.stringToTerraform(struct!.id),
    campaign_rule_action_entities: cdktf.listMapper(outboundCampaignruleCampaignRuleActionsCampaignRuleActionEntitiesToTerraform, true)(struct!.campaignRuleActionEntities),
    parameters: cdktf.listMapper(outboundCampaignruleCampaignRuleActionsParametersToTerraform, true)(struct!.parameters),
  }
}


export function outboundCampaignruleCampaignRuleActionsToHclTerraform(struct?: OutboundCampaignruleCampaignRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    campaign_rule_action_entities: {
      value: cdktf.listMapperHcl(outboundCampaignruleCampaignRuleActionsCampaignRuleActionEntitiesToHclTerraform, true)(struct!.campaignRuleActionEntities),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundCampaignruleCampaignRuleActionsCampaignRuleActionEntitiesList",
    },
    parameters: {
      value: cdktf.listMapperHcl(outboundCampaignruleCampaignRuleActionsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundCampaignruleCampaignRuleActionsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCampaignruleCampaignRuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundCampaignruleCampaignRuleActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._campaignRuleActionEntities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.campaignRuleActionEntities = this._campaignRuleActionEntities?.internalValue;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCampaignruleCampaignRuleActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._id = undefined;
      this._campaignRuleActionEntities.internalValue = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._id = value.id;
      this._campaignRuleActionEntities.internalValue = value.campaignRuleActionEntities;
      this._parameters.internalValue = value.parameters;
    }
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
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

  // campaign_rule_action_entities - computed: false, optional: false, required: true
  private _campaignRuleActionEntities = new OutboundCampaignruleCampaignRuleActionsCampaignRuleActionEntitiesList(this, "campaign_rule_action_entities", true);
  public get campaignRuleActionEntities() {
    return this._campaignRuleActionEntities;
  }
  public putCampaignRuleActionEntities(value: OutboundCampaignruleCampaignRuleActionsCampaignRuleActionEntities[] | cdktf.IResolvable) {
    this._campaignRuleActionEntities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get campaignRuleActionEntitiesInput() {
    return this._campaignRuleActionEntities.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new OutboundCampaignruleCampaignRuleActionsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: OutboundCampaignruleCampaignRuleActionsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class OutboundCampaignruleCampaignRuleActionsList extends cdktf.ComplexList {
  public internalValue? : OutboundCampaignruleCampaignRuleActions[] | cdktf.IResolvable

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
  public get(index: number): OutboundCampaignruleCampaignRuleActionsOutputReference {
    return new OutboundCampaignruleCampaignRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundCampaignruleCampaignRuleConditionsParameters {
  /**
  * The dialing mode to set a campaign to. Required for the 'setCampaignDialingMode' action (agentless | preview | power | predictive | progressive | external).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#dialing_mode OutboundCampaignrule#dialing_mode}
  */
  readonly dialingMode?: string;
  /**
  * The operator for comparison. Required for a CampaignRuleCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#operator OutboundCampaignrule#operator}
  */
  readonly operator?: string;
  /**
  * The priority to set a campaign to (1 | 2 | 3 | 4 | 5). Required for the 'setCampaignPriority' action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#priority OutboundCampaignrule#priority}
  */
  readonly priority?: string;
  /**
  * The value for comparison. Required for a CampaignRuleCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#value OutboundCampaignrule#value}
  */
  readonly value?: string;
}

export function outboundCampaignruleCampaignRuleConditionsParametersToTerraform(struct?: OutboundCampaignruleCampaignRuleConditionsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dialing_mode: cdktf.stringToTerraform(struct!.dialingMode),
    operator: cdktf.stringToTerraform(struct!.operator),
    priority: cdktf.stringToTerraform(struct!.priority),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function outboundCampaignruleCampaignRuleConditionsParametersToHclTerraform(struct?: OutboundCampaignruleCampaignRuleConditionsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dialing_mode: {
      value: cdktf.stringToHclTerraform(struct!.dialingMode),
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
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
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

export class OutboundCampaignruleCampaignRuleConditionsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundCampaignruleCampaignRuleConditionsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dialingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialingMode = this._dialingMode;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCampaignruleCampaignRuleConditionsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dialingMode = undefined;
      this._operator = undefined;
      this._priority = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dialingMode = value.dialingMode;
      this._operator = value.operator;
      this._priority = value.priority;
      this._value = value.value;
    }
  }

  // dialing_mode - computed: false, optional: true, required: false
  private _dialingMode?: string; 
  public get dialingMode() {
    return this.getStringAttribute('dialing_mode');
  }
  public set dialingMode(value: string) {
    this._dialingMode = value;
  }
  public resetDialingMode() {
    this._dialingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialingModeInput() {
    return this._dialingMode;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OutboundCampaignruleCampaignRuleConditionsParametersList extends cdktf.ComplexList {
  public internalValue? : OutboundCampaignruleCampaignRuleConditionsParameters[] | cdktf.IResolvable

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
  public get(index: number): OutboundCampaignruleCampaignRuleConditionsParametersOutputReference {
    return new OutboundCampaignruleCampaignRuleConditionsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundCampaignruleCampaignRuleConditions {
  /**
  * The type of condition to evaluate (campaignProgress | campaignAgents).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#condition_type OutboundCampaignrule#condition_type}
  */
  readonly conditionType: string;
  /**
  * The ID of the CampaignRuleCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#id OutboundCampaignrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#parameters OutboundCampaignrule#parameters}
  */
  readonly parameters: OutboundCampaignruleCampaignRuleConditionsParameters[] | cdktf.IResolvable;
}

export function outboundCampaignruleCampaignRuleConditionsToTerraform(struct?: OutboundCampaignruleCampaignRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
    id: cdktf.stringToTerraform(struct!.id),
    parameters: cdktf.listMapper(outboundCampaignruleCampaignRuleConditionsParametersToTerraform, true)(struct!.parameters),
  }
}


export function outboundCampaignruleCampaignRuleConditionsToHclTerraform(struct?: OutboundCampaignruleCampaignRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(outboundCampaignruleCampaignRuleConditionsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundCampaignruleCampaignRuleConditionsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCampaignruleCampaignRuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundCampaignruleCampaignRuleConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCampaignruleCampaignRuleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionType = undefined;
      this._id = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionType = value.conditionType;
      this._id = value.id;
      this._parameters.internalValue = value.parameters;
    }
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
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

  // parameters - computed: false, optional: false, required: true
  private _parameters = new OutboundCampaignruleCampaignRuleConditionsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: OutboundCampaignruleCampaignRuleConditionsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class OutboundCampaignruleCampaignRuleConditionsList extends cdktf.ComplexList {
  public internalValue? : OutboundCampaignruleCampaignRuleConditions[] | cdktf.IResolvable

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
  public get(index: number): OutboundCampaignruleCampaignRuleConditionsOutputReference {
    return new OutboundCampaignruleCampaignRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundCampaignruleCampaignRuleEntities {
  /**
  * The list of campaigns for a CampaignRule to monitor. Required if the CampaignRule has any conditions that run on a campaign. Changing the outboundCampaignRuleEntityCampaignRuleId attribute will cause the outbound_campaignrule object to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#campaign_ids OutboundCampaignrule#campaign_ids}
  */
  readonly campaignIds?: string[];
  /**
  * The list of sequences for a CampaignRule to monitor. Required if the CampaignRule has any conditions that run on a sequence. Changing the outboundCampaignRuleEntitySequenceRuleId attribute will cause the outbound_campaignrule object to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#sequence_ids OutboundCampaignrule#sequence_ids}
  */
  readonly sequenceIds?: string[];
}

export function outboundCampaignruleCampaignRuleEntitiesToTerraform(struct?: OutboundCampaignruleCampaignRuleEntitiesOutputReference | OutboundCampaignruleCampaignRuleEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    campaign_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.campaignIds),
    sequence_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sequenceIds),
  }
}


export function outboundCampaignruleCampaignRuleEntitiesToHclTerraform(struct?: OutboundCampaignruleCampaignRuleEntitiesOutputReference | OutboundCampaignruleCampaignRuleEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    campaign_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.campaignIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sequence_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sequenceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCampaignruleCampaignRuleEntitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundCampaignruleCampaignRuleEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._campaignIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.campaignIds = this._campaignIds;
    }
    if (this._sequenceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceIds = this._sequenceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCampaignruleCampaignRuleEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._campaignIds = undefined;
      this._sequenceIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._campaignIds = value.campaignIds;
      this._sequenceIds = value.sequenceIds;
    }
  }

  // campaign_ids - computed: false, optional: true, required: false
  private _campaignIds?: string[]; 
  public get campaignIds() {
    return this.getListAttribute('campaign_ids');
  }
  public set campaignIds(value: string[]) {
    this._campaignIds = value;
  }
  public resetCampaignIds() {
    this._campaignIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get campaignIdsInput() {
    return this._campaignIds;
  }

  // sequence_ids - computed: false, optional: true, required: false
  private _sequenceIds?: string[]; 
  public get sequenceIds() {
    return this.getListAttribute('sequence_ids');
  }
  public set sequenceIds(value: string[]) {
    this._sequenceIds = value;
  }
  public resetSequenceIds() {
    this._sequenceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceIdsInput() {
    return this._sequenceIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule genesyscloud_outbound_campaignrule}
*/
export class OutboundCampaignrule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_campaignrule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundCampaignrule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundCampaignrule to import
  * @param importFromId The id of the existing OutboundCampaignrule that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundCampaignrule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_campaignrule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_campaignrule genesyscloud_outbound_campaignrule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundCampaignruleConfig
  */
  public constructor(scope: Construct, id: string, config: OutboundCampaignruleConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_campaignrule',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._matchAnyConditions = config.matchAnyConditions;
    this._name = config.name;
    this._campaignRuleActions.internalValue = config.campaignRuleActions;
    this._campaignRuleConditions.internalValue = config.campaignRuleConditions;
    this._campaignRuleEntities.internalValue = config.campaignRuleEntities;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
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

  // match_any_conditions - computed: false, optional: true, required: false
  private _matchAnyConditions?: boolean | cdktf.IResolvable; 
  public get matchAnyConditions() {
    return this.getBooleanAttribute('match_any_conditions');
  }
  public set matchAnyConditions(value: boolean | cdktf.IResolvable) {
    this._matchAnyConditions = value;
  }
  public resetMatchAnyConditions() {
    this._matchAnyConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyConditionsInput() {
    return this._matchAnyConditions;
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

  // campaign_rule_actions - computed: false, optional: false, required: true
  private _campaignRuleActions = new OutboundCampaignruleCampaignRuleActionsList(this, "campaign_rule_actions", false);
  public get campaignRuleActions() {
    return this._campaignRuleActions;
  }
  public putCampaignRuleActions(value: OutboundCampaignruleCampaignRuleActions[] | cdktf.IResolvable) {
    this._campaignRuleActions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get campaignRuleActionsInput() {
    return this._campaignRuleActions.internalValue;
  }

  // campaign_rule_conditions - computed: false, optional: false, required: true
  private _campaignRuleConditions = new OutboundCampaignruleCampaignRuleConditionsList(this, "campaign_rule_conditions", false);
  public get campaignRuleConditions() {
    return this._campaignRuleConditions;
  }
  public putCampaignRuleConditions(value: OutboundCampaignruleCampaignRuleConditions[] | cdktf.IResolvable) {
    this._campaignRuleConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get campaignRuleConditionsInput() {
    return this._campaignRuleConditions.internalValue;
  }

  // campaign_rule_entities - computed: false, optional: false, required: true
  private _campaignRuleEntities = new OutboundCampaignruleCampaignRuleEntitiesOutputReference(this, "campaign_rule_entities");
  public get campaignRuleEntities() {
    return this._campaignRuleEntities;
  }
  public putCampaignRuleEntities(value: OutboundCampaignruleCampaignRuleEntities) {
    this._campaignRuleEntities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get campaignRuleEntitiesInput() {
    return this._campaignRuleEntities.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      match_any_conditions: cdktf.booleanToTerraform(this._matchAnyConditions),
      name: cdktf.stringToTerraform(this._name),
      campaign_rule_actions: cdktf.listMapper(outboundCampaignruleCampaignRuleActionsToTerraform, true)(this._campaignRuleActions.internalValue),
      campaign_rule_conditions: cdktf.listMapper(outboundCampaignruleCampaignRuleConditionsToTerraform, true)(this._campaignRuleConditions.internalValue),
      campaign_rule_entities: outboundCampaignruleCampaignRuleEntitiesToTerraform(this._campaignRuleEntities.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      match_any_conditions: {
        value: cdktf.booleanToHclTerraform(this._matchAnyConditions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      campaign_rule_actions: {
        value: cdktf.listMapperHcl(outboundCampaignruleCampaignRuleActionsToHclTerraform, true)(this._campaignRuleActions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundCampaignruleCampaignRuleActionsList",
      },
      campaign_rule_conditions: {
        value: cdktf.listMapperHcl(outboundCampaignruleCampaignRuleConditionsToHclTerraform, true)(this._campaignRuleConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundCampaignruleCampaignRuleConditionsList",
      },
      campaign_rule_entities: {
        value: outboundCampaignruleCampaignRuleEntitiesToHclTerraform(this._campaignRuleEntities.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OutboundCampaignruleCampaignRuleEntitiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
