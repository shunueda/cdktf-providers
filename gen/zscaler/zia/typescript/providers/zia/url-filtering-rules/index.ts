// https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UrlFilteringRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action taken when traffic matches rule criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#action UrlFilteringRules#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#block_override UrlFilteringRules#block_override}
  */
  readonly blockOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#browser_eun_template_id UrlFilteringRules#browser_eun_template_id}
  */
  readonly browserEunTemplateId?: number;
  /**
  * If set to true, the CIPA Compliance rule is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#ciparule UrlFilteringRules#ciparule}
  */
  readonly ciparule?: boolean | cdktf.IResolvable;
  /**
  * Additional information about the URL Filtering rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#description UrlFilteringRules#description}
  */
  readonly description?: string;
  /**
  * List of device trust levels for which the rule must be applied. This field is applicable for devices that are managed using Zscaler Client Connector. The trust levels are assigned to the devices based on your posture configurations in the Zscaler Client Connector Portal. If no value is set, this field is ignored during the policy evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#device_trust_levels UrlFilteringRules#device_trust_levels}
  */
  readonly deviceTrustLevels?: string[];
  /**
  * URL of end user notification page to be displayed when the rule is matched. Not applicable if either 'overrideUsers' or 'overrideGroups' is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#end_user_notification_url UrlFilteringRules#end_user_notification_url}
  */
  readonly endUserNotificationUrl?: string;
  /**
  * Enforce a set a validity time period for the URL Filtering rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#enforce_time_validity UrlFilteringRules#enforce_time_validity}
  */
  readonly enforceTimeValidity?: boolean | cdktf.IResolvable;
  /**
  * Rule Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#name UrlFilteringRules#name}
  */
  readonly name: string;
  /**
  * Order of execution of rule with respect to other URL Filtering rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#order UrlFilteringRules#order}
  */
  readonly order: number;
  /**
  * Supported Protocol criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#protocols UrlFilteringRules#protocols}
  */
  readonly protocols: string[];
  /**
  * Admin rank of the Firewall Filtering policy rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#rank UrlFilteringRules#rank}
  */
  readonly rank?: number;
  /**
  * Request method for which the rule must be applied. If not set, rule will be applied to all methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#request_methods UrlFilteringRules#request_methods}
  */
  readonly requestMethods?: string[];
  /**
  * Size quota in KB beyond which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule action is set to 'BLOCK', this field is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#size_quota UrlFilteringRules#size_quota}
  */
  readonly sizeQuota?: number;
  /**
  * Destination countries for which the rule is applicable. If not set, the rule is not restricted to specific destination countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#source_countries UrlFilteringRules#source_countries}
  */
  readonly sourceCountries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#state UrlFilteringRules#state}
  */
  readonly state?: string;
  /**
  * Time quota in minutes, after which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule action is set to 'BLOCK', this field is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#time_quota UrlFilteringRules#time_quota}
  */
  readonly timeQuota?: number;
  /**
  * The list of URL Categories to which the SSL inspection rule must be applied.
  * 				See the URL Categories API for the list of available categories:
  * 				https://help.zscaler.com/zia/url-categories#/urlCategories-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#url_categories UrlFilteringRules#url_categories}
  */
  readonly urlCategories?: string[];
  /**
  * Supported User Agent Types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#user_agent_types UrlFilteringRules#user_agent_types}
  */
  readonly userAgentTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#user_risk_score_levels UrlFilteringRules#user_risk_score_levels}
  */
  readonly userRiskScoreLevels?: string[];
  /**
  * If enforceTimeValidity is set to true, the URL Filtering rule ceases to be valid on this end date and time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#validity_end_time UrlFilteringRules#validity_end_time}
  */
  readonly validityEndTime?: string;
  /**
  * If enforceTimeValidity is set to true, the URL Filtering rule is valid starting on this date and time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#validity_start_time UrlFilteringRules#validity_start_time}
  */
  readonly validityStartTime?: string;
  /**
  * If enforceTimeValidity is set to true, the URL Filtering rule date and time is valid based on this time zone ID.
  * 				Use IANA Format TimeZone. Visit https://nodatime.org/TimeZones for the complete IANA timezone list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#validity_time_zone_id UrlFilteringRules#validity_time_zone_id}
  */
  readonly validityTimeZoneId?: string;
  /**
  * cbi_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#cbi_profile UrlFilteringRules#cbi_profile}
  */
  readonly cbiProfile?: UrlFilteringRulesCbiProfile[] | cdktf.IResolvable;
  /**
  * departments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#departments UrlFilteringRules#departments}
  */
  readonly departments?: UrlFilteringRulesDepartments;
  /**
  * device_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#device_groups UrlFilteringRules#device_groups}
  */
  readonly deviceGroups?: UrlFilteringRulesDeviceGroups;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#devices UrlFilteringRules#devices}
  */
  readonly devices?: UrlFilteringRulesDevices;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#groups UrlFilteringRules#groups}
  */
  readonly groups?: UrlFilteringRulesGroups;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#labels UrlFilteringRules#labels}
  */
  readonly labels?: UrlFilteringRulesLabels;
  /**
  * location_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#location_groups UrlFilteringRules#location_groups}
  */
  readonly locationGroups?: UrlFilteringRulesLocationGroups;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#locations UrlFilteringRules#locations}
  */
  readonly locations?: UrlFilteringRulesLocations;
  /**
  * override_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#override_groups UrlFilteringRules#override_groups}
  */
  readonly overrideGroups?: UrlFilteringRulesOverrideGroups;
  /**
  * override_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#override_users UrlFilteringRules#override_users}
  */
  readonly overrideUsers?: UrlFilteringRulesOverrideUsers;
  /**
  * source_ip_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#source_ip_groups UrlFilteringRules#source_ip_groups}
  */
  readonly sourceIpGroups?: UrlFilteringRulesSourceIpGroups;
  /**
  * time_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#time_windows UrlFilteringRules#time_windows}
  */
  readonly timeWindows?: UrlFilteringRulesTimeWindows;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#timeouts UrlFilteringRules#timeouts}
  */
  readonly timeouts?: UrlFilteringRulesTimeouts;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#users UrlFilteringRules#users}
  */
  readonly users?: UrlFilteringRulesUsers;
  /**
  * workload_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#workload_groups UrlFilteringRules#workload_groups}
  */
  readonly workloadGroups?: UrlFilteringRulesWorkloadGroups[] | cdktf.IResolvable;
}
export interface UrlFilteringRulesCbiProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#id UrlFilteringRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#name UrlFilteringRules#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#url UrlFilteringRules#url}
  */
  readonly url?: string;
}

