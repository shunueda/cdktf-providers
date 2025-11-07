// https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PowerplatformTenantSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable Capacity Allocation By Environment Admins. See [Add-on capacity management](https://learn.microsoft.com/power-platform/admin/capacity-add-on#control-who-can-allocate-add-on-capacity) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_capacity_allocation_by_environment_admins PowerplatformTenantSettings#disable_capacity_allocation_by_environment_admins}
  */
  readonly disableCapacityAllocationByEnvironmentAdmins?: boolean | cdktf.IResolvable;
  /**
  * Disable Environment Creation By Non Admin Users. See [Control environment creation](https://learn.microsoft.com/power-platform/admin/control-environment-creation) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_environment_creation_by_non_admin_users PowerplatformTenantSettings#disable_environment_creation_by_non_admin_users}
  */
  readonly disableEnvironmentCreationByNonAdminUsers?: boolean | cdktf.IResolvable;
  /**
  * Disable Newsletter Sendout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_newsletter_sendout PowerplatformTenantSettings#disable_newsletter_sendout}
  */
  readonly disableNewsletterSendout?: boolean | cdktf.IResolvable;
  /**
  * Disable NPS Comments Reachout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_nps_comments_reachout PowerplatformTenantSettings#disable_nps_comments_reachout}
  */
  readonly disableNpsCommentsReachout?: boolean | cdktf.IResolvable;
  /**
  * Disable Portals Creation By Non Admin Users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_portals_creation_by_non_admin_users PowerplatformTenantSettings#disable_portals_creation_by_non_admin_users}
  */
  readonly disablePortalsCreationByNonAdminUsers?: boolean | cdktf.IResolvable;
  /**
  * Disable Support Tickets Visible By All Users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_support_tickets_visible_by_all_users PowerplatformTenantSettings#disable_support_tickets_visible_by_all_users}
  */
  readonly disableSupportTicketsVisibleByAllUsers?: boolean | cdktf.IResolvable;
  /**
  * Disable Survey Feedback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_survey_feedback PowerplatformTenantSettings#disable_survey_feedback}
  */
  readonly disableSurveyFeedback?: boolean | cdktf.IResolvable;
  /**
  * Disable Trial Environment Creation By Non Admin Users. See [Control environment creation](https://learn.microsoft.com/power-platform/admin/control-environment-creation) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_trial_environment_creation_by_non_admin_users PowerplatformTenantSettings#disable_trial_environment_creation_by_non_admin_users}
  */
  readonly disableTrialEnvironmentCreationByNonAdminUsers?: boolean | cdktf.IResolvable;
  /**
  * Power Platform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#power_platform PowerplatformTenantSettings#power_platform}
  */
  readonly powerPlatform?: PowerplatformTenantSettingsPowerPlatform;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#timeouts PowerplatformTenantSettings#timeouts}
  */
  readonly timeouts?: PowerplatformTenantSettingsTimeouts;
  /**
  * Walk Me Opt Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#walk_me_opt_out PowerplatformTenantSettings#walk_me_opt_out}
  */
  readonly walkMeOptOut?: boolean | cdktf.IResolvable;
}
export interface PowerplatformTenantSettingsPowerPlatformCatalogSettings {
  /**
  * Power Catalog Audience Setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#power_catalog_audience_setting PowerplatformTenantSettings#power_catalog_audience_setting}
  */
  readonly powerCatalogAudienceSetting?: string;
}

export function powerplatformTenantSettingsPowerPlatformCatalogSettingsToTerraform(struct?: PowerplatformTenantSettingsPowerPlatformCatalogSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    power_catalog_audience_setting: cdktf.stringToTerraform(struct!.powerCatalogAudienceSetting),
  }
}


export function powerplatformTenantSettingsPowerPlatformCatalogSettingsToHclTerraform(struct?: PowerplatformTenantSettingsPowerPlatformCatalogSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    power_catalog_audience_setting: {
      value: cdktf.stringToHclTerraform(struct!.powerCatalogAudienceSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformTenantSettingsPowerPlatformCatalogSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsPowerPlatformCatalogSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._powerCatalogAudienceSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerCatalogAudienceSetting = this._powerCatalogAudienceSetting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsPowerPlatformCatalogSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._powerCatalogAudienceSetting = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._powerCatalogAudienceSetting = value.powerCatalogAudienceSetting;
    }
  }

  // power_catalog_audience_setting - computed: false, optional: true, required: false
  private _powerCatalogAudienceSetting?: string; 
  public get powerCatalogAudienceSetting() {
    return this.getStringAttribute('power_catalog_audience_setting');
  }
  public set powerCatalogAudienceSetting(value: string) {
    this._powerCatalogAudienceSetting = value;
  }
  public resetPowerCatalogAudienceSetting() {
    this._powerCatalogAudienceSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerCatalogAudienceSettingInput() {
    return this._powerCatalogAudienceSetting;
  }
}
export interface PowerplatformTenantSettingsPowerPlatformChampions {
  /**
  * Disable Champions Invitation Reachout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_champions_invitation_reachout PowerplatformTenantSettings#disable_champions_invitation_reachout}
  */
  readonly disableChampionsInvitationReachout?: boolean | cdktf.IResolvable;
  /**
  * Disable Skills Match Invitation Reachout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_skills_match_invitation_reachout PowerplatformTenantSettings#disable_skills_match_invitation_reachout}
  */
  readonly disableSkillsMatchInvitationReachout?: boolean | cdktf.IResolvable;
}

export function powerplatformTenantSettingsPowerPlatformChampionsToTerraform(struct?: PowerplatformTenantSettingsPowerPlatformChampions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_champions_invitation_reachout: cdktf.booleanToTerraform(struct!.disableChampionsInvitationReachout),
    disable_skills_match_invitation_reachout: cdktf.booleanToTerraform(struct!.disableSkillsMatchInvitationReachout),
  }
}


