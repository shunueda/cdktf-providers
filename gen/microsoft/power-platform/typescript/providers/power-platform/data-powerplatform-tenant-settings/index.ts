// https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/data-sources/powerplatform_tenant_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerplatformTenantSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/data-sources/powerplatform_tenant_settings#timeouts DataPowerplatformTenantSettings#timeouts}
  */
  readonly timeouts?: DataPowerplatformTenantSettingsTimeouts;
}
export interface DataPowerplatformTenantSettingsPowerPlatformCatalogSettings {
}

export function dataPowerplatformTenantSettingsPowerPlatformCatalogSettingsToTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformCatalogSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsPowerPlatformCatalogSettingsToHclTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformCatalogSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsPowerPlatformCatalogSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsPowerPlatformCatalogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsPowerPlatformCatalogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // power_catalog_audience_setting - computed: true, optional: false, required: false
  public get powerCatalogAudienceSetting() {
    return this.getStringAttribute('power_catalog_audience_setting');
  }
}
export interface DataPowerplatformTenantSettingsPowerPlatformChampions {
}

export function dataPowerplatformTenantSettingsPowerPlatformChampionsToTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformChampions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsPowerPlatformChampionsToHclTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformChampions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsPowerPlatformChampionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsPowerPlatformChampions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsPowerPlatformChampions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_champions_invitation_reachout - computed: true, optional: false, required: false
  public get disableChampionsInvitationReachout() {
    return this.getBooleanAttribute('disable_champions_invitation_reachout');
  }

  // disable_skills_match_invitation_reachout - computed: true, optional: false, required: false
  public get disableSkillsMatchInvitationReachout() {
    return this.getBooleanAttribute('disable_skills_match_invitation_reachout');
  }
}
export interface DataPowerplatformTenantSettingsPowerPlatformEnvironments {
}

export function dataPowerplatformTenantSettingsPowerPlatformEnvironmentsToTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformEnvironments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsPowerPlatformEnvironmentsToHclTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformEnvironments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsPowerPlatformEnvironmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsPowerPlatformEnvironments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsPowerPlatformEnvironments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_preferred_data_location_for_teams_environment - computed: true, optional: false, required: false
  public get disablePreferredDataLocationForTeamsEnvironment() {
    return this.getBooleanAttribute('disable_preferred_data_location_for_teams_environment');
  }
}
export interface DataPowerplatformTenantSettingsPowerPlatformGovernancePolicy {
}

export function dataPowerplatformTenantSettingsPowerPlatformGovernancePolicyToTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformGovernancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsPowerPlatformGovernancePolicyToHclTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformGovernancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsPowerPlatformGovernancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsPowerPlatformGovernancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsPowerPlatformGovernancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_desktop_flow_data_policy_management - computed: true, optional: false, required: false
  public get enableDesktopFlowDataPolicyManagement() {
    return this.getBooleanAttribute('enable_desktop_flow_data_policy_management');
  }
}
export interface DataPowerplatformTenantSettingsPowerPlatformGovernance {
}

export function dataPowerplatformTenantSettingsPowerPlatformGovernanceToTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformGovernance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsPowerPlatformGovernanceToHclTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformGovernance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsPowerPlatformGovernanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsPowerPlatformGovernance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsPowerPlatformGovernance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_admin_digest - computed: true, optional: false, required: false
  public get disableAdminDigest() {
    return this.getBooleanAttribute('disable_admin_digest');
  }

  // disable_developer_environment_creation_by_non_admin_users - computed: true, optional: false, required: false
  public get disableDeveloperEnvironmentCreationByNonAdminUsers() {
    return this.getBooleanAttribute('disable_developer_environment_creation_by_non_admin_users');
  }

  // enable_default_environment_routing - computed: true, optional: false, required: false
  public get enableDefaultEnvironmentRouting() {
    return this.getBooleanAttribute('enable_default_environment_routing');
  }

  // environment_routing_all_makers - computed: true, optional: false, required: false
  public get environmentRoutingAllMakers() {
    return this.getBooleanAttribute('environment_routing_all_makers');
  }

  // environment_routing_target_environment_group_id - computed: true, optional: false, required: false
  public get environmentRoutingTargetEnvironmentGroupId() {
    return this.getStringAttribute('environment_routing_target_environment_group_id');
  }

  // environment_routing_target_security_group_id - computed: true, optional: false, required: false
  public get environmentRoutingTargetSecurityGroupId() {
    return this.getStringAttribute('environment_routing_target_security_group_id');
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new DataPowerplatformTenantSettingsPowerPlatformGovernancePolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
}
export interface DataPowerplatformTenantSettingsPowerPlatformIntelligence {
}

