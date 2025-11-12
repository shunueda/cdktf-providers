// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaAlertingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * A number that indicates how many consecutive runs need to meet the rule conditions for an alert to occur.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#alert_delay KibanaAlertingRule#alert_delay}
  */
  readonly alertDelay?: number;
  /**
  * The name of the application or feature that owns the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#consumer KibanaAlertingRule#consumer}
  */
  readonly consumer: string;
  /**
  * Indicates if you want to run the rule on an interval basis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#enabled KibanaAlertingRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#id KibanaAlertingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The check interval, which specifies how frequently the rule conditions are checked. The interval must be specified in seconds, minutes, hours or days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#interval KibanaAlertingRule#interval}
  */
  readonly interval: string;
  /**
  * The name of the rule. While this name does not have to be unique, a distinctive name can help you identify a rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#name KibanaAlertingRule#name}
  */
  readonly name: string;
  /**
  * Required until v8.6.0. Deprecated in v8.13.0. Use the `notify_when` property in the action `frequency` object instead. Defines how often alerts generate actions. Valid values include: `onActionGroupChange`: Actions run when the alert status changes; `onActiveAlert`: Actions run when the alert becomes active and at each check interval while the rule conditions are met; `onThrottleInterval`: Actions run when the alert becomes active and at the interval specified in the throttle property while the rule conditions are met. NOTE: This is a rule level property; if you update the rule in Kibana, it is automatically changed to use action-specific `notify_when` values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#notify_when KibanaAlertingRule#notify_when}
  */
  readonly notifyWhen?: string;
  /**
  * The rule parameters, which differ for each rule type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#params KibanaAlertingRule#params}
  */
  readonly params: string;
  /**
  * The identifier for the rule. Until Kibana version 8.17.0 this should be a UUID v1 or v4, for later versions any format can be used. If it is omitted, an ID is randomly generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#rule_id KibanaAlertingRule#rule_id}
  */
  readonly ruleId?: string;
  /**
  * The ID of the rule type that you want to call when the rule is scheduled to run. For more information about the valid values, list the rule types using [Get rule types API](https://www.elastic.co/guide/en/kibana/master/list-rule-types-api.html) or refer to the [Rule types documentation](https://www.elastic.co/guide/en/kibana/master/rule-types.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#rule_type_id KibanaAlertingRule#rule_type_id}
  */
  readonly ruleTypeId: string;
  /**
  * An identifier for the space. If space_id is not provided, the default space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#space_id KibanaAlertingRule#space_id}
  */
  readonly spaceId?: string;
  /**
  * A list of tag names that are applied to the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#tags KibanaAlertingRule#tags}
  */
  readonly tags?: string[];
  /**
  * Deprecated in 8.13.0. Defines how often an alert generates repeated actions. This custom action interval must be specified in seconds, minutes, hours, or days. For example, 10m or 1h. This property is applicable only if `notify_when` is `onThrottleInterval`. NOTE: This is a rule level property; if you update the rule in Kibana, it is automatically changed to use action-specific `throttle` values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#throttle KibanaAlertingRule#throttle}
  */
  readonly throttle?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#actions KibanaAlertingRule#actions}
  */
  readonly actions?: KibanaAlertingRuleActions[] | cdktf.IResolvable;
}
export interface KibanaAlertingRuleActionsAlertsFilterTimeframe {
  /**
  * Defines the days of the week that the action can run, represented as an array of numbers. For example, 1 represents Monday. An empty array is equivalent to specifying all the days of the week.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#days KibanaAlertingRule#days}
  */
  readonly days: number[];
  /**
  * Defines the range of time in a day that the action can run. The end of the time frame in 24-hour notation (hh:mm).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#hours_end KibanaAlertingRule#hours_end}
  */
  readonly hoursEnd: string;
  /**
  * Defines the range of time in a day that the action can run. The start of the time frame in 24-hour notation (hh:mm).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#hours_start KibanaAlertingRule#hours_start}
  */
  readonly hoursStart: string;
  /**
  * The ISO time zone for the hours values. Values such as UTC and UTC+1 also work but lack built-in daylight savings time support and are not recommended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#timezone KibanaAlertingRule#timezone}
  */
  readonly timezone: string;
}

