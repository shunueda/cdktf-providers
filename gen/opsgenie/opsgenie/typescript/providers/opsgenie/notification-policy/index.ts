// https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#enabled NotificationPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#id NotificationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#name NotificationPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#policy_description NotificationPolicy#policy_description}
  */
  readonly policyDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#suppress NotificationPolicy#suppress}
  */
  readonly suppress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#team_id NotificationPolicy#team_id}
  */
  readonly teamId: string;
  /**
  * auto_close_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#auto_close_action NotificationPolicy#auto_close_action}
  */
  readonly autoCloseAction?: NotificationPolicyAutoCloseAction;
  /**
  * auto_restart_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#auto_restart_action NotificationPolicy#auto_restart_action}
  */
  readonly autoRestartAction?: NotificationPolicyAutoRestartAction;
  /**
  * de_duplication_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#de_duplication_action NotificationPolicy#de_duplication_action}
  */
  readonly deDuplicationAction?: NotificationPolicyDeDuplicationAction;
  /**
  * delay_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#delay_action NotificationPolicy#delay_action}
  */
  readonly delayAction?: NotificationPolicyDelayAction;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#filter NotificationPolicy#filter}
  */
  readonly filter: NotificationPolicyFilter;
  /**
  * time_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#time_restriction NotificationPolicy#time_restriction}
  */
  readonly timeRestriction?: NotificationPolicyTimeRestriction;
}
export interface NotificationPolicyAutoCloseActionDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#time_amount NotificationPolicy#time_amount}
  */
  readonly timeAmount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#time_unit NotificationPolicy#time_unit}
  */
  readonly timeUnit?: string;
}

