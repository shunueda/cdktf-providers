// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAppControlRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Actions allowed for the specified type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#actions CloudAppControlRule#actions}
  */
  readonly actions?: string[];
  /**
  * The list of cloud applications to which the cloud app control rule must be applied
  * 				Use the data source zia_cloud_applications to get the list of available cloud applications:
  * 				https://registry.terraform.io/providers/zscaler/zia/latest/docs/data-sources/zia_cloud_applications
  * 				
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#applications CloudAppControlRule#applications}
  */
  readonly applications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#browser_eun_template_id CloudAppControlRule#browser_eun_template_id}
  */
  readonly browserEunTemplateId?: number;
  /**
  * Enforce the URL Filtering policy on a transaction, even after it is explicitly allowed by the Cloud App Control policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#cascading_enabled CloudAppControlRule#cascading_enabled}
  */
  readonly cascadingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Additional information about the forwarding rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#description CloudAppControlRule#description}
  */
  readonly description?: string;
  /**
  * List of device trust levels for which the rule must be applied. This field is applicable for devices that are managed using Zscaler Client Connector. The trust levels are assigned to the devices based on your posture configurations in the Zscaler Client Connector Portal. If no value is set, this field is ignored during the policy evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#device_trust_levels CloudAppControlRule#device_trust_levels}
  */
  readonly deviceTrustLevels?: string[];
  /**
  * Enforce a set a validity time period for the URL Filtering rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#enforce_time_validity CloudAppControlRule#enforce_time_validity}
  */
  readonly enforceTimeValidity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#eun_enabled CloudAppControlRule#eun_enabled}
  */
  readonly eunEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#eun_template_id CloudAppControlRule#eun_template_id}
  */
  readonly eunTemplateId?: number;
  /**
  * The name of the forwarding rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#name CloudAppControlRule#name}
  */
  readonly name?: string;
  /**
  * The order of execution for the forwarding rule order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#order CloudAppControlRule#order}
  */
  readonly order: number;
  /**
  * Admin rank assigned to the forwarding rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#rank CloudAppControlRule#rank}
  */
  readonly rank?: number;
  /**
  * Size quota in KB beyond which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule action is set to 'BLOCK', this field is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#size_quota CloudAppControlRule#size_quota}
  */
  readonly sizeQuota?: number;
  /**
  * Determines whether the Firewall Filtering policy rule is enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#state CloudAppControlRule#state}
  */
  readonly state?: string;
  /**
  * Time quota in minutes, after which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule action is set to 'BLOCK', this field is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#time_quota CloudAppControlRule#time_quota}
  */
  readonly timeQuota?: number;
  /**
  * Supported App Control Types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#type CloudAppControlRule#type}
  */
  readonly type?: string;
  /**
  * Supported User Agent Types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#user_agent_types CloudAppControlRule#user_agent_types}
  */
  readonly userAgentTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#user_risk_score_levels CloudAppControlRule#user_risk_score_levels}
  */
  readonly userRiskScoreLevels?: string[];
  /**
  * If enforceTimeValidity is set to true, the URL Filtering rule ceases to be valid on this end date and time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#validity_end_time CloudAppControlRule#validity_end_time}
  */
  readonly validityEndTime?: string;
  /**
  * If enforceTimeValidity is set to true, the URL Filtering rule is valid starting on this date and time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#validity_start_time CloudAppControlRule#validity_start_time}
  */
  readonly validityStartTime?: string;
  /**
  * If enforceTimeValidity is set to true, the URL Filtering rule date and time is valid based on this time zone ID. Use IANA Format TimeZone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#validity_time_zone_id CloudAppControlRule#validity_time_zone_id}
  */
  readonly validityTimeZoneId?: string;
  /**
  * cbi_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#cbi_profile CloudAppControlRule#cbi_profile}
  */
  readonly cbiProfile?: CloudAppControlRuleCbiProfile[] | cdktf.IResolvable;
  /**
  * cloud_app_instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#cloud_app_instances CloudAppControlRule#cloud_app_instances}
  */
  readonly cloudAppInstances?: CloudAppControlRuleCloudAppInstances;
  /**
  * cloud_app_risk_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#cloud_app_risk_profile CloudAppControlRule#cloud_app_risk_profile}
  */
  readonly cloudAppRiskProfile?: CloudAppControlRuleCloudAppRiskProfile[] | cdktf.IResolvable;
  /**
  * departments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#departments CloudAppControlRule#departments}
  */
  readonly departments?: CloudAppControlRuleDepartments;
  /**
  * device_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#device_groups CloudAppControlRule#device_groups}
  */
  readonly deviceGroups?: CloudAppControlRuleDeviceGroups;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#devices CloudAppControlRule#devices}
  */
  readonly devices?: CloudAppControlRuleDevices;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#groups CloudAppControlRule#groups}
  */
  readonly groups?: CloudAppControlRuleGroups;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#labels CloudAppControlRule#labels}
  */
  readonly labels?: CloudAppControlRuleLabels;
  /**
  * location_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#location_groups CloudAppControlRule#location_groups}
  */
  readonly locationGroups?: CloudAppControlRuleLocationGroups;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#locations CloudAppControlRule#locations}
  */
  readonly locations?: CloudAppControlRuleLocations;
  /**
  * tenancy_profile_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#tenancy_profile_ids CloudAppControlRule#tenancy_profile_ids}
  */
  readonly tenancyProfileIds?: CloudAppControlRuleTenancyProfileIds;
  /**
  * time_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#time_windows CloudAppControlRule#time_windows}
  */
  readonly timeWindows?: CloudAppControlRuleTimeWindows;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#timeouts CloudAppControlRule#timeouts}
  */
  readonly timeouts?: CloudAppControlRuleTimeouts;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#users CloudAppControlRule#users}
  */
  readonly users?: CloudAppControlRuleUsers;
}
export interface CloudAppControlRuleCbiProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#id CloudAppControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#name CloudAppControlRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#url CloudAppControlRule#url}
  */
  readonly url?: string;
}

