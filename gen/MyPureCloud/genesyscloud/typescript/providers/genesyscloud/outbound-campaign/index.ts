// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundCampaignConfig extends cdktf.TerraformMetaArguments {
  /**
  * The targeted abandon rate percentage. Required for progressive, power, and predictive campaigns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#abandon_rate OutboundCampaign#abandon_rate}
  */
  readonly abandonRate?: number;
  /**
  * Indicates (when true) that the campaign will remain on after contacts are depleted, allowing additional contacts to be appended/added to the contact list and processed by the still-running campaign. The campaign can still be turned off manually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#always_running OutboundCampaign#always_running}
  */
  readonly alwaysRunning?: boolean | cdktf.IResolvable;
  /**
  * The option manages the auto-answer callback calls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#auto_answer OutboundCampaign#auto_answer}
  */
  readonly autoAnswer?: boolean | cdktf.IResolvable;
  /**
  * The language the edge will use to analyze the call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#call_analysis_language OutboundCampaign#call_analysis_language}
  */
  readonly callAnalysisLanguage?: string;
  /**
  * The call analysis response set to handle call analysis results from the edge. Required for all dialing modes except preview.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#call_analysis_response_set_id OutboundCampaign#call_analysis_response_set_id}
  */
  readonly callAnalysisResponseSetId?: string;
  /**
  * The callable time set for this campaign to check before placing a call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#callable_time_set_id OutboundCampaign#callable_time_set_id}
  */
  readonly callableTimeSetId?: string;
  /**
  * The caller id phone number to be displayed on the outbound call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#caller_address OutboundCampaign#caller_address}
  */
  readonly callerAddress?: string;
  /**
  * The caller id name to be displayed on the outbound call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#caller_name OutboundCampaign#caller_name}
  */
  readonly callerName?: string;
  /**
  * The current status of the Campaign. A Campaign may be turned 'on' or 'off' (default). If this value is changed alongside other changes to the resource, a subsequent update will occur immediately afterwards to set the campaign status. This is due to behavioral requirements in the Genesys Cloud API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#campaign_status OutboundCampaign#campaign_status}
  */
  readonly campaignStatus?: string;
  /**
  * Filter to apply to the contact list before dialing. Currently a campaign can only have one filter applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#contact_list_filter_ids OutboundCampaign#contact_list_filter_ids}
  */
  readonly contactListFilterIds?: string[];
  /**
  * The ContactList for this Campaign to dial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#contact_list_id OutboundCampaign#contact_list_id}
  */
  readonly contactListId: string;
  /**
  * The strategy this Campaign will use for dialing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#dialing_mode OutboundCampaign#dialing_mode}
  */
  readonly dialingMode: string;
  /**
  * The division this campaign belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#division_id OutboundCampaign#division_id}
  */
  readonly divisionId?: string;
  /**
  * DncLists for this Campaign to check before placing a call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#dnc_list_ids OutboundCampaign#dnc_list_ids}
  */
  readonly dncListIds?: string[];
  /**
  * The EdgeGroup that will place the calls. Required for all dialing modes except preview.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#edge_group_id OutboundCampaign#edge_group_id}
  */
  readonly edgeGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#id OutboundCampaign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum number of calls that can be placed per agent on this campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#max_calls_per_agent OutboundCampaign#max_calls_per_agent}
  */
  readonly maxCallsPerAgent?: number;
  /**
  * The name of the Campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#name OutboundCampaign#name}
  */
  readonly name: string;
  /**
  * How long to wait before dispositioning a call as 'no-answer'. Default 30 seconds. Only applicable to non-preview campaigns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#no_answer_timeout OutboundCampaign#no_answer_timeout}
  */
  readonly noAnswerTimeout?: number;
  /**
  * The number of outbound lines to be concurrently dialed. Only applicable to non-preview campaigns; only required for agentless.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#outbound_line_count OutboundCampaign#outbound_line_count}
  */
  readonly outboundLineCount?: number;
  /**
  * The number of seconds before a call will be automatically placed on a preview. A value of 0 indicates no automatic placement of calls. Only applicable to preview campaigns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#preview_time_out_seconds OutboundCampaign#preview_time_out_seconds}
  */
  readonly previewTimeOutSeconds?: number;
  /**
  * The priority of this campaign relative to other campaigns that are running on the same queue. 5 is the highest priority, 1 the lowest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#priority OutboundCampaign#priority}
  */
  readonly priority?: number;
  /**
  * The Queue for this Campaign to route calls to. Required for all dialing modes except agentless.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#queue_id OutboundCampaign#queue_id}
  */
  readonly queueId?: string;
  /**
  * Rule sets to be applied while this campaign is dialing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#rule_set_ids OutboundCampaign#rule_set_ids}
  */
  readonly ruleSetIds?: string[];
  /**
  * The Script to be displayed to agents that are handling outbound calls. Required for all dialing modes except agentless.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#script_id OutboundCampaign#script_id}
  */
  readonly scriptId?: string;
  /**
  * The identifier of the site to be used for dialing; can be set in place of an edge group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#site_id OutboundCampaign#site_id}
  */
  readonly siteId?: string;
  /**
  * The skill columns on the ContactList that this Campaign should take into account when dialing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#skill_columns OutboundCampaign#skill_columns}
  */
  readonly skillColumns?: string[];
  /**
  * Whether or not agents can skip previews without placing a call. Only applicable for preview campaigns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#skip_preview_disabled OutboundCampaign#skip_preview_disabled}
  */
  readonly skipPreviewDisabled?: boolean | cdktf.IResolvable;
  /**
  * contact_sorts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#contact_sorts OutboundCampaign#contact_sorts}
  */
  readonly contactSorts?: OutboundCampaignContactSorts[] | cdktf.IResolvable;
  /**
  * dynamic_contact_queueing_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#dynamic_contact_queueing_settings OutboundCampaign#dynamic_contact_queueing_settings}
  */
  readonly dynamicContactQueueingSettings?: OutboundCampaignDynamicContactQueueingSettings;
  /**
  * dynamic_line_balancing_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#dynamic_line_balancing_settings OutboundCampaign#dynamic_line_balancing_settings}
  */
  readonly dynamicLineBalancingSettings?: OutboundCampaignDynamicLineBalancingSettings;
  /**
  * phone_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#phone_columns OutboundCampaign#phone_columns}
  */
  readonly phoneColumns: OutboundCampaignPhoneColumns[] | cdktf.IResolvable;
}
export interface OutboundCampaignContactSorts {
  /**
  * The direction in which to sort contacts. Defaults to `ASC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#direction OutboundCampaign#direction}
  */
  readonly direction?: string;
  /**
  * The field name by which to sort contacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#field_name OutboundCampaign#field_name}
  */
  readonly fieldName: string;
  /**
  * Whether or not the column contains numeric data. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#numeric OutboundCampaign#numeric}
  */
  readonly numeric?: boolean | cdktf.IResolvable;
}

