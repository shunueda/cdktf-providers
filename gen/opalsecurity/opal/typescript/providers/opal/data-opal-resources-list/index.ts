// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpalResourcesListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ancestor resource id to filter by. Returns all resources that are descendants of the specified resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_list#ancestor_resource_id DataOpalResourcesList#ancestor_resource_id}
  */
  readonly ancestorResourceId?: string;
  /**
  * The pagination cursor value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_list#cursor DataOpalResourcesList#cursor}
  */
  readonly cursor?: string;
  /**
  * Number of results to return per page. Default is 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_list#page_size DataOpalResourcesList#page_size}
  */
  readonly pageSize?: number;
  /**
  * The parent resource id to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_list#parent_resource_id DataOpalResourcesList#parent_resource_id}
  */
  readonly parentResourceId?: string;
  /**
  * Filter resources by their remote id. This will return all resources that have a remote id that matches the provided remote id. Note that this requires resource_type_filter to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_list#remote_id DataOpalResourcesList#remote_id}
  */
  readonly remoteId?: string;
  /**
  * The resource ids to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_list#resource_ids DataOpalResourcesList#resource_ids}
  */
  readonly resourceIds?: string[];
  /**
  * Resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_list#resource_name DataOpalResourcesList#resource_name}
  */
  readonly resourceName?: string;
  /**
  * The resource type to filter by. Required when remote_id is provided. must be one of ["AWS_IAM_ROLE", "AWS_EC2_INSTANCE", "AWS_EKS_CLUSTER", "AWS_RDS_POSTGRES_CLUSTER", "AWS_RDS_POSTGRES_INSTANCE", "AWS_RDS_MYSQL_CLUSTER", "AWS_RDS_MYSQL_INSTANCE", "AWS_ACCOUNT", "AWS_SSO_PERMISSION_SET", "AWS_ORGANIZATIONAL_UNIT", "AZURE_MANAGEMENT_GROUP", "AZURE_RESOURCE_GROUP", "AZURE_SUBSCRIPTION", "AZURE_VIRTUAL_MACHINE", "AZURE_STORAGE_ACCOUNT", "AZURE_STORAGE_CONTAINER", "AZURE_SQL_SERVER", "AZURE_SQL_MANAGED_INSTANCE", "AZURE_SQL_DATABASE", "AZURE_SQL_MANAGED_DATABASE", "AZURE_USER_ASSIGNED_MANAGED_Identity", "AZURE_ENTRA_ID_ROLE", "AZURE_ENTERPRISE_APP", "CUSTOM", "CUSTOM_CONNECTOR", "DATABRICKS_ACCOUNT_SERVICE_PRINCIPAL", "GCP_ORGANIZATION", "GCP_BUCKET", "GCP_COMPUTE_INSTANCE", "GCP_FOLDER", "GCP_GKE_CLUSTER", "GCP_PROJECT", "GCP_CLOUD_SQL_POSTGRES_INSTANCE", "GCP_CLOUD_SQL_MYSQL_INSTANCE", "GCP_BIG_QUERY_DATASET", "GCP_BIG_QUERY_TABLE", "GCP_SERVICE_ACCOUNT", "GIT_HUB_REPO", "GIT_HUB_ORG_ROLE", "GIT_LAB_PROJECT", "GOOGLE_WORKSPACE_ROLE", "MONGO_INSTANCE", "MONGO_ATLAS_INSTANCE", "OKTA_APP", "OKTA_ROLE", "OPAL_ROLE", "OPAL_SCOPED_ROLE", "PAGERDUTY_ROLE", "TAILSCALE_SSH", "SALESFORCE_PERMISSION_SET", "SALESFORCE_PROFILE", "SALESFORCE_ROLE", "SNOWFLAKE_DATABASE", "SNOWFLAKE_SCHEMA", "SNOWFLAKE_TABLE", "WORKDAY_ROLE", "MYSQL_INSTANCE", "MARIADB_INSTANCE", "POSTGRES_INSTANCE", "TELEPORT_ROLE", "ILEVEL_ADVANCED_ROLE", "DATASTAX_ASTRA_ROLE", "COUPA_ROLE", "CURSOR_ORGANIZATION", "OPENAI_PLATFORM_PROJECT", "OPENAI_PLATFORM_SERVICE_ACCOUNT", "ANTHROPIC_WORKSPACE", "GIT_HUB_ORG", "ORACLE_FUSION_ROLE", "DEVIN_ORGANIZATION", "DEVIN_ROLE", "VAULT_SECRET", "VAULT_POLICY", "VAULT_OIDC_ROLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_list#resource_type_filter DataOpalResourcesList#resource_type_filter}
  */
  readonly resourceTypeFilter?: string;
}
export interface DataOpalResourcesListResultsLastSuccessfulSync {
}