export function notificationPolicyAutoCloseActionDurationToTerraform(struct?: NotificationPolicyAutoCloseActionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_amount: cdktf.numberToTerraform(struct!.timeAmount),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function notificationPolicyAutoCloseActionDurationToHclTerraform(struct?: NotificationPolicyAutoCloseActionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_amount: {
      value: cdktf.numberToHclTerraform(struct!.timeAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyAutoCloseActionDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyAutoCloseActionDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAmount = this._timeAmount;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyAutoCloseActionDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeAmount = undefined;
      this._timeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeAmount = value.timeAmount;
      this._timeUnit = value.timeUnit;
    }
  }

  // time_amount - computed: false, optional: false, required: true
  private _timeAmount?: number; 
  public get timeAmount() {
    return this.getNumberAttribute('time_amount');
  }
  public set timeAmount(value: number) {
    this._timeAmount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAmountInput() {
    return this._timeAmount;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}

export class NotificationPolicyAutoCloseActionDurationList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyAutoCloseActionDuration[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyAutoCloseActionDurationOutputReference {
    return new NotificationPolicyAutoCloseActionDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyAutoCloseAction {
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#duration NotificationPolicy#duration}
  */
  readonly duration: NotificationPolicyAutoCloseActionDuration[] | cdktf.IResolvable;
}

export function notificationPolicyAutoCloseActionToTerraform(struct?: NotificationPolicyAutoCloseActionOutputReference | NotificationPolicyAutoCloseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.listMapper(notificationPolicyAutoCloseActionDurationToTerraform, true)(struct!.duration),
  }
}


export function notificationPolicyAutoCloseActionToHclTerraform(struct?: NotificationPolicyAutoCloseActionOutputReference | NotificationPolicyAutoCloseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.listMapperHcl(notificationPolicyAutoCloseActionDurationToHclTerraform, true)(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyAutoCloseActionDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyAutoCloseActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationPolicyAutoCloseAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyAutoCloseAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration.internalValue = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration = new NotificationPolicyAutoCloseActionDurationList(this, "duration", false);
  public get duration() {
    return this._duration;
  }
  public putDuration(value: NotificationPolicyAutoCloseActionDuration[] | cdktf.IResolvable) {
    this._duration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }
}
export interface NotificationPolicyAutoRestartActionDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#time_amount NotificationPolicy#time_amount}
  */
  readonly timeAmount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#time_unit NotificationPolicy#time_unit}
  */
  readonly timeUnit?: string;
}

export function notificationPolicyAutoRestartActionDurationToTerraform(struct?: NotificationPolicyAutoRestartActionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_amount: cdktf.numberToTerraform(struct!.timeAmount),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function notificationPolicyAutoRestartActionDurationToHclTerraform(struct?: NotificationPolicyAutoRestartActionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_amount: {
      value: cdktf.numberToHclTerraform(struct!.timeAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyAutoRestartActionDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyAutoRestartActionDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAmount = this._timeAmount;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyAutoRestartActionDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeAmount = undefined;
      this._timeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeAmount = value.timeAmount;
      this._timeUnit = value.timeUnit;
    }
  }

  // time_amount - computed: false, optional: false, required: true
  private _timeAmount?: number; 
  public get timeAmount() {
    return this.getNumberAttribute('time_amount');
  }
  public set timeAmount(value: number) {
    this._timeAmount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAmountInput() {
    return this._timeAmount;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}

export class NotificationPolicyAutoRestartActionDurationList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyAutoRestartActionDuration[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyAutoRestartActionDurationOutputReference {
    return new NotificationPolicyAutoRestartActionDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyAutoRestartAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#max_repeat_count NotificationPolicy#max_repeat_count}
  */
  readonly maxRepeatCount: number;
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#duration NotificationPolicy#duration}
  */
  readonly duration: NotificationPolicyAutoRestartActionDuration[] | cdktf.IResolvable;
}

export function notificationPolicyAutoRestartActionToTerraform(struct?: NotificationPolicyAutoRestartActionOutputReference | NotificationPolicyAutoRestartAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_repeat_count: cdktf.numberToTerraform(struct!.maxRepeatCount),
    duration: cdktf.listMapper(notificationPolicyAutoRestartActionDurationToTerraform, true)(struct!.duration),
  }
}


export function notificationPolicyAutoRestartActionToHclTerraform(struct?: NotificationPolicyAutoRestartActionOutputReference | NotificationPolicyAutoRestartAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_repeat_count: {
      value: cdktf.numberToHclTerraform(struct!.maxRepeatCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.listMapperHcl(notificationPolicyAutoRestartActionDurationToHclTerraform, true)(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyAutoRestartActionDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyAutoRestartActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationPolicyAutoRestartAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRepeatCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRepeatCount = this._maxRepeatCount;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyAutoRestartAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxRepeatCount = undefined;
      this._duration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxRepeatCount = value.maxRepeatCount;
      this._duration.internalValue = value.duration;
    }
  }

  // max_repeat_count - computed: false, optional: false, required: true
  private _maxRepeatCount?: number; 
  public get maxRepeatCount() {
    return this.getNumberAttribute('max_repeat_count');
  }
  public set maxRepeatCount(value: number) {
    this._maxRepeatCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRepeatCountInput() {
    return this._maxRepeatCount;
  }

  // duration - computed: false, optional: false, required: true
  private _duration = new NotificationPolicyAutoRestartActionDurationList(this, "duration", false);
  public get duration() {
    return this._duration;
  }
  public putDuration(value: NotificationPolicyAutoRestartActionDuration[] | cdktf.IResolvable) {
    this._duration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }
}
export interface NotificationPolicyDeDuplicationActionDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#time_amount NotificationPolicy#time_amount}
  */
  readonly timeAmount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#time_unit NotificationPolicy#time_unit}
  */
  readonly timeUnit?: string;
}

export function notificationPolicyDeDuplicationActionDurationToTerraform(struct?: NotificationPolicyDeDuplicationActionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_amount: cdktf.numberToTerraform(struct!.timeAmount),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function notificationPolicyDeDuplicationActionDurationToHclTerraform(struct?: NotificationPolicyDeDuplicationActionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_amount: {
      value: cdktf.numberToHclTerraform(struct!.timeAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyDeDuplicationActionDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyDeDuplicationActionDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAmount = this._timeAmount;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyDeDuplicationActionDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeAmount = undefined;
      this._timeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeAmount = value.timeAmount;
      this._timeUnit = value.timeUnit;
    }
  }

  // time_amount - computed: false, optional: false, required: true
  private _timeAmount?: number; 
  public get timeAmount() {
    return this.getNumberAttribute('time_amount');
  }
  public set timeAmount(value: number) {
    this._timeAmount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAmountInput() {
    return this._timeAmount;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}

export class NotificationPolicyDeDuplicationActionDurationList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyDeDuplicationActionDuration[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyDeDuplicationActionDurationOutputReference {
    return new NotificationPolicyDeDuplicationActionDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyDeDuplicationAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#count NotificationPolicy#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#de_duplication_action_type NotificationPolicy#de_duplication_action_type}
  */
  readonly deDuplicationActionType: string;
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#duration NotificationPolicy#duration}
  */
  readonly duration?: NotificationPolicyDeDuplicationActionDuration[] | cdktf.IResolvable;
}

export function notificationPolicyDeDuplicationActionToTerraform(struct?: NotificationPolicyDeDuplicationActionOutputReference | NotificationPolicyDeDuplicationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    de_duplication_action_type: cdktf.stringToTerraform(struct!.deDuplicationActionType),
    duration: cdktf.listMapper(notificationPolicyDeDuplicationActionDurationToTerraform, true)(struct!.duration),
  }
}


export function notificationPolicyDeDuplicationActionToHclTerraform(struct?: NotificationPolicyDeDuplicationActionOutputReference | NotificationPolicyDeDuplicationAction): any {
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
    de_duplication_action_type: {
      value: cdktf.stringToHclTerraform(struct!.deDuplicationActionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.listMapperHcl(notificationPolicyDeDuplicationActionDurationToHclTerraform, true)(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyDeDuplicationActionDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyDeDuplicationActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationPolicyDeDuplicationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._deDuplicationActionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deDuplicationActionType = this._deDuplicationActionType;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyDeDuplicationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._deDuplicationActionType = undefined;
      this._duration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._deDuplicationActionType = value.deDuplicationActionType;
      this._duration.internalValue = value.duration;
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

  // de_duplication_action_type - computed: false, optional: false, required: true
  private _deDuplicationActionType?: string; 
  public get deDuplicationActionType() {
    return this.getStringAttribute('de_duplication_action_type');
  }
  public set deDuplicationActionType(value: string) {
    this._deDuplicationActionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deDuplicationActionTypeInput() {
    return this._deDuplicationActionType;
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new NotificationPolicyDeDuplicationActionDurationList(this, "duration", false);
  public get duration() {
    return this._duration;
  }
  public putDuration(value: NotificationPolicyDeDuplicationActionDuration[] | cdktf.IResolvable) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }
}
export interface NotificationPolicyDelayActionDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#time_amount NotificationPolicy#time_amount}
  */
  readonly timeAmount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#time_unit NotificationPolicy#time_unit}
  */
  readonly timeUnit?: string;
}

export function notificationPolicyDelayActionDurationToTerraform(struct?: NotificationPolicyDelayActionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_amount: cdktf.numberToTerraform(struct!.timeAmount),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function notificationPolicyDelayActionDurationToHclTerraform(struct?: NotificationPolicyDelayActionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_amount: {
      value: cdktf.numberToHclTerraform(struct!.timeAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyDelayActionDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyDelayActionDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAmount = this._timeAmount;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyDelayActionDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeAmount = undefined;
      this._timeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeAmount = value.timeAmount;
      this._timeUnit = value.timeUnit;
    }
  }

  // time_amount - computed: false, optional: false, required: true
  private _timeAmount?: number; 
  public get timeAmount() {
    return this.getNumberAttribute('time_amount');
  }
  public set timeAmount(value: number) {
    this._timeAmount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAmountInput() {
    return this._timeAmount;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}

export class NotificationPolicyDelayActionDurationList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyDelayActionDuration[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyDelayActionDurationOutputReference {
    return new NotificationPolicyDelayActionDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyDelayAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#delay_option NotificationPolicy#delay_option}
  */
  readonly delayOption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#until_hour NotificationPolicy#until_hour}
  */
  readonly untilHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#until_minute NotificationPolicy#until_minute}
  */
  readonly untilMinute?: number;
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#duration NotificationPolicy#duration}
  */
  readonly duration?: NotificationPolicyDelayActionDuration[] | cdktf.IResolvable;
}

export function notificationPolicyDelayActionToTerraform(struct?: NotificationPolicyDelayActionOutputReference | NotificationPolicyDelayAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_option: cdktf.stringToTerraform(struct!.delayOption),
    until_hour: cdktf.numberToTerraform(struct!.untilHour),
    until_minute: cdktf.numberToTerraform(struct!.untilMinute),
    duration: cdktf.listMapper(notificationPolicyDelayActionDurationToTerraform, true)(struct!.duration),
  }
}


export function notificationPolicyDelayActionToHclTerraform(struct?: NotificationPolicyDelayActionOutputReference | NotificationPolicyDelayAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_option: {
      value: cdktf.stringToHclTerraform(struct!.delayOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    until_hour: {
      value: cdktf.numberToHclTerraform(struct!.untilHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    until_minute: {
      value: cdktf.numberToHclTerraform(struct!.untilMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.listMapperHcl(notificationPolicyDelayActionDurationToHclTerraform, true)(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyDelayActionDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyDelayActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationPolicyDelayAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayOption = this._delayOption;
    }
    if (this._untilHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.untilHour = this._untilHour;
    }
    if (this._untilMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.untilMinute = this._untilMinute;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyDelayAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delayOption = undefined;
      this._untilHour = undefined;
      this._untilMinute = undefined;
      this._duration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delayOption = value.delayOption;
      this._untilHour = value.untilHour;
      this._untilMinute = value.untilMinute;
      this._duration.internalValue = value.duration;
    }
  }

  // delay_option - computed: false, optional: false, required: true
  private _delayOption?: string; 
  public get delayOption() {
    return this.getStringAttribute('delay_option');
  }
  public set delayOption(value: string) {
    this._delayOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delayOptionInput() {
    return this._delayOption;
  }

  // until_hour - computed: false, optional: true, required: false
  private _untilHour?: number; 
  public get untilHour() {
    return this.getNumberAttribute('until_hour');
  }
  public set untilHour(value: number) {
    this._untilHour = value;
  }
  public resetUntilHour() {
    this._untilHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilHourInput() {
    return this._untilHour;
  }

  // until_minute - computed: false, optional: true, required: false
  private _untilMinute?: number; 
  public get untilMinute() {
    return this.getNumberAttribute('until_minute');
  }
  public set untilMinute(value: number) {
    this._untilMinute = value;
  }
  public resetUntilMinute() {
    this._untilMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilMinuteInput() {
    return this._untilMinute;
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new NotificationPolicyDelayActionDurationList(this, "duration", false);
  public get duration() {
    return this._duration;
  }
  public putDuration(value: NotificationPolicyDelayActionDuration[] | cdktf.IResolvable) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }
}
export interface NotificationPolicyFilterConditions {
  /**
  * User defined value that will be compared with alert field according to the operation. Default value is empty string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#expected_value NotificationPolicy#expected_value}
  */
  readonly expectedValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#field NotificationPolicy#field}
  */
  readonly field: string;
  /**
  * If 'field' is set as 'extra-properties', key could be used for key-value pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#key NotificationPolicy#key}
  */
  readonly key?: string;
  /**
  * Indicates behaviour of the given operation. Default value is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#not NotificationPolicy#not}
  */
  readonly not?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#operation NotificationPolicy#operation}
  */
  readonly operation: string;
  /**
  * Order of the condition in conditions list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#order NotificationPolicy#order}
  */
  readonly order?: number;
}

export function notificationPolicyFilterConditionsToTerraform(struct?: NotificationPolicyFilterConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_value: cdktf.stringToTerraform(struct!.expectedValue),
    field: cdktf.stringToTerraform(struct!.field),
    key: cdktf.stringToTerraform(struct!.key),
    not: cdktf.booleanToTerraform(struct!.not),
    operation: cdktf.stringToTerraform(struct!.operation),
    order: cdktf.numberToTerraform(struct!.order),
  }
}


export function notificationPolicyFilterConditionsToHclTerraform(struct?: NotificationPolicyFilterConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_value: {
      value: cdktf.stringToHclTerraform(struct!.expectedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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
    not: {
      value: cdktf.booleanToHclTerraform(struct!.not),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyFilterConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyFilterConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedValue = this._expectedValue;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._not !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyFilterConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expectedValue = undefined;
      this._field = undefined;
      this._key = undefined;
      this._not = undefined;
      this._operation = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expectedValue = value.expectedValue;
      this._field = value.field;
      this._key = value.key;
      this._not = value.not;
      this._operation = value.operation;
      this._order = value.order;
    }
  }

  // expected_value - computed: false, optional: true, required: false
  private _expectedValue?: string; 
  public get expectedValue() {
    return this.getStringAttribute('expected_value');
  }
  public set expectedValue(value: string) {
    this._expectedValue = value;
  }
  public resetExpectedValue() {
    this._expectedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedValueInput() {
    return this._expectedValue;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // not - computed: false, optional: true, required: false
  private _not?: boolean | cdktf.IResolvable; 
  public get not() {
    return this.getBooleanAttribute('not');
  }
  public set not(value: boolean | cdktf.IResolvable) {
    this._not = value;
  }
  public resetNot() {
    this._not = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}

export class NotificationPolicyFilterConditionsList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyFilterConditions[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyFilterConditionsOutputReference {
    return new NotificationPolicyFilterConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#type NotificationPolicy#type}
  */
  readonly type?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#conditions NotificationPolicy#conditions}
  */
  readonly conditions?: NotificationPolicyFilterConditions[] | cdktf.IResolvable;
}

export function notificationPolicyFilterToTerraform(struct?: NotificationPolicyFilterOutputReference | NotificationPolicyFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    conditions: cdktf.listMapper(notificationPolicyFilterConditionsToTerraform, true)(struct!.conditions),
  }
}


export function notificationPolicyFilterToHclTerraform(struct?: NotificationPolicyFilterOutputReference | NotificationPolicyFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(notificationPolicyFilterConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "NotificationPolicyFilterConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationPolicyFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._conditions.internalValue = value.conditions;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new NotificationPolicyFilterConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: NotificationPolicyFilterConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface NotificationPolicyTimeRestrictionRestriction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#end_hour NotificationPolicy#end_hour}
  */
  readonly endHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#end_min NotificationPolicy#end_min}
  */
  readonly endMin: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#start_hour NotificationPolicy#start_hour}
  */
  readonly startHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#start_min NotificationPolicy#start_min}
  */
  readonly startMin: number;
}

export function notificationPolicyTimeRestrictionRestrictionToTerraform(struct?: NotificationPolicyTimeRestrictionRestrictionOutputReference | NotificationPolicyTimeRestrictionRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_hour: cdktf.numberToTerraform(struct!.endHour),
    end_min: cdktf.numberToTerraform(struct!.endMin),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
    start_min: cdktf.numberToTerraform(struct!.startMin),
  }
}


export function notificationPolicyTimeRestrictionRestrictionToHclTerraform(struct?: NotificationPolicyTimeRestrictionRestrictionOutputReference | NotificationPolicyTimeRestrictionRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_hour: {
      value: cdktf.numberToHclTerraform(struct!.endHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_min: {
      value: cdktf.numberToHclTerraform(struct!.endMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_hour: {
      value: cdktf.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_min: {
      value: cdktf.numberToHclTerraform(struct!.startMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyTimeRestrictionRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationPolicyTimeRestrictionRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.endHour = this._endHour;
    }
    if (this._endMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.endMin = this._endMin;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._startMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMin = this._startMin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyTimeRestrictionRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endHour = undefined;
      this._endMin = undefined;
      this._startHour = undefined;
      this._startMin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endHour = value.endHour;
      this._endMin = value.endMin;
      this._startHour = value.startHour;
      this._startMin = value.startMin;
    }
  }

  // end_hour - computed: false, optional: false, required: true
  private _endHour?: number; 
  public get endHour() {
    return this.getNumberAttribute('end_hour');
  }
  public set endHour(value: number) {
    this._endHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endHourInput() {
    return this._endHour;
  }

  // end_min - computed: false, optional: false, required: true
  private _endMin?: number; 
  public get endMin() {
    return this.getNumberAttribute('end_min');
  }
  public set endMin(value: number) {
    this._endMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endMinInput() {
    return this._endMin;
  }

  // start_hour - computed: false, optional: false, required: true
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // start_min - computed: false, optional: false, required: true
  private _startMin?: number; 
  public get startMin() {
    return this.getNumberAttribute('start_min');
  }
  public set startMin(value: number) {
    this._startMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startMinInput() {
    return this._startMin;
  }
}
export interface NotificationPolicyTimeRestrictionRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#end_day NotificationPolicy#end_day}
  */
  readonly endDay: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#end_hour NotificationPolicy#end_hour}
  */
  readonly endHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#end_min NotificationPolicy#end_min}
  */
  readonly endMin: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#start_day NotificationPolicy#start_day}
  */
  readonly startDay: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#start_hour NotificationPolicy#start_hour}
  */
  readonly startHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#start_min NotificationPolicy#start_min}
  */
  readonly startMin: number;
}

export function notificationPolicyTimeRestrictionRestrictionsToTerraform(struct?: NotificationPolicyTimeRestrictionRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_day: cdktf.stringToTerraform(struct!.endDay),
    end_hour: cdktf.numberToTerraform(struct!.endHour),
    end_min: cdktf.numberToTerraform(struct!.endMin),
    start_day: cdktf.stringToTerraform(struct!.startDay),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
    start_min: cdktf.numberToTerraform(struct!.startMin),
  }
}


export function notificationPolicyTimeRestrictionRestrictionsToHclTerraform(struct?: NotificationPolicyTimeRestrictionRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_day: {
      value: cdktf.stringToHclTerraform(struct!.endDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_hour: {
      value: cdktf.numberToHclTerraform(struct!.endHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_min: {
      value: cdktf.numberToHclTerraform(struct!.endMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_day: {
      value: cdktf.stringToHclTerraform(struct!.startDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_hour: {
      value: cdktf.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_min: {
      value: cdktf.numberToHclTerraform(struct!.startMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyTimeRestrictionRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyTimeRestrictionRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDay = this._endDay;
    }
    if (this._endHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.endHour = this._endHour;
    }
    if (this._endMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.endMin = this._endMin;
    }
    if (this._startDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDay = this._startDay;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._startMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMin = this._startMin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyTimeRestrictionRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endDay = undefined;
      this._endHour = undefined;
      this._endMin = undefined;
      this._startDay = undefined;
      this._startHour = undefined;
      this._startMin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endDay = value.endDay;
      this._endHour = value.endHour;
      this._endMin = value.endMin;
      this._startDay = value.startDay;
      this._startHour = value.startHour;
      this._startMin = value.startMin;
    }
  }

  // end_day - computed: false, optional: false, required: true
  private _endDay?: string; 
  public get endDay() {
    return this.getStringAttribute('end_day');
  }
  public set endDay(value: string) {
    this._endDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDayInput() {
    return this._endDay;
  }

  // end_hour - computed: false, optional: false, required: true
  private _endHour?: number; 
  public get endHour() {
    return this.getNumberAttribute('end_hour');
  }
  public set endHour(value: number) {
    this._endHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endHourInput() {
    return this._endHour;
  }

  // end_min - computed: false, optional: false, required: true
  private _endMin?: number; 
  public get endMin() {
    return this.getNumberAttribute('end_min');
  }
  public set endMin(value: number) {
    this._endMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endMinInput() {
    return this._endMin;
  }

  // start_day - computed: false, optional: false, required: true
  private _startDay?: string; 
  public get startDay() {
    return this.getStringAttribute('start_day');
  }
  public set startDay(value: string) {
    this._startDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDayInput() {
    return this._startDay;
  }

  // start_hour - computed: false, optional: false, required: true
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // start_min - computed: false, optional: false, required: true
  private _startMin?: number; 
  public get startMin() {
    return this.getNumberAttribute('start_min');
  }
  public set startMin(value: number) {
    this._startMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startMinInput() {
    return this._startMin;
  }
}

export class NotificationPolicyTimeRestrictionRestrictionsList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyTimeRestrictionRestrictions[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyTimeRestrictionRestrictionsOutputReference {
    return new NotificationPolicyTimeRestrictionRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyTimeRestriction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#type NotificationPolicy#type}
  */
  readonly type: string;
  /**
  * restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#restriction NotificationPolicy#restriction}
  */
  readonly restriction?: NotificationPolicyTimeRestrictionRestriction;
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#restrictions NotificationPolicy#restrictions}
  */
  readonly restrictions?: NotificationPolicyTimeRestrictionRestrictions[] | cdktf.IResolvable;
}

export function notificationPolicyTimeRestrictionToTerraform(struct?: NotificationPolicyTimeRestrictionOutputReference | NotificationPolicyTimeRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    restriction: notificationPolicyTimeRestrictionRestrictionToTerraform(struct!.restriction),
    restrictions: cdktf.listMapper(notificationPolicyTimeRestrictionRestrictionsToTerraform, true)(struct!.restrictions),
  }
}


export function notificationPolicyTimeRestrictionToHclTerraform(struct?: NotificationPolicyTimeRestrictionOutputReference | NotificationPolicyTimeRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restriction: {
      value: notificationPolicyTimeRestrictionRestrictionToHclTerraform(struct!.restriction),
      isBlock: true,
      type: "set",
      storageClassType: "NotificationPolicyTimeRestrictionRestrictionList",
    },
    restrictions: {
      value: cdktf.listMapperHcl(notificationPolicyTimeRestrictionRestrictionsToHclTerraform, true)(struct!.restrictions),
      isBlock: true,
      type: "set",
      storageClassType: "NotificationPolicyTimeRestrictionRestrictionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyTimeRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationPolicyTimeRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._restriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restriction = this._restriction?.internalValue;
    }
    if (this._restrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictions = this._restrictions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyTimeRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._restriction.internalValue = undefined;
      this._restrictions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._restriction.internalValue = value.restriction;
      this._restrictions.internalValue = value.restrictions;
    }
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

  // restriction - computed: false, optional: true, required: false
  private _restriction = new NotificationPolicyTimeRestrictionRestrictionOutputReference(this, "restriction");
  public get restriction() {
    return this._restriction;
  }
  public putRestriction(value: NotificationPolicyTimeRestrictionRestriction) {
    this._restriction.internalValue = value;
  }
  public resetRestriction() {
    this._restriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionInput() {
    return this._restriction.internalValue;
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new NotificationPolicyTimeRestrictionRestrictionsList(this, "restrictions", true);
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: NotificationPolicyTimeRestrictionRestrictions[] | cdktf.IResolvable) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy opsgenie_notification_policy}
*/
export class NotificationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opsgenie_notification_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationPolicy to import
  * @param importFromId The id of the existing NotificationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opsgenie_notification_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_policy opsgenie_notification_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'opsgenie_notification_policy',
      terraformGeneratorMetadata: {
        providerName: 'opsgenie',
        providerVersion: '0.6.40'
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
    this._name = config.name;
    this._policyDescription = config.policyDescription;
    this._suppress = config.suppress;
    this._teamId = config.teamId;
    this._autoCloseAction.internalValue = config.autoCloseAction;
    this._autoRestartAction.internalValue = config.autoRestartAction;
    this._deDuplicationAction.internalValue = config.deDuplicationAction;
    this._delayAction.internalValue = config.delayAction;
    this._filter.internalValue = config.filter;
    this._timeRestriction.internalValue = config.timeRestriction;
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

  // policy_description - computed: false, optional: true, required: false
  private _policyDescription?: string; 
  public get policyDescription() {
    return this.getStringAttribute('policy_description');
  }
  public set policyDescription(value: string) {
    this._policyDescription = value;
  }
  public resetPolicyDescription() {
    this._policyDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDescriptionInput() {
    return this._policyDescription;
  }

  // suppress - computed: false, optional: true, required: false
  private _suppress?: boolean | cdktf.IResolvable; 
  public get suppress() {
    return this.getBooleanAttribute('suppress');
  }
  public set suppress(value: boolean | cdktf.IResolvable) {
    this._suppress = value;
  }
  public resetSuppress() {
    this._suppress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressInput() {
    return this._suppress;
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

  // auto_close_action - computed: false, optional: true, required: false
  private _autoCloseAction = new NotificationPolicyAutoCloseActionOutputReference(this, "auto_close_action");
  public get autoCloseAction() {
    return this._autoCloseAction;
  }
  public putAutoCloseAction(value: NotificationPolicyAutoCloseAction) {
    this._autoCloseAction.internalValue = value;
  }
  public resetAutoCloseAction() {
    this._autoCloseAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCloseActionInput() {
    return this._autoCloseAction.internalValue;
  }

  // auto_restart_action - computed: false, optional: true, required: false
  private _autoRestartAction = new NotificationPolicyAutoRestartActionOutputReference(this, "auto_restart_action");
  public get autoRestartAction() {
    return this._autoRestartAction;
  }
  public putAutoRestartAction(value: NotificationPolicyAutoRestartAction) {
    this._autoRestartAction.internalValue = value;
  }
  public resetAutoRestartAction() {
    this._autoRestartAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRestartActionInput() {
    return this._autoRestartAction.internalValue;
  }

  // de_duplication_action - computed: false, optional: true, required: false
  private _deDuplicationAction = new NotificationPolicyDeDuplicationActionOutputReference(this, "de_duplication_action");
  public get deDuplicationAction() {
    return this._deDuplicationAction;
  }
  public putDeDuplicationAction(value: NotificationPolicyDeDuplicationAction) {
    this._deDuplicationAction.internalValue = value;
  }
  public resetDeDuplicationAction() {
    this._deDuplicationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deDuplicationActionInput() {
    return this._deDuplicationAction.internalValue;
  }

  // delay_action - computed: false, optional: true, required: false
  private _delayAction = new NotificationPolicyDelayActionOutputReference(this, "delay_action");
  public get delayAction() {
    return this._delayAction;
  }
  public putDelayAction(value: NotificationPolicyDelayAction) {
    this._delayAction.internalValue = value;
  }
  public resetDelayAction() {
    this._delayAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayActionInput() {
    return this._delayAction.internalValue;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new NotificationPolicyFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: NotificationPolicyFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // time_restriction - computed: false, optional: true, required: false
  private _timeRestriction = new NotificationPolicyTimeRestrictionOutputReference(this, "time_restriction");
  public get timeRestriction() {
    return this._timeRestriction;
  }
  public putTimeRestriction(value: NotificationPolicyTimeRestriction) {
    this._timeRestriction.internalValue = value;
  }
  public resetTimeRestriction() {
    this._timeRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRestrictionInput() {
    return this._timeRestriction.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy_description: cdktf.stringToTerraform(this._policyDescription),
      suppress: cdktf.booleanToTerraform(this._suppress),
      team_id: cdktf.stringToTerraform(this._teamId),
      auto_close_action: notificationPolicyAutoCloseActionToTerraform(this._autoCloseAction.internalValue),
      auto_restart_action: notificationPolicyAutoRestartActionToTerraform(this._autoRestartAction.internalValue),
      de_duplication_action: notificationPolicyDeDuplicationActionToTerraform(this._deDuplicationAction.internalValue),
      delay_action: notificationPolicyDelayActionToTerraform(this._delayAction.internalValue),
      filter: notificationPolicyFilterToTerraform(this._filter.internalValue),
      time_restriction: notificationPolicyTimeRestrictionToTerraform(this._timeRestriction.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_description: {
        value: cdktf.stringToHclTerraform(this._policyDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress: {
        value: cdktf.booleanToHclTerraform(this._suppress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_close_action: {
        value: notificationPolicyAutoCloseActionToHclTerraform(this._autoCloseAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationPolicyAutoCloseActionList",
      },
      auto_restart_action: {
        value: notificationPolicyAutoRestartActionToHclTerraform(this._autoRestartAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationPolicyAutoRestartActionList",
      },
      de_duplication_action: {
        value: notificationPolicyDeDuplicationActionToHclTerraform(this._deDuplicationAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationPolicyDeDuplicationActionList",
      },
      delay_action: {
        value: notificationPolicyDelayActionToHclTerraform(this._delayAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationPolicyDelayActionList",
      },
      filter: {
        value: notificationPolicyFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationPolicyFilterList",
      },
      time_restriction: {
        value: notificationPolicyTimeRestrictionToHclTerraform(this._timeRestriction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationPolicyTimeRestrictionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
