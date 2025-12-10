// https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlpWebRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action taken when traffic matches the DLP policy rule criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#action DlpWebRules#action}
  */
  readonly action?: string;
  /**
  * The list of cloud applications to which the DLP policy rule must be applied
  * 				Use the data source zia_cloud_applications to get the list of available cloud applications:
  * 				https://registry.terraform.io/providers/zscaler/zia/latest/docs/data-sources/zia_cloud_applications
  * 				
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#cloud_applications DlpWebRules#cloud_applications}
  */
  readonly cloudApplications?: string[];
  /**
  * The description of the DLP policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#description DlpWebRules#description}
  */
  readonly description?: string;
  /**
  * Indicates a DLP policy rule without content inspection, when the value is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#dlp_download_scan_enabled DlpWebRules#dlp_download_scan_enabled}
  */
  readonly dlpDownloadScanEnabled?: boolean | cdktf.IResolvable;
  /**
  * The email address of an external auditor to whom DLP email notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#external_auditor_email DlpWebRules#external_auditor_email}
  */
  readonly externalAuditorEmail?: string;
  /**
  * The list of file types for which the DLP policy rule must be applied,
  * 				See the Web DLP Rules API for the list of available File types:
  * 				https://help.zscaler.com/zia/data-loss-prevention#/webDlpRules-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#file_types DlpWebRules#file_types}
  */
  readonly fileTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#inspect_http_get_enabled DlpWebRules#inspect_http_get_enabled}
  */
  readonly inspectHttpGetEnabled?: boolean | cdktf.IResolvable;
  /**
  * The match only criteria for DLP engines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#match_only DlpWebRules#match_only}
  */
  readonly matchOnly?: boolean | cdktf.IResolvable;
  /**
  * The minimum file size (in KB) used for evaluation of the DLP policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#min_size DlpWebRules#min_size}
  */
  readonly minSize?: number;
  /**
  * The DLP policy rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#name DlpWebRules#name}
  */
  readonly name: string;
  /**
  * The rule order of execution for the DLP policy rule with respect to other rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#order DlpWebRules#order}
  */
  readonly order: number;
  /**
  * The unique identifier of the parent rule under which an exception rule is added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#parent_rule DlpWebRules#parent_rule}
  */
  readonly parentRule?: number;
  /**
  * The protocol criteria specified for the DLP policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#protocols DlpWebRules#protocols}
  */
  readonly protocols?: string[];
  /**
  * Admin rank of the admin who creates this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#rank DlpWebRules#rank}
  */
  readonly rank?: number;
  /**
  * Indicates the severity selected for the DLP rule violation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#severity DlpWebRules#severity}
  */
  readonly severity?: string;
  /**
  * Enables or disables the DLP policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#state DlpWebRules#state}
  */
  readonly state?: string;
  /**
  * The list of exception rules added to a parent rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#sub_rules DlpWebRules#sub_rules}
  */
  readonly subRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#user_risk_score_levels DlpWebRules#user_risk_score_levels}
  */
  readonly userRiskScoreLevels?: string[];
  /**
  * Indicates a DLP policy rule without content inspection, when the value is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#without_content_inspection DlpWebRules#without_content_inspection}
  */
  readonly withoutContentInspection?: boolean | cdktf.IResolvable;
  /**
  * Indicates a DLP policy rule without content inspection, when the value is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#zcc_notifications_enabled DlpWebRules#zcc_notifications_enabled}
  */
  readonly zccNotificationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether a Zscaler Incident Receiver is associated to the DLP policy rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#zscaler_incident_receiver DlpWebRules#zscaler_incident_receiver}
  */
  readonly zscalerIncidentReceiver?: boolean | cdktf.IResolvable;
  /**
  * auditor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#auditor DlpWebRules#auditor}
  */
  readonly auditor?: DlpWebRulesAuditor[] | cdktf.IResolvable;
  /**
  * departments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#departments DlpWebRules#departments}
  */
  readonly departments?: DlpWebRulesDepartments;
  /**
  * dlp_engines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#dlp_engines DlpWebRules#dlp_engines}
  */
  readonly dlpEngines?: DlpWebRulesDlpEngines;
  /**
  * excluded_departments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#excluded_departments DlpWebRules#excluded_departments}
  */
  readonly excludedDepartments?: DlpWebRulesExcludedDepartments;
  /**
  * excluded_domain_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#excluded_domain_profiles DlpWebRules#excluded_domain_profiles}
  */
  readonly excludedDomainProfiles?: DlpWebRulesExcludedDomainProfiles;
  /**
  * excluded_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#excluded_groups DlpWebRules#excluded_groups}
  */
  readonly excludedGroups?: DlpWebRulesExcludedGroups;
  /**
  * excluded_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#excluded_users DlpWebRules#excluded_users}
  */
  readonly excludedUsers?: DlpWebRulesExcludedUsers;
  /**
  * file_type_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#file_type_categories DlpWebRules#file_type_categories}
  */
  readonly fileTypeCategories?: DlpWebRulesFileTypeCategories;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#groups DlpWebRules#groups}
  */
  readonly groups?: DlpWebRulesGroups;
  /**
  * icap_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#icap_server DlpWebRules#icap_server}
  */
  readonly icapServer?: DlpWebRulesIcapServer[] | cdktf.IResolvable;
  /**
  * included_domain_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#included_domain_profiles DlpWebRules#included_domain_profiles}
  */
  readonly includedDomainProfiles?: DlpWebRulesIncludedDomainProfiles;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#labels DlpWebRules#labels}
  */
  readonly labels?: DlpWebRulesLabels;
  /**
  * location_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#location_groups DlpWebRules#location_groups}
  */
  readonly locationGroups?: DlpWebRulesLocationGroups;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#locations DlpWebRules#locations}
  */
  readonly locations?: DlpWebRulesLocations;
  /**
  * notification_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#notification_template DlpWebRules#notification_template}
  */
  readonly notificationTemplate?: DlpWebRulesNotificationTemplate[] | cdktf.IResolvable;
  /**
  * receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#receiver DlpWebRules#receiver}
  */
  readonly receiver?: DlpWebRulesReceiver;
  /**
  * source_ip_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#source_ip_groups DlpWebRules#source_ip_groups}
  */
  readonly sourceIpGroups?: DlpWebRulesSourceIpGroups;
  /**
  * time_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#time_windows DlpWebRules#time_windows}
  */
  readonly timeWindows?: DlpWebRulesTimeWindows;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#timeouts DlpWebRules#timeouts}
  */
  readonly timeouts?: DlpWebRulesTimeouts;
  /**
  * url_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#url_categories DlpWebRules#url_categories}
  */
  readonly urlCategories?: DlpWebRulesUrlCategories;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#users DlpWebRules#users}
  */
  readonly users?: DlpWebRulesUsers;
  /**
  * workload_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#workload_groups DlpWebRules#workload_groups}
  */
  readonly workloadGroups?: DlpWebRulesWorkloadGroups[] | cdktf.IResolvable;
}
export interface DlpWebRulesAuditor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function dlpWebRulesAuditorToTerraform(struct?: DlpWebRulesAuditor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function dlpWebRulesAuditorToHclTerraform(struct?: DlpWebRulesAuditor | cdktf.IResolvable): any {
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

export class DlpWebRulesAuditorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlpWebRulesAuditor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DlpWebRulesAuditor | cdktf.IResolvable | undefined) {
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

export class DlpWebRulesAuditorList extends cdktf.ComplexList {
  public internalValue? : DlpWebRulesAuditor[] | cdktf.IResolvable

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
  public get(index: number): DlpWebRulesAuditorOutputReference {
    return new DlpWebRulesAuditorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlpWebRulesDepartments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesDepartmentsToTerraform(struct?: DlpWebRulesDepartmentsOutputReference | DlpWebRulesDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesDepartmentsToHclTerraform(struct?: DlpWebRulesDepartmentsOutputReference | DlpWebRulesDepartments): any {
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

export class DlpWebRulesDepartmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesDepartments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesDepartments | undefined) {
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
export interface DlpWebRulesDlpEngines {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesDlpEnginesToTerraform(struct?: DlpWebRulesDlpEnginesOutputReference | DlpWebRulesDlpEngines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesDlpEnginesToHclTerraform(struct?: DlpWebRulesDlpEnginesOutputReference | DlpWebRulesDlpEngines): any {
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

export class DlpWebRulesDlpEnginesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesDlpEngines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesDlpEngines | undefined) {
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
export interface DlpWebRulesExcludedDepartments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesExcludedDepartmentsToTerraform(struct?: DlpWebRulesExcludedDepartmentsOutputReference | DlpWebRulesExcludedDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesExcludedDepartmentsToHclTerraform(struct?: DlpWebRulesExcludedDepartmentsOutputReference | DlpWebRulesExcludedDepartments): any {
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

export class DlpWebRulesExcludedDepartmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesExcludedDepartments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesExcludedDepartments | undefined) {
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
export interface DlpWebRulesExcludedDomainProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesExcludedDomainProfilesToTerraform(struct?: DlpWebRulesExcludedDomainProfilesOutputReference | DlpWebRulesExcludedDomainProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesExcludedDomainProfilesToHclTerraform(struct?: DlpWebRulesExcludedDomainProfilesOutputReference | DlpWebRulesExcludedDomainProfiles): any {
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

export class DlpWebRulesExcludedDomainProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesExcludedDomainProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesExcludedDomainProfiles | undefined) {
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
export interface DlpWebRulesExcludedGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesExcludedGroupsToTerraform(struct?: DlpWebRulesExcludedGroupsOutputReference | DlpWebRulesExcludedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesExcludedGroupsToHclTerraform(struct?: DlpWebRulesExcludedGroupsOutputReference | DlpWebRulesExcludedGroups): any {
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

export class DlpWebRulesExcludedGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesExcludedGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesExcludedGroups | undefined) {
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
export interface DlpWebRulesExcludedUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesExcludedUsersToTerraform(struct?: DlpWebRulesExcludedUsersOutputReference | DlpWebRulesExcludedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesExcludedUsersToHclTerraform(struct?: DlpWebRulesExcludedUsersOutputReference | DlpWebRulesExcludedUsers): any {
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

export class DlpWebRulesExcludedUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesExcludedUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesExcludedUsers | undefined) {
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
export interface DlpWebRulesFileTypeCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesFileTypeCategoriesToTerraform(struct?: DlpWebRulesFileTypeCategoriesOutputReference | DlpWebRulesFileTypeCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesFileTypeCategoriesToHclTerraform(struct?: DlpWebRulesFileTypeCategoriesOutputReference | DlpWebRulesFileTypeCategories): any {
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

export class DlpWebRulesFileTypeCategoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesFileTypeCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesFileTypeCategories | undefined) {
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
export interface DlpWebRulesGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesGroupsToTerraform(struct?: DlpWebRulesGroupsOutputReference | DlpWebRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesGroupsToHclTerraform(struct?: DlpWebRulesGroupsOutputReference | DlpWebRulesGroups): any {
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

export class DlpWebRulesGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesGroups | undefined) {
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
export interface DlpWebRulesIcapServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function dlpWebRulesIcapServerToTerraform(struct?: DlpWebRulesIcapServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function dlpWebRulesIcapServerToHclTerraform(struct?: DlpWebRulesIcapServer | cdktf.IResolvable): any {
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

export class DlpWebRulesIcapServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlpWebRulesIcapServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DlpWebRulesIcapServer | cdktf.IResolvable | undefined) {
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

export class DlpWebRulesIcapServerList extends cdktf.ComplexList {
  public internalValue? : DlpWebRulesIcapServer[] | cdktf.IResolvable

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
  public get(index: number): DlpWebRulesIcapServerOutputReference {
    return new DlpWebRulesIcapServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlpWebRulesIncludedDomainProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesIncludedDomainProfilesToTerraform(struct?: DlpWebRulesIncludedDomainProfilesOutputReference | DlpWebRulesIncludedDomainProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesIncludedDomainProfilesToHclTerraform(struct?: DlpWebRulesIncludedDomainProfilesOutputReference | DlpWebRulesIncludedDomainProfiles): any {
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

export class DlpWebRulesIncludedDomainProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesIncludedDomainProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesIncludedDomainProfiles | undefined) {
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
export interface DlpWebRulesLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesLabelsToTerraform(struct?: DlpWebRulesLabelsOutputReference | DlpWebRulesLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesLabelsToHclTerraform(struct?: DlpWebRulesLabelsOutputReference | DlpWebRulesLabels): any {
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

export class DlpWebRulesLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesLabels | undefined) {
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
export interface DlpWebRulesLocationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesLocationGroupsToTerraform(struct?: DlpWebRulesLocationGroupsOutputReference | DlpWebRulesLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesLocationGroupsToHclTerraform(struct?: DlpWebRulesLocationGroupsOutputReference | DlpWebRulesLocationGroups): any {
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

export class DlpWebRulesLocationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesLocationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesLocationGroups | undefined) {
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
export interface DlpWebRulesLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesLocationsToTerraform(struct?: DlpWebRulesLocationsOutputReference | DlpWebRulesLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesLocationsToHclTerraform(struct?: DlpWebRulesLocationsOutputReference | DlpWebRulesLocations): any {
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

export class DlpWebRulesLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesLocations | undefined) {
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
export interface DlpWebRulesNotificationTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function dlpWebRulesNotificationTemplateToTerraform(struct?: DlpWebRulesNotificationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function dlpWebRulesNotificationTemplateToHclTerraform(struct?: DlpWebRulesNotificationTemplate | cdktf.IResolvable): any {
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

export class DlpWebRulesNotificationTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlpWebRulesNotificationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DlpWebRulesNotificationTemplate | cdktf.IResolvable | undefined) {
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

export class DlpWebRulesNotificationTemplateList extends cdktf.ComplexList {
  public internalValue? : DlpWebRulesNotificationTemplate[] | cdktf.IResolvable

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
  public get(index: number): DlpWebRulesNotificationTemplateOutputReference {
    return new DlpWebRulesNotificationTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlpWebRulesReceiverTenant {
  /**
  * Unique identifier for the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#name DlpWebRules#name}
  */
  readonly name?: string;
}

export function dlpWebRulesReceiverTenantToTerraform(struct?: DlpWebRulesReceiverTenantOutputReference | DlpWebRulesReceiverTenant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dlpWebRulesReceiverTenantToHclTerraform(struct?: DlpWebRulesReceiverTenantOutputReference | DlpWebRulesReceiverTenant): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlpWebRulesReceiverTenantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesReceiverTenant | undefined {
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

  public set internalValue(value: DlpWebRulesReceiverTenant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
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
}
export interface DlpWebRulesReceiver {
  /**
  * Unique identifier for the receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name of the receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#name DlpWebRules#name}
  */
  readonly name?: string;
  /**
  * Type of the receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#type DlpWebRules#type}
  */
  readonly type?: string;
  /**
  * tenant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#tenant DlpWebRules#tenant}
  */
  readonly tenant?: DlpWebRulesReceiverTenant;
}

export function dlpWebRulesReceiverToTerraform(struct?: DlpWebRulesReceiverOutputReference | DlpWebRulesReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    tenant: dlpWebRulesReceiverTenantToTerraform(struct!.tenant),
  }
}


export function dlpWebRulesReceiverToHclTerraform(struct?: DlpWebRulesReceiverOutputReference | DlpWebRulesReceiver): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: dlpWebRulesReceiverTenantToHclTerraform(struct!.tenant),
      isBlock: true,
      type: "list",
      storageClassType: "DlpWebRulesReceiverTenantList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlpWebRulesReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesReceiver | undefined {
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tenant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
      this._tenant.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
      this._tenant.internalValue = value.tenant;
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

  // tenant - computed: false, optional: true, required: false
  private _tenant = new DlpWebRulesReceiverTenantOutputReference(this, "tenant");
  public get tenant() {
    return this._tenant;
  }
  public putTenant(value: DlpWebRulesReceiverTenant) {
    this._tenant.internalValue = value;
  }
  public resetTenant() {
    this._tenant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant.internalValue;
  }
}
export interface DlpWebRulesSourceIpGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesSourceIpGroupsToTerraform(struct?: DlpWebRulesSourceIpGroupsOutputReference | DlpWebRulesSourceIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesSourceIpGroupsToHclTerraform(struct?: DlpWebRulesSourceIpGroupsOutputReference | DlpWebRulesSourceIpGroups): any {
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

export class DlpWebRulesSourceIpGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesSourceIpGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesSourceIpGroups | undefined) {
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
export interface DlpWebRulesTimeWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesTimeWindowsToTerraform(struct?: DlpWebRulesTimeWindowsOutputReference | DlpWebRulesTimeWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesTimeWindowsToHclTerraform(struct?: DlpWebRulesTimeWindowsOutputReference | DlpWebRulesTimeWindows): any {
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

export class DlpWebRulesTimeWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesTimeWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesTimeWindows | undefined) {
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
export interface DlpWebRulesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#create DlpWebRules#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#update DlpWebRules#update}
  */
  readonly update?: string;
}

export function dlpWebRulesTimeoutsToTerraform(struct?: DlpWebRulesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dlpWebRulesTimeoutsToHclTerraform(struct?: DlpWebRulesTimeouts | cdktf.IResolvable): any {
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

export class DlpWebRulesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlpWebRulesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DlpWebRulesTimeouts | cdktf.IResolvable | undefined) {
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
export interface DlpWebRulesUrlCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesUrlCategoriesToTerraform(struct?: DlpWebRulesUrlCategoriesOutputReference | DlpWebRulesUrlCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesUrlCategoriesToHclTerraform(struct?: DlpWebRulesUrlCategoriesOutputReference | DlpWebRulesUrlCategories): any {
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

export class DlpWebRulesUrlCategoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesUrlCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesUrlCategories | undefined) {
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
export interface DlpWebRulesUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function dlpWebRulesUsersToTerraform(struct?: DlpWebRulesUsersOutputReference | DlpWebRulesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function dlpWebRulesUsersToHclTerraform(struct?: DlpWebRulesUsersOutputReference | DlpWebRulesUsers): any {
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

export class DlpWebRulesUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlpWebRulesUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpWebRulesUsers | undefined) {
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
export interface DlpWebRulesWorkloadGroups {
  /**
  * The unique identifier for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#id DlpWebRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#name DlpWebRules#name}
  */
  readonly name?: string;
}

export function dlpWebRulesWorkloadGroupsToTerraform(struct?: DlpWebRulesWorkloadGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dlpWebRulesWorkloadGroupsToHclTerraform(struct?: DlpWebRulesWorkloadGroups | cdktf.IResolvable): any {
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

export class DlpWebRulesWorkloadGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlpWebRulesWorkloadGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DlpWebRulesWorkloadGroups | cdktf.IResolvable | undefined) {
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

export class DlpWebRulesWorkloadGroupsList extends cdktf.ComplexList {
  public internalValue? : DlpWebRulesWorkloadGroups[] | cdktf.IResolvable

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
  public get(index: number): DlpWebRulesWorkloadGroupsOutputReference {
    return new DlpWebRulesWorkloadGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules zia_dlp_web_rules}
*/
export class DlpWebRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_dlp_web_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlpWebRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlpWebRules to import
  * @param importFromId The id of the existing DlpWebRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlpWebRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_dlp_web_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_web_rules zia_dlp_web_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlpWebRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DlpWebRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_dlp_web_rules',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.5',
        providerVersionConstraint: '4.6.5'
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
    this._cloudApplications = config.cloudApplications;
    this._description = config.description;
    this._dlpDownloadScanEnabled = config.dlpDownloadScanEnabled;
    this._externalAuditorEmail = config.externalAuditorEmail;
    this._fileTypes = config.fileTypes;
    this._inspectHttpGetEnabled = config.inspectHttpGetEnabled;
    this._matchOnly = config.matchOnly;
    this._minSize = config.minSize;
    this._name = config.name;
    this._order = config.order;
    this._parentRule = config.parentRule;
    this._protocols = config.protocols;
    this._rank = config.rank;
    this._severity = config.severity;
    this._state = config.state;
    this._subRules = config.subRules;
    this._userRiskScoreLevels = config.userRiskScoreLevels;
    this._withoutContentInspection = config.withoutContentInspection;
    this._zccNotificationsEnabled = config.zccNotificationsEnabled;
    this._zscalerIncidentReceiver = config.zscalerIncidentReceiver;
    this._auditor.internalValue = config.auditor;
    this._departments.internalValue = config.departments;
    this._dlpEngines.internalValue = config.dlpEngines;
    this._excludedDepartments.internalValue = config.excludedDepartments;
    this._excludedDomainProfiles.internalValue = config.excludedDomainProfiles;
    this._excludedGroups.internalValue = config.excludedGroups;
    this._excludedUsers.internalValue = config.excludedUsers;
    this._fileTypeCategories.internalValue = config.fileTypeCategories;
    this._groups.internalValue = config.groups;
    this._icapServer.internalValue = config.icapServer;
    this._includedDomainProfiles.internalValue = config.includedDomainProfiles;
    this._labels.internalValue = config.labels;
    this._locationGroups.internalValue = config.locationGroups;
    this._locations.internalValue = config.locations;
    this._notificationTemplate.internalValue = config.notificationTemplate;
    this._receiver.internalValue = config.receiver;
    this._sourceIpGroups.internalValue = config.sourceIpGroups;
    this._timeWindows.internalValue = config.timeWindows;
    this._timeouts.internalValue = config.timeouts;
    this._urlCategories.internalValue = config.urlCategories;
    this._users.internalValue = config.users;
    this._workloadGroups.internalValue = config.workloadGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
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

  // cloud_applications - computed: false, optional: true, required: false
  private _cloudApplications?: string[]; 
  public get cloudApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('cloud_applications'));
  }
  public set cloudApplications(value: string[]) {
    this._cloudApplications = value;
  }
  public resetCloudApplications() {
    this._cloudApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudApplicationsInput() {
    return this._cloudApplications;
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

  // dlp_download_scan_enabled - computed: true, optional: true, required: false
  private _dlpDownloadScanEnabled?: boolean | cdktf.IResolvable; 
  public get dlpDownloadScanEnabled() {
    return this.getBooleanAttribute('dlp_download_scan_enabled');
  }
  public set dlpDownloadScanEnabled(value: boolean | cdktf.IResolvable) {
    this._dlpDownloadScanEnabled = value;
  }
  public resetDlpDownloadScanEnabled() {
    this._dlpDownloadScanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpDownloadScanEnabledInput() {
    return this._dlpDownloadScanEnabled;
  }

  // external_auditor_email - computed: false, optional: true, required: false
  private _externalAuditorEmail?: string; 
  public get externalAuditorEmail() {
    return this.getStringAttribute('external_auditor_email');
  }
  public set externalAuditorEmail(value: string) {
    this._externalAuditorEmail = value;
  }
  public resetExternalAuditorEmail() {
    this._externalAuditorEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuditorEmailInput() {
    return this._externalAuditorEmail;
  }

  // file_types - computed: true, optional: true, required: false
  private _fileTypes?: string[]; 
  public get fileTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('file_types'));
  }
  public set fileTypes(value: string[]) {
    this._fileTypes = value;
  }
  public resetFileTypes() {
    this._fileTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypesInput() {
    return this._fileTypes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inspect_http_get_enabled - computed: false, optional: true, required: false
  private _inspectHttpGetEnabled?: boolean | cdktf.IResolvable; 
  public get inspectHttpGetEnabled() {
    return this.getBooleanAttribute('inspect_http_get_enabled');
  }
  public set inspectHttpGetEnabled(value: boolean | cdktf.IResolvable) {
    this._inspectHttpGetEnabled = value;
  }
  public resetInspectHttpGetEnabled() {
    this._inspectHttpGetEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectHttpGetEnabledInput() {
    return this._inspectHttpGetEnabled;
  }

  // match_only - computed: true, optional: true, required: false
  private _matchOnly?: boolean | cdktf.IResolvable; 
  public get matchOnly() {
    return this.getBooleanAttribute('match_only');
  }
  public set matchOnly(value: boolean | cdktf.IResolvable) {
    this._matchOnly = value;
  }
  public resetMatchOnly() {
    this._matchOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOnlyInput() {
    return this._matchOnly;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // parent_rule - computed: true, optional: true, required: false
  private _parentRule?: number; 
  public get parentRule() {
    return this.getNumberAttribute('parent_rule');
  }
  public set parentRule(value: number) {
    this._parentRule = value;
  }
  public resetParentRule() {
    this._parentRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRuleInput() {
    return this._parentRule;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // rank - computed: true, optional: true, required: false
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

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // state - computed: true, optional: true, required: false
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

  // sub_rules - computed: true, optional: true, required: false
  private _subRules?: string[]; 
  public get subRules() {
    return cdktf.Fn.tolist(this.getListAttribute('sub_rules'));
  }
  public set subRules(value: string[]) {
    this._subRules = value;
  }
  public resetSubRules() {
    this._subRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subRulesInput() {
    return this._subRules;
  }

  // user_risk_score_levels - computed: true, optional: true, required: false
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

  // without_content_inspection - computed: true, optional: true, required: false
  private _withoutContentInspection?: boolean | cdktf.IResolvable; 
  public get withoutContentInspection() {
    return this.getBooleanAttribute('without_content_inspection');
  }
  public set withoutContentInspection(value: boolean | cdktf.IResolvable) {
    this._withoutContentInspection = value;
  }
  public resetWithoutContentInspection() {
    this._withoutContentInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withoutContentInspectionInput() {
    return this._withoutContentInspection;
  }

  // zcc_notifications_enabled - computed: true, optional: true, required: false
  private _zccNotificationsEnabled?: boolean | cdktf.IResolvable; 
  public get zccNotificationsEnabled() {
    return this.getBooleanAttribute('zcc_notifications_enabled');
  }
  public set zccNotificationsEnabled(value: boolean | cdktf.IResolvable) {
    this._zccNotificationsEnabled = value;
  }
  public resetZccNotificationsEnabled() {
    this._zccNotificationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zccNotificationsEnabledInput() {
    return this._zccNotificationsEnabled;
  }

  // zscaler_incident_receiver - computed: false, optional: true, required: false
  private _zscalerIncidentReceiver?: boolean | cdktf.IResolvable; 
  public get zscalerIncidentReceiver() {
    return this.getBooleanAttribute('zscaler_incident_receiver');
  }
  public set zscalerIncidentReceiver(value: boolean | cdktf.IResolvable) {
    this._zscalerIncidentReceiver = value;
  }
  public resetZscalerIncidentReceiver() {
    this._zscalerIncidentReceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerIncidentReceiverInput() {
    return this._zscalerIncidentReceiver;
  }

  // auditor - computed: false, optional: true, required: false
  private _auditor = new DlpWebRulesAuditorList(this, "auditor", true);
  public get auditor() {
    return this._auditor;
  }
  public putAuditor(value: DlpWebRulesAuditor[] | cdktf.IResolvable) {
    this._auditor.internalValue = value;
  }
  public resetAuditor() {
    this._auditor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditorInput() {
    return this._auditor.internalValue;
  }

  // departments - computed: false, optional: true, required: false
  private _departments = new DlpWebRulesDepartmentsOutputReference(this, "departments");
  public get departments() {
    return this._departments;
  }
  public putDepartments(value: DlpWebRulesDepartments) {
    this._departments.internalValue = value;
  }
  public resetDepartments() {
    this._departments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentsInput() {
    return this._departments.internalValue;
  }

  // dlp_engines - computed: false, optional: true, required: false
  private _dlpEngines = new DlpWebRulesDlpEnginesOutputReference(this, "dlp_engines");
  public get dlpEngines() {
    return this._dlpEngines;
  }
  public putDlpEngines(value: DlpWebRulesDlpEngines) {
    this._dlpEngines.internalValue = value;
  }
  public resetDlpEngines() {
    this._dlpEngines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpEnginesInput() {
    return this._dlpEngines.internalValue;
  }

  // excluded_departments - computed: false, optional: true, required: false
  private _excludedDepartments = new DlpWebRulesExcludedDepartmentsOutputReference(this, "excluded_departments");
  public get excludedDepartments() {
    return this._excludedDepartments;
  }
  public putExcludedDepartments(value: DlpWebRulesExcludedDepartments) {
    this._excludedDepartments.internalValue = value;
  }
  public resetExcludedDepartments() {
    this._excludedDepartments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedDepartmentsInput() {
    return this._excludedDepartments.internalValue;
  }

  // excluded_domain_profiles - computed: false, optional: true, required: false
  private _excludedDomainProfiles = new DlpWebRulesExcludedDomainProfilesOutputReference(this, "excluded_domain_profiles");
  public get excludedDomainProfiles() {
    return this._excludedDomainProfiles;
  }
  public putExcludedDomainProfiles(value: DlpWebRulesExcludedDomainProfiles) {
    this._excludedDomainProfiles.internalValue = value;
  }
  public resetExcludedDomainProfiles() {
    this._excludedDomainProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedDomainProfilesInput() {
    return this._excludedDomainProfiles.internalValue;
  }

  // excluded_groups - computed: false, optional: true, required: false
  private _excludedGroups = new DlpWebRulesExcludedGroupsOutputReference(this, "excluded_groups");
  public get excludedGroups() {
    return this._excludedGroups;
  }
  public putExcludedGroups(value: DlpWebRulesExcludedGroups) {
    this._excludedGroups.internalValue = value;
  }
  public resetExcludedGroups() {
    this._excludedGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedGroupsInput() {
    return this._excludedGroups.internalValue;
  }

  // excluded_users - computed: false, optional: true, required: false
  private _excludedUsers = new DlpWebRulesExcludedUsersOutputReference(this, "excluded_users");
  public get excludedUsers() {
    return this._excludedUsers;
  }
  public putExcludedUsers(value: DlpWebRulesExcludedUsers) {
    this._excludedUsers.internalValue = value;
  }
  public resetExcludedUsers() {
    this._excludedUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedUsersInput() {
    return this._excludedUsers.internalValue;
  }

  // file_type_categories - computed: false, optional: true, required: false
  private _fileTypeCategories = new DlpWebRulesFileTypeCategoriesOutputReference(this, "file_type_categories");
  public get fileTypeCategories() {
    return this._fileTypeCategories;
  }
  public putFileTypeCategories(value: DlpWebRulesFileTypeCategories) {
    this._fileTypeCategories.internalValue = value;
  }
  public resetFileTypeCategories() {
    this._fileTypeCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeCategoriesInput() {
    return this._fileTypeCategories.internalValue;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new DlpWebRulesGroupsOutputReference(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: DlpWebRulesGroups) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // icap_server - computed: false, optional: true, required: false
  private _icapServer = new DlpWebRulesIcapServerList(this, "icap_server", true);
  public get icapServer() {
    return this._icapServer;
  }
  public putIcapServer(value: DlpWebRulesIcapServer[] | cdktf.IResolvable) {
    this._icapServer.internalValue = value;
  }
  public resetIcapServer() {
    this._icapServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icapServerInput() {
    return this._icapServer.internalValue;
  }

  // included_domain_profiles - computed: false, optional: true, required: false
  private _includedDomainProfiles = new DlpWebRulesIncludedDomainProfilesOutputReference(this, "included_domain_profiles");
  public get includedDomainProfiles() {
    return this._includedDomainProfiles;
  }
  public putIncludedDomainProfiles(value: DlpWebRulesIncludedDomainProfiles) {
    this._includedDomainProfiles.internalValue = value;
  }
  public resetIncludedDomainProfiles() {
    this._includedDomainProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedDomainProfilesInput() {
    return this._includedDomainProfiles.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new DlpWebRulesLabelsOutputReference(this, "labels");
  public get labels() {
    return this._labels;
  }
  public putLabels(value: DlpWebRulesLabels) {
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
  private _locationGroups = new DlpWebRulesLocationGroupsOutputReference(this, "location_groups");
  public get locationGroups() {
    return this._locationGroups;
  }
  public putLocationGroups(value: DlpWebRulesLocationGroups) {
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
  private _locations = new DlpWebRulesLocationsOutputReference(this, "locations");
  public get locations() {
    return this._locations;
  }
  public putLocations(value: DlpWebRulesLocations) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // notification_template - computed: false, optional: true, required: false
  private _notificationTemplate = new DlpWebRulesNotificationTemplateList(this, "notification_template", true);
  public get notificationTemplate() {
    return this._notificationTemplate;
  }
  public putNotificationTemplate(value: DlpWebRulesNotificationTemplate[] | cdktf.IResolvable) {
    this._notificationTemplate.internalValue = value;
  }
  public resetNotificationTemplate() {
    this._notificationTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTemplateInput() {
    return this._notificationTemplate.internalValue;
  }

  // receiver - computed: false, optional: true, required: false
  private _receiver = new DlpWebRulesReceiverOutputReference(this, "receiver");
  public get receiver() {
    return this._receiver;
  }
  public putReceiver(value: DlpWebRulesReceiver) {
    this._receiver.internalValue = value;
  }
  public resetReceiver() {
    this._receiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverInput() {
    return this._receiver.internalValue;
  }

  // source_ip_groups - computed: false, optional: true, required: false
  private _sourceIpGroups = new DlpWebRulesSourceIpGroupsOutputReference(this, "source_ip_groups");
  public get sourceIpGroups() {
    return this._sourceIpGroups;
  }
  public putSourceIpGroups(value: DlpWebRulesSourceIpGroups) {
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
  private _timeWindows = new DlpWebRulesTimeWindowsOutputReference(this, "time_windows");
  public get timeWindows() {
    return this._timeWindows;
  }
  public putTimeWindows(value: DlpWebRulesTimeWindows) {
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
  private _timeouts = new DlpWebRulesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DlpWebRulesTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // url_categories - computed: false, optional: true, required: false
  private _urlCategories = new DlpWebRulesUrlCategoriesOutputReference(this, "url_categories");
  public get urlCategories() {
    return this._urlCategories;
  }
  public putUrlCategories(value: DlpWebRulesUrlCategories) {
    this._urlCategories.internalValue = value;
  }
  public resetUrlCategories() {
    this._urlCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoriesInput() {
    return this._urlCategories.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new DlpWebRulesUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: DlpWebRulesUsers) {
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
  private _workloadGroups = new DlpWebRulesWorkloadGroupsList(this, "workload_groups", true);
  public get workloadGroups() {
    return this._workloadGroups;
  }
  public putWorkloadGroups(value: DlpWebRulesWorkloadGroups[] | cdktf.IResolvable) {
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
      cloud_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudApplications),
      description: cdktf.stringToTerraform(this._description),
      dlp_download_scan_enabled: cdktf.booleanToTerraform(this._dlpDownloadScanEnabled),
      external_auditor_email: cdktf.stringToTerraform(this._externalAuditorEmail),
      file_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileTypes),
      inspect_http_get_enabled: cdktf.booleanToTerraform(this._inspectHttpGetEnabled),
      match_only: cdktf.booleanToTerraform(this._matchOnly),
      min_size: cdktf.numberToTerraform(this._minSize),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      parent_rule: cdktf.numberToTerraform(this._parentRule),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      rank: cdktf.numberToTerraform(this._rank),
      severity: cdktf.stringToTerraform(this._severity),
      state: cdktf.stringToTerraform(this._state),
      sub_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subRules),
      user_risk_score_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userRiskScoreLevels),
      without_content_inspection: cdktf.booleanToTerraform(this._withoutContentInspection),
      zcc_notifications_enabled: cdktf.booleanToTerraform(this._zccNotificationsEnabled),
      zscaler_incident_receiver: cdktf.booleanToTerraform(this._zscalerIncidentReceiver),
      auditor: cdktf.listMapper(dlpWebRulesAuditorToTerraform, true)(this._auditor.internalValue),
      departments: dlpWebRulesDepartmentsToTerraform(this._departments.internalValue),
      dlp_engines: dlpWebRulesDlpEnginesToTerraform(this._dlpEngines.internalValue),
      excluded_departments: dlpWebRulesExcludedDepartmentsToTerraform(this._excludedDepartments.internalValue),
      excluded_domain_profiles: dlpWebRulesExcludedDomainProfilesToTerraform(this._excludedDomainProfiles.internalValue),
      excluded_groups: dlpWebRulesExcludedGroupsToTerraform(this._excludedGroups.internalValue),
      excluded_users: dlpWebRulesExcludedUsersToTerraform(this._excludedUsers.internalValue),
      file_type_categories: dlpWebRulesFileTypeCategoriesToTerraform(this._fileTypeCategories.internalValue),
      groups: dlpWebRulesGroupsToTerraform(this._groups.internalValue),
      icap_server: cdktf.listMapper(dlpWebRulesIcapServerToTerraform, true)(this._icapServer.internalValue),
      included_domain_profiles: dlpWebRulesIncludedDomainProfilesToTerraform(this._includedDomainProfiles.internalValue),
      labels: dlpWebRulesLabelsToTerraform(this._labels.internalValue),
      location_groups: dlpWebRulesLocationGroupsToTerraform(this._locationGroups.internalValue),
      locations: dlpWebRulesLocationsToTerraform(this._locations.internalValue),
      notification_template: cdktf.listMapper(dlpWebRulesNotificationTemplateToTerraform, true)(this._notificationTemplate.internalValue),
      receiver: dlpWebRulesReceiverToTerraform(this._receiver.internalValue),
      source_ip_groups: dlpWebRulesSourceIpGroupsToTerraform(this._sourceIpGroups.internalValue),
      time_windows: dlpWebRulesTimeWindowsToTerraform(this._timeWindows.internalValue),
      timeouts: dlpWebRulesTimeoutsToTerraform(this._timeouts.internalValue),
      url_categories: dlpWebRulesUrlCategoriesToTerraform(this._urlCategories.internalValue),
      users: dlpWebRulesUsersToTerraform(this._users.internalValue),
      workload_groups: cdktf.listMapper(dlpWebRulesWorkloadGroupsToTerraform, true)(this._workloadGroups.internalValue),
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
      cloud_applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloudApplications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_download_scan_enabled: {
        value: cdktf.booleanToHclTerraform(this._dlpDownloadScanEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_auditor_email: {
        value: cdktf.stringToHclTerraform(this._externalAuditorEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      inspect_http_get_enabled: {
        value: cdktf.booleanToHclTerraform(this._inspectHttpGetEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_only: {
        value: cdktf.booleanToHclTerraform(this._matchOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      min_size: {
        value: cdktf.numberToHclTerraform(this._minSize),
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
      parent_rule: {
        value: cdktf.numberToHclTerraform(this._parentRule),
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
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subRules),
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
      without_content_inspection: {
        value: cdktf.booleanToHclTerraform(this._withoutContentInspection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zcc_notifications_enabled: {
        value: cdktf.booleanToHclTerraform(this._zccNotificationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zscaler_incident_receiver: {
        value: cdktf.booleanToHclTerraform(this._zscalerIncidentReceiver),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auditor: {
        value: cdktf.listMapperHcl(dlpWebRulesAuditorToHclTerraform, true)(this._auditor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesAuditorList",
      },
      departments: {
        value: dlpWebRulesDepartmentsToHclTerraform(this._departments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesDepartmentsList",
      },
      dlp_engines: {
        value: dlpWebRulesDlpEnginesToHclTerraform(this._dlpEngines.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesDlpEnginesList",
      },
      excluded_departments: {
        value: dlpWebRulesExcludedDepartmentsToHclTerraform(this._excludedDepartments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesExcludedDepartmentsList",
      },
      excluded_domain_profiles: {
        value: dlpWebRulesExcludedDomainProfilesToHclTerraform(this._excludedDomainProfiles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesExcludedDomainProfilesList",
      },
      excluded_groups: {
        value: dlpWebRulesExcludedGroupsToHclTerraform(this._excludedGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesExcludedGroupsList",
      },
      excluded_users: {
        value: dlpWebRulesExcludedUsersToHclTerraform(this._excludedUsers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesExcludedUsersList",
      },
      file_type_categories: {
        value: dlpWebRulesFileTypeCategoriesToHclTerraform(this._fileTypeCategories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesFileTypeCategoriesList",
      },
      groups: {
        value: dlpWebRulesGroupsToHclTerraform(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesGroupsList",
      },
      icap_server: {
        value: cdktf.listMapperHcl(dlpWebRulesIcapServerToHclTerraform, true)(this._icapServer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesIcapServerList",
      },
      included_domain_profiles: {
        value: dlpWebRulesIncludedDomainProfilesToHclTerraform(this._includedDomainProfiles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesIncludedDomainProfilesList",
      },
      labels: {
        value: dlpWebRulesLabelsToHclTerraform(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesLabelsList",
      },
      location_groups: {
        value: dlpWebRulesLocationGroupsToHclTerraform(this._locationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesLocationGroupsList",
      },
      locations: {
        value: dlpWebRulesLocationsToHclTerraform(this._locations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesLocationsList",
      },
      notification_template: {
        value: cdktf.listMapperHcl(dlpWebRulesNotificationTemplateToHclTerraform, true)(this._notificationTemplate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesNotificationTemplateList",
      },
      receiver: {
        value: dlpWebRulesReceiverToHclTerraform(this._receiver.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesReceiverList",
      },
      source_ip_groups: {
        value: dlpWebRulesSourceIpGroupsToHclTerraform(this._sourceIpGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesSourceIpGroupsList",
      },
      time_windows: {
        value: dlpWebRulesTimeWindowsToHclTerraform(this._timeWindows.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesTimeWindowsList",
      },
      timeouts: {
        value: dlpWebRulesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DlpWebRulesTimeouts",
      },
      url_categories: {
        value: dlpWebRulesUrlCategoriesToHclTerraform(this._urlCategories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesUrlCategoriesList",
      },
      users: {
        value: dlpWebRulesUsersToHclTerraform(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesUsersList",
      },
      workload_groups: {
        value: cdktf.listMapperHcl(dlpWebRulesWorkloadGroupsToHclTerraform, true)(this._workloadGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpWebRulesWorkloadGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
