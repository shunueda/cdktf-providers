// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafBotSceneUcbRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#domain WafBotSceneUcbRule#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#id WafBotSceneUcbRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When calling at the BOT global whitelist, pass `global`; When configuring BOT scenarios, transmit the specific scenario ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#scene_id WafBotSceneUcbRule#scene_id}
  */
  readonly sceneId: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#rule WafBotSceneUcbRule#rule}
  */
  readonly rule?: WafBotSceneUcbRuleRule;
}
export interface WafBotSceneUcbRuleRuleActionListStruct {
  /**
  * Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#action WafBotSceneUcbRule#action}
  */
  readonly action?: string;
  /**
  * Proportion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#proportion WafBotSceneUcbRule#proportion}
  */
  readonly proportion?: number;
}

export function wafBotSceneUcbRuleRuleActionListStructToTerraform(struct?: WafBotSceneUcbRuleRuleActionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    proportion: cdktf.numberToTerraform(struct!.proportion),
  }
}


export function wafBotSceneUcbRuleRuleActionListStructToHclTerraform(struct?: WafBotSceneUcbRuleRuleActionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proportion: {
      value: cdktf.numberToHclTerraform(struct!.proportion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafBotSceneUcbRuleRuleActionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafBotSceneUcbRuleRuleActionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._proportion !== undefined) {
      hasAnyValues = true;
      internalValueResult.proportion = this._proportion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafBotSceneUcbRuleRuleActionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._proportion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._proportion = value.proportion;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // proportion - computed: false, optional: true, required: false
  private _proportion?: number; 
  public get proportion() {
    return this.getNumberAttribute('proportion');
  }
  public set proportion(value: number) {
    this._proportion = value;
  }
  public resetProportion() {
    this._proportion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proportionInput() {
    return this._proportion;
  }
}

export class WafBotSceneUcbRuleRuleActionListStructList extends cdktf.ComplexList {
  public internalValue? : WafBotSceneUcbRuleRuleActionListStruct[] | cdktf.IResolvable

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
  public get(index: number): WafBotSceneUcbRuleRuleActionListStructOutputReference {
    return new WafBotSceneUcbRuleRuleActionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafBotSceneUcbRuleRuleJobDateTimeCron {
  /**
  * On what day of each month is it executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#days WafBotSceneUcbRule#days}
  */
  readonly days?: number[];
  /**
  * End time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#end_time WafBotSceneUcbRule#end_time}
  */
  readonly endTime?: string;
  /**
  * Start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#start_time WafBotSceneUcbRule#start_time}
  */
  readonly startTime?: string;
  /**
  * What day of the week is executed each week.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#w_days WafBotSceneUcbRule#w_days}
  */
  readonly wDays?: number[];
}

export function wafBotSceneUcbRuleRuleJobDateTimeCronToTerraform(struct?: WafBotSceneUcbRuleRuleJobDateTimeCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.days),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    w_days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.wDays),
  }
}


export function wafBotSceneUcbRuleRuleJobDateTimeCronToHclTerraform(struct?: WafBotSceneUcbRuleRuleJobDateTimeCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    w_days: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.wDays),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafBotSceneUcbRuleRuleJobDateTimeCronOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafBotSceneUcbRuleRuleJobDateTimeCron | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._wDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.wDays = this._wDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafBotSceneUcbRuleRuleJobDateTimeCron | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._wDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._wDays = value.wDays;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: number[]; 
  public get days() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days')));
  }
  public set days(value: number[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // w_days - computed: true, optional: true, required: false
  private _wDays?: number[]; 
  public get wDays() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('w_days')));
  }
  public set wDays(value: number[]) {
    this._wDays = value;
  }
  public resetWDays() {
    this._wDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wDaysInput() {
    return this._wDays;
  }
}

