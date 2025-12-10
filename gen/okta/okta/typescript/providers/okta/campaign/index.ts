// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CampaignConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates the minimum required SKU to manage the campaign. Values can be `BASIC` and `PREMIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#campaign_tier Campaign#campaign_tier}
  */
  readonly campaignTier?: string;
  /**
  * Identifies if it is a resource campaign or a user campaign. By default it is RESOURCE.Values can be `RESOURCE` and `USER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#campaign_type Campaign#campaign_type}
  */
  readonly campaignType?: string;
  /**
  * Description about the campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#description Campaign#description}
  */
  readonly description?: string;
  /**
  * Name of the campaign. Maintain some uniqueness when naming the campaign as it helps to identify and filter for campaigns when needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#name Campaign#name}
  */
  readonly name: string;
  /**
  * If true, skip remediation when ending the campaign (only applicable if remediationSetting.noResponse=DENY).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#skip_remediation Campaign#skip_remediation}
  */
  readonly skipRemediation?: boolean | cdktf.IResolvable;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#notification_settings Campaign#notification_settings}
  */
  readonly notificationSettings?: CampaignNotificationSettings;
  /**
  * principal_scope_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#principal_scope_settings Campaign#principal_scope_settings}
  */
  readonly principalScopeSettings?: CampaignPrincipalScopeSettings;
  /**
  * remediation_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#remediation_settings Campaign#remediation_settings}
  */
  readonly remediationSettings?: CampaignRemediationSettings;
  /**
  * resource_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#resource_settings Campaign#resource_settings}
  */
  readonly resourceSettings?: CampaignResourceSettings;
  /**
  * reviewer_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#reviewer_settings Campaign#reviewer_settings}
  */
  readonly reviewerSettings?: CampaignReviewerSettings;
  /**
  * schedule_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#schedule_settings Campaign#schedule_settings}
  */
  readonly scheduleSettings?: CampaignScheduleSettings;
}
export interface CampaignNotificationSettings {
  /**
  * To indicate whether a notification should be sent to the reviewer when a given reviewer level period is about to end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#notify_review_period_end Campaign#notify_review_period_end}
  */
  readonly notifyReviewPeriodEnd: boolean | cdktf.IResolvable;
  /**
  * To indicate whether a notification should be sent to the reviewers when campaign has come to an end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#notify_reviewer_at_campaign_end Campaign#notify_reviewer_at_campaign_end}
  */
  readonly notifyReviewerAtCampaignEnd: boolean | cdktf.IResolvable;
  /**
  * To indicate whether a notification should be sent to the reviewer during the midpoint of the review process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#notify_reviewer_during_midpoint_of_review Campaign#notify_reviewer_during_midpoint_of_review}
  */
  readonly notifyReviewerDuringMidpointOfReview: boolean | cdktf.IResolvable;
  /**
  * To indicate whether a notification should be sent to the reviewer when the review is overdue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#notify_reviewer_when_overdue Campaign#notify_reviewer_when_overdue}
  */
  readonly notifyReviewerWhenOverdue: boolean | cdktf.IResolvable;
  /**
  * To indicate whether a notification should be sent to the reviewer when actionable reviews are assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#notify_reviewer_when_review_assigned Campaign#notify_reviewer_when_review_assigned}
  */
  readonly notifyReviewerWhenReviewAssigned: boolean | cdktf.IResolvable;
  /**
  * Specifies times (in seconds) to send reminders to reviewers before the campaign closes. Max 3 values. Example: [86400, 172800, 604800]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#reminders_reviewer_before_campaign_close_in_secs Campaign#reminders_reviewer_before_campaign_close_in_secs}
  */
  readonly remindersReviewerBeforeCampaignCloseInSecs?: number[];
}

export function campaignNotificationSettingsToTerraform(struct?: CampaignNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notify_review_period_end: cdktf.booleanToTerraform(struct!.notifyReviewPeriodEnd),
    notify_reviewer_at_campaign_end: cdktf.booleanToTerraform(struct!.notifyReviewerAtCampaignEnd),
    notify_reviewer_during_midpoint_of_review: cdktf.booleanToTerraform(struct!.notifyReviewerDuringMidpointOfReview),
    notify_reviewer_when_overdue: cdktf.booleanToTerraform(struct!.notifyReviewerWhenOverdue),
    notify_reviewer_when_review_assigned: cdktf.booleanToTerraform(struct!.notifyReviewerWhenReviewAssigned),
    reminders_reviewer_before_campaign_close_in_secs: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.remindersReviewerBeforeCampaignCloseInSecs),
  }
}