export function powerplatformTenantSettingsPowerPlatformChampionsToHclTerraform(struct?: PowerplatformTenantSettingsPowerPlatformChampions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_champions_invitation_reachout: {
      value: cdktf.booleanToHclTerraform(struct!.disableChampionsInvitationReachout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_skills_match_invitation_reachout: {
      value: cdktf.booleanToHclTerraform(struct!.disableSkillsMatchInvitationReachout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformTenantSettingsPowerPlatformChampionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsPowerPlatformChampions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableChampionsInvitationReachout !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableChampionsInvitationReachout = this._disableChampionsInvitationReachout;
    }
    if (this._disableSkillsMatchInvitationReachout !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSkillsMatchInvitationReachout = this._disableSkillsMatchInvitationReachout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsPowerPlatformChampions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableChampionsInvitationReachout = undefined;
      this._disableSkillsMatchInvitationReachout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableChampionsInvitationReachout = value.disableChampionsInvitationReachout;
      this._disableSkillsMatchInvitationReachout = value.disableSkillsMatchInvitationReachout;
    }
  }

  // disable_champions_invitation_reachout - computed: false, optional: true, required: false
  private _disableChampionsInvitationReachout?: boolean | cdktf.IResolvable; 
  public get disableChampionsInvitationReachout() {
    return this.getBooleanAttribute('disable_champions_invitation_reachout');
  }
  public set disableChampionsInvitationReachout(value: boolean | cdktf.IResolvable) {
    this._disableChampionsInvitationReachout = value;
  }
  public resetDisableChampionsInvitationReachout() {
    this._disableChampionsInvitationReachout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableChampionsInvitationReachoutInput() {
    return this._disableChampionsInvitationReachout;
  }

  // disable_skills_match_invitation_reachout - computed: false, optional: true, required: false
  private _disableSkillsMatchInvitationReachout?: boolean | cdktf.IResolvable; 
  public get disableSkillsMatchInvitationReachout() {
    return this.getBooleanAttribute('disable_skills_match_invitation_reachout');
  }
  public set disableSkillsMatchInvitationReachout(value: boolean | cdktf.IResolvable) {
    this._disableSkillsMatchInvitationReachout = value;
  }
  public resetDisableSkillsMatchInvitationReachout() {
    this._disableSkillsMatchInvitationReachout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSkillsMatchInvitationReachoutInput() {
    return this._disableSkillsMatchInvitationReachout;
  }
}
export interface PowerplatformTenantSettingsPowerPlatformEnvironments {
  /**
  * Disable Preferred Data Location For Teams Environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_preferred_data_location_for_teams_environment PowerplatformTenantSettings#disable_preferred_data_location_for_teams_environment}
  */
  readonly disablePreferredDataLocationForTeamsEnvironment?: boolean | cdktf.IResolvable;
}

export function powerplatformTenantSettingsPowerPlatformEnvironmentsToTerraform(struct?: PowerplatformTenantSettingsPowerPlatformEnvironments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_preferred_data_location_for_teams_environment: cdktf.booleanToTerraform(struct!.disablePreferredDataLocationForTeamsEnvironment),
  }
}


export function powerplatformTenantSettingsPowerPlatformEnvironmentsToHclTerraform(struct?: PowerplatformTenantSettingsPowerPlatformEnvironments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_preferred_data_location_for_teams_environment: {
      value: cdktf.booleanToHclTerraform(struct!.disablePreferredDataLocationForTeamsEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformTenantSettingsPowerPlatformEnvironmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsPowerPlatformEnvironments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePreferredDataLocationForTeamsEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePreferredDataLocationForTeamsEnvironment = this._disablePreferredDataLocationForTeamsEnvironment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsPowerPlatformEnvironments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disablePreferredDataLocationForTeamsEnvironment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disablePreferredDataLocationForTeamsEnvironment = value.disablePreferredDataLocationForTeamsEnvironment;
    }
  }

  // disable_preferred_data_location_for_teams_environment - computed: false, optional: true, required: false
  private _disablePreferredDataLocationForTeamsEnvironment?: boolean | cdktf.IResolvable; 
  public get disablePreferredDataLocationForTeamsEnvironment() {
    return this.getBooleanAttribute('disable_preferred_data_location_for_teams_environment');
  }
  public set disablePreferredDataLocationForTeamsEnvironment(value: boolean | cdktf.IResolvable) {
    this._disablePreferredDataLocationForTeamsEnvironment = value;
  }
  public resetDisablePreferredDataLocationForTeamsEnvironment() {
    this._disablePreferredDataLocationForTeamsEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePreferredDataLocationForTeamsEnvironmentInput() {
    return this._disablePreferredDataLocationForTeamsEnvironment;
  }
}
export interface PowerplatformTenantSettingsPowerPlatformGovernancePolicy {
  /**
  * Enable Desktop Flow Data Policy Management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#enable_desktop_flow_data_policy_management PowerplatformTenantSettings#enable_desktop_flow_data_policy_management}
  */
  readonly enableDesktopFlowDataPolicyManagement?: boolean | cdktf.IResolvable;
}

export function powerplatformTenantSettingsPowerPlatformGovernancePolicyToTerraform(struct?: PowerplatformTenantSettingsPowerPlatformGovernancePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_desktop_flow_data_policy_management: cdktf.booleanToTerraform(struct!.enableDesktopFlowDataPolicyManagement),
  }
}


export function powerplatformTenantSettingsPowerPlatformGovernancePolicyToHclTerraform(struct?: PowerplatformTenantSettingsPowerPlatformGovernancePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_desktop_flow_data_policy_management: {
      value: cdktf.booleanToHclTerraform(struct!.enableDesktopFlowDataPolicyManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformTenantSettingsPowerPlatformGovernancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsPowerPlatformGovernancePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDesktopFlowDataPolicyManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDesktopFlowDataPolicyManagement = this._enableDesktopFlowDataPolicyManagement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsPowerPlatformGovernancePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableDesktopFlowDataPolicyManagement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableDesktopFlowDataPolicyManagement = value.enableDesktopFlowDataPolicyManagement;
    }
  }

  // enable_desktop_flow_data_policy_management - computed: false, optional: true, required: false
  private _enableDesktopFlowDataPolicyManagement?: boolean | cdktf.IResolvable; 
  public get enableDesktopFlowDataPolicyManagement() {
    return this.getBooleanAttribute('enable_desktop_flow_data_policy_management');
  }
  public set enableDesktopFlowDataPolicyManagement(value: boolean | cdktf.IResolvable) {
    this._enableDesktopFlowDataPolicyManagement = value;
  }
  public resetEnableDesktopFlowDataPolicyManagement() {
    this._enableDesktopFlowDataPolicyManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDesktopFlowDataPolicyManagementInput() {
    return this._enableDesktopFlowDataPolicyManagement;
  }
}
export interface PowerplatformTenantSettingsPowerPlatformGovernance {
  /**
  * Disable Admin Digest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_admin_digest PowerplatformTenantSettings#disable_admin_digest}
  */
  readonly disableAdminDigest?: boolean | cdktf.IResolvable;
  /**
  * Disable Developer Environment Creation By Non Admin Users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_developer_environment_creation_by_non_admin_users PowerplatformTenantSettings#disable_developer_environment_creation_by_non_admin_users}
  */
  readonly disableDeveloperEnvironmentCreationByNonAdminUsers?: boolean | cdktf.IResolvable;
  /**
  * Enable Default Environment Routing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#enable_default_environment_routing PowerplatformTenantSettings#enable_default_environment_routing}
  */
  readonly enableDefaultEnvironmentRouting?: boolean | cdktf.IResolvable;
  /**
  * Select who can be routed to a new personal developer environment. (All Makers = true, New Makers = false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#environment_routing_all_makers PowerplatformTenantSettings#environment_routing_all_makers}
  */
  readonly environmentRoutingAllMakers?: boolean | cdktf.IResolvable;
  /**
  * Assign newly created personal developer environments to a specific environment group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#environment_routing_target_environment_group_id PowerplatformTenantSettings#environment_routing_target_environment_group_id}
  */
  readonly environmentRoutingTargetEnvironmentGroupId?: string;
  /**
  * Restrict routing to members of the following security group. (00000000-0000-0000-0000-000000000000 allows all users)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#environment_routing_target_security_group_id PowerplatformTenantSettings#environment_routing_target_security_group_id}
  */
  readonly environmentRoutingTargetSecurityGroupId?: string;
  /**
  * Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#policy PowerplatformTenantSettings#policy}
  */
  readonly policy?: PowerplatformTenantSettingsPowerPlatformGovernancePolicy;
}

export function powerplatformTenantSettingsPowerPlatformGovernanceToTerraform(struct?: PowerplatformTenantSettingsPowerPlatformGovernance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_admin_digest: cdktf.booleanToTerraform(struct!.disableAdminDigest),
    disable_developer_environment_creation_by_non_admin_users: cdktf.booleanToTerraform(struct!.disableDeveloperEnvironmentCreationByNonAdminUsers),
    enable_default_environment_routing: cdktf.booleanToTerraform(struct!.enableDefaultEnvironmentRouting),
    environment_routing_all_makers: cdktf.booleanToTerraform(struct!.environmentRoutingAllMakers),
    environment_routing_target_environment_group_id: cdktf.stringToTerraform(struct!.environmentRoutingTargetEnvironmentGroupId),
    environment_routing_target_security_group_id: cdktf.stringToTerraform(struct!.environmentRoutingTargetSecurityGroupId),
    policy: powerplatformTenantSettingsPowerPlatformGovernancePolicyToTerraform(struct!.policy),
  }
}


export function powerplatformTenantSettingsPowerPlatformGovernanceToHclTerraform(struct?: PowerplatformTenantSettingsPowerPlatformGovernance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_admin_digest: {
      value: cdktf.booleanToHclTerraform(struct!.disableAdminDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_developer_environment_creation_by_non_admin_users: {
      value: cdktf.booleanToHclTerraform(struct!.disableDeveloperEnvironmentCreationByNonAdminUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_default_environment_routing: {
      value: cdktf.booleanToHclTerraform(struct!.enableDefaultEnvironmentRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment_routing_all_makers: {
      value: cdktf.booleanToHclTerraform(struct!.environmentRoutingAllMakers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment_routing_target_environment_group_id: {
      value: cdktf.stringToHclTerraform(struct!.environmentRoutingTargetEnvironmentGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_routing_target_security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.environmentRoutingTargetSecurityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: powerplatformTenantSettingsPowerPlatformGovernancePolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformTenantSettingsPowerPlatformGovernancePolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformTenantSettingsPowerPlatformGovernanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsPowerPlatformGovernance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAdminDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAdminDigest = this._disableAdminDigest;
    }
    if (this._disableDeveloperEnvironmentCreationByNonAdminUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDeveloperEnvironmentCreationByNonAdminUsers = this._disableDeveloperEnvironmentCreationByNonAdminUsers;
    }
    if (this._enableDefaultEnvironmentRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDefaultEnvironmentRouting = this._enableDefaultEnvironmentRouting;
    }
    if (this._environmentRoutingAllMakers !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentRoutingAllMakers = this._environmentRoutingAllMakers;
    }
    if (this._environmentRoutingTargetEnvironmentGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentRoutingTargetEnvironmentGroupId = this._environmentRoutingTargetEnvironmentGroupId;
    }
    if (this._environmentRoutingTargetSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentRoutingTargetSecurityGroupId = this._environmentRoutingTargetSecurityGroupId;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsPowerPlatformGovernance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableAdminDigest = undefined;
      this._disableDeveloperEnvironmentCreationByNonAdminUsers = undefined;
      this._enableDefaultEnvironmentRouting = undefined;
      this._environmentRoutingAllMakers = undefined;
      this._environmentRoutingTargetEnvironmentGroupId = undefined;
      this._environmentRoutingTargetSecurityGroupId = undefined;
      this._policy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableAdminDigest = value.disableAdminDigest;
      this._disableDeveloperEnvironmentCreationByNonAdminUsers = value.disableDeveloperEnvironmentCreationByNonAdminUsers;
      this._enableDefaultEnvironmentRouting = value.enableDefaultEnvironmentRouting;
      this._environmentRoutingAllMakers = value.environmentRoutingAllMakers;
      this._environmentRoutingTargetEnvironmentGroupId = value.environmentRoutingTargetEnvironmentGroupId;
      this._environmentRoutingTargetSecurityGroupId = value.environmentRoutingTargetSecurityGroupId;
      this._policy.internalValue = value.policy;
    }
  }

  // disable_admin_digest - computed: false, optional: true, required: false
  private _disableAdminDigest?: boolean | cdktf.IResolvable; 
  public get disableAdminDigest() {
    return this.getBooleanAttribute('disable_admin_digest');
  }
  public set disableAdminDigest(value: boolean | cdktf.IResolvable) {
    this._disableAdminDigest = value;
  }
  public resetDisableAdminDigest() {
    this._disableAdminDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAdminDigestInput() {
    return this._disableAdminDigest;
  }

  // disable_developer_environment_creation_by_non_admin_users - computed: false, optional: true, required: false
  private _disableDeveloperEnvironmentCreationByNonAdminUsers?: boolean | cdktf.IResolvable; 
  public get disableDeveloperEnvironmentCreationByNonAdminUsers() {
    return this.getBooleanAttribute('disable_developer_environment_creation_by_non_admin_users');
  }
  public set disableDeveloperEnvironmentCreationByNonAdminUsers(value: boolean | cdktf.IResolvable) {
    this._disableDeveloperEnvironmentCreationByNonAdminUsers = value;
  }
  public resetDisableDeveloperEnvironmentCreationByNonAdminUsers() {
    this._disableDeveloperEnvironmentCreationByNonAdminUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDeveloperEnvironmentCreationByNonAdminUsersInput() {
    return this._disableDeveloperEnvironmentCreationByNonAdminUsers;
  }

  // enable_default_environment_routing - computed: false, optional: true, required: false
  private _enableDefaultEnvironmentRouting?: boolean | cdktf.IResolvable; 
  public get enableDefaultEnvironmentRouting() {
    return this.getBooleanAttribute('enable_default_environment_routing');
  }
  public set enableDefaultEnvironmentRouting(value: boolean | cdktf.IResolvable) {
    this._enableDefaultEnvironmentRouting = value;
  }
  public resetEnableDefaultEnvironmentRouting() {
    this._enableDefaultEnvironmentRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultEnvironmentRoutingInput() {
    return this._enableDefaultEnvironmentRouting;
  }

  // environment_routing_all_makers - computed: false, optional: true, required: false
  private _environmentRoutingAllMakers?: boolean | cdktf.IResolvable; 
  public get environmentRoutingAllMakers() {
    return this.getBooleanAttribute('environment_routing_all_makers');
  }
  public set environmentRoutingAllMakers(value: boolean | cdktf.IResolvable) {
    this._environmentRoutingAllMakers = value;
  }
  public resetEnvironmentRoutingAllMakers() {
    this._environmentRoutingAllMakers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentRoutingAllMakersInput() {
    return this._environmentRoutingAllMakers;
  }

  // environment_routing_target_environment_group_id - computed: false, optional: true, required: false
  private _environmentRoutingTargetEnvironmentGroupId?: string; 
  public get environmentRoutingTargetEnvironmentGroupId() {
    return this.getStringAttribute('environment_routing_target_environment_group_id');
  }
  public set environmentRoutingTargetEnvironmentGroupId(value: string) {
    this._environmentRoutingTargetEnvironmentGroupId = value;
  }
  public resetEnvironmentRoutingTargetEnvironmentGroupId() {
    this._environmentRoutingTargetEnvironmentGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentRoutingTargetEnvironmentGroupIdInput() {
    return this._environmentRoutingTargetEnvironmentGroupId;
  }

  // environment_routing_target_security_group_id - computed: false, optional: true, required: false
  private _environmentRoutingTargetSecurityGroupId?: string; 
  public get environmentRoutingTargetSecurityGroupId() {
    return this.getStringAttribute('environment_routing_target_security_group_id');
  }
  public set environmentRoutingTargetSecurityGroupId(value: string) {
    this._environmentRoutingTargetSecurityGroupId = value;
  }
  public resetEnvironmentRoutingTargetSecurityGroupId() {
    this._environmentRoutingTargetSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentRoutingTargetSecurityGroupIdInput() {
    return this._environmentRoutingTargetSecurityGroupId;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new PowerplatformTenantSettingsPowerPlatformGovernancePolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: PowerplatformTenantSettingsPowerPlatformGovernancePolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}
export interface PowerplatformTenantSettingsPowerPlatformIntelligence {
  /**
  * Disable Copilot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_copilot PowerplatformTenantSettings#disable_copilot}
  */
  readonly disableCopilot?: boolean | cdktf.IResolvable;
  /**
  * Enable Open AI Bot Publishing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#enable_open_ai_bot_publishing PowerplatformTenantSettings#enable_open_ai_bot_publishing}
  */
  readonly enableOpenAiBotPublishing?: boolean | cdktf.IResolvable;
}

export function powerplatformTenantSettingsPowerPlatformIntelligenceToTerraform(struct?: PowerplatformTenantSettingsPowerPlatformIntelligence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_copilot: cdktf.booleanToTerraform(struct!.disableCopilot),
    enable_open_ai_bot_publishing: cdktf.booleanToTerraform(struct!.enableOpenAiBotPublishing),
  }
}


export function powerplatformTenantSettingsPowerPlatformIntelligenceToHclTerraform(struct?: PowerplatformTenantSettingsPowerPlatformIntelligence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_copilot: {
      value: cdktf.booleanToHclTerraform(struct!.disableCopilot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_open_ai_bot_publishing: {
      value: cdktf.booleanToHclTerraform(struct!.enableOpenAiBotPublishing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformTenantSettingsPowerPlatformIntelligenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsPowerPlatformIntelligence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableCopilot !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCopilot = this._disableCopilot;
    }
    if (this._enableOpenAiBotPublishing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOpenAiBotPublishing = this._enableOpenAiBotPublishing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsPowerPlatformIntelligence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableCopilot = undefined;
      this._enableOpenAiBotPublishing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableCopilot = value.disableCopilot;
      this._enableOpenAiBotPublishing = value.enableOpenAiBotPublishing;
    }
  }

  // disable_copilot - computed: false, optional: true, required: false
  private _disableCopilot?: boolean | cdktf.IResolvable; 
  public get disableCopilot() {
    return this.getBooleanAttribute('disable_copilot');
  }
  public set disableCopilot(value: boolean | cdktf.IResolvable) {
    this._disableCopilot = value;
  }
  public resetDisableCopilot() {
    this._disableCopilot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCopilotInput() {
    return this._disableCopilot;
  }

  // enable_open_ai_bot_publishing - computed: false, optional: true, required: false
  private _enableOpenAiBotPublishing?: boolean | cdktf.IResolvable; 
  public get enableOpenAiBotPublishing() {
    return this.getBooleanAttribute('enable_open_ai_bot_publishing');
  }
  public set enableOpenAiBotPublishing(value: boolean | cdktf.IResolvable) {
    this._enableOpenAiBotPublishing = value;
  }
  public resetEnableOpenAiBotPublishing() {
    this._enableOpenAiBotPublishing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOpenAiBotPublishingInput() {
    return this._enableOpenAiBotPublishing;
  }
}
export interface PowerplatformTenantSettingsPowerPlatformLicensing {
  /**
  * Disable Billing Policy Creation By Non Admin Users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_billing_policy_creation_by_non_admin_users PowerplatformTenantSettings#disable_billing_policy_creation_by_non_admin_users}
  */
  readonly disableBillingPolicyCreationByNonAdminUsers?: boolean | cdktf.IResolvable;
  /**
  * Disable Use Of Unassigned AI Builder Credits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_use_of_unassigned_ai_builder_credits PowerplatformTenantSettings#disable_use_of_unassigned_ai_builder_credits}
  */
  readonly disableUseOfUnassignedAiBuilderCredits?: boolean | cdktf.IResolvable;
  /**
  * Enable Tenant Capacity Report For Environment Admins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#enable_tenant_capacity_report_for_environment_admins PowerplatformTenantSettings#enable_tenant_capacity_report_for_environment_admins}
  */
  readonly enableTenantCapacityReportForEnvironmentAdmins?: boolean | cdktf.IResolvable;
  /**
  * Enable Tenant Licensing Report For Environment Admins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#enable_tenant_licensing_report_for_environment_admins PowerplatformTenantSettings#enable_tenant_licensing_report_for_environment_admins}
  */
  readonly enableTenantLicensingReportForEnvironmentAdmins?: boolean | cdktf.IResolvable;
  /**
  * Storage Capacity Consumption Warning Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#storage_capacity_consumption_warning_threshold PowerplatformTenantSettings#storage_capacity_consumption_warning_threshold}
  */
  readonly storageCapacityConsumptionWarningThreshold?: number;
}

export function powerplatformTenantSettingsPowerPlatformLicensingToTerraform(struct?: PowerplatformTenantSettingsPowerPlatformLicensing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_billing_policy_creation_by_non_admin_users: cdktf.booleanToTerraform(struct!.disableBillingPolicyCreationByNonAdminUsers),
    disable_use_of_unassigned_ai_builder_credits: cdktf.booleanToTerraform(struct!.disableUseOfUnassignedAiBuilderCredits),
    enable_tenant_capacity_report_for_environment_admins: cdktf.booleanToTerraform(struct!.enableTenantCapacityReportForEnvironmentAdmins),
    enable_tenant_licensing_report_for_environment_admins: cdktf.booleanToTerraform(struct!.enableTenantLicensingReportForEnvironmentAdmins),
    storage_capacity_consumption_warning_threshold: cdktf.numberToTerraform(struct!.storageCapacityConsumptionWarningThreshold),
  }
}


export function powerplatformTenantSettingsPowerPlatformLicensingToHclTerraform(struct?: PowerplatformTenantSettingsPowerPlatformLicensing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_billing_policy_creation_by_non_admin_users: {
      value: cdktf.booleanToHclTerraform(struct!.disableBillingPolicyCreationByNonAdminUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_use_of_unassigned_ai_builder_credits: {
      value: cdktf.booleanToHclTerraform(struct!.disableUseOfUnassignedAiBuilderCredits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_tenant_capacity_report_for_environment_admins: {
      value: cdktf.booleanToHclTerraform(struct!.enableTenantCapacityReportForEnvironmentAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_tenant_licensing_report_for_environment_admins: {
      value: cdktf.booleanToHclTerraform(struct!.enableTenantLicensingReportForEnvironmentAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_capacity_consumption_warning_threshold: {
      value: cdktf.numberToHclTerraform(struct!.storageCapacityConsumptionWarningThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformTenantSettingsPowerPlatformLicensingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsPowerPlatformLicensing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableBillingPolicyCreationByNonAdminUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableBillingPolicyCreationByNonAdminUsers = this._disableBillingPolicyCreationByNonAdminUsers;
    }
    if (this._disableUseOfUnassignedAiBuilderCredits !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUseOfUnassignedAiBuilderCredits = this._disableUseOfUnassignedAiBuilderCredits;
    }
    if (this._enableTenantCapacityReportForEnvironmentAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTenantCapacityReportForEnvironmentAdmins = this._enableTenantCapacityReportForEnvironmentAdmins;
    }
    if (this._enableTenantLicensingReportForEnvironmentAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTenantLicensingReportForEnvironmentAdmins = this._enableTenantLicensingReportForEnvironmentAdmins;
    }
    if (this._storageCapacityConsumptionWarningThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCapacityConsumptionWarningThreshold = this._storageCapacityConsumptionWarningThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsPowerPlatformLicensing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableBillingPolicyCreationByNonAdminUsers = undefined;
      this._disableUseOfUnassignedAiBuilderCredits = undefined;
      this._enableTenantCapacityReportForEnvironmentAdmins = undefined;
      this._enableTenantLicensingReportForEnvironmentAdmins = undefined;
      this._storageCapacityConsumptionWarningThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableBillingPolicyCreationByNonAdminUsers = value.disableBillingPolicyCreationByNonAdminUsers;
      this._disableUseOfUnassignedAiBuilderCredits = value.disableUseOfUnassignedAiBuilderCredits;
      this._enableTenantCapacityReportForEnvironmentAdmins = value.enableTenantCapacityReportForEnvironmentAdmins;
      this._enableTenantLicensingReportForEnvironmentAdmins = value.enableTenantLicensingReportForEnvironmentAdmins;
      this._storageCapacityConsumptionWarningThreshold = value.storageCapacityConsumptionWarningThreshold;
    }
  }

  // disable_billing_policy_creation_by_non_admin_users - computed: false, optional: true, required: false
  private _disableBillingPolicyCreationByNonAdminUsers?: boolean | cdktf.IResolvable; 
  public get disableBillingPolicyCreationByNonAdminUsers() {
    return this.getBooleanAttribute('disable_billing_policy_creation_by_non_admin_users');
  }
  public set disableBillingPolicyCreationByNonAdminUsers(value: boolean | cdktf.IResolvable) {
    this._disableBillingPolicyCreationByNonAdminUsers = value;
  }
  public resetDisableBillingPolicyCreationByNonAdminUsers() {
    this._disableBillingPolicyCreationByNonAdminUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBillingPolicyCreationByNonAdminUsersInput() {
    return this._disableBillingPolicyCreationByNonAdminUsers;
  }

  // disable_use_of_unassigned_ai_builder_credits - computed: false, optional: true, required: false
  private _disableUseOfUnassignedAiBuilderCredits?: boolean | cdktf.IResolvable; 
  public get disableUseOfUnassignedAiBuilderCredits() {
    return this.getBooleanAttribute('disable_use_of_unassigned_ai_builder_credits');
  }
  public set disableUseOfUnassignedAiBuilderCredits(value: boolean | cdktf.IResolvable) {
    this._disableUseOfUnassignedAiBuilderCredits = value;
  }
  public resetDisableUseOfUnassignedAiBuilderCredits() {
    this._disableUseOfUnassignedAiBuilderCredits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUseOfUnassignedAiBuilderCreditsInput() {
    return this._disableUseOfUnassignedAiBuilderCredits;
  }

  // enable_tenant_capacity_report_for_environment_admins - computed: false, optional: true, required: false
  private _enableTenantCapacityReportForEnvironmentAdmins?: boolean | cdktf.IResolvable; 
  public get enableTenantCapacityReportForEnvironmentAdmins() {
    return this.getBooleanAttribute('enable_tenant_capacity_report_for_environment_admins');
  }
  public set enableTenantCapacityReportForEnvironmentAdmins(value: boolean | cdktf.IResolvable) {
    this._enableTenantCapacityReportForEnvironmentAdmins = value;
  }
  public resetEnableTenantCapacityReportForEnvironmentAdmins() {
    this._enableTenantCapacityReportForEnvironmentAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTenantCapacityReportForEnvironmentAdminsInput() {
    return this._enableTenantCapacityReportForEnvironmentAdmins;
  }

  // enable_tenant_licensing_report_for_environment_admins - computed: false, optional: true, required: false
  private _enableTenantLicensingReportForEnvironmentAdmins?: boolean | cdktf.IResolvable; 
  public get enableTenantLicensingReportForEnvironmentAdmins() {
    return this.getBooleanAttribute('enable_tenant_licensing_report_for_environment_admins');
  }
  public set enableTenantLicensingReportForEnvironmentAdmins(value: boolean | cdktf.IResolvable) {
    this._enableTenantLicensingReportForEnvironmentAdmins = value;
  }
  public resetEnableTenantLicensingReportForEnvironmentAdmins() {
    this._enableTenantLicensingReportForEnvironmentAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTenantLicensingReportForEnvironmentAdminsInput() {
    return this._enableTenantLicensingReportForEnvironmentAdmins;
  }

  // storage_capacity_consumption_warning_threshold - computed: false, optional: true, required: false
  private _storageCapacityConsumptionWarningThreshold?: number; 
  public get storageCapacityConsumptionWarningThreshold() {
    return this.getNumberAttribute('storage_capacity_consumption_warning_threshold');
  }
  public set storageCapacityConsumptionWarningThreshold(value: number) {
    this._storageCapacityConsumptionWarningThreshold = value;
  }
  public resetStorageCapacityConsumptionWarningThreshold() {
    this._storageCapacityConsumptionWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityConsumptionWarningThresholdInput() {
    return this._storageCapacityConsumptionWarningThreshold;
  }
}
export interface PowerplatformTenantSettingsPowerPlatformModelExperimentation {
  /**
  * Disable Data Logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_data_logging PowerplatformTenantSettings#disable_data_logging}
  */
  readonly disableDataLogging?: boolean | cdktf.IResolvable;
  /**
  * Enable Model Data Sharing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#enable_model_data_sharing PowerplatformTenantSettings#enable_model_data_sharing}
  */
  readonly enableModelDataSharing?: boolean | cdktf.IResolvable;
}

export function powerplatformTenantSettingsPowerPlatformModelExperimentationToTerraform(struct?: PowerplatformTenantSettingsPowerPlatformModelExperimentation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_data_logging: cdktf.booleanToTerraform(struct!.disableDataLogging),
    enable_model_data_sharing: cdktf.booleanToTerraform(struct!.enableModelDataSharing),
  }
}


export function powerplatformTenantSettingsPowerPlatformModelExperimentationToHclTerraform(struct?: PowerplatformTenantSettingsPowerPlatformModelExperimentation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_data_logging: {
      value: cdktf.booleanToHclTerraform(struct!.disableDataLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_model_data_sharing: {
      value: cdktf.booleanToHclTerraform(struct!.enableModelDataSharing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformTenantSettingsPowerPlatformModelExperimentationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsPowerPlatformModelExperimentation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableDataLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDataLogging = this._disableDataLogging;
    }
    if (this._enableModelDataSharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableModelDataSharing = this._enableModelDataSharing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsPowerPlatformModelExperimentation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableDataLogging = undefined;
      this._enableModelDataSharing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableDataLogging = value.disableDataLogging;
      this._enableModelDataSharing = value.enableModelDataSharing;
    }
  }

  // disable_data_logging - computed: false, optional: true, required: false
  private _disableDataLogging?: boolean | cdktf.IResolvable; 
  public get disableDataLogging() {
    return this.getBooleanAttribute('disable_data_logging');
  }
  public set disableDataLogging(value: boolean | cdktf.IResolvable) {
    this._disableDataLogging = value;
  }
  public resetDisableDataLogging() {
    this._disableDataLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDataLoggingInput() {
    return this._disableDataLogging;
  }

  // enable_model_data_sharing - computed: false, optional: true, required: false
  private _enableModelDataSharing?: boolean | cdktf.IResolvable; 
  public get enableModelDataSharing() {
    return this.getBooleanAttribute('enable_model_data_sharing');
  }
  public set enableModelDataSharing(value: boolean | cdktf.IResolvable) {
    this._enableModelDataSharing = value;
  }
  public resetEnableModelDataSharing() {
    this._enableModelDataSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableModelDataSharingInput() {
    return this._enableModelDataSharing;
  }
}
export interface PowerplatformTenantSettingsPowerPlatformPowerApps {
  /**
  * Disable Connection Sharing With Everyone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_connection_sharing_with_everyone PowerplatformTenantSettings#disable_connection_sharing_with_everyone}
  */
  readonly disableConnectionSharingWithEveryone?: boolean | cdktf.IResolvable;
  /**
  * Disable Create From Figma
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_create_from_figma PowerplatformTenantSettings#disable_create_from_figma}
  */
  readonly disableCreateFromFigma?: boolean | cdktf.IResolvable;
  /**
  * Disable Create From Image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_create_from_image PowerplatformTenantSettings#disable_create_from_image}
  */
  readonly disableCreateFromImage?: boolean | cdktf.IResolvable;
  /**
  * Disable Maker Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_maker_match PowerplatformTenantSettings#disable_maker_match}
  */
  readonly disableMakerMatch?: boolean | cdktf.IResolvable;
  /**
  * Disable Share With Everyone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_share_with_everyone PowerplatformTenantSettings#disable_share_with_everyone}
  */
  readonly disableShareWithEveryone?: boolean | cdktf.IResolvable;
  /**
  * Disable Unused License Assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_unused_license_assignment PowerplatformTenantSettings#disable_unused_license_assignment}
  */
  readonly disableUnusedLicenseAssignment?: boolean | cdktf.IResolvable;
  /**
  * Enable Guests To Make
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#enable_guests_to_make PowerplatformTenantSettings#enable_guests_to_make}
  */
  readonly enableGuestsToMake?: boolean | cdktf.IResolvable;
}

export function powerplatformTenantSettingsPowerPlatformPowerAppsToTerraform(struct?: PowerplatformTenantSettingsPowerPlatformPowerApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_connection_sharing_with_everyone: cdktf.booleanToTerraform(struct!.disableConnectionSharingWithEveryone),
    disable_create_from_figma: cdktf.booleanToTerraform(struct!.disableCreateFromFigma),
    disable_create_from_image: cdktf.booleanToTerraform(struct!.disableCreateFromImage),
    disable_maker_match: cdktf.booleanToTerraform(struct!.disableMakerMatch),
    disable_share_with_everyone: cdktf.booleanToTerraform(struct!.disableShareWithEveryone),
    disable_unused_license_assignment: cdktf.booleanToTerraform(struct!.disableUnusedLicenseAssignment),
    enable_guests_to_make: cdktf.booleanToTerraform(struct!.enableGuestsToMake),
  }
}


export function powerplatformTenantSettingsPowerPlatformPowerAppsToHclTerraform(struct?: PowerplatformTenantSettingsPowerPlatformPowerApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_connection_sharing_with_everyone: {
      value: cdktf.booleanToHclTerraform(struct!.disableConnectionSharingWithEveryone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_create_from_figma: {
      value: cdktf.booleanToHclTerraform(struct!.disableCreateFromFigma),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_create_from_image: {
      value: cdktf.booleanToHclTerraform(struct!.disableCreateFromImage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_maker_match: {
      value: cdktf.booleanToHclTerraform(struct!.disableMakerMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_share_with_everyone: {
      value: cdktf.booleanToHclTerraform(struct!.disableShareWithEveryone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_unused_license_assignment: {
      value: cdktf.booleanToHclTerraform(struct!.disableUnusedLicenseAssignment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_guests_to_make: {
      value: cdktf.booleanToHclTerraform(struct!.enableGuestsToMake),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformTenantSettingsPowerPlatformPowerAppsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsPowerPlatformPowerApps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableConnectionSharingWithEveryone !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableConnectionSharingWithEveryone = this._disableConnectionSharingWithEveryone;
    }
    if (this._disableCreateFromFigma !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCreateFromFigma = this._disableCreateFromFigma;
    }
    if (this._disableCreateFromImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCreateFromImage = this._disableCreateFromImage;
    }
    if (this._disableMakerMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMakerMatch = this._disableMakerMatch;
    }
    if (this._disableShareWithEveryone !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableShareWithEveryone = this._disableShareWithEveryone;
    }
    if (this._disableUnusedLicenseAssignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUnusedLicenseAssignment = this._disableUnusedLicenseAssignment;
    }
    if (this._enableGuestsToMake !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGuestsToMake = this._enableGuestsToMake;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsPowerPlatformPowerApps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableConnectionSharingWithEveryone = undefined;
      this._disableCreateFromFigma = undefined;
      this._disableCreateFromImage = undefined;
      this._disableMakerMatch = undefined;
      this._disableShareWithEveryone = undefined;
      this._disableUnusedLicenseAssignment = undefined;
      this._enableGuestsToMake = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableConnectionSharingWithEveryone = value.disableConnectionSharingWithEveryone;
      this._disableCreateFromFigma = value.disableCreateFromFigma;
      this._disableCreateFromImage = value.disableCreateFromImage;
      this._disableMakerMatch = value.disableMakerMatch;
      this._disableShareWithEveryone = value.disableShareWithEveryone;
      this._disableUnusedLicenseAssignment = value.disableUnusedLicenseAssignment;
      this._enableGuestsToMake = value.enableGuestsToMake;
    }
  }

  // disable_connection_sharing_with_everyone - computed: false, optional: true, required: false
  private _disableConnectionSharingWithEveryone?: boolean | cdktf.IResolvable; 
  public get disableConnectionSharingWithEveryone() {
    return this.getBooleanAttribute('disable_connection_sharing_with_everyone');
  }
  public set disableConnectionSharingWithEveryone(value: boolean | cdktf.IResolvable) {
    this._disableConnectionSharingWithEveryone = value;
  }
  public resetDisableConnectionSharingWithEveryone() {
    this._disableConnectionSharingWithEveryone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableConnectionSharingWithEveryoneInput() {
    return this._disableConnectionSharingWithEveryone;
  }

  // disable_create_from_figma - computed: false, optional: true, required: false
  private _disableCreateFromFigma?: boolean | cdktf.IResolvable; 
  public get disableCreateFromFigma() {
    return this.getBooleanAttribute('disable_create_from_figma');
  }
  public set disableCreateFromFigma(value: boolean | cdktf.IResolvable) {
    this._disableCreateFromFigma = value;
  }
  public resetDisableCreateFromFigma() {
    this._disableCreateFromFigma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCreateFromFigmaInput() {
    return this._disableCreateFromFigma;
  }

  // disable_create_from_image - computed: false, optional: true, required: false
  private _disableCreateFromImage?: boolean | cdktf.IResolvable; 
  public get disableCreateFromImage() {
    return this.getBooleanAttribute('disable_create_from_image');
  }
  public set disableCreateFromImage(value: boolean | cdktf.IResolvable) {
    this._disableCreateFromImage = value;
  }
  public resetDisableCreateFromImage() {
    this._disableCreateFromImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCreateFromImageInput() {
    return this._disableCreateFromImage;
  }

  // disable_maker_match - computed: false, optional: true, required: false
  private _disableMakerMatch?: boolean | cdktf.IResolvable; 
  public get disableMakerMatch() {
    return this.getBooleanAttribute('disable_maker_match');
  }
  public set disableMakerMatch(value: boolean | cdktf.IResolvable) {
    this._disableMakerMatch = value;
  }
  public resetDisableMakerMatch() {
    this._disableMakerMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMakerMatchInput() {
    return this._disableMakerMatch;
  }

  // disable_share_with_everyone - computed: false, optional: true, required: false
  private _disableShareWithEveryone?: boolean | cdktf.IResolvable; 
  public get disableShareWithEveryone() {
    return this.getBooleanAttribute('disable_share_with_everyone');
  }
  public set disableShareWithEveryone(value: boolean | cdktf.IResolvable) {
    this._disableShareWithEveryone = value;
  }
  public resetDisableShareWithEveryone() {
    this._disableShareWithEveryone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableShareWithEveryoneInput() {
    return this._disableShareWithEveryone;
  }

  // disable_unused_license_assignment - computed: false, optional: true, required: false
  private _disableUnusedLicenseAssignment?: boolean | cdktf.IResolvable; 
  public get disableUnusedLicenseAssignment() {
    return this.getBooleanAttribute('disable_unused_license_assignment');
  }
  public set disableUnusedLicenseAssignment(value: boolean | cdktf.IResolvable) {
    this._disableUnusedLicenseAssignment = value;
  }
  public resetDisableUnusedLicenseAssignment() {
    this._disableUnusedLicenseAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUnusedLicenseAssignmentInput() {
    return this._disableUnusedLicenseAssignment;
  }

  // enable_guests_to_make - computed: false, optional: true, required: false
  private _enableGuestsToMake?: boolean | cdktf.IResolvable; 
  public get enableGuestsToMake() {
    return this.getBooleanAttribute('enable_guests_to_make');
  }
  public set enableGuestsToMake(value: boolean | cdktf.IResolvable) {
    this._enableGuestsToMake = value;
  }
  public resetEnableGuestsToMake() {
    this._enableGuestsToMake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGuestsToMakeInput() {
    return this._enableGuestsToMake;
  }
}
export interface PowerplatformTenantSettingsPowerPlatformPowerAutomate {
  /**
  * Disable Copilot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_copilot PowerplatformTenantSettings#disable_copilot}
  */
  readonly disableCopilot?: boolean | cdktf.IResolvable;
}

export function powerplatformTenantSettingsPowerPlatformPowerAutomateToTerraform(struct?: PowerplatformTenantSettingsPowerPlatformPowerAutomate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_copilot: cdktf.booleanToTerraform(struct!.disableCopilot),
  }
}


export function powerplatformTenantSettingsPowerPlatformPowerAutomateToHclTerraform(struct?: PowerplatformTenantSettingsPowerPlatformPowerAutomate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_copilot: {
      value: cdktf.booleanToHclTerraform(struct!.disableCopilot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformTenantSettingsPowerPlatformPowerAutomateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsPowerPlatformPowerAutomate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableCopilot !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCopilot = this._disableCopilot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsPowerPlatformPowerAutomate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableCopilot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableCopilot = value.disableCopilot;
    }
  }

  // disable_copilot - computed: false, optional: true, required: false
  private _disableCopilot?: boolean | cdktf.IResolvable; 
  public get disableCopilot() {
    return this.getBooleanAttribute('disable_copilot');
  }
  public set disableCopilot(value: boolean | cdktf.IResolvable) {
    this._disableCopilot = value;
  }
  public resetDisableCopilot() {
    this._disableCopilot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCopilotInput() {
    return this._disableCopilot;
  }
}
export interface PowerplatformTenantSettingsPowerPlatformPowerPages {
}

export function powerplatformTenantSettingsPowerPlatformPowerPagesToTerraform(struct?: PowerplatformTenantSettingsPowerPlatformPowerPages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function powerplatformTenantSettingsPowerPlatformPowerPagesToHclTerraform(struct?: PowerplatformTenantSettingsPowerPlatformPowerPages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PowerplatformTenantSettingsPowerPlatformPowerPagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsPowerPlatformPowerPages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsPowerPlatformPowerPages | cdktf.IResolvable | undefined) {
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
}
export interface PowerplatformTenantSettingsPowerPlatformSearch {
  /**
  * Disable Bing Video Search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_bing_video_search PowerplatformTenantSettings#disable_bing_video_search}
  */
  readonly disableBingVideoSearch?: boolean | cdktf.IResolvable;
  /**
  * Disable Community Search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_community_search PowerplatformTenantSettings#disable_community_search}
  */
  readonly disableCommunitySearch?: boolean | cdktf.IResolvable;
  /**
  * Disable Docs Search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#disable_docs_search PowerplatformTenantSettings#disable_docs_search}
  */
  readonly disableDocsSearch?: boolean | cdktf.IResolvable;
}

export function powerplatformTenantSettingsPowerPlatformSearchToTerraform(struct?: PowerplatformTenantSettingsPowerPlatformSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_bing_video_search: cdktf.booleanToTerraform(struct!.disableBingVideoSearch),
    disable_community_search: cdktf.booleanToTerraform(struct!.disableCommunitySearch),
    disable_docs_search: cdktf.booleanToTerraform(struct!.disableDocsSearch),
  }
}


export function powerplatformTenantSettingsPowerPlatformSearchToHclTerraform(struct?: PowerplatformTenantSettingsPowerPlatformSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_bing_video_search: {
      value: cdktf.booleanToHclTerraform(struct!.disableBingVideoSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_community_search: {
      value: cdktf.booleanToHclTerraform(struct!.disableCommunitySearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_docs_search: {
      value: cdktf.booleanToHclTerraform(struct!.disableDocsSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformTenantSettingsPowerPlatformSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsPowerPlatformSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableBingVideoSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableBingVideoSearch = this._disableBingVideoSearch;
    }
    if (this._disableCommunitySearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCommunitySearch = this._disableCommunitySearch;
    }
    if (this._disableDocsSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDocsSearch = this._disableDocsSearch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsPowerPlatformSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableBingVideoSearch = undefined;
      this._disableCommunitySearch = undefined;
      this._disableDocsSearch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableBingVideoSearch = value.disableBingVideoSearch;
      this._disableCommunitySearch = value.disableCommunitySearch;
      this._disableDocsSearch = value.disableDocsSearch;
    }
  }

  // disable_bing_video_search - computed: false, optional: true, required: false
  private _disableBingVideoSearch?: boolean | cdktf.IResolvable; 
  public get disableBingVideoSearch() {
    return this.getBooleanAttribute('disable_bing_video_search');
  }
  public set disableBingVideoSearch(value: boolean | cdktf.IResolvable) {
    this._disableBingVideoSearch = value;
  }
  public resetDisableBingVideoSearch() {
    this._disableBingVideoSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBingVideoSearchInput() {
    return this._disableBingVideoSearch;
  }

  // disable_community_search - computed: false, optional: true, required: false
  private _disableCommunitySearch?: boolean | cdktf.IResolvable; 
  public get disableCommunitySearch() {
    return this.getBooleanAttribute('disable_community_search');
  }
  public set disableCommunitySearch(value: boolean | cdktf.IResolvable) {
    this._disableCommunitySearch = value;
  }
  public resetDisableCommunitySearch() {
    this._disableCommunitySearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCommunitySearchInput() {
    return this._disableCommunitySearch;
  }

  // disable_docs_search - computed: false, optional: true, required: false
  private _disableDocsSearch?: boolean | cdktf.IResolvable; 
  public get disableDocsSearch() {
    return this.getBooleanAttribute('disable_docs_search');
  }
  public set disableDocsSearch(value: boolean | cdktf.IResolvable) {
    this._disableDocsSearch = value;
  }
  public resetDisableDocsSearch() {
    this._disableDocsSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDocsSearchInput() {
    return this._disableDocsSearch;
  }
}
export interface PowerplatformTenantSettingsPowerPlatformTeamsIntegration {
  /**
  * Share With Colleagues User Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#share_with_colleagues_user_limit PowerplatformTenantSettings#share_with_colleagues_user_limit}
  */
  readonly shareWithColleaguesUserLimit?: number;
}

export function powerplatformTenantSettingsPowerPlatformTeamsIntegrationToTerraform(struct?: PowerplatformTenantSettingsPowerPlatformTeamsIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    share_with_colleagues_user_limit: cdktf.numberToTerraform(struct!.shareWithColleaguesUserLimit),
  }
}


export function powerplatformTenantSettingsPowerPlatformTeamsIntegrationToHclTerraform(struct?: PowerplatformTenantSettingsPowerPlatformTeamsIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    share_with_colleagues_user_limit: {
      value: cdktf.numberToHclTerraform(struct!.shareWithColleaguesUserLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformTenantSettingsPowerPlatformTeamsIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsPowerPlatformTeamsIntegration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shareWithColleaguesUserLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareWithColleaguesUserLimit = this._shareWithColleaguesUserLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsPowerPlatformTeamsIntegration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shareWithColleaguesUserLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shareWithColleaguesUserLimit = value.shareWithColleaguesUserLimit;
    }
  }

  // share_with_colleagues_user_limit - computed: false, optional: true, required: false
  private _shareWithColleaguesUserLimit?: number; 
  public get shareWithColleaguesUserLimit() {
    return this.getNumberAttribute('share_with_colleagues_user_limit');
  }
  public set shareWithColleaguesUserLimit(value: number) {
    this._shareWithColleaguesUserLimit = value;
  }
  public resetShareWithColleaguesUserLimit() {
    this._shareWithColleaguesUserLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareWithColleaguesUserLimitInput() {
    return this._shareWithColleaguesUserLimit;
  }
}
export interface PowerplatformTenantSettingsPowerPlatformUserManagementSettings {
  /**
  * Enable Delete Disabled User In All Environments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#enable_delete_disabled_user_in_all_environments PowerplatformTenantSettings#enable_delete_disabled_user_in_all_environments}
  */
  readonly enableDeleteDisabledUserInAllEnvironments?: boolean | cdktf.IResolvable;
}

export function powerplatformTenantSettingsPowerPlatformUserManagementSettingsToTerraform(struct?: PowerplatformTenantSettingsPowerPlatformUserManagementSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_delete_disabled_user_in_all_environments: cdktf.booleanToTerraform(struct!.enableDeleteDisabledUserInAllEnvironments),
  }
}


export function powerplatformTenantSettingsPowerPlatformUserManagementSettingsToHclTerraform(struct?: PowerplatformTenantSettingsPowerPlatformUserManagementSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_delete_disabled_user_in_all_environments: {
      value: cdktf.booleanToHclTerraform(struct!.enableDeleteDisabledUserInAllEnvironments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformTenantSettingsPowerPlatformUserManagementSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsPowerPlatformUserManagementSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDeleteDisabledUserInAllEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDeleteDisabledUserInAllEnvironments = this._enableDeleteDisabledUserInAllEnvironments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsPowerPlatformUserManagementSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableDeleteDisabledUserInAllEnvironments = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableDeleteDisabledUserInAllEnvironments = value.enableDeleteDisabledUserInAllEnvironments;
    }
  }

  // enable_delete_disabled_user_in_all_environments - computed: false, optional: true, required: false
  private _enableDeleteDisabledUserInAllEnvironments?: boolean | cdktf.IResolvable; 
  public get enableDeleteDisabledUserInAllEnvironments() {
    return this.getBooleanAttribute('enable_delete_disabled_user_in_all_environments');
  }
  public set enableDeleteDisabledUserInAllEnvironments(value: boolean | cdktf.IResolvable) {
    this._enableDeleteDisabledUserInAllEnvironments = value;
  }
  public resetEnableDeleteDisabledUserInAllEnvironments() {
    this._enableDeleteDisabledUserInAllEnvironments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeleteDisabledUserInAllEnvironmentsInput() {
    return this._enableDeleteDisabledUserInAllEnvironments;
  }
}
export interface PowerplatformTenantSettingsPowerPlatform {
  /**
  * Catalog Settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#catalog_settings PowerplatformTenantSettings#catalog_settings}
  */
  readonly catalogSettings?: PowerplatformTenantSettingsPowerPlatformCatalogSettings;
  /**
  * Champions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#champions PowerplatformTenantSettings#champions}
  */
  readonly champions?: PowerplatformTenantSettingsPowerPlatformChampions;
  /**
  * Environments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#environments PowerplatformTenantSettings#environments}
  */
  readonly environments?: PowerplatformTenantSettingsPowerPlatformEnvironments;
  /**
  * Governance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#governance PowerplatformTenantSettings#governance}
  */
  readonly governance?: PowerplatformTenantSettingsPowerPlatformGovernance;
  /**
  * Intelligence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#intelligence PowerplatformTenantSettings#intelligence}
  */
  readonly intelligence?: PowerplatformTenantSettingsPowerPlatformIntelligence;
  /**
  * Licensing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#licensing PowerplatformTenantSettings#licensing}
  */
  readonly licensing?: PowerplatformTenantSettingsPowerPlatformLicensing;
  /**
  * Model Experimentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#model_experimentation PowerplatformTenantSettings#model_experimentation}
  */
  readonly modelExperimentation?: PowerplatformTenantSettingsPowerPlatformModelExperimentation;
  /**
  * Power Apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#power_apps PowerplatformTenantSettings#power_apps}
  */
  readonly powerApps?: PowerplatformTenantSettingsPowerPlatformPowerApps;
  /**
  * Power Automate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#power_automate PowerplatformTenantSettings#power_automate}
  */
  readonly powerAutomate?: PowerplatformTenantSettingsPowerPlatformPowerAutomate;
  /**
  * Power Pages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#power_pages PowerplatformTenantSettings#power_pages}
  */
  readonly powerPages?: PowerplatformTenantSettingsPowerPlatformPowerPages;
  /**
  * Search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#search PowerplatformTenantSettings#search}
  */
  readonly search?: PowerplatformTenantSettingsPowerPlatformSearch;
  /**
  * Teams Integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#teams_integration PowerplatformTenantSettings#teams_integration}
  */
  readonly teamsIntegration?: PowerplatformTenantSettingsPowerPlatformTeamsIntegration;
  /**
  * User Management Settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#user_management_settings PowerplatformTenantSettings#user_management_settings}
  */
  readonly userManagementSettings?: PowerplatformTenantSettingsPowerPlatformUserManagementSettings;
}

export function powerplatformTenantSettingsPowerPlatformToTerraform(struct?: PowerplatformTenantSettingsPowerPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_settings: powerplatformTenantSettingsPowerPlatformCatalogSettingsToTerraform(struct!.catalogSettings),
    champions: powerplatformTenantSettingsPowerPlatformChampionsToTerraform(struct!.champions),
    environments: powerplatformTenantSettingsPowerPlatformEnvironmentsToTerraform(struct!.environments),
    governance: powerplatformTenantSettingsPowerPlatformGovernanceToTerraform(struct!.governance),
    intelligence: powerplatformTenantSettingsPowerPlatformIntelligenceToTerraform(struct!.intelligence),
    licensing: powerplatformTenantSettingsPowerPlatformLicensingToTerraform(struct!.licensing),
    model_experimentation: powerplatformTenantSettingsPowerPlatformModelExperimentationToTerraform(struct!.modelExperimentation),
    power_apps: powerplatformTenantSettingsPowerPlatformPowerAppsToTerraform(struct!.powerApps),
    power_automate: powerplatformTenantSettingsPowerPlatformPowerAutomateToTerraform(struct!.powerAutomate),
    power_pages: powerplatformTenantSettingsPowerPlatformPowerPagesToTerraform(struct!.powerPages),
    search: powerplatformTenantSettingsPowerPlatformSearchToTerraform(struct!.search),
    teams_integration: powerplatformTenantSettingsPowerPlatformTeamsIntegrationToTerraform(struct!.teamsIntegration),
    user_management_settings: powerplatformTenantSettingsPowerPlatformUserManagementSettingsToTerraform(struct!.userManagementSettings),
  }
}


export function powerplatformTenantSettingsPowerPlatformToHclTerraform(struct?: PowerplatformTenantSettingsPowerPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_settings: {
      value: powerplatformTenantSettingsPowerPlatformCatalogSettingsToHclTerraform(struct!.catalogSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformTenantSettingsPowerPlatformCatalogSettings",
    },
    champions: {
      value: powerplatformTenantSettingsPowerPlatformChampionsToHclTerraform(struct!.champions),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformTenantSettingsPowerPlatformChampions",
    },
    environments: {
      value: powerplatformTenantSettingsPowerPlatformEnvironmentsToHclTerraform(struct!.environments),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformTenantSettingsPowerPlatformEnvironments",
    },
    governance: {
      value: powerplatformTenantSettingsPowerPlatformGovernanceToHclTerraform(struct!.governance),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformTenantSettingsPowerPlatformGovernance",
    },
    intelligence: {
      value: powerplatformTenantSettingsPowerPlatformIntelligenceToHclTerraform(struct!.intelligence),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformTenantSettingsPowerPlatformIntelligence",
    },
    licensing: {
      value: powerplatformTenantSettingsPowerPlatformLicensingToHclTerraform(struct!.licensing),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformTenantSettingsPowerPlatformLicensing",
    },
    model_experimentation: {
      value: powerplatformTenantSettingsPowerPlatformModelExperimentationToHclTerraform(struct!.modelExperimentation),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformTenantSettingsPowerPlatformModelExperimentation",
    },
    power_apps: {
      value: powerplatformTenantSettingsPowerPlatformPowerAppsToHclTerraform(struct!.powerApps),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformTenantSettingsPowerPlatformPowerApps",
    },
    power_automate: {
      value: powerplatformTenantSettingsPowerPlatformPowerAutomateToHclTerraform(struct!.powerAutomate),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformTenantSettingsPowerPlatformPowerAutomate",
    },
    power_pages: {
      value: powerplatformTenantSettingsPowerPlatformPowerPagesToHclTerraform(struct!.powerPages),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformTenantSettingsPowerPlatformPowerPages",
    },
    search: {
      value: powerplatformTenantSettingsPowerPlatformSearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformTenantSettingsPowerPlatformSearch",
    },
    teams_integration: {
      value: powerplatformTenantSettingsPowerPlatformTeamsIntegrationToHclTerraform(struct!.teamsIntegration),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformTenantSettingsPowerPlatformTeamsIntegration",
    },
    user_management_settings: {
      value: powerplatformTenantSettingsPowerPlatformUserManagementSettingsToHclTerraform(struct!.userManagementSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformTenantSettingsPowerPlatformUserManagementSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformTenantSettingsPowerPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsPowerPlatform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogSettings = this._catalogSettings?.internalValue;
    }
    if (this._champions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.champions = this._champions?.internalValue;
    }
    if (this._environments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments?.internalValue;
    }
    if (this._governance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.governance = this._governance?.internalValue;
    }
    if (this._intelligence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intelligence = this._intelligence?.internalValue;
    }
    if (this._licensing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.licensing = this._licensing?.internalValue;
    }
    if (this._modelExperimentation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelExperimentation = this._modelExperimentation?.internalValue;
    }
    if (this._powerApps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerApps = this._powerApps?.internalValue;
    }
    if (this._powerAutomate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerAutomate = this._powerAutomate?.internalValue;
    }
    if (this._powerPages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerPages = this._powerPages?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    if (this._teamsIntegration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamsIntegration = this._teamsIntegration?.internalValue;
    }
    if (this._userManagementSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userManagementSettings = this._userManagementSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsPowerPlatform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogSettings.internalValue = undefined;
      this._champions.internalValue = undefined;
      this._environments.internalValue = undefined;
      this._governance.internalValue = undefined;
      this._intelligence.internalValue = undefined;
      this._licensing.internalValue = undefined;
      this._modelExperimentation.internalValue = undefined;
      this._powerApps.internalValue = undefined;
      this._powerAutomate.internalValue = undefined;
      this._powerPages.internalValue = undefined;
      this._search.internalValue = undefined;
      this._teamsIntegration.internalValue = undefined;
      this._userManagementSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogSettings.internalValue = value.catalogSettings;
      this._champions.internalValue = value.champions;
      this._environments.internalValue = value.environments;
      this._governance.internalValue = value.governance;
      this._intelligence.internalValue = value.intelligence;
      this._licensing.internalValue = value.licensing;
      this._modelExperimentation.internalValue = value.modelExperimentation;
      this._powerApps.internalValue = value.powerApps;
      this._powerAutomate.internalValue = value.powerAutomate;
      this._powerPages.internalValue = value.powerPages;
      this._search.internalValue = value.search;
      this._teamsIntegration.internalValue = value.teamsIntegration;
      this._userManagementSettings.internalValue = value.userManagementSettings;
    }
  }

  // catalog_settings - computed: false, optional: true, required: false
  private _catalogSettings = new PowerplatformTenantSettingsPowerPlatformCatalogSettingsOutputReference(this, "catalog_settings");
  public get catalogSettings() {
    return this._catalogSettings;
  }
  public putCatalogSettings(value: PowerplatformTenantSettingsPowerPlatformCatalogSettings) {
    this._catalogSettings.internalValue = value;
  }
  public resetCatalogSettings() {
    this._catalogSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogSettingsInput() {
    return this._catalogSettings.internalValue;
  }

  // champions - computed: false, optional: true, required: false
  private _champions = new PowerplatformTenantSettingsPowerPlatformChampionsOutputReference(this, "champions");
  public get champions() {
    return this._champions;
  }
  public putChampions(value: PowerplatformTenantSettingsPowerPlatformChampions) {
    this._champions.internalValue = value;
  }
  public resetChampions() {
    this._champions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get championsInput() {
    return this._champions.internalValue;
  }

  // environments - computed: false, optional: true, required: false
  private _environments = new PowerplatformTenantSettingsPowerPlatformEnvironmentsOutputReference(this, "environments");
  public get environments() {
    return this._environments;
  }
  public putEnvironments(value: PowerplatformTenantSettingsPowerPlatformEnvironments) {
    this._environments.internalValue = value;
  }
  public resetEnvironments() {
    this._environments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments.internalValue;
  }

  // governance - computed: false, optional: true, required: false
  private _governance = new PowerplatformTenantSettingsPowerPlatformGovernanceOutputReference(this, "governance");
  public get governance() {
    return this._governance;
  }
  public putGovernance(value: PowerplatformTenantSettingsPowerPlatformGovernance) {
    this._governance.internalValue = value;
  }
  public resetGovernance() {
    this._governance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get governanceInput() {
    return this._governance.internalValue;
  }

  // intelligence - computed: false, optional: true, required: false
  private _intelligence = new PowerplatformTenantSettingsPowerPlatformIntelligenceOutputReference(this, "intelligence");
  public get intelligence() {
    return this._intelligence;
  }
  public putIntelligence(value: PowerplatformTenantSettingsPowerPlatformIntelligence) {
    this._intelligence.internalValue = value;
  }
  public resetIntelligence() {
    this._intelligence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligenceInput() {
    return this._intelligence.internalValue;
  }

  // licensing - computed: false, optional: true, required: false
  private _licensing = new PowerplatformTenantSettingsPowerPlatformLicensingOutputReference(this, "licensing");
  public get licensing() {
    return this._licensing;
  }
  public putLicensing(value: PowerplatformTenantSettingsPowerPlatformLicensing) {
    this._licensing.internalValue = value;
  }
  public resetLicensing() {
    this._licensing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensingInput() {
    return this._licensing.internalValue;
  }

  // model_experimentation - computed: false, optional: true, required: false
  private _modelExperimentation = new PowerplatformTenantSettingsPowerPlatformModelExperimentationOutputReference(this, "model_experimentation");
  public get modelExperimentation() {
    return this._modelExperimentation;
  }
  public putModelExperimentation(value: PowerplatformTenantSettingsPowerPlatformModelExperimentation) {
    this._modelExperimentation.internalValue = value;
  }
  public resetModelExperimentation() {
    this._modelExperimentation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelExperimentationInput() {
    return this._modelExperimentation.internalValue;
  }

  // power_apps - computed: false, optional: true, required: false
  private _powerApps = new PowerplatformTenantSettingsPowerPlatformPowerAppsOutputReference(this, "power_apps");
  public get powerApps() {
    return this._powerApps;
  }
  public putPowerApps(value: PowerplatformTenantSettingsPowerPlatformPowerApps) {
    this._powerApps.internalValue = value;
  }
  public resetPowerApps() {
    this._powerApps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerAppsInput() {
    return this._powerApps.internalValue;
  }

  // power_automate - computed: false, optional: true, required: false
  private _powerAutomate = new PowerplatformTenantSettingsPowerPlatformPowerAutomateOutputReference(this, "power_automate");
  public get powerAutomate() {
    return this._powerAutomate;
  }
  public putPowerAutomate(value: PowerplatformTenantSettingsPowerPlatformPowerAutomate) {
    this._powerAutomate.internalValue = value;
  }
  public resetPowerAutomate() {
    this._powerAutomate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerAutomateInput() {
    return this._powerAutomate.internalValue;
  }

  // power_pages - computed: false, optional: true, required: false
  private _powerPages = new PowerplatformTenantSettingsPowerPlatformPowerPagesOutputReference(this, "power_pages");
  public get powerPages() {
    return this._powerPages;
  }
  public putPowerPages(value: PowerplatformTenantSettingsPowerPlatformPowerPages) {
    this._powerPages.internalValue = value;
  }
  public resetPowerPages() {
    this._powerPages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerPagesInput() {
    return this._powerPages.internalValue;
  }

  // search - computed: false, optional: true, required: false
  private _search = new PowerplatformTenantSettingsPowerPlatformSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerplatformTenantSettingsPowerPlatformSearch) {
    this._search.internalValue = value;
  }
  public resetSearch() {
    this._search.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }

  // teams_integration - computed: false, optional: true, required: false
  private _teamsIntegration = new PowerplatformTenantSettingsPowerPlatformTeamsIntegrationOutputReference(this, "teams_integration");
  public get teamsIntegration() {
    return this._teamsIntegration;
  }
  public putTeamsIntegration(value: PowerplatformTenantSettingsPowerPlatformTeamsIntegration) {
    this._teamsIntegration.internalValue = value;
  }
  public resetTeamsIntegration() {
    this._teamsIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsIntegrationInput() {
    return this._teamsIntegration.internalValue;
  }

  // user_management_settings - computed: false, optional: true, required: false
  private _userManagementSettings = new PowerplatformTenantSettingsPowerPlatformUserManagementSettingsOutputReference(this, "user_management_settings");
  public get userManagementSettings() {
    return this._userManagementSettings;
  }
  public putUserManagementSettings(value: PowerplatformTenantSettingsPowerPlatformUserManagementSettings) {
    this._userManagementSettings.internalValue = value;
  }
  public resetUserManagementSettings() {
    this._userManagementSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userManagementSettingsInput() {
    return this._userManagementSettings.internalValue;
  }
}
export interface PowerplatformTenantSettingsTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#create PowerplatformTenantSettings#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#delete PowerplatformTenantSettings#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#read PowerplatformTenantSettings#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#update PowerplatformTenantSettings#update}
  */
  readonly update?: string;
}

export function powerplatformTenantSettingsTimeoutsToTerraform(struct?: PowerplatformTenantSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function powerplatformTenantSettingsTimeoutsToHclTerraform(struct?: PowerplatformTenantSettingsTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class PowerplatformTenantSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantSettingsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantSettingsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._delete = value.delete;
      this._read = value.read;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings powerplatform_tenant_settings}
*/
export class PowerplatformTenantSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerplatform_tenant_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PowerplatformTenantSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PowerplatformTenantSettings to import
  * @param importFromId The id of the existing PowerplatformTenantSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PowerplatformTenantSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerplatform_tenant_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_tenant_settings powerplatform_tenant_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PowerplatformTenantSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PowerplatformTenantSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerplatform_tenant_settings',
      terraformGeneratorMetadata: {
        providerName: 'power-platform',
        providerVersion: '3.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableCapacityAllocationByEnvironmentAdmins = config.disableCapacityAllocationByEnvironmentAdmins;
    this._disableEnvironmentCreationByNonAdminUsers = config.disableEnvironmentCreationByNonAdminUsers;
    this._disableNewsletterSendout = config.disableNewsletterSendout;
    this._disableNpsCommentsReachout = config.disableNpsCommentsReachout;
    this._disablePortalsCreationByNonAdminUsers = config.disablePortalsCreationByNonAdminUsers;
    this._disableSupportTicketsVisibleByAllUsers = config.disableSupportTicketsVisibleByAllUsers;
    this._disableSurveyFeedback = config.disableSurveyFeedback;
    this._disableTrialEnvironmentCreationByNonAdminUsers = config.disableTrialEnvironmentCreationByNonAdminUsers;
    this._powerPlatform.internalValue = config.powerPlatform;
    this._timeouts.internalValue = config.timeouts;
    this._walkMeOptOut = config.walkMeOptOut;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_capacity_allocation_by_environment_admins - computed: false, optional: true, required: false
  private _disableCapacityAllocationByEnvironmentAdmins?: boolean | cdktf.IResolvable; 
  public get disableCapacityAllocationByEnvironmentAdmins() {
    return this.getBooleanAttribute('disable_capacity_allocation_by_environment_admins');
  }
  public set disableCapacityAllocationByEnvironmentAdmins(value: boolean | cdktf.IResolvable) {
    this._disableCapacityAllocationByEnvironmentAdmins = value;
  }
  public resetDisableCapacityAllocationByEnvironmentAdmins() {
    this._disableCapacityAllocationByEnvironmentAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCapacityAllocationByEnvironmentAdminsInput() {
    return this._disableCapacityAllocationByEnvironmentAdmins;
  }

  // disable_environment_creation_by_non_admin_users - computed: false, optional: true, required: false
  private _disableEnvironmentCreationByNonAdminUsers?: boolean | cdktf.IResolvable; 
  public get disableEnvironmentCreationByNonAdminUsers() {
    return this.getBooleanAttribute('disable_environment_creation_by_non_admin_users');
  }
  public set disableEnvironmentCreationByNonAdminUsers(value: boolean | cdktf.IResolvable) {
    this._disableEnvironmentCreationByNonAdminUsers = value;
  }
  public resetDisableEnvironmentCreationByNonAdminUsers() {
    this._disableEnvironmentCreationByNonAdminUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEnvironmentCreationByNonAdminUsersInput() {
    return this._disableEnvironmentCreationByNonAdminUsers;
  }

  // disable_newsletter_sendout - computed: false, optional: true, required: false
  private _disableNewsletterSendout?: boolean | cdktf.IResolvable; 
  public get disableNewsletterSendout() {
    return this.getBooleanAttribute('disable_newsletter_sendout');
  }
  public set disableNewsletterSendout(value: boolean | cdktf.IResolvable) {
    this._disableNewsletterSendout = value;
  }
  public resetDisableNewsletterSendout() {
    this._disableNewsletterSendout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNewsletterSendoutInput() {
    return this._disableNewsletterSendout;
  }

  // disable_nps_comments_reachout - computed: false, optional: true, required: false
  private _disableNpsCommentsReachout?: boolean | cdktf.IResolvable; 
  public get disableNpsCommentsReachout() {
    return this.getBooleanAttribute('disable_nps_comments_reachout');
  }
  public set disableNpsCommentsReachout(value: boolean | cdktf.IResolvable) {
    this._disableNpsCommentsReachout = value;
  }
  public resetDisableNpsCommentsReachout() {
    this._disableNpsCommentsReachout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNpsCommentsReachoutInput() {
    return this._disableNpsCommentsReachout;
  }

  // disable_portals_creation_by_non_admin_users - computed: false, optional: true, required: false
  private _disablePortalsCreationByNonAdminUsers?: boolean | cdktf.IResolvable; 
  public get disablePortalsCreationByNonAdminUsers() {
    return this.getBooleanAttribute('disable_portals_creation_by_non_admin_users');
  }
  public set disablePortalsCreationByNonAdminUsers(value: boolean | cdktf.IResolvable) {
    this._disablePortalsCreationByNonAdminUsers = value;
  }
  public resetDisablePortalsCreationByNonAdminUsers() {
    this._disablePortalsCreationByNonAdminUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePortalsCreationByNonAdminUsersInput() {
    return this._disablePortalsCreationByNonAdminUsers;
  }

  // disable_support_tickets_visible_by_all_users - computed: false, optional: true, required: false
  private _disableSupportTicketsVisibleByAllUsers?: boolean | cdktf.IResolvable; 
  public get disableSupportTicketsVisibleByAllUsers() {
    return this.getBooleanAttribute('disable_support_tickets_visible_by_all_users');
  }
  public set disableSupportTicketsVisibleByAllUsers(value: boolean | cdktf.IResolvable) {
    this._disableSupportTicketsVisibleByAllUsers = value;
  }
  public resetDisableSupportTicketsVisibleByAllUsers() {
    this._disableSupportTicketsVisibleByAllUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSupportTicketsVisibleByAllUsersInput() {
    return this._disableSupportTicketsVisibleByAllUsers;
  }

  // disable_survey_feedback - computed: false, optional: true, required: false
  private _disableSurveyFeedback?: boolean | cdktf.IResolvable; 
  public get disableSurveyFeedback() {
    return this.getBooleanAttribute('disable_survey_feedback');
  }
  public set disableSurveyFeedback(value: boolean | cdktf.IResolvable) {
    this._disableSurveyFeedback = value;
  }
  public resetDisableSurveyFeedback() {
    this._disableSurveyFeedback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSurveyFeedbackInput() {
    return this._disableSurveyFeedback;
  }

  // disable_trial_environment_creation_by_non_admin_users - computed: false, optional: true, required: false
  private _disableTrialEnvironmentCreationByNonAdminUsers?: boolean | cdktf.IResolvable; 
  public get disableTrialEnvironmentCreationByNonAdminUsers() {
    return this.getBooleanAttribute('disable_trial_environment_creation_by_non_admin_users');
  }
  public set disableTrialEnvironmentCreationByNonAdminUsers(value: boolean | cdktf.IResolvable) {
    this._disableTrialEnvironmentCreationByNonAdminUsers = value;
  }
  public resetDisableTrialEnvironmentCreationByNonAdminUsers() {
    this._disableTrialEnvironmentCreationByNonAdminUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTrialEnvironmentCreationByNonAdminUsersInput() {
    return this._disableTrialEnvironmentCreationByNonAdminUsers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // power_platform - computed: false, optional: true, required: false
  private _powerPlatform = new PowerplatformTenantSettingsPowerPlatformOutputReference(this, "power_platform");
  public get powerPlatform() {
    return this._powerPlatform;
  }
  public putPowerPlatform(value: PowerplatformTenantSettingsPowerPlatform) {
    this._powerPlatform.internalValue = value;
  }
  public resetPowerPlatform() {
    this._powerPlatform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerPlatformInput() {
    return this._powerPlatform.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PowerplatformTenantSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PowerplatformTenantSettingsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // walk_me_opt_out - computed: false, optional: true, required: false
  private _walkMeOptOut?: boolean | cdktf.IResolvable; 
  public get walkMeOptOut() {
    return this.getBooleanAttribute('walk_me_opt_out');
  }
  public set walkMeOptOut(value: boolean | cdktf.IResolvable) {
    this._walkMeOptOut = value;
  }
  public resetWalkMeOptOut() {
    this._walkMeOptOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walkMeOptOutInput() {
    return this._walkMeOptOut;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_capacity_allocation_by_environment_admins: cdktf.booleanToTerraform(this._disableCapacityAllocationByEnvironmentAdmins),
      disable_environment_creation_by_non_admin_users: cdktf.booleanToTerraform(this._disableEnvironmentCreationByNonAdminUsers),
      disable_newsletter_sendout: cdktf.booleanToTerraform(this._disableNewsletterSendout),
      disable_nps_comments_reachout: cdktf.booleanToTerraform(this._disableNpsCommentsReachout),
      disable_portals_creation_by_non_admin_users: cdktf.booleanToTerraform(this._disablePortalsCreationByNonAdminUsers),
      disable_support_tickets_visible_by_all_users: cdktf.booleanToTerraform(this._disableSupportTicketsVisibleByAllUsers),
      disable_survey_feedback: cdktf.booleanToTerraform(this._disableSurveyFeedback),
      disable_trial_environment_creation_by_non_admin_users: cdktf.booleanToTerraform(this._disableTrialEnvironmentCreationByNonAdminUsers),
      power_platform: powerplatformTenantSettingsPowerPlatformToTerraform(this._powerPlatform.internalValue),
      timeouts: powerplatformTenantSettingsTimeoutsToTerraform(this._timeouts.internalValue),
      walk_me_opt_out: cdktf.booleanToTerraform(this._walkMeOptOut),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_capacity_allocation_by_environment_admins: {
        value: cdktf.booleanToHclTerraform(this._disableCapacityAllocationByEnvironmentAdmins),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_environment_creation_by_non_admin_users: {
        value: cdktf.booleanToHclTerraform(this._disableEnvironmentCreationByNonAdminUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_newsletter_sendout: {
        value: cdktf.booleanToHclTerraform(this._disableNewsletterSendout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_nps_comments_reachout: {
        value: cdktf.booleanToHclTerraform(this._disableNpsCommentsReachout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_portals_creation_by_non_admin_users: {
        value: cdktf.booleanToHclTerraform(this._disablePortalsCreationByNonAdminUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_support_tickets_visible_by_all_users: {
        value: cdktf.booleanToHclTerraform(this._disableSupportTicketsVisibleByAllUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_survey_feedback: {
        value: cdktf.booleanToHclTerraform(this._disableSurveyFeedback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_trial_environment_creation_by_non_admin_users: {
        value: cdktf.booleanToHclTerraform(this._disableTrialEnvironmentCreationByNonAdminUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      power_platform: {
        value: powerplatformTenantSettingsPowerPlatformToHclTerraform(this._powerPlatform.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PowerplatformTenantSettingsPowerPlatform",
      },
      timeouts: {
        value: powerplatformTenantSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PowerplatformTenantSettingsTimeouts",
      },
      walk_me_opt_out: {
        value: cdktf.booleanToHclTerraform(this._walkMeOptOut),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
