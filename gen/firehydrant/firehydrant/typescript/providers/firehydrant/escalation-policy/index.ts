// https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EscalationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#default EscalationPolicy#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#description EscalationPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#id EscalationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#name EscalationPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#repetitions EscalationPolicy#repetitions}
  */
  readonly repetitions: number;
  /**
  * The strategy for handling steps in the escalation policy. Can be 'static' or 'dynamic_by_priority'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#step_strategy EscalationPolicy#step_strategy}
  */
  readonly stepStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#team_id EscalationPolicy#team_id}
  */
  readonly teamId: string;
  /**
  * handoff_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#handoff_step EscalationPolicy#handoff_step}
  */
  readonly handoffStep?: EscalationPolicyHandoffStep;
  /**
  * notification_priority_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#notification_priority_policies EscalationPolicy#notification_priority_policies}
  */
  readonly notificationPriorityPolicies?: EscalationPolicyNotificationPriorityPolicies[] | cdktf.IResolvable;
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#step EscalationPolicy#step}
  */
  readonly step: EscalationPolicyStep[] | cdktf.IResolvable;
}
export interface EscalationPolicyHandoffStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#target_id EscalationPolicy#target_id}
  */
  readonly targetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#target_type EscalationPolicy#target_type}
  */
  readonly targetType: string;
}

