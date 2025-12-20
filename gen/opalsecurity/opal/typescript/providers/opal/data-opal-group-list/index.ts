// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/group_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpalGroupListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The group ids to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/group_list#group_ids DataOpalGroupList#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/group_list#group_name DataOpalGroupList#group_name}
  */
  readonly groupName?: string;
  /**
  * The group type to filter by. must be one of ["ACTIVE_DIRECTORY_GROUP", "AWS_SSO_GROUP", "DATABRICKS_ACCOUNT_GROUP", "DUO_GROUP", "GIT_HUB_TEAM", "GIT_LAB_GROUP", "GOOGLE_GROUPS_GROUP", "GOOGLE_GROUPS_GKE_GROUP", "LDAP_GROUP", "OKTA_GROUP", "OKTA_GROUP_RULE", "TAILSCALE_GROUP", "OPAL_GROUP", "OPAL_ACCESS_RULE", "AZURE_AD_SECURITY_GROUP", "AZURE_AD_MICROSOFT_365_GROUP", "CONNECTOR_GROUP", "SNOWFLAKE_ROLE", "WORKDAY_USER_SECURITY_GROUP", "PAGERDUTY_ON_CALL_SCHEDULE", "INCIDENTIO_ON_CALL_SCHEDULE", "DEVIN_GROUP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/group_list#group_type_filter DataOpalGroupList#group_type_filter}
  */
  readonly groupTypeFilter?: string;
  /**
  * Number of results to return per page. Default is 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/group_list#page_size DataOpalGroupList#page_size}
  */
  readonly pageSize?: number;
}
export interface DataOpalGroupListResultsLastSuccessfulSync {
}

