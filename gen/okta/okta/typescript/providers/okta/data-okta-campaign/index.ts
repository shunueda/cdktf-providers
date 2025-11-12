// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaCampaignConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifies if it is a resource campaign or a user campaign. By default it is RESOURCE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#campaign_type DataOktaCampaign#campaign_type}
  */
  readonly campaignType?: string;
  /**
  * Human readable description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#description DataOktaCampaign#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#id DataOktaCampaign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * principal_scope_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#principal_scope_settings DataOktaCampaign#principal_scope_settings}
  */
  readonly principalScopeSettings?: DataOktaCampaignPrincipalScopeSettings;
  /**
  * remediation_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#remediation_settings DataOktaCampaign#remediation_settings}
  */
  readonly remediationSettings?: DataOktaCampaignRemediationSettings;
  /**
  * resource_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#resource_settings DataOktaCampaign#resource_settings}
  */
  readonly resourceSettings?: DataOktaCampaignResourceSettings;
  /**
  * reviewer_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#reviewer_settings DataOktaCampaign#reviewer_settings}
  */
  readonly reviewerSettings?: DataOktaCampaignReviewerSettings;
  /**
  * schedule_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#schedule_settings DataOktaCampaign#schedule_settings}
  */
  readonly scheduleSettings?: DataOktaCampaignScheduleSettings;
}
export interface DataOktaCampaignNotificationSettings {
}