export function cloudAppControlRuleCbiProfileToTerraform(struct?: CloudAppControlRuleCbiProfile | cdktf.IResolvable): any {
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


export function cloudAppControlRuleCbiProfileToHclTerraform(struct?: CloudAppControlRuleCbiProfile | cdktf.IResolvable): any {
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

export class CloudAppControlRuleCbiProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAppControlRuleCbiProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudAppControlRuleCbiProfile | cdktf.IResolvable | undefined) {
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

export class CloudAppControlRuleCbiProfileList extends cdktf.ComplexList {
  public internalValue? : CloudAppControlRuleCbiProfile[] | cdktf.IResolvable

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
  public get(index: number): CloudAppControlRuleCbiProfileOutputReference {
    return new CloudAppControlRuleCbiProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudAppControlRuleCloudAppInstances {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#id CloudAppControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudAppControlRuleCloudAppInstancesToTerraform(struct?: CloudAppControlRuleCloudAppInstancesOutputReference | CloudAppControlRuleCloudAppInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudAppControlRuleCloudAppInstancesToHclTerraform(struct?: CloudAppControlRuleCloudAppInstancesOutputReference | CloudAppControlRuleCloudAppInstances): any {
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

export class CloudAppControlRuleCloudAppInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAppControlRuleCloudAppInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAppControlRuleCloudAppInstances | undefined) {
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
export interface CloudAppControlRuleCloudAppRiskProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#id CloudAppControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function cloudAppControlRuleCloudAppRiskProfileToTerraform(struct?: CloudAppControlRuleCloudAppRiskProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function cloudAppControlRuleCloudAppRiskProfileToHclTerraform(struct?: CloudAppControlRuleCloudAppRiskProfile | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAppControlRuleCloudAppRiskProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAppControlRuleCloudAppRiskProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAppControlRuleCloudAppRiskProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
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

export class CloudAppControlRuleCloudAppRiskProfileList extends cdktf.ComplexList {
  public internalValue? : CloudAppControlRuleCloudAppRiskProfile[] | cdktf.IResolvable

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
  public get(index: number): CloudAppControlRuleCloudAppRiskProfileOutputReference {
    return new CloudAppControlRuleCloudAppRiskProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudAppControlRuleDepartments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#id CloudAppControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudAppControlRuleDepartmentsToTerraform(struct?: CloudAppControlRuleDepartmentsOutputReference | CloudAppControlRuleDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudAppControlRuleDepartmentsToHclTerraform(struct?: CloudAppControlRuleDepartmentsOutputReference | CloudAppControlRuleDepartments): any {
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

export class CloudAppControlRuleDepartmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAppControlRuleDepartments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAppControlRuleDepartments | undefined) {
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
export interface CloudAppControlRuleDeviceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#id CloudAppControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudAppControlRuleDeviceGroupsToTerraform(struct?: CloudAppControlRuleDeviceGroupsOutputReference | CloudAppControlRuleDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudAppControlRuleDeviceGroupsToHclTerraform(struct?: CloudAppControlRuleDeviceGroupsOutputReference | CloudAppControlRuleDeviceGroups): any {
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

export class CloudAppControlRuleDeviceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAppControlRuleDeviceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAppControlRuleDeviceGroups | undefined) {
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
export interface CloudAppControlRuleDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#id CloudAppControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudAppControlRuleDevicesToTerraform(struct?: CloudAppControlRuleDevicesOutputReference | CloudAppControlRuleDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudAppControlRuleDevicesToHclTerraform(struct?: CloudAppControlRuleDevicesOutputReference | CloudAppControlRuleDevices): any {
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

export class CloudAppControlRuleDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAppControlRuleDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAppControlRuleDevices | undefined) {
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
export interface CloudAppControlRuleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#id CloudAppControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudAppControlRuleGroupsToTerraform(struct?: CloudAppControlRuleGroupsOutputReference | CloudAppControlRuleGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudAppControlRuleGroupsToHclTerraform(struct?: CloudAppControlRuleGroupsOutputReference | CloudAppControlRuleGroups): any {
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

export class CloudAppControlRuleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAppControlRuleGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAppControlRuleGroups | undefined) {
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
export interface CloudAppControlRuleLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#id CloudAppControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudAppControlRuleLabelsToTerraform(struct?: CloudAppControlRuleLabelsOutputReference | CloudAppControlRuleLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudAppControlRuleLabelsToHclTerraform(struct?: CloudAppControlRuleLabelsOutputReference | CloudAppControlRuleLabels): any {
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

export class CloudAppControlRuleLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAppControlRuleLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAppControlRuleLabels | undefined) {
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
export interface CloudAppControlRuleLocationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#id CloudAppControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudAppControlRuleLocationGroupsToTerraform(struct?: CloudAppControlRuleLocationGroupsOutputReference | CloudAppControlRuleLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudAppControlRuleLocationGroupsToHclTerraform(struct?: CloudAppControlRuleLocationGroupsOutputReference | CloudAppControlRuleLocationGroups): any {
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

export class CloudAppControlRuleLocationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAppControlRuleLocationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAppControlRuleLocationGroups | undefined) {
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
export interface CloudAppControlRuleLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#id CloudAppControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudAppControlRuleLocationsToTerraform(struct?: CloudAppControlRuleLocationsOutputReference | CloudAppControlRuleLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudAppControlRuleLocationsToHclTerraform(struct?: CloudAppControlRuleLocationsOutputReference | CloudAppControlRuleLocations): any {
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

export class CloudAppControlRuleLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAppControlRuleLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAppControlRuleLocations | undefined) {
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
export interface CloudAppControlRuleTenancyProfileIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#id CloudAppControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudAppControlRuleTenancyProfileIdsToTerraform(struct?: CloudAppControlRuleTenancyProfileIdsOutputReference | CloudAppControlRuleTenancyProfileIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudAppControlRuleTenancyProfileIdsToHclTerraform(struct?: CloudAppControlRuleTenancyProfileIdsOutputReference | CloudAppControlRuleTenancyProfileIds): any {
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

export class CloudAppControlRuleTenancyProfileIdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAppControlRuleTenancyProfileIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAppControlRuleTenancyProfileIds | undefined) {
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
export interface CloudAppControlRuleTimeWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#id CloudAppControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudAppControlRuleTimeWindowsToTerraform(struct?: CloudAppControlRuleTimeWindowsOutputReference | CloudAppControlRuleTimeWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudAppControlRuleTimeWindowsToHclTerraform(struct?: CloudAppControlRuleTimeWindowsOutputReference | CloudAppControlRuleTimeWindows): any {
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

export class CloudAppControlRuleTimeWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAppControlRuleTimeWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAppControlRuleTimeWindows | undefined) {
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
export interface CloudAppControlRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#create CloudAppControlRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#update CloudAppControlRule#update}
  */
  readonly update?: string;
}

export function cloudAppControlRuleTimeoutsToTerraform(struct?: CloudAppControlRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudAppControlRuleTimeoutsToHclTerraform(struct?: CloudAppControlRuleTimeouts | cdktf.IResolvable): any {
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

export class CloudAppControlRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudAppControlRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudAppControlRuleTimeouts | cdktf.IResolvable | undefined) {
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
export interface CloudAppControlRuleUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#id CloudAppControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudAppControlRuleUsersToTerraform(struct?: CloudAppControlRuleUsersOutputReference | CloudAppControlRuleUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudAppControlRuleUsersToHclTerraform(struct?: CloudAppControlRuleUsersOutputReference | CloudAppControlRuleUsers): any {
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

export class CloudAppControlRuleUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAppControlRuleUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAppControlRuleUsers | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule zia_cloud_app_control_rule}
*/
export class CloudAppControlRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_cloud_app_control_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAppControlRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAppControlRule to import
  * @param importFromId The id of the existing CloudAppControlRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAppControlRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_cloud_app_control_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/cloud_app_control_rule zia_cloud_app_control_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAppControlRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAppControlRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_cloud_app_control_rule',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions = config.actions;
    this._applications = config.applications;
    this._browserEunTemplateId = config.browserEunTemplateId;
    this._cascadingEnabled = config.cascadingEnabled;
    this._description = config.description;
    this._deviceTrustLevels = config.deviceTrustLevels;
    this._enforceTimeValidity = config.enforceTimeValidity;
    this._eunEnabled = config.eunEnabled;
    this._eunTemplateId = config.eunTemplateId;
    this._name = config.name;
    this._order = config.order;
    this._rank = config.rank;
    this._sizeQuota = config.sizeQuota;
    this._state = config.state;
    this._timeQuota = config.timeQuota;
    this._type = config.type;
    this._userAgentTypes = config.userAgentTypes;
    this._userRiskScoreLevels = config.userRiskScoreLevels;
    this._validityEndTime = config.validityEndTime;
    this._validityStartTime = config.validityStartTime;
    this._validityTimeZoneId = config.validityTimeZoneId;
    this._cbiProfile.internalValue = config.cbiProfile;
    this._cloudAppInstances.internalValue = config.cloudAppInstances;
    this._cloudAppRiskProfile.internalValue = config.cloudAppRiskProfile;
    this._departments.internalValue = config.departments;
    this._deviceGroups.internalValue = config.deviceGroups;
    this._devices.internalValue = config.devices;
    this._groups.internalValue = config.groups;
    this._labels.internalValue = config.labels;
    this._locationGroups.internalValue = config.locationGroups;
    this._locations.internalValue = config.locations;
    this._tenancyProfileIds.internalValue = config.tenancyProfileIds;
    this._timeWindows.internalValue = config.timeWindows;
    this._timeouts.internalValue = config.timeouts;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
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

  // cascading_enabled - computed: false, optional: true, required: false
  private _cascadingEnabled?: boolean | cdktf.IResolvable; 
  public get cascadingEnabled() {
    return this.getBooleanAttribute('cascading_enabled');
  }
  public set cascadingEnabled(value: boolean | cdktf.IResolvable) {
    this._cascadingEnabled = value;
  }
  public resetCascadingEnabled() {
    this._cascadingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadingEnabledInput() {
    return this._cascadingEnabled;
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

  // eun_enabled - computed: false, optional: true, required: false
  private _eunEnabled?: boolean | cdktf.IResolvable; 
  public get eunEnabled() {
    return this.getBooleanAttribute('eun_enabled');
  }
  public set eunEnabled(value: boolean | cdktf.IResolvable) {
    this._eunEnabled = value;
  }
  public resetEunEnabled() {
    this._eunEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eunEnabledInput() {
    return this._eunEnabled;
  }

  // eun_template_id - computed: false, optional: true, required: false
  private _eunTemplateId?: number; 
  public get eunTemplateId() {
    return this.getNumberAttribute('eun_template_id');
  }
  public set eunTemplateId(value: number) {
    this._eunTemplateId = value;
  }
  public resetEunTemplateId() {
    this._eunTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eunTemplateIdInput() {
    return this._eunTemplateId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _cbiProfile = new CloudAppControlRuleCbiProfileList(this, "cbi_profile", false);
  public get cbiProfile() {
    return this._cbiProfile;
  }
  public putCbiProfile(value: CloudAppControlRuleCbiProfile[] | cdktf.IResolvable) {
    this._cbiProfile.internalValue = value;
  }
  public resetCbiProfile() {
    this._cbiProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbiProfileInput() {
    return this._cbiProfile.internalValue;
  }

  // cloud_app_instances - computed: false, optional: true, required: false
  private _cloudAppInstances = new CloudAppControlRuleCloudAppInstancesOutputReference(this, "cloud_app_instances");
  public get cloudAppInstances() {
    return this._cloudAppInstances;
  }
  public putCloudAppInstances(value: CloudAppControlRuleCloudAppInstances) {
    this._cloudAppInstances.internalValue = value;
  }
  public resetCloudAppInstances() {
    this._cloudAppInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAppInstancesInput() {
    return this._cloudAppInstances.internalValue;
  }

  // cloud_app_risk_profile - computed: false, optional: true, required: false
  private _cloudAppRiskProfile = new CloudAppControlRuleCloudAppRiskProfileList(this, "cloud_app_risk_profile", true);
  public get cloudAppRiskProfile() {
    return this._cloudAppRiskProfile;
  }
  public putCloudAppRiskProfile(value: CloudAppControlRuleCloudAppRiskProfile[] | cdktf.IResolvable) {
    this._cloudAppRiskProfile.internalValue = value;
  }
  public resetCloudAppRiskProfile() {
    this._cloudAppRiskProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAppRiskProfileInput() {
    return this._cloudAppRiskProfile.internalValue;
  }

  // departments - computed: false, optional: true, required: false
  private _departments = new CloudAppControlRuleDepartmentsOutputReference(this, "departments");
  public get departments() {
    return this._departments;
  }
  public putDepartments(value: CloudAppControlRuleDepartments) {
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
  private _deviceGroups = new CloudAppControlRuleDeviceGroupsOutputReference(this, "device_groups");
  public get deviceGroups() {
    return this._deviceGroups;
  }
  public putDeviceGroups(value: CloudAppControlRuleDeviceGroups) {
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
  private _devices = new CloudAppControlRuleDevicesOutputReference(this, "devices");
  public get devices() {
    return this._devices;
  }
  public putDevices(value: CloudAppControlRuleDevices) {
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
  private _groups = new CloudAppControlRuleGroupsOutputReference(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: CloudAppControlRuleGroups) {
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
  private _labels = new CloudAppControlRuleLabelsOutputReference(this, "labels");
  public get labels() {
    return this._labels;
  }
  public putLabels(value: CloudAppControlRuleLabels) {
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
  private _locationGroups = new CloudAppControlRuleLocationGroupsOutputReference(this, "location_groups");
  public get locationGroups() {
    return this._locationGroups;
  }
  public putLocationGroups(value: CloudAppControlRuleLocationGroups) {
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
  private _locations = new CloudAppControlRuleLocationsOutputReference(this, "locations");
  public get locations() {
    return this._locations;
  }
  public putLocations(value: CloudAppControlRuleLocations) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // tenancy_profile_ids - computed: false, optional: true, required: false
  private _tenancyProfileIds = new CloudAppControlRuleTenancyProfileIdsOutputReference(this, "tenancy_profile_ids");
  public get tenancyProfileIds() {
    return this._tenancyProfileIds;
  }
  public putTenancyProfileIds(value: CloudAppControlRuleTenancyProfileIds) {
    this._tenancyProfileIds.internalValue = value;
  }
  public resetTenancyProfileIds() {
    this._tenancyProfileIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyProfileIdsInput() {
    return this._tenancyProfileIds.internalValue;
  }

  // time_windows - computed: false, optional: true, required: false
  private _timeWindows = new CloudAppControlRuleTimeWindowsOutputReference(this, "time_windows");
  public get timeWindows() {
    return this._timeWindows;
  }
  public putTimeWindows(value: CloudAppControlRuleTimeWindows) {
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
  private _timeouts = new CloudAppControlRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudAppControlRuleTimeouts) {
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
  private _users = new CloudAppControlRuleUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: CloudAppControlRuleUsers) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._actions),
      applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applications),
      browser_eun_template_id: cdktf.numberToTerraform(this._browserEunTemplateId),
      cascading_enabled: cdktf.booleanToTerraform(this._cascadingEnabled),
      description: cdktf.stringToTerraform(this._description),
      device_trust_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTrustLevels),
      enforce_time_validity: cdktf.booleanToTerraform(this._enforceTimeValidity),
      eun_enabled: cdktf.booleanToTerraform(this._eunEnabled),
      eun_template_id: cdktf.numberToTerraform(this._eunTemplateId),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      rank: cdktf.numberToTerraform(this._rank),
      size_quota: cdktf.numberToTerraform(this._sizeQuota),
      state: cdktf.stringToTerraform(this._state),
      time_quota: cdktf.numberToTerraform(this._timeQuota),
      type: cdktf.stringToTerraform(this._type),
      user_agent_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userAgentTypes),
      user_risk_score_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userRiskScoreLevels),
      validity_end_time: cdktf.stringToTerraform(this._validityEndTime),
      validity_start_time: cdktf.stringToTerraform(this._validityStartTime),
      validity_time_zone_id: cdktf.stringToTerraform(this._validityTimeZoneId),
      cbi_profile: cdktf.listMapper(cloudAppControlRuleCbiProfileToTerraform, true)(this._cbiProfile.internalValue),
      cloud_app_instances: cloudAppControlRuleCloudAppInstancesToTerraform(this._cloudAppInstances.internalValue),
      cloud_app_risk_profile: cdktf.listMapper(cloudAppControlRuleCloudAppRiskProfileToTerraform, true)(this._cloudAppRiskProfile.internalValue),
      departments: cloudAppControlRuleDepartmentsToTerraform(this._departments.internalValue),
      device_groups: cloudAppControlRuleDeviceGroupsToTerraform(this._deviceGroups.internalValue),
      devices: cloudAppControlRuleDevicesToTerraform(this._devices.internalValue),
      groups: cloudAppControlRuleGroupsToTerraform(this._groups.internalValue),
      labels: cloudAppControlRuleLabelsToTerraform(this._labels.internalValue),
      location_groups: cloudAppControlRuleLocationGroupsToTerraform(this._locationGroups.internalValue),
      locations: cloudAppControlRuleLocationsToTerraform(this._locations.internalValue),
      tenancy_profile_ids: cloudAppControlRuleTenancyProfileIdsToTerraform(this._tenancyProfileIds.internalValue),
      time_windows: cloudAppControlRuleTimeWindowsToTerraform(this._timeWindows.internalValue),
      timeouts: cloudAppControlRuleTimeoutsToTerraform(this._timeouts.internalValue),
      users: cloudAppControlRuleUsersToTerraform(this._users.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._actions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      browser_eun_template_id: {
        value: cdktf.numberToHclTerraform(this._browserEunTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cascading_enabled: {
        value: cdktf.booleanToHclTerraform(this._cascadingEnabled),
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
      enforce_time_validity: {
        value: cdktf.booleanToHclTerraform(this._enforceTimeValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eun_enabled: {
        value: cdktf.booleanToHclTerraform(this._eunEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eun_template_id: {
        value: cdktf.numberToHclTerraform(this._eunTemplateId),
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
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rank: {
        value: cdktf.numberToHclTerraform(this._rank),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size_quota: {
        value: cdktf.numberToHclTerraform(this._sizeQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.listMapperHcl(cloudAppControlRuleCbiProfileToHclTerraform, true)(this._cbiProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAppControlRuleCbiProfileList",
      },
      cloud_app_instances: {
        value: cloudAppControlRuleCloudAppInstancesToHclTerraform(this._cloudAppInstances.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAppControlRuleCloudAppInstancesList",
      },
      cloud_app_risk_profile: {
        value: cdktf.listMapperHcl(cloudAppControlRuleCloudAppRiskProfileToHclTerraform, true)(this._cloudAppRiskProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAppControlRuleCloudAppRiskProfileList",
      },
      departments: {
        value: cloudAppControlRuleDepartmentsToHclTerraform(this._departments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAppControlRuleDepartmentsList",
      },
      device_groups: {
        value: cloudAppControlRuleDeviceGroupsToHclTerraform(this._deviceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAppControlRuleDeviceGroupsList",
      },
      devices: {
        value: cloudAppControlRuleDevicesToHclTerraform(this._devices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAppControlRuleDevicesList",
      },
      groups: {
        value: cloudAppControlRuleGroupsToHclTerraform(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAppControlRuleGroupsList",
      },
      labels: {
        value: cloudAppControlRuleLabelsToHclTerraform(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAppControlRuleLabelsList",
      },
      location_groups: {
        value: cloudAppControlRuleLocationGroupsToHclTerraform(this._locationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAppControlRuleLocationGroupsList",
      },
      locations: {
        value: cloudAppControlRuleLocationsToHclTerraform(this._locations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAppControlRuleLocationsList",
      },
      tenancy_profile_ids: {
        value: cloudAppControlRuleTenancyProfileIdsToHclTerraform(this._tenancyProfileIds.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAppControlRuleTenancyProfileIdsList",
      },
      time_windows: {
        value: cloudAppControlRuleTimeWindowsToHclTerraform(this._timeWindows.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAppControlRuleTimeWindowsList",
      },
      timeouts: {
        value: cloudAppControlRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudAppControlRuleTimeouts",
      },
      users: {
        value: cloudAppControlRuleUsersToHclTerraform(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAppControlRuleUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