export function dataOpalGroupListResultsLastSuccessfulSyncToTerraform(struct?: DataOpalGroupListResultsLastSuccessfulSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsLastSuccessfulSyncToHclTerraform(struct?: DataOpalGroupListResultsLastSuccessfulSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsLastSuccessfulSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsLastSuccessfulSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsLastSuccessfulSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // completed_at - computed: true, optional: false, required: false
  public get completedAt() {
    return this.getStringAttribute('completed_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoActiveDirectoryGroup {
}

export function dataOpalGroupListResultsRemoteInfoActiveDirectoryGroupToTerraform(struct?: DataOpalGroupListResultsRemoteInfoActiveDirectoryGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoActiveDirectoryGroupToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoActiveDirectoryGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoActiveDirectoryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoActiveDirectoryGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoActiveDirectoryGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoAwsSsoGroup {
}

export function dataOpalGroupListResultsRemoteInfoAwsSsoGroupToTerraform(struct?: DataOpalGroupListResultsRemoteInfoAwsSsoGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoAwsSsoGroupToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoAwsSsoGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoAwsSsoGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoAwsSsoGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoAwsSsoGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoAzureAdMicrosoft365Group {
}

export function dataOpalGroupListResultsRemoteInfoAzureAdMicrosoft365GroupToTerraform(struct?: DataOpalGroupListResultsRemoteInfoAzureAdMicrosoft365Group): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoAzureAdMicrosoft365GroupToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoAzureAdMicrosoft365Group): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoAzureAdMicrosoft365GroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoAzureAdMicrosoft365Group | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoAzureAdMicrosoft365Group | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoAzureAdSecurityGroup {
}

export function dataOpalGroupListResultsRemoteInfoAzureAdSecurityGroupToTerraform(struct?: DataOpalGroupListResultsRemoteInfoAzureAdSecurityGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoAzureAdSecurityGroupToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoAzureAdSecurityGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoAzureAdSecurityGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoAzureAdSecurityGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoAzureAdSecurityGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoConnectorGroup {
}

export function dataOpalGroupListResultsRemoteInfoConnectorGroupToTerraform(struct?: DataOpalGroupListResultsRemoteInfoConnectorGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoConnectorGroupToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoConnectorGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoConnectorGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoConnectorGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoConnectorGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoDatabricksAccountGroup {
}

export function dataOpalGroupListResultsRemoteInfoDatabricksAccountGroupToTerraform(struct?: DataOpalGroupListResultsRemoteInfoDatabricksAccountGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoDatabricksAccountGroupToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoDatabricksAccountGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoDatabricksAccountGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoDatabricksAccountGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoDatabricksAccountGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoDevinGroup {
}

export function dataOpalGroupListResultsRemoteInfoDevinGroupToTerraform(struct?: DataOpalGroupListResultsRemoteInfoDevinGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoDevinGroupToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoDevinGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoDevinGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoDevinGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoDevinGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
}
export interface DataOpalGroupListResultsRemoteInfoDuoGroup {
}

export function dataOpalGroupListResultsRemoteInfoDuoGroupToTerraform(struct?: DataOpalGroupListResultsRemoteInfoDuoGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoDuoGroupToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoDuoGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoDuoGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoDuoGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoDuoGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoGithubTeam {
}

export function dataOpalGroupListResultsRemoteInfoGithubTeamToTerraform(struct?: DataOpalGroupListResultsRemoteInfoGithubTeam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoGithubTeamToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoGithubTeam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoGithubTeamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoGithubTeam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoGithubTeam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // team_slug - computed: true, optional: false, required: false
  public get teamSlug() {
    return this.getStringAttribute('team_slug');
  }
}
export interface DataOpalGroupListResultsRemoteInfoGitlabGroup {
}

export function dataOpalGroupListResultsRemoteInfoGitlabGroupToTerraform(struct?: DataOpalGroupListResultsRemoteInfoGitlabGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoGitlabGroupToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoGitlabGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoGitlabGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoGitlabGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoGitlabGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoGoogleGroup {
}

export function dataOpalGroupListResultsRemoteInfoGoogleGroupToTerraform(struct?: DataOpalGroupListResultsRemoteInfoGoogleGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoGoogleGroupToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoGoogleGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoGoogleGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoGoogleGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoGoogleGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoIncidentioOnCallSchedule {
}

export function dataOpalGroupListResultsRemoteInfoIncidentioOnCallScheduleToTerraform(struct?: DataOpalGroupListResultsRemoteInfoIncidentioOnCallSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoIncidentioOnCallScheduleToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoIncidentioOnCallSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoIncidentioOnCallScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoIncidentioOnCallSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoIncidentioOnCallSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schedule_id - computed: true, optional: false, required: false
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoLdapGroup {
}

export function dataOpalGroupListResultsRemoteInfoLdapGroupToTerraform(struct?: DataOpalGroupListResultsRemoteInfoLdapGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoLdapGroupToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoLdapGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoLdapGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoLdapGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoLdapGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoOktaGroup {
}

export function dataOpalGroupListResultsRemoteInfoOktaGroupToTerraform(struct?: DataOpalGroupListResultsRemoteInfoOktaGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoOktaGroupToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoOktaGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoOktaGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoOktaGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoOktaGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoOktaGroupRule {
}

export function dataOpalGroupListResultsRemoteInfoOktaGroupRuleToTerraform(struct?: DataOpalGroupListResultsRemoteInfoOktaGroupRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoOktaGroupRuleToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoOktaGroupRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoOktaGroupRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoOktaGroupRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoOktaGroupRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoPagerdutyOnCallSchedule {
}

export function dataOpalGroupListResultsRemoteInfoPagerdutyOnCallScheduleToTerraform(struct?: DataOpalGroupListResultsRemoteInfoPagerdutyOnCallSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoPagerdutyOnCallScheduleToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoPagerdutyOnCallSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoPagerdutyOnCallScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoPagerdutyOnCallSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoPagerdutyOnCallSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schedule_id - computed: true, optional: false, required: false
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoSnowflakeRole {
}

export function dataOpalGroupListResultsRemoteInfoSnowflakeRoleToTerraform(struct?: DataOpalGroupListResultsRemoteInfoSnowflakeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoSnowflakeRoleToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoSnowflakeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoSnowflakeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoSnowflakeRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoSnowflakeRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoTailscaleGroup {
}

export function dataOpalGroupListResultsRemoteInfoTailscaleGroupToTerraform(struct?: DataOpalGroupListResultsRemoteInfoTailscaleGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoTailscaleGroupToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoTailscaleGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoTailscaleGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoTailscaleGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoTailscaleGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfoWorkdayUserSecurityGroup {
}

export function dataOpalGroupListResultsRemoteInfoWorkdayUserSecurityGroupToTerraform(struct?: DataOpalGroupListResultsRemoteInfoWorkdayUserSecurityGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoWorkdayUserSecurityGroupToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfoWorkdayUserSecurityGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoWorkdayUserSecurityGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfoWorkdayUserSecurityGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfoWorkdayUserSecurityGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}
export interface DataOpalGroupListResultsRemoteInfo {
}

export function dataOpalGroupListResultsRemoteInfoToTerraform(struct?: DataOpalGroupListResultsRemoteInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRemoteInfoToHclTerraform(struct?: DataOpalGroupListResultsRemoteInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRemoteInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRemoteInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRemoteInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_directory_group - computed: true, optional: false, required: false
  private _activeDirectoryGroup = new DataOpalGroupListResultsRemoteInfoActiveDirectoryGroupOutputReference(this, "active_directory_group");
  public get activeDirectoryGroup() {
    return this._activeDirectoryGroup;
  }

  // aws_sso_group - computed: true, optional: false, required: false
  private _awsSsoGroup = new DataOpalGroupListResultsRemoteInfoAwsSsoGroupOutputReference(this, "aws_sso_group");
  public get awsSsoGroup() {
    return this._awsSsoGroup;
  }

  // azure_ad_microsoft_365_group - computed: true, optional: false, required: false
  private _azureAdMicrosoft365Group = new DataOpalGroupListResultsRemoteInfoAzureAdMicrosoft365GroupOutputReference(this, "azure_ad_microsoft_365_group");
  public get azureAdMicrosoft365Group() {
    return this._azureAdMicrosoft365Group;
  }

  // azure_ad_security_group - computed: true, optional: false, required: false
  private _azureAdSecurityGroup = new DataOpalGroupListResultsRemoteInfoAzureAdSecurityGroupOutputReference(this, "azure_ad_security_group");
  public get azureAdSecurityGroup() {
    return this._azureAdSecurityGroup;
  }

  // connector_group - computed: true, optional: false, required: false
  private _connectorGroup = new DataOpalGroupListResultsRemoteInfoConnectorGroupOutputReference(this, "connector_group");
  public get connectorGroup() {
    return this._connectorGroup;
  }

  // databricks_account_group - computed: true, optional: false, required: false
  private _databricksAccountGroup = new DataOpalGroupListResultsRemoteInfoDatabricksAccountGroupOutputReference(this, "databricks_account_group");
  public get databricksAccountGroup() {
    return this._databricksAccountGroup;
  }

  // devin_group - computed: true, optional: false, required: false
  private _devinGroup = new DataOpalGroupListResultsRemoteInfoDevinGroupOutputReference(this, "devin_group");
  public get devinGroup() {
    return this._devinGroup;
  }

  // duo_group - computed: true, optional: false, required: false
  private _duoGroup = new DataOpalGroupListResultsRemoteInfoDuoGroupOutputReference(this, "duo_group");
  public get duoGroup() {
    return this._duoGroup;
  }

  // github_team - computed: true, optional: false, required: false
  private _githubTeam = new DataOpalGroupListResultsRemoteInfoGithubTeamOutputReference(this, "github_team");
  public get githubTeam() {
    return this._githubTeam;
  }

  // gitlab_group - computed: true, optional: false, required: false
  private _gitlabGroup = new DataOpalGroupListResultsRemoteInfoGitlabGroupOutputReference(this, "gitlab_group");
  public get gitlabGroup() {
    return this._gitlabGroup;
  }

  // google_group - computed: true, optional: false, required: false
  private _googleGroup = new DataOpalGroupListResultsRemoteInfoGoogleGroupOutputReference(this, "google_group");
  public get googleGroup() {
    return this._googleGroup;
  }

  // incidentio_on_call_schedule - computed: true, optional: false, required: false
  private _incidentioOnCallSchedule = new DataOpalGroupListResultsRemoteInfoIncidentioOnCallScheduleOutputReference(this, "incidentio_on_call_schedule");
  public get incidentioOnCallSchedule() {
    return this._incidentioOnCallSchedule;
  }

  // ldap_group - computed: true, optional: false, required: false
  private _ldapGroup = new DataOpalGroupListResultsRemoteInfoLdapGroupOutputReference(this, "ldap_group");
  public get ldapGroup() {
    return this._ldapGroup;
  }

  // okta_group - computed: true, optional: false, required: false
  private _oktaGroup = new DataOpalGroupListResultsRemoteInfoOktaGroupOutputReference(this, "okta_group");
  public get oktaGroup() {
    return this._oktaGroup;
  }

  // okta_group_rule - computed: true, optional: false, required: false
  private _oktaGroupRule = new DataOpalGroupListResultsRemoteInfoOktaGroupRuleOutputReference(this, "okta_group_rule");
  public get oktaGroupRule() {
    return this._oktaGroupRule;
  }

  // pagerduty_on_call_schedule - computed: true, optional: false, required: false
  private _pagerdutyOnCallSchedule = new DataOpalGroupListResultsRemoteInfoPagerdutyOnCallScheduleOutputReference(this, "pagerduty_on_call_schedule");
  public get pagerdutyOnCallSchedule() {
    return this._pagerdutyOnCallSchedule;
  }

  // snowflake_role - computed: true, optional: false, required: false
  private _snowflakeRole = new DataOpalGroupListResultsRemoteInfoSnowflakeRoleOutputReference(this, "snowflake_role");
  public get snowflakeRole() {
    return this._snowflakeRole;
  }

  // tailscale_group - computed: true, optional: false, required: false
  private _tailscaleGroup = new DataOpalGroupListResultsRemoteInfoTailscaleGroupOutputReference(this, "tailscale_group");
  public get tailscaleGroup() {
    return this._tailscaleGroup;
  }

  // workday_user_security_group - computed: true, optional: false, required: false
  private _workdayUserSecurityGroup = new DataOpalGroupListResultsRemoteInfoWorkdayUserSecurityGroupOutputReference(this, "workday_user_security_group");
  public get workdayUserSecurityGroup() {
    return this._workdayUserSecurityGroup;
  }
}
export interface DataOpalGroupListResultsRequestConfigurationsCondition {
}

export function dataOpalGroupListResultsRequestConfigurationsConditionToTerraform(struct?: DataOpalGroupListResultsRequestConfigurationsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRequestConfigurationsConditionToHclTerraform(struct?: DataOpalGroupListResultsRequestConfigurationsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRequestConfigurationsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupListResultsRequestConfigurationsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRequestConfigurationsCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_ids - computed: true, optional: false, required: false
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }

  // role_remote_ids - computed: true, optional: false, required: false
  public get roleRemoteIds() {
    return cdktf.Fn.tolist(this.getListAttribute('role_remote_ids'));
  }
}
export interface DataOpalGroupListResultsRequestConfigurationsReviewerStages {
}

export function dataOpalGroupListResultsRequestConfigurationsReviewerStagesToTerraform(struct?: DataOpalGroupListResultsRequestConfigurationsReviewerStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRequestConfigurationsReviewerStagesToHclTerraform(struct?: DataOpalGroupListResultsRequestConfigurationsReviewerStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRequestConfigurationsReviewerStagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpalGroupListResultsRequestConfigurationsReviewerStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRequestConfigurationsReviewerStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // owner_ids - computed: true, optional: false, required: false
  public get ownerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('owner_ids'));
  }

  // require_admin_approval - computed: true, optional: false, required: false
  public get requireAdminApproval() {
    return this.getBooleanAttribute('require_admin_approval');
  }

  // require_manager_approval - computed: true, optional: false, required: false
  public get requireManagerApproval() {
    return this.getBooleanAttribute('require_manager_approval');
  }
}

export class DataOpalGroupListResultsRequestConfigurationsReviewerStagesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalGroupListResultsRequestConfigurationsReviewerStagesOutputReference {
    return new DataOpalGroupListResultsRequestConfigurationsReviewerStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpalGroupListResultsRequestConfigurations {
}

export function dataOpalGroupListResultsRequestConfigurationsToTerraform(struct?: DataOpalGroupListResultsRequestConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsRequestConfigurationsToHclTerraform(struct?: DataOpalGroupListResultsRequestConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsRequestConfigurationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpalGroupListResultsRequestConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResultsRequestConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_requests - computed: true, optional: false, required: false
  public get allowRequests() {
    return this.getBooleanAttribute('allow_requests');
  }

  // auto_approval - computed: true, optional: false, required: false
  public get autoApproval() {
    return this.getBooleanAttribute('auto_approval');
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataOpalGroupListResultsRequestConfigurationsConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }

  // extensions_duration_in_minutes - computed: true, optional: false, required: false
  public get extensionsDurationInMinutes() {
    return this.getNumberAttribute('extensions_duration_in_minutes');
  }

  // max_duration - computed: true, optional: false, required: false
  public get maxDuration() {
    return this.getNumberAttribute('max_duration');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // recommended_duration - computed: true, optional: false, required: false
  public get recommendedDuration() {
    return this.getNumberAttribute('recommended_duration');
  }

  // request_template_id - computed: true, optional: false, required: false
  public get requestTemplateId() {
    return this.getStringAttribute('request_template_id');
  }

  // require_mfa_to_request - computed: true, optional: false, required: false
  public get requireMfaToRequest() {
    return this.getBooleanAttribute('require_mfa_to_request');
  }

  // require_support_ticket - computed: true, optional: false, required: false
  public get requireSupportTicket() {
    return this.getBooleanAttribute('require_support_ticket');
  }

  // reviewer_stages - computed: true, optional: false, required: false
  private _reviewerStages = new DataOpalGroupListResultsRequestConfigurationsReviewerStagesList(this, "reviewer_stages", false);
  public get reviewerStages() {
    return this._reviewerStages;
  }
}

export class DataOpalGroupListResultsRequestConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalGroupListResultsRequestConfigurationsOutputReference {
    return new DataOpalGroupListResultsRequestConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpalGroupListResults {
}

export function dataOpalGroupListResultsToTerraform(struct?: DataOpalGroupListResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupListResultsToHclTerraform(struct?: DataOpalGroupListResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupListResultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpalGroupListResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupListResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_owner_id - computed: true, optional: false, required: false
  public get adminOwnerId() {
    return this.getStringAttribute('admin_owner_id');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // custom_request_notification - computed: true, optional: false, required: false
  public get customRequestNotification() {
    return this.getStringAttribute('custom_request_notification');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // extensions_duration_in_minutes - computed: true, optional: false, required: false
  public get extensionsDurationInMinutes() {
    return this.getNumberAttribute('extensions_duration_in_minutes');
  }

  // group_binding_id - computed: true, optional: false, required: false
  public get groupBindingId() {
    return this.getStringAttribute('group_binding_id');
  }

  // group_leader_user_ids - computed: true, optional: false, required: false
  public get groupLeaderUserIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_leader_user_ids'));
  }

  // group_type - computed: true, optional: false, required: false
  public get groupType() {
    return this.getStringAttribute('group_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_successful_sync - computed: true, optional: false, required: false
  private _lastSuccessfulSync = new DataOpalGroupListResultsLastSuccessfulSyncOutputReference(this, "last_successful_sync");
  public get lastSuccessfulSync() {
    return this._lastSuccessfulSync;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remote_info - computed: true, optional: false, required: false
  private _remoteInfo = new DataOpalGroupListResultsRemoteInfoOutputReference(this, "remote_info");
  public get remoteInfo() {
    return this._remoteInfo;
  }

  // remote_name - computed: true, optional: false, required: false
  public get remoteName() {
    return this.getStringAttribute('remote_name');
  }

  // request_configurations - computed: true, optional: false, required: false
  private _requestConfigurations = new DataOpalGroupListResultsRequestConfigurationsList(this, "request_configurations", false);
  public get requestConfigurations() {
    return this._requestConfigurations;
  }

  // require_mfa_to_approve - computed: true, optional: false, required: false
  public get requireMfaToApprove() {
    return this.getBooleanAttribute('require_mfa_to_approve');
  }

  // risk_sensitivity - computed: true, optional: false, required: false
  public get riskSensitivity() {
    return this.getStringAttribute('risk_sensitivity');
  }

  // risk_sensitivity_override - computed: true, optional: false, required: false
  public get riskSensitivityOverride() {
    return this.getStringAttribute('risk_sensitivity_override');
  }
}

export class DataOpalGroupListResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalGroupListResultsOutputReference {
    return new DataOpalGroupListResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/group_list opal_group_list}
*/
export class DataOpalGroupList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_group_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpalGroupList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpalGroupList to import
  * @param importFromId The id of the existing DataOpalGroupList that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/group_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpalGroupList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_group_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/group_list opal_group_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpalGroupListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpalGroupListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'opal_group_list',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupIds = config.groupIds;
    this._groupName = config.groupName;
    this._groupTypeFilter = config.groupTypeFilter;
    this._pageSize = config.pageSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // group_type_filter - computed: false, optional: true, required: false
  private _groupTypeFilter?: string; 
  public get groupTypeFilter() {
    return this.getStringAttribute('group_type_filter');
  }
  public set groupTypeFilter(value: string) {
    this._groupTypeFilter = value;
  }
  public resetGroupTypeFilter() {
    this._groupTypeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeFilterInput() {
    return this._groupTypeFilter;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataOpalGroupListResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupIds),
      group_name: cdktf.stringToTerraform(this._groupName),
      group_type_filter: cdktf.stringToTerraform(this._groupTypeFilter),
      page_size: cdktf.numberToTerraform(this._pageSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_type_filter: {
        value: cdktf.stringToHclTerraform(this._groupTypeFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