export function urlFilteringRulesCbiProfileToTerraform(struct?: UrlFilteringRulesCbiProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function urlFilteringRulesCbiProfileToHclTerraform(struct?: UrlFilteringRulesCbiProfile | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringRulesCbiProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UrlFilteringRulesCbiProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringRulesCbiProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._url = value.url;
    }
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class UrlFilteringRulesCbiProfileList extends cdktf.ComplexList {
  public internalValue? : UrlFilteringRulesCbiProfile[] | cdktf.IResolvable

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
  public get(index: number): UrlFilteringRulesCbiProfileOutputReference {
    return new UrlFilteringRulesCbiProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UrlFilteringRulesDepartments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#id UrlFilteringRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function urlFilteringRulesDepartmentsToTerraform(struct?: UrlFilteringRulesDepartmentsOutputReference | UrlFilteringRulesDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function urlFilteringRulesDepartmentsToHclTerraform(struct?: UrlFilteringRulesDepartmentsOutputReference | UrlFilteringRulesDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringRulesDepartmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlFilteringRulesDepartments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringRulesDepartments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface UrlFilteringRulesDeviceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#id UrlFilteringRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function urlFilteringRulesDeviceGroupsToTerraform(struct?: UrlFilteringRulesDeviceGroupsOutputReference | UrlFilteringRulesDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function urlFilteringRulesDeviceGroupsToHclTerraform(struct?: UrlFilteringRulesDeviceGroupsOutputReference | UrlFilteringRulesDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringRulesDeviceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlFilteringRulesDeviceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringRulesDeviceGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface UrlFilteringRulesDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#id UrlFilteringRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function urlFilteringRulesDevicesToTerraform(struct?: UrlFilteringRulesDevicesOutputReference | UrlFilteringRulesDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function urlFilteringRulesDevicesToHclTerraform(struct?: UrlFilteringRulesDevicesOutputReference | UrlFilteringRulesDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringRulesDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlFilteringRulesDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringRulesDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface UrlFilteringRulesGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#id UrlFilteringRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function urlFilteringRulesGroupsToTerraform(struct?: UrlFilteringRulesGroupsOutputReference | UrlFilteringRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function urlFilteringRulesGroupsToHclTerraform(struct?: UrlFilteringRulesGroupsOutputReference | UrlFilteringRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringRulesGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlFilteringRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface UrlFilteringRulesLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#id UrlFilteringRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function urlFilteringRulesLabelsToTerraform(struct?: UrlFilteringRulesLabelsOutputReference | UrlFilteringRulesLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function urlFilteringRulesLabelsToHclTerraform(struct?: UrlFilteringRulesLabelsOutputReference | UrlFilteringRulesLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringRulesLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlFilteringRulesLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringRulesLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface UrlFilteringRulesLocationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#id UrlFilteringRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function urlFilteringRulesLocationGroupsToTerraform(struct?: UrlFilteringRulesLocationGroupsOutputReference | UrlFilteringRulesLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function urlFilteringRulesLocationGroupsToHclTerraform(struct?: UrlFilteringRulesLocationGroupsOutputReference | UrlFilteringRulesLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringRulesLocationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlFilteringRulesLocationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringRulesLocationGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface UrlFilteringRulesLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#id UrlFilteringRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function urlFilteringRulesLocationsToTerraform(struct?: UrlFilteringRulesLocationsOutputReference | UrlFilteringRulesLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function urlFilteringRulesLocationsToHclTerraform(struct?: UrlFilteringRulesLocationsOutputReference | UrlFilteringRulesLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringRulesLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlFilteringRulesLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringRulesLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface UrlFilteringRulesOverrideGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#id UrlFilteringRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function urlFilteringRulesOverrideGroupsToTerraform(struct?: UrlFilteringRulesOverrideGroupsOutputReference | UrlFilteringRulesOverrideGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function urlFilteringRulesOverrideGroupsToHclTerraform(struct?: UrlFilteringRulesOverrideGroupsOutputReference | UrlFilteringRulesOverrideGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringRulesOverrideGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlFilteringRulesOverrideGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringRulesOverrideGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface UrlFilteringRulesOverrideUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#id UrlFilteringRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function urlFilteringRulesOverrideUsersToTerraform(struct?: UrlFilteringRulesOverrideUsersOutputReference | UrlFilteringRulesOverrideUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function urlFilteringRulesOverrideUsersToHclTerraform(struct?: UrlFilteringRulesOverrideUsersOutputReference | UrlFilteringRulesOverrideUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringRulesOverrideUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlFilteringRulesOverrideUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringRulesOverrideUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface UrlFilteringRulesSourceIpGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#id UrlFilteringRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function urlFilteringRulesSourceIpGroupsToTerraform(struct?: UrlFilteringRulesSourceIpGroupsOutputReference | UrlFilteringRulesSourceIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function urlFilteringRulesSourceIpGroupsToHclTerraform(struct?: UrlFilteringRulesSourceIpGroupsOutputReference | UrlFilteringRulesSourceIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringRulesSourceIpGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlFilteringRulesSourceIpGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringRulesSourceIpGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface UrlFilteringRulesTimeWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#id UrlFilteringRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function urlFilteringRulesTimeWindowsToTerraform(struct?: UrlFilteringRulesTimeWindowsOutputReference | UrlFilteringRulesTimeWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function urlFilteringRulesTimeWindowsToHclTerraform(struct?: UrlFilteringRulesTimeWindowsOutputReference | UrlFilteringRulesTimeWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringRulesTimeWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlFilteringRulesTimeWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringRulesTimeWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface UrlFilteringRulesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#create UrlFilteringRules#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#update UrlFilteringRules#update}
  */
  readonly update?: string;
}

export function urlFilteringRulesTimeoutsToTerraform(struct?: UrlFilteringRulesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function urlFilteringRulesTimeoutsToHclTerraform(struct?: UrlFilteringRulesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringRulesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UrlFilteringRulesTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringRulesTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface UrlFilteringRulesUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#id UrlFilteringRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function urlFilteringRulesUsersToTerraform(struct?: UrlFilteringRulesUsersOutputReference | UrlFilteringRulesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function urlFilteringRulesUsersToHclTerraform(struct?: UrlFilteringRulesUsersOutputReference | UrlFilteringRulesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringRulesUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlFilteringRulesUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringRulesUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface UrlFilteringRulesWorkloadGroups {
  /**
  * The unique identifier for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#id UrlFilteringRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#name UrlFilteringRules#name}
  */
  readonly name?: string;
}

export function urlFilteringRulesWorkloadGroupsToTerraform(struct?: UrlFilteringRulesWorkloadGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function urlFilteringRulesWorkloadGroupsToHclTerraform(struct?: UrlFilteringRulesWorkloadGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringRulesWorkloadGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UrlFilteringRulesWorkloadGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringRulesWorkloadGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class UrlFilteringRulesWorkloadGroupsList extends cdktf.ComplexList {
  public internalValue? : UrlFilteringRulesWorkloadGroups[] | cdktf.IResolvable

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
  public get(index: number): UrlFilteringRulesWorkloadGroupsOutputReference {
    return new UrlFilteringRulesWorkloadGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules zia_url_filtering_rules}
*/
export class UrlFilteringRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_url_filtering_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UrlFilteringRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UrlFilteringRules to import
  * @param importFromId The id of the existing UrlFilteringRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UrlFilteringRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_url_filtering_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/url_filtering_rules zia_url_filtering_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UrlFilteringRulesConfig
  */
  public constructor(scope: Construct, id: string, config: UrlFilteringRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_url_filtering_rules',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.0',
        providerVersionConstraint: '4.6.0'
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
    this._blockOverride = config.blockOverride;
    this._browserEunTemplateId = config.browserEunTemplateId;
    this._ciparule = config.ciparule;
    this._description = config.description;
    this._deviceTrustLevels = config.deviceTrustLevels;
    this._endUserNotificationUrl = config.endUserNotificationUrl;
    this._enforceTimeValidity = config.enforceTimeValidity;
    this._name = config.name;
    this._order = config.order;
    this._protocols = config.protocols;
    this._rank = config.rank;
    this._requestMethods = config.requestMethods;
    this._sizeQuota = config.sizeQuota;
    this._sourceCountries = config.sourceCountries;
    this._state = config.state;
    this._timeQuota = config.timeQuota;
    this._urlCategories = config.urlCategories;
    this._userAgentTypes = config.userAgentTypes;
    this._userRiskScoreLevels = config.userRiskScoreLevels;
    this._validityEndTime = config.validityEndTime;
    this._validityStartTime = config.validityStartTime;
    this._validityTimeZoneId = config.validityTimeZoneId;
    this._cbiProfile.internalValue = config.cbiProfile;
    this._departments.internalValue = config.departments;
    this._deviceGroups.internalValue = config.deviceGroups;
    this._devices.internalValue = config.devices;
    this._groups.internalValue = config.groups;
    this._labels.internalValue = config.labels;
    this._locationGroups.internalValue = config.locationGroups;
    this._locations.internalValue = config.locations;
    this._overrideGroups.internalValue = config.overrideGroups;
    this._overrideUsers.internalValue = config.overrideUsers;
    this._sourceIpGroups.internalValue = config.sourceIpGroups;
    this._timeWindows.internalValue = config.timeWindows;
    this._timeouts.internalValue = config.timeouts;
    this._users.internalValue = config.users;
    this._workloadGroups.internalValue = config.workloadGroups;
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

  // block_override - computed: false, optional: true, required: false
  private _blockOverride?: boolean | cdktf.IResolvable; 
  public get blockOverride() {
    return this.getBooleanAttribute('block_override');
  }
  public set blockOverride(value: boolean | cdktf.IResolvable) {
    this._blockOverride = value;
  }
  public resetBlockOverride() {
    this._blockOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockOverrideInput() {
    return this._blockOverride;
  }

  // browser_eun_template_id - computed: false, optional: true, required: false
  private _browserEunTemplateId?: number; 
  public get browserEunTemplateId() {
    return this.getNumberAttribute('browser_eun_template_id');
  }
  public set browserEunTemplateId(value: number) {
    this._browserEunTemplateId = value;
  }
  public resetBrowserEunTemplateId() {
    this._browserEunTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserEunTemplateIdInput() {
    return this._browserEunTemplateId;
  }

  // ciparule - computed: false, optional: true, required: false
  private _ciparule?: boolean | cdktf.IResolvable; 
  public get ciparule() {
    return this.getBooleanAttribute('ciparule');
  }
  public set ciparule(value: boolean | cdktf.IResolvable) {
    this._ciparule = value;
  }
  public resetCiparule() {
    this._ciparule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciparuleInput() {
    return this._ciparule;
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

  // device_trust_levels - computed: false, optional: true, required: false
  private _deviceTrustLevels?: string[]; 
  public get deviceTrustLevels() {
    return cdktf.Fn.tolist(this.getListAttribute('device_trust_levels'));
  }
  public set deviceTrustLevels(value: string[]) {
    this._deviceTrustLevels = value;
  }
  public resetDeviceTrustLevels() {
    this._deviceTrustLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTrustLevelsInput() {
    return this._deviceTrustLevels;
  }

  // end_user_notification_url - computed: false, optional: true, required: false
  private _endUserNotificationUrl?: string; 
  public get endUserNotificationUrl() {
    return this.getStringAttribute('end_user_notification_url');
  }
  public set endUserNotificationUrl(value: string) {
    this._endUserNotificationUrl = value;
  }
  public resetEndUserNotificationUrl() {
    this._endUserNotificationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserNotificationUrlInput() {
    return this._endUserNotificationUrl;
  }

  // enforce_time_validity - computed: false, optional: true, required: false
  private _enforceTimeValidity?: boolean | cdktf.IResolvable; 
  public get enforceTimeValidity() {
    return this.getBooleanAttribute('enforce_time_validity');
  }
  public set enforceTimeValidity(value: boolean | cdktf.IResolvable) {
    this._enforceTimeValidity = value;
  }
  public resetEnforceTimeValidity() {
    this._enforceTimeValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTimeValidityInput() {
    return this._enforceTimeValidity;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // rank - computed: false, optional: true, required: false
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // request_methods - computed: false, optional: true, required: false
  private _requestMethods?: string[]; 
  public get requestMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('request_methods'));
  }
  public set requestMethods(value: string[]) {
    this._requestMethods = value;
  }
  public resetRequestMethods() {
    this._requestMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodsInput() {
    return this._requestMethods;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }

  // size_quota - computed: false, optional: true, required: false
  private _sizeQuota?: number; 
  public get sizeQuota() {
    return this.getNumberAttribute('size_quota');
  }
  public set sizeQuota(value: number) {
    this._sizeQuota = value;
  }
  public resetSizeQuota() {
    this._sizeQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeQuotaInput() {
    return this._sizeQuota;
  }

  // source_countries - computed: true, optional: true, required: false
  private _sourceCountries?: string[]; 
  public get sourceCountries() {
    return cdktf.Fn.tolist(this.getListAttribute('source_countries'));
  }
  public set sourceCountries(value: string[]) {
    this._sourceCountries = value;
  }
  public resetSourceCountries() {
    this._sourceCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCountriesInput() {
    return this._sourceCountries;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time_quota - computed: false, optional: true, required: false
  private _timeQuota?: number; 
  public get timeQuota() {
    return this.getNumberAttribute('time_quota');
  }
  public set timeQuota(value: number) {
    this._timeQuota = value;
  }
  public resetTimeQuota() {
    this._timeQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeQuotaInput() {
    return this._timeQuota;
  }

  // url_categories - computed: false, optional: true, required: false
  private _urlCategories?: string[]; 
  public get urlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('url_categories'));
  }
  public set urlCategories(value: string[]) {
    this._urlCategories = value;
  }
  public resetUrlCategories() {
    this._urlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoriesInput() {
    return this._urlCategories;
  }

  // user_agent_types - computed: false, optional: true, required: false
  private _userAgentTypes?: string[]; 
  public get userAgentTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('user_agent_types'));
  }
  public set userAgentTypes(value: string[]) {
    this._userAgentTypes = value;
  }
  public resetUserAgentTypes() {
    this._userAgentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentTypesInput() {
    return this._userAgentTypes;
  }

  // user_risk_score_levels - computed: false, optional: true, required: false
  private _userRiskScoreLevels?: string[]; 
  public get userRiskScoreLevels() {
    return cdktf.Fn.tolist(this.getListAttribute('user_risk_score_levels'));
  }
  public set userRiskScoreLevels(value: string[]) {
    this._userRiskScoreLevels = value;
  }
  public resetUserRiskScoreLevels() {
    this._userRiskScoreLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRiskScoreLevelsInput() {
    return this._userRiskScoreLevels;
  }

  // validity_end_time - computed: false, optional: true, required: false
  private _validityEndTime?: string; 
  public get validityEndTime() {
    return this.getStringAttribute('validity_end_time');
  }
  public set validityEndTime(value: string) {
    this._validityEndTime = value;
  }
  public resetValidityEndTime() {
    this._validityEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityEndTimeInput() {
    return this._validityEndTime;
  }

  // validity_start_time - computed: false, optional: true, required: false
  private _validityStartTime?: string; 
  public get validityStartTime() {
    return this.getStringAttribute('validity_start_time');
  }
  public set validityStartTime(value: string) {
    this._validityStartTime = value;
  }
  public resetValidityStartTime() {
    this._validityStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityStartTimeInput() {
    return this._validityStartTime;
  }

  // validity_time_zone_id - computed: false, optional: true, required: false
  private _validityTimeZoneId?: string; 
  public get validityTimeZoneId() {
    return this.getStringAttribute('validity_time_zone_id');
  }
  public set validityTimeZoneId(value: string) {
    this._validityTimeZoneId = value;
  }
  public resetValidityTimeZoneId() {
    this._validityTimeZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityTimeZoneIdInput() {
    return this._validityTimeZoneId;
  }

  // cbi_profile - computed: false, optional: true, required: false
  private _cbiProfile = new UrlFilteringRulesCbiProfileList(this, "cbi_profile", false);
  public get cbiProfile() {
    return this._cbiProfile;
  }
  public putCbiProfile(value: UrlFilteringRulesCbiProfile[] | cdktf.IResolvable) {
    this._cbiProfile.internalValue = value;
  }
  public resetCbiProfile() {
    this._cbiProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbiProfileInput() {
    return this._cbiProfile.internalValue;
  }

  // departments - computed: false, optional: true, required: false
  private _departments = new UrlFilteringRulesDepartmentsOutputReference(this, "departments");
  public get departments() {
    return this._departments;
  }
  public putDepartments(value: UrlFilteringRulesDepartments) {
    this._departments.internalValue = value;
  }
  public resetDepartments() {
    this._departments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentsInput() {
    return this._departments.internalValue;
  }

  // device_groups - computed: false, optional: true, required: false
  private _deviceGroups = new UrlFilteringRulesDeviceGroupsOutputReference(this, "device_groups");
  public get deviceGroups() {
    return this._deviceGroups;
  }
  public putDeviceGroups(value: UrlFilteringRulesDeviceGroups) {
    this._deviceGroups.internalValue = value;
  }
  public resetDeviceGroups() {
    this._deviceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupsInput() {
    return this._deviceGroups.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new UrlFilteringRulesDevicesOutputReference(this, "devices");
  public get devices() {
    return this._devices;
  }
  public putDevices(value: UrlFilteringRulesDevices) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new UrlFilteringRulesGroupsOutputReference(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: UrlFilteringRulesGroups) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new UrlFilteringRulesLabelsOutputReference(this, "labels");
  public get labels() {
    return this._labels;
  }
  public putLabels(value: UrlFilteringRulesLabels) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // location_groups - computed: false, optional: true, required: false
  private _locationGroups = new UrlFilteringRulesLocationGroupsOutputReference(this, "location_groups");
  public get locationGroups() {
    return this._locationGroups;
  }
  public putLocationGroups(value: UrlFilteringRulesLocationGroups) {
    this._locationGroups.internalValue = value;
  }
  public resetLocationGroups() {
    this._locationGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationGroupsInput() {
    return this._locationGroups.internalValue;
  }

  // locations - computed: false, optional: true, required: false
  private _locations = new UrlFilteringRulesLocationsOutputReference(this, "locations");
  public get locations() {
    return this._locations;
  }
  public putLocations(value: UrlFilteringRulesLocations) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // override_groups - computed: false, optional: true, required: false
  private _overrideGroups = new UrlFilteringRulesOverrideGroupsOutputReference(this, "override_groups");
  public get overrideGroups() {
    return this._overrideGroups;
  }
  public putOverrideGroups(value: UrlFilteringRulesOverrideGroups) {
    this._overrideGroups.internalValue = value;
  }
  public resetOverrideGroups() {
    this._overrideGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideGroupsInput() {
    return this._overrideGroups.internalValue;
  }

  // override_users - computed: false, optional: true, required: false
  private _overrideUsers = new UrlFilteringRulesOverrideUsersOutputReference(this, "override_users");
  public get overrideUsers() {
    return this._overrideUsers;
  }
  public putOverrideUsers(value: UrlFilteringRulesOverrideUsers) {
    this._overrideUsers.internalValue = value;
  }
  public resetOverrideUsers() {
    this._overrideUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideUsersInput() {
    return this._overrideUsers.internalValue;
  }

  // source_ip_groups - computed: false, optional: true, required: false
  private _sourceIpGroups = new UrlFilteringRulesSourceIpGroupsOutputReference(this, "source_ip_groups");
  public get sourceIpGroups() {
    return this._sourceIpGroups;
  }
  public putSourceIpGroups(value: UrlFilteringRulesSourceIpGroups) {
    this._sourceIpGroups.internalValue = value;
  }
  public resetSourceIpGroups() {
    this._sourceIpGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpGroupsInput() {
    return this._sourceIpGroups.internalValue;
  }

  // time_windows - computed: false, optional: true, required: false
  private _timeWindows = new UrlFilteringRulesTimeWindowsOutputReference(this, "time_windows");
  public get timeWindows() {
    return this._timeWindows;
  }
  public putTimeWindows(value: UrlFilteringRulesTimeWindows) {
    this._timeWindows.internalValue = value;
  }
  public resetTimeWindows() {
    this._timeWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowsInput() {
    return this._timeWindows.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new UrlFilteringRulesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: UrlFilteringRulesTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new UrlFilteringRulesUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: UrlFilteringRulesUsers) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // workload_groups - computed: false, optional: true, required: false
  private _workloadGroups = new UrlFilteringRulesWorkloadGroupsList(this, "workload_groups", true);
  public get workloadGroups() {
    return this._workloadGroups;
  }
  public putWorkloadGroups(value: UrlFilteringRulesWorkloadGroups[] | cdktf.IResolvable) {
    this._workloadGroups.internalValue = value;
  }
  public resetWorkloadGroups() {
    this._workloadGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadGroupsInput() {
    return this._workloadGroups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      block_override: cdktf.booleanToTerraform(this._blockOverride),
      browser_eun_template_id: cdktf.numberToTerraform(this._browserEunTemplateId),
      ciparule: cdktf.booleanToTerraform(this._ciparule),
      description: cdktf.stringToTerraform(this._description),
      device_trust_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTrustLevels),
      end_user_notification_url: cdktf.stringToTerraform(this._endUserNotificationUrl),
      enforce_time_validity: cdktf.booleanToTerraform(this._enforceTimeValidity),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      rank: cdktf.numberToTerraform(this._rank),
      request_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requestMethods),
      size_quota: cdktf.numberToTerraform(this._sizeQuota),
      source_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceCountries),
      state: cdktf.stringToTerraform(this._state),
      time_quota: cdktf.numberToTerraform(this._timeQuota),
      url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urlCategories),
      user_agent_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userAgentTypes),
      user_risk_score_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userRiskScoreLevels),
      validity_end_time: cdktf.stringToTerraform(this._validityEndTime),
      validity_start_time: cdktf.stringToTerraform(this._validityStartTime),
      validity_time_zone_id: cdktf.stringToTerraform(this._validityTimeZoneId),
      cbi_profile: cdktf.listMapper(urlFilteringRulesCbiProfileToTerraform, true)(this._cbiProfile.internalValue),
      departments: urlFilteringRulesDepartmentsToTerraform(this._departments.internalValue),
      device_groups: urlFilteringRulesDeviceGroupsToTerraform(this._deviceGroups.internalValue),
      devices: urlFilteringRulesDevicesToTerraform(this._devices.internalValue),
      groups: urlFilteringRulesGroupsToTerraform(this._groups.internalValue),
      labels: urlFilteringRulesLabelsToTerraform(this._labels.internalValue),
      location_groups: urlFilteringRulesLocationGroupsToTerraform(this._locationGroups.internalValue),
      locations: urlFilteringRulesLocationsToTerraform(this._locations.internalValue),
      override_groups: urlFilteringRulesOverrideGroupsToTerraform(this._overrideGroups.internalValue),
      override_users: urlFilteringRulesOverrideUsersToTerraform(this._overrideUsers.internalValue),
      source_ip_groups: urlFilteringRulesSourceIpGroupsToTerraform(this._sourceIpGroups.internalValue),
      time_windows: urlFilteringRulesTimeWindowsToTerraform(this._timeWindows.internalValue),
      timeouts: urlFilteringRulesTimeoutsToTerraform(this._timeouts.internalValue),
      users: urlFilteringRulesUsersToTerraform(this._users.internalValue),
      workload_groups: cdktf.listMapper(urlFilteringRulesWorkloadGroupsToTerraform, true)(this._workloadGroups.internalValue),
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
      block_override: {
        value: cdktf.booleanToHclTerraform(this._blockOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      browser_eun_template_id: {
        value: cdktf.numberToHclTerraform(this._browserEunTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ciparule: {
        value: cdktf.booleanToHclTerraform(this._ciparule),
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
      device_trust_levels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTrustLevels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      end_user_notification_url: {
        value: cdktf.stringToHclTerraform(this._endUserNotificationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_time_validity: {
        value: cdktf.booleanToHclTerraform(this._enforceTimeValidity),
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
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rank: {
        value: cdktf.numberToHclTerraform(this._rank),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requestMethods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      size_quota: {
        value: cdktf.numberToHclTerraform(this._sizeQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_countries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceCountries),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_quota: {
        value: cdktf.numberToHclTerraform(this._timeQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urlCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_agent_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userAgentTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_risk_score_levels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userRiskScoreLevels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      validity_end_time: {
        value: cdktf.stringToHclTerraform(this._validityEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validity_start_time: {
        value: cdktf.stringToHclTerraform(this._validityStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validity_time_zone_id: {
        value: cdktf.stringToHclTerraform(this._validityTimeZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbi_profile: {
        value: cdktf.listMapperHcl(urlFilteringRulesCbiProfileToHclTerraform, true)(this._cbiProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UrlFilteringRulesCbiProfileList",
      },
      departments: {
        value: urlFilteringRulesDepartmentsToHclTerraform(this._departments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlFilteringRulesDepartmentsList",
      },
      device_groups: {
        value: urlFilteringRulesDeviceGroupsToHclTerraform(this._deviceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlFilteringRulesDeviceGroupsList",
      },
      devices: {
        value: urlFilteringRulesDevicesToHclTerraform(this._devices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlFilteringRulesDevicesList",
      },
      groups: {
        value: urlFilteringRulesGroupsToHclTerraform(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlFilteringRulesGroupsList",
      },
      labels: {
        value: urlFilteringRulesLabelsToHclTerraform(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlFilteringRulesLabelsList",
      },
      location_groups: {
        value: urlFilteringRulesLocationGroupsToHclTerraform(this._locationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlFilteringRulesLocationGroupsList",
      },
      locations: {
        value: urlFilteringRulesLocationsToHclTerraform(this._locations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlFilteringRulesLocationsList",
      },
      override_groups: {
        value: urlFilteringRulesOverrideGroupsToHclTerraform(this._overrideGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlFilteringRulesOverrideGroupsList",
      },
      override_users: {
        value: urlFilteringRulesOverrideUsersToHclTerraform(this._overrideUsers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlFilteringRulesOverrideUsersList",
      },
      source_ip_groups: {
        value: urlFilteringRulesSourceIpGroupsToHclTerraform(this._sourceIpGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlFilteringRulesSourceIpGroupsList",
      },
      time_windows: {
        value: urlFilteringRulesTimeWindowsToHclTerraform(this._timeWindows.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlFilteringRulesTimeWindowsList",
      },
      timeouts: {
        value: urlFilteringRulesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UrlFilteringRulesTimeouts",
      },
      users: {
        value: urlFilteringRulesUsersToHclTerraform(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlFilteringRulesUsersList",
      },
      workload_groups: {
        value: cdktf.listMapperHcl(urlFilteringRulesWorkloadGroupsToHclTerraform, true)(this._workloadGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlFilteringRulesWorkloadGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
