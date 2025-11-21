// https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CasbDlpRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The configured action for the policy rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#action CasbDlpRules#action}
  */
  readonly action?: string;
  /**
  * A user who inspect their buckets for sensitive data. When you choose a user, their buckets are available in the Buckets field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#bucket_owner CasbDlpRules#bucket_owner}
  */
  readonly bucketOwner?: string;
  /**
  * Collaboration scope for the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#collaboration_scope CasbDlpRules#collaboration_scope}
  */
  readonly collaborationScope?: string[];
  /**
  * List of components for which the rule is applied. Zscaler service inspects these components for sensitive data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#components CasbDlpRules#components}
  */
  readonly components?: string[];
  /**
  * The location for the content that the Zscaler service inspects for sensitive data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#content_location CasbDlpRules#content_location}
  */
  readonly contentLocation?: string;
  /**
  * An admin editable text-based description of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#description CasbDlpRules#description}
  */
  readonly description?: string;
  /**
  * The domain for the external organization sharing the channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#domains CasbDlpRules#domains}
  */
  readonly domains?: string[];
  /**
  * Email address of the external auditor to whom the DLP email alerts are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#external_auditor_email CasbDlpRules#external_auditor_email}
  */
  readonly externalAuditorEmail?: string;
  /**
  * File type categories for which the policy is applied. If not set, the rule is applied across all file types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#file_types CasbDlpRules#file_types}
  */
  readonly fileTypes?: string[];
  /**
  * If true, criteriaDomainProfiles is included as part of the criteria, else they are excluded from the criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#include_criteria_domain_profile CasbDlpRules#include_criteria_domain_profile}
  */
  readonly includeCriteriaDomainProfile?: boolean | cdktf.IResolvable;
  /**
  * If true, emailRecipientProfiles is included as part of the criteria, else they are excluded from the criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#include_email_recipient_profile CasbDlpRules#include_email_recipient_profile}
  */
  readonly includeEmailRecipientProfile?: boolean | cdktf.IResolvable;
  /**
  * If true, entityGroups is included as part of the criteria, else are excluded from the criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#include_entity_groups CasbDlpRules#include_entity_groups}
  */
  readonly includeEntityGroups?: boolean | cdktf.IResolvable;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#name CasbDlpRules#name}
  */
  readonly name?: string;
  /**
  * Order of rule execution with respect to other SaaS Security Data at Rest Scanning DLP rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#order CasbDlpRules#order}
  */
  readonly order: number;
  /**
  * Location where all the quarantined files are moved and necessary actions are taken by either deleting or restoring the data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#quarantine_location CasbDlpRules#quarantine_location}
  */
  readonly quarantineLocation?: string;
  /**
  * Admin rank that is assigned to this rule. Mandatory when admin rank-based access restriction is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#rank CasbDlpRules#rank}
  */
  readonly rank?: number;
  /**
  * Specifies if the email recipient is internal or external
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#recipient CasbDlpRules#recipient}
  */
  readonly recipient?: string;
  /**
  * The severity level of the incidents that match the policy rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#severity CasbDlpRules#severity}
  */
  readonly severity?: string;
  /**
  * Administrative state of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#state CasbDlpRules#state}
  */
  readonly state?: string;
  /**
  * The type of SaaS Security Data at Rest Scanning DLP rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#type CasbDlpRules#type}
  */
  readonly type?: string;
  /**
  * Specifies whether to delete an old version of the watermarked file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#watermark_delete_old_version CasbDlpRules#watermark_delete_old_version}
  */
  readonly watermarkDeleteOldVersion?: boolean | cdktf.IResolvable;
  /**
  * If true, Content Matching is set to None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#without_content_inspection CasbDlpRules#without_content_inspection}
  */
  readonly withoutContentInspection?: boolean | cdktf.IResolvable;
  /**
  * auditor_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#auditor_notification CasbDlpRules#auditor_notification}
  */
  readonly auditorNotification?: CasbDlpRulesAuditorNotification[] | cdktf.IResolvable;
  /**
  * buckets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#buckets CasbDlpRules#buckets}
  */
  readonly buckets?: CasbDlpRulesBuckets;
  /**
  * casb_email_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#casb_email_label CasbDlpRules#casb_email_label}
  */
  readonly casbEmailLabel?: CasbDlpRulesCasbEmailLabel[] | cdktf.IResolvable;
  /**
  * casb_tombstone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#casb_tombstone_template CasbDlpRules#casb_tombstone_template}
  */
  readonly casbTombstoneTemplate?: CasbDlpRulesCasbTombstoneTemplate[] | cdktf.IResolvable;
  /**
  * cloud_app_tenants block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#cloud_app_tenants CasbDlpRules#cloud_app_tenants}
  */
  readonly cloudAppTenants?: CasbDlpRulesCloudAppTenants;
  /**
  * criteria_domain_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#criteria_domain_profiles CasbDlpRules#criteria_domain_profiles}
  */
  readonly criteriaDomainProfiles?: CasbDlpRulesCriteriaDomainProfiles;
  /**
  * departments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#departments CasbDlpRules#departments}
  */
  readonly departments?: CasbDlpRulesDepartments;
  /**
  * dlp_engines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#dlp_engines CasbDlpRules#dlp_engines}
  */
  readonly dlpEngines?: CasbDlpRulesDlpEngines;
  /**
  * email_recipient_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#email_recipient_profiles CasbDlpRules#email_recipient_profiles}
  */
  readonly emailRecipientProfiles?: CasbDlpRulesEmailRecipientProfiles;
  /**
  * entity_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#entity_groups CasbDlpRules#entity_groups}
  */
  readonly entityGroups?: CasbDlpRulesEntityGroups;
  /**
  * excluded_domain_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#excluded_domain_profiles CasbDlpRules#excluded_domain_profiles}
  */
  readonly excludedDomainProfiles?: CasbDlpRulesExcludedDomainProfiles;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#groups CasbDlpRules#groups}
  */
  readonly groups?: CasbDlpRulesGroups;
  /**
  * included_domain_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#included_domain_profiles CasbDlpRules#included_domain_profiles}
  */
  readonly includedDomainProfiles?: CasbDlpRulesIncludedDomainProfiles;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#labels CasbDlpRules#labels}
  */
  readonly labels?: CasbDlpRulesLabels;
  /**
  * object_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#object_types CasbDlpRules#object_types}
  */
  readonly objectTypes?: CasbDlpRulesObjectTypes;
  /**
  * receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#receiver CasbDlpRules#receiver}
  */
  readonly receiver?: CasbDlpRulesReceiver;
  /**
  * redaction_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#redaction_profile CasbDlpRules#redaction_profile}
  */
  readonly redactionProfile?: CasbDlpRulesRedactionProfile[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#tag CasbDlpRules#tag}
  */
  readonly tag?: CasbDlpRulesTag[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#timeouts CasbDlpRules#timeouts}
  */
  readonly timeouts?: CasbDlpRulesTimeouts;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#users CasbDlpRules#users}
  */
  readonly users?: CasbDlpRulesUsers;
  /**
  * watermark_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#watermark_profile CasbDlpRules#watermark_profile}
  */
  readonly watermarkProfile?: CasbDlpRulesWatermarkProfile[] | cdktf.IResolvable;
  /**
  * zscaler_incident_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#zscaler_incident_receiver CasbDlpRules#zscaler_incident_receiver}
  */
  readonly zscalerIncidentReceiver?: CasbDlpRulesZscalerIncidentReceiver[] | cdktf.IResolvable;
}
export interface CasbDlpRulesAuditorNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function casbDlpRulesAuditorNotificationToTerraform(struct?: CasbDlpRulesAuditorNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function casbDlpRulesAuditorNotificationToHclTerraform(struct?: CasbDlpRulesAuditorNotification | cdktf.IResolvable): any {
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

export class CasbDlpRulesAuditorNotificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbDlpRulesAuditorNotification | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CasbDlpRulesAuditorNotification | cdktf.IResolvable | undefined) {
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

export class CasbDlpRulesAuditorNotificationList extends cdktf.ComplexList {
  public internalValue? : CasbDlpRulesAuditorNotification[] | cdktf.IResolvable

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
  public get(index: number): CasbDlpRulesAuditorNotificationOutputReference {
    return new CasbDlpRulesAuditorNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbDlpRulesBuckets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function casbDlpRulesBucketsToTerraform(struct?: CasbDlpRulesBucketsOutputReference | CasbDlpRulesBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function casbDlpRulesBucketsToHclTerraform(struct?: CasbDlpRulesBucketsOutputReference | CasbDlpRulesBuckets): any {
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

export class CasbDlpRulesBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CasbDlpRulesBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbDlpRulesBuckets | undefined) {
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
export interface CasbDlpRulesCasbEmailLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function casbDlpRulesCasbEmailLabelToTerraform(struct?: CasbDlpRulesCasbEmailLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function casbDlpRulesCasbEmailLabelToHclTerraform(struct?: CasbDlpRulesCasbEmailLabel | cdktf.IResolvable): any {
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

export class CasbDlpRulesCasbEmailLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbDlpRulesCasbEmailLabel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CasbDlpRulesCasbEmailLabel | cdktf.IResolvable | undefined) {
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

export class CasbDlpRulesCasbEmailLabelList extends cdktf.ComplexList {
  public internalValue? : CasbDlpRulesCasbEmailLabel[] | cdktf.IResolvable

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
  public get(index: number): CasbDlpRulesCasbEmailLabelOutputReference {
    return new CasbDlpRulesCasbEmailLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbDlpRulesCasbTombstoneTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function casbDlpRulesCasbTombstoneTemplateToTerraform(struct?: CasbDlpRulesCasbTombstoneTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function casbDlpRulesCasbTombstoneTemplateToHclTerraform(struct?: CasbDlpRulesCasbTombstoneTemplate | cdktf.IResolvable): any {
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

export class CasbDlpRulesCasbTombstoneTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbDlpRulesCasbTombstoneTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CasbDlpRulesCasbTombstoneTemplate | cdktf.IResolvable | undefined) {
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

export class CasbDlpRulesCasbTombstoneTemplateList extends cdktf.ComplexList {
  public internalValue? : CasbDlpRulesCasbTombstoneTemplate[] | cdktf.IResolvable

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
  public get(index: number): CasbDlpRulesCasbTombstoneTemplateOutputReference {
    return new CasbDlpRulesCasbTombstoneTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbDlpRulesCloudAppTenants {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function casbDlpRulesCloudAppTenantsToTerraform(struct?: CasbDlpRulesCloudAppTenantsOutputReference | CasbDlpRulesCloudAppTenants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function casbDlpRulesCloudAppTenantsToHclTerraform(struct?: CasbDlpRulesCloudAppTenantsOutputReference | CasbDlpRulesCloudAppTenants): any {
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

export class CasbDlpRulesCloudAppTenantsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CasbDlpRulesCloudAppTenants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbDlpRulesCloudAppTenants | undefined) {
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
export interface CasbDlpRulesCriteriaDomainProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function casbDlpRulesCriteriaDomainProfilesToTerraform(struct?: CasbDlpRulesCriteriaDomainProfilesOutputReference | CasbDlpRulesCriteriaDomainProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function casbDlpRulesCriteriaDomainProfilesToHclTerraform(struct?: CasbDlpRulesCriteriaDomainProfilesOutputReference | CasbDlpRulesCriteriaDomainProfiles): any {
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

export class CasbDlpRulesCriteriaDomainProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CasbDlpRulesCriteriaDomainProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbDlpRulesCriteriaDomainProfiles | undefined) {
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
export interface CasbDlpRulesDepartments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function casbDlpRulesDepartmentsToTerraform(struct?: CasbDlpRulesDepartmentsOutputReference | CasbDlpRulesDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function casbDlpRulesDepartmentsToHclTerraform(struct?: CasbDlpRulesDepartmentsOutputReference | CasbDlpRulesDepartments): any {
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

export class CasbDlpRulesDepartmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CasbDlpRulesDepartments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbDlpRulesDepartments | undefined) {
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
export interface CasbDlpRulesDlpEngines {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function casbDlpRulesDlpEnginesToTerraform(struct?: CasbDlpRulesDlpEnginesOutputReference | CasbDlpRulesDlpEngines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function casbDlpRulesDlpEnginesToHclTerraform(struct?: CasbDlpRulesDlpEnginesOutputReference | CasbDlpRulesDlpEngines): any {
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

export class CasbDlpRulesDlpEnginesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CasbDlpRulesDlpEngines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbDlpRulesDlpEngines | undefined) {
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
export interface CasbDlpRulesEmailRecipientProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function casbDlpRulesEmailRecipientProfilesToTerraform(struct?: CasbDlpRulesEmailRecipientProfilesOutputReference | CasbDlpRulesEmailRecipientProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function casbDlpRulesEmailRecipientProfilesToHclTerraform(struct?: CasbDlpRulesEmailRecipientProfilesOutputReference | CasbDlpRulesEmailRecipientProfiles): any {
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

export class CasbDlpRulesEmailRecipientProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CasbDlpRulesEmailRecipientProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbDlpRulesEmailRecipientProfiles | undefined) {
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
export interface CasbDlpRulesEntityGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function casbDlpRulesEntityGroupsToTerraform(struct?: CasbDlpRulesEntityGroupsOutputReference | CasbDlpRulesEntityGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function casbDlpRulesEntityGroupsToHclTerraform(struct?: CasbDlpRulesEntityGroupsOutputReference | CasbDlpRulesEntityGroups): any {
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

export class CasbDlpRulesEntityGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CasbDlpRulesEntityGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbDlpRulesEntityGroups | undefined) {
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
export interface CasbDlpRulesExcludedDomainProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function casbDlpRulesExcludedDomainProfilesToTerraform(struct?: CasbDlpRulesExcludedDomainProfilesOutputReference | CasbDlpRulesExcludedDomainProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function casbDlpRulesExcludedDomainProfilesToHclTerraform(struct?: CasbDlpRulesExcludedDomainProfilesOutputReference | CasbDlpRulesExcludedDomainProfiles): any {
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

export class CasbDlpRulesExcludedDomainProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CasbDlpRulesExcludedDomainProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbDlpRulesExcludedDomainProfiles | undefined) {
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
export interface CasbDlpRulesGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function casbDlpRulesGroupsToTerraform(struct?: CasbDlpRulesGroupsOutputReference | CasbDlpRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function casbDlpRulesGroupsToHclTerraform(struct?: CasbDlpRulesGroupsOutputReference | CasbDlpRulesGroups): any {
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

export class CasbDlpRulesGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CasbDlpRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbDlpRulesGroups | undefined) {
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
export interface CasbDlpRulesIncludedDomainProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function casbDlpRulesIncludedDomainProfilesToTerraform(struct?: CasbDlpRulesIncludedDomainProfilesOutputReference | CasbDlpRulesIncludedDomainProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function casbDlpRulesIncludedDomainProfilesToHclTerraform(struct?: CasbDlpRulesIncludedDomainProfilesOutputReference | CasbDlpRulesIncludedDomainProfiles): any {
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

export class CasbDlpRulesIncludedDomainProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CasbDlpRulesIncludedDomainProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbDlpRulesIncludedDomainProfiles | undefined) {
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
export interface CasbDlpRulesLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function casbDlpRulesLabelsToTerraform(struct?: CasbDlpRulesLabelsOutputReference | CasbDlpRulesLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function casbDlpRulesLabelsToHclTerraform(struct?: CasbDlpRulesLabelsOutputReference | CasbDlpRulesLabels): any {
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

export class CasbDlpRulesLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CasbDlpRulesLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbDlpRulesLabels | undefined) {
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
export interface CasbDlpRulesObjectTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function casbDlpRulesObjectTypesToTerraform(struct?: CasbDlpRulesObjectTypesOutputReference | CasbDlpRulesObjectTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function casbDlpRulesObjectTypesToHclTerraform(struct?: CasbDlpRulesObjectTypesOutputReference | CasbDlpRulesObjectTypes): any {
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

export class CasbDlpRulesObjectTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CasbDlpRulesObjectTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbDlpRulesObjectTypes | undefined) {
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
export interface CasbDlpRulesReceiverTenant {
  /**
  * Unique identifier for the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#name CasbDlpRules#name}
  */
  readonly name?: string;
}

export function casbDlpRulesReceiverTenantToTerraform(struct?: CasbDlpRulesReceiverTenantOutputReference | CasbDlpRulesReceiverTenant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function casbDlpRulesReceiverTenantToHclTerraform(struct?: CasbDlpRulesReceiverTenantOutputReference | CasbDlpRulesReceiverTenant): any {
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

export class CasbDlpRulesReceiverTenantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CasbDlpRulesReceiverTenant | undefined {
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

  public set internalValue(value: CasbDlpRulesReceiverTenant | undefined) {
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
export interface CasbDlpRulesReceiver {
  /**
  * Unique identifier for the receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name of the receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#name CasbDlpRules#name}
  */
  readonly name?: string;
  /**
  * Type of the receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#type CasbDlpRules#type}
  */
  readonly type?: string;
  /**
  * tenant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#tenant CasbDlpRules#tenant}
  */
  readonly tenant?: CasbDlpRulesReceiverTenant;
}

export function casbDlpRulesReceiverToTerraform(struct?: CasbDlpRulesReceiverOutputReference | CasbDlpRulesReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    tenant: casbDlpRulesReceiverTenantToTerraform(struct!.tenant),
  }
}


export function casbDlpRulesReceiverToHclTerraform(struct?: CasbDlpRulesReceiverOutputReference | CasbDlpRulesReceiver): any {
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
      value: casbDlpRulesReceiverTenantToHclTerraform(struct!.tenant),
      isBlock: true,
      type: "list",
      storageClassType: "CasbDlpRulesReceiverTenantList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasbDlpRulesReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CasbDlpRulesReceiver | undefined {
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

  public set internalValue(value: CasbDlpRulesReceiver | undefined) {
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
  private _tenant = new CasbDlpRulesReceiverTenantOutputReference(this, "tenant");
  public get tenant() {
    return this._tenant;
  }
  public putTenant(value: CasbDlpRulesReceiverTenant) {
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
export interface CasbDlpRulesRedactionProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function casbDlpRulesRedactionProfileToTerraform(struct?: CasbDlpRulesRedactionProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function casbDlpRulesRedactionProfileToHclTerraform(struct?: CasbDlpRulesRedactionProfile | cdktf.IResolvable): any {
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

export class CasbDlpRulesRedactionProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbDlpRulesRedactionProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CasbDlpRulesRedactionProfile | cdktf.IResolvable | undefined) {
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

export class CasbDlpRulesRedactionProfileList extends cdktf.ComplexList {
  public internalValue? : CasbDlpRulesRedactionProfile[] | cdktf.IResolvable

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
  public get(index: number): CasbDlpRulesRedactionProfileOutputReference {
    return new CasbDlpRulesRedactionProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbDlpRulesTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function casbDlpRulesTagToTerraform(struct?: CasbDlpRulesTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function casbDlpRulesTagToHclTerraform(struct?: CasbDlpRulesTag | cdktf.IResolvable): any {
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

export class CasbDlpRulesTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbDlpRulesTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CasbDlpRulesTag | cdktf.IResolvable | undefined) {
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

export class CasbDlpRulesTagList extends cdktf.ComplexList {
  public internalValue? : CasbDlpRulesTag[] | cdktf.IResolvable

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
  public get(index: number): CasbDlpRulesTagOutputReference {
    return new CasbDlpRulesTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbDlpRulesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#create CasbDlpRules#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#update CasbDlpRules#update}
  */
  readonly update?: string;
}

export function casbDlpRulesTimeoutsToTerraform(struct?: CasbDlpRulesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function casbDlpRulesTimeoutsToHclTerraform(struct?: CasbDlpRulesTimeouts | cdktf.IResolvable): any {
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

export class CasbDlpRulesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasbDlpRulesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CasbDlpRulesTimeouts | cdktf.IResolvable | undefined) {
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
export interface CasbDlpRulesUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function casbDlpRulesUsersToTerraform(struct?: CasbDlpRulesUsersOutputReference | CasbDlpRulesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function casbDlpRulesUsersToHclTerraform(struct?: CasbDlpRulesUsersOutputReference | CasbDlpRulesUsers): any {
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

export class CasbDlpRulesUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CasbDlpRulesUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbDlpRulesUsers | undefined) {
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
export interface CasbDlpRulesWatermarkProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function casbDlpRulesWatermarkProfileToTerraform(struct?: CasbDlpRulesWatermarkProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function casbDlpRulesWatermarkProfileToHclTerraform(struct?: CasbDlpRulesWatermarkProfile | cdktf.IResolvable): any {
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

export class CasbDlpRulesWatermarkProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbDlpRulesWatermarkProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CasbDlpRulesWatermarkProfile | cdktf.IResolvable | undefined) {
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

export class CasbDlpRulesWatermarkProfileList extends cdktf.ComplexList {
  public internalValue? : CasbDlpRulesWatermarkProfile[] | cdktf.IResolvable

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
  public get(index: number): CasbDlpRulesWatermarkProfileOutputReference {
    return new CasbDlpRulesWatermarkProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbDlpRulesZscalerIncidentReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#id CasbDlpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function casbDlpRulesZscalerIncidentReceiverToTerraform(struct?: CasbDlpRulesZscalerIncidentReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function casbDlpRulesZscalerIncidentReceiverToHclTerraform(struct?: CasbDlpRulesZscalerIncidentReceiver | cdktf.IResolvable): any {
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

export class CasbDlpRulesZscalerIncidentReceiverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbDlpRulesZscalerIncidentReceiver | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CasbDlpRulesZscalerIncidentReceiver | cdktf.IResolvable | undefined) {
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

export class CasbDlpRulesZscalerIncidentReceiverList extends cdktf.ComplexList {
  public internalValue? : CasbDlpRulesZscalerIncidentReceiver[] | cdktf.IResolvable

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
  public get(index: number): CasbDlpRulesZscalerIncidentReceiverOutputReference {
    return new CasbDlpRulesZscalerIncidentReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules zia_casb_dlp_rules}
*/
export class CasbDlpRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_casb_dlp_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CasbDlpRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CasbDlpRules to import
  * @param importFromId The id of the existing CasbDlpRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CasbDlpRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_casb_dlp_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/casb_dlp_rules zia_casb_dlp_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CasbDlpRulesConfig
  */
  public constructor(scope: Construct, id: string, config: CasbDlpRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_casb_dlp_rules',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.2',
        providerVersionConstraint: '4.6.2'
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
    this._bucketOwner = config.bucketOwner;
    this._collaborationScope = config.collaborationScope;
    this._components = config.components;
    this._contentLocation = config.contentLocation;
    this._description = config.description;
    this._domains = config.domains;
    this._externalAuditorEmail = config.externalAuditorEmail;
    this._fileTypes = config.fileTypes;
    this._includeCriteriaDomainProfile = config.includeCriteriaDomainProfile;
    this._includeEmailRecipientProfile = config.includeEmailRecipientProfile;
    this._includeEntityGroups = config.includeEntityGroups;
    this._name = config.name;
    this._order = config.order;
    this._quarantineLocation = config.quarantineLocation;
    this._rank = config.rank;
    this._recipient = config.recipient;
    this._severity = config.severity;
    this._state = config.state;
    this._type = config.type;
    this._watermarkDeleteOldVersion = config.watermarkDeleteOldVersion;
    this._withoutContentInspection = config.withoutContentInspection;
    this._auditorNotification.internalValue = config.auditorNotification;
    this._buckets.internalValue = config.buckets;
    this._casbEmailLabel.internalValue = config.casbEmailLabel;
    this._casbTombstoneTemplate.internalValue = config.casbTombstoneTemplate;
    this._cloudAppTenants.internalValue = config.cloudAppTenants;
    this._criteriaDomainProfiles.internalValue = config.criteriaDomainProfiles;
    this._departments.internalValue = config.departments;
    this._dlpEngines.internalValue = config.dlpEngines;
    this._emailRecipientProfiles.internalValue = config.emailRecipientProfiles;
    this._entityGroups.internalValue = config.entityGroups;
    this._excludedDomainProfiles.internalValue = config.excludedDomainProfiles;
    this._groups.internalValue = config.groups;
    this._includedDomainProfiles.internalValue = config.includedDomainProfiles;
    this._labels.internalValue = config.labels;
    this._objectTypes.internalValue = config.objectTypes;
    this._receiver.internalValue = config.receiver;
    this._redactionProfile.internalValue = config.redactionProfile;
    this._tag.internalValue = config.tag;
    this._timeouts.internalValue = config.timeouts;
    this._users.internalValue = config.users;
    this._watermarkProfile.internalValue = config.watermarkProfile;
    this._zscalerIncidentReceiver.internalValue = config.zscalerIncidentReceiver;
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

  // bucket_owner - computed: false, optional: true, required: false
  private _bucketOwner?: string; 
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  public resetBucketOwner() {
    this._bucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
  }

  // collaboration_scope - computed: false, optional: true, required: false
  private _collaborationScope?: string[]; 
  public get collaborationScope() {
    return cdktf.Fn.tolist(this.getListAttribute('collaboration_scope'));
  }
  public set collaborationScope(value: string[]) {
    this._collaborationScope = value;
  }
  public resetCollaborationScope() {
    this._collaborationScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collaborationScopeInput() {
    return this._collaborationScope;
  }

  // components - computed: false, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return cdktf.Fn.tolist(this.getListAttribute('components'));
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // content_location - computed: false, optional: true, required: false
  private _contentLocation?: string; 
  public get contentLocation() {
    return this.getStringAttribute('content_location');
  }
  public set contentLocation(value: string) {
    this._contentLocation = value;
  }
  public resetContentLocation() {
    this._contentLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLocationInput() {
    return this._contentLocation;
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

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
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

  // file_types - computed: false, optional: true, required: false
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

  // include_criteria_domain_profile - computed: false, optional: true, required: false
  private _includeCriteriaDomainProfile?: boolean | cdktf.IResolvable; 
  public get includeCriteriaDomainProfile() {
    return this.getBooleanAttribute('include_criteria_domain_profile');
  }
  public set includeCriteriaDomainProfile(value: boolean | cdktf.IResolvable) {
    this._includeCriteriaDomainProfile = value;
  }
  public resetIncludeCriteriaDomainProfile() {
    this._includeCriteriaDomainProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCriteriaDomainProfileInput() {
    return this._includeCriteriaDomainProfile;
  }

  // include_email_recipient_profile - computed: false, optional: true, required: false
  private _includeEmailRecipientProfile?: boolean | cdktf.IResolvable; 
  public get includeEmailRecipientProfile() {
    return this.getBooleanAttribute('include_email_recipient_profile');
  }
  public set includeEmailRecipientProfile(value: boolean | cdktf.IResolvable) {
    this._includeEmailRecipientProfile = value;
  }
  public resetIncludeEmailRecipientProfile() {
    this._includeEmailRecipientProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeEmailRecipientProfileInput() {
    return this._includeEmailRecipientProfile;
  }

  // include_entity_groups - computed: true, optional: true, required: false
  private _includeEntityGroups?: boolean | cdktf.IResolvable; 
  public get includeEntityGroups() {
    return this.getBooleanAttribute('include_entity_groups');
  }
  public set includeEntityGroups(value: boolean | cdktf.IResolvable) {
    this._includeEntityGroups = value;
  }
  public resetIncludeEntityGroups() {
    this._includeEntityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeEntityGroupsInput() {
    return this._includeEntityGroups;
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

  // quarantine_location - computed: false, optional: true, required: false
  private _quarantineLocation?: string; 
  public get quarantineLocation() {
    return this.getStringAttribute('quarantine_location');
  }
  public set quarantineLocation(value: string) {
    this._quarantineLocation = value;
  }
  public resetQuarantineLocation() {
    this._quarantineLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineLocationInput() {
    return this._quarantineLocation;
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

  // recipient - computed: false, optional: true, required: false
  private _recipient?: string; 
  public get recipient() {
    return this.getStringAttribute('recipient');
  }
  public set recipient(value: string) {
    this._recipient = value;
  }
  public resetRecipient() {
    this._recipient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientInput() {
    return this._recipient;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }

  // severity - computed: false, optional: true, required: false
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

  // watermark_delete_old_version - computed: false, optional: true, required: false
  private _watermarkDeleteOldVersion?: boolean | cdktf.IResolvable; 
  public get watermarkDeleteOldVersion() {
    return this.getBooleanAttribute('watermark_delete_old_version');
  }
  public set watermarkDeleteOldVersion(value: boolean | cdktf.IResolvable) {
    this._watermarkDeleteOldVersion = value;
  }
  public resetWatermarkDeleteOldVersion() {
    this._watermarkDeleteOldVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkDeleteOldVersionInput() {
    return this._watermarkDeleteOldVersion;
  }

  // without_content_inspection - computed: false, optional: true, required: false
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

  // auditor_notification - computed: false, optional: true, required: false
  private _auditorNotification = new CasbDlpRulesAuditorNotificationList(this, "auditor_notification", true);
  public get auditorNotification() {
    return this._auditorNotification;
  }
  public putAuditorNotification(value: CasbDlpRulesAuditorNotification[] | cdktf.IResolvable) {
    this._auditorNotification.internalValue = value;
  }
  public resetAuditorNotification() {
    this._auditorNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditorNotificationInput() {
    return this._auditorNotification.internalValue;
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets = new CasbDlpRulesBucketsOutputReference(this, "buckets");
  public get buckets() {
    return this._buckets;
  }
  public putBuckets(value: CasbDlpRulesBuckets) {
    this._buckets.internalValue = value;
  }
  public resetBuckets() {
    this._buckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets.internalValue;
  }

  // casb_email_label - computed: false, optional: true, required: false
  private _casbEmailLabel = new CasbDlpRulesCasbEmailLabelList(this, "casb_email_label", true);
  public get casbEmailLabel() {
    return this._casbEmailLabel;
  }
  public putCasbEmailLabel(value: CasbDlpRulesCasbEmailLabel[] | cdktf.IResolvable) {
    this._casbEmailLabel.internalValue = value;
  }
  public resetCasbEmailLabel() {
    this._casbEmailLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbEmailLabelInput() {
    return this._casbEmailLabel.internalValue;
  }

  // casb_tombstone_template - computed: false, optional: true, required: false
  private _casbTombstoneTemplate = new CasbDlpRulesCasbTombstoneTemplateList(this, "casb_tombstone_template", true);
  public get casbTombstoneTemplate() {
    return this._casbTombstoneTemplate;
  }
  public putCasbTombstoneTemplate(value: CasbDlpRulesCasbTombstoneTemplate[] | cdktf.IResolvable) {
    this._casbTombstoneTemplate.internalValue = value;
  }
  public resetCasbTombstoneTemplate() {
    this._casbTombstoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbTombstoneTemplateInput() {
    return this._casbTombstoneTemplate.internalValue;
  }

  // cloud_app_tenants - computed: false, optional: true, required: false
  private _cloudAppTenants = new CasbDlpRulesCloudAppTenantsOutputReference(this, "cloud_app_tenants");
  public get cloudAppTenants() {
    return this._cloudAppTenants;
  }
  public putCloudAppTenants(value: CasbDlpRulesCloudAppTenants) {
    this._cloudAppTenants.internalValue = value;
  }
  public resetCloudAppTenants() {
    this._cloudAppTenants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAppTenantsInput() {
    return this._cloudAppTenants.internalValue;
  }

  // criteria_domain_profiles - computed: false, optional: true, required: false
  private _criteriaDomainProfiles = new CasbDlpRulesCriteriaDomainProfilesOutputReference(this, "criteria_domain_profiles");
  public get criteriaDomainProfiles() {
    return this._criteriaDomainProfiles;
  }
  public putCriteriaDomainProfiles(value: CasbDlpRulesCriteriaDomainProfiles) {
    this._criteriaDomainProfiles.internalValue = value;
  }
  public resetCriteriaDomainProfiles() {
    this._criteriaDomainProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaDomainProfilesInput() {
    return this._criteriaDomainProfiles.internalValue;
  }

  // departments - computed: false, optional: true, required: false
  private _departments = new CasbDlpRulesDepartmentsOutputReference(this, "departments");
  public get departments() {
    return this._departments;
  }
  public putDepartments(value: CasbDlpRulesDepartments) {
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
  private _dlpEngines = new CasbDlpRulesDlpEnginesOutputReference(this, "dlp_engines");
  public get dlpEngines() {
    return this._dlpEngines;
  }
  public putDlpEngines(value: CasbDlpRulesDlpEngines) {
    this._dlpEngines.internalValue = value;
  }
  public resetDlpEngines() {
    this._dlpEngines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpEnginesInput() {
    return this._dlpEngines.internalValue;
  }

  // email_recipient_profiles - computed: false, optional: true, required: false
  private _emailRecipientProfiles = new CasbDlpRulesEmailRecipientProfilesOutputReference(this, "email_recipient_profiles");
  public get emailRecipientProfiles() {
    return this._emailRecipientProfiles;
  }
  public putEmailRecipientProfiles(value: CasbDlpRulesEmailRecipientProfiles) {
    this._emailRecipientProfiles.internalValue = value;
  }
  public resetEmailRecipientProfiles() {
    this._emailRecipientProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailRecipientProfilesInput() {
    return this._emailRecipientProfiles.internalValue;
  }

  // entity_groups - computed: false, optional: true, required: false
  private _entityGroups = new CasbDlpRulesEntityGroupsOutputReference(this, "entity_groups");
  public get entityGroups() {
    return this._entityGroups;
  }
  public putEntityGroups(value: CasbDlpRulesEntityGroups) {
    this._entityGroups.internalValue = value;
  }
  public resetEntityGroups() {
    this._entityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityGroupsInput() {
    return this._entityGroups.internalValue;
  }

  // excluded_domain_profiles - computed: false, optional: true, required: false
  private _excludedDomainProfiles = new CasbDlpRulesExcludedDomainProfilesOutputReference(this, "excluded_domain_profiles");
  public get excludedDomainProfiles() {
    return this._excludedDomainProfiles;
  }
  public putExcludedDomainProfiles(value: CasbDlpRulesExcludedDomainProfiles) {
    this._excludedDomainProfiles.internalValue = value;
  }
  public resetExcludedDomainProfiles() {
    this._excludedDomainProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedDomainProfilesInput() {
    return this._excludedDomainProfiles.internalValue;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new CasbDlpRulesGroupsOutputReference(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: CasbDlpRulesGroups) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // included_domain_profiles - computed: false, optional: true, required: false
  private _includedDomainProfiles = new CasbDlpRulesIncludedDomainProfilesOutputReference(this, "included_domain_profiles");
  public get includedDomainProfiles() {
    return this._includedDomainProfiles;
  }
  public putIncludedDomainProfiles(value: CasbDlpRulesIncludedDomainProfiles) {
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
  private _labels = new CasbDlpRulesLabelsOutputReference(this, "labels");
  public get labels() {
    return this._labels;
  }
  public putLabels(value: CasbDlpRulesLabels) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // object_types - computed: false, optional: true, required: false
  private _objectTypes = new CasbDlpRulesObjectTypesOutputReference(this, "object_types");
  public get objectTypes() {
    return this._objectTypes;
  }
  public putObjectTypes(value: CasbDlpRulesObjectTypes) {
    this._objectTypes.internalValue = value;
  }
  public resetObjectTypes() {
    this._objectTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypesInput() {
    return this._objectTypes.internalValue;
  }

  // receiver - computed: false, optional: true, required: false
  private _receiver = new CasbDlpRulesReceiverOutputReference(this, "receiver");
  public get receiver() {
    return this._receiver;
  }
  public putReceiver(value: CasbDlpRulesReceiver) {
    this._receiver.internalValue = value;
  }
  public resetReceiver() {
    this._receiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverInput() {
    return this._receiver.internalValue;
  }

  // redaction_profile - computed: false, optional: true, required: false
  private _redactionProfile = new CasbDlpRulesRedactionProfileList(this, "redaction_profile", true);
  public get redactionProfile() {
    return this._redactionProfile;
  }
  public putRedactionProfile(value: CasbDlpRulesRedactionProfile[] | cdktf.IResolvable) {
    this._redactionProfile.internalValue = value;
  }
  public resetRedactionProfile() {
    this._redactionProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionProfileInput() {
    return this._redactionProfile.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new CasbDlpRulesTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: CasbDlpRulesTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CasbDlpRulesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CasbDlpRulesTimeouts) {
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
  private _users = new CasbDlpRulesUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: CasbDlpRulesUsers) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // watermark_profile - computed: false, optional: true, required: false
  private _watermarkProfile = new CasbDlpRulesWatermarkProfileList(this, "watermark_profile", true);
  public get watermarkProfile() {
    return this._watermarkProfile;
  }
  public putWatermarkProfile(value: CasbDlpRulesWatermarkProfile[] | cdktf.IResolvable) {
    this._watermarkProfile.internalValue = value;
  }
  public resetWatermarkProfile() {
    this._watermarkProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkProfileInput() {
    return this._watermarkProfile.internalValue;
  }

  // zscaler_incident_receiver - computed: false, optional: true, required: false
  private _zscalerIncidentReceiver = new CasbDlpRulesZscalerIncidentReceiverList(this, "zscaler_incident_receiver", true);
  public get zscalerIncidentReceiver() {
    return this._zscalerIncidentReceiver;
  }
  public putZscalerIncidentReceiver(value: CasbDlpRulesZscalerIncidentReceiver[] | cdktf.IResolvable) {
    this._zscalerIncidentReceiver.internalValue = value;
  }
  public resetZscalerIncidentReceiver() {
    this._zscalerIncidentReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerIncidentReceiverInput() {
    return this._zscalerIncidentReceiver.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      bucket_owner: cdktf.stringToTerraform(this._bucketOwner),
      collaboration_scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._collaborationScope),
      components: cdktf.listMapper(cdktf.stringToTerraform, false)(this._components),
      content_location: cdktf.stringToTerraform(this._contentLocation),
      description: cdktf.stringToTerraform(this._description),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      external_auditor_email: cdktf.stringToTerraform(this._externalAuditorEmail),
      file_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileTypes),
      include_criteria_domain_profile: cdktf.booleanToTerraform(this._includeCriteriaDomainProfile),
      include_email_recipient_profile: cdktf.booleanToTerraform(this._includeEmailRecipientProfile),
      include_entity_groups: cdktf.booleanToTerraform(this._includeEntityGroups),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      quarantine_location: cdktf.stringToTerraform(this._quarantineLocation),
      rank: cdktf.numberToTerraform(this._rank),
      recipient: cdktf.stringToTerraform(this._recipient),
      severity: cdktf.stringToTerraform(this._severity),
      state: cdktf.stringToTerraform(this._state),
      type: cdktf.stringToTerraform(this._type),
      watermark_delete_old_version: cdktf.booleanToTerraform(this._watermarkDeleteOldVersion),
      without_content_inspection: cdktf.booleanToTerraform(this._withoutContentInspection),
      auditor_notification: cdktf.listMapper(casbDlpRulesAuditorNotificationToTerraform, true)(this._auditorNotification.internalValue),
      buckets: casbDlpRulesBucketsToTerraform(this._buckets.internalValue),
      casb_email_label: cdktf.listMapper(casbDlpRulesCasbEmailLabelToTerraform, true)(this._casbEmailLabel.internalValue),
      casb_tombstone_template: cdktf.listMapper(casbDlpRulesCasbTombstoneTemplateToTerraform, true)(this._casbTombstoneTemplate.internalValue),
      cloud_app_tenants: casbDlpRulesCloudAppTenantsToTerraform(this._cloudAppTenants.internalValue),
      criteria_domain_profiles: casbDlpRulesCriteriaDomainProfilesToTerraform(this._criteriaDomainProfiles.internalValue),
      departments: casbDlpRulesDepartmentsToTerraform(this._departments.internalValue),
      dlp_engines: casbDlpRulesDlpEnginesToTerraform(this._dlpEngines.internalValue),
      email_recipient_profiles: casbDlpRulesEmailRecipientProfilesToTerraform(this._emailRecipientProfiles.internalValue),
      entity_groups: casbDlpRulesEntityGroupsToTerraform(this._entityGroups.internalValue),
      excluded_domain_profiles: casbDlpRulesExcludedDomainProfilesToTerraform(this._excludedDomainProfiles.internalValue),
      groups: casbDlpRulesGroupsToTerraform(this._groups.internalValue),
      included_domain_profiles: casbDlpRulesIncludedDomainProfilesToTerraform(this._includedDomainProfiles.internalValue),
      labels: casbDlpRulesLabelsToTerraform(this._labels.internalValue),
      object_types: casbDlpRulesObjectTypesToTerraform(this._objectTypes.internalValue),
      receiver: casbDlpRulesReceiverToTerraform(this._receiver.internalValue),
      redaction_profile: cdktf.listMapper(casbDlpRulesRedactionProfileToTerraform, true)(this._redactionProfile.internalValue),
      tag: cdktf.listMapper(casbDlpRulesTagToTerraform, true)(this._tag.internalValue),
      timeouts: casbDlpRulesTimeoutsToTerraform(this._timeouts.internalValue),
      users: casbDlpRulesUsersToTerraform(this._users.internalValue),
      watermark_profile: cdktf.listMapper(casbDlpRulesWatermarkProfileToTerraform, true)(this._watermarkProfile.internalValue),
      zscaler_incident_receiver: cdktf.listMapper(casbDlpRulesZscalerIncidentReceiverToTerraform, true)(this._zscalerIncidentReceiver.internalValue),
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
      bucket_owner: {
        value: cdktf.stringToHclTerraform(this._bucketOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collaboration_scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._collaborationScope),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      components: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._components),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      content_location: {
        value: cdktf.stringToHclTerraform(this._contentLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      include_criteria_domain_profile: {
        value: cdktf.booleanToHclTerraform(this._includeCriteriaDomainProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_email_recipient_profile: {
        value: cdktf.booleanToHclTerraform(this._includeEmailRecipientProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_entity_groups: {
        value: cdktf.booleanToHclTerraform(this._includeEntityGroups),
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
      quarantine_location: {
        value: cdktf.stringToHclTerraform(this._quarantineLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rank: {
        value: cdktf.numberToHclTerraform(this._rank),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recipient: {
        value: cdktf.stringToHclTerraform(this._recipient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      watermark_delete_old_version: {
        value: cdktf.booleanToHclTerraform(this._watermarkDeleteOldVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      without_content_inspection: {
        value: cdktf.booleanToHclTerraform(this._withoutContentInspection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auditor_notification: {
        value: cdktf.listMapperHcl(casbDlpRulesAuditorNotificationToHclTerraform, true)(this._auditorNotification.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesAuditorNotificationList",
      },
      buckets: {
        value: casbDlpRulesBucketsToHclTerraform(this._buckets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesBucketsList",
      },
      casb_email_label: {
        value: cdktf.listMapperHcl(casbDlpRulesCasbEmailLabelToHclTerraform, true)(this._casbEmailLabel.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesCasbEmailLabelList",
      },
      casb_tombstone_template: {
        value: cdktf.listMapperHcl(casbDlpRulesCasbTombstoneTemplateToHclTerraform, true)(this._casbTombstoneTemplate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesCasbTombstoneTemplateList",
      },
      cloud_app_tenants: {
        value: casbDlpRulesCloudAppTenantsToHclTerraform(this._cloudAppTenants.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesCloudAppTenantsList",
      },
      criteria_domain_profiles: {
        value: casbDlpRulesCriteriaDomainProfilesToHclTerraform(this._criteriaDomainProfiles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesCriteriaDomainProfilesList",
      },
      departments: {
        value: casbDlpRulesDepartmentsToHclTerraform(this._departments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesDepartmentsList",
      },
      dlp_engines: {
        value: casbDlpRulesDlpEnginesToHclTerraform(this._dlpEngines.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesDlpEnginesList",
      },
      email_recipient_profiles: {
        value: casbDlpRulesEmailRecipientProfilesToHclTerraform(this._emailRecipientProfiles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesEmailRecipientProfilesList",
      },
      entity_groups: {
        value: casbDlpRulesEntityGroupsToHclTerraform(this._entityGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesEntityGroupsList",
      },
      excluded_domain_profiles: {
        value: casbDlpRulesExcludedDomainProfilesToHclTerraform(this._excludedDomainProfiles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesExcludedDomainProfilesList",
      },
      groups: {
        value: casbDlpRulesGroupsToHclTerraform(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesGroupsList",
      },
      included_domain_profiles: {
        value: casbDlpRulesIncludedDomainProfilesToHclTerraform(this._includedDomainProfiles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesIncludedDomainProfilesList",
      },
      labels: {
        value: casbDlpRulesLabelsToHclTerraform(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesLabelsList",
      },
      object_types: {
        value: casbDlpRulesObjectTypesToHclTerraform(this._objectTypes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesObjectTypesList",
      },
      receiver: {
        value: casbDlpRulesReceiverToHclTerraform(this._receiver.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesReceiverList",
      },
      redaction_profile: {
        value: cdktf.listMapperHcl(casbDlpRulesRedactionProfileToHclTerraform, true)(this._redactionProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesRedactionProfileList",
      },
      tag: {
        value: cdktf.listMapperHcl(casbDlpRulesTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesTagList",
      },
      timeouts: {
        value: casbDlpRulesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CasbDlpRulesTimeouts",
      },
      users: {
        value: casbDlpRulesUsersToHclTerraform(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesUsersList",
      },
      watermark_profile: {
        value: cdktf.listMapperHcl(casbDlpRulesWatermarkProfileToHclTerraform, true)(this._watermarkProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesWatermarkProfileList",
      },
      zscaler_incident_receiver: {
        value: cdktf.listMapperHcl(casbDlpRulesZscalerIncidentReceiverToHclTerraform, true)(this._zscalerIncidentReceiver.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CasbDlpRulesZscalerIncidentReceiverList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
