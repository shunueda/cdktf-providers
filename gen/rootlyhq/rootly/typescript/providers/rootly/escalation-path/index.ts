// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EscalationPathConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether this escalation path is the default path. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#default EscalationPath#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * The ID of the escalation policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#escalation_policy_id EscalationPath#escalation_policy_id}
  */
  readonly escalationPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#id EscalationPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Initial delay for escalation path in minutes. Maximum 1 week (10080).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#initial_delay EscalationPath#initial_delay}
  */
  readonly initialDelay?: number;
  /**
  * How path rules are matched.. Value must be one of `match-all-rules`, `match-any-rule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#match_mode EscalationPath#match_mode}
  */
  readonly matchMode?: string;
  /**
  * The name of the escalation path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#name EscalationPath#name}
  */
  readonly name: string;
  /**
  * Notification rule type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#notification_type EscalationPath#notification_type}
  */
  readonly notificationType?: string;
  /**
  * The position of this path in the paths for this EP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#position EscalationPath#position}
  */
  readonly position?: number;
  /**
  * Whether this path should be repeated until someone acknowledges the alert. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#repeat EscalationPath#repeat}
  */
  readonly repeat?: boolean | cdktf.IResolvable;
  /**
  * The number of times this path will be executed until someone acknowledges the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#repeat_count EscalationPath#repeat_count}
  */
  readonly repeatCount?: number;
  /**
  * Time zone used for time restrictions.. Value must be one of `International Date Line West`, `Etc/GMT+12`, `American Samoa`, `Pacific/Pago_Pago`, `Midway Island`, `Pacific/Midway`, `Hawaii`, `Pacific/Honolulu`, `Alaska`, `America/Juneau`, `Pacific Time (US & Canada)`, `America/Los_Angeles`, `Tijuana`, `America/Tijuana`, `Arizona`, `America/Phoenix`, `Mazatlan`, `America/Mazatlan`, `Mountain Time (US & Canada)`, `America/Denver`, `Central America`, `America/Guatemala`, `Central Time (US & Canada)`, `America/Chicago`, `Chihuahua`, `America/Chihuahua`, `Guadalajara`, `America/Mexico_City`, `Mexico City`, `America/Mexico_City`, `Monterrey`, `America/Monterrey`, `Saskatchewan`, `America/Regina`, `Bogota`, `America/Bogota`, `Eastern Time (US & Canada)`, `America/New_York`, `Indiana (East)`, `America/Indiana/Indianapolis`, `Lima`, `America/Lima`, `Quito`, `America/Lima`, `Atlantic Time (Canada)`, `America/Halifax`, `Caracas`, `America/Caracas`, `Georgetown`, `America/Guyana`, `La Paz`, `America/La_Paz`, `Puerto Rico`, `America/Puerto_Rico`, `Santiago`, `America/Santiago`, `Newfoundland`, `America/St_Johns`, `Brasilia`, `America/Sao_Paulo`, `Buenos Aires`, `America/Argentina/Buenos_Aires`, `Montevideo`, `America/Montevideo`, `Greenland`, `America/Godthab`, `Mid-Atlantic`, `Atlantic/South_Georgia`, `Azores`, `Atlantic/Azores`, `Cape Verde Is.`, `Atlantic/Cape_Verde`, `Casablanca`, `Africa/Casablanca`, `Dublin`, `Europe/Dublin`, `Edinburgh`, `Europe/London`, `Lisbon`, `Europe/Lisbon`, `London`, `Europe/London`, `Monrovia`, `Africa/Monrovia`, `UTC`, `Etc/UTC`, `Amsterdam`, `Europe/Amsterdam`, `Belgrade`, `Europe/Belgrade`, `Berlin`, `Europe/Berlin`, `Bern`, `Europe/Zurich`, `Bratislava`, `Europe/Bratislava`, `Brussels`, `Europe/Brussels`, `Budapest`, `Europe/Budapest`, `Copenhagen`, `Europe/Copenhagen`, `Ljubljana`, `Europe/Ljubljana`, `Madrid`, `Europe/Madrid`, `Paris`, `Europe/Paris`, `Prague`, `Europe/Prague`, `Rome`, `Europe/Rome`, `Sarajevo`, `Europe/Sarajevo`, `Skopje`, `Europe/Skopje`, `Stockholm`, `Europe/Stockholm`, `Vienna`, `Europe/Vienna`, `Warsaw`, `Europe/Warsaw`, `West Central Africa`, `Africa/Algiers`, `Zagreb`, `Europe/Zagreb`, `Zurich`, `Europe/Zurich`, `Athens`, `Europe/Athens`, `Bucharest`, `Europe/Bucharest`, `Cairo`, `Africa/Cairo`, `Harare`, `Africa/Harare`, `Helsinki`, `Europe/Helsinki`, `Jerusalem`, `Asia/Jerusalem`, `Kaliningrad`, `Europe/Kaliningrad`, `Kyiv`, `Europe/Kiev`, `Pretoria`, `Africa/Johannesburg`, `Riga`, `Europe/Riga`, `Sofia`, `Europe/Sofia`, `Tallinn`, `Europe/Tallinn`, `Vilnius`, `Europe/Vilnius`, `Baghdad`, `Asia/Baghdad`, `Istanbul`, `Europe/Istanbul`, `Kuwait`, `Asia/Kuwait`, `Minsk`, `Europe/Minsk`, `Moscow`, `Europe/Moscow`, `Nairobi`, `Africa/Nairobi`, `Riyadh`, `Asia/Riyadh`, `St. Petersburg`, `Europe/Moscow`, `Volgograd`, `Europe/Volgograd`, `Tehran`, `Asia/Tehran`, `Abu Dhabi`, `Asia/Muscat`, `Baku`, `Asia/Baku`, `Muscat`, `Asia/Muscat`, `Samara`, `Europe/Samara`, `Tbilisi`, `Asia/Tbilisi`, `Yerevan`, `Asia/Yerevan`, `Kabul`, `Asia/Kabul`, `Almaty`, `Asia/Almaty`, `Astana`, `Asia/Almaty`, `Ekaterinburg`, `Asia/Yekaterinburg`, `Islamabad`, `Asia/Karachi`, `Karachi`, `Asia/Karachi`, `Tashkent`, `Asia/Tashkent`, `Chennai`, `Asia/Kolkata`, `Kolkata`, `Asia/Kolkata`, `Mumbai`, `Asia/Kolkata`, `New Delhi`, `Asia/Kolkata`, `Sri Jayawardenepura`, `Asia/Colombo`, `Kathmandu`, `Asia/Kathmandu`, `Dhaka`, `Asia/Dhaka`, `Urumqi`, `Asia/Urumqi`, `Rangoon`, `Asia/Rangoon`, `Bangkok`, `Asia/Bangkok`, `Hanoi`, `Asia/Bangkok`, `Jakarta`, `Asia/Jakarta`, `Krasnoyarsk`, `Asia/Krasnoyarsk`, `Novosibirsk`, `Asia/Novosibirsk`, `Beijing`, `Asia/Shanghai`, `Chongqing`, `Asia/Chongqing`, `Hong Kong`, `Asia/Hong_Kong`, `Irkutsk`, `Asia/Irkutsk`, `Kuala Lumpur`, `Asia/Kuala_Lumpur`, `Perth`, `Australia/Perth`, `Singapore`, `Asia/Singapore`, `Taipei`, `Asia/Taipei`, `Ulaanbaatar`, `Asia/Ulaanbaatar`, `Osaka`, `Asia/Tokyo`, `Sapporo`, `Asia/Tokyo`, `Seoul`, `Asia/Seoul`, `Tokyo`, `Asia/Tokyo`, `Yakutsk`, `Asia/Yakutsk`, `Adelaide`, `Australia/Adelaide`, `Darwin`, `Australia/Darwin`, `Brisbane`, `Australia/Brisbane`, `Canberra`, `Australia/Canberra`, `Guam`, `Pacific/Guam`, `Hobart`, `Australia/Hobart`, `Melbourne`, `Australia/Melbourne`, `Port Moresby`, `Pacific/Port_Moresby`, `Sydney`, `Australia/Sydney`, `Vladivostok`, `Asia/Vladivostok`, `Magadan`, `Asia/Magadan`, `New Caledonia`, `Pacific/Noumea`, `Solomon Is.`, `Pacific/Guadalcanal`, `Srednekolymsk`, `Asia/Srednekolymsk`, `Auckland`, `Pacific/Auckland`, `Fiji`, `Pacific/Fiji`, `Kamchatka`, `Asia/Kamchatka`, `Marshall Is.`, `Pacific/Majuro`, `Wellington`, `Pacific/Auckland`, `Chatham Is.`, `Pacific/Chatham`, `Nuku'alofa`, `Pacific/Tongatapu`, `Samoa`, `Pacific/Apia`, `Tokelau Is.`, `Pacific/Fakaofo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#time_restriction_time_zone EscalationPath#time_restriction_time_zone}
  */
  readonly timeRestrictionTimeZone?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#rules EscalationPath#rules}
  */
  readonly rules?: EscalationPathRules[] | cdktf.IResolvable;
  /**
  * time_restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#time_restrictions EscalationPath#time_restrictions}
  */
  readonly timeRestrictions?: EscalationPathTimeRestrictions[] | cdktf.IResolvable;
}
export interface EscalationPathRules {
  /**
  * JSON path to extract value from payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#json_path EscalationPath#json_path}
  */
  readonly jsonPath?: string;
  /**
  * How JSON path value should be matched. Value must be one of `is`, `is_not`, `contains`, `does_not_contain`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#operator EscalationPath#operator}
  */
  readonly operator?: string;
  /**
  * The type of the escalation path rule. Value must be one of `alert_urgency`, `working_hour`, `json_path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#rule_type EscalationPath#rule_type}
  */
  readonly ruleType?: string;
  /**
  * Alert urgency ids for which this escalation path should be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#urgency_ids EscalationPath#urgency_ids}
  */
  readonly urgencyIds?: string[];
  /**
  * Value with which JSON path value should be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#value EscalationPath#value}
  */
  readonly value?: string;
  /**
  * Whether the escalation path should be used within working hours. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#within_working_hour EscalationPath#within_working_hour}
  */
  readonly withinWorkingHour?: boolean | cdktf.IResolvable;
}