export function dataOktaCampaignNotificationSettingsToTerraform(struct?: DataOktaCampaignNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaCampaignNotificationSettingsToHclTerraform(struct?: DataOktaCampaignNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaCampaignNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaCampaignNotificationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaCampaignNotificationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // notify_review_period_end - computed: true, optional: false, required: false
  public get notifyReviewPeriodEnd() {
    return this.getBooleanAttribute('notify_review_period_end');
  }

  // notify_reviewer_at_campaign_end - computed: true, optional: false, required: false
  public get notifyReviewerAtCampaignEnd() {
    return this.getBooleanAttribute('notify_reviewer_at_campaign_end');
  }

  // notify_reviewer_during_midpoint_of_review - computed: true, optional: false, required: false
  public get notifyReviewerDuringMidpointOfReview() {
    return this.getBooleanAttribute('notify_reviewer_during_midpoint_of_review');
  }

  // notify_reviewer_when_overdue - computed: true, optional: false, required: false
  public get notifyReviewerWhenOverdue() {
    return this.getBooleanAttribute('notify_reviewer_when_overdue');
  }

  // notify_reviewer_when_review_assigned - computed: true, optional: false, required: false
  public get notifyReviewerWhenReviewAssigned() {
    return this.getBooleanAttribute('notify_reviewer_when_review_assigned');
  }

  // reminders_reviewer_before_campaign_close_in_secs - computed: true, optional: false, required: false
  public get remindersReviewerBeforeCampaignCloseInSecs() {
    return this.getNumberListAttribute('reminders_reviewer_before_campaign_close_in_secs');
  }
}
export interface DataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScope {
}

export function dataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeToTerraform(struct?: DataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeToHclTerraform(struct?: DataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // inactive_days - computed: true, optional: false, required: false
  public get inactiveDays() {
    return this.getNumberAttribute('inactive_days');
  }
}

export class DataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeList extends cdktf.ComplexList {
  public internalValue? : DataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScope[] | cdktf.IResolvable

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
  public get(index: number): DataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeOutputReference {
    return new DataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaCampaignPrincipalScopeSettings {
  /**
  * predefined_inactive_users_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#predefined_inactive_users_scope DataOktaCampaign#predefined_inactive_users_scope}
  */
  readonly predefinedInactiveUsersScope?: DataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScope[] | cdktf.IResolvable;
}

export function dataOktaCampaignPrincipalScopeSettingsToTerraform(struct?: DataOktaCampaignPrincipalScopeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predefined_inactive_users_scope: cdktf.listMapper(dataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeToTerraform, true)(struct!.predefinedInactiveUsersScope),
  }
}


export function dataOktaCampaignPrincipalScopeSettingsToHclTerraform(struct?: DataOktaCampaignPrincipalScopeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    predefined_inactive_users_scope: {
      value: cdktf.listMapperHcl(dataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeToHclTerraform, true)(struct!.predefinedInactiveUsersScope),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaCampaignPrincipalScopeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaCampaignPrincipalScopeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedInactiveUsersScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedInactiveUsersScope = this._predefinedInactiveUsersScope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaCampaignPrincipalScopeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._predefinedInactiveUsersScope.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._predefinedInactiveUsersScope.internalValue = value.predefinedInactiveUsersScope;
    }
  }

  // excluded_user_ids - computed: true, optional: false, required: false
  public get excludedUserIds() {
    return this.getListAttribute('excluded_user_ids');
  }

  // group_ids - computed: true, optional: false, required: false
  public get groupIds() {
    return this.getListAttribute('group_ids');
  }

  // include_only_active_users - computed: true, optional: false, required: false
  public get includeOnlyActiveUsers() {
    return this.getBooleanAttribute('include_only_active_users');
  }

  // only_include_users_with_sod_conflicts - computed: true, optional: false, required: false
  public get onlyIncludeUsersWithSodConflicts() {
    return this.getBooleanAttribute('only_include_users_with_sod_conflicts');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return this.getListAttribute('user_ids');
  }

  // user_scope_expression - computed: true, optional: false, required: false
  public get userScopeExpression() {
    return this.getStringAttribute('user_scope_expression');
  }

  // predefined_inactive_users_scope - computed: false, optional: true, required: false
  private _predefinedInactiveUsersScope = new DataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScopeList(this, "predefined_inactive_users_scope", false);
  public get predefinedInactiveUsersScope() {
    return this._predefinedInactiveUsersScope;
  }
  public putPredefinedInactiveUsersScope(value: DataOktaCampaignPrincipalScopeSettingsPredefinedInactiveUsersScope[] | cdktf.IResolvable) {
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
export interface DataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnly {
  /**
  * The resource ID of the target resource When type = GROUP, it will point to the group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#resource_id DataOktaCampaign#resource_id}
  */
  readonly resourceId: string;
  /**
  * The type of the resource to be automatically remediated. Only GROUP is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#resource_type DataOktaCampaign#resource_type}
  */
  readonly resourceType: string;
}

export function dataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyToTerraform(struct?: DataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function dataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyToHclTerraform(struct?: DataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnly | cdktf.IResolvable): any {
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

export class DataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnly | cdktf.IResolvable | undefined) {
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
}

export class DataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyList extends cdktf.ComplexList {
  public internalValue? : DataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnly[] | cdktf.IResolvable

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
  public get(index: number): DataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyOutputReference {
    return new DataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaCampaignRemediationSettingsAutoRemediationSettings {
  /**
  * When a group is selected to be automatically remediated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#include_all_indirect_assignments DataOktaCampaign#include_all_indirect_assignments}
  */
  readonly includeAllIndirectAssignments?: boolean | cdktf.IResolvable;
  /**
  * include_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#include_only DataOktaCampaign#include_only}
  */
  readonly includeOnly?: DataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnly[] | cdktf.IResolvable;
}

export function dataOktaCampaignRemediationSettingsAutoRemediationSettingsToTerraform(struct?: DataOktaCampaignRemediationSettingsAutoRemediationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_all_indirect_assignments: cdktf.booleanToTerraform(struct!.includeAllIndirectAssignments),
    include_only: cdktf.listMapper(dataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyToTerraform, true)(struct!.includeOnly),
  }
}


export function dataOktaCampaignRemediationSettingsAutoRemediationSettingsToHclTerraform(struct?: DataOktaCampaignRemediationSettingsAutoRemediationSettings | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyToHclTerraform, true)(struct!.includeOnly),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaCampaignRemediationSettingsAutoRemediationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaCampaignRemediationSettingsAutoRemediationSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOktaCampaignRemediationSettingsAutoRemediationSettings | cdktf.IResolvable | undefined) {
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

  // include_all_indirect_assignments - computed: true, optional: true, required: false
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
  private _includeOnly = new DataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnlyList(this, "include_only", false);
  public get includeOnly() {
    return this._includeOnly;
  }
  public putIncludeOnly(value: DataOktaCampaignRemediationSettingsAutoRemediationSettingsIncludeOnly[] | cdktf.IResolvable) {
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
export interface DataOktaCampaignRemediationSettings {
  /**
  * auto_remediation_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#auto_remediation_settings DataOktaCampaign#auto_remediation_settings}
  */
  readonly autoRemediationSettings?: DataOktaCampaignRemediationSettingsAutoRemediationSettings;
}

export function dataOktaCampaignRemediationSettingsToTerraform(struct?: DataOktaCampaignRemediationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_remediation_settings: dataOktaCampaignRemediationSettingsAutoRemediationSettingsToTerraform(struct!.autoRemediationSettings),
  }
}


export function dataOktaCampaignRemediationSettingsToHclTerraform(struct?: DataOktaCampaignRemediationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_remediation_settings: {
      value: dataOktaCampaignRemediationSettingsAutoRemediationSettingsToHclTerraform(struct!.autoRemediationSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataOktaCampaignRemediationSettingsAutoRemediationSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaCampaignRemediationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaCampaignRemediationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRemediationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRemediationSettings = this._autoRemediationSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaCampaignRemediationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRemediationSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRemediationSettings.internalValue = value.autoRemediationSettings;
    }
  }

  // access_approved - computed: true, optional: false, required: false
  public get accessApproved() {
    return this.getStringAttribute('access_approved');
  }

  // access_revoked - computed: true, optional: false, required: false
  public get accessRevoked() {
    return this.getStringAttribute('access_revoked');
  }

  // no_response - computed: true, optional: false, required: false
  public get noResponse() {
    return this.getStringAttribute('no_response');
  }

  // auto_remediation_settings - computed: false, optional: true, required: false
  private _autoRemediationSettings = new DataOktaCampaignRemediationSettingsAutoRemediationSettingsOutputReference(this, "auto_remediation_settings");
  public get autoRemediationSettings() {
    return this._autoRemediationSettings;
  }
  public putAutoRemediationSettings(value: DataOktaCampaignRemediationSettingsAutoRemediationSettings) {
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
export interface DataOktaCampaignResourceSettingsExcludedResources {
}

export function dataOktaCampaignResourceSettingsExcludedResourcesToTerraform(struct?: DataOktaCampaignResourceSettingsExcludedResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaCampaignResourceSettingsExcludedResourcesToHclTerraform(struct?: DataOktaCampaignResourceSettingsExcludedResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaCampaignResourceSettingsExcludedResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaCampaignResourceSettingsExcludedResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaCampaignResourceSettingsExcludedResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DataOktaCampaignResourceSettingsExcludedResourcesList extends cdktf.ComplexList {
  public internalValue? : DataOktaCampaignResourceSettingsExcludedResources[] | cdktf.IResolvable

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
  public get(index: number): DataOktaCampaignResourceSettingsExcludedResourcesOutputReference {
    return new DataOktaCampaignResourceSettingsExcludedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaCampaignResourceSettingsTargetResourcesEntitlementBundles {
  /**
  * The id of the entitlement bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#id DataOktaCampaign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataOktaCampaignResourceSettingsTargetResourcesEntitlementBundlesToTerraform(struct?: DataOktaCampaignResourceSettingsTargetResourcesEntitlementBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataOktaCampaignResourceSettingsTargetResourcesEntitlementBundlesToHclTerraform(struct?: DataOktaCampaignResourceSettingsTargetResourcesEntitlementBundles | cdktf.IResolvable): any {
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

export class DataOktaCampaignResourceSettingsTargetResourcesEntitlementBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaCampaignResourceSettingsTargetResourcesEntitlementBundles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOktaCampaignResourceSettingsTargetResourcesEntitlementBundles | cdktf.IResolvable | undefined) {
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

export class DataOktaCampaignResourceSettingsTargetResourcesEntitlementBundlesList extends cdktf.ComplexList {
  public internalValue? : DataOktaCampaignResourceSettingsTargetResourcesEntitlementBundles[] | cdktf.IResolvable

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
  public get(index: number): DataOktaCampaignResourceSettingsTargetResourcesEntitlementBundlesOutputReference {
    return new DataOktaCampaignResourceSettingsTargetResourcesEntitlementBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaCampaignResourceSettingsTargetResourcesEntitlementsValues {
  /**
  * The entitlement value id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#id DataOktaCampaign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataOktaCampaignResourceSettingsTargetResourcesEntitlementsValuesToTerraform(struct?: DataOktaCampaignResourceSettingsTargetResourcesEntitlementsValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataOktaCampaignResourceSettingsTargetResourcesEntitlementsValuesToHclTerraform(struct?: DataOktaCampaignResourceSettingsTargetResourcesEntitlementsValues | cdktf.IResolvable): any {
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

export class DataOktaCampaignResourceSettingsTargetResourcesEntitlementsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaCampaignResourceSettingsTargetResourcesEntitlementsValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOktaCampaignResourceSettingsTargetResourcesEntitlementsValues | cdktf.IResolvable | undefined) {
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

export class DataOktaCampaignResourceSettingsTargetResourcesEntitlementsValuesList extends cdktf.ComplexList {
  public internalValue? : DataOktaCampaignResourceSettingsTargetResourcesEntitlementsValues[] | cdktf.IResolvable

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
  public get(index: number): DataOktaCampaignResourceSettingsTargetResourcesEntitlementsValuesOutputReference {
    return new DataOktaCampaignResourceSettingsTargetResourcesEntitlementsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaCampaignResourceSettingsTargetResourcesEntitlements {
  /**
  * The id of the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#id DataOktaCampaign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#values DataOktaCampaign#values}
  */
  readonly values?: DataOktaCampaignResourceSettingsTargetResourcesEntitlementsValues[] | cdktf.IResolvable;
}

export function dataOktaCampaignResourceSettingsTargetResourcesEntitlementsToTerraform(struct?: DataOktaCampaignResourceSettingsTargetResourcesEntitlements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    values: cdktf.listMapper(dataOktaCampaignResourceSettingsTargetResourcesEntitlementsValuesToTerraform, true)(struct!.values),
  }
}


export function dataOktaCampaignResourceSettingsTargetResourcesEntitlementsToHclTerraform(struct?: DataOktaCampaignResourceSettingsTargetResourcesEntitlements | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(dataOktaCampaignResourceSettingsTargetResourcesEntitlementsValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktaCampaignResourceSettingsTargetResourcesEntitlementsValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaCampaignResourceSettingsTargetResourcesEntitlementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaCampaignResourceSettingsTargetResourcesEntitlements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaCampaignResourceSettingsTargetResourcesEntitlements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
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

  // include_all_values - computed: true, optional: false, required: false
  public get includeAllValues() {
    return this.getBooleanAttribute('include_all_values');
  }

  // values - computed: false, optional: true, required: false
  private _values = new DataOktaCampaignResourceSettingsTargetResourcesEntitlementsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DataOktaCampaignResourceSettingsTargetResourcesEntitlementsValues[] | cdktf.IResolvable) {
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

export class DataOktaCampaignResourceSettingsTargetResourcesEntitlementsList extends cdktf.ComplexList {
  public internalValue? : DataOktaCampaignResourceSettingsTargetResourcesEntitlements[] | cdktf.IResolvable

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
  public get(index: number): DataOktaCampaignResourceSettingsTargetResourcesEntitlementsOutputReference {
    return new DataOktaCampaignResourceSettingsTargetResourcesEntitlementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaCampaignResourceSettingsTargetResources {
  /**
  * The resource ID that is being reviewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#resource_id DataOktaCampaign#resource_id}
  */
  readonly resourceId: string;
  /**
  * entitlement_bundles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#entitlement_bundles DataOktaCampaign#entitlement_bundles}
  */
  readonly entitlementBundles?: DataOktaCampaignResourceSettingsTargetResourcesEntitlementBundles[] | cdktf.IResolvable;
  /**
  * entitlements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#entitlements DataOktaCampaign#entitlements}
  */
  readonly entitlements?: DataOktaCampaignResourceSettingsTargetResourcesEntitlements[] | cdktf.IResolvable;
}

export function dataOktaCampaignResourceSettingsTargetResourcesToTerraform(struct?: DataOktaCampaignResourceSettingsTargetResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    entitlement_bundles: cdktf.listMapper(dataOktaCampaignResourceSettingsTargetResourcesEntitlementBundlesToTerraform, true)(struct!.entitlementBundles),
    entitlements: cdktf.listMapper(dataOktaCampaignResourceSettingsTargetResourcesEntitlementsToTerraform, true)(struct!.entitlements),
  }
}


export function dataOktaCampaignResourceSettingsTargetResourcesToHclTerraform(struct?: DataOktaCampaignResourceSettingsTargetResources | cdktf.IResolvable): any {
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
    entitlement_bundles: {
      value: cdktf.listMapperHcl(dataOktaCampaignResourceSettingsTargetResourcesEntitlementBundlesToHclTerraform, true)(struct!.entitlementBundles),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktaCampaignResourceSettingsTargetResourcesEntitlementBundlesList",
    },
    entitlements: {
      value: cdktf.listMapperHcl(dataOktaCampaignResourceSettingsTargetResourcesEntitlementsToHclTerraform, true)(struct!.entitlements),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktaCampaignResourceSettingsTargetResourcesEntitlementsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaCampaignResourceSettingsTargetResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaCampaignResourceSettingsTargetResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
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

  public set internalValue(value: DataOktaCampaignResourceSettingsTargetResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
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
      this._resourceId = value.resourceId;
      this._entitlementBundles.internalValue = value.entitlementBundles;
      this._entitlements.internalValue = value.entitlements;
    }
  }

  // include_all_entitlements_and_bundles - computed: true, optional: false, required: false
  public get includeAllEntitlementsAndBundles() {
    return this.getBooleanAttribute('include_all_entitlements_and_bundles');
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

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // entitlement_bundles - computed: false, optional: true, required: false
  private _entitlementBundles = new DataOktaCampaignResourceSettingsTargetResourcesEntitlementBundlesList(this, "entitlement_bundles", false);
  public get entitlementBundles() {
    return this._entitlementBundles;
  }
  public putEntitlementBundles(value: DataOktaCampaignResourceSettingsTargetResourcesEntitlementBundles[] | cdktf.IResolvable) {
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
  private _entitlements = new DataOktaCampaignResourceSettingsTargetResourcesEntitlementsList(this, "entitlements", false);
  public get entitlements() {
    return this._entitlements;
  }
  public putEntitlements(value: DataOktaCampaignResourceSettingsTargetResourcesEntitlements[] | cdktf.IResolvable) {
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

export class DataOktaCampaignResourceSettingsTargetResourcesList extends cdktf.ComplexList {
  public internalValue? : DataOktaCampaignResourceSettingsTargetResources[] | cdktf.IResolvable

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
  public get(index: number): DataOktaCampaignResourceSettingsTargetResourcesOutputReference {
    return new DataOktaCampaignResourceSettingsTargetResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaCampaignResourceSettings {
  /**
  * Include admin roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#include_admin_roles DataOktaCampaign#include_admin_roles}
  */
  readonly includeAdminRoles?: boolean | cdktf.IResolvable;
  /**
  * Include entitlements for this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#include_entitlements DataOktaCampaign#include_entitlements}
  */
  readonly includeEntitlements?: boolean | cdktf.IResolvable;
  /**
  * Only include individually assigned groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#individually_assigned_apps_only DataOktaCampaign#individually_assigned_apps_only}
  */
  readonly individuallyAssignedAppsOnly?: boolean | cdktf.IResolvable;
  /**
  * Only include individually assigned groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#individually_assigned_groups_only DataOktaCampaign#individually_assigned_groups_only}
  */
  readonly individuallyAssignedGroupsOnly?: boolean | cdktf.IResolvable;
  /**
  * Only include out-of-policy entitlements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#only_include_out_of_policy_entitlements DataOktaCampaign#only_include_out_of_policy_entitlements}
  */
  readonly onlyIncludeOutOfPolicyEntitlements?: boolean | cdktf.IResolvable;
  /**
  * excluded_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#excluded_resources DataOktaCampaign#excluded_resources}
  */
  readonly excludedResources?: DataOktaCampaignResourceSettingsExcludedResources[] | cdktf.IResolvable;
  /**
  * target_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#target_resources DataOktaCampaign#target_resources}
  */
  readonly targetResources?: DataOktaCampaignResourceSettingsTargetResources[] | cdktf.IResolvable;
}

export function dataOktaCampaignResourceSettingsToTerraform(struct?: DataOktaCampaignResourceSettings | cdktf.IResolvable): any {
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
    excluded_resources: cdktf.listMapper(dataOktaCampaignResourceSettingsExcludedResourcesToTerraform, true)(struct!.excludedResources),
    target_resources: cdktf.listMapper(dataOktaCampaignResourceSettingsTargetResourcesToTerraform, true)(struct!.targetResources),
  }
}


export function dataOktaCampaignResourceSettingsToHclTerraform(struct?: DataOktaCampaignResourceSettings | cdktf.IResolvable): any {
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
    excluded_resources: {
      value: cdktf.listMapperHcl(dataOktaCampaignResourceSettingsExcludedResourcesToHclTerraform, true)(struct!.excludedResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktaCampaignResourceSettingsExcludedResourcesList",
    },
    target_resources: {
      value: cdktf.listMapperHcl(dataOktaCampaignResourceSettingsTargetResourcesToHclTerraform, true)(struct!.targetResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktaCampaignResourceSettingsTargetResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaCampaignResourceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaCampaignResourceSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOktaCampaignResourceSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeAdminRoles = undefined;
      this._includeEntitlements = undefined;
      this._individuallyAssignedAppsOnly = undefined;
      this._individuallyAssignedGroupsOnly = undefined;
      this._onlyIncludeOutOfPolicyEntitlements = undefined;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // excluded_resources - computed: false, optional: true, required: false
  private _excludedResources = new DataOktaCampaignResourceSettingsExcludedResourcesList(this, "excluded_resources", false);
  public get excludedResources() {
    return this._excludedResources;
  }
  public putExcludedResources(value: DataOktaCampaignResourceSettingsExcludedResources[] | cdktf.IResolvable) {
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
  private _targetResources = new DataOktaCampaignResourceSettingsTargetResourcesList(this, "target_resources", false);
  public get targetResources() {
    return this._targetResources;
  }
  public putTargetResources(value: DataOktaCampaignResourceSettingsTargetResources[] | cdktf.IResolvable) {
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
export interface DataOktaCampaignReviewerSettingsReviewerLevelsStartReview {
}

export function dataOktaCampaignReviewerSettingsReviewerLevelsStartReviewToTerraform(struct?: DataOktaCampaignReviewerSettingsReviewerLevelsStartReview | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaCampaignReviewerSettingsReviewerLevelsStartReviewToHclTerraform(struct?: DataOktaCampaignReviewerSettingsReviewerLevelsStartReview | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaCampaignReviewerSettingsReviewerLevelsStartReviewOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaCampaignReviewerSettingsReviewerLevelsStartReview | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaCampaignReviewerSettingsReviewerLevelsStartReview | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // on_day - computed: true, optional: false, required: false
  public get onDay() {
    return this.getNumberAttribute('on_day');
  }

  // when - computed: true, optional: false, required: false
  public get when() {
    return this.getStringAttribute('when');
  }
}

export class DataOktaCampaignReviewerSettingsReviewerLevelsStartReviewList extends cdktf.ComplexList {
  public internalValue? : DataOktaCampaignReviewerSettingsReviewerLevelsStartReview[] | cdktf.IResolvable

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
  public get(index: number): DataOktaCampaignReviewerSettingsReviewerLevelsStartReviewOutputReference {
    return new DataOktaCampaignReviewerSettingsReviewerLevelsStartReviewOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaCampaignReviewerSettingsReviewerLevels {
  /**
  * start_review block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#start_review DataOktaCampaign#start_review}
  */
  readonly startReview?: DataOktaCampaignReviewerSettingsReviewerLevelsStartReview[] | cdktf.IResolvable;
}

export function dataOktaCampaignReviewerSettingsReviewerLevelsToTerraform(struct?: DataOktaCampaignReviewerSettingsReviewerLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_review: cdktf.listMapper(dataOktaCampaignReviewerSettingsReviewerLevelsStartReviewToTerraform, true)(struct!.startReview),
  }
}


export function dataOktaCampaignReviewerSettingsReviewerLevelsToHclTerraform(struct?: DataOktaCampaignReviewerSettingsReviewerLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_review: {
      value: cdktf.listMapperHcl(dataOktaCampaignReviewerSettingsReviewerLevelsStartReviewToHclTerraform, true)(struct!.startReview),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktaCampaignReviewerSettingsReviewerLevelsStartReviewList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaCampaignReviewerSettingsReviewerLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaCampaignReviewerSettingsReviewerLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startReview?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startReview = this._startReview?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaCampaignReviewerSettingsReviewerLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startReview.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startReview.internalValue = value.startReview;
    }
  }

  // fallback_reviewer_id - computed: true, optional: false, required: false
  public get fallbackReviewerId() {
    return this.getStringAttribute('fallback_reviewer_id');
  }

  // reviewer_group_id - computed: true, optional: false, required: false
  public get reviewerGroupId() {
    return this.getStringAttribute('reviewer_group_id');
  }

  // reviewer_id - computed: true, optional: false, required: false
  public get reviewerId() {
    return this.getStringAttribute('reviewer_id');
  }

  // reviewer_scope_expression - computed: true, optional: false, required: false
  public get reviewerScopeExpression() {
    return this.getStringAttribute('reviewer_scope_expression');
  }

  // self_review_disabled - computed: true, optional: false, required: false
  public get selfReviewDisabled() {
    return this.getBooleanAttribute('self_review_disabled');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // start_review - computed: false, optional: true, required: false
  private _startReview = new DataOktaCampaignReviewerSettingsReviewerLevelsStartReviewList(this, "start_review", false);
  public get startReview() {
    return this._startReview;
  }
  public putStartReview(value: DataOktaCampaignReviewerSettingsReviewerLevelsStartReview[] | cdktf.IResolvable) {
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

export class DataOktaCampaignReviewerSettingsReviewerLevelsList extends cdktf.ComplexList {
  public internalValue? : DataOktaCampaignReviewerSettingsReviewerLevels[] | cdktf.IResolvable

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
  public get(index: number): DataOktaCampaignReviewerSettingsReviewerLevelsOutputReference {
    return new DataOktaCampaignReviewerSettingsReviewerLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaCampaignReviewerSettings {
  /**
  * reviewer_levels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#reviewer_levels DataOktaCampaign#reviewer_levels}
  */
  readonly reviewerLevels?: DataOktaCampaignReviewerSettingsReviewerLevels[] | cdktf.IResolvable;
}

export function dataOktaCampaignReviewerSettingsToTerraform(struct?: DataOktaCampaignReviewerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reviewer_levels: cdktf.listMapper(dataOktaCampaignReviewerSettingsReviewerLevelsToTerraform, true)(struct!.reviewerLevels),
  }
}


export function dataOktaCampaignReviewerSettingsToHclTerraform(struct?: DataOktaCampaignReviewerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reviewer_levels: {
      value: cdktf.listMapperHcl(dataOktaCampaignReviewerSettingsReviewerLevelsToHclTerraform, true)(struct!.reviewerLevels),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktaCampaignReviewerSettingsReviewerLevelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaCampaignReviewerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaCampaignReviewerSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reviewerLevels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewerLevels = this._reviewerLevels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaCampaignReviewerSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reviewerLevels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reviewerLevels.internalValue = value.reviewerLevels;
    }
  }

  // bulk_decision_disabled - computed: true, optional: false, required: false
  public get bulkDecisionDisabled() {
    return this.getBooleanAttribute('bulk_decision_disabled');
  }

  // fallback_reviewer_id - computed: true, optional: false, required: false
  public get fallbackReviewerId() {
    return this.getStringAttribute('fallback_reviewer_id');
  }

  // justification_required - computed: true, optional: false, required: false
  public get justificationRequired() {
    return this.getBooleanAttribute('justification_required');
  }

  // reassignment_disabled - computed: true, optional: false, required: false
  public get reassignmentDisabled() {
    return this.getBooleanAttribute('reassignment_disabled');
  }

  // reviewer_group_id - computed: true, optional: false, required: false
  public get reviewerGroupId() {
    return this.getStringAttribute('reviewer_group_id');
  }

  // reviewer_id - computed: true, optional: false, required: false
  public get reviewerId() {
    return this.getStringAttribute('reviewer_id');
  }

  // reviewer_scope_expression - computed: true, optional: false, required: false
  public get reviewerScopeExpression() {
    return this.getStringAttribute('reviewer_scope_expression');
  }

  // self_review_disabled - computed: true, optional: false, required: false
  public get selfReviewDisabled() {
    return this.getBooleanAttribute('self_review_disabled');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // reviewer_levels - computed: false, optional: true, required: false
  private _reviewerLevels = new DataOktaCampaignReviewerSettingsReviewerLevelsList(this, "reviewer_levels", false);
  public get reviewerLevels() {
    return this._reviewerLevels;
  }
  public putReviewerLevels(value: DataOktaCampaignReviewerSettingsReviewerLevels[] | cdktf.IResolvable) {
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
export interface DataOktaCampaignScheduleSettingsRecurrence {
}

export function dataOktaCampaignScheduleSettingsRecurrenceToTerraform(struct?: DataOktaCampaignScheduleSettingsRecurrence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaCampaignScheduleSettingsRecurrenceToHclTerraform(struct?: DataOktaCampaignScheduleSettingsRecurrence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaCampaignScheduleSettingsRecurrenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaCampaignScheduleSettingsRecurrence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaCampaignScheduleSettingsRecurrence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // ends - computed: true, optional: false, required: false
  public get ends() {
    return this.getStringAttribute('ends');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // repeat_on_type - computed: true, optional: false, required: false
  public get repeatOnType() {
    return this.getStringAttribute('repeat_on_type');
  }
}

export class DataOktaCampaignScheduleSettingsRecurrenceList extends cdktf.ComplexList {
  public internalValue? : DataOktaCampaignScheduleSettingsRecurrence[] | cdktf.IResolvable

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
  public get(index: number): DataOktaCampaignScheduleSettingsRecurrenceOutputReference {
    return new DataOktaCampaignScheduleSettingsRecurrenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaCampaignScheduleSettings {
  /**
  * recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#recurrence DataOktaCampaign#recurrence}
  */
  readonly recurrence?: DataOktaCampaignScheduleSettingsRecurrence[] | cdktf.IResolvable;
}

export function dataOktaCampaignScheduleSettingsToTerraform(struct?: DataOktaCampaignScheduleSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurrence: cdktf.listMapper(dataOktaCampaignScheduleSettingsRecurrenceToTerraform, true)(struct!.recurrence),
  }
}


export function dataOktaCampaignScheduleSettingsToHclTerraform(struct?: DataOktaCampaignScheduleSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurrence: {
      value: cdktf.listMapperHcl(dataOktaCampaignScheduleSettingsRecurrenceToHclTerraform, true)(struct!.recurrence),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktaCampaignScheduleSettingsRecurrenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaCampaignScheduleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaCampaignScheduleSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaCampaignScheduleSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recurrence.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recurrence.internalValue = value.recurrence;
    }
  }

  // duration_in_days - computed: true, optional: false, required: false
  public get durationInDays() {
    return this.getNumberAttribute('duration_in_days');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence = new DataOktaCampaignScheduleSettingsRecurrenceList(this, "recurrence", false);
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: DataOktaCampaignScheduleSettingsRecurrence[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign okta_campaign}
*/
export class DataOktaCampaign extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_campaign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaCampaign resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaCampaign to import
  * @param importFromId The id of the existing DataOktaCampaign that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaCampaign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_campaign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/campaign okta_campaign} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaCampaignConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaCampaignConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_campaign',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0',
        providerVersionConstraint: '6.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._campaignType = config.campaignType;
    this._description = config.description;
    this._id = config.id;
    this._principalScopeSettings.internalValue = config.principalScopeSettings;
    this._remediationSettings.internalValue = config.remediationSettings;
    this._resourceSettings.internalValue = config.resourceSettings;
    this._reviewerSettings.internalValue = config.reviewerSettings;
    this._scheduleSettings.internalValue = config.scheduleSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: true, required: false
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

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recurring_campaign_id - computed: true, optional: false, required: false
  public get recurringCampaignId() {
    return this.getStringAttribute('recurring_campaign_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // notification_settings - computed: false, optional: false, required: false
  private _notificationSettings = new DataOktaCampaignNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }

  // principal_scope_settings - computed: false, optional: true, required: false
  private _principalScopeSettings = new DataOktaCampaignPrincipalScopeSettingsOutputReference(this, "principal_scope_settings");
  public get principalScopeSettings() {
    return this._principalScopeSettings;
  }
  public putPrincipalScopeSettings(value: DataOktaCampaignPrincipalScopeSettings) {
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
  private _remediationSettings = new DataOktaCampaignRemediationSettingsOutputReference(this, "remediation_settings");
  public get remediationSettings() {
    return this._remediationSettings;
  }
  public putRemediationSettings(value: DataOktaCampaignRemediationSettings) {
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
  private _resourceSettings = new DataOktaCampaignResourceSettingsOutputReference(this, "resource_settings");
  public get resourceSettings() {
    return this._resourceSettings;
  }
  public putResourceSettings(value: DataOktaCampaignResourceSettings) {
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
  private _reviewerSettings = new DataOktaCampaignReviewerSettingsOutputReference(this, "reviewer_settings");
  public get reviewerSettings() {
    return this._reviewerSettings;
  }
  public putReviewerSettings(value: DataOktaCampaignReviewerSettings) {
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
  private _scheduleSettings = new DataOktaCampaignScheduleSettingsOutputReference(this, "schedule_settings");
  public get scheduleSettings() {
    return this._scheduleSettings;
  }
  public putScheduleSettings(value: DataOktaCampaignScheduleSettings) {
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
      campaign_type: cdktf.stringToTerraform(this._campaignType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      principal_scope_settings: dataOktaCampaignPrincipalScopeSettingsToTerraform(this._principalScopeSettings.internalValue),
      remediation_settings: dataOktaCampaignRemediationSettingsToTerraform(this._remediationSettings.internalValue),
      resource_settings: dataOktaCampaignResourceSettingsToTerraform(this._resourceSettings.internalValue),
      reviewer_settings: dataOktaCampaignReviewerSettingsToTerraform(this._reviewerSettings.internalValue),
      schedule_settings: dataOktaCampaignScheduleSettingsToTerraform(this._scheduleSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_scope_settings: {
        value: dataOktaCampaignPrincipalScopeSettingsToHclTerraform(this._principalScopeSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataOktaCampaignPrincipalScopeSettings",
      },
      remediation_settings: {
        value: dataOktaCampaignRemediationSettingsToHclTerraform(this._remediationSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataOktaCampaignRemediationSettings",
      },
      resource_settings: {
        value: dataOktaCampaignResourceSettingsToHclTerraform(this._resourceSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataOktaCampaignResourceSettings",
      },
      reviewer_settings: {
        value: dataOktaCampaignReviewerSettingsToHclTerraform(this._reviewerSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataOktaCampaignReviewerSettings",
      },
      schedule_settings: {
        value: dataOktaCampaignScheduleSettingsToHclTerraform(this._scheduleSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataOktaCampaignScheduleSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