export function campaignNotificationSettingsToHclTerraform(struct?: CampaignNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notify_review_period_end: {
      value: cdktf.booleanToHclTerraform(struct!.notifyReviewPeriodEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_reviewer_at_campaign_end: {
      value: cdktf.booleanToHclTerraform(struct!.notifyReviewerAtCampaignEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_reviewer_during_midpoint_of_review: {
      value: cdktf.booleanToHclTerraform(struct!.notifyReviewerDuringMidpointOfReview),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_reviewer_when_overdue: {
      value: cdktf.booleanToHclTerraform(struct!.notifyReviewerWhenOverdue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_reviewer_when_review_assigned: {
      value: cdktf.booleanToHclTerraform(struct!.notifyReviewerWhenReviewAssigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reminders_reviewer_before_campaign_close_in_secs: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.remindersReviewerBeforeCampaignCloseInSecs),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CampaignNotificationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifyReviewPeriodEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyReviewPeriodEnd = this._notifyReviewPeriodEnd;
    }
    if (this._notifyReviewerAtCampaignEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyReviewerAtCampaignEnd = this._notifyReviewerAtCampaignEnd;
    }
    if (this._notifyReviewerDuringMidpointOfReview !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyReviewerDuringMidpointOfReview = this._notifyReviewerDuringMidpointOfReview;
    }
    if (this._notifyReviewerWhenOverdue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyReviewerWhenOverdue = this._notifyReviewerWhenOverdue;
    }
    if (this._notifyReviewerWhenReviewAssigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyReviewerWhenReviewAssigned = this._notifyReviewerWhenReviewAssigned;
    }
    if (this._remindersReviewerBeforeCampaignCloseInSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remindersReviewerBeforeCampaignCloseInSecs = this._remindersReviewerBeforeCampaignCloseInSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CampaignNotificationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notifyReviewPeriodEnd = undefined;
      this._notifyReviewerAtCampaignEnd = undefined;
      this._notifyReviewerDuringMidpointOfReview = undefined;
      this._notifyReviewerWhenOverdue = undefined;
      this._notifyReviewerWhenReviewAssigned = undefined;
      this._remindersReviewerBeforeCampaignCloseInSecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notifyReviewPeriodEnd = value.notifyReviewPeriodEnd;
      this._notifyReviewerAtCampaignEnd = value.notifyReviewerAtCampaignEnd;
      this._notifyReviewerDuringMidpointOfReview = value.notifyReviewerDuringMidpointOfReview;
      this._notifyReviewerWhenOverdue = value.notifyReviewerWhenOverdue;
      this._notifyReviewerWhenReviewAssigned = value.notifyReviewerWhenReviewAssigned;
      this._remindersReviewerBeforeCampaignCloseInSecs = value.remindersReviewerBeforeCampaignCloseInSecs;
    }
  }

  // notify_review_period_end - computed: false, optional: false, required: true
  private _notifyReviewPeriodEnd?: boolean | cdktf.IResolvable; 
  public get notifyReviewPeriodEnd() {
    return this.getBooleanAttribute('notify_review_period_end');
  }
  public set notifyReviewPeriodEnd(value: boolean | cdktf.IResolvable) {
    this._notifyReviewPeriodEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyReviewPeriodEndInput() {
    return this._notifyReviewPeriodEnd;
  }

  // notify_reviewer_at_campaign_end - computed: false, optional: false, required: true
  private _notifyReviewerAtCampaignEnd?: boolean | cdktf.IResolvable; 
  public get notifyReviewerAtCampaignEnd() {
    return this.getBooleanAttribute('notify_reviewer_at_campaign_end');
  }
  public set notifyReviewerAtCampaignEnd(value: boolean | cdktf.IResolvable) {
    this._notifyReviewerAtCampaignEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyReviewerAtCampaignEndInput() {
    return this._notifyReviewerAtCampaignEnd;
  }

  // notify_reviewer_during_midpoint_of_review - computed: false, optional: false, required: true
  private _notifyReviewerDuringMidpointOfReview?: boolean | cdktf.IResolvable; 
  public get notifyReviewerDuringMidpointOfReview() {
    return this.getBooleanAttribute('notify_reviewer_during_midpoint_of_review');
  }
  public set notifyReviewerDuringMidpointOfReview(value: boolean | cdktf.IResolvable) {
    this._notifyReviewerDuringMidpointOfReview = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyReviewerDuringMidpointOfReviewInput() {
    return this._notifyReviewerDuringMidpointOfReview;
  }

  // notify_reviewer_when_overdue - computed: false, optional: false, required: true
  private _notifyReviewerWhenOverdue?: boolean | cdktf.IResolvable; 
  public get notifyReviewerWhenOverdue() {
    return this.getBooleanAttribute('notify_reviewer_when_overdue');
  }
  public set notifyReviewerWhenOverdue(value: boolean | cdktf.IResolvable) {
    this._notifyReviewerWhenOverdue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyReviewerWhenOverdueInput() {
    return this._notifyReviewerWhenOverdue;
  }

  // notify_reviewer_when_review_assigned - computed: false, optional: false, required: true
  private _notifyReviewerWhenReviewAssigned?: boolean | cdktf.IResolvable; 
  public get notifyReviewerWhenReviewAssigned() {
    return this.getBooleanAttribute('notify_reviewer_when_review_assigned');
  }
  public set notifyReviewerWhenReviewAssigned(value: boolean | cdktf.IResolvable) {
    this._notifyReviewerWhenReviewAssigned = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyReviewerWhenReviewAssignedInput() {
    return this._notifyReviewerWhenReviewAssigned;
  }

  // reminders_reviewer_before_campaign_close_in_secs - computed: true, optional: true, required: false
  private _remindersReviewerBeforeCampaignCloseInSecs?: number[]; 
  public get remindersReviewerBeforeCampaignCloseInSecs() {
    return this.getNumberListAttribute('reminders_reviewer_before_campaign_close_in_secs');
  }
  public set remindersReviewerBeforeCampaignCloseInSecs(value: number[]) {
    this._remindersReviewerBeforeCampaignCloseInSecs = value;
  }
  public resetRemindersReviewerBeforeCampaignCloseInSecs() {
    this._remindersReviewerBeforeCampaignCloseInSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remindersReviewerBeforeCampaignCloseInSecsInput() {
    return this._remindersReviewerBeforeCampaignCloseInSecs;
  }
}
export interface CampaignPrincipalScopeSettingsPredefinedInactiveUsersScope {
  /**
  * The duration the users have not used single sign on (SSO) to access their account within the specific time frame. Minimum 30 days and maximum 365 days are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#inactive_days Campaign#inactive_days}
  */
  readonly inactiveDays?: number;
}

export function campaignPrincipalScopeSettingsPredefinedInactiveUsersScopeToTerraform(struct?: CampaignPrincipalScopeSettingsPredefinedInactiveUsersScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inactive_days: cdktf.numberToTerraform(struct!.inactiveDays),
  }
}


export function campaignPrincipalScopeSettingsPredefinedInactiveUsersScopeToHclTerraform(struct?: CampaignPrincipalScopeSettingsPredefinedInactiveUsersScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inactive_days: {
      value: cdktf.numberToHclTerraform(struct!.inactiveDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CampaignPrincipalScopeSettingsPredefinedInactiveUsersScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inactiveDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactiveDays = this._inactiveDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CampaignPrincipalScopeSettingsPredefinedInactiveUsersScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inactiveDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inactiveDays = value.inactiveDays;
    }
  }

  // inactive_days - computed: false, optional: true, required: false
  private _inactiveDays?: number; 
  public get inactiveDays() {
    return this.getNumberAttribute('inactive_days');
  }
  public set inactiveDays(value: number) {
    this._inactiveDays = value;
  }
  public resetInactiveDays() {
    this._inactiveDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveDaysInput() {
    return this._inactiveDays;
  }
}

export class CampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeList extends cdktf.ComplexList {
  public internalValue? : CampaignPrincipalScopeSettingsPredefinedInactiveUsersScope[] | cdktf.IResolvable

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
  public get(index: number): CampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeOutputReference {
    return new CampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CampaignPrincipalScopeSettings {
  /**
  * An array of Okta user IDs excluded from access certification or the campaign. This field is optional. A maximum of 50 users can be specified in the array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#excluded_user_ids Campaign#excluded_user_ids}
  */
  readonly excludedUserIds?: string[];
  /**
  * An array of Okta group IDs included from access certification or the campaign. userIds, groupIds or userScopeExpression is required if campaign type is USER. A maximum of 5 groups can be specified in the array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#group_ids Campaign#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * If set to true, only active Okta users are included in the campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#include_only_active_users Campaign#include_only_active_users}
  */
  readonly includeOnlyActiveUsers?: boolean | cdktf.IResolvable;
  /**
  * If set to true, only includes users that have at least one SOD conflict that was caused due to entitlement(s) within Campaign scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#only_include_users_with_sod_conflicts Campaign#only_include_users_with_sod_conflicts}
  */
  readonly onlyIncludeUsersWithSodConflicts?: boolean | cdktf.IResolvable;
  /**
  * Specifies the type for principal_scope_settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#type Campaign#type}
  */
  readonly type: string;
  /**
  * An array of Okta user IDs included from access certification or the campaign. userIds, groupIds or userScopeExpression is required if campaign type is USER. A maximum of 100 users can be specified in the array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#user_ids Campaign#user_ids}
  */
  readonly userIds?: string[];
  /**
  * The Okta expression language user expression on the resourceSettings to include users in the campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#user_scope_expression Campaign#user_scope_expression}
  */
  readonly userScopeExpression?: string;
  /**
  * predefined_inactive_users_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#predefined_inactive_users_scope Campaign#predefined_inactive_users_scope}
  */
  readonly predefinedInactiveUsersScope?: CampaignPrincipalScopeSettingsPredefinedInactiveUsersScope[] | cdktf.IResolvable;
}

export function campaignPrincipalScopeSettingsToTerraform(struct?: CampaignPrincipalScopeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedUserIds),
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    include_only_active_users: cdktf.booleanToTerraform(struct!.includeOnlyActiveUsers),
    only_include_users_with_sod_conflicts: cdktf.booleanToTerraform(struct!.onlyIncludeUsersWithSodConflicts),
    type: cdktf.stringToTerraform(struct!.type),
    user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userIds),
    user_scope_expression: cdktf.stringToTerraform(struct!.userScopeExpression),
    predefined_inactive_users_scope: cdktf.listMapper(campaignPrincipalScopeSettingsPredefinedInactiveUsersScopeToTerraform, true)(struct!.predefinedInactiveUsersScope),
  }
}


export function campaignPrincipalScopeSettingsToHclTerraform(struct?: CampaignPrincipalScopeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_user_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedUserIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_only_active_users: {
      value: cdktf.booleanToHclTerraform(struct!.includeOnlyActiveUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    only_include_users_with_sod_conflicts: {
      value: cdktf.booleanToHclTerraform(struct!.onlyIncludeUsersWithSodConflicts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_scope_expression: {
      value: cdktf.stringToHclTerraform(struct!.userScopeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predefined_inactive_users_scope: {
      value: cdktf.listMapperHcl(campaignPrincipalScopeSettingsPredefinedInactiveUsersScopeToHclTerraform, true)(struct!.predefinedInactiveUsersScope),
      isBlock: true,
      type: "list",
      storageClassType: "CampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignPrincipalScopeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CampaignPrincipalScopeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedUserIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedUserIds = this._excludedUserIds;
    }
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._includeOnlyActiveUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOnlyActiveUsers = this._includeOnlyActiveUsers;
    }
    if (this._onlyIncludeUsersWithSodConflicts !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyIncludeUsersWithSodConflicts = this._onlyIncludeUsersWithSodConflicts;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIds = this._userIds;
    }
    if (this._userScopeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.userScopeExpression = this._userScopeExpression;
    }
    if (this._predefinedInactiveUsersScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedInactiveUsersScope = this._predefinedInactiveUsersScope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CampaignPrincipalScopeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedUserIds = undefined;
      this._groupIds = undefined;
      this._includeOnlyActiveUsers = undefined;
      this._onlyIncludeUsersWithSodConflicts = undefined;
      this._type = undefined;
      this._userIds = undefined;
      this._userScopeExpression = undefined;
      this._predefinedInactiveUsersScope.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedUserIds = value.excludedUserIds;
      this._groupIds = value.groupIds;
      this._includeOnlyActiveUsers = value.includeOnlyActiveUsers;
      this._onlyIncludeUsersWithSodConflicts = value.onlyIncludeUsersWithSodConflicts;
      this._type = value.type;
      this._userIds = value.userIds;
      this._userScopeExpression = value.userScopeExpression;
      this._predefinedInactiveUsersScope.internalValue = value.predefinedInactiveUsersScope;
    }
  }

  // excluded_user_ids - computed: false, optional: true, required: false
  private _excludedUserIds?: string[]; 
  public get excludedUserIds() {
    return this.getListAttribute('excluded_user_ids');
  }
  public set excludedUserIds(value: string[]) {
    this._excludedUserIds = value;
  }
  public resetExcludedUserIds() {
    this._excludedUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedUserIdsInput() {
    return this._excludedUserIds;
  }

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return this.getListAttribute('group_ids');
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
  }

  // include_only_active_users - computed: true, optional: true, required: false
  private _includeOnlyActiveUsers?: boolean | cdktf.IResolvable; 
  public get includeOnlyActiveUsers() {
    return this.getBooleanAttribute('include_only_active_users');
  }
  public set includeOnlyActiveUsers(value: boolean | cdktf.IResolvable) {
    this._includeOnlyActiveUsers = value;
  }
  public resetIncludeOnlyActiveUsers() {
    this._includeOnlyActiveUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOnlyActiveUsersInput() {
    return this._includeOnlyActiveUsers;
  }

  // only_include_users_with_sod_conflicts - computed: true, optional: true, required: false
  private _onlyIncludeUsersWithSodConflicts?: boolean | cdktf.IResolvable; 
  public get onlyIncludeUsersWithSodConflicts() {
    return this.getBooleanAttribute('only_include_users_with_sod_conflicts');
  }
  public set onlyIncludeUsersWithSodConflicts(value: boolean | cdktf.IResolvable) {
    this._onlyIncludeUsersWithSodConflicts = value;
  }
  public resetOnlyIncludeUsersWithSodConflicts() {
    this._onlyIncludeUsersWithSodConflicts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyIncludeUsersWithSodConflictsInput() {
    return this._onlyIncludeUsersWithSodConflicts;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: string[]; 
  public get userIds() {
    return this.getListAttribute('user_ids');
  }
  public set userIds(value: string[]) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }

  // user_scope_expression - computed: false, optional: true, required: false
  private _userScopeExpression?: string; 
  public get userScopeExpression() {
    return this.getStringAttribute('user_scope_expression');
  }
  public set userScopeExpression(value: string) {
    this._userScopeExpression = value;
  }
  public resetUserScopeExpression() {
    this._userScopeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userScopeExpressionInput() {
    return this._userScopeExpression;
  }

  // predefined_inactive_users_scope - computed: false, optional: true, required: false
  private _predefinedInactiveUsersScope = new CampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeList(this, "predefined_inactive_users_scope", false);
  public get predefinedInactiveUsersScope() {
    return this._predefinedInactiveUsersScope;
  }
  public putPredefinedInactiveUsersScope(value: CampaignPrincipalScopeSettingsPredefinedInactiveUsersScope[] | cdktf.IResolvable) {
    this._predefinedInactiveUsersScope.internalValue = value;
  }
  public resetPredefinedInactiveUsersScope() {
    this._predefinedInactiveUsersScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedInactiveUsersScopeInput() {
    return this._predefinedInactiveUsersScope.internalValue;
  }
}
export interface CampaignRemediationSettingsAutoRemediationSettingsIncludeOnly {
  /**
  * The ID of the resource to include in the campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#resource_id Campaign#resource_id}
  */
  readonly resourceId?: string;
  /**
  * The type of the resource to include in the campaign. Valid values are 'APPLICATION', 'GROUP', 'ENTITLEMENT', 'ENTITLEMENT_BUNDLE'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#resource_type Campaign#resource_type}
  */
  readonly resourceType?: string;
}

export function campaignRemediationSettingsAutoRemediationSettingsIncludeOnlyToTerraform(struct?: CampaignRemediationSettingsAutoRemediationSettingsIncludeOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function campaignRemediationSettingsAutoRemediationSettingsIncludeOnlyToHclTerraform(struct?: CampaignRemediationSettingsAutoRemediationSettingsIncludeOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CampaignRemediationSettingsAutoRemediationSettingsIncludeOnly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CampaignRemediationSettingsAutoRemediationSettingsIncludeOnly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class CampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyList extends cdktf.ComplexList {
  public internalValue? : CampaignRemediationSettingsAutoRemediationSettingsIncludeOnly[] | cdktf.IResolvable

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
  public get(index: number): CampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyOutputReference {
    return new CampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CampaignRemediationSettingsAutoRemediationSettings {
  /**
  * If true, all indirect assignments will be included in the campaign. If false, only direct assignments will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#include_all_indirect_assignments Campaign#include_all_indirect_assignments}
  */
  readonly includeAllIndirectAssignments?: boolean | cdktf.IResolvable;
  /**
  * include_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#include_only Campaign#include_only}
  */
  readonly includeOnly?: CampaignRemediationSettingsAutoRemediationSettingsIncludeOnly[] | cdktf.IResolvable;
}

export function campaignRemediationSettingsAutoRemediationSettingsToTerraform(struct?: CampaignRemediationSettingsAutoRemediationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_all_indirect_assignments: cdktf.booleanToTerraform(struct!.includeAllIndirectAssignments),
    include_only: cdktf.listMapper(campaignRemediationSettingsAutoRemediationSettingsIncludeOnlyToTerraform, true)(struct!.includeOnly),
  }
}


export function campaignRemediationSettingsAutoRemediationSettingsToHclTerraform(struct?: CampaignRemediationSettingsAutoRemediationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_all_indirect_assignments: {
      value: cdktf.booleanToHclTerraform(struct!.includeAllIndirectAssignments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_only: {
      value: cdktf.listMapperHcl(campaignRemediationSettingsAutoRemediationSettingsIncludeOnlyToHclTerraform, true)(struct!.includeOnly),
      isBlock: true,
      type: "list",
      storageClassType: "CampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignRemediationSettingsAutoRemediationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CampaignRemediationSettingsAutoRemediationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeAllIndirectAssignments !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAllIndirectAssignments = this._includeAllIndirectAssignments;
    }
    if (this._includeOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOnly = this._includeOnly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CampaignRemediationSettingsAutoRemediationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeAllIndirectAssignments = undefined;
      this._includeOnly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeAllIndirectAssignments = value.includeAllIndirectAssignments;
      this._includeOnly.internalValue = value.includeOnly;
    }
  }

  // include_all_indirect_assignments - computed: false, optional: true, required: false
  private _includeAllIndirectAssignments?: boolean | cdktf.IResolvable; 
  public get includeAllIndirectAssignments() {
    return this.getBooleanAttribute('include_all_indirect_assignments');
  }
  public set includeAllIndirectAssignments(value: boolean | cdktf.IResolvable) {
    this._includeAllIndirectAssignments = value;
  }
  public resetIncludeAllIndirectAssignments() {
    this._includeAllIndirectAssignments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllIndirectAssignmentsInput() {
    return this._includeAllIndirectAssignments;
  }

  // include_only - computed: false, optional: true, required: false
  private _includeOnly = new CampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyList(this, "include_only", false);
  public get includeOnly() {
    return this._includeOnly;
  }
  public putIncludeOnly(value: CampaignRemediationSettingsAutoRemediationSettingsIncludeOnly[] | cdktf.IResolvable) {
    this._includeOnly.internalValue = value;
  }
  public resetIncludeOnly() {
    this._includeOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOnlyInput() {
    return this._includeOnly.internalValue;
  }
}
export interface CampaignRemediationSettings {
  /**
  * Specifies the action by default if the reviewer approves access. NO_ACTION indicates there is no remediation action and the user retains access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#access_approved Campaign#access_approved}
  */
  readonly accessApproved: string;
  /**
  * Specifies the action if the reviewer revokes access. NO_ACTION indicates the user retains the same access. DENY indicates the user will have their access revoked as long as they are not assigned to a group through Group Rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#access_revoked Campaign#access_revoked}
  */
  readonly accessRevoked: string;
  /**
  * Specifies the action if the reviewer doesn't respond to the request or if the campaign is closed before an action is taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#no_response Campaign#no_response}
  */
  readonly noResponse: string;
  /**
  * auto_remediation_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#auto_remediation_settings Campaign#auto_remediation_settings}
  */
  readonly autoRemediationSettings?: CampaignRemediationSettingsAutoRemediationSettings;
}

export function campaignRemediationSettingsToTerraform(struct?: CampaignRemediationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_approved: cdktf.stringToTerraform(struct!.accessApproved),
    access_revoked: cdktf.stringToTerraform(struct!.accessRevoked),
    no_response: cdktf.stringToTerraform(struct!.noResponse),
    auto_remediation_settings: campaignRemediationSettingsAutoRemediationSettingsToTerraform(struct!.autoRemediationSettings),
  }
}


export function campaignRemediationSettingsToHclTerraform(struct?: CampaignRemediationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_approved: {
      value: cdktf.stringToHclTerraform(struct!.accessApproved),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_revoked: {
      value: cdktf.stringToHclTerraform(struct!.accessRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_response: {
      value: cdktf.stringToHclTerraform(struct!.noResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_remediation_settings: {
      value: campaignRemediationSettingsAutoRemediationSettingsToHclTerraform(struct!.autoRemediationSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "CampaignRemediationSettingsAutoRemediationSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignRemediationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CampaignRemediationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessApproved !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessApproved = this._accessApproved;
    }
    if (this._accessRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRevoked = this._accessRevoked;
    }
    if (this._noResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResponse = this._noResponse;
    }
    if (this._autoRemediationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRemediationSettings = this._autoRemediationSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CampaignRemediationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessApproved = undefined;
      this._accessRevoked = undefined;
      this._noResponse = undefined;
      this._autoRemediationSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessApproved = value.accessApproved;
      this._accessRevoked = value.accessRevoked;
      this._noResponse = value.noResponse;
      this._autoRemediationSettings.internalValue = value.autoRemediationSettings;
    }
  }

  // access_approved - computed: false, optional: false, required: true
  private _accessApproved?: string; 
  public get accessApproved() {
    return this.getStringAttribute('access_approved');
  }
  public set accessApproved(value: string) {
    this._accessApproved = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessApprovedInput() {
    return this._accessApproved;
  }

  // access_revoked - computed: false, optional: false, required: true
  private _accessRevoked?: string; 
  public get accessRevoked() {
    return this.getStringAttribute('access_revoked');
  }
  public set accessRevoked(value: string) {
    this._accessRevoked = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRevokedInput() {
    return this._accessRevoked;
  }

  // no_response - computed: false, optional: false, required: true
  private _noResponse?: string; 
  public get noResponse() {
    return this.getStringAttribute('no_response');
  }
  public set noResponse(value: string) {
    this._noResponse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noResponseInput() {
    return this._noResponse;
  }

  // auto_remediation_settings - computed: false, optional: true, required: false
  private _autoRemediationSettings = new CampaignRemediationSettingsAutoRemediationSettingsOutputReference(this, "auto_remediation_settings");
  public get autoRemediationSettings() {
    return this._autoRemediationSettings;
  }
  public putAutoRemediationSettings(value: CampaignRemediationSettingsAutoRemediationSettings) {
    this._autoRemediationSettings.internalValue = value;
  }
  public resetAutoRemediationSettings() {
    this._autoRemediationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRemediationSettingsInput() {
    return this._autoRemediationSettings.internalValue;
  }
}
export interface CampaignResourceSettingsExcludedResources {
  /**
  * The ID of the resource to exclude in the campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#resource_id Campaign#resource_id}
  */
  readonly resourceId?: string;
  /**
  * The type of resource to exclude in the campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#resource_type Campaign#resource_type}
  */
  readonly resourceType?: string;
}

export function campaignResourceSettingsExcludedResourcesToTerraform(struct?: CampaignResourceSettingsExcludedResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function campaignResourceSettingsExcludedResourcesToHclTerraform(struct?: CampaignResourceSettingsExcludedResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignResourceSettingsExcludedResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CampaignResourceSettingsExcludedResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CampaignResourceSettingsExcludedResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class CampaignResourceSettingsExcludedResourcesList extends cdktf.ComplexList {
  public internalValue? : CampaignResourceSettingsExcludedResources[] | cdktf.IResolvable

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
  public get(index: number): CampaignResourceSettingsExcludedResourcesOutputReference {
    return new CampaignResourceSettingsExcludedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CampaignResourceSettingsTargetResourcesEntitlementBundles {
  /**
  * The ID of the entitlement bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#id Campaign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function campaignResourceSettingsTargetResourcesEntitlementBundlesToTerraform(struct?: CampaignResourceSettingsTargetResourcesEntitlementBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function campaignResourceSettingsTargetResourcesEntitlementBundlesToHclTerraform(struct?: CampaignResourceSettingsTargetResourcesEntitlementBundles | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignResourceSettingsTargetResourcesEntitlementBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CampaignResourceSettingsTargetResourcesEntitlementBundles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CampaignResourceSettingsTargetResourcesEntitlementBundles | cdktf.IResolvable | undefined) {
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
}

export class CampaignResourceSettingsTargetResourcesEntitlementBundlesList extends cdktf.ComplexList {
  public internalValue? : CampaignResourceSettingsTargetResourcesEntitlementBundles[] | cdktf.IResolvable

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
  public get(index: number): CampaignResourceSettingsTargetResourcesEntitlementBundlesOutputReference {
    return new CampaignResourceSettingsTargetResourcesEntitlementBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CampaignResourceSettingsTargetResourcesEntitlementsValues {
  /**
  * The entitlement value id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#id Campaign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function campaignResourceSettingsTargetResourcesEntitlementsValuesToTerraform(struct?: CampaignResourceSettingsTargetResourcesEntitlementsValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function campaignResourceSettingsTargetResourcesEntitlementsValuesToHclTerraform(struct?: CampaignResourceSettingsTargetResourcesEntitlementsValues | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignResourceSettingsTargetResourcesEntitlementsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CampaignResourceSettingsTargetResourcesEntitlementsValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CampaignResourceSettingsTargetResourcesEntitlementsValues | cdktf.IResolvable | undefined) {
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
}

export class CampaignResourceSettingsTargetResourcesEntitlementsValuesList extends cdktf.ComplexList {
  public internalValue? : CampaignResourceSettingsTargetResourcesEntitlementsValues[] | cdktf.IResolvable

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
  public get(index: number): CampaignResourceSettingsTargetResourcesEntitlementsValuesOutputReference {
    return new CampaignResourceSettingsTargetResourcesEntitlementsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CampaignResourceSettingsTargetResourcesEntitlements {
  /**
  * The entitlement id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#id Campaign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Whether to include all entitlement values. If false we must provide the values property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#include_all_values Campaign#include_all_values}
  */
  readonly includeAllValues?: boolean | cdktf.IResolvable;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#values Campaign#values}
  */
  readonly values?: CampaignResourceSettingsTargetResourcesEntitlementsValues[] | cdktf.IResolvable;
}

export function campaignResourceSettingsTargetResourcesEntitlementsToTerraform(struct?: CampaignResourceSettingsTargetResourcesEntitlements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    include_all_values: cdktf.booleanToTerraform(struct!.includeAllValues),
    values: cdktf.listMapper(campaignResourceSettingsTargetResourcesEntitlementsValuesToTerraform, true)(struct!.values),
  }
}


export function campaignResourceSettingsTargetResourcesEntitlementsToHclTerraform(struct?: CampaignResourceSettingsTargetResourcesEntitlements | cdktf.IResolvable): any {
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
    include_all_values: {
      value: cdktf.booleanToHclTerraform(struct!.includeAllValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(campaignResourceSettingsTargetResourcesEntitlementsValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "CampaignResourceSettingsTargetResourcesEntitlementsValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignResourceSettingsTargetResourcesEntitlementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CampaignResourceSettingsTargetResourcesEntitlements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._includeAllValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAllValues = this._includeAllValues;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CampaignResourceSettingsTargetResourcesEntitlements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._includeAllValues = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._includeAllValues = value.includeAllValues;
      this._values.internalValue = value.values;
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

  // include_all_values - computed: false, optional: true, required: false
  private _includeAllValues?: boolean | cdktf.IResolvable; 
  public get includeAllValues() {
    return this.getBooleanAttribute('include_all_values');
  }
  public set includeAllValues(value: boolean | cdktf.IResolvable) {
    this._includeAllValues = value;
  }
  public resetIncludeAllValues() {
    this._includeAllValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllValuesInput() {
    return this._includeAllValues;
  }

  // values - computed: false, optional: true, required: false
  private _values = new CampaignResourceSettingsTargetResourcesEntitlementsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: CampaignResourceSettingsTargetResourcesEntitlementsValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class CampaignResourceSettingsTargetResourcesEntitlementsList extends cdktf.ComplexList {
  public internalValue? : CampaignResourceSettingsTargetResourcesEntitlements[] | cdktf.IResolvable

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
  public get(index: number): CampaignResourceSettingsTargetResourcesEntitlementsOutputReference {
    return new CampaignResourceSettingsTargetResourcesEntitlementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CampaignResourceSettingsTargetResources {
  /**
  * Include all entitlements and entitlement bundles for this application. Only applicable if the resourcetype = APPLICATION and Entitlement Management is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#include_all_entitlements_and_bundles Campaign#include_all_entitlements_and_bundles}
  */
  readonly includeAllEntitlementsAndBundles?: boolean | cdktf.IResolvable;
  /**
  * The resource ID that is being reviewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#resource_id Campaign#resource_id}
  */
  readonly resourceId: string;
  /**
  * The type of Okta resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#resource_type Campaign#resource_type}
  */
  readonly resourceType: string;
  /**
  * entitlement_bundles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#entitlement_bundles Campaign#entitlement_bundles}
  */
  readonly entitlementBundles?: CampaignResourceSettingsTargetResourcesEntitlementBundles[] | cdktf.IResolvable;
  /**
  * entitlements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#entitlements Campaign#entitlements}
  */
  readonly entitlements?: CampaignResourceSettingsTargetResourcesEntitlements[] | cdktf.IResolvable;
}

export function campaignResourceSettingsTargetResourcesToTerraform(struct?: CampaignResourceSettingsTargetResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_all_entitlements_and_bundles: cdktf.booleanToTerraform(struct!.includeAllEntitlementsAndBundles),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    entitlement_bundles: cdktf.listMapper(campaignResourceSettingsTargetResourcesEntitlementBundlesToTerraform, true)(struct!.entitlementBundles),
    entitlements: cdktf.listMapper(campaignResourceSettingsTargetResourcesEntitlementsToTerraform, true)(struct!.entitlements),
  }
}


export function campaignResourceSettingsTargetResourcesToHclTerraform(struct?: CampaignResourceSettingsTargetResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_all_entitlements_and_bundles: {
      value: cdktf.booleanToHclTerraform(struct!.includeAllEntitlementsAndBundles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entitlement_bundles: {
      value: cdktf.listMapperHcl(campaignResourceSettingsTargetResourcesEntitlementBundlesToHclTerraform, true)(struct!.entitlementBundles),
      isBlock: true,
      type: "list",
      storageClassType: "CampaignResourceSettingsTargetResourcesEntitlementBundlesList",
    },
    entitlements: {
      value: cdktf.listMapperHcl(campaignResourceSettingsTargetResourcesEntitlementsToHclTerraform, true)(struct!.entitlements),
      isBlock: true,
      type: "list",
      storageClassType: "CampaignResourceSettingsTargetResourcesEntitlementsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignResourceSettingsTargetResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CampaignResourceSettingsTargetResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeAllEntitlementsAndBundles !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAllEntitlementsAndBundles = this._includeAllEntitlementsAndBundles;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._entitlementBundles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitlementBundles = this._entitlementBundles?.internalValue;
    }
    if (this._entitlements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitlements = this._entitlements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CampaignResourceSettingsTargetResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeAllEntitlementsAndBundles = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
      this._entitlementBundles.internalValue = undefined;
      this._entitlements.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeAllEntitlementsAndBundles = value.includeAllEntitlementsAndBundles;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
      this._entitlementBundles.internalValue = value.entitlementBundles;
      this._entitlements.internalValue = value.entitlements;
    }
  }

  // include_all_entitlements_and_bundles - computed: true, optional: true, required: false
  private _includeAllEntitlementsAndBundles?: boolean | cdktf.IResolvable; 
  public get includeAllEntitlementsAndBundles() {
    return this.getBooleanAttribute('include_all_entitlements_and_bundles');
  }
  public set includeAllEntitlementsAndBundles(value: boolean | cdktf.IResolvable) {
    this._includeAllEntitlementsAndBundles = value;
  }
  public resetIncludeAllEntitlementsAndBundles() {
    this._includeAllEntitlementsAndBundles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllEntitlementsAndBundlesInput() {
    return this._includeAllEntitlementsAndBundles;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // entitlement_bundles - computed: false, optional: true, required: false
  private _entitlementBundles = new CampaignResourceSettingsTargetResourcesEntitlementBundlesList(this, "entitlement_bundles", false);
  public get entitlementBundles() {
    return this._entitlementBundles;
  }
  public putEntitlementBundles(value: CampaignResourceSettingsTargetResourcesEntitlementBundles[] | cdktf.IResolvable) {
    this._entitlementBundles.internalValue = value;
  }
  public resetEntitlementBundles() {
    this._entitlementBundles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementBundlesInput() {
    return this._entitlementBundles.internalValue;
  }

  // entitlements - computed: false, optional: true, required: false
  private _entitlements = new CampaignResourceSettingsTargetResourcesEntitlementsList(this, "entitlements", false);
  public get entitlements() {
    return this._entitlements;
  }
  public putEntitlements(value: CampaignResourceSettingsTargetResourcesEntitlements[] | cdktf.IResolvable) {
    this._entitlements.internalValue = value;
  }
  public resetEntitlements() {
    this._entitlements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementsInput() {
    return this._entitlements.internalValue;
  }
}

export class CampaignResourceSettingsTargetResourcesList extends cdktf.ComplexList {
  public internalValue? : CampaignResourceSettingsTargetResources[] | cdktf.IResolvable

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
  public get(index: number): CampaignResourceSettingsTargetResourcesOutputReference {
    return new CampaignResourceSettingsTargetResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CampaignResourceSettings {
  /**
  * Include admin roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#include_admin_roles Campaign#include_admin_roles}
  */
  readonly includeAdminRoles?: boolean | cdktf.IResolvable;
  /**
  * Include entitlements for this application. This property is only applicable if resource_type = APPLICATION and Entitlement Management is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#include_entitlements Campaign#include_entitlements}
  */
  readonly includeEntitlements?: boolean | cdktf.IResolvable;
  /**
  * Only include individually assigned apps. This is only applicable if campaign type is USER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#individually_assigned_apps_only Campaign#individually_assigned_apps_only}
  */
  readonly individuallyAssignedAppsOnly?: boolean | cdktf.IResolvable;
  /**
  * Only include individually assigned groups. This is only applicable if campaign type is USER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#individually_assigned_groups_only Campaign#individually_assigned_groups_only}
  */
  readonly individuallyAssignedGroupsOnly?: boolean | cdktf.IResolvable;
  /**
  * Only include out-of-policy entitlements. Only applicable if resource_type = APPLICATION and Entitlement Management is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#only_include_out_of_policy_entitlements Campaign#only_include_out_of_policy_entitlements}
  */
  readonly onlyIncludeOutOfPolicyEntitlements?: boolean | cdktf.IResolvable;
  /**
  * The type of Okta resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#type Campaign#type}
  */
  readonly type: string;
  /**
  * excluded_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#excluded_resources Campaign#excluded_resources}
  */
  readonly excludedResources?: CampaignResourceSettingsExcludedResources[] | cdktf.IResolvable;
  /**
  * target_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#target_resources Campaign#target_resources}
  */
  readonly targetResources?: CampaignResourceSettingsTargetResources[] | cdktf.IResolvable;
}

export function campaignResourceSettingsToTerraform(struct?: CampaignResourceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_admin_roles: cdktf.booleanToTerraform(struct!.includeAdminRoles),
    include_entitlements: cdktf.booleanToTerraform(struct!.includeEntitlements),
    individually_assigned_apps_only: cdktf.booleanToTerraform(struct!.individuallyAssignedAppsOnly),
    individually_assigned_groups_only: cdktf.booleanToTerraform(struct!.individuallyAssignedGroupsOnly),
    only_include_out_of_policy_entitlements: cdktf.booleanToTerraform(struct!.onlyIncludeOutOfPolicyEntitlements),
    type: cdktf.stringToTerraform(struct!.type),
    excluded_resources: cdktf.listMapper(campaignResourceSettingsExcludedResourcesToTerraform, true)(struct!.excludedResources),
    target_resources: cdktf.listMapper(campaignResourceSettingsTargetResourcesToTerraform, true)(struct!.targetResources),
  }
}


export function campaignResourceSettingsToHclTerraform(struct?: CampaignResourceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_admin_roles: {
      value: cdktf.booleanToHclTerraform(struct!.includeAdminRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_entitlements: {
      value: cdktf.booleanToHclTerraform(struct!.includeEntitlements),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    individually_assigned_apps_only: {
      value: cdktf.booleanToHclTerraform(struct!.individuallyAssignedAppsOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    individually_assigned_groups_only: {
      value: cdktf.booleanToHclTerraform(struct!.individuallyAssignedGroupsOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    only_include_out_of_policy_entitlements: {
      value: cdktf.booleanToHclTerraform(struct!.onlyIncludeOutOfPolicyEntitlements),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    excluded_resources: {
      value: cdktf.listMapperHcl(campaignResourceSettingsExcludedResourcesToHclTerraform, true)(struct!.excludedResources),
      isBlock: true,
      type: "list",
      storageClassType: "CampaignResourceSettingsExcludedResourcesList",
    },
    target_resources: {
      value: cdktf.listMapperHcl(campaignResourceSettingsTargetResourcesToHclTerraform, true)(struct!.targetResources),
      isBlock: true,
      type: "set",
      storageClassType: "CampaignResourceSettingsTargetResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignResourceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CampaignResourceSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeAdminRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAdminRoles = this._includeAdminRoles;
    }
    if (this._includeEntitlements !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeEntitlements = this._includeEntitlements;
    }
    if (this._individuallyAssignedAppsOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.individuallyAssignedAppsOnly = this._individuallyAssignedAppsOnly;
    }
    if (this._individuallyAssignedGroupsOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.individuallyAssignedGroupsOnly = this._individuallyAssignedGroupsOnly;
    }
    if (this._onlyIncludeOutOfPolicyEntitlements !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyIncludeOutOfPolicyEntitlements = this._onlyIncludeOutOfPolicyEntitlements;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._excludedResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedResources = this._excludedResources?.internalValue;
    }
    if (this._targetResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResources = this._targetResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CampaignResourceSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeAdminRoles = undefined;
      this._includeEntitlements = undefined;
      this._individuallyAssignedAppsOnly = undefined;
      this._individuallyAssignedGroupsOnly = undefined;
      this._onlyIncludeOutOfPolicyEntitlements = undefined;
      this._type = undefined;
      this._excludedResources.internalValue = undefined;
      this._targetResources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeAdminRoles = value.includeAdminRoles;
      this._includeEntitlements = value.includeEntitlements;
      this._individuallyAssignedAppsOnly = value.individuallyAssignedAppsOnly;
      this._individuallyAssignedGroupsOnly = value.individuallyAssignedGroupsOnly;
      this._onlyIncludeOutOfPolicyEntitlements = value.onlyIncludeOutOfPolicyEntitlements;
      this._type = value.type;
      this._excludedResources.internalValue = value.excludedResources;
      this._targetResources.internalValue = value.targetResources;
    }
  }

  // include_admin_roles - computed: true, optional: true, required: false
  private _includeAdminRoles?: boolean | cdktf.IResolvable; 
  public get includeAdminRoles() {
    return this.getBooleanAttribute('include_admin_roles');
  }
  public set includeAdminRoles(value: boolean | cdktf.IResolvable) {
    this._includeAdminRoles = value;
  }
  public resetIncludeAdminRoles() {
    this._includeAdminRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAdminRolesInput() {
    return this._includeAdminRoles;
  }

  // include_entitlements - computed: true, optional: true, required: false
  private _includeEntitlements?: boolean | cdktf.IResolvable; 
  public get includeEntitlements() {
    return this.getBooleanAttribute('include_entitlements');
  }
  public set includeEntitlements(value: boolean | cdktf.IResolvable) {
    this._includeEntitlements = value;
  }
  public resetIncludeEntitlements() {
    this._includeEntitlements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeEntitlementsInput() {
    return this._includeEntitlements;
  }

  // individually_assigned_apps_only - computed: true, optional: true, required: false
  private _individuallyAssignedAppsOnly?: boolean | cdktf.IResolvable; 
  public get individuallyAssignedAppsOnly() {
    return this.getBooleanAttribute('individually_assigned_apps_only');
  }
  public set individuallyAssignedAppsOnly(value: boolean | cdktf.IResolvable) {
    this._individuallyAssignedAppsOnly = value;
  }
  public resetIndividuallyAssignedAppsOnly() {
    this._individuallyAssignedAppsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get individuallyAssignedAppsOnlyInput() {
    return this._individuallyAssignedAppsOnly;
  }

  // individually_assigned_groups_only - computed: true, optional: true, required: false
  private _individuallyAssignedGroupsOnly?: boolean | cdktf.IResolvable; 
  public get individuallyAssignedGroupsOnly() {
    return this.getBooleanAttribute('individually_assigned_groups_only');
  }
  public set individuallyAssignedGroupsOnly(value: boolean | cdktf.IResolvable) {
    this._individuallyAssignedGroupsOnly = value;
  }
  public resetIndividuallyAssignedGroupsOnly() {
    this._individuallyAssignedGroupsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get individuallyAssignedGroupsOnlyInput() {
    return this._individuallyAssignedGroupsOnly;
  }

  // only_include_out_of_policy_entitlements - computed: true, optional: true, required: false
  private _onlyIncludeOutOfPolicyEntitlements?: boolean | cdktf.IResolvable; 
  public get onlyIncludeOutOfPolicyEntitlements() {
    return this.getBooleanAttribute('only_include_out_of_policy_entitlements');
  }
  public set onlyIncludeOutOfPolicyEntitlements(value: boolean | cdktf.IResolvable) {
    this._onlyIncludeOutOfPolicyEntitlements = value;
  }
  public resetOnlyIncludeOutOfPolicyEntitlements() {
    this._onlyIncludeOutOfPolicyEntitlements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyIncludeOutOfPolicyEntitlementsInput() {
    return this._onlyIncludeOutOfPolicyEntitlements;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // excluded_resources - computed: false, optional: true, required: false
  private _excludedResources = new CampaignResourceSettingsExcludedResourcesList(this, "excluded_resources", false);
  public get excludedResources() {
    return this._excludedResources;
  }
  public putExcludedResources(value: CampaignResourceSettingsExcludedResources[] | cdktf.IResolvable) {
    this._excludedResources.internalValue = value;
  }
  public resetExcludedResources() {
    this._excludedResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedResourcesInput() {
    return this._excludedResources.internalValue;
  }

  // target_resources - computed: false, optional: true, required: false
  private _targetResources = new CampaignResourceSettingsTargetResourcesList(this, "target_resources", true);
  public get targetResources() {
    return this._targetResources;
  }
  public putTargetResources(value: CampaignResourceSettingsTargetResources[] | cdktf.IResolvable) {
    this._targetResources.internalValue = value;
  }
  public resetTargetResources() {
    this._targetResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourcesInput() {
    return this._targetResources.internalValue;
  }
}
export interface CampaignReviewerSettingsReviewerLevelsStartReview {
  /**
  * The day of the campaign when the review starts. 0 means the first day of the campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#on_day Campaign#on_day}
  */
  readonly onDay?: number;
  /**
  * The condition for which, the lower level reviews will move to that level for further review.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#when Campaign#when}
  */
  readonly when?: string;
}

export function campaignReviewerSettingsReviewerLevelsStartReviewToTerraform(struct?: CampaignReviewerSettingsReviewerLevelsStartReview | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_day: cdktf.numberToTerraform(struct!.onDay),
    when: cdktf.stringToTerraform(struct!.when),
  }
}


export function campaignReviewerSettingsReviewerLevelsStartReviewToHclTerraform(struct?: CampaignReviewerSettingsReviewerLevelsStartReview | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_day: {
      value: cdktf.numberToHclTerraform(struct!.onDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when: {
      value: cdktf.stringToHclTerraform(struct!.when),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignReviewerSettingsReviewerLevelsStartReviewOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CampaignReviewerSettingsReviewerLevelsStartReview | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDay = this._onDay;
    }
    if (this._when !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CampaignReviewerSettingsReviewerLevelsStartReview | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onDay = undefined;
      this._when = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onDay = value.onDay;
      this._when = value.when;
    }
  }

  // on_day - computed: true, optional: true, required: false
  private _onDay?: number; 
  public get onDay() {
    return this.getNumberAttribute('on_day');
  }
  public set onDay(value: number) {
    this._onDay = value;
  }
  public resetOnDay() {
    this._onDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDayInput() {
    return this._onDay;
  }

  // when - computed: true, optional: true, required: false
  private _when?: string; 
  public get when() {
    return this.getStringAttribute('when');
  }
  public set when(value: string) {
    this._when = value;
  }
  public resetWhen() {
    this._when = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when;
  }
}

export class CampaignReviewerSettingsReviewerLevelsStartReviewList extends cdktf.ComplexList {
  public internalValue? : CampaignReviewerSettingsReviewerLevelsStartReview[] | cdktf.IResolvable

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
  public get(index: number): CampaignReviewerSettingsReviewerLevelsStartReviewOutputReference {
    return new CampaignReviewerSettingsReviewerLevelsStartReviewOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CampaignReviewerSettingsReviewerLevels {
  /**
  * Required when the type=`REVIEWER_EXPRESSION` or type=`RESOURCE_OWNER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#fallback_reviewer_id Campaign#fallback_reviewer_id}
  */
  readonly fallbackReviewerId?: string;
  /**
  * The ID of the reviewer group to which the reviewer is assigned.This property is required when type=`GROUP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#reviewer_group_id Campaign#reviewer_group_id}
  */
  readonly reviewerGroupId?: string;
  /**
  * The ID of the reviewer to which the reviewer is assigned.This property is required when type=`USER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#reviewer_id Campaign#reviewer_id}
  */
  readonly reviewerId?: string;
  /**
  * This property is required when type=`REVIEWER_EXPRESSION`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#reviewer_scope_expression Campaign#reviewer_scope_expression}
  */
  readonly reviewerScopeExpression?: string;
  /**
  * This property is used to prevent self review.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#self_review_disabled Campaign#self_review_disabled}
  */
  readonly selfReviewDisabled?: boolean | cdktf.IResolvable;
  /**
  * Identifies the kind of reviewer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#type Campaign#type}
  */
  readonly type: string;
  /**
  * start_review block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#start_review Campaign#start_review}
  */
  readonly startReview?: CampaignReviewerSettingsReviewerLevelsStartReview[] | cdktf.IResolvable;
}

export function campaignReviewerSettingsReviewerLevelsToTerraform(struct?: CampaignReviewerSettingsReviewerLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_reviewer_id: cdktf.stringToTerraform(struct!.fallbackReviewerId),
    reviewer_group_id: cdktf.stringToTerraform(struct!.reviewerGroupId),
    reviewer_id: cdktf.stringToTerraform(struct!.reviewerId),
    reviewer_scope_expression: cdktf.stringToTerraform(struct!.reviewerScopeExpression),
    self_review_disabled: cdktf.booleanToTerraform(struct!.selfReviewDisabled),
    type: cdktf.stringToTerraform(struct!.type),
    start_review: cdktf.listMapper(campaignReviewerSettingsReviewerLevelsStartReviewToTerraform, true)(struct!.startReview),
  }
}


export function campaignReviewerSettingsReviewerLevelsToHclTerraform(struct?: CampaignReviewerSettingsReviewerLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_reviewer_id: {
      value: cdktf.stringToHclTerraform(struct!.fallbackReviewerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reviewer_group_id: {
      value: cdktf.stringToHclTerraform(struct!.reviewerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reviewer_id: {
      value: cdktf.stringToHclTerraform(struct!.reviewerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reviewer_scope_expression: {
      value: cdktf.stringToHclTerraform(struct!.reviewerScopeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_review_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.selfReviewDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_review: {
      value: cdktf.listMapperHcl(campaignReviewerSettingsReviewerLevelsStartReviewToHclTerraform, true)(struct!.startReview),
      isBlock: true,
      type: "list",
      storageClassType: "CampaignReviewerSettingsReviewerLevelsStartReviewList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignReviewerSettingsReviewerLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CampaignReviewerSettingsReviewerLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackReviewerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackReviewerId = this._fallbackReviewerId;
    }
    if (this._reviewerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewerGroupId = this._reviewerGroupId;
    }
    if (this._reviewerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewerId = this._reviewerId;
    }
    if (this._reviewerScopeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewerScopeExpression = this._reviewerScopeExpression;
    }
    if (this._selfReviewDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfReviewDisabled = this._selfReviewDisabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._startReview?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startReview = this._startReview?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CampaignReviewerSettingsReviewerLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackReviewerId = undefined;
      this._reviewerGroupId = undefined;
      this._reviewerId = undefined;
      this._reviewerScopeExpression = undefined;
      this._selfReviewDisabled = undefined;
      this._type = undefined;
      this._startReview.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackReviewerId = value.fallbackReviewerId;
      this._reviewerGroupId = value.reviewerGroupId;
      this._reviewerId = value.reviewerId;
      this._reviewerScopeExpression = value.reviewerScopeExpression;
      this._selfReviewDisabled = value.selfReviewDisabled;
      this._type = value.type;
      this._startReview.internalValue = value.startReview;
    }
  }

  // fallback_reviewer_id - computed: true, optional: true, required: false
  private _fallbackReviewerId?: string; 
  public get fallbackReviewerId() {
    return this.getStringAttribute('fallback_reviewer_id');
  }
  public set fallbackReviewerId(value: string) {
    this._fallbackReviewerId = value;
  }
  public resetFallbackReviewerId() {
    this._fallbackReviewerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackReviewerIdInput() {
    return this._fallbackReviewerId;
  }

  // reviewer_group_id - computed: true, optional: true, required: false
  private _reviewerGroupId?: string; 
  public get reviewerGroupId() {
    return this.getStringAttribute('reviewer_group_id');
  }
  public set reviewerGroupId(value: string) {
    this._reviewerGroupId = value;
  }
  public resetReviewerGroupId() {
    this._reviewerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerGroupIdInput() {
    return this._reviewerGroupId;
  }

  // reviewer_id - computed: false, optional: true, required: false
  private _reviewerId?: string; 
  public get reviewerId() {
    return this.getStringAttribute('reviewer_id');
  }
  public set reviewerId(value: string) {
    this._reviewerId = value;
  }
  public resetReviewerId() {
    this._reviewerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerIdInput() {
    return this._reviewerId;
  }

  // reviewer_scope_expression - computed: true, optional: true, required: false
  private _reviewerScopeExpression?: string; 
  public get reviewerScopeExpression() {
    return this.getStringAttribute('reviewer_scope_expression');
  }
  public set reviewerScopeExpression(value: string) {
    this._reviewerScopeExpression = value;
  }
  public resetReviewerScopeExpression() {
    this._reviewerScopeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerScopeExpressionInput() {
    return this._reviewerScopeExpression;
  }

  // self_review_disabled - computed: true, optional: true, required: false
  private _selfReviewDisabled?: boolean | cdktf.IResolvable; 
  public get selfReviewDisabled() {
    return this.getBooleanAttribute('self_review_disabled');
  }
  public set selfReviewDisabled(value: boolean | cdktf.IResolvable) {
    this._selfReviewDisabled = value;
  }
  public resetSelfReviewDisabled() {
    this._selfReviewDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfReviewDisabledInput() {
    return this._selfReviewDisabled;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // start_review - computed: false, optional: true, required: false
  private _startReview = new CampaignReviewerSettingsReviewerLevelsStartReviewList(this, "start_review", false);
  public get startReview() {
    return this._startReview;
  }
  public putStartReview(value: CampaignReviewerSettingsReviewerLevelsStartReview[] | cdktf.IResolvable) {
    this._startReview.internalValue = value;
  }
  public resetStartReview() {
    this._startReview.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startReviewInput() {
    return this._startReview.internalValue;
  }
}

export class CampaignReviewerSettingsReviewerLevelsList extends cdktf.ComplexList {
  public internalValue? : CampaignReviewerSettingsReviewerLevels[] | cdktf.IResolvable

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
  public get(index: number): CampaignReviewerSettingsReviewerLevelsOutputReference {
    return new CampaignReviewerSettingsReviewerLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CampaignReviewerSettings {
  /**
  * When approving or revoking review items, bulk actions are disabled if true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#bulk_decision_disabled Campaign#bulk_decision_disabled}
  */
  readonly bulkDecisionDisabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the fallback reviewer. Required when the type=`REVIEWER_EXPRESSION` or type=`RESOURCE_OWNER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#fallback_reviewer_id Campaign#fallback_reviewer_id}
  */
  readonly fallbackReviewerId?: string;
  /**
  * When approving or revoking review items, a justification is required if true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#justification_required Campaign#justification_required}
  */
  readonly justificationRequired?: boolean | cdktf.IResolvable;
  /**
  * Reassignment is disabled for reviewers if true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#reassignment_disabled Campaign#reassignment_disabled}
  */
  readonly reassignmentDisabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the reviewer group to which the reviewer is assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#reviewer_group_id Campaign#reviewer_group_id}
  */
  readonly reviewerGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#reviewer_id Campaign#reviewer_id}
  */
  readonly reviewerId?: string;
  /**
  * This property is required when type=`USER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#reviewer_scope_expression Campaign#reviewer_scope_expression}
  */
  readonly reviewerScopeExpression?: string;
  /**
  * This property is required to be true for resource-centric campaigns when the Okta Admin Console is one of the resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#self_review_disabled Campaign#self_review_disabled}
  */
  readonly selfReviewDisabled?: boolean | cdktf.IResolvable;
  /**
  * Identifies the kind of reviewer for Access Certification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#type Campaign#type}
  */
  readonly type: string;
  /**
  * reviewer_levels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#reviewer_levels Campaign#reviewer_levels}
  */
  readonly reviewerLevels?: CampaignReviewerSettingsReviewerLevels[] | cdktf.IResolvable;
}

export function campaignReviewerSettingsToTerraform(struct?: CampaignReviewerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bulk_decision_disabled: cdktf.booleanToTerraform(struct!.bulkDecisionDisabled),
    fallback_reviewer_id: cdktf.stringToTerraform(struct!.fallbackReviewerId),
    justification_required: cdktf.booleanToTerraform(struct!.justificationRequired),
    reassignment_disabled: cdktf.booleanToTerraform(struct!.reassignmentDisabled),
    reviewer_group_id: cdktf.stringToTerraform(struct!.reviewerGroupId),
    reviewer_id: cdktf.stringToTerraform(struct!.reviewerId),
    reviewer_scope_expression: cdktf.stringToTerraform(struct!.reviewerScopeExpression),
    self_review_disabled: cdktf.booleanToTerraform(struct!.selfReviewDisabled),
    type: cdktf.stringToTerraform(struct!.type),
    reviewer_levels: cdktf.listMapper(campaignReviewerSettingsReviewerLevelsToTerraform, true)(struct!.reviewerLevels),
  }
}


export function campaignReviewerSettingsToHclTerraform(struct?: CampaignReviewerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bulk_decision_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.bulkDecisionDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback_reviewer_id: {
      value: cdktf.stringToHclTerraform(struct!.fallbackReviewerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    justification_required: {
      value: cdktf.booleanToHclTerraform(struct!.justificationRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reassignment_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.reassignmentDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reviewer_group_id: {
      value: cdktf.stringToHclTerraform(struct!.reviewerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reviewer_id: {
      value: cdktf.stringToHclTerraform(struct!.reviewerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reviewer_scope_expression: {
      value: cdktf.stringToHclTerraform(struct!.reviewerScopeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_review_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.selfReviewDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reviewer_levels: {
      value: cdktf.listMapperHcl(campaignReviewerSettingsReviewerLevelsToHclTerraform, true)(struct!.reviewerLevels),
      isBlock: true,
      type: "list",
      storageClassType: "CampaignReviewerSettingsReviewerLevelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignReviewerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CampaignReviewerSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bulkDecisionDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bulkDecisionDisabled = this._bulkDecisionDisabled;
    }
    if (this._fallbackReviewerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackReviewerId = this._fallbackReviewerId;
    }
    if (this._justificationRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.justificationRequired = this._justificationRequired;
    }
    if (this._reassignmentDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.reassignmentDisabled = this._reassignmentDisabled;
    }
    if (this._reviewerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewerGroupId = this._reviewerGroupId;
    }
    if (this._reviewerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewerId = this._reviewerId;
    }
    if (this._reviewerScopeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewerScopeExpression = this._reviewerScopeExpression;
    }
    if (this._selfReviewDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfReviewDisabled = this._selfReviewDisabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._reviewerLevels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewerLevels = this._reviewerLevels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CampaignReviewerSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bulkDecisionDisabled = undefined;
      this._fallbackReviewerId = undefined;
      this._justificationRequired = undefined;
      this._reassignmentDisabled = undefined;
      this._reviewerGroupId = undefined;
      this._reviewerId = undefined;
      this._reviewerScopeExpression = undefined;
      this._selfReviewDisabled = undefined;
      this._type = undefined;
      this._reviewerLevels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bulkDecisionDisabled = value.bulkDecisionDisabled;
      this._fallbackReviewerId = value.fallbackReviewerId;
      this._justificationRequired = value.justificationRequired;
      this._reassignmentDisabled = value.reassignmentDisabled;
      this._reviewerGroupId = value.reviewerGroupId;
      this._reviewerId = value.reviewerId;
      this._reviewerScopeExpression = value.reviewerScopeExpression;
      this._selfReviewDisabled = value.selfReviewDisabled;
      this._type = value.type;
      this._reviewerLevels.internalValue = value.reviewerLevels;
    }
  }

  // bulk_decision_disabled - computed: true, optional: true, required: false
  private _bulkDecisionDisabled?: boolean | cdktf.IResolvable; 
  public get bulkDecisionDisabled() {
    return this.getBooleanAttribute('bulk_decision_disabled');
  }
  public set bulkDecisionDisabled(value: boolean | cdktf.IResolvable) {
    this._bulkDecisionDisabled = value;
  }
  public resetBulkDecisionDisabled() {
    this._bulkDecisionDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkDecisionDisabledInput() {
    return this._bulkDecisionDisabled;
  }

  // fallback_reviewer_id - computed: false, optional: true, required: false
  private _fallbackReviewerId?: string; 
  public get fallbackReviewerId() {
    return this.getStringAttribute('fallback_reviewer_id');
  }
  public set fallbackReviewerId(value: string) {
    this._fallbackReviewerId = value;
  }
  public resetFallbackReviewerId() {
    this._fallbackReviewerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackReviewerIdInput() {
    return this._fallbackReviewerId;
  }

  // justification_required - computed: true, optional: true, required: false
  private _justificationRequired?: boolean | cdktf.IResolvable; 
  public get justificationRequired() {
    return this.getBooleanAttribute('justification_required');
  }
  public set justificationRequired(value: boolean | cdktf.IResolvable) {
    this._justificationRequired = value;
  }
  public resetJustificationRequired() {
    this._justificationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationRequiredInput() {
    return this._justificationRequired;
  }

  // reassignment_disabled - computed: true, optional: true, required: false
  private _reassignmentDisabled?: boolean | cdktf.IResolvable; 
  public get reassignmentDisabled() {
    return this.getBooleanAttribute('reassignment_disabled');
  }
  public set reassignmentDisabled(value: boolean | cdktf.IResolvable) {
    this._reassignmentDisabled = value;
  }
  public resetReassignmentDisabled() {
    this._reassignmentDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reassignmentDisabledInput() {
    return this._reassignmentDisabled;
  }

  // reviewer_group_id - computed: false, optional: true, required: false
  private _reviewerGroupId?: string; 
  public get reviewerGroupId() {
    return this.getStringAttribute('reviewer_group_id');
  }
  public set reviewerGroupId(value: string) {
    this._reviewerGroupId = value;
  }
  public resetReviewerGroupId() {
    this._reviewerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerGroupIdInput() {
    return this._reviewerGroupId;
  }

  // reviewer_id - computed: false, optional: true, required: false
  private _reviewerId?: string; 
  public get reviewerId() {
    return this.getStringAttribute('reviewer_id');
  }
  public set reviewerId(value: string) {
    this._reviewerId = value;
  }
  public resetReviewerId() {
    this._reviewerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerIdInput() {
    return this._reviewerId;
  }

  // reviewer_scope_expression - computed: false, optional: true, required: false
  private _reviewerScopeExpression?: string; 
  public get reviewerScopeExpression() {
    return this.getStringAttribute('reviewer_scope_expression');
  }
  public set reviewerScopeExpression(value: string) {
    this._reviewerScopeExpression = value;
  }
  public resetReviewerScopeExpression() {
    this._reviewerScopeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerScopeExpressionInput() {
    return this._reviewerScopeExpression;
  }

  // self_review_disabled - computed: true, optional: true, required: false
  private _selfReviewDisabled?: boolean | cdktf.IResolvable; 
  public get selfReviewDisabled() {
    return this.getBooleanAttribute('self_review_disabled');
  }
  public set selfReviewDisabled(value: boolean | cdktf.IResolvable) {
    this._selfReviewDisabled = value;
  }
  public resetSelfReviewDisabled() {
    this._selfReviewDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfReviewDisabledInput() {
    return this._selfReviewDisabled;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // reviewer_levels - computed: false, optional: true, required: false
  private _reviewerLevels = new CampaignReviewerSettingsReviewerLevelsList(this, "reviewer_levels", false);
  public get reviewerLevels() {
    return this._reviewerLevels;
  }
  public putReviewerLevels(value: CampaignReviewerSettingsReviewerLevels[] | cdktf.IResolvable) {
    this._reviewerLevels.internalValue = value;
  }
  public resetReviewerLevels() {
    this._reviewerLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerLevelsInput() {
    return this._reviewerLevels.internalValue;
  }
}
export interface CampaignScheduleSettingsRecurrence {
  /**
  * Specifies when the recurring schedule can have an end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#ends Campaign#ends}
  */
  readonly ends?: string;
  /**
  * Recurrence interval specified according to ISO8061 notation for durations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#interval Campaign#interval}
  */
  readonly interval: string;
  /**
  * Specifies when the recurring schedule can have an end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#repeat_on_type Campaign#repeat_on_type}
  */
  readonly repeatOnType?: string;
}

export function campaignScheduleSettingsRecurrenceToTerraform(struct?: CampaignScheduleSettingsRecurrence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ends: cdktf.stringToTerraform(struct!.ends),
    interval: cdktf.stringToTerraform(struct!.interval),
    repeat_on_type: cdktf.stringToTerraform(struct!.repeatOnType),
  }
}


export function campaignScheduleSettingsRecurrenceToHclTerraform(struct?: CampaignScheduleSettingsRecurrence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ends: {
      value: cdktf.stringToHclTerraform(struct!.ends),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_on_type: {
      value: cdktf.stringToHclTerraform(struct!.repeatOnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignScheduleSettingsRecurrenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CampaignScheduleSettingsRecurrence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ends !== undefined) {
      hasAnyValues = true;
      internalValueResult.ends = this._ends;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._repeatOnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatOnType = this._repeatOnType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CampaignScheduleSettingsRecurrence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ends = undefined;
      this._interval = undefined;
      this._repeatOnType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ends = value.ends;
      this._interval = value.interval;
      this._repeatOnType = value.repeatOnType;
    }
  }

  // ends - computed: false, optional: true, required: false
  private _ends?: string; 
  public get ends() {
    return this.getStringAttribute('ends');
  }
  public set ends(value: string) {
    this._ends = value;
  }
  public resetEnds() {
    this._ends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endsInput() {
    return this._ends;
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

  // repeat_on_type - computed: false, optional: true, required: false
  private _repeatOnType?: string; 
  public get repeatOnType() {
    return this.getStringAttribute('repeat_on_type');
  }
  public set repeatOnType(value: string) {
    this._repeatOnType = value;
  }
  public resetRepeatOnType() {
    this._repeatOnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatOnTypeInput() {
    return this._repeatOnType;
  }
}

export class CampaignScheduleSettingsRecurrenceList extends cdktf.ComplexList {
  public internalValue? : CampaignScheduleSettingsRecurrence[] | cdktf.IResolvable

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
  public get(index: number): CampaignScheduleSettingsRecurrenceOutputReference {
    return new CampaignScheduleSettingsRecurrenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CampaignScheduleSettings {
  /**
  * The duration (in days) that the campaign is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#duration_in_days Campaign#duration_in_days}
  */
  readonly durationInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#end_date Campaign#end_date}
  */
  readonly endDate?: string;
  /**
  * The date on which the campaign is supposed to start. Accepts date in ISO 8601 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#start_date Campaign#start_date}
  */
  readonly startDate: string;
  /**
  * The time zone in which the campaign is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#time_zone Campaign#time_zone}
  */
  readonly timeZone: string;
  /**
  * The type of campaign being scheduled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#type Campaign#type}
  */
  readonly type: string;
  /**
  * recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#recurrence Campaign#recurrence}
  */
  readonly recurrence?: CampaignScheduleSettingsRecurrence[] | cdktf.IResolvable;
}

export function campaignScheduleSettingsToTerraform(struct?: CampaignScheduleSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_in_days: cdktf.numberToTerraform(struct!.durationInDays),
    end_date: cdktf.stringToTerraform(struct!.endDate),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    type: cdktf.stringToTerraform(struct!.type),
    recurrence: cdktf.listMapper(campaignScheduleSettingsRecurrenceToTerraform, true)(struct!.recurrence),
  }
}


export function campaignScheduleSettingsToHclTerraform(struct?: CampaignScheduleSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_in_days: {
      value: cdktf.numberToHclTerraform(struct!.durationInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
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
    recurrence: {
      value: cdktf.listMapperHcl(campaignScheduleSettingsRecurrenceToHclTerraform, true)(struct!.recurrence),
      isBlock: true,
      type: "list",
      storageClassType: "CampaignScheduleSettingsRecurrenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CampaignScheduleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CampaignScheduleSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInDays = this._durationInDays;
    }
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._recurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CampaignScheduleSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationInDays = undefined;
      this._endDate = undefined;
      this._startDate = undefined;
      this._timeZone = undefined;
      this._type = undefined;
      this._recurrence.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationInDays = value.durationInDays;
      this._endDate = value.endDate;
      this._startDate = value.startDate;
      this._timeZone = value.timeZone;
      this._type = value.type;
      this._recurrence.internalValue = value.recurrence;
    }
  }

  // duration_in_days - computed: false, optional: false, required: true
  private _durationInDays?: number; 
  public get durationInDays() {
    return this.getNumberAttribute('duration_in_days');
  }
  public set durationInDays(value: number) {
    this._durationInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInDaysInput() {
    return this._durationInDays;
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence = new CampaignScheduleSettingsRecurrenceList(this, "recurrence", false);
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: CampaignScheduleSettingsRecurrence[] | cdktf.IResolvable) {
    this._recurrence.internalValue = value;
  }
  public resetRecurrence() {
    this._recurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign okta_campaign}
*/
export class Campaign extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_campaign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Campaign resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Campaign to import
  * @param importFromId The id of the existing Campaign that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Campaign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_campaign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/campaign okta_campaign} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CampaignConfig
  */
  public constructor(scope: Construct, id: string, config: CampaignConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_campaign',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._campaignTier = config.campaignTier;
    this._campaignType = config.campaignType;
    this._description = config.description;
    this._name = config.name;
    this._skipRemediation = config.skipRemediation;
    this._notificationSettings.internalValue = config.notificationSettings;
    this._principalScopeSettings.internalValue = config.principalScopeSettings;
    this._remediationSettings.internalValue = config.remediationSettings;
    this._resourceSettings.internalValue = config.resourceSettings;
    this._reviewerSettings.internalValue = config.reviewerSettings;
    this._scheduleSettings.internalValue = config.scheduleSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // campaign_tier - computed: false, optional: true, required: false
  private _campaignTier?: string; 
  public get campaignTier() {
    return this.getStringAttribute('campaign_tier');
  }
  public set campaignTier(value: string) {
    this._campaignTier = value;
  }
  public resetCampaignTier() {
    this._campaignTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get campaignTierInput() {
    return this._campaignTier;
  }

  // campaign_type - computed: true, optional: true, required: false
  private _campaignType?: string; 
  public get campaignType() {
    return this.getStringAttribute('campaign_type');
  }
  public set campaignType(value: string) {
    this._campaignType = value;
  }
  public resetCampaignType() {
    this._campaignType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get campaignTypeInput() {
    return this._campaignType;
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

  // skip_remediation - computed: false, optional: true, required: false
  private _skipRemediation?: boolean | cdktf.IResolvable; 
  public get skipRemediation() {
    return this.getBooleanAttribute('skip_remediation');
  }
  public set skipRemediation(value: boolean | cdktf.IResolvable) {
    this._skipRemediation = value;
  }
  public resetSkipRemediation() {
    this._skipRemediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRemediationInput() {
    return this._skipRemediation;
  }

  // notification_settings - computed: false, optional: true, required: false
  private _notificationSettings = new CampaignNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: CampaignNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // principal_scope_settings - computed: false, optional: true, required: false
  private _principalScopeSettings = new CampaignPrincipalScopeSettingsOutputReference(this, "principal_scope_settings");
  public get principalScopeSettings() {
    return this._principalScopeSettings;
  }
  public putPrincipalScopeSettings(value: CampaignPrincipalScopeSettings) {
    this._principalScopeSettings.internalValue = value;
  }
  public resetPrincipalScopeSettings() {
    this._principalScopeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalScopeSettingsInput() {
    return this._principalScopeSettings.internalValue;
  }

  // remediation_settings - computed: false, optional: true, required: false
  private _remediationSettings = new CampaignRemediationSettingsOutputReference(this, "remediation_settings");
  public get remediationSettings() {
    return this._remediationSettings;
  }
  public putRemediationSettings(value: CampaignRemediationSettings) {
    this._remediationSettings.internalValue = value;
  }
  public resetRemediationSettings() {
    this._remediationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationSettingsInput() {
    return this._remediationSettings.internalValue;
  }

  // resource_settings - computed: false, optional: true, required: false
  private _resourceSettings = new CampaignResourceSettingsOutputReference(this, "resource_settings");
  public get resourceSettings() {
    return this._resourceSettings;
  }
  public putResourceSettings(value: CampaignResourceSettings) {
    this._resourceSettings.internalValue = value;
  }
  public resetResourceSettings() {
    this._resourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSettingsInput() {
    return this._resourceSettings.internalValue;
  }

  // reviewer_settings - computed: false, optional: true, required: false
  private _reviewerSettings = new CampaignReviewerSettingsOutputReference(this, "reviewer_settings");
  public get reviewerSettings() {
    return this._reviewerSettings;
  }
  public putReviewerSettings(value: CampaignReviewerSettings) {
    this._reviewerSettings.internalValue = value;
  }
  public resetReviewerSettings() {
    this._reviewerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerSettingsInput() {
    return this._reviewerSettings.internalValue;
  }

  // schedule_settings - computed: false, optional: true, required: false
  private _scheduleSettings = new CampaignScheduleSettingsOutputReference(this, "schedule_settings");
  public get scheduleSettings() {
    return this._scheduleSettings;
  }
  public putScheduleSettings(value: CampaignScheduleSettings) {
    this._scheduleSettings.internalValue = value;
  }
  public resetScheduleSettings() {
    this._scheduleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleSettingsInput() {
    return this._scheduleSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      campaign_tier: cdktf.stringToTerraform(this._campaignTier),
      campaign_type: cdktf.stringToTerraform(this._campaignType),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      skip_remediation: cdktf.booleanToTerraform(this._skipRemediation),
      notification_settings: campaignNotificationSettingsToTerraform(this._notificationSettings.internalValue),
      principal_scope_settings: campaignPrincipalScopeSettingsToTerraform(this._principalScopeSettings.internalValue),
      remediation_settings: campaignRemediationSettingsToTerraform(this._remediationSettings.internalValue),
      resource_settings: campaignResourceSettingsToTerraform(this._resourceSettings.internalValue),
      reviewer_settings: campaignReviewerSettingsToTerraform(this._reviewerSettings.internalValue),
      schedule_settings: campaignScheduleSettingsToTerraform(this._scheduleSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      campaign_tier: {
        value: cdktf.stringToHclTerraform(this._campaignTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      campaign_type: {
        value: cdktf.stringToHclTerraform(this._campaignType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_remediation: {
        value: cdktf.booleanToHclTerraform(this._skipRemediation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notification_settings: {
        value: campaignNotificationSettingsToHclTerraform(this._notificationSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CampaignNotificationSettings",
      },
      principal_scope_settings: {
        value: campaignPrincipalScopeSettingsToHclTerraform(this._principalScopeSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CampaignPrincipalScopeSettings",
      },
      remediation_settings: {
        value: campaignRemediationSettingsToHclTerraform(this._remediationSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CampaignRemediationSettings",
      },
      resource_settings: {
        value: campaignResourceSettingsToHclTerraform(this._resourceSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CampaignResourceSettings",
      },
      reviewer_settings: {
        value: campaignReviewerSettingsToHclTerraform(this._reviewerSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CampaignReviewerSettings",
      },
      schedule_settings: {
        value: campaignScheduleSettingsToHclTerraform(this._scheduleSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CampaignScheduleSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