export function kibanaAlertingRuleActionsAlertsFilterTimeframeToTerraform(struct?: KibanaAlertingRuleActionsAlertsFilterTimeframeOutputReference | KibanaAlertingRuleActionsAlertsFilterTimeframe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.days),
    hours_end: cdktf.stringToTerraform(struct!.hoursEnd),
    hours_start: cdktf.stringToTerraform(struct!.hoursStart),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function kibanaAlertingRuleActionsAlertsFilterTimeframeToHclTerraform(struct?: KibanaAlertingRuleActionsAlertsFilterTimeframeOutputReference | KibanaAlertingRuleActionsAlertsFilterTimeframe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    hours_end: {
      value: cdktf.stringToHclTerraform(struct!.hoursEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hours_start: {
      value: cdktf.stringToHclTerraform(struct!.hoursStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaAlertingRuleActionsAlertsFilterTimeframeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaAlertingRuleActionsAlertsFilterTimeframe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hoursEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.hoursEnd = this._hoursEnd;
    }
    if (this._hoursStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.hoursStart = this._hoursStart;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaAlertingRuleActionsAlertsFilterTimeframe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._hoursEnd = undefined;
      this._hoursStart = undefined;
      this._timezone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._hoursEnd = value.hoursEnd;
      this._hoursStart = value.hoursStart;
      this._timezone = value.timezone;
    }
  }

  // days - computed: false, optional: false, required: true
  private _days?: number[]; 
  public get days() {
    return this.getNumberListAttribute('days');
  }
  public set days(value: number[]) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours_end - computed: false, optional: false, required: true
  private _hoursEnd?: string; 
  public get hoursEnd() {
    return this.getStringAttribute('hours_end');
  }
  public set hoursEnd(value: string) {
    this._hoursEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursEndInput() {
    return this._hoursEnd;
  }

  // hours_start - computed: false, optional: false, required: true
  private _hoursStart?: string; 
  public get hoursStart() {
    return this.getStringAttribute('hours_start');
  }
  public set hoursStart(value: string) {
    this._hoursStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursStartInput() {
    return this._hoursStart;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface KibanaAlertingRuleActionsAlertsFilter {
  /**
  * Defines a query filter that determines whether the action runs. Written in Kibana Query Language (KQL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#kql KibanaAlertingRule#kql}
  */
  readonly kql?: string;
  /**
  * timeframe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#timeframe KibanaAlertingRule#timeframe}
  */
  readonly timeframe?: KibanaAlertingRuleActionsAlertsFilterTimeframe;
}

export function kibanaAlertingRuleActionsAlertsFilterToTerraform(struct?: KibanaAlertingRuleActionsAlertsFilterOutputReference | KibanaAlertingRuleActionsAlertsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kql: cdktf.stringToTerraform(struct!.kql),
    timeframe: kibanaAlertingRuleActionsAlertsFilterTimeframeToTerraform(struct!.timeframe),
  }
}


export function kibanaAlertingRuleActionsAlertsFilterToHclTerraform(struct?: KibanaAlertingRuleActionsAlertsFilterOutputReference | KibanaAlertingRuleActionsAlertsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kql: {
      value: cdktf.stringToHclTerraform(struct!.kql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeframe: {
      value: kibanaAlertingRuleActionsAlertsFilterTimeframeToHclTerraform(struct!.timeframe),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaAlertingRuleActionsAlertsFilterTimeframeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaAlertingRuleActionsAlertsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaAlertingRuleActionsAlertsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kql !== undefined) {
      hasAnyValues = true;
      internalValueResult.kql = this._kql;
    }
    if (this._timeframe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframe = this._timeframe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaAlertingRuleActionsAlertsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kql = undefined;
      this._timeframe.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kql = value.kql;
      this._timeframe.internalValue = value.timeframe;
    }
  }

  // kql - computed: false, optional: true, required: false
  private _kql?: string; 
  public get kql() {
    return this.getStringAttribute('kql');
  }
  public set kql(value: string) {
    this._kql = value;
  }
  public resetKql() {
    this._kql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kqlInput() {
    return this._kql;
  }

  // timeframe - computed: false, optional: true, required: false
  private _timeframe = new KibanaAlertingRuleActionsAlertsFilterTimeframeOutputReference(this, "timeframe");
  public get timeframe() {
    return this._timeframe;
  }
  public putTimeframe(value: KibanaAlertingRuleActionsAlertsFilterTimeframe) {
    this._timeframe.internalValue = value;
  }
  public resetTimeframe() {
    this._timeframe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe.internalValue;
  }
}
export interface KibanaAlertingRuleActionsFrequency {
  /**
  * Defines how often alerts generate actions. Valid values include: `onActionGroupChange`: Actions run when the alert status changes; `onActiveAlert`: Actions run when the alert becomes active and at each check interval while the rule conditions are met; `onThrottleInterval`: Actions run when the alert becomes active and at the interval specified in the throttle property while the rule conditions are met. NOTE: This is a rule level property; if you update the rule in Kibana, it is automatically changed to use action-specific `notify_when` values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#notify_when KibanaAlertingRule#notify_when}
  */
  readonly notifyWhen: string;
  /**
  * Indicates whether the action is a summary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#summary KibanaAlertingRule#summary}
  */
  readonly summary: boolean | cdktf.IResolvable;
  /**
  * Defines how often an alert generates repeated actions. This custom action interval must be specified in seconds, minutes, hours, or days. For example, 10m or 1h. This property is applicable only if `notify_when` is `onThrottleInterval`. NOTE: This is a rule level property; if you update the rule in Kibana, it is automatically changed to use action-specific `throttle` values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#throttle KibanaAlertingRule#throttle}
  */
  readonly throttle?: string;
}

export function kibanaAlertingRuleActionsFrequencyToTerraform(struct?: KibanaAlertingRuleActionsFrequencyOutputReference | KibanaAlertingRuleActionsFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notify_when: cdktf.stringToTerraform(struct!.notifyWhen),
    summary: cdktf.booleanToTerraform(struct!.summary),
    throttle: cdktf.stringToTerraform(struct!.throttle),
  }
}


export function kibanaAlertingRuleActionsFrequencyToHclTerraform(struct?: KibanaAlertingRuleActionsFrequencyOutputReference | KibanaAlertingRuleActionsFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notify_when: {
      value: cdktf.stringToHclTerraform(struct!.notifyWhen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.booleanToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    throttle: {
      value: cdktf.stringToHclTerraform(struct!.throttle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaAlertingRuleActionsFrequencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaAlertingRuleActionsFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifyWhen !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyWhen = this._notifyWhen;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._throttle !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttle = this._throttle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaAlertingRuleActionsFrequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notifyWhen = undefined;
      this._summary = undefined;
      this._throttle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notifyWhen = value.notifyWhen;
      this._summary = value.summary;
      this._throttle = value.throttle;
    }
  }

  // notify_when - computed: false, optional: false, required: true
  private _notifyWhen?: string; 
  public get notifyWhen() {
    return this.getStringAttribute('notify_when');
  }
  public set notifyWhen(value: string) {
    this._notifyWhen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyWhenInput() {
    return this._notifyWhen;
  }

  // summary - computed: false, optional: false, required: true
  private _summary?: boolean | cdktf.IResolvable; 
  public get summary() {
    return this.getBooleanAttribute('summary');
  }
  public set summary(value: boolean | cdktf.IResolvable) {
    this._summary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // throttle - computed: false, optional: true, required: false
  private _throttle?: string; 
  public get throttle() {
    return this.getStringAttribute('throttle');
  }
  public set throttle(value: string) {
    this._throttle = value;
  }
  public resetThrottle() {
    this._throttle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleInput() {
    return this._throttle;
  }
}
export interface KibanaAlertingRuleActions {
  /**
  * The group name, which affects when the action runs (for example, when the threshold is met or when the alert is recovered). Each rule type has a list of valid action group names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#group KibanaAlertingRule#group}
  */
  readonly group?: string;
  /**
  * The identifier for the connector saved object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#id KibanaAlertingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The parameters for the action, which are sent to the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#params KibanaAlertingRule#params}
  */
  readonly params: string;
  /**
  * alerts_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#alerts_filter KibanaAlertingRule#alerts_filter}
  */
  readonly alertsFilter?: KibanaAlertingRuleActionsAlertsFilter;
  /**
  * frequency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#frequency KibanaAlertingRule#frequency}
  */
  readonly frequency?: KibanaAlertingRuleActionsFrequency;
}

export function kibanaAlertingRuleActionsToTerraform(struct?: KibanaAlertingRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    id: cdktf.stringToTerraform(struct!.id),
    params: cdktf.stringToTerraform(struct!.params),
    alerts_filter: kibanaAlertingRuleActionsAlertsFilterToTerraform(struct!.alertsFilter),
    frequency: kibanaAlertingRuleActionsFrequencyToTerraform(struct!.frequency),
  }
}


export function kibanaAlertingRuleActionsToHclTerraform(struct?: KibanaAlertingRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    params: {
      value: cdktf.stringToHclTerraform(struct!.params),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alerts_filter: {
      value: kibanaAlertingRuleActionsAlertsFilterToHclTerraform(struct!.alertsFilter),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaAlertingRuleActionsAlertsFilterList",
    },
    frequency: {
      value: kibanaAlertingRuleActionsFrequencyToHclTerraform(struct!.frequency),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaAlertingRuleActionsFrequencyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaAlertingRuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KibanaAlertingRuleActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._alertsFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertsFilter = this._alertsFilter?.internalValue;
    }
    if (this._frequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaAlertingRuleActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._id = undefined;
      this._params = undefined;
      this._alertsFilter.internalValue = undefined;
      this._frequency.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._id = value.id;
      this._params = value.params;
      this._alertsFilter.internalValue = value.alertsFilter;
      this._frequency.internalValue = value.frequency;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // params - computed: false, optional: false, required: true
  private _params?: string; 
  public get params() {
    return this.getStringAttribute('params');
  }
  public set params(value: string) {
    this._params = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // alerts_filter - computed: false, optional: true, required: false
  private _alertsFilter = new KibanaAlertingRuleActionsAlertsFilterOutputReference(this, "alerts_filter");
  public get alertsFilter() {
    return this._alertsFilter;
  }
  public putAlertsFilter(value: KibanaAlertingRuleActionsAlertsFilter) {
    this._alertsFilter.internalValue = value;
  }
  public resetAlertsFilter() {
    this._alertsFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsFilterInput() {
    return this._alertsFilter.internalValue;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency = new KibanaAlertingRuleActionsFrequencyOutputReference(this, "frequency");
  public get frequency() {
    return this._frequency;
  }
  public putFrequency(value: KibanaAlertingRuleActionsFrequency) {
    this._frequency.internalValue = value;
  }
  public resetFrequency() {
    this._frequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency.internalValue;
  }
}

export class KibanaAlertingRuleActionsList extends cdktf.ComplexList {
  public internalValue? : KibanaAlertingRuleActions[] | cdktf.IResolvable

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
  public get(index: number): KibanaAlertingRuleActionsOutputReference {
    return new KibanaAlertingRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule elasticstack_kibana_alerting_rule}
*/
export class KibanaAlertingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_kibana_alerting_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaAlertingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaAlertingRule to import
  * @param importFromId The id of the existing KibanaAlertingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaAlertingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_kibana_alerting_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_alerting_rule elasticstack_kibana_alerting_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaAlertingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: KibanaAlertingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_kibana_alerting_rule',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertDelay = config.alertDelay;
    this._consumer = config.consumer;
    this._enabled = config.enabled;
    this._id = config.id;
    this._interval = config.interval;
    this._name = config.name;
    this._notifyWhen = config.notifyWhen;
    this._params = config.params;
    this._ruleId = config.ruleId;
    this._ruleTypeId = config.ruleTypeId;
    this._spaceId = config.spaceId;
    this._tags = config.tags;
    this._throttle = config.throttle;
    this._actions.internalValue = config.actions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_delay - computed: false, optional: true, required: false
  private _alertDelay?: number; 
  public get alertDelay() {
    return this.getNumberAttribute('alert_delay');
  }
  public set alertDelay(value: number) {
    this._alertDelay = value;
  }
  public resetAlertDelay() {
    this._alertDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDelayInput() {
    return this._alertDelay;
  }

  // consumer - computed: false, optional: false, required: true
  private _consumer?: string; 
  public get consumer() {
    return this.getStringAttribute('consumer');
  }
  public set consumer(value: string) {
    this._consumer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer;
  }

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

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // last_execution_date - computed: true, optional: false, required: false
  public get lastExecutionDate() {
    return this.getStringAttribute('last_execution_date');
  }

  // last_execution_status - computed: true, optional: false, required: false
  public get lastExecutionStatus() {
    return this.getStringAttribute('last_execution_status');
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

  // notify_when - computed: false, optional: true, required: false
  private _notifyWhen?: string; 
  public get notifyWhen() {
    return this.getStringAttribute('notify_when');
  }
  public set notifyWhen(value: string) {
    this._notifyWhen = value;
  }
  public resetNotifyWhen() {
    this._notifyWhen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyWhenInput() {
    return this._notifyWhen;
  }

  // params - computed: false, optional: false, required: true
  private _params?: string; 
  public get params() {
    return this.getStringAttribute('params');
  }
  public set params(value: string) {
    this._params = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // rule_id - computed: true, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // rule_type_id - computed: false, optional: false, required: true
  private _ruleTypeId?: string; 
  public get ruleTypeId() {
    return this.getStringAttribute('rule_type_id');
  }
  public set ruleTypeId(value: string) {
    this._ruleTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeIdInput() {
    return this._ruleTypeId;
  }

  // scheduled_task_id - computed: true, optional: false, required: false
  public get scheduledTaskId() {
    return this.getStringAttribute('scheduled_task_id');
  }

  // space_id - computed: false, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // throttle - computed: false, optional: true, required: false
  private _throttle?: string; 
  public get throttle() {
    return this.getStringAttribute('throttle');
  }
  public set throttle(value: string) {
    this._throttle = value;
  }
  public resetThrottle() {
    this._throttle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleInput() {
    return this._throttle;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new KibanaAlertingRuleActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: KibanaAlertingRuleActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_delay: cdktf.numberToTerraform(this._alertDelay),
      consumer: cdktf.stringToTerraform(this._consumer),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      notify_when: cdktf.stringToTerraform(this._notifyWhen),
      params: cdktf.stringToTerraform(this._params),
      rule_id: cdktf.stringToTerraform(this._ruleId),
      rule_type_id: cdktf.stringToTerraform(this._ruleTypeId),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      throttle: cdktf.stringToTerraform(this._throttle),
      actions: cdktf.listMapper(kibanaAlertingRuleActionsToTerraform, true)(this._actions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_delay: {
        value: cdktf.numberToHclTerraform(this._alertDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      consumer: {
        value: cdktf.stringToHclTerraform(this._consumer),
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
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
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
      notify_when: {
        value: cdktf.stringToHclTerraform(this._notifyWhen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      params: {
        value: cdktf.stringToHclTerraform(this._params),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_type_id: {
        value: cdktf.stringToHclTerraform(this._ruleTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      throttle: {
        value: cdktf.stringToHclTerraform(this._throttle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions: {
        value: cdktf.listMapperHcl(kibanaAlertingRuleActionsToHclTerraform, true)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KibanaAlertingRuleActionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
