// https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileApplicationThreatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#action ProfileApplicationThreat#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#advanced_application_profile ProfileApplicationThreat#advanced_application_profile}
  */
  readonly advancedApplicationProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#api_logging ProfileApplicationThreat#api_logging}
  */
  readonly apiLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#auto_update_crs ProfileApplicationThreat#auto_update_crs}
  */
  readonly autoUpdateCrs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#auto_update_custom ProfileApplicationThreat#auto_update_custom}
  */
  readonly autoUpdateCustom?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#auto_update_trustwave ProfileApplicationThreat#auto_update_trustwave}
  */
  readonly autoUpdateTrustwave?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#crs_ruleset_version ProfileApplicationThreat#crs_ruleset_version}
  */
  readonly crsRulesetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#custom_ruleset_version ProfileApplicationThreat#custom_ruleset_version}
  */
  readonly customRulesetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#delay_by_days_crs ProfileApplicationThreat#delay_by_days_crs}
  */
  readonly delayByDaysCrs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#delay_by_days_custom ProfileApplicationThreat#delay_by_days_custom}
  */
  readonly delayByDaysCustom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#delay_by_days_trustwave ProfileApplicationThreat#delay_by_days_trustwave}
  */
  readonly delayByDaysTrustwave?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#description ProfileApplicationThreat#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#disable_custom_ruleset ProfileApplicationThreat#disable_custom_ruleset}
  */
  readonly disableCustomRuleset?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#disable_trustwave_ruleset ProfileApplicationThreat#disable_trustwave_ruleset}
  */
  readonly disableTrustwaveRuleset?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#id ProfileApplicationThreat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#name ProfileApplicationThreat#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#paranoia_level ProfileApplicationThreat#paranoia_level}
  */
  readonly paranoiaLevel: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#pcap ProfileApplicationThreat#pcap}
  */
  readonly pcap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#request_anomaly ProfileApplicationThreat#request_anomaly}
  */
  readonly requestAnomaly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#request_inspection_profile ProfileApplicationThreat#request_inspection_profile}
  */
  readonly requestInspectionProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#response_anomaly ProfileApplicationThreat#response_anomaly}
  */
  readonly responseAnomaly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#response_inspection_profile ProfileApplicationThreat#response_inspection_profile}
  */
  readonly responseInspectionProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#trustwave_ruleset_version ProfileApplicationThreat#trustwave_ruleset_version}
  */
  readonly trustwaveRulesetVersion?: string;
  /**
  * event_suppressor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#event_suppressor ProfileApplicationThreat#event_suppressor}
  */
  readonly eventSuppressor?: ProfileApplicationThreatEventSuppressor[] | cdktf.IResolvable;
  /**
  * profile_event_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#profile_event_filter ProfileApplicationThreat#profile_event_filter}
  */
  readonly profileEventFilter?: ProfileApplicationThreatProfileEventFilter;
  /**
  * rule_event_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#rule_event_filter ProfileApplicationThreat#rule_event_filter}
  */
  readonly ruleEventFilter?: ProfileApplicationThreatRuleEventFilter[] | cdktf.IResolvable;
}
export interface ProfileApplicationThreatEventSuppressor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#rule_ids ProfileApplicationThreat#rule_ids}
  */
  readonly ruleIds: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#source_ips ProfileApplicationThreat#source_ips}
  */
  readonly sourceIps: string[];
}

export function profileApplicationThreatEventSuppressorToTerraform(struct?: ProfileApplicationThreatEventSuppressor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ruleIds),
    source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIps),
  }
}


export function profileApplicationThreatEventSuppressorToHclTerraform(struct?: ProfileApplicationThreatEventSuppressor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ruleIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    source_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileApplicationThreatEventSuppressorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileApplicationThreatEventSuppressor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIds = this._ruleIds;
    }
    if (this._sourceIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIps = this._sourceIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileApplicationThreatEventSuppressor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleIds = undefined;
      this._sourceIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleIds = value.ruleIds;
      this._sourceIps = value.sourceIps;
    }
  }

  // rule_ids - computed: false, optional: false, required: true
  private _ruleIds?: number[]; 
  public get ruleIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rule_ids')));
  }
  public set ruleIds(value: number[]) {
    this._ruleIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdsInput() {
    return this._ruleIds;
  }

  // source_ips - computed: false, optional: false, required: true
  private _sourceIps?: string[]; 
  public get sourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ips'));
  }
  public set sourceIps(value: string[]) {
    this._sourceIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpsInput() {
    return this._sourceIps;
  }
}