export class WafBotSceneUcbRuleRuleJobDateTimeCronList extends cdktf.ComplexList {
  public internalValue? : WafBotSceneUcbRuleRuleJobDateTimeCron[] | cdktf.IResolvable

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
  public get(index: number): WafBotSceneUcbRuleRuleJobDateTimeCronOutputReference {
    return new WafBotSceneUcbRuleRuleJobDateTimeCronOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafBotSceneUcbRuleRuleJobDateTimeTimed {
  /**
  * End timestamp, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#end_date_time WafBotSceneUcbRule#end_date_time}
  */
  readonly endDateTime?: number;
  /**
  * Start timestamp, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#start_date_time WafBotSceneUcbRule#start_date_time}
  */
  readonly startDateTime?: number;
}

export function wafBotSceneUcbRuleRuleJobDateTimeTimedToTerraform(struct?: WafBotSceneUcbRuleRuleJobDateTimeTimed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date_time: cdktf.numberToTerraform(struct!.endDateTime),
    start_date_time: cdktf.numberToTerraform(struct!.startDateTime),
  }
}


export function wafBotSceneUcbRuleRuleJobDateTimeTimedToHclTerraform(struct?: WafBotSceneUcbRuleRuleJobDateTimeTimed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date_time: {
      value: cdktf.numberToHclTerraform(struct!.endDateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_date_time: {
      value: cdktf.numberToHclTerraform(struct!.startDateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafBotSceneUcbRuleRuleJobDateTimeTimedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafBotSceneUcbRuleRuleJobDateTimeTimed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDateTime = this._endDateTime;
    }
    if (this._startDateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDateTime = this._startDateTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafBotSceneUcbRuleRuleJobDateTimeTimed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endDateTime = undefined;
      this._startDateTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endDateTime = value.endDateTime;
      this._startDateTime = value.startDateTime;
    }
  }

  // end_date_time - computed: true, optional: true, required: false
  private _endDateTime?: number; 
  public get endDateTime() {
    return this.getNumberAttribute('end_date_time');
  }
  public set endDateTime(value: number) {
    this._endDateTime = value;
  }
  public resetEndDateTime() {
    this._endDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateTimeInput() {
    return this._endDateTime;
  }

  // start_date_time - computed: true, optional: true, required: false
  private _startDateTime?: number; 
  public get startDateTime() {
    return this.getNumberAttribute('start_date_time');
  }
  public set startDateTime(value: number) {
    this._startDateTime = value;
  }
  public resetStartDateTime() {
    this._startDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateTimeInput() {
    return this._startDateTime;
  }
}

export class WafBotSceneUcbRuleRuleJobDateTimeTimedList extends cdktf.ComplexList {
  public internalValue? : WafBotSceneUcbRuleRuleJobDateTimeTimed[] | cdktf.IResolvable

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
  public get(index: number): WafBotSceneUcbRuleRuleJobDateTimeTimedOutputReference {
    return new WafBotSceneUcbRuleRuleJobDateTimeTimedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafBotSceneUcbRuleRuleJobDateTime {
  /**
  * Time zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#time_t_zone WafBotSceneUcbRule#time_t_zone}
  */
  readonly timeTZone?: string;
  /**
  * cron block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#cron WafBotSceneUcbRule#cron}
  */
  readonly cron?: WafBotSceneUcbRuleRuleJobDateTimeCron[] | cdktf.IResolvable;
  /**
  * timed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#timed WafBotSceneUcbRule#timed}
  */
  readonly timed?: WafBotSceneUcbRuleRuleJobDateTimeTimed[] | cdktf.IResolvable;
}

export function wafBotSceneUcbRuleRuleJobDateTimeToTerraform(struct?: WafBotSceneUcbRuleRuleJobDateTimeOutputReference | WafBotSceneUcbRuleRuleJobDateTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_t_zone: cdktf.stringToTerraform(struct!.timeTZone),
    cron: cdktf.listMapper(wafBotSceneUcbRuleRuleJobDateTimeCronToTerraform, true)(struct!.cron),
    timed: cdktf.listMapper(wafBotSceneUcbRuleRuleJobDateTimeTimedToTerraform, true)(struct!.timed),
  }
}


export function wafBotSceneUcbRuleRuleJobDateTimeToHclTerraform(struct?: WafBotSceneUcbRuleRuleJobDateTimeOutputReference | WafBotSceneUcbRuleRuleJobDateTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_t_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeTZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron: {
      value: cdktf.listMapperHcl(wafBotSceneUcbRuleRuleJobDateTimeCronToHclTerraform, true)(struct!.cron),
      isBlock: true,
      type: "list",
      storageClassType: "WafBotSceneUcbRuleRuleJobDateTimeCronList",
    },
    timed: {
      value: cdktf.listMapperHcl(wafBotSceneUcbRuleRuleJobDateTimeTimedToHclTerraform, true)(struct!.timed),
      isBlock: true,
      type: "list",
      storageClassType: "WafBotSceneUcbRuleRuleJobDateTimeTimedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafBotSceneUcbRuleRuleJobDateTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafBotSceneUcbRuleRuleJobDateTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeTZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTZone = this._timeTZone;
    }
    if (this._cron?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron?.internalValue;
    }
    if (this._timed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timed = this._timed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafBotSceneUcbRuleRuleJobDateTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeTZone = undefined;
      this._cron.internalValue = undefined;
      this._timed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeTZone = value.timeTZone;
      this._cron.internalValue = value.cron;
      this._timed.internalValue = value.timed;
    }
  }

  // time_t_zone - computed: false, optional: true, required: false
  private _timeTZone?: string; 
  public get timeTZone() {
    return this.getStringAttribute('time_t_zone');
  }
  public set timeTZone(value: string) {
    this._timeTZone = value;
  }
  public resetTimeTZone() {
    this._timeTZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTZoneInput() {
    return this._timeTZone;
  }

  // cron - computed: false, optional: true, required: false
  private _cron = new WafBotSceneUcbRuleRuleJobDateTimeCronList(this, "cron", false);
  public get cron() {
    return this._cron;
  }
  public putCron(value: WafBotSceneUcbRuleRuleJobDateTimeCron[] | cdktf.IResolvable) {
    this._cron.internalValue = value;
  }
  public resetCron() {
    this._cron.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron.internalValue;
  }

  // timed - computed: false, optional: true, required: false
  private _timed = new WafBotSceneUcbRuleRuleJobDateTimeTimedList(this, "timed", false);
  public get timed() {
    return this._timed;
  }
  public putTimed(value: WafBotSceneUcbRuleRuleJobDateTimeTimed[] | cdktf.IResolvable) {
    this._timed.internalValue = value;
  }
  public resetTimed() {
    this._timed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedInput() {
    return this._timed.internalValue;
  }
}
export interface WafBotSceneUcbRuleRuleRuleAreas {
  /**
  * City.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#city WafBotSceneUcbRule#city}
  */
  readonly city?: string;
  /**
  * In addition to standard countries, the country also supports two special identifiers: domestic and foreign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#country WafBotSceneUcbRule#country}
  */
  readonly country: string;
  /**
  * Province.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#region WafBotSceneUcbRule#region}
  */
  readonly region?: string;
}

export function wafBotSceneUcbRuleRuleRuleAreasToTerraform(struct?: WafBotSceneUcbRuleRuleRuleAreas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function wafBotSceneUcbRuleRuleRuleAreasToHclTerraform(struct?: WafBotSceneUcbRuleRuleRuleAreas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafBotSceneUcbRuleRuleRuleAreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafBotSceneUcbRuleRuleRuleAreas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafBotSceneUcbRuleRuleRuleAreas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._city = undefined;
      this._country = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._city = value.city;
      this._country = value.country;
      this._region = value.region;
    }
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class WafBotSceneUcbRuleRuleRuleAreasList extends cdktf.ComplexList {
  public internalValue? : WafBotSceneUcbRuleRuleRuleAreas[] | cdktf.IResolvable

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
  public get(index: number): WafBotSceneUcbRuleRuleRuleAreasOutputReference {
    return new WafBotSceneUcbRuleRuleRuleAreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafBotSceneUcbRuleRuleRuleValue {
  /**
  * String type value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#basic_value WafBotSceneUcbRule#basic_value}
  */
  readonly basicValue?: string;
  /**
  * String array type value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#belong_value WafBotSceneUcbRule#belong_value}
  */
  readonly belongValue?: string[];
  /**
  * Bool type value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#logic_value WafBotSceneUcbRule#logic_value}
  */
  readonly logicValue?: boolean | cdktf.IResolvable;
  /**
  * String array type value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#multi_value WafBotSceneUcbRule#multi_value}
  */
  readonly multiValue?: string[];
  /**
  * Indicate valid fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#valid_key WafBotSceneUcbRule#valid_key}
  */
  readonly validKey?: string;
}

export function wafBotSceneUcbRuleRuleRuleValueToTerraform(struct?: WafBotSceneUcbRuleRuleRuleValueOutputReference | WafBotSceneUcbRuleRuleRuleValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_value: cdktf.stringToTerraform(struct!.basicValue),
    belong_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.belongValue),
    logic_value: cdktf.booleanToTerraform(struct!.logicValue),
    multi_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValue),
    valid_key: cdktf.stringToTerraform(struct!.validKey),
  }
}


export function wafBotSceneUcbRuleRuleRuleValueToHclTerraform(struct?: WafBotSceneUcbRuleRuleRuleValueOutputReference | WafBotSceneUcbRuleRuleRuleValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_value: {
      value: cdktf.stringToHclTerraform(struct!.basicValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    belong_value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.belongValue),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    logic_value: {
      value: cdktf.booleanToHclTerraform(struct!.logicValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multi_value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValue),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    valid_key: {
      value: cdktf.stringToHclTerraform(struct!.validKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafBotSceneUcbRuleRuleRuleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafBotSceneUcbRuleRuleRuleValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicValue = this._basicValue;
    }
    if (this._belongValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.belongValue = this._belongValue;
    }
    if (this._logicValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicValue = this._logicValue;
    }
    if (this._multiValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValue = this._multiValue;
    }
    if (this._validKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.validKey = this._validKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafBotSceneUcbRuleRuleRuleValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicValue = undefined;
      this._belongValue = undefined;
      this._logicValue = undefined;
      this._multiValue = undefined;
      this._validKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicValue = value.basicValue;
      this._belongValue = value.belongValue;
      this._logicValue = value.logicValue;
      this._multiValue = value.multiValue;
      this._validKey = value.validKey;
    }
  }

  // basic_value - computed: false, optional: true, required: false
  private _basicValue?: string; 
  public get basicValue() {
    return this.getStringAttribute('basic_value');
  }
  public set basicValue(value: string) {
    this._basicValue = value;
  }
  public resetBasicValue() {
    this._basicValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicValueInput() {
    return this._basicValue;
  }

  // belong_value - computed: false, optional: true, required: false
  private _belongValue?: string[]; 
  public get belongValue() {
    return cdktf.Fn.tolist(this.getListAttribute('belong_value'));
  }
  public set belongValue(value: string[]) {
    this._belongValue = value;
  }
  public resetBelongValue() {
    this._belongValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get belongValueInput() {
    return this._belongValue;
  }

  // logic_value - computed: false, optional: true, required: false
  private _logicValue?: boolean | cdktf.IResolvable; 
  public get logicValue() {
    return this.getBooleanAttribute('logic_value');
  }
  public set logicValue(value: boolean | cdktf.IResolvable) {
    this._logicValue = value;
  }
  public resetLogicValue() {
    this._logicValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicValueInput() {
    return this._logicValue;
  }

  // multi_value - computed: false, optional: true, required: false
  private _multiValue?: string[]; 
  public get multiValue() {
    return cdktf.Fn.tolist(this.getListAttribute('multi_value'));
  }
  public set multiValue(value: string[]) {
    this._multiValue = value;
  }
  public resetMultiValue() {
    this._multiValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueInput() {
    return this._multiValue;
  }

  // valid_key - computed: true, optional: true, required: false
  private _validKey?: string; 
  public get validKey() {
    return this.getStringAttribute('valid_key');
  }
  public set validKey(value: string) {
    this._validKey = value;
  }
  public resetValidKey() {
    this._validKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validKeyInput() {
    return this._validKey;
  }
}
export interface WafBotSceneUcbRuleRuleRule {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#key WafBotSceneUcbRule#key}
  */
  readonly key?: string;
  /**
  * Language environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#lang WafBotSceneUcbRule#lang}
  */
  readonly lang?: string;
  /**
  * When using header parameter values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#name WafBotSceneUcbRule#name}
  */
  readonly name?: string;
  /**
  * Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#op WafBotSceneUcbRule#op}
  */
  readonly op?: string;
  /**
  * Optional supplementary parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#op_arg WafBotSceneUcbRule#op_arg}
  */
  readonly opArg?: string[];
  /**
  * Optional Supplementary Operators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#op_op WafBotSceneUcbRule#op_op}
  */
  readonly opOp?: string;
  /**
  * Optional supplementary values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#op_value WafBotSceneUcbRule#op_value}
  */
  readonly opValue?: number;
  /**
  * areas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#areas WafBotSceneUcbRule#areas}
  */
  readonly areas?: WafBotSceneUcbRuleRuleRuleAreas[] | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#value WafBotSceneUcbRule#value}
  */
  readonly value?: WafBotSceneUcbRuleRuleRuleValue;
}

export function wafBotSceneUcbRuleRuleRuleToTerraform(struct?: WafBotSceneUcbRuleRuleRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    lang: cdktf.stringToTerraform(struct!.lang),
    name: cdktf.stringToTerraform(struct!.name),
    op: cdktf.stringToTerraform(struct!.op),
    op_arg: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.opArg),
    op_op: cdktf.stringToTerraform(struct!.opOp),
    op_value: cdktf.numberToTerraform(struct!.opValue),
    areas: cdktf.listMapper(wafBotSceneUcbRuleRuleRuleAreasToTerraform, true)(struct!.areas),
    value: wafBotSceneUcbRuleRuleRuleValueToTerraform(struct!.value),
  }
}


export function wafBotSceneUcbRuleRuleRuleToHclTerraform(struct?: WafBotSceneUcbRuleRuleRule | cdktf.IResolvable): any {
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
    lang: {
      value: cdktf.stringToHclTerraform(struct!.lang),
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
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op_arg: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.opArg),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    op_op: {
      value: cdktf.stringToHclTerraform(struct!.opOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op_value: {
      value: cdktf.numberToHclTerraform(struct!.opValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    areas: {
      value: cdktf.listMapperHcl(wafBotSceneUcbRuleRuleRuleAreasToHclTerraform, true)(struct!.areas),
      isBlock: true,
      type: "list",
      storageClassType: "WafBotSceneUcbRuleRuleRuleAreasList",
    },
    value: {
      value: wafBotSceneUcbRuleRuleRuleValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "WafBotSceneUcbRuleRuleRuleValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafBotSceneUcbRuleRuleRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafBotSceneUcbRuleRuleRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._lang !== undefined) {
      hasAnyValues = true;
      internalValueResult.lang = this._lang;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._opArg !== undefined) {
      hasAnyValues = true;
      internalValueResult.opArg = this._opArg;
    }
    if (this._opOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.opOp = this._opOp;
    }
    if (this._opValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opValue = this._opValue;
    }
    if (this._areas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.areas = this._areas?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafBotSceneUcbRuleRuleRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._lang = undefined;
      this._name = undefined;
      this._op = undefined;
      this._opArg = undefined;
      this._opOp = undefined;
      this._opValue = undefined;
      this._areas.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._lang = value.lang;
      this._name = value.name;
      this._op = value.op;
      this._opArg = value.opArg;
      this._opOp = value.opOp;
      this._opValue = value.opValue;
      this._areas.internalValue = value.areas;
      this._value.internalValue = value.value;
    }
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

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
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

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // op_arg - computed: false, optional: true, required: false
  private _opArg?: string[]; 
  public get opArg() {
    return cdktf.Fn.tolist(this.getListAttribute('op_arg'));
  }
  public set opArg(value: string[]) {
    this._opArg = value;
  }
  public resetOpArg() {
    this._opArg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opArgInput() {
    return this._opArg;
  }

  // op_op - computed: false, optional: true, required: false
  private _opOp?: string; 
  public get opOp() {
    return this.getStringAttribute('op_op');
  }
  public set opOp(value: string) {
    this._opOp = value;
  }
  public resetOpOp() {
    this._opOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opOpInput() {
    return this._opOp;
  }

  // op_value - computed: false, optional: true, required: false
  private _opValue?: number; 
  public get opValue() {
    return this.getNumberAttribute('op_value');
  }
  public set opValue(value: number) {
    this._opValue = value;
  }
  public resetOpValue() {
    this._opValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opValueInput() {
    return this._opValue;
  }

  // areas - computed: false, optional: true, required: false
  private _areas = new WafBotSceneUcbRuleRuleRuleAreasList(this, "areas", false);
  public get areas() {
    return this._areas;
  }
  public putAreas(value: WafBotSceneUcbRuleRuleRuleAreas[] | cdktf.IResolvable) {
    this._areas.internalValue = value;
  }
  public resetAreas() {
    this._areas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areasInput() {
    return this._areas.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new WafBotSceneUcbRuleRuleRuleValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: WafBotSceneUcbRuleRuleRuleValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class WafBotSceneUcbRuleRuleRuleList extends cdktf.ComplexList {
  public internalValue? : WafBotSceneUcbRuleRuleRule[] | cdktf.IResolvable

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
  public get(index: number): WafBotSceneUcbRuleRuleRuleOutputReference {
    return new WafBotSceneUcbRuleRuleRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafBotSceneUcbRuleRule {
  /**
  * Disposal action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#action WafBotSceneUcbRule#action}
  */
  readonly action: string;
  /**
  * Additional parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#addition_arg WafBotSceneUcbRule#addition_arg}
  */
  readonly additionArg?: string;
  /**
  * Appid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#appid WafBotSceneUcbRule#appid}
  */
  readonly appid?: number;
  /**
  * Customize interception page ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#block_page_id WafBotSceneUcbRule#block_page_id}
  */
  readonly blockPageId?: number;
  /**
  * Rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#desc WafBotSceneUcbRule#desc}
  */
  readonly desc?: string;
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#domain WafBotSceneUcbRule#domain}
  */
  readonly domain: string;
  /**
  * Effective deadline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#expire_time WafBotSceneUcbRule#expire_time}
  */
  readonly expireTime?: number;
  /**
  * Entry ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#id WafBotSceneUcbRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Scheduled task type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#job_type WafBotSceneUcbRule#job_type}
  */
  readonly jobType?: string;
  /**
  * Label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#label WafBotSceneUcbRule#label}
  */
  readonly label: string;
  /**
  * Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#name WafBotSceneUcbRule#name}
  */
  readonly name: string;
  /**
  * Rule switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#on_off WafBotSceneUcbRule#on_off}
  */
  readonly onOff: string;
  /**
  * True - System preset rules False - Custom rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#pre_define WafBotSceneUcbRule#pre_define}
  */
  readonly preDefine?: boolean | cdktf.IResolvable;
  /**
  * Rule priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#prior WafBotSceneUcbRule#prior}
  */
  readonly prior: number;
  /**
  * Rule type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#rule_type WafBotSceneUcbRule#rule_type}
  */
  readonly ruleType: number;
  /**
  * Scene ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#scene_id WafBotSceneUcbRule#scene_id}
  */
  readonly sceneId?: string;
  /**
  * Effective -1, Invalid -0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#valid_status WafBotSceneUcbRule#valid_status}
  */
  readonly validStatus?: number;
  /**
  * Valid time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#valid_time WafBotSceneUcbRule#valid_time}
  */
  readonly validTime?: number;
  /**
  * action_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#action_list WafBotSceneUcbRule#action_list}
  */
  readonly actionList?: WafBotSceneUcbRuleRuleActionListStruct[] | cdktf.IResolvable;
  /**
  * job_date_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#job_date_time WafBotSceneUcbRule#job_date_time}
  */
  readonly jobDateTime?: WafBotSceneUcbRuleRuleJobDateTime;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#rule WafBotSceneUcbRule#rule}
  */
  readonly rule: WafBotSceneUcbRuleRuleRule[] | cdktf.IResolvable;
}

export function wafBotSceneUcbRuleRuleToTerraform(struct?: WafBotSceneUcbRuleRuleOutputReference | WafBotSceneUcbRuleRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    addition_arg: cdktf.stringToTerraform(struct!.additionArg),
    appid: cdktf.numberToTerraform(struct!.appid),
    block_page_id: cdktf.numberToTerraform(struct!.blockPageId),
    desc: cdktf.stringToTerraform(struct!.desc),
    domain: cdktf.stringToTerraform(struct!.domain),
    expire_time: cdktf.numberToTerraform(struct!.expireTime),
    id: cdktf.stringToTerraform(struct!.id),
    job_type: cdktf.stringToTerraform(struct!.jobType),
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
    on_off: cdktf.stringToTerraform(struct!.onOff),
    pre_define: cdktf.booleanToTerraform(struct!.preDefine),
    prior: cdktf.numberToTerraform(struct!.prior),
    rule_type: cdktf.numberToTerraform(struct!.ruleType),
    scene_id: cdktf.stringToTerraform(struct!.sceneId),
    valid_status: cdktf.numberToTerraform(struct!.validStatus),
    valid_time: cdktf.numberToTerraform(struct!.validTime),
    action_list: cdktf.listMapper(wafBotSceneUcbRuleRuleActionListStructToTerraform, true)(struct!.actionList),
    job_date_time: wafBotSceneUcbRuleRuleJobDateTimeToTerraform(struct!.jobDateTime),
    rule: cdktf.listMapper(wafBotSceneUcbRuleRuleRuleToTerraform, true)(struct!.rule),
  }
}


export function wafBotSceneUcbRuleRuleToHclTerraform(struct?: WafBotSceneUcbRuleRuleOutputReference | WafBotSceneUcbRuleRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addition_arg: {
      value: cdktf.stringToHclTerraform(struct!.additionArg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appid: {
      value: cdktf.numberToHclTerraform(struct!.appid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_page_id: {
      value: cdktf.numberToHclTerraform(struct!.blockPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    desc: {
      value: cdktf.stringToHclTerraform(struct!.desc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expire_time: {
      value: cdktf.numberToHclTerraform(struct!.expireTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_type: {
      value: cdktf.stringToHclTerraform(struct!.jobType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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
    on_off: {
      value: cdktf.stringToHclTerraform(struct!.onOff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_define: {
      value: cdktf.booleanToHclTerraform(struct!.preDefine),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prior: {
      value: cdktf.numberToHclTerraform(struct!.prior),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_type: {
      value: cdktf.numberToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scene_id: {
      value: cdktf.stringToHclTerraform(struct!.sceneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_status: {
      value: cdktf.numberToHclTerraform(struct!.validStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    valid_time: {
      value: cdktf.numberToHclTerraform(struct!.validTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action_list: {
      value: cdktf.listMapperHcl(wafBotSceneUcbRuleRuleActionListStructToHclTerraform, true)(struct!.actionList),
      isBlock: true,
      type: "list",
      storageClassType: "WafBotSceneUcbRuleRuleActionListStructList",
    },
    job_date_time: {
      value: wafBotSceneUcbRuleRuleJobDateTimeToHclTerraform(struct!.jobDateTime),
      isBlock: true,
      type: "list",
      storageClassType: "WafBotSceneUcbRuleRuleJobDateTimeList",
    },
    rule: {
      value: cdktf.listMapperHcl(wafBotSceneUcbRuleRuleRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "WafBotSceneUcbRuleRuleRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafBotSceneUcbRuleRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafBotSceneUcbRuleRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._additionArg !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionArg = this._additionArg;
    }
    if (this._appid !== undefined) {
      hasAnyValues = true;
      internalValueResult.appid = this._appid;
    }
    if (this._blockPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPageId = this._blockPageId;
    }
    if (this._desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._expireTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireTime = this._expireTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._jobType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobType = this._jobType;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onOff !== undefined) {
      hasAnyValues = true;
      internalValueResult.onOff = this._onOff;
    }
    if (this._preDefine !== undefined) {
      hasAnyValues = true;
      internalValueResult.preDefine = this._preDefine;
    }
    if (this._prior !== undefined) {
      hasAnyValues = true;
      internalValueResult.prior = this._prior;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._sceneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sceneId = this._sceneId;
    }
    if (this._validStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.validStatus = this._validStatus;
    }
    if (this._validTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validTime = this._validTime;
    }
    if (this._actionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionList = this._actionList?.internalValue;
    }
    if (this._jobDateTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobDateTime = this._jobDateTime?.internalValue;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafBotSceneUcbRuleRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._additionArg = undefined;
      this._appid = undefined;
      this._blockPageId = undefined;
      this._desc = undefined;
      this._domain = undefined;
      this._expireTime = undefined;
      this._id = undefined;
      this._jobType = undefined;
      this._label = undefined;
      this._name = undefined;
      this._onOff = undefined;
      this._preDefine = undefined;
      this._prior = undefined;
      this._ruleType = undefined;
      this._sceneId = undefined;
      this._validStatus = undefined;
      this._validTime = undefined;
      this._actionList.internalValue = undefined;
      this._jobDateTime.internalValue = undefined;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._additionArg = value.additionArg;
      this._appid = value.appid;
      this._blockPageId = value.blockPageId;
      this._desc = value.desc;
      this._domain = value.domain;
      this._expireTime = value.expireTime;
      this._id = value.id;
      this._jobType = value.jobType;
      this._label = value.label;
      this._name = value.name;
      this._onOff = value.onOff;
      this._preDefine = value.preDefine;
      this._prior = value.prior;
      this._ruleType = value.ruleType;
      this._sceneId = value.sceneId;
      this._validStatus = value.validStatus;
      this._validTime = value.validTime;
      this._actionList.internalValue = value.actionList;
      this._jobDateTime.internalValue = value.jobDateTime;
      this._rule.internalValue = value.rule;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // addition_arg - computed: false, optional: true, required: false
  private _additionArg?: string; 
  public get additionArg() {
    return this.getStringAttribute('addition_arg');
  }
  public set additionArg(value: string) {
    this._additionArg = value;
  }
  public resetAdditionArg() {
    this._additionArg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionArgInput() {
    return this._additionArg;
  }

  // appid - computed: false, optional: true, required: false
  private _appid?: number; 
  public get appid() {
    return this.getNumberAttribute('appid');
  }
  public set appid(value: number) {
    this._appid = value;
  }
  public resetAppid() {
    this._appid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appidInput() {
    return this._appid;
  }

  // block_page_id - computed: false, optional: true, required: false
  private _blockPageId?: number; 
  public get blockPageId() {
    return this.getNumberAttribute('block_page_id');
  }
  public set blockPageId(value: number) {
    this._blockPageId = value;
  }
  public resetBlockPageId() {
    this._blockPageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageIdInput() {
    return this._blockPageId;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // expire_time - computed: false, optional: true, required: false
  private _expireTime?: number; 
  public get expireTime() {
    return this.getNumberAttribute('expire_time');
  }
  public set expireTime(value: number) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }

  // id - computed: false, optional: true, required: false
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

  // job_type - computed: false, optional: true, required: false
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  public resetJobType() {
    this._jobType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // on_off - computed: false, optional: false, required: true
  private _onOff?: string; 
  public get onOff() {
    return this.getStringAttribute('on_off');
  }
  public set onOff(value: string) {
    this._onOff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onOffInput() {
    return this._onOff;
  }

  // pre_define - computed: false, optional: true, required: false
  private _preDefine?: boolean | cdktf.IResolvable; 
  public get preDefine() {
    return this.getBooleanAttribute('pre_define');
  }
  public set preDefine(value: boolean | cdktf.IResolvable) {
    this._preDefine = value;
  }
  public resetPreDefine() {
    this._preDefine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preDefineInput() {
    return this._preDefine;
  }

  // prior - computed: false, optional: false, required: true
  private _prior?: number; 
  public get prior() {
    return this.getNumberAttribute('prior');
  }
  public set prior(value: number) {
    this._prior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorInput() {
    return this._prior;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: number; 
  public get ruleType() {
    return this.getNumberAttribute('rule_type');
  }
  public set ruleType(value: number) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // scene_id - computed: true, optional: true, required: false
  private _sceneId?: string; 
  public get sceneId() {
    return this.getStringAttribute('scene_id');
  }
  public set sceneId(value: string) {
    this._sceneId = value;
  }
  public resetSceneId() {
    this._sceneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sceneIdInput() {
    return this._sceneId;
  }

  // valid_status - computed: true, optional: true, required: false
  private _validStatus?: number; 
  public get validStatus() {
    return this.getNumberAttribute('valid_status');
  }
  public set validStatus(value: number) {
    this._validStatus = value;
  }
  public resetValidStatus() {
    this._validStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validStatusInput() {
    return this._validStatus;
  }

  // valid_time - computed: false, optional: true, required: false
  private _validTime?: number; 
  public get validTime() {
    return this.getNumberAttribute('valid_time');
  }
  public set validTime(value: number) {
    this._validTime = value;
  }
  public resetValidTime() {
    this._validTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validTimeInput() {
    return this._validTime;
  }

  // action_list - computed: false, optional: true, required: false
  private _actionList = new WafBotSceneUcbRuleRuleActionListStructList(this, "action_list", false);
  public get actionList() {
    return this._actionList;
  }
  public putActionList(value: WafBotSceneUcbRuleRuleActionListStruct[] | cdktf.IResolvable) {
    this._actionList.internalValue = value;
  }
  public resetActionList() {
    this._actionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionListInput() {
    return this._actionList.internalValue;
  }

  // job_date_time - computed: false, optional: true, required: false
  private _jobDateTime = new WafBotSceneUcbRuleRuleJobDateTimeOutputReference(this, "job_date_time");
  public get jobDateTime() {
    return this._jobDateTime;
  }
  public putJobDateTime(value: WafBotSceneUcbRuleRuleJobDateTime) {
    this._jobDateTime.internalValue = value;
  }
  public resetJobDateTime() {
    this._jobDateTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDateTimeInput() {
    return this._jobDateTime.internalValue;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new WafBotSceneUcbRuleRuleRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: WafBotSceneUcbRuleRuleRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule tencentcloud_waf_bot_scene_ucb_rule}
*/
export class WafBotSceneUcbRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_bot_scene_ucb_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafBotSceneUcbRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafBotSceneUcbRule to import
  * @param importFromId The id of the existing WafBotSceneUcbRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafBotSceneUcbRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_bot_scene_ucb_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/waf_bot_scene_ucb_rule tencentcloud_waf_bot_scene_ucb_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafBotSceneUcbRuleConfig
  */
  public constructor(scope: Construct, id: string, config: WafBotSceneUcbRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_bot_scene_ucb_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._sceneId = config.sceneId;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // scene_id - computed: false, optional: false, required: true
  private _sceneId?: string; 
  public get sceneId() {
    return this.getStringAttribute('scene_id');
  }
  public set sceneId(value: string) {
    this._sceneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sceneIdInput() {
    return this._sceneId;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new WafBotSceneUcbRuleRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: WafBotSceneUcbRuleRule) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      scene_id: cdktf.stringToTerraform(this._sceneId),
      rule: wafBotSceneUcbRuleRuleToTerraform(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      scene_id: {
        value: cdktf.stringToHclTerraform(this._sceneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: wafBotSceneUcbRuleRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafBotSceneUcbRuleRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