export function dataOpalResourcesListResultsLastSuccessfulSyncToTerraform(struct?: DataOpalResourcesListResultsLastSuccessfulSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsLastSuccessfulSyncToHclTerraform(struct?: DataOpalResourcesListResultsLastSuccessfulSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsLastSuccessfulSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsLastSuccessfulSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsLastSuccessfulSync | undefined) {
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
export interface DataOpalResourcesListResultsRemoteInfoAnthropicWorkspace {
}

export function dataOpalResourcesListResultsRemoteInfoAnthropicWorkspaceToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAnthropicWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAnthropicWorkspaceToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAnthropicWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAnthropicWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAnthropicWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAnthropicWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAwsAccount {
}

export function dataOpalResourcesListResultsRemoteInfoAwsAccountToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAwsAccountToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAwsAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAwsAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAwsAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // organizational_unit_id - computed: true, optional: false, required: false
  public get organizationalUnitId() {
    return this.getStringAttribute('organizational_unit_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAwsEc2Instance {
}

export function dataOpalResourcesListResultsRemoteInfoAwsEc2InstanceToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsEc2Instance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAwsEc2InstanceToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsEc2Instance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAwsEc2InstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAwsEc2Instance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAwsEc2Instance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAwsEksCluster {
}

export function dataOpalResourcesListResultsRemoteInfoAwsEksClusterToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsEksCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAwsEksClusterToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsEksCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAwsEksClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAwsEksCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAwsEksCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAwsIamRole {
}

export function dataOpalResourcesListResultsRemoteInfoAwsIamRoleToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsIamRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAwsIamRoleToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsIamRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAwsIamRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAwsIamRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAwsIamRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAwsOrganizationalUnit {
}

export function dataOpalResourcesListResultsRemoteInfoAwsOrganizationalUnitToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAwsOrganizationalUnitToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAwsOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAwsOrganizationalUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAwsOrganizationalUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // organizational_unit_id - computed: true, optional: false, required: false
  public get organizationalUnitId() {
    return this.getStringAttribute('organizational_unit_id');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAwsPermissionSet {
}

export function dataOpalResourcesListResultsRemoteInfoAwsPermissionSetToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsPermissionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAwsPermissionSetToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsPermissionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAwsPermissionSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAwsPermissionSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAwsPermissionSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAwsRdsCluster {
}

export function dataOpalResourcesListResultsRemoteInfoAwsRdsClusterToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsRdsCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAwsRdsClusterToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsRdsCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAwsRdsClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAwsRdsCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAwsRdsCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAwsRdsInstance {
}

export function dataOpalResourcesListResultsRemoteInfoAwsRdsInstanceToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsRdsInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAwsRdsInstanceToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAwsRdsInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAwsRdsInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAwsRdsInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAwsRdsInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAzureEnterpriseApp {
}

export function dataOpalResourcesListResultsRemoteInfoAzureEnterpriseAppToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureEnterpriseApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAzureEnterpriseAppToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureEnterpriseApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAzureEnterpriseAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAzureEnterpriseApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAzureEnterpriseApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAzureEntraIdRole {
}

export function dataOpalResourcesListResultsRemoteInfoAzureEntraIdRoleToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureEntraIdRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAzureEntraIdRoleToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureEntraIdRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAzureEntraIdRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAzureEntraIdRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAzureEntraIdRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAzureManagementGroup {
}

export function dataOpalResourcesListResultsRemoteInfoAzureManagementGroupToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureManagementGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAzureManagementGroupToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureManagementGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAzureManagementGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAzureManagementGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAzureManagementGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAzureResourceGroup {
}

export function dataOpalResourcesListResultsRemoteInfoAzureResourceGroupToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureResourceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAzureResourceGroupToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureResourceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAzureResourceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAzureResourceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAzureResourceGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAzureSqlDatabase {
}

export function dataOpalResourcesListResultsRemoteInfoAzureSqlDatabaseToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureSqlDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAzureSqlDatabaseToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureSqlDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAzureSqlDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAzureSqlDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAzureSqlDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAzureSqlManagedDatabase {
}

export function dataOpalResourcesListResultsRemoteInfoAzureSqlManagedDatabaseToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureSqlManagedDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAzureSqlManagedDatabaseToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureSqlManagedDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAzureSqlManagedDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAzureSqlManagedDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAzureSqlManagedDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAzureSqlManagedInstance {
}

export function dataOpalResourcesListResultsRemoteInfoAzureSqlManagedInstanceToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureSqlManagedInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAzureSqlManagedInstanceToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureSqlManagedInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAzureSqlManagedInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAzureSqlManagedInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAzureSqlManagedInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAzureSqlServer {
}

export function dataOpalResourcesListResultsRemoteInfoAzureSqlServerToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureSqlServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAzureSqlServerToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureSqlServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAzureSqlServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAzureSqlServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAzureSqlServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAzureStorageAccount {
}

export function dataOpalResourcesListResultsRemoteInfoAzureStorageAccountToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureStorageAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAzureStorageAccountToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureStorageAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAzureStorageAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAzureStorageAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAzureStorageAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAzureStorageContainer {
}

export function dataOpalResourcesListResultsRemoteInfoAzureStorageContainerToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAzureStorageContainerToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAzureStorageContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAzureStorageContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAzureStorageContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAzureSubscription {
}

export function dataOpalResourcesListResultsRemoteInfoAzureSubscriptionToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAzureSubscriptionToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAzureSubscriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAzureSubscription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAzureSubscription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAzureUserAssignedManagedIdentity {
}

export function dataOpalResourcesListResultsRemoteInfoAzureUserAssignedManagedIdentityToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureUserAssignedManagedIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAzureUserAssignedManagedIdentityToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureUserAssignedManagedIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAzureUserAssignedManagedIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAzureUserAssignedManagedIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAzureUserAssignedManagedIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoAzureVirtualMachine {
}

export function dataOpalResourcesListResultsRemoteInfoAzureVirtualMachineToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureVirtualMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoAzureVirtualMachineToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoAzureVirtualMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoAzureVirtualMachineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoAzureVirtualMachine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoAzureVirtualMachine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoCoupaRole {
}

export function dataOpalResourcesListResultsRemoteInfoCoupaRoleToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoCoupaRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoCoupaRoleToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoCoupaRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoCoupaRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoCoupaRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoCoupaRole | undefined) {
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
export interface DataOpalResourcesListResultsRemoteInfoCursorOrganization {
}

export function dataOpalResourcesListResultsRemoteInfoCursorOrganizationToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoCursorOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoCursorOrganizationToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoCursorOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoCursorOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoCursorOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoCursorOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoCustomConnector {
}

export function dataOpalResourcesListResultsRemoteInfoCustomConnectorToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoCustomConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoCustomConnectorToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoCustomConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoCustomConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoCustomConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoCustomConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // can_have_usage_events - computed: true, optional: false, required: false
  public get canHaveUsageEvents() {
    return this.getBooleanAttribute('can_have_usage_events');
  }

  // remote_resource_id - computed: true, optional: false, required: false
  public get remoteResourceId() {
    return this.getStringAttribute('remote_resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoDatabricksAccountServicePrincipal {
}

export function dataOpalResourcesListResultsRemoteInfoDatabricksAccountServicePrincipalToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoDatabricksAccountServicePrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoDatabricksAccountServicePrincipalToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoDatabricksAccountServicePrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoDatabricksAccountServicePrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoDatabricksAccountServicePrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoDatabricksAccountServicePrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoDatastaxAstraRole {
}

export function dataOpalResourcesListResultsRemoteInfoDatastaxAstraRoleToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoDatastaxAstraRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoDatastaxAstraRoleToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoDatastaxAstraRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoDatastaxAstraRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoDatastaxAstraRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoDatastaxAstraRole | undefined) {
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
export interface DataOpalResourcesListResultsRemoteInfoDevinOrganization {
}

export function dataOpalResourcesListResultsRemoteInfoDevinOrganizationToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoDevinOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoDevinOrganizationToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoDevinOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoDevinOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoDevinOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoDevinOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoDevinRole {
}

export function dataOpalResourcesListResultsRemoteInfoDevinRoleToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoDevinRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoDevinRoleToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoDevinRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoDevinRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoDevinRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoDevinRole | undefined) {
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
export interface DataOpalResourcesListResultsRemoteInfoGcpBigQueryDataset {
}

export function dataOpalResourcesListResultsRemoteInfoGcpBigQueryDatasetToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpBigQueryDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoGcpBigQueryDatasetToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpBigQueryDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoGcpBigQueryDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoGcpBigQueryDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoGcpBigQueryDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_id - computed: true, optional: false, required: false
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoGcpBigQueryTable {
}

export function dataOpalResourcesListResultsRemoteInfoGcpBigQueryTableToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpBigQueryTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoGcpBigQueryTableToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpBigQueryTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoGcpBigQueryTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoGcpBigQueryTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoGcpBigQueryTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_id - computed: true, optional: false, required: false
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // table_id - computed: true, optional: false, required: false
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoGcpBucket {
}

export function dataOpalResourcesListResultsRemoteInfoGcpBucketToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoGcpBucketToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoGcpBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoGcpBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoGcpBucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_id - computed: true, optional: false, required: false
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoGcpComputeInstance {
}

export function dataOpalResourcesListResultsRemoteInfoGcpComputeInstanceToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpComputeInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoGcpComputeInstanceToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpComputeInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoGcpComputeInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoGcpComputeInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoGcpComputeInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoGcpFolder {
}

export function dataOpalResourcesListResultsRemoteInfoGcpFolderToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpFolder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoGcpFolderToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpFolder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoGcpFolderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoGcpFolder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoGcpFolder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoGcpGkeCluster {
}

export function dataOpalResourcesListResultsRemoteInfoGcpGkeClusterToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpGkeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoGcpGkeClusterToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpGkeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoGcpGkeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoGcpGkeCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoGcpGkeCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoGcpOrganization {
}

export function dataOpalResourcesListResultsRemoteInfoGcpOrganizationToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoGcpOrganizationToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoGcpOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoGcpOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoGcpOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoGcpProject {
}

export function dataOpalResourcesListResultsRemoteInfoGcpProjectToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoGcpProjectToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoGcpProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoGcpProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoGcpProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoGcpServiceAccount {
}

export function dataOpalResourcesListResultsRemoteInfoGcpServiceAccountToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoGcpServiceAccountToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoGcpServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoGcpServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoGcpServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoGcpSqlInstance {
}

export function dataOpalResourcesListResultsRemoteInfoGcpSqlInstanceToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpSqlInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoGcpSqlInstanceToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGcpSqlInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoGcpSqlInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoGcpSqlInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoGcpSqlInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoGithubOrg {
}

export function dataOpalResourcesListResultsRemoteInfoGithubOrgToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGithubOrg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoGithubOrgToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGithubOrg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoGithubOrgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoGithubOrg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoGithubOrg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // org_name - computed: true, optional: false, required: false
  public get orgName() {
    return this.getStringAttribute('org_name');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoGithubOrgRole {
}

export function dataOpalResourcesListResultsRemoteInfoGithubOrgRoleToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGithubOrgRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoGithubOrgRoleToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGithubOrgRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoGithubOrgRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoGithubOrgRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoGithubOrgRole | undefined) {
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
export interface DataOpalResourcesListResultsRemoteInfoGithubRepo {
}

export function dataOpalResourcesListResultsRemoteInfoGithubRepoToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGithubRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoGithubRepoToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGithubRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoGithubRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoGithubRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoGithubRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoGitlabProject {
}

export function dataOpalResourcesListResultsRemoteInfoGitlabProjectToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGitlabProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoGitlabProjectToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGitlabProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoGitlabProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoGitlabProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoGitlabProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoGoogleWorkspaceRole {
}

export function dataOpalResourcesListResultsRemoteInfoGoogleWorkspaceRoleToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGoogleWorkspaceRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoGoogleWorkspaceRoleToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoGoogleWorkspaceRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoGoogleWorkspaceRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoGoogleWorkspaceRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoGoogleWorkspaceRole | undefined) {
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
export interface DataOpalResourcesListResultsRemoteInfoIlevelAdvancedRole {
}

export function dataOpalResourcesListResultsRemoteInfoIlevelAdvancedRoleToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoIlevelAdvancedRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoIlevelAdvancedRoleToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoIlevelAdvancedRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoIlevelAdvancedRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoIlevelAdvancedRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoIlevelAdvancedRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoOktaApp {
}

export function dataOpalResourcesListResultsRemoteInfoOktaAppToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoOktaApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoOktaAppToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoOktaApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoOktaAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoOktaApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoOktaApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoOktaCustomRole {
}

export function dataOpalResourcesListResultsRemoteInfoOktaCustomRoleToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoOktaCustomRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoOktaCustomRoleToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoOktaCustomRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoOktaCustomRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoOktaCustomRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoOktaCustomRole | undefined) {
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
export interface DataOpalResourcesListResultsRemoteInfoOktaStandardRole {
}

export function dataOpalResourcesListResultsRemoteInfoOktaStandardRoleToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoOktaStandardRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoOktaStandardRoleToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoOktaStandardRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoOktaStandardRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoOktaStandardRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoOktaStandardRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_type - computed: true, optional: false, required: false
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoOpenaiPlatformProject {
}

export function dataOpalResourcesListResultsRemoteInfoOpenaiPlatformProjectToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoOpenaiPlatformProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoOpenaiPlatformProjectToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoOpenaiPlatformProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoOpenaiPlatformProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoOpenaiPlatformProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoOpenaiPlatformProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoOpenaiPlatformServiceAccount {
}

export function dataOpalResourcesListResultsRemoteInfoOpenaiPlatformServiceAccountToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoOpenaiPlatformServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoOpenaiPlatformServiceAccountToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoOpenaiPlatformServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoOpenaiPlatformServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoOpenaiPlatformServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoOpenaiPlatformServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoOracleFusionRole {
}

export function dataOpalResourcesListResultsRemoteInfoOracleFusionRoleToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoOracleFusionRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoOracleFusionRoleToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoOracleFusionRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoOracleFusionRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoOracleFusionRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoOracleFusionRole | undefined) {
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
export interface DataOpalResourcesListResultsRemoteInfoPagerdutyRole {
}

export function dataOpalResourcesListResultsRemoteInfoPagerdutyRoleToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoPagerdutyRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoPagerdutyRoleToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoPagerdutyRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoPagerdutyRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoPagerdutyRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoPagerdutyRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoSalesforcePermissionSet {
}

export function dataOpalResourcesListResultsRemoteInfoSalesforcePermissionSetToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoSalesforcePermissionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoSalesforcePermissionSetToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoSalesforcePermissionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoSalesforcePermissionSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoSalesforcePermissionSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoSalesforcePermissionSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // permission_set_id - computed: true, optional: false, required: false
  public get permissionSetId() {
    return this.getStringAttribute('permission_set_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoSalesforceProfile {
}

export function dataOpalResourcesListResultsRemoteInfoSalesforceProfileToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoSalesforceProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoSalesforceProfileToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoSalesforceProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoSalesforceProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoSalesforceProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoSalesforceProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // user_license_id - computed: true, optional: false, required: false
  public get userLicenseId() {
    return this.getStringAttribute('user_license_id');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoSalesforceRole {
}

export function dataOpalResourcesListResultsRemoteInfoSalesforceRoleToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoSalesforceRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoSalesforceRoleToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoSalesforceRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoSalesforceRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoSalesforceRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoSalesforceRole | undefined) {
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
export interface DataOpalResourcesListResultsRemoteInfoSnowflakeDatabase {
}

export function dataOpalResourcesListResultsRemoteInfoSnowflakeDatabaseToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoSnowflakeDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoSnowflakeDatabaseToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoSnowflakeDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoSnowflakeDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoSnowflakeDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoSnowflakeDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoSnowflakeSchema {
}

export function dataOpalResourcesListResultsRemoteInfoSnowflakeSchemaToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoSnowflakeSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoSnowflakeSchemaToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoSnowflakeSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoSnowflakeSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoSnowflakeSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoSnowflakeSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoSnowflakeTable {
}

export function dataOpalResourcesListResultsRemoteInfoSnowflakeTableToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoSnowflakeTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoSnowflakeTableToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoSnowflakeTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoSnowflakeTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoSnowflakeTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoSnowflakeTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoTailscaleSsh {
}

export function dataOpalResourcesListResultsRemoteInfoTailscaleSshToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoTailscaleSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoTailscaleSshToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoTailscaleSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoTailscaleSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoTailscaleSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoTailscaleSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_name - computed: true, optional: false, required: false
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoTeleportRole {
}

export function dataOpalResourcesListResultsRemoteInfoTeleportRoleToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoTeleportRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoTeleportRoleToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoTeleportRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoTeleportRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoTeleportRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoTeleportRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
}
export interface DataOpalResourcesListResultsRemoteInfoWorkdayRole {
}

export function dataOpalResourcesListResultsRemoteInfoWorkdayRoleToTerraform(struct?: DataOpalResourcesListResultsRemoteInfoWorkdayRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoWorkdayRoleToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfoWorkdayRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoWorkdayRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfoWorkdayRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfoWorkdayRole | undefined) {
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
export interface DataOpalResourcesListResultsRemoteInfo {
}

export function dataOpalResourcesListResultsRemoteInfoToTerraform(struct?: DataOpalResourcesListResultsRemoteInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRemoteInfoToHclTerraform(struct?: DataOpalResourcesListResultsRemoteInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRemoteInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRemoteInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRemoteInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anthropic_workspace - computed: true, optional: false, required: false
  private _anthropicWorkspace = new DataOpalResourcesListResultsRemoteInfoAnthropicWorkspaceOutputReference(this, "anthropic_workspace");
  public get anthropicWorkspace() {
    return this._anthropicWorkspace;
  }

  // aws_account - computed: true, optional: false, required: false
  private _awsAccount = new DataOpalResourcesListResultsRemoteInfoAwsAccountOutputReference(this, "aws_account");
  public get awsAccount() {
    return this._awsAccount;
  }

  // aws_ec2_instance - computed: true, optional: false, required: false
  private _awsEc2Instance = new DataOpalResourcesListResultsRemoteInfoAwsEc2InstanceOutputReference(this, "aws_ec2_instance");
  public get awsEc2Instance() {
    return this._awsEc2Instance;
  }

  // aws_eks_cluster - computed: true, optional: false, required: false
  private _awsEksCluster = new DataOpalResourcesListResultsRemoteInfoAwsEksClusterOutputReference(this, "aws_eks_cluster");
  public get awsEksCluster() {
    return this._awsEksCluster;
  }

  // aws_iam_role - computed: true, optional: false, required: false
  private _awsIamRole = new DataOpalResourcesListResultsRemoteInfoAwsIamRoleOutputReference(this, "aws_iam_role");
  public get awsIamRole() {
    return this._awsIamRole;
  }

  // aws_organizational_unit - computed: true, optional: false, required: false
  private _awsOrganizationalUnit = new DataOpalResourcesListResultsRemoteInfoAwsOrganizationalUnitOutputReference(this, "aws_organizational_unit");
  public get awsOrganizationalUnit() {
    return this._awsOrganizationalUnit;
  }

  // aws_permission_set - computed: true, optional: false, required: false
  private _awsPermissionSet = new DataOpalResourcesListResultsRemoteInfoAwsPermissionSetOutputReference(this, "aws_permission_set");
  public get awsPermissionSet() {
    return this._awsPermissionSet;
  }

  // aws_rds_cluster - computed: true, optional: false, required: false
  private _awsRdsCluster = new DataOpalResourcesListResultsRemoteInfoAwsRdsClusterOutputReference(this, "aws_rds_cluster");
  public get awsRdsCluster() {
    return this._awsRdsCluster;
  }

  // aws_rds_instance - computed: true, optional: false, required: false
  private _awsRdsInstance = new DataOpalResourcesListResultsRemoteInfoAwsRdsInstanceOutputReference(this, "aws_rds_instance");
  public get awsRdsInstance() {
    return this._awsRdsInstance;
  }

  // azure_enterprise_app - computed: true, optional: false, required: false
  private _azureEnterpriseApp = new DataOpalResourcesListResultsRemoteInfoAzureEnterpriseAppOutputReference(this, "azure_enterprise_app");
  public get azureEnterpriseApp() {
    return this._azureEnterpriseApp;
  }

  // azure_entra_id_role - computed: true, optional: false, required: false
  private _azureEntraIdRole = new DataOpalResourcesListResultsRemoteInfoAzureEntraIdRoleOutputReference(this, "azure_entra_id_role");
  public get azureEntraIdRole() {
    return this._azureEntraIdRole;
  }

  // azure_management_group - computed: true, optional: false, required: false
  private _azureManagementGroup = new DataOpalResourcesListResultsRemoteInfoAzureManagementGroupOutputReference(this, "azure_management_group");
  public get azureManagementGroup() {
    return this._azureManagementGroup;
  }

  // azure_resource_group - computed: true, optional: false, required: false
  private _azureResourceGroup = new DataOpalResourcesListResultsRemoteInfoAzureResourceGroupOutputReference(this, "azure_resource_group");
  public get azureResourceGroup() {
    return this._azureResourceGroup;
  }

  // azure_sql_database - computed: true, optional: false, required: false
  private _azureSqlDatabase = new DataOpalResourcesListResultsRemoteInfoAzureSqlDatabaseOutputReference(this, "azure_sql_database");
  public get azureSqlDatabase() {
    return this._azureSqlDatabase;
  }

  // azure_sql_managed_database - computed: true, optional: false, required: false
  private _azureSqlManagedDatabase = new DataOpalResourcesListResultsRemoteInfoAzureSqlManagedDatabaseOutputReference(this, "azure_sql_managed_database");
  public get azureSqlManagedDatabase() {
    return this._azureSqlManagedDatabase;
  }

  // azure_sql_managed_instance - computed: true, optional: false, required: false
  private _azureSqlManagedInstance = new DataOpalResourcesListResultsRemoteInfoAzureSqlManagedInstanceOutputReference(this, "azure_sql_managed_instance");
  public get azureSqlManagedInstance() {
    return this._azureSqlManagedInstance;
  }

  // azure_sql_server - computed: true, optional: false, required: false
  private _azureSqlServer = new DataOpalResourcesListResultsRemoteInfoAzureSqlServerOutputReference(this, "azure_sql_server");
  public get azureSqlServer() {
    return this._azureSqlServer;
  }

  // azure_storage_account - computed: true, optional: false, required: false
  private _azureStorageAccount = new DataOpalResourcesListResultsRemoteInfoAzureStorageAccountOutputReference(this, "azure_storage_account");
  public get azureStorageAccount() {
    return this._azureStorageAccount;
  }

  // azure_storage_container - computed: true, optional: false, required: false
  private _azureStorageContainer = new DataOpalResourcesListResultsRemoteInfoAzureStorageContainerOutputReference(this, "azure_storage_container");
  public get azureStorageContainer() {
    return this._azureStorageContainer;
  }

  // azure_subscription - computed: true, optional: false, required: false
  private _azureSubscription = new DataOpalResourcesListResultsRemoteInfoAzureSubscriptionOutputReference(this, "azure_subscription");
  public get azureSubscription() {
    return this._azureSubscription;
  }

  // azure_user_assigned_managed_identity - computed: true, optional: false, required: false
  private _azureUserAssignedManagedIdentity = new DataOpalResourcesListResultsRemoteInfoAzureUserAssignedManagedIdentityOutputReference(this, "azure_user_assigned_managed_identity");
  public get azureUserAssignedManagedIdentity() {
    return this._azureUserAssignedManagedIdentity;
  }

  // azure_virtual_machine - computed: true, optional: false, required: false
  private _azureVirtualMachine = new DataOpalResourcesListResultsRemoteInfoAzureVirtualMachineOutputReference(this, "azure_virtual_machine");
  public get azureVirtualMachine() {
    return this._azureVirtualMachine;
  }

  // coupa_role - computed: true, optional: false, required: false
  private _coupaRole = new DataOpalResourcesListResultsRemoteInfoCoupaRoleOutputReference(this, "coupa_role");
  public get coupaRole() {
    return this._coupaRole;
  }

  // cursor_organization - computed: true, optional: false, required: false
  private _cursorOrganization = new DataOpalResourcesListResultsRemoteInfoCursorOrganizationOutputReference(this, "cursor_organization");
  public get cursorOrganization() {
    return this._cursorOrganization;
  }

  // custom_connector - computed: true, optional: false, required: false
  private _customConnector = new DataOpalResourcesListResultsRemoteInfoCustomConnectorOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }

  // databricks_account_service_principal - computed: true, optional: false, required: false
  private _databricksAccountServicePrincipal = new DataOpalResourcesListResultsRemoteInfoDatabricksAccountServicePrincipalOutputReference(this, "databricks_account_service_principal");
  public get databricksAccountServicePrincipal() {
    return this._databricksAccountServicePrincipal;
  }

  // datastax_astra_role - computed: true, optional: false, required: false
  private _datastaxAstraRole = new DataOpalResourcesListResultsRemoteInfoDatastaxAstraRoleOutputReference(this, "datastax_astra_role");
  public get datastaxAstraRole() {
    return this._datastaxAstraRole;
  }

  // devin_organization - computed: true, optional: false, required: false
  private _devinOrganization = new DataOpalResourcesListResultsRemoteInfoDevinOrganizationOutputReference(this, "devin_organization");
  public get devinOrganization() {
    return this._devinOrganization;
  }

  // devin_role - computed: true, optional: false, required: false
  private _devinRole = new DataOpalResourcesListResultsRemoteInfoDevinRoleOutputReference(this, "devin_role");
  public get devinRole() {
    return this._devinRole;
  }

  // gcp_big_query_dataset - computed: true, optional: false, required: false
  private _gcpBigQueryDataset = new DataOpalResourcesListResultsRemoteInfoGcpBigQueryDatasetOutputReference(this, "gcp_big_query_dataset");
  public get gcpBigQueryDataset() {
    return this._gcpBigQueryDataset;
  }

  // gcp_big_query_table - computed: true, optional: false, required: false
  private _gcpBigQueryTable = new DataOpalResourcesListResultsRemoteInfoGcpBigQueryTableOutputReference(this, "gcp_big_query_table");
  public get gcpBigQueryTable() {
    return this._gcpBigQueryTable;
  }

  // gcp_bucket - computed: true, optional: false, required: false
  private _gcpBucket = new DataOpalResourcesListResultsRemoteInfoGcpBucketOutputReference(this, "gcp_bucket");
  public get gcpBucket() {
    return this._gcpBucket;
  }

  // gcp_compute_instance - computed: true, optional: false, required: false
  private _gcpComputeInstance = new DataOpalResourcesListResultsRemoteInfoGcpComputeInstanceOutputReference(this, "gcp_compute_instance");
  public get gcpComputeInstance() {
    return this._gcpComputeInstance;
  }

  // gcp_folder - computed: true, optional: false, required: false
  private _gcpFolder = new DataOpalResourcesListResultsRemoteInfoGcpFolderOutputReference(this, "gcp_folder");
  public get gcpFolder() {
    return this._gcpFolder;
  }

  // gcp_gke_cluster - computed: true, optional: false, required: false
  private _gcpGkeCluster = new DataOpalResourcesListResultsRemoteInfoGcpGkeClusterOutputReference(this, "gcp_gke_cluster");
  public get gcpGkeCluster() {
    return this._gcpGkeCluster;
  }

  // gcp_organization - computed: true, optional: false, required: false
  private _gcpOrganization = new DataOpalResourcesListResultsRemoteInfoGcpOrganizationOutputReference(this, "gcp_organization");
  public get gcpOrganization() {
    return this._gcpOrganization;
  }

  // gcp_project - computed: true, optional: false, required: false
  private _gcpProject = new DataOpalResourcesListResultsRemoteInfoGcpProjectOutputReference(this, "gcp_project");
  public get gcpProject() {
    return this._gcpProject;
  }

  // gcp_service_account - computed: true, optional: false, required: false
  private _gcpServiceAccount = new DataOpalResourcesListResultsRemoteInfoGcpServiceAccountOutputReference(this, "gcp_service_account");
  public get gcpServiceAccount() {
    return this._gcpServiceAccount;
  }

  // gcp_sql_instance - computed: true, optional: false, required: false
  private _gcpSqlInstance = new DataOpalResourcesListResultsRemoteInfoGcpSqlInstanceOutputReference(this, "gcp_sql_instance");
  public get gcpSqlInstance() {
    return this._gcpSqlInstance;
  }

  // github_org - computed: true, optional: false, required: false
  private _githubOrg = new DataOpalResourcesListResultsRemoteInfoGithubOrgOutputReference(this, "github_org");
  public get githubOrg() {
    return this._githubOrg;
  }

  // github_org_role - computed: true, optional: false, required: false
  private _githubOrgRole = new DataOpalResourcesListResultsRemoteInfoGithubOrgRoleOutputReference(this, "github_org_role");
  public get githubOrgRole() {
    return this._githubOrgRole;
  }

  // github_repo - computed: true, optional: false, required: false
  private _githubRepo = new DataOpalResourcesListResultsRemoteInfoGithubRepoOutputReference(this, "github_repo");
  public get githubRepo() {
    return this._githubRepo;
  }

  // gitlab_project - computed: true, optional: false, required: false
  private _gitlabProject = new DataOpalResourcesListResultsRemoteInfoGitlabProjectOutputReference(this, "gitlab_project");
  public get gitlabProject() {
    return this._gitlabProject;
  }

  // google_workspace_role - computed: true, optional: false, required: false
  private _googleWorkspaceRole = new DataOpalResourcesListResultsRemoteInfoGoogleWorkspaceRoleOutputReference(this, "google_workspace_role");
  public get googleWorkspaceRole() {
    return this._googleWorkspaceRole;
  }

  // ilevel_advanced_role - computed: true, optional: false, required: false
  private _ilevelAdvancedRole = new DataOpalResourcesListResultsRemoteInfoIlevelAdvancedRoleOutputReference(this, "ilevel_advanced_role");
  public get ilevelAdvancedRole() {
    return this._ilevelAdvancedRole;
  }

  // okta_app - computed: true, optional: false, required: false
  private _oktaApp = new DataOpalResourcesListResultsRemoteInfoOktaAppOutputReference(this, "okta_app");
  public get oktaApp() {
    return this._oktaApp;
  }

  // okta_custom_role - computed: true, optional: false, required: false
  private _oktaCustomRole = new DataOpalResourcesListResultsRemoteInfoOktaCustomRoleOutputReference(this, "okta_custom_role");
  public get oktaCustomRole() {
    return this._oktaCustomRole;
  }

  // okta_standard_role - computed: true, optional: false, required: false
  private _oktaStandardRole = new DataOpalResourcesListResultsRemoteInfoOktaStandardRoleOutputReference(this, "okta_standard_role");
  public get oktaStandardRole() {
    return this._oktaStandardRole;
  }

  // openai_platform_project - computed: true, optional: false, required: false
  private _openaiPlatformProject = new DataOpalResourcesListResultsRemoteInfoOpenaiPlatformProjectOutputReference(this, "openai_platform_project");
  public get openaiPlatformProject() {
    return this._openaiPlatformProject;
  }

  // openai_platform_service_account - computed: true, optional: false, required: false
  private _openaiPlatformServiceAccount = new DataOpalResourcesListResultsRemoteInfoOpenaiPlatformServiceAccountOutputReference(this, "openai_platform_service_account");
  public get openaiPlatformServiceAccount() {
    return this._openaiPlatformServiceAccount;
  }

  // oracle_fusion_role - computed: true, optional: false, required: false
  private _oracleFusionRole = new DataOpalResourcesListResultsRemoteInfoOracleFusionRoleOutputReference(this, "oracle_fusion_role");
  public get oracleFusionRole() {
    return this._oracleFusionRole;
  }

  // pagerduty_role - computed: true, optional: false, required: false
  private _pagerdutyRole = new DataOpalResourcesListResultsRemoteInfoPagerdutyRoleOutputReference(this, "pagerduty_role");
  public get pagerdutyRole() {
    return this._pagerdutyRole;
  }

  // salesforce_permission_set - computed: true, optional: false, required: false
  private _salesforcePermissionSet = new DataOpalResourcesListResultsRemoteInfoSalesforcePermissionSetOutputReference(this, "salesforce_permission_set");
  public get salesforcePermissionSet() {
    return this._salesforcePermissionSet;
  }

  // salesforce_profile - computed: true, optional: false, required: false
  private _salesforceProfile = new DataOpalResourcesListResultsRemoteInfoSalesforceProfileOutputReference(this, "salesforce_profile");
  public get salesforceProfile() {
    return this._salesforceProfile;
  }

  // salesforce_role - computed: true, optional: false, required: false
  private _salesforceRole = new DataOpalResourcesListResultsRemoteInfoSalesforceRoleOutputReference(this, "salesforce_role");
  public get salesforceRole() {
    return this._salesforceRole;
  }

  // snowflake_database - computed: true, optional: false, required: false
  private _snowflakeDatabase = new DataOpalResourcesListResultsRemoteInfoSnowflakeDatabaseOutputReference(this, "snowflake_database");
  public get snowflakeDatabase() {
    return this._snowflakeDatabase;
  }

  // snowflake_schema - computed: true, optional: false, required: false
  private _snowflakeSchema = new DataOpalResourcesListResultsRemoteInfoSnowflakeSchemaOutputReference(this, "snowflake_schema");
  public get snowflakeSchema() {
    return this._snowflakeSchema;
  }

  // snowflake_table - computed: true, optional: false, required: false
  private _snowflakeTable = new DataOpalResourcesListResultsRemoteInfoSnowflakeTableOutputReference(this, "snowflake_table");
  public get snowflakeTable() {
    return this._snowflakeTable;
  }

  // tailscale_ssh - computed: true, optional: false, required: false
  private _tailscaleSsh = new DataOpalResourcesListResultsRemoteInfoTailscaleSshOutputReference(this, "tailscale_ssh");
  public get tailscaleSsh() {
    return this._tailscaleSsh;
  }

  // teleport_role - computed: true, optional: false, required: false
  private _teleportRole = new DataOpalResourcesListResultsRemoteInfoTeleportRoleOutputReference(this, "teleport_role");
  public get teleportRole() {
    return this._teleportRole;
  }

  // workday_role - computed: true, optional: false, required: false
  private _workdayRole = new DataOpalResourcesListResultsRemoteInfoWorkdayRoleOutputReference(this, "workday_role");
  public get workdayRole() {
    return this._workdayRole;
  }
}
export interface DataOpalResourcesListResultsRequestConfigurationsCondition {
}

export function dataOpalResourcesListResultsRequestConfigurationsConditionToTerraform(struct?: DataOpalResourcesListResultsRequestConfigurationsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRequestConfigurationsConditionToHclTerraform(struct?: DataOpalResourcesListResultsRequestConfigurationsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRequestConfigurationsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsRequestConfigurationsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRequestConfigurationsCondition | undefined) {
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
export interface DataOpalResourcesListResultsRequestConfigurationsReviewerStages {
}

export function dataOpalResourcesListResultsRequestConfigurationsReviewerStagesToTerraform(struct?: DataOpalResourcesListResultsRequestConfigurationsReviewerStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRequestConfigurationsReviewerStagesToHclTerraform(struct?: DataOpalResourcesListResultsRequestConfigurationsReviewerStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRequestConfigurationsReviewerStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalResourcesListResultsRequestConfigurationsReviewerStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRequestConfigurationsReviewerStages | undefined) {
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

export class DataOpalResourcesListResultsRequestConfigurationsReviewerStagesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalResourcesListResultsRequestConfigurationsReviewerStagesOutputReference {
    return new DataOpalResourcesListResultsRequestConfigurationsReviewerStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpalResourcesListResultsRequestConfigurations {
}

export function dataOpalResourcesListResultsRequestConfigurationsToTerraform(struct?: DataOpalResourcesListResultsRequestConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsRequestConfigurationsToHclTerraform(struct?: DataOpalResourcesListResultsRequestConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsRequestConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalResourcesListResultsRequestConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsRequestConfigurations | undefined) {
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
  private _condition = new DataOpalResourcesListResultsRequestConfigurationsConditionOutputReference(this, "condition");
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
  private _reviewerStages = new DataOpalResourcesListResultsRequestConfigurationsReviewerStagesList(this, "reviewer_stages", false);
  public get reviewerStages() {
    return this._reviewerStages;
  }
}

export class DataOpalResourcesListResultsRequestConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalResourcesListResultsRequestConfigurationsOutputReference {
    return new DataOpalResourcesListResultsRequestConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpalResourcesListResultsTicketPropagation {
}

export function dataOpalResourcesListResultsTicketPropagationToTerraform(struct?: DataOpalResourcesListResultsTicketPropagation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsTicketPropagationToHclTerraform(struct?: DataOpalResourcesListResultsTicketPropagation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsTicketPropagationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesListResultsTicketPropagation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResultsTicketPropagation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled_on_grant - computed: true, optional: false, required: false
  public get enabledOnGrant() {
    return this.getBooleanAttribute('enabled_on_grant');
  }

  // enabled_on_revocation - computed: true, optional: false, required: false
  public get enabledOnRevocation() {
    return this.getBooleanAttribute('enabled_on_revocation');
  }

  // ticket_project_id - computed: true, optional: false, required: false
  public get ticketProjectId() {
    return this.getStringAttribute('ticket_project_id');
  }

  // ticket_provider - computed: true, optional: false, required: false
  public get ticketProvider() {
    return this.getStringAttribute('ticket_provider');
  }
}
export interface DataOpalResourcesListResults {
}

export function dataOpalResourcesListResultsToTerraform(struct?: DataOpalResourcesListResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesListResultsToHclTerraform(struct?: DataOpalResourcesListResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesListResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalResourcesListResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesListResults | undefined) {
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

  // ancestor_resource_ids - computed: true, optional: false, required: false
  public get ancestorResourceIds() {
    return this.getListAttribute('ancestor_resource_ids');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // custom_request_notification - computed: true, optional: false, required: false
  public get customRequestNotification() {
    return this.getStringAttribute('custom_request_notification');
  }

  // descendant_resource_ids - computed: true, optional: false, required: false
  public get descendantResourceIds() {
    return this.getListAttribute('descendant_resource_ids');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // extensions_duration_in_minutes - computed: true, optional: false, required: false
  public get extensionsDurationInMinutes() {
    return this.getNumberAttribute('extensions_duration_in_minutes');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_successful_sync - computed: true, optional: false, required: false
  private _lastSuccessfulSync = new DataOpalResourcesListResultsLastSuccessfulSyncOutputReference(this, "last_successful_sync");
  public get lastSuccessfulSync() {
    return this._lastSuccessfulSync;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_resource_id - computed: true, optional: false, required: false
  public get parentResourceId() {
    return this.getStringAttribute('parent_resource_id');
  }

  // remote_info - computed: true, optional: false, required: false
  private _remoteInfo = new DataOpalResourcesListResultsRemoteInfoOutputReference(this, "remote_info");
  public get remoteInfo() {
    return this._remoteInfo;
  }

  // request_configurations - computed: true, optional: false, required: false
  private _requestConfigurations = new DataOpalResourcesListResultsRequestConfigurationsList(this, "request_configurations", false);
  public get requestConfigurations() {
    return this._requestConfigurations;
  }

  // require_mfa_to_approve - computed: true, optional: false, required: false
  public get requireMfaToApprove() {
    return this.getBooleanAttribute('require_mfa_to_approve');
  }

  // require_mfa_to_connect - computed: true, optional: false, required: false
  public get requireMfaToConnect() {
    return this.getBooleanAttribute('require_mfa_to_connect');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // risk_sensitivity - computed: true, optional: false, required: false
  public get riskSensitivity() {
    return this.getStringAttribute('risk_sensitivity');
  }

  // risk_sensitivity_override - computed: true, optional: false, required: false
  public get riskSensitivityOverride() {
    return this.getStringAttribute('risk_sensitivity_override');
  }

  // ticket_propagation - computed: true, optional: false, required: false
  private _ticketPropagation = new DataOpalResourcesListResultsTicketPropagationOutputReference(this, "ticket_propagation");
  public get ticketPropagation() {
    return this._ticketPropagation;
  }
}

export class DataOpalResourcesListResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalResourcesListResultsOutputReference {
    return new DataOpalResourcesListResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_list opal_resources_list}
*/
export class DataOpalResourcesList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_resources_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpalResourcesList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpalResourcesList to import
  * @param importFromId The id of the existing DataOpalResourcesList that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpalResourcesList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_resources_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_list opal_resources_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpalResourcesListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpalResourcesListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'opal_resources_list',
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
    this._ancestorResourceId = config.ancestorResourceId;
    this._cursor = config.cursor;
    this._pageSize = config.pageSize;
    this._parentResourceId = config.parentResourceId;
    this._remoteId = config.remoteId;
    this._resourceIds = config.resourceIds;
    this._resourceName = config.resourceName;
    this._resourceTypeFilter = config.resourceTypeFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ancestor_resource_id - computed: false, optional: true, required: false
  private _ancestorResourceId?: string; 
  public get ancestorResourceId() {
    return this.getStringAttribute('ancestor_resource_id');
  }
  public set ancestorResourceId(value: string) {
    this._ancestorResourceId = value;
  }
  public resetAncestorResourceId() {
    this._ancestorResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorResourceIdInput() {
    return this._ancestorResourceId;
  }

  // cursor - computed: false, optional: true, required: false
  private _cursor?: string; 
  public get cursor() {
    return this.getStringAttribute('cursor');
  }
  public set cursor(value: string) {
    this._cursor = value;
  }
  public resetCursor() {
    this._cursor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorInput() {
    return this._cursor;
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
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

  // parent_resource_id - computed: false, optional: true, required: false
  private _parentResourceId?: string; 
  public get parentResourceId() {
    return this.getStringAttribute('parent_resource_id');
  }
  public set parentResourceId(value: string) {
    this._parentResourceId = value;
  }
  public resetParentResourceId() {
    this._parentResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentResourceIdInput() {
    return this._parentResourceId;
  }

  // previous - computed: true, optional: false, required: false
  public get previous() {
    return this.getStringAttribute('previous');
  }

  // remote_id - computed: false, optional: true, required: false
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // resource_ids - computed: false, optional: true, required: false
  private _resourceIds?: string[]; 
  public get resourceIds() {
    return this.getListAttribute('resource_ids');
  }
  public set resourceIds(value: string[]) {
    this._resourceIds = value;
  }
  public resetResourceIds() {
    this._resourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdsInput() {
    return this._resourceIds;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_type_filter - computed: false, optional: true, required: false
  private _resourceTypeFilter?: string; 
  public get resourceTypeFilter() {
    return this.getStringAttribute('resource_type_filter');
  }
  public set resourceTypeFilter(value: string) {
    this._resourceTypeFilter = value;
  }
  public resetResourceTypeFilter() {
    this._resourceTypeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeFilterInput() {
    return this._resourceTypeFilter;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataOpalResourcesListResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ancestor_resource_id: cdktf.stringToTerraform(this._ancestorResourceId),
      cursor: cdktf.stringToTerraform(this._cursor),
      page_size: cdktf.numberToTerraform(this._pageSize),
      parent_resource_id: cdktf.stringToTerraform(this._parentResourceId),
      remote_id: cdktf.stringToTerraform(this._remoteId),
      resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceIds),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_type_filter: cdktf.stringToTerraform(this._resourceTypeFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ancestor_resource_id: {
        value: cdktf.stringToHclTerraform(this._ancestorResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cursor: {
        value: cdktf.stringToHclTerraform(this._cursor),
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
      parent_resource_id: {
        value: cdktf.stringToHclTerraform(this._parentResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_id: {
        value: cdktf.stringToHclTerraform(this._remoteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type_filter: {
        value: cdktf.stringToHclTerraform(this._resourceTypeFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