export function dataPowerplatformTenantSettingsPowerPlatformIntelligenceToTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformIntelligence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsPowerPlatformIntelligenceToHclTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformIntelligence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsPowerPlatformIntelligenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsPowerPlatformIntelligence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsPowerPlatformIntelligence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_copilot - computed: true, optional: false, required: false
  public get disableCopilot() {
    return this.getBooleanAttribute('disable_copilot');
  }

  // enable_open_ai_bot_publishing - computed: true, optional: false, required: false
  public get enableOpenAiBotPublishing() {
    return this.getBooleanAttribute('enable_open_ai_bot_publishing');
  }
}
export interface DataPowerplatformTenantSettingsPowerPlatformLicensing {
}

export function dataPowerplatformTenantSettingsPowerPlatformLicensingToTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformLicensing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsPowerPlatformLicensingToHclTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformLicensing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsPowerPlatformLicensingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsPowerPlatformLicensing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsPowerPlatformLicensing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_billing_policy_creation_by_non_admin_users - computed: true, optional: false, required: false
  public get disableBillingPolicyCreationByNonAdminUsers() {
    return this.getBooleanAttribute('disable_billing_policy_creation_by_non_admin_users');
  }

  // disable_use_of_unassigned_ai_builder_credits - computed: true, optional: false, required: false
  public get disableUseOfUnassignedAiBuilderCredits() {
    return this.getBooleanAttribute('disable_use_of_unassigned_ai_builder_credits');
  }

  // enable_tenant_capacity_report_for_environment_admins - computed: true, optional: false, required: false
  public get enableTenantCapacityReportForEnvironmentAdmins() {
    return this.getBooleanAttribute('enable_tenant_capacity_report_for_environment_admins');
  }

  // enable_tenant_licensing_report_for_environment_admins - computed: true, optional: false, required: false
  public get enableTenantLicensingReportForEnvironmentAdmins() {
    return this.getBooleanAttribute('enable_tenant_licensing_report_for_environment_admins');
  }

  // storage_capacity_consumption_warning_threshold - computed: true, optional: false, required: false
  public get storageCapacityConsumptionWarningThreshold() {
    return this.getNumberAttribute('storage_capacity_consumption_warning_threshold');
  }
}
export interface DataPowerplatformTenantSettingsPowerPlatformModelExperimentation {
}

export function dataPowerplatformTenantSettingsPowerPlatformModelExperimentationToTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformModelExperimentation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsPowerPlatformModelExperimentationToHclTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformModelExperimentation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsPowerPlatformModelExperimentationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsPowerPlatformModelExperimentation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsPowerPlatformModelExperimentation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_data_logging - computed: true, optional: false, required: false
  public get disableDataLogging() {
    return this.getBooleanAttribute('disable_data_logging');
  }

  // enable_model_data_sharing - computed: true, optional: false, required: false
  public get enableModelDataSharing() {
    return this.getBooleanAttribute('enable_model_data_sharing');
  }
}
export interface DataPowerplatformTenantSettingsPowerPlatformPowerApps {
}

export function dataPowerplatformTenantSettingsPowerPlatformPowerAppsToTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformPowerApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsPowerPlatformPowerAppsToHclTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformPowerApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsPowerPlatformPowerAppsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsPowerPlatformPowerApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsPowerPlatformPowerApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_connection_sharing_with_everyone - computed: true, optional: false, required: false
  public get disableConnectionSharingWithEveryone() {
    return this.getBooleanAttribute('disable_connection_sharing_with_everyone');
  }

  // disable_create_from_figma - computed: true, optional: false, required: false
  public get disableCreateFromFigma() {
    return this.getBooleanAttribute('disable_create_from_figma');
  }

  // disable_create_from_image - computed: true, optional: false, required: false
  public get disableCreateFromImage() {
    return this.getBooleanAttribute('disable_create_from_image');
  }

  // disable_maker_match - computed: true, optional: false, required: false
  public get disableMakerMatch() {
    return this.getBooleanAttribute('disable_maker_match');
  }

  // disable_share_with_everyone - computed: true, optional: false, required: false
  public get disableShareWithEveryone() {
    return this.getBooleanAttribute('disable_share_with_everyone');
  }

  // disable_unused_license_assignment - computed: true, optional: false, required: false
  public get disableUnusedLicenseAssignment() {
    return this.getBooleanAttribute('disable_unused_license_assignment');
  }

  // enable_guests_to_make - computed: true, optional: false, required: false
  public get enableGuestsToMake() {
    return this.getBooleanAttribute('enable_guests_to_make');
  }
}
export interface DataPowerplatformTenantSettingsPowerPlatformPowerAutomate {
}