export function outboundCampaignContactSortsToTerraform(struct?: OutboundCampaignContactSorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    numeric: cdktf.booleanToTerraform(struct!.numeric),
  }
}


export function outboundCampaignContactSortsToHclTerraform(struct?: OutboundCampaignContactSorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numeric: {
      value: cdktf.booleanToHclTerraform(struct!.numeric),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCampaignContactSortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundCampaignContactSorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._numeric !== undefined) {
      hasAnyValues = true;
      internalValueResult.numeric = this._numeric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCampaignContactSorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._fieldName = undefined;
      this._numeric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._fieldName = value.fieldName;
      this._numeric = value.numeric;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // numeric - computed: false, optional: true, required: false
  private _numeric?: boolean | cdktf.IResolvable; 
  public get numeric() {
    return this.getBooleanAttribute('numeric');
  }
  public set numeric(value: boolean | cdktf.IResolvable) {
    this._numeric = value;
  }
  public resetNumeric() {
    this._numeric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericInput() {
    return this._numeric;
  }
}

export class OutboundCampaignContactSortsList extends cdktf.ComplexList {
  public internalValue? : OutboundCampaignContactSorts[] | cdktf.IResolvable

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
  public get(index: number): OutboundCampaignContactSortsOutputReference {
    return new OutboundCampaignContactSortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundCampaignDynamicContactQueueingSettings {
  /**
  * Whether to filter contacts dynamically. Note: Changing the filter value will cause the outbound campaign to be dropped and recreated with a new ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#filter OutboundCampaign#filter}
  */
  readonly filter?: boolean | cdktf.IResolvable;
  /**
  * Whether to sort contacts dynamically. Note: Changing the sort value will cause the outbound campaign to be dropped and recreated with a new ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#sort OutboundCampaign#sort}
  */
  readonly sort?: boolean | cdktf.IResolvable;
}

export function outboundCampaignDynamicContactQueueingSettingsToTerraform(struct?: OutboundCampaignDynamicContactQueueingSettingsOutputReference | OutboundCampaignDynamicContactQueueingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.booleanToTerraform(struct!.filter),
    sort: cdktf.booleanToTerraform(struct!.sort),
  }
}


export function outboundCampaignDynamicContactQueueingSettingsToHclTerraform(struct?: OutboundCampaignDynamicContactQueueingSettingsOutputReference | OutboundCampaignDynamicContactQueueingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.booleanToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort: {
      value: cdktf.booleanToHclTerraform(struct!.sort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCampaignDynamicContactQueueingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundCampaignDynamicContactQueueingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._sort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCampaignDynamicContactQueueingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
      this._sort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
      this._sort = value.sort;
    }
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: boolean | cdktf.IResolvable; 
  public get filter() {
    return this.getBooleanAttribute('filter');
  }
  public set filter(value: boolean | cdktf.IResolvable) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // sort - computed: true, optional: true, required: false
  private _sort?: boolean | cdktf.IResolvable; 
  public get sort() {
    return this.getBooleanAttribute('sort');
  }
  public set sort(value: boolean | cdktf.IResolvable) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }
}
export interface OutboundCampaignDynamicLineBalancingSettings {
  /**
  * Indicates that this campaign is subject of dynamic line balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#enabled OutboundCampaign#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Relative weight of this campaign in dynamic line balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#relative_weight OutboundCampaign#relative_weight}
  */
  readonly relativeWeight?: number;
}

export function outboundCampaignDynamicLineBalancingSettingsToTerraform(struct?: OutboundCampaignDynamicLineBalancingSettingsOutputReference | OutboundCampaignDynamicLineBalancingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    relative_weight: cdktf.numberToTerraform(struct!.relativeWeight),
  }
}


export function outboundCampaignDynamicLineBalancingSettingsToHclTerraform(struct?: OutboundCampaignDynamicLineBalancingSettingsOutputReference | OutboundCampaignDynamicLineBalancingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    relative_weight: {
      value: cdktf.numberToHclTerraform(struct!.relativeWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCampaignDynamicLineBalancingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundCampaignDynamicLineBalancingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._relativeWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeWeight = this._relativeWeight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCampaignDynamicLineBalancingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._relativeWeight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._relativeWeight = value.relativeWeight;
    }
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

  // relative_weight - computed: false, optional: true, required: false
  private _relativeWeight?: number; 
  public get relativeWeight() {
    return this.getNumberAttribute('relative_weight');
  }
  public set relativeWeight(value: number) {
    this._relativeWeight = value;
  }
  public resetRelativeWeight() {
    this._relativeWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeWeightInput() {
    return this._relativeWeight;
  }
}
export interface OutboundCampaignPhoneColumns {
  /**
  * The name of the phone column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#column_name OutboundCampaign#column_name}
  */
  readonly columnName: string;
}

export function outboundCampaignPhoneColumnsToTerraform(struct?: OutboundCampaignPhoneColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
  }
}


export function outboundCampaignPhoneColumnsToHclTerraform(struct?: OutboundCampaignPhoneColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCampaignPhoneColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundCampaignPhoneColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCampaignPhoneColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }
}

export class OutboundCampaignPhoneColumnsList extends cdktf.ComplexList {
  public internalValue? : OutboundCampaignPhoneColumns[] | cdktf.IResolvable

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
  public get(index: number): OutboundCampaignPhoneColumnsOutputReference {
    return new OutboundCampaignPhoneColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign genesyscloud_outbound_campaign}
*/
export class OutboundCampaign extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_campaign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundCampaign resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundCampaign to import
  * @param importFromId The id of the existing OutboundCampaign that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundCampaign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_campaign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_campaign genesyscloud_outbound_campaign} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundCampaignConfig
  */
  public constructor(scope: Construct, id: string, config: OutboundCampaignConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_campaign',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._abandonRate = config.abandonRate;
    this._alwaysRunning = config.alwaysRunning;
    this._autoAnswer = config.autoAnswer;
    this._callAnalysisLanguage = config.callAnalysisLanguage;
    this._callAnalysisResponseSetId = config.callAnalysisResponseSetId;
    this._callableTimeSetId = config.callableTimeSetId;
    this._callerAddress = config.callerAddress;
    this._callerName = config.callerName;
    this._campaignStatus = config.campaignStatus;
    this._contactListFilterIds = config.contactListFilterIds;
    this._contactListId = config.contactListId;
    this._dialingMode = config.dialingMode;
    this._divisionId = config.divisionId;
    this._dncListIds = config.dncListIds;
    this._edgeGroupId = config.edgeGroupId;
    this._id = config.id;
    this._maxCallsPerAgent = config.maxCallsPerAgent;
    this._name = config.name;
    this._noAnswerTimeout = config.noAnswerTimeout;
    this._outboundLineCount = config.outboundLineCount;
    this._previewTimeOutSeconds = config.previewTimeOutSeconds;
    this._priority = config.priority;
    this._queueId = config.queueId;
    this._ruleSetIds = config.ruleSetIds;
    this._scriptId = config.scriptId;
    this._siteId = config.siteId;
    this._skillColumns = config.skillColumns;
    this._skipPreviewDisabled = config.skipPreviewDisabled;
    this._contactSorts.internalValue = config.contactSorts;
    this._dynamicContactQueueingSettings.internalValue = config.dynamicContactQueueingSettings;
    this._dynamicLineBalancingSettings.internalValue = config.dynamicLineBalancingSettings;
    this._phoneColumns.internalValue = config.phoneColumns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abandon_rate - computed: false, optional: true, required: false
  private _abandonRate?: number; 
  public get abandonRate() {
    return this.getNumberAttribute('abandon_rate');
  }
  public set abandonRate(value: number) {
    this._abandonRate = value;
  }
  public resetAbandonRate() {
    this._abandonRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonRateInput() {
    return this._abandonRate;
  }

  // always_running - computed: false, optional: true, required: false
  private _alwaysRunning?: boolean | cdktf.IResolvable; 
  public get alwaysRunning() {
    return this.getBooleanAttribute('always_running');
  }
  public set alwaysRunning(value: boolean | cdktf.IResolvable) {
    this._alwaysRunning = value;
  }
  public resetAlwaysRunning() {
    this._alwaysRunning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysRunningInput() {
    return this._alwaysRunning;
  }

  // auto_answer - computed: true, optional: true, required: false
  private _autoAnswer?: boolean | cdktf.IResolvable; 
  public get autoAnswer() {
    return this.getBooleanAttribute('auto_answer');
  }
  public set autoAnswer(value: boolean | cdktf.IResolvable) {
    this._autoAnswer = value;
  }
  public resetAutoAnswer() {
    this._autoAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAnswerInput() {
    return this._autoAnswer;
  }

  // call_analysis_language - computed: false, optional: true, required: false
  private _callAnalysisLanguage?: string; 
  public get callAnalysisLanguage() {
    return this.getStringAttribute('call_analysis_language');
  }
  public set callAnalysisLanguage(value: string) {
    this._callAnalysisLanguage = value;
  }
  public resetCallAnalysisLanguage() {
    this._callAnalysisLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAnalysisLanguageInput() {
    return this._callAnalysisLanguage;
  }

  // call_analysis_response_set_id - computed: false, optional: true, required: false
  private _callAnalysisResponseSetId?: string; 
  public get callAnalysisResponseSetId() {
    return this.getStringAttribute('call_analysis_response_set_id');
  }
  public set callAnalysisResponseSetId(value: string) {
    this._callAnalysisResponseSetId = value;
  }
  public resetCallAnalysisResponseSetId() {
    this._callAnalysisResponseSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAnalysisResponseSetIdInput() {
    return this._callAnalysisResponseSetId;
  }

  // callable_time_set_id - computed: false, optional: true, required: false
  private _callableTimeSetId?: string; 
  public get callableTimeSetId() {
    return this.getStringAttribute('callable_time_set_id');
  }
  public set callableTimeSetId(value: string) {
    this._callableTimeSetId = value;
  }
  public resetCallableTimeSetId() {
    this._callableTimeSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callableTimeSetIdInput() {
    return this._callableTimeSetId;
  }

  // caller_address - computed: false, optional: true, required: false
  private _callerAddress?: string; 
  public get callerAddress() {
    return this.getStringAttribute('caller_address');
  }
  public set callerAddress(value: string) {
    this._callerAddress = value;
  }
  public resetCallerAddress() {
    this._callerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerAddressInput() {
    return this._callerAddress;
  }

  // caller_name - computed: false, optional: true, required: false
  private _callerName?: string; 
  public get callerName() {
    return this.getStringAttribute('caller_name');
  }
  public set callerName(value: string) {
    this._callerName = value;
  }
  public resetCallerName() {
    this._callerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerNameInput() {
    return this._callerName;
  }

  // campaign_status - computed: true, optional: true, required: false
  private _campaignStatus?: string; 
  public get campaignStatus() {
    return this.getStringAttribute('campaign_status');
  }
  public set campaignStatus(value: string) {
    this._campaignStatus = value;
  }
  public resetCampaignStatus() {
    this._campaignStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get campaignStatusInput() {
    return this._campaignStatus;
  }

  // contact_list_filter_ids - computed: false, optional: true, required: false
  private _contactListFilterIds?: string[]; 
  public get contactListFilterIds() {
    return this.getListAttribute('contact_list_filter_ids');
  }
  public set contactListFilterIds(value: string[]) {
    this._contactListFilterIds = value;
  }
  public resetContactListFilterIds() {
    this._contactListFilterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactListFilterIdsInput() {
    return this._contactListFilterIds;
  }

  // contact_list_id - computed: false, optional: false, required: true
  private _contactListId?: string; 
  public get contactListId() {
    return this.getStringAttribute('contact_list_id');
  }
  public set contactListId(value: string) {
    this._contactListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactListIdInput() {
    return this._contactListId;
  }

  // dialing_mode - computed: false, optional: false, required: true
  private _dialingMode?: string; 
  public get dialingMode() {
    return this.getStringAttribute('dialing_mode');
  }
  public set dialingMode(value: string) {
    this._dialingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dialingModeInput() {
    return this._dialingMode;
  }

  // division_id - computed: true, optional: true, required: false
  private _divisionId?: string; 
  public get divisionId() {
    return this.getStringAttribute('division_id');
  }
  public set divisionId(value: string) {
    this._divisionId = value;
  }
  public resetDivisionId() {
    this._divisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
  }

  // dnc_list_ids - computed: false, optional: true, required: false
  private _dncListIds?: string[]; 
  public get dncListIds() {
    return cdktf.Fn.tolist(this.getListAttribute('dnc_list_ids'));
  }
  public set dncListIds(value: string[]) {
    this._dncListIds = value;
  }
  public resetDncListIds() {
    this._dncListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dncListIdsInput() {
    return this._dncListIds;
  }

  // edge_group_id - computed: false, optional: true, required: false
  private _edgeGroupId?: string; 
  public get edgeGroupId() {
    return this.getStringAttribute('edge_group_id');
  }
  public set edgeGroupId(value: string) {
    this._edgeGroupId = value;
  }
  public resetEdgeGroupId() {
    this._edgeGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGroupIdInput() {
    return this._edgeGroupId;
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

  // max_calls_per_agent - computed: false, optional: true, required: false
  private _maxCallsPerAgent?: number; 
  public get maxCallsPerAgent() {
    return this.getNumberAttribute('max_calls_per_agent');
  }
  public set maxCallsPerAgent(value: number) {
    this._maxCallsPerAgent = value;
  }
  public resetMaxCallsPerAgent() {
    this._maxCallsPerAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCallsPerAgentInput() {
    return this._maxCallsPerAgent;
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

  // no_answer_timeout - computed: true, optional: true, required: false
  private _noAnswerTimeout?: number; 
  public get noAnswerTimeout() {
    return this.getNumberAttribute('no_answer_timeout');
  }
  public set noAnswerTimeout(value: number) {
    this._noAnswerTimeout = value;
  }
  public resetNoAnswerTimeout() {
    this._noAnswerTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAnswerTimeoutInput() {
    return this._noAnswerTimeout;
  }

  // outbound_line_count - computed: false, optional: true, required: false
  private _outboundLineCount?: number; 
  public get outboundLineCount() {
    return this.getNumberAttribute('outbound_line_count');
  }
  public set outboundLineCount(value: number) {
    this._outboundLineCount = value;
  }
  public resetOutboundLineCount() {
    this._outboundLineCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundLineCountInput() {
    return this._outboundLineCount;
  }

  // preview_time_out_seconds - computed: false, optional: true, required: false
  private _previewTimeOutSeconds?: number; 
  public get previewTimeOutSeconds() {
    return this.getNumberAttribute('preview_time_out_seconds');
  }
  public set previewTimeOutSeconds(value: number) {
    this._previewTimeOutSeconds = value;
  }
  public resetPreviewTimeOutSeconds() {
    this._previewTimeOutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewTimeOutSecondsInput() {
    return this._previewTimeOutSeconds;
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

  // queue_id - computed: false, optional: true, required: false
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  public resetQueueId() {
    this._queueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // rule_set_ids - computed: false, optional: true, required: false
  private _ruleSetIds?: string[]; 
  public get ruleSetIds() {
    return this.getListAttribute('rule_set_ids');
  }
  public set ruleSetIds(value: string[]) {
    this._ruleSetIds = value;
  }
  public resetRuleSetIds() {
    this._ruleSetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetIdsInput() {
    return this._ruleSetIds;
  }

  // script_id - computed: false, optional: true, required: false
  private _scriptId?: string; 
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }
  public set scriptId(value: string) {
    this._scriptId = value;
  }
  public resetScriptId() {
    this._scriptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptIdInput() {
    return this._scriptId;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // skill_columns - computed: false, optional: true, required: false
  private _skillColumns?: string[]; 
  public get skillColumns() {
    return this.getListAttribute('skill_columns');
  }
  public set skillColumns(value: string[]) {
    this._skillColumns = value;
  }
  public resetSkillColumns() {
    this._skillColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillColumnsInput() {
    return this._skillColumns;
  }

  // skip_preview_disabled - computed: false, optional: true, required: false
  private _skipPreviewDisabled?: boolean | cdktf.IResolvable; 
  public get skipPreviewDisabled() {
    return this.getBooleanAttribute('skip_preview_disabled');
  }
  public set skipPreviewDisabled(value: boolean | cdktf.IResolvable) {
    this._skipPreviewDisabled = value;
  }
  public resetSkipPreviewDisabled() {
    this._skipPreviewDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipPreviewDisabledInput() {
    return this._skipPreviewDisabled;
  }

  // contact_sorts - computed: false, optional: true, required: false
  private _contactSorts = new OutboundCampaignContactSortsList(this, "contact_sorts", false);
  public get contactSorts() {
    return this._contactSorts;
  }
  public putContactSorts(value: OutboundCampaignContactSorts[] | cdktf.IResolvable) {
    this._contactSorts.internalValue = value;
  }
  public resetContactSorts() {
    this._contactSorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactSortsInput() {
    return this._contactSorts.internalValue;
  }

  // dynamic_contact_queueing_settings - computed: false, optional: true, required: false
  private _dynamicContactQueueingSettings = new OutboundCampaignDynamicContactQueueingSettingsOutputReference(this, "dynamic_contact_queueing_settings");
  public get dynamicContactQueueingSettings() {
    return this._dynamicContactQueueingSettings;
  }
  public putDynamicContactQueueingSettings(value: OutboundCampaignDynamicContactQueueingSettings) {
    this._dynamicContactQueueingSettings.internalValue = value;
  }
  public resetDynamicContactQueueingSettings() {
    this._dynamicContactQueueingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicContactQueueingSettingsInput() {
    return this._dynamicContactQueueingSettings.internalValue;
  }

  // dynamic_line_balancing_settings - computed: false, optional: true, required: false
  private _dynamicLineBalancingSettings = new OutboundCampaignDynamicLineBalancingSettingsOutputReference(this, "dynamic_line_balancing_settings");
  public get dynamicLineBalancingSettings() {
    return this._dynamicLineBalancingSettings;
  }
  public putDynamicLineBalancingSettings(value: OutboundCampaignDynamicLineBalancingSettings) {
    this._dynamicLineBalancingSettings.internalValue = value;
  }
  public resetDynamicLineBalancingSettings() {
    this._dynamicLineBalancingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicLineBalancingSettingsInput() {
    return this._dynamicLineBalancingSettings.internalValue;
  }

  // phone_columns - computed: false, optional: false, required: true
  private _phoneColumns = new OutboundCampaignPhoneColumnsList(this, "phone_columns", false);
  public get phoneColumns() {
    return this._phoneColumns;
  }
  public putPhoneColumns(value: OutboundCampaignPhoneColumns[] | cdktf.IResolvable) {
    this._phoneColumns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneColumnsInput() {
    return this._phoneColumns.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abandon_rate: cdktf.numberToTerraform(this._abandonRate),
      always_running: cdktf.booleanToTerraform(this._alwaysRunning),
      auto_answer: cdktf.booleanToTerraform(this._autoAnswer),
      call_analysis_language: cdktf.stringToTerraform(this._callAnalysisLanguage),
      call_analysis_response_set_id: cdktf.stringToTerraform(this._callAnalysisResponseSetId),
      callable_time_set_id: cdktf.stringToTerraform(this._callableTimeSetId),
      caller_address: cdktf.stringToTerraform(this._callerAddress),
      caller_name: cdktf.stringToTerraform(this._callerName),
      campaign_status: cdktf.stringToTerraform(this._campaignStatus),
      contact_list_filter_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactListFilterIds),
      contact_list_id: cdktf.stringToTerraform(this._contactListId),
      dialing_mode: cdktf.stringToTerraform(this._dialingMode),
      division_id: cdktf.stringToTerraform(this._divisionId),
      dnc_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dncListIds),
      edge_group_id: cdktf.stringToTerraform(this._edgeGroupId),
      id: cdktf.stringToTerraform(this._id),
      max_calls_per_agent: cdktf.numberToTerraform(this._maxCallsPerAgent),
      name: cdktf.stringToTerraform(this._name),
      no_answer_timeout: cdktf.numberToTerraform(this._noAnswerTimeout),
      outbound_line_count: cdktf.numberToTerraform(this._outboundLineCount),
      preview_time_out_seconds: cdktf.numberToTerraform(this._previewTimeOutSeconds),
      priority: cdktf.numberToTerraform(this._priority),
      queue_id: cdktf.stringToTerraform(this._queueId),
      rule_set_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ruleSetIds),
      script_id: cdktf.stringToTerraform(this._scriptId),
      site_id: cdktf.stringToTerraform(this._siteId),
      skill_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._skillColumns),
      skip_preview_disabled: cdktf.booleanToTerraform(this._skipPreviewDisabled),
      contact_sorts: cdktf.listMapper(outboundCampaignContactSortsToTerraform, true)(this._contactSorts.internalValue),
      dynamic_contact_queueing_settings: outboundCampaignDynamicContactQueueingSettingsToTerraform(this._dynamicContactQueueingSettings.internalValue),
      dynamic_line_balancing_settings: outboundCampaignDynamicLineBalancingSettingsToTerraform(this._dynamicLineBalancingSettings.internalValue),
      phone_columns: cdktf.listMapper(outboundCampaignPhoneColumnsToTerraform, true)(this._phoneColumns.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abandon_rate: {
        value: cdktf.numberToHclTerraform(this._abandonRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      always_running: {
        value: cdktf.booleanToHclTerraform(this._alwaysRunning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_answer: {
        value: cdktf.booleanToHclTerraform(this._autoAnswer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      call_analysis_language: {
        value: cdktf.stringToHclTerraform(this._callAnalysisLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_analysis_response_set_id: {
        value: cdktf.stringToHclTerraform(this._callAnalysisResponseSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      callable_time_set_id: {
        value: cdktf.stringToHclTerraform(this._callableTimeSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caller_address: {
        value: cdktf.stringToHclTerraform(this._callerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caller_name: {
        value: cdktf.stringToHclTerraform(this._callerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      campaign_status: {
        value: cdktf.stringToHclTerraform(this._campaignStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_list_filter_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactListFilterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      contact_list_id: {
        value: cdktf.stringToHclTerraform(this._contactListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dialing_mode: {
        value: cdktf.stringToHclTerraform(this._dialingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      division_id: {
        value: cdktf.stringToHclTerraform(this._divisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnc_list_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dncListIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      edge_group_id: {
        value: cdktf.stringToHclTerraform(this._edgeGroupId),
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
      max_calls_per_agent: {
        value: cdktf.numberToHclTerraform(this._maxCallsPerAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_answer_timeout: {
        value: cdktf.numberToHclTerraform(this._noAnswerTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outbound_line_count: {
        value: cdktf.numberToHclTerraform(this._outboundLineCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preview_time_out_seconds: {
        value: cdktf.numberToHclTerraform(this._previewTimeOutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_id: {
        value: cdktf.stringToHclTerraform(this._queueId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_set_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ruleSetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      script_id: {
        value: cdktf.stringToHclTerraform(this._scriptId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skill_columns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._skillColumns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip_preview_disabled: {
        value: cdktf.booleanToHclTerraform(this._skipPreviewDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contact_sorts: {
        value: cdktf.listMapperHcl(outboundCampaignContactSortsToHclTerraform, true)(this._contactSorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundCampaignContactSortsList",
      },
      dynamic_contact_queueing_settings: {
        value: outboundCampaignDynamicContactQueueingSettingsToHclTerraform(this._dynamicContactQueueingSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundCampaignDynamicContactQueueingSettingsList",
      },
      dynamic_line_balancing_settings: {
        value: outboundCampaignDynamicLineBalancingSettingsToHclTerraform(this._dynamicLineBalancingSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundCampaignDynamicLineBalancingSettingsList",
      },
      phone_columns: {
        value: cdktf.listMapperHcl(outboundCampaignPhoneColumnsToHclTerraform, true)(this._phoneColumns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundCampaignPhoneColumnsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