export class ProfileApplicationThreatEventSuppressorList extends cdktf.ComplexList {
  public internalValue? : ProfileApplicationThreatEventSuppressor[] | cdktf.IResolvable

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
  public get(index: number): ProfileApplicationThreatEventSuppressorOutputReference {
    return new ProfileApplicationThreatEventSuppressorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProfileApplicationThreatProfileEventFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#number_of_events ProfileApplicationThreat#number_of_events}
  */
  readonly numberOfEvents: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#time ProfileApplicationThreat#time}
  */
  readonly time?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#type ProfileApplicationThreat#type}
  */
  readonly type?: string;
}

export function profileApplicationThreatProfileEventFilterToTerraform(struct?: ProfileApplicationThreatProfileEventFilterOutputReference | ProfileApplicationThreatProfileEventFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_events: cdktf.numberToTerraform(struct!.numberOfEvents),
    time: cdktf.numberToTerraform(struct!.time),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function profileApplicationThreatProfileEventFilterToHclTerraform(struct?: ProfileApplicationThreatProfileEventFilterOutputReference | ProfileApplicationThreatProfileEventFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_events: {
      value: cdktf.numberToHclTerraform(struct!.numberOfEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ProfileApplicationThreatProfileEventFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProfileApplicationThreatProfileEventFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfEvents = this._numberOfEvents;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileApplicationThreatProfileEventFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numberOfEvents = undefined;
      this._time = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numberOfEvents = value.numberOfEvents;
      this._time = value.time;
      this._type = value.type;
    }
  }

  // number_of_events - computed: false, optional: false, required: true
  private _numberOfEvents?: number; 
  public get numberOfEvents() {
    return this.getNumberAttribute('number_of_events');
  }
  public set numberOfEvents(value: number) {
    this._numberOfEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfEventsInput() {
    return this._numberOfEvents;
  }

  // time - computed: false, optional: true, required: false
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
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
}
export interface ProfileApplicationThreatRuleEventFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#number_of_events ProfileApplicationThreat#number_of_events}
  */
  readonly numberOfEvents: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#rule_ids ProfileApplicationThreat#rule_ids}
  */
  readonly ruleIds: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#time ProfileApplicationThreat#time}
  */
  readonly time?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#type ProfileApplicationThreat#type}
  */
  readonly type?: string;
}

export function profileApplicationThreatRuleEventFilterToTerraform(struct?: ProfileApplicationThreatRuleEventFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_events: cdktf.numberToTerraform(struct!.numberOfEvents),
    rule_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ruleIds),
    time: cdktf.numberToTerraform(struct!.time),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function profileApplicationThreatRuleEventFilterToHclTerraform(struct?: ProfileApplicationThreatRuleEventFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_events: {
      value: cdktf.numberToHclTerraform(struct!.numberOfEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ruleIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ProfileApplicationThreatRuleEventFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileApplicationThreatRuleEventFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfEvents = this._numberOfEvents;
    }
    if (this._ruleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIds = this._ruleIds;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileApplicationThreatRuleEventFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberOfEvents = undefined;
      this._ruleIds = undefined;
      this._time = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberOfEvents = value.numberOfEvents;
      this._ruleIds = value.ruleIds;
      this._time = value.time;
      this._type = value.type;
    }
  }

  // number_of_events - computed: false, optional: false, required: true
  private _numberOfEvents?: number; 
  public get numberOfEvents() {
    return this.getNumberAttribute('number_of_events');
  }
  public set numberOfEvents(value: number) {
    this._numberOfEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfEventsInput() {
    return this._numberOfEvents;
  }

  // rule_ids - computed: false, optional: false, required: true
  private _ruleIds?: number[]; 
  public get ruleIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rule_ids')));
  }
  public set ruleIds(value: number[]) {
    this._ruleIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdsInput() {
    return this._ruleIds;
  }

  // time - computed: false, optional: true, required: false
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
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
}

export class ProfileApplicationThreatRuleEventFilterList extends cdktf.ComplexList {
  public internalValue? : ProfileApplicationThreatRuleEventFilter[] | cdktf.IResolvable

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
  public get(index: number): ProfileApplicationThreatRuleEventFilterOutputReference {
    return new ProfileApplicationThreatRuleEventFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat ciscomcd_profile_application_threat}
*/
export class ProfileApplicationThreat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscomcd_profile_application_threat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileApplicationThreat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileApplicationThreat to import
  * @param importFromId The id of the existing ProfileApplicationThreat that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileApplicationThreat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscomcd_profile_application_threat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_application_threat ciscomcd_profile_application_threat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileApplicationThreatConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileApplicationThreatConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscomcd_profile_application_threat',
      terraformGeneratorMetadata: {
        providerName: 'ciscomcd',
        providerVersion: '25.9.2',
        providerVersionConstraint: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._advancedApplicationProfile = config.advancedApplicationProfile;
    this._apiLogging = config.apiLogging;
    this._autoUpdateCrs = config.autoUpdateCrs;
    this._autoUpdateCustom = config.autoUpdateCustom;
    this._autoUpdateTrustwave = config.autoUpdateTrustwave;
    this._crsRulesetVersion = config.crsRulesetVersion;
    this._customRulesetVersion = config.customRulesetVersion;
    this._delayByDaysCrs = config.delayByDaysCrs;
    this._delayByDaysCustom = config.delayByDaysCustom;
    this._delayByDaysTrustwave = config.delayByDaysTrustwave;
    this._description = config.description;
    this._disableCustomRuleset = config.disableCustomRuleset;
    this._disableTrustwaveRuleset = config.disableTrustwaveRuleset;
    this._id = config.id;
    this._name = config.name;
    this._paranoiaLevel = config.paranoiaLevel;
    this._pcap = config.pcap;
    this._requestAnomaly = config.requestAnomaly;
    this._requestInspectionProfile = config.requestInspectionProfile;
    this._responseAnomaly = config.responseAnomaly;
    this._responseInspectionProfile = config.responseInspectionProfile;
    this._trustwaveRulesetVersion = config.trustwaveRulesetVersion;
    this._eventSuppressor.internalValue = config.eventSuppressor;
    this._profileEventFilter.internalValue = config.profileEventFilter;
    this._ruleEventFilter.internalValue = config.ruleEventFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // advanced_application_profile - computed: false, optional: true, required: false
  private _advancedApplicationProfile?: string[]; 
  public get advancedApplicationProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('advanced_application_profile'));
  }
  public set advancedApplicationProfile(value: string[]) {
    this._advancedApplicationProfile = value;
  }
  public resetAdvancedApplicationProfile() {
    this._advancedApplicationProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedApplicationProfileInput() {
    return this._advancedApplicationProfile;
  }

  // api_logging - computed: false, optional: true, required: false
  private _apiLogging?: boolean | cdktf.IResolvable; 
  public get apiLogging() {
    return this.getBooleanAttribute('api_logging');
  }
  public set apiLogging(value: boolean | cdktf.IResolvable) {
    this._apiLogging = value;
  }
  public resetApiLogging() {
    this._apiLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiLoggingInput() {
    return this._apiLogging;
  }

  // auto_update_crs - computed: false, optional: true, required: false
  private _autoUpdateCrs?: boolean | cdktf.IResolvable; 
  public get autoUpdateCrs() {
    return this.getBooleanAttribute('auto_update_crs');
  }
  public set autoUpdateCrs(value: boolean | cdktf.IResolvable) {
    this._autoUpdateCrs = value;
  }
  public resetAutoUpdateCrs() {
    this._autoUpdateCrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateCrsInput() {
    return this._autoUpdateCrs;
  }

  // auto_update_custom - computed: false, optional: true, required: false
  private _autoUpdateCustom?: boolean | cdktf.IResolvable; 
  public get autoUpdateCustom() {
    return this.getBooleanAttribute('auto_update_custom');
  }
  public set autoUpdateCustom(value: boolean | cdktf.IResolvable) {
    this._autoUpdateCustom = value;
  }
  public resetAutoUpdateCustom() {
    this._autoUpdateCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateCustomInput() {
    return this._autoUpdateCustom;
  }

  // auto_update_trustwave - computed: false, optional: true, required: false
  private _autoUpdateTrustwave?: boolean | cdktf.IResolvable; 
  public get autoUpdateTrustwave() {
    return this.getBooleanAttribute('auto_update_trustwave');
  }
  public set autoUpdateTrustwave(value: boolean | cdktf.IResolvable) {
    this._autoUpdateTrustwave = value;
  }
  public resetAutoUpdateTrustwave() {
    this._autoUpdateTrustwave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateTrustwaveInput() {
    return this._autoUpdateTrustwave;
  }

  // crs_ruleset_version - computed: false, optional: true, required: false
  private _crsRulesetVersion?: string; 
  public get crsRulesetVersion() {
    return this.getStringAttribute('crs_ruleset_version');
  }
  public set crsRulesetVersion(value: string) {
    this._crsRulesetVersion = value;
  }
  public resetCrsRulesetVersion() {
    this._crsRulesetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crsRulesetVersionInput() {
    return this._crsRulesetVersion;
  }

  // custom_ruleset_version - computed: false, optional: true, required: false
  private _customRulesetVersion?: string; 
  public get customRulesetVersion() {
    return this.getStringAttribute('custom_ruleset_version');
  }
  public set customRulesetVersion(value: string) {
    this._customRulesetVersion = value;
  }
  public resetCustomRulesetVersion() {
    this._customRulesetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRulesetVersionInput() {
    return this._customRulesetVersion;
  }

  // delay_by_days_crs - computed: false, optional: true, required: false
  private _delayByDaysCrs?: number; 
  public get delayByDaysCrs() {
    return this.getNumberAttribute('delay_by_days_crs');
  }
  public set delayByDaysCrs(value: number) {
    this._delayByDaysCrs = value;
  }
  public resetDelayByDaysCrs() {
    this._delayByDaysCrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayByDaysCrsInput() {
    return this._delayByDaysCrs;
  }

  // delay_by_days_custom - computed: false, optional: true, required: false
  private _delayByDaysCustom?: number; 
  public get delayByDaysCustom() {
    return this.getNumberAttribute('delay_by_days_custom');
  }
  public set delayByDaysCustom(value: number) {
    this._delayByDaysCustom = value;
  }
  public resetDelayByDaysCustom() {
    this._delayByDaysCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayByDaysCustomInput() {
    return this._delayByDaysCustom;
  }

  // delay_by_days_trustwave - computed: false, optional: true, required: false
  private _delayByDaysTrustwave?: number; 
  public get delayByDaysTrustwave() {
    return this.getNumberAttribute('delay_by_days_trustwave');
  }
  public set delayByDaysTrustwave(value: number) {
    this._delayByDaysTrustwave = value;
  }
  public resetDelayByDaysTrustwave() {
    this._delayByDaysTrustwave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayByDaysTrustwaveInput() {
    return this._delayByDaysTrustwave;
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

  // disable_custom_ruleset - computed: false, optional: true, required: false
  private _disableCustomRuleset?: boolean | cdktf.IResolvable; 
  public get disableCustomRuleset() {
    return this.getBooleanAttribute('disable_custom_ruleset');
  }
  public set disableCustomRuleset(value: boolean | cdktf.IResolvable) {
    this._disableCustomRuleset = value;
  }
  public resetDisableCustomRuleset() {
    this._disableCustomRuleset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCustomRulesetInput() {
    return this._disableCustomRuleset;
  }

  // disable_trustwave_ruleset - computed: false, optional: true, required: false
  private _disableTrustwaveRuleset?: boolean | cdktf.IResolvable; 
  public get disableTrustwaveRuleset() {
    return this.getBooleanAttribute('disable_trustwave_ruleset');
  }
  public set disableTrustwaveRuleset(value: boolean | cdktf.IResolvable) {
    this._disableTrustwaveRuleset = value;
  }
  public resetDisableTrustwaveRuleset() {
    this._disableTrustwaveRuleset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTrustwaveRulesetInput() {
    return this._disableTrustwaveRuleset;
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

  // paranoia_level - computed: false, optional: false, required: true
  private _paranoiaLevel?: number; 
  public get paranoiaLevel() {
    return this.getNumberAttribute('paranoia_level');
  }
  public set paranoiaLevel(value: number) {
    this._paranoiaLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paranoiaLevelInput() {
    return this._paranoiaLevel;
  }

  // pcap - computed: false, optional: true, required: false
  private _pcap?: boolean | cdktf.IResolvable; 
  public get pcap() {
    return this.getBooleanAttribute('pcap');
  }
  public set pcap(value: boolean | cdktf.IResolvable) {
    this._pcap = value;
  }
  public resetPcap() {
    this._pcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcapInput() {
    return this._pcap;
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }

  // request_anomaly - computed: false, optional: true, required: false
  private _requestAnomaly?: number; 
  public get requestAnomaly() {
    return this.getNumberAttribute('request_anomaly');
  }
  public set requestAnomaly(value: number) {
    this._requestAnomaly = value;
  }
  public resetRequestAnomaly() {
    this._requestAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAnomalyInput() {
    return this._requestAnomaly;
  }

  // request_inspection_profile - computed: false, optional: true, required: false
  private _requestInspectionProfile?: string[]; 
  public get requestInspectionProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('request_inspection_profile'));
  }
  public set requestInspectionProfile(value: string[]) {
    this._requestInspectionProfile = value;
  }
  public resetRequestInspectionProfile() {
    this._requestInspectionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInspectionProfileInput() {
    return this._requestInspectionProfile;
  }

  // response_anomaly - computed: false, optional: true, required: false
  private _responseAnomaly?: number; 
  public get responseAnomaly() {
    return this.getNumberAttribute('response_anomaly');
  }
  public set responseAnomaly(value: number) {
    this._responseAnomaly = value;
  }
  public resetResponseAnomaly() {
    this._responseAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseAnomalyInput() {
    return this._responseAnomaly;
  }

  // response_inspection_profile - computed: false, optional: true, required: false
  private _responseInspectionProfile?: string[]; 
  public get responseInspectionProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('response_inspection_profile'));
  }
  public set responseInspectionProfile(value: string[]) {
    this._responseInspectionProfile = value;
  }
  public resetResponseInspectionProfile() {
    this._responseInspectionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInspectionProfileInput() {
    return this._responseInspectionProfile;
  }

  // trustwave_ruleset_version - computed: false, optional: true, required: false
  private _trustwaveRulesetVersion?: string; 
  public get trustwaveRulesetVersion() {
    return this.getStringAttribute('trustwave_ruleset_version');
  }
  public set trustwaveRulesetVersion(value: string) {
    this._trustwaveRulesetVersion = value;
  }
  public resetTrustwaveRulesetVersion() {
    this._trustwaveRulesetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustwaveRulesetVersionInput() {
    return this._trustwaveRulesetVersion;
  }

  // event_suppressor - computed: false, optional: true, required: false
  private _eventSuppressor = new ProfileApplicationThreatEventSuppressorList(this, "event_suppressor", false);
  public get eventSuppressor() {
    return this._eventSuppressor;
  }
  public putEventSuppressor(value: ProfileApplicationThreatEventSuppressor[] | cdktf.IResolvable) {
    this._eventSuppressor.internalValue = value;
  }
  public resetEventSuppressor() {
    this._eventSuppressor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSuppressorInput() {
    return this._eventSuppressor.internalValue;
  }

  // profile_event_filter - computed: false, optional: true, required: false
  private _profileEventFilter = new ProfileApplicationThreatProfileEventFilterOutputReference(this, "profile_event_filter");
  public get profileEventFilter() {
    return this._profileEventFilter;
  }
  public putProfileEventFilter(value: ProfileApplicationThreatProfileEventFilter) {
    this._profileEventFilter.internalValue = value;
  }
  public resetProfileEventFilter() {
    this._profileEventFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileEventFilterInput() {
    return this._profileEventFilter.internalValue;
  }

  // rule_event_filter - computed: false, optional: true, required: false
  private _ruleEventFilter = new ProfileApplicationThreatRuleEventFilterList(this, "rule_event_filter", false);
  public get ruleEventFilter() {
    return this._ruleEventFilter;
  }
  public putRuleEventFilter(value: ProfileApplicationThreatRuleEventFilter[] | cdktf.IResolvable) {
    this._ruleEventFilter.internalValue = value;
  }
  public resetRuleEventFilter() {
    this._ruleEventFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEventFilterInput() {
    return this._ruleEventFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      advanced_application_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._advancedApplicationProfile),
      api_logging: cdktf.booleanToTerraform(this._apiLogging),
      auto_update_crs: cdktf.booleanToTerraform(this._autoUpdateCrs),
      auto_update_custom: cdktf.booleanToTerraform(this._autoUpdateCustom),
      auto_update_trustwave: cdktf.booleanToTerraform(this._autoUpdateTrustwave),
      crs_ruleset_version: cdktf.stringToTerraform(this._crsRulesetVersion),
      custom_ruleset_version: cdktf.stringToTerraform(this._customRulesetVersion),
      delay_by_days_crs: cdktf.numberToTerraform(this._delayByDaysCrs),
      delay_by_days_custom: cdktf.numberToTerraform(this._delayByDaysCustom),
      delay_by_days_trustwave: cdktf.numberToTerraform(this._delayByDaysTrustwave),
      description: cdktf.stringToTerraform(this._description),
      disable_custom_ruleset: cdktf.booleanToTerraform(this._disableCustomRuleset),
      disable_trustwave_ruleset: cdktf.booleanToTerraform(this._disableTrustwaveRuleset),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      paranoia_level: cdktf.numberToTerraform(this._paranoiaLevel),
      pcap: cdktf.booleanToTerraform(this._pcap),
      request_anomaly: cdktf.numberToTerraform(this._requestAnomaly),
      request_inspection_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requestInspectionProfile),
      response_anomaly: cdktf.numberToTerraform(this._responseAnomaly),
      response_inspection_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseInspectionProfile),
      trustwave_ruleset_version: cdktf.stringToTerraform(this._trustwaveRulesetVersion),
      event_suppressor: cdktf.listMapper(profileApplicationThreatEventSuppressorToTerraform, true)(this._eventSuppressor.internalValue),
      profile_event_filter: profileApplicationThreatProfileEventFilterToTerraform(this._profileEventFilter.internalValue),
      rule_event_filter: cdktf.listMapper(profileApplicationThreatRuleEventFilterToTerraform, true)(this._ruleEventFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_application_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._advancedApplicationProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      api_logging: {
        value: cdktf.booleanToHclTerraform(this._apiLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_update_crs: {
        value: cdktf.booleanToHclTerraform(this._autoUpdateCrs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_update_custom: {
        value: cdktf.booleanToHclTerraform(this._autoUpdateCustom),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_update_trustwave: {
        value: cdktf.booleanToHclTerraform(this._autoUpdateTrustwave),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      crs_ruleset_version: {
        value: cdktf.stringToHclTerraform(this._crsRulesetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_ruleset_version: {
        value: cdktf.stringToHclTerraform(this._customRulesetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_by_days_crs: {
        value: cdktf.numberToHclTerraform(this._delayByDaysCrs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delay_by_days_custom: {
        value: cdktf.numberToHclTerraform(this._delayByDaysCustom),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delay_by_days_trustwave: {
        value: cdktf.numberToHclTerraform(this._delayByDaysTrustwave),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_custom_ruleset: {
        value: cdktf.booleanToHclTerraform(this._disableCustomRuleset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_trustwave_ruleset: {
        value: cdktf.booleanToHclTerraform(this._disableTrustwaveRuleset),
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
      paranoia_level: {
        value: cdktf.numberToHclTerraform(this._paranoiaLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pcap: {
        value: cdktf.booleanToHclTerraform(this._pcap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_anomaly: {
        value: cdktf.numberToHclTerraform(this._requestAnomaly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_inspection_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requestInspectionProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      response_anomaly: {
        value: cdktf.numberToHclTerraform(this._responseAnomaly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_inspection_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseInspectionProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trustwave_ruleset_version: {
        value: cdktf.stringToHclTerraform(this._trustwaveRulesetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_suppressor: {
        value: cdktf.listMapperHcl(profileApplicationThreatEventSuppressorToHclTerraform, true)(this._eventSuppressor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileApplicationThreatEventSuppressorList",
      },
      profile_event_filter: {
        value: profileApplicationThreatProfileEventFilterToHclTerraform(this._profileEventFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileApplicationThreatProfileEventFilterList",
      },
      rule_event_filter: {
        value: cdktf.listMapperHcl(profileApplicationThreatRuleEventFilterToHclTerraform, true)(this._ruleEventFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileApplicationThreatRuleEventFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