export function dataPowerplatformTenantSettingsPowerPlatformPowerAutomateToTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformPowerAutomate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsPowerPlatformPowerAutomateToHclTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformPowerAutomate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsPowerPlatformPowerAutomateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsPowerPlatformPowerAutomate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsPowerPlatformPowerAutomate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_copilot - computed: true, optional: false, required: false
  public get disableCopilot() {
    return this.getBooleanAttribute('disable_copilot');
  }
}
export interface DataPowerplatformTenantSettingsPowerPlatformPowerPages {
}

export function dataPowerplatformTenantSettingsPowerPlatformPowerPagesToTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformPowerPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsPowerPlatformPowerPagesToHclTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformPowerPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsPowerPlatformPowerPagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsPowerPlatformPowerPages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsPowerPlatformPowerPages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataPowerplatformTenantSettingsPowerPlatformSearch {
}

export function dataPowerplatformTenantSettingsPowerPlatformSearchToTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsPowerPlatformSearchToHclTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsPowerPlatformSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsPowerPlatformSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsPowerPlatformSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_bing_video_search - computed: true, optional: false, required: false
  public get disableBingVideoSearch() {
    return this.getBooleanAttribute('disable_bing_video_search');
  }

  // disable_community_search - computed: true, optional: false, required: false
  public get disableCommunitySearch() {
    return this.getBooleanAttribute('disable_community_search');
  }

  // disable_docs_search - computed: true, optional: false, required: false
  public get disableDocsSearch() {
    return this.getBooleanAttribute('disable_docs_search');
  }
}
export interface DataPowerplatformTenantSettingsPowerPlatformTeamsIntegration {
}

export function dataPowerplatformTenantSettingsPowerPlatformTeamsIntegrationToTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformTeamsIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsPowerPlatformTeamsIntegrationToHclTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformTeamsIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsPowerPlatformTeamsIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsPowerPlatformTeamsIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsPowerPlatformTeamsIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // share_with_colleagues_user_limit - computed: true, optional: false, required: false
  public get shareWithColleaguesUserLimit() {
    return this.getNumberAttribute('share_with_colleagues_user_limit');
  }
}
export interface DataPowerplatformTenantSettingsPowerPlatformUserManagementSettings {
}

export function dataPowerplatformTenantSettingsPowerPlatformUserManagementSettingsToTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformUserManagementSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsPowerPlatformUserManagementSettingsToHclTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatformUserManagementSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsPowerPlatformUserManagementSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsPowerPlatformUserManagementSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsPowerPlatformUserManagementSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_delete_disabled_user_in_all_environments - computed: true, optional: false, required: false
  public get enableDeleteDisabledUserInAllEnvironments() {
    return this.getBooleanAttribute('enable_delete_disabled_user_in_all_environments');
  }
}
export interface DataPowerplatformTenantSettingsPowerPlatform {
}

export function dataPowerplatformTenantSettingsPowerPlatformToTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsPowerPlatformToHclTerraform(struct?: DataPowerplatformTenantSettingsPowerPlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsPowerPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsPowerPlatform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsPowerPlatform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_settings - computed: true, optional: false, required: false
  private _catalogSettings = new DataPowerplatformTenantSettingsPowerPlatformCatalogSettingsOutputReference(this, "catalog_settings");
  public get catalogSettings() {
    return this._catalogSettings;
  }

  // champions - computed: true, optional: false, required: false
  private _champions = new DataPowerplatformTenantSettingsPowerPlatformChampionsOutputReference(this, "champions");
  public get champions() {
    return this._champions;
  }

  // environments - computed: true, optional: false, required: false
  private _environments = new DataPowerplatformTenantSettingsPowerPlatformEnvironmentsOutputReference(this, "environments");
  public get environments() {
    return this._environments;
  }

  // governance - computed: true, optional: false, required: false
  private _governance = new DataPowerplatformTenantSettingsPowerPlatformGovernanceOutputReference(this, "governance");
  public get governance() {
    return this._governance;
  }

  // intelligence - computed: true, optional: false, required: false
  private _intelligence = new DataPowerplatformTenantSettingsPowerPlatformIntelligenceOutputReference(this, "intelligence");
  public get intelligence() {
    return this._intelligence;
  }

  // licensing - computed: true, optional: false, required: false
  private _licensing = new DataPowerplatformTenantSettingsPowerPlatformLicensingOutputReference(this, "licensing");
  public get licensing() {
    return this._licensing;
  }

  // model_experimentation - computed: true, optional: false, required: false
  private _modelExperimentation = new DataPowerplatformTenantSettingsPowerPlatformModelExperimentationOutputReference(this, "model_experimentation");
  public get modelExperimentation() {
    return this._modelExperimentation;
  }

  // power_apps - computed: true, optional: false, required: false
  private _powerApps = new DataPowerplatformTenantSettingsPowerPlatformPowerAppsOutputReference(this, "power_apps");
  public get powerApps() {
    return this._powerApps;
  }

  // power_automate - computed: true, optional: false, required: false
  private _powerAutomate = new DataPowerplatformTenantSettingsPowerPlatformPowerAutomateOutputReference(this, "power_automate");
  public get powerAutomate() {
    return this._powerAutomate;
  }

  // power_pages - computed: true, optional: false, required: false
  private _powerPages = new DataPowerplatformTenantSettingsPowerPlatformPowerPagesOutputReference(this, "power_pages");
  public get powerPages() {
    return this._powerPages;
  }

  // search - computed: true, optional: false, required: false
  private _search = new DataPowerplatformTenantSettingsPowerPlatformSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }

  // teams_integration - computed: true, optional: false, required: false
  private _teamsIntegration = new DataPowerplatformTenantSettingsPowerPlatformTeamsIntegrationOutputReference(this, "teams_integration");
  public get teamsIntegration() {
    return this._teamsIntegration;
  }

  // user_management_settings - computed: true, optional: false, required: false
  private _userManagementSettings = new DataPowerplatformTenantSettingsPowerPlatformUserManagementSettingsOutputReference(this, "user_management_settings");
  public get userManagementSettings() {
    return this._userManagementSettings;
  }
}
export interface DataPowerplatformTenantSettingsTimeouts {
}