export function escalationPathRulesToTerraform(struct?: EscalationPathRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
    operator: cdktf.stringToTerraform(struct!.operator),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    urgency_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urgencyIds),
    value: cdktf.stringToTerraform(struct!.value),
    within_working_hour: cdktf.booleanToTerraform(struct!.withinWorkingHour),
  }
}


export function escalationPathRulesToHclTerraform(struct?: EscalationPathRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_path: {
      value: cdktf.stringToHclTerraform(struct!.jsonPath),
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
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.urgencyIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    within_working_hour: {
      value: cdktf.booleanToHclTerraform(struct!.withinWorkingHour),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._urgencyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgencyIds = this._urgencyIds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._withinWorkingHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.withinWorkingHour = this._withinWorkingHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonPath = undefined;
      this._operator = undefined;
      this._ruleType = undefined;
      this._urgencyIds = undefined;
      this._value = undefined;
      this._withinWorkingHour = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonPath = value.jsonPath;
      this._operator = value.operator;
      this._ruleType = value.ruleType;
      this._urgencyIds = value.urgencyIds;
      this._value = value.value;
      this._withinWorkingHour = value.withinWorkingHour;
    }
  }

  // json_path - computed: true, optional: true, required: false
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  public resetJsonPath() {
    this._jsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }

  // operator - computed: true, optional: true, required: false
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

  // rule_type - computed: true, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // urgency_ids - computed: false, optional: true, required: false
  private _urgencyIds?: string[]; 
  public get urgencyIds() {
    return this.getListAttribute('urgency_ids');
  }
  public set urgencyIds(value: string[]) {
    this._urgencyIds = value;
  }
  public resetUrgencyIds() {
    this._urgencyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyIdsInput() {
    return this._urgencyIds;
  }

  // value - computed: true, optional: true, required: false
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

  // within_working_hour - computed: true, optional: true, required: false
  private _withinWorkingHour?: boolean | cdktf.IResolvable; 
  public get withinWorkingHour() {
    return this.getBooleanAttribute('within_working_hour');
  }
  public set withinWorkingHour(value: boolean | cdktf.IResolvable) {
    this._withinWorkingHour = value;
  }
  public resetWithinWorkingHour() {
    this._withinWorkingHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinWorkingHourInput() {
    return this._withinWorkingHour;
  }
}

export class EscalationPathRulesList extends cdktf.ComplexList {
  public internalValue? : EscalationPathRules[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathRulesOutputReference {
    return new EscalationPathRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPathTimeRestrictions {
  /**
  * Value must be one of `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#end_day EscalationPath#end_day}
  */
  readonly endDay?: string;
  /**
  * Formatted as HH:MM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#end_time EscalationPath#end_time}
  */
  readonly endTime?: string;
  /**
  * Value must be one of `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#start_day EscalationPath#start_day}
  */
  readonly startDay?: string;
  /**
  * Formatted as HH:MM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#start_time EscalationPath#start_time}
  */
  readonly startTime?: string;
}

export function escalationPathTimeRestrictionsToTerraform(struct?: EscalationPathTimeRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_day: cdktf.stringToTerraform(struct!.endDay),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_day: cdktf.stringToTerraform(struct!.startDay),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function escalationPathTimeRestrictionsToHclTerraform(struct?: EscalationPathTimeRestrictions | cdktf.IResolvable): any {
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
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_day: {
      value: cdktf.stringToHclTerraform(struct!.startDay),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathTimeRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathTimeRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDay = this._endDay;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDay = this._startDay;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathTimeRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endDay = undefined;
      this._endTime = undefined;
      this._startDay = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endDay = value.endDay;
      this._endTime = value.endTime;
      this._startDay = value.startDay;
      this._startTime = value.startTime;
    }
  }

  // end_day - computed: false, optional: true, required: false
  private _endDay?: string; 
  public get endDay() {
    return this.getStringAttribute('end_day');
  }
  public set endDay(value: string) {
    this._endDay = value;
  }
  public resetEndDay() {
    this._endDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDayInput() {
    return this._endDay;
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

  // start_day - computed: false, optional: true, required: false
  private _startDay?: string; 
  public get startDay() {
    return this.getStringAttribute('start_day');
  }
  public set startDay(value: string) {
    this._startDay = value;
  }
  public resetStartDay() {
    this._startDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDayInput() {
    return this._startDay;
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
}

export class EscalationPathTimeRestrictionsList extends cdktf.ComplexList {
  public internalValue? : EscalationPathTimeRestrictions[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathTimeRestrictionsOutputReference {
    return new EscalationPathTimeRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path rootly_escalation_path}
*/
export class EscalationPath extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_escalation_path";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EscalationPath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EscalationPath to import
  * @param importFromId The id of the existing EscalationPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EscalationPath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_escalation_path", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/escalation_path rootly_escalation_path} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EscalationPathConfig
  */
  public constructor(scope: Construct, id: string, config: EscalationPathConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_escalation_path',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.2.0',
        providerVersionConstraint: '5.2.0'
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
    this._escalationPolicyId = config.escalationPolicyId;
    this._id = config.id;
    this._initialDelay = config.initialDelay;
    this._matchMode = config.matchMode;
    this._name = config.name;
    this._notificationType = config.notificationType;
    this._position = config.position;
    this._repeat = config.repeat;
    this._repeatCount = config.repeatCount;
    this._timeRestrictionTimeZone = config.timeRestrictionTimeZone;
    this._rules.internalValue = config.rules;
    this._timeRestrictions.internalValue = config.timeRestrictions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: true, optional: true, required: false
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

  // escalation_policy_id - computed: true, optional: true, required: false
  private _escalationPolicyId?: string; 
  public get escalationPolicyId() {
    return this.getStringAttribute('escalation_policy_id');
  }
  public set escalationPolicyId(value: string) {
    this._escalationPolicyId = value;
  }
  public resetEscalationPolicyId() {
    this._escalationPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyIdInput() {
    return this._escalationPolicyId;
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

  // initial_delay - computed: true, optional: true, required: false
  private _initialDelay?: number; 
  public get initialDelay() {
    return this.getNumberAttribute('initial_delay');
  }
  public set initialDelay(value: number) {
    this._initialDelay = value;
  }
  public resetInitialDelay() {
    this._initialDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelayInput() {
    return this._initialDelay;
  }

  // match_mode - computed: false, optional: true, required: false
  private _matchMode?: string; 
  public get matchMode() {
    return this.getStringAttribute('match_mode');
  }
  public set matchMode(value: string) {
    this._matchMode = value;
  }
  public resetMatchMode() {
    this._matchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchModeInput() {
    return this._matchMode;
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

  // notification_type - computed: true, optional: true, required: false
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  public resetNotificationType() {
    this._notificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // repeat - computed: true, optional: true, required: false
  private _repeat?: boolean | cdktf.IResolvable; 
  public get repeat() {
    return this.getBooleanAttribute('repeat');
  }
  public set repeat(value: boolean | cdktf.IResolvable) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // repeat_count - computed: true, optional: true, required: false
  private _repeatCount?: number; 
  public get repeatCount() {
    return this.getNumberAttribute('repeat_count');
  }
  public set repeatCount(value: number) {
    this._repeatCount = value;
  }
  public resetRepeatCount() {
    this._repeatCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatCountInput() {
    return this._repeatCount;
  }

  // time_restriction_time_zone - computed: false, optional: true, required: false
  private _timeRestrictionTimeZone?: string; 
  public get timeRestrictionTimeZone() {
    return this.getStringAttribute('time_restriction_time_zone');
  }
  public set timeRestrictionTimeZone(value: string) {
    this._timeRestrictionTimeZone = value;
  }
  public resetTimeRestrictionTimeZone() {
    this._timeRestrictionTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRestrictionTimeZoneInput() {
    return this._timeRestrictionTimeZone;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new EscalationPathRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: EscalationPathRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // time_restrictions - computed: false, optional: true, required: false
  private _timeRestrictions = new EscalationPathTimeRestrictionsList(this, "time_restrictions", false);
  public get timeRestrictions() {
    return this._timeRestrictions;
  }
  public putTimeRestrictions(value: EscalationPathTimeRestrictions[] | cdktf.IResolvable) {
    this._timeRestrictions.internalValue = value;
  }
  public resetTimeRestrictions() {
    this._timeRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRestrictionsInput() {
    return this._timeRestrictions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.booleanToTerraform(this._default),
      escalation_policy_id: cdktf.stringToTerraform(this._escalationPolicyId),
      id: cdktf.stringToTerraform(this._id),
      initial_delay: cdktf.numberToTerraform(this._initialDelay),
      match_mode: cdktf.stringToTerraform(this._matchMode),
      name: cdktf.stringToTerraform(this._name),
      notification_type: cdktf.stringToTerraform(this._notificationType),
      position: cdktf.numberToTerraform(this._position),
      repeat: cdktf.booleanToTerraform(this._repeat),
      repeat_count: cdktf.numberToTerraform(this._repeatCount),
      time_restriction_time_zone: cdktf.stringToTerraform(this._timeRestrictionTimeZone),
      rules: cdktf.listMapper(escalationPathRulesToTerraform, true)(this._rules.internalValue),
      time_restrictions: cdktf.listMapper(escalationPathTimeRestrictionsToTerraform, true)(this._timeRestrictions.internalValue),
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
      escalation_policy_id: {
        value: cdktf.stringToHclTerraform(this._escalationPolicyId),
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
      initial_delay: {
        value: cdktf.numberToHclTerraform(this._initialDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_mode: {
        value: cdktf.stringToHclTerraform(this._matchMode),
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
      notification_type: {
        value: cdktf.stringToHclTerraform(this._notificationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      repeat: {
        value: cdktf.booleanToHclTerraform(this._repeat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repeat_count: {
        value: cdktf.numberToHclTerraform(this._repeatCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_restriction_time_zone: {
        value: cdktf.stringToHclTerraform(this._timeRestrictionTimeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(escalationPathRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EscalationPathRulesList",
      },
      time_restrictions: {
        value: cdktf.listMapperHcl(escalationPathTimeRestrictionsToHclTerraform, true)(this._timeRestrictions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EscalationPathTimeRestrictionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