export function escalationPolicyHandoffStepToTerraform(struct?: EscalationPolicyHandoffStepOutputReference | EscalationPolicyHandoffStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_id: cdktf.stringToTerraform(struct!.targetId),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function escalationPolicyHandoffStepToHclTerraform(struct?: EscalationPolicyHandoffStepOutputReference | EscalationPolicyHandoffStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_id: {
      value: cdktf.stringToHclTerraform(struct!.targetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPolicyHandoffStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EscalationPolicyHandoffStep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetId = this._targetId;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPolicyHandoffStep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetId = undefined;
      this._targetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetId = value.targetId;
      this._targetType = value.targetType;
    }
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}
export interface EscalationPolicyNotificationPriorityPoliciesHandoffStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#target_id EscalationPolicy#target_id}
  */
  readonly targetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#target_type EscalationPolicy#target_type}
  */
  readonly targetType: string;
}

export function escalationPolicyNotificationPriorityPoliciesHandoffStepToTerraform(struct?: EscalationPolicyNotificationPriorityPoliciesHandoffStepOutputReference | EscalationPolicyNotificationPriorityPoliciesHandoffStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_id: cdktf.stringToTerraform(struct!.targetId),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function escalationPolicyNotificationPriorityPoliciesHandoffStepToHclTerraform(struct?: EscalationPolicyNotificationPriorityPoliciesHandoffStepOutputReference | EscalationPolicyNotificationPriorityPoliciesHandoffStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_id: {
      value: cdktf.stringToHclTerraform(struct!.targetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPolicyNotificationPriorityPoliciesHandoffStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EscalationPolicyNotificationPriorityPoliciesHandoffStep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetId = this._targetId;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPolicyNotificationPriorityPoliciesHandoffStep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetId = undefined;
      this._targetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetId = value.targetId;
      this._targetType = value.targetType;
    }
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}
export interface EscalationPolicyNotificationPriorityPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#priority EscalationPolicy#priority}
  */
  readonly priority: string;
  /**
  * Number of repetitions for this priority level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#repetitions EscalationPolicy#repetitions}
  */
  readonly repetitions?: number;
  /**
  * handoff_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#handoff_step EscalationPolicy#handoff_step}
  */
  readonly handoffStep?: EscalationPolicyNotificationPriorityPoliciesHandoffStep;
}

export function escalationPolicyNotificationPriorityPoliciesToTerraform(struct?: EscalationPolicyNotificationPriorityPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.stringToTerraform(struct!.priority),
    repetitions: cdktf.numberToTerraform(struct!.repetitions),
    handoff_step: escalationPolicyNotificationPriorityPoliciesHandoffStepToTerraform(struct!.handoffStep),
  }
}


export function escalationPolicyNotificationPriorityPoliciesToHclTerraform(struct?: EscalationPolicyNotificationPriorityPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repetitions: {
      value: cdktf.numberToHclTerraform(struct!.repetitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    handoff_step: {
      value: escalationPolicyNotificationPriorityPoliciesHandoffStepToHclTerraform(struct!.handoffStep),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationPolicyNotificationPriorityPoliciesHandoffStepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPolicyNotificationPriorityPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPolicyNotificationPriorityPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._repetitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.repetitions = this._repetitions;
    }
    if (this._handoffStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.handoffStep = this._handoffStep?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPolicyNotificationPriorityPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._repetitions = undefined;
      this._handoffStep.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._repetitions = value.repetitions;
      this._handoffStep.internalValue = value.handoffStep;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // repetitions - computed: false, optional: true, required: false
  private _repetitions?: number; 
  public get repetitions() {
    return this.getNumberAttribute('repetitions');
  }
  public set repetitions(value: number) {
    this._repetitions = value;
  }
  public resetRepetitions() {
    this._repetitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repetitionsInput() {
    return this._repetitions;
  }

  // handoff_step - computed: false, optional: true, required: false
  private _handoffStep = new EscalationPolicyNotificationPriorityPoliciesHandoffStepOutputReference(this, "handoff_step");
  public get handoffStep() {
    return this._handoffStep;
  }
  public putHandoffStep(value: EscalationPolicyNotificationPriorityPoliciesHandoffStep) {
    this._handoffStep.internalValue = value;
  }
  public resetHandoffStep() {
    this._handoffStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoffStepInput() {
    return this._handoffStep.internalValue;
  }
}

export class EscalationPolicyNotificationPriorityPoliciesList extends cdktf.ComplexList {
  public internalValue? : EscalationPolicyNotificationPriorityPolicies[] | cdktf.IResolvable

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
  public get(index: number): EscalationPolicyNotificationPriorityPoliciesOutputReference {
    return new EscalationPolicyNotificationPriorityPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPolicyStepTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#id EscalationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#type EscalationPolicy#type}
  */
  readonly type: string;
}

export function escalationPolicyStepTargetsToTerraform(struct?: EscalationPolicyStepTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function escalationPolicyStepTargetsToHclTerraform(struct?: EscalationPolicyStepTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class EscalationPolicyStepTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPolicyStepTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPolicyStepTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class EscalationPolicyStepTargetsList extends cdktf.ComplexList {
  public internalValue? : EscalationPolicyStepTargets[] | cdktf.IResolvable

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
  public get(index: number): EscalationPolicyStepTargetsOutputReference {
    return new EscalationPolicyStepTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPolicyStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#priorities EscalationPolicy#priorities}
  */
  readonly priorities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#timeout EscalationPolicy#timeout}
  */
  readonly timeout: string;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#targets EscalationPolicy#targets}
  */
  readonly targets: EscalationPolicyStepTargets[] | cdktf.IResolvable;
}

export function escalationPolicyStepToTerraform(struct?: EscalationPolicyStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priorities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.priorities),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    targets: cdktf.listMapper(escalationPolicyStepTargetsToTerraform, true)(struct!.targets),
  }
}


export function escalationPolicyStepToHclTerraform(struct?: EscalationPolicyStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priorities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.priorities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targets: {
      value: cdktf.listMapperHcl(escalationPolicyStepTargetsToHclTerraform, true)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationPolicyStepTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPolicyStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPolicyStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priorities !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorities = this._priorities;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPolicyStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priorities = undefined;
      this._timeout = undefined;
      this._targets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priorities = value.priorities;
      this._timeout = value.timeout;
      this._targets.internalValue = value.targets;
    }
  }

  // priorities - computed: false, optional: true, required: false
  private _priorities?: string[]; 
  public get priorities() {
    return this.getListAttribute('priorities');
  }
  public set priorities(value: string[]) {
    this._priorities = value;
  }
  public resetPriorities() {
    this._priorities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritiesInput() {
    return this._priorities;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new EscalationPolicyStepTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: EscalationPolicyStepTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}

export class EscalationPolicyStepList extends cdktf.ComplexList {
  public internalValue? : EscalationPolicyStep[] | cdktf.IResolvable

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
  public get(index: number): EscalationPolicyStepOutputReference {
    return new EscalationPolicyStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy firehydrant_escalation_policy}
*/
export class EscalationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "firehydrant_escalation_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EscalationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EscalationPolicy to import
  * @param importFromId The id of the existing EscalationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EscalationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "firehydrant_escalation_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/escalation_policy firehydrant_escalation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EscalationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EscalationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'firehydrant_escalation_policy',
      terraformGeneratorMetadata: {
        providerName: 'firehydrant',
        providerVersion: '0.14.11',
        providerVersionConstraint: '0.14.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._default = config.default;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._repetitions = config.repetitions;
    this._stepStrategy = config.stepStrategy;
    this._teamId = config.teamId;
    this._handoffStep.internalValue = config.handoffStep;
    this._notificationPriorityPolicies.internalValue = config.notificationPriorityPolicies;
    this._step.internalValue = config.step;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // repetitions - computed: false, optional: false, required: true
  private _repetitions?: number; 
  public get repetitions() {
    return this.getNumberAttribute('repetitions');
  }
  public set repetitions(value: number) {
    this._repetitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repetitionsInput() {
    return this._repetitions;
  }

  // step_strategy - computed: false, optional: true, required: false
  private _stepStrategy?: string; 
  public get stepStrategy() {
    return this.getStringAttribute('step_strategy');
  }
  public set stepStrategy(value: string) {
    this._stepStrategy = value;
  }
  public resetStepStrategy() {
    this._stepStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepStrategyInput() {
    return this._stepStrategy;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // handoff_step - computed: false, optional: true, required: false
  private _handoffStep = new EscalationPolicyHandoffStepOutputReference(this, "handoff_step");
  public get handoffStep() {
    return this._handoffStep;
  }
  public putHandoffStep(value: EscalationPolicyHandoffStep) {
    this._handoffStep.internalValue = value;
  }
  public resetHandoffStep() {
    this._handoffStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoffStepInput() {
    return this._handoffStep.internalValue;
  }

  // notification_priority_policies - computed: false, optional: true, required: false
  private _notificationPriorityPolicies = new EscalationPolicyNotificationPriorityPoliciesList(this, "notification_priority_policies", false);
  public get notificationPriorityPolicies() {
    return this._notificationPriorityPolicies;
  }
  public putNotificationPriorityPolicies(value: EscalationPolicyNotificationPriorityPolicies[] | cdktf.IResolvable) {
    this._notificationPriorityPolicies.internalValue = value;
  }
  public resetNotificationPriorityPolicies() {
    this._notificationPriorityPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPriorityPoliciesInput() {
    return this._notificationPriorityPolicies.internalValue;
  }

  // step - computed: false, optional: false, required: true
  private _step = new EscalationPolicyStepList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: EscalationPolicyStep[] | cdktf.IResolvable) {
    this._step.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.booleanToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      repetitions: cdktf.numberToTerraform(this._repetitions),
      step_strategy: cdktf.stringToTerraform(this._stepStrategy),
      team_id: cdktf.stringToTerraform(this._teamId),
      handoff_step: escalationPolicyHandoffStepToTerraform(this._handoffStep.internalValue),
      notification_priority_policies: cdktf.listMapper(escalationPolicyNotificationPriorityPoliciesToTerraform, true)(this._notificationPriorityPolicies.internalValue),
      step: cdktf.listMapper(escalationPolicyStepToTerraform, true)(this._step.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repetitions: {
        value: cdktf.numberToHclTerraform(this._repetitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      step_strategy: {
        value: cdktf.stringToHclTerraform(this._stepStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handoff_step: {
        value: escalationPolicyHandoffStepToHclTerraform(this._handoffStep.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EscalationPolicyHandoffStepList",
      },
      notification_priority_policies: {
        value: cdktf.listMapperHcl(escalationPolicyNotificationPriorityPoliciesToHclTerraform, true)(this._notificationPriorityPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EscalationPolicyNotificationPriorityPoliciesList",
      },
      step: {
        value: cdktf.listMapperHcl(escalationPolicyStepToHclTerraform, true)(this._step.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EscalationPolicyStepList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
