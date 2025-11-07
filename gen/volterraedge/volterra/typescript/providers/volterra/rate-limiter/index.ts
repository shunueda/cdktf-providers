// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RateLimiterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#annotations RateLimiter#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#description RateLimiter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#disable RateLimiter#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#id RateLimiter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#labels RateLimiter#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#name RateLimiter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#namespace RateLimiter#namespace}
  */
  readonly namespace: string;
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#limits RateLimiter#limits}
  */
  readonly limits: RateLimiterLimits[] | cdktf.IResolvable;
  /**
  * user_identification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#user_identification RateLimiter#user_identification}
  */
  readonly userIdentification?: RateLimiterUserIdentification[] | cdktf.IResolvable;
}
export interface RateLimiterLimitsActionBlockHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#duration RateLimiter#duration}
  */
  readonly duration?: number;
}

export function rateLimiterLimitsActionBlockHoursToTerraform(struct?: RateLimiterLimitsActionBlockHoursOutputReference | RateLimiterLimitsActionBlockHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function rateLimiterLimitsActionBlockHoursToHclTerraform(struct?: RateLimiterLimitsActionBlockHoursOutputReference | RateLimiterLimitsActionBlockHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterLimitsActionBlockHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterLimitsActionBlockHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterLimitsActionBlockHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface RateLimiterLimitsActionBlockMinutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#duration RateLimiter#duration}
  */
  readonly duration?: number;
}

export function rateLimiterLimitsActionBlockMinutesToTerraform(struct?: RateLimiterLimitsActionBlockMinutesOutputReference | RateLimiterLimitsActionBlockMinutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function rateLimiterLimitsActionBlockMinutesToHclTerraform(struct?: RateLimiterLimitsActionBlockMinutesOutputReference | RateLimiterLimitsActionBlockMinutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterLimitsActionBlockMinutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterLimitsActionBlockMinutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterLimitsActionBlockMinutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface RateLimiterLimitsActionBlockSeconds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#duration RateLimiter#duration}
  */
  readonly duration?: number;
}

export function rateLimiterLimitsActionBlockSecondsToTerraform(struct?: RateLimiterLimitsActionBlockSecondsOutputReference | RateLimiterLimitsActionBlockSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function rateLimiterLimitsActionBlockSecondsToHclTerraform(struct?: RateLimiterLimitsActionBlockSecondsOutputReference | RateLimiterLimitsActionBlockSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterLimitsActionBlockSecondsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterLimitsActionBlockSeconds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterLimitsActionBlockSeconds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface RateLimiterLimitsActionBlock {
  /**
  * hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#hours RateLimiter#hours}
  */
  readonly hours?: RateLimiterLimitsActionBlockHours;
  /**
  * minutes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#minutes RateLimiter#minutes}
  */
  readonly minutes?: RateLimiterLimitsActionBlockMinutes;
  /**
  * seconds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#seconds RateLimiter#seconds}
  */
  readonly seconds?: RateLimiterLimitsActionBlockSeconds;
}

export function rateLimiterLimitsActionBlockToTerraform(struct?: RateLimiterLimitsActionBlockOutputReference | RateLimiterLimitsActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: rateLimiterLimitsActionBlockHoursToTerraform(struct!.hours),
    minutes: rateLimiterLimitsActionBlockMinutesToTerraform(struct!.minutes),
    seconds: rateLimiterLimitsActionBlockSecondsToTerraform(struct!.seconds),
  }
}


export function rateLimiterLimitsActionBlockToHclTerraform(struct?: RateLimiterLimitsActionBlockOutputReference | RateLimiterLimitsActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: rateLimiterLimitsActionBlockHoursToHclTerraform(struct!.hours),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterLimitsActionBlockHoursList",
    },
    minutes: {
      value: rateLimiterLimitsActionBlockMinutesToHclTerraform(struct!.minutes),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterLimitsActionBlockMinutesList",
    },
    seconds: {
      value: rateLimiterLimitsActionBlockSecondsToHclTerraform(struct!.seconds),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterLimitsActionBlockSecondsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterLimitsActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterLimitsActionBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours?.internalValue;
    }
    if (this._minutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes?.internalValue;
    }
    if (this._seconds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterLimitsActionBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours.internalValue = undefined;
      this._minutes.internalValue = undefined;
      this._seconds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours.internalValue = value.hours;
      this._minutes.internalValue = value.minutes;
      this._seconds.internalValue = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours = new RateLimiterLimitsActionBlockHoursOutputReference(this, "hours");
  public get hours() {
    return this._hours;
  }
  public putHours(value: RateLimiterLimitsActionBlockHours) {
    this._hours.internalValue = value;
  }
  public resetHours() {
    this._hours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours.internalValue;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes = new RateLimiterLimitsActionBlockMinutesOutputReference(this, "minutes");
  public get minutes() {
    return this._minutes;
  }
  public putMinutes(value: RateLimiterLimitsActionBlockMinutes) {
    this._minutes.internalValue = value;
  }
  public resetMinutes() {
    this._minutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes.internalValue;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds = new RateLimiterLimitsActionBlockSecondsOutputReference(this, "seconds");
  public get seconds() {
    return this._seconds;
  }
  public putSeconds(value: RateLimiterLimitsActionBlockSeconds) {
    this._seconds.internalValue = value;
  }
  public resetSeconds() {
    this._seconds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds.internalValue;
  }
}
export interface RateLimiterLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#burst_multiplier RateLimiter#burst_multiplier}
  */
  readonly burstMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#disabled RateLimiter#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#period_multiplier RateLimiter#period_multiplier}
  */
  readonly periodMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#total_number RateLimiter#total_number}
  */
  readonly totalNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#unit RateLimiter#unit}
  */
  readonly unit: string;
  /**
  * action_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#action_block RateLimiter#action_block}
  */
  readonly actionBlock?: RateLimiterLimitsActionBlock;
}

export function rateLimiterLimitsToTerraform(struct?: RateLimiterLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_multiplier: cdktf.numberToTerraform(struct!.burstMultiplier),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    period_multiplier: cdktf.numberToTerraform(struct!.periodMultiplier),
    total_number: cdktf.numberToTerraform(struct!.totalNumber),
    unit: cdktf.stringToTerraform(struct!.unit),
    action_block: rateLimiterLimitsActionBlockToTerraform(struct!.actionBlock),
  }
}


export function rateLimiterLimitsToHclTerraform(struct?: RateLimiterLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.burstMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    period_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.periodMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_number: {
      value: cdktf.numberToHclTerraform(struct!.totalNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_block: {
      value: rateLimiterLimitsActionBlockToHclTerraform(struct!.actionBlock),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterLimitsActionBlockList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RateLimiterLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstMultiplier = this._burstMultiplier;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._periodMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodMultiplier = this._periodMultiplier;
    }
    if (this._totalNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNumber = this._totalNumber;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._actionBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionBlock = this._actionBlock?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstMultiplier = undefined;
      this._disabled = undefined;
      this._periodMultiplier = undefined;
      this._totalNumber = undefined;
      this._unit = undefined;
      this._actionBlock.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstMultiplier = value.burstMultiplier;
      this._disabled = value.disabled;
      this._periodMultiplier = value.periodMultiplier;
      this._totalNumber = value.totalNumber;
      this._unit = value.unit;
      this._actionBlock.internalValue = value.actionBlock;
    }
  }

  // burst_multiplier - computed: false, optional: true, required: false
  private _burstMultiplier?: number; 
  public get burstMultiplier() {
    return this.getNumberAttribute('burst_multiplier');
  }
  public set burstMultiplier(value: number) {
    this._burstMultiplier = value;
  }
  public resetBurstMultiplier() {
    this._burstMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstMultiplierInput() {
    return this._burstMultiplier;
  }

  // disabled - computed: false, optional: true, required: false
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

  // period_multiplier - computed: false, optional: true, required: false
  private _periodMultiplier?: number; 
  public get periodMultiplier() {
    return this.getNumberAttribute('period_multiplier');
  }
  public set periodMultiplier(value: number) {
    this._periodMultiplier = value;
  }
  public resetPeriodMultiplier() {
    this._periodMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodMultiplierInput() {
    return this._periodMultiplier;
  }

  // total_number - computed: false, optional: false, required: true
  private _totalNumber?: number; 
  public get totalNumber() {
    return this.getNumberAttribute('total_number');
  }
  public set totalNumber(value: number) {
    this._totalNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNumberInput() {
    return this._totalNumber;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // action_block - computed: false, optional: true, required: false
  private _actionBlock = new RateLimiterLimitsActionBlockOutputReference(this, "action_block");
  public get actionBlock() {
    return this._actionBlock;
  }
  public putActionBlock(value: RateLimiterLimitsActionBlock) {
    this._actionBlock.internalValue = value;
  }
  public resetActionBlock() {
    this._actionBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionBlockInput() {
    return this._actionBlock.internalValue;
  }
}

export class RateLimiterLimitsList extends cdktf.ComplexList {
  public internalValue? : RateLimiterLimits[] | cdktf.IResolvable

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
  public get(index: number): RateLimiterLimitsOutputReference {
    return new RateLimiterLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RateLimiterUserIdentification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#name RateLimiter#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#namespace RateLimiter#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#tenant RateLimiter#tenant}
  */
  readonly tenant?: string;
}

export function rateLimiterUserIdentificationToTerraform(struct?: RateLimiterUserIdentification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function rateLimiterUserIdentificationToHclTerraform(struct?: RateLimiterUserIdentification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterUserIdentificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RateLimiterUserIdentification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterUserIdentification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class RateLimiterUserIdentificationList extends cdktf.ComplexList {
  public internalValue? : RateLimiterUserIdentification[] | cdktf.IResolvable

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
  public get(index: number): RateLimiterUserIdentificationOutputReference {
    return new RateLimiterUserIdentificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter volterra_rate_limiter}
*/
export class RateLimiter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_rate_limiter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RateLimiter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RateLimiter to import
  * @param importFromId The id of the existing RateLimiter that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RateLimiter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_rate_limiter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter volterra_rate_limiter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RateLimiterConfig
  */
  public constructor(scope: Construct, id: string, config: RateLimiterConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_rate_limiter',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._limits.internalValue = config.limits;
    this._userIdentification.internalValue = config.userIdentification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // limits - computed: false, optional: false, required: true
  private _limits = new RateLimiterLimitsList(this, "limits", false);
  public get limits() {
    return this._limits;
  }
  public putLimits(value: RateLimiterLimits[] | cdktf.IResolvable) {
    this._limits.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // user_identification - computed: false, optional: true, required: false
  private _userIdentification = new RateLimiterUserIdentificationList(this, "user_identification", false);
  public get userIdentification() {
    return this._userIdentification;
  }
  public putUserIdentification(value: RateLimiterUserIdentification[] | cdktf.IResolvable) {
    this._userIdentification.internalValue = value;
  }
  public resetUserIdentification() {
    this._userIdentification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentificationInput() {
    return this._userIdentification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      limits: cdktf.listMapper(rateLimiterLimitsToTerraform, true)(this._limits.internalValue),
      user_identification: cdktf.listMapper(rateLimiterUserIdentificationToTerraform, true)(this._userIdentification.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
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
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limits: {
        value: cdktf.listMapperHcl(rateLimiterLimitsToHclTerraform, true)(this._limits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RateLimiterLimitsList",
      },
      user_identification: {
        value: cdktf.listMapperHcl(rateLimiterUserIdentificationToHclTerraform, true)(this._userIdentification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RateLimiterUserIdentificationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