export function dataPowerplatformTenantSettingsTimeoutsToTerraform(struct?: DataPowerplatformTenantSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantSettingsTimeoutsToHclTerraform(struct?: DataPowerplatformTenantSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantSettingsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantSettingsTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/data-sources/powerplatform_tenant_settings powerplatform_tenant_settings}
*/
export class DataPowerplatformTenantSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerplatform_tenant_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerplatformTenantSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerplatformTenantSettings to import
  * @param importFromId The id of the existing DataPowerplatformTenantSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/data-sources/powerplatform_tenant_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerplatformTenantSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerplatform_tenant_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/data-sources/powerplatform_tenant_settings powerplatform_tenant_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerplatformTenantSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerplatformTenantSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerplatform_tenant_settings',
      terraformGeneratorMetadata: {
        providerName: 'power-platform',
        providerVersion: '4.0.0',
        providerVersionConstraint: '4.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_capacity_allocation_by_environment_admins - computed: true, optional: false, required: false
  public get disableCapacityAllocationByEnvironmentAdmins() {
    return this.getBooleanAttribute('disable_capacity_allocation_by_environment_admins');
  }

  // disable_environment_creation_by_non_admin_users - computed: true, optional: false, required: false
  public get disableEnvironmentCreationByNonAdminUsers() {
    return this.getBooleanAttribute('disable_environment_creation_by_non_admin_users');
  }

  // disable_newsletter_sendout - computed: true, optional: false, required: false
  public get disableNewsletterSendout() {
    return this.getBooleanAttribute('disable_newsletter_sendout');
  }

  // disable_nps_comments_reachout - computed: true, optional: false, required: false
  public get disableNpsCommentsReachout() {
    return this.getBooleanAttribute('disable_nps_comments_reachout');
  }

  // disable_portals_creation_by_non_admin_users - computed: true, optional: false, required: false
  public get disablePortalsCreationByNonAdminUsers() {
    return this.getBooleanAttribute('disable_portals_creation_by_non_admin_users');
  }

  // disable_support_tickets_visible_by_all_users - computed: true, optional: false, required: false
  public get disableSupportTicketsVisibleByAllUsers() {
    return this.getBooleanAttribute('disable_support_tickets_visible_by_all_users');
  }

  // disable_survey_feedback - computed: true, optional: false, required: false
  public get disableSurveyFeedback() {
    return this.getBooleanAttribute('disable_survey_feedback');
  }

  // disable_trial_environment_creation_by_non_admin_users - computed: true, optional: false, required: false
  public get disableTrialEnvironmentCreationByNonAdminUsers() {
    return this.getBooleanAttribute('disable_trial_environment_creation_by_non_admin_users');
  }

  // power_platform - computed: true, optional: false, required: false
  private _powerPlatform = new DataPowerplatformTenantSettingsPowerPlatformOutputReference(this, "power_platform");
  public get powerPlatform() {
    return this._powerPlatform;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataPowerplatformTenantSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataPowerplatformTenantSettingsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // walk_me_opt_out - computed: true, optional: false, required: false
  public get walkMeOptOut() {
    return this.getBooleanAttribute('walk_me_opt_out');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      timeouts: dataPowerplatformTenantSettingsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      timeouts: {
        value: dataPowerplatformTenantSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerplatformTenantSettingsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
